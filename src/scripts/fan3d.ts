/**
 * 折扇的三维呈现：GLB 模型 + 自定义 GLSL 着色器。
 *   - 扇面贴图在运行时用画布现画（把页面里的那张 SVG 扇面内联成图片），
 *     所以换配色、换明暗时画面能跟着变。
 *   - 扇子挂在扇钉上，以扇钉为轴心前后轻摆；鼠标移到扇面上就定住不动。
 *   - 三维不可用（无 WebGL / 取不到模型）时，页面仍显示原来的 SVG 扇子。
 */
import type * as THREE_NS from 'three';

type Three = typeof THREE_NS;

const MODEL_URL = '/models/fan.glb';

/* 与 SiteNav.astro 一致：十八根骨、六根主骨、扇钉在原点 */
const BONES = 18;
const A0 = -78;
const A1 = 78;
const MAJORS = [1, 4, 7, 10, 13, 16];
const R_IN = 48;
/* 配色色钉落在扇面上：自枢轴量 78，在内弧之外、扇面中段，六枚沿主骨散开 */
const MARK_R = 78;
const CONE = 0.17;

/* 摆幅：来回十度 */
const SWAY = (10 * Math.PI) / 180;
/* 摆动周期（秒） */
const SWAY_PERIOD = 5.2;

const boneAngle = (i: number) => A0 + ((A1 - A0) * i) / (BONES - 1);
/** 扇面坐标 → 模型坐标：枢轴在原点，扇面朝 +Z，+Y 朝上 */
const fanPoint = (deg: number, r: number): [number, number, number] => {
  const a = (deg * Math.PI) / 180;
  return [r * Math.sin(a), r * Math.cos(a), CONE * r];
};

/* ---------- 把页面里的 SVG 扇面内联成可离屏绘制的图片 ---------- */
const STYLE_PROPS = [
  'fill',
  'stroke',
  'stroke-width',
  'stroke-opacity',
  'fill-opacity',
  'opacity',
  'stop-color',
  'font-family',
  'font-size',
  'font-weight',
  'font-style',
  'letter-spacing',
  'writing-mode',
  'text-orientation',
  'text-anchor',
  'dominant-baseline',
  'visibility',
];

function inlineSvg(source: SVGSVGElement): string {
  const clone = source.cloneNode(true) as SVGSVGElement;
  const from: Element[] = [source, ...Array.from(source.querySelectorAll('*'))];
  const to: Element[] = [clone, ...Array.from(clone.querySelectorAll('*'))];
  for (let i = 0; i < to.length; i++) {
    const cs = getComputedStyle(from[i]);
    for (const prop of STYLE_PROPS) {
      const value = cs.getPropertyValue(prop);
      if (value) to[i].setAttribute(prop, value);
    }
  }
  clone.setAttribute('width', '240');
  clone.setAttribute('height', '166');
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  return new XMLSerializer().serializeToString(clone);
}

async function paintLeaf(source: SVGSVGElement, scale = 4): Promise<HTMLCanvasElement> {
  const svg = inlineSvg(source);
  const img = new Image();
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  await img.decode();
  const canvas = document.createElement('canvas');
  canvas.width = 240 * scale;
  canvas.height = 166 * scale;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2d context unavailable');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas;
}

/* ---------- 自定义 GLSL ---------- */
/* 扇面：贴图 × 侧光 + 边缘光，纸的厚度感来自 rim */
export const LEAF_VERT = `
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vUv = uv;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPosW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const LEAF_FRAG = `
precision highp float;
uniform sampler2D uMap;
uniform vec3 uLightDir;
uniform vec3 uAmbient;
uniform float uSheen;
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vec4 tex = texture2D(uMap, vUv);
  if (tex.a < 0.02) discard;
  vec3 n = normalize(vNormalW);
  vec3 l = normalize(uLightDir);
  float diff = max(dot(n, l), 0.0);
  float wrap = max(dot(n, l) * 0.45 + 0.55, 0.0);
  vec3 v = normalize(cameraPosition - vPosW);
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  vec3 col = tex.rgb * (uAmbient + wrap * 0.42 + diff * 0.34) + rim * uSheen;
  gl_FragColor = vec4(col, tex.a);
}
`;

/* 扇骨：横向一条亮带做出竹面圆磨过的光泽，末端一点高光 */
export const RIB_VERT = `
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vUv = uv;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPosW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const RIB_FRAG = `
precision highp float;
uniform vec3 uDark;
uniform vec3 uLight;
uniform vec3 uLightDir;
uniform float uGloss;
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  float across = clamp(vUv.x, 0.0, 1.0);
  /* 横截面按圆弧过渡：中间起一道亮带，两侧沉下去，像磨圆了的竹面 */
  float round = sin(across * 3.14159265);
  vec3 base = mix(uDark, uLight, 0.16 + 0.6 * round);
  vec3 n = normalize(vNormalW);
  vec3 l = normalize(uLightDir);
  float diff = max(dot(n, l), 0.0);
  vec3 v = normalize(cameraPosition - vPosW);
  float spec = pow(max(dot(reflect(-l, n), v), 0.0), 26.0) * uGloss;
  vec3 col = base * (0.52 + 0.5 * diff) + spec;
  gl_FragColor = vec4(col, 1.0);
}
`;

/* 扇钉与扇轴：铜面，靠高光与暗边交代圆柱 */
export const METAL_FRAG = `
precision highp float;
uniform vec3 uBase;
uniform vec3 uLightDir;
varying vec2 vUv;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vec3 n = normalize(vNormalW);
  vec3 l = normalize(uLightDir);
  vec3 v = normalize(cameraPosition - vPosW);
  float diff = max(dot(n, l), 0.0);
  float spec = pow(max(dot(reflect(-l, n), v), 0.0), 42.0);
  float rim = pow(1.0 - max(dot(n, v), 0.0), 2.0);
  vec3 col = uBase * (0.42 + 0.5 * diff) + spec * 0.75 + rim * 0.18;
  gl_FragColor = vec4(col, 1.0);
}
`;

export interface Fan3DHandle {
  setActive(on: boolean): void;
  /** 合扇：扇子向中轴收拢（0 = 展开，1 = 合拢） */
  setFold(on: boolean): void;
  dispose(): void;
}

/* 读页面上的主题变量，扇子跟着配色走 */
function paletteOf(picker: HTMLElement) {
  const cs = getComputedStyle(picker);
  const get = (name: string, fallback: string) => cs.getPropertyValue(name).trim() || fallback;
  return {
    ink: get('--fan-ink', '#43331a'),
    boneDark: get('--fan-bone-dark', '#6b431e'),
    fleck: get('--fan-bone-fleck', '#c9a462'),
    gold: get('--fan-gold-solid', '#eccf8e'),
  };
}

export async function initFan3D(options: {
  plate: HTMLElement;
  svg: SVGSVGElement;
  picker: HTMLElement;
  buttons: HTMLElement[];
}): Promise<Fan3DHandle | null> {
  const { plate, svg, picker, buttons } = options;
  let THREE: Three;
  let GLTFLoader: typeof import('three/examples/jsm/loaders/GLTFLoader.js').GLTFLoader;
  try {
    THREE = await import('three');
    ({ GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js'));
  } catch (err) {
    return null;
  }
  if (!plate || !svg) return null;

  let renderer: InstanceType<Three['WebGLRenderer']>;
  try {
    const canvas = document.createElement('canvas');
    canvas.className = 'fan-canvas';
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (err) {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  /* 画布放在最底层：六枚色钉（HTML 按钮）仍要浮在扇面之上 */
  plate.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 1, 4000);
  const group = new THREE.Group();
  scene.add(group);

  const texture = new THREE.CanvasTexture(document.createElement('canvas'));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;

  const lightDir = new THREE.Vector3(-0.45, 0.6, 0.66).normalize();
  const leafMat = new THREE.ShaderMaterial({
    vertexShader: LEAF_VERT,
    fragmentShader: LEAF_FRAG,
    transparent: true,
    side: THREE.DoubleSide,
    uniforms: {
      uMap: { value: texture },
      uLightDir: { value: lightDir },
      uAmbient: { value: new THREE.Color(0.72, 0.7, 0.66) },
      uSheen: { value: 0.16 },
    },
  });
  const ribMat = new THREE.ShaderMaterial({
    vertexShader: RIB_VERT,
    fragmentShader: RIB_FRAG,
    side: THREE.DoubleSide,
    uniforms: {
      uDark: { value: new THREE.Color('#6b431e') },
      uLight: { value: new THREE.Color('#c9a462') },
      uLightDir: { value: lightDir },
      uGloss: { value: 0.5 },
    },
  });
  const metalMat = new THREE.ShaderMaterial({
    vertexShader: RIB_VERT,
    fragmentShader: METAL_FRAG,
    side: THREE.DoubleSide,
    uniforms: {
      uBase: { value: new THREE.Color('#eccf8e') },
      uLightDir: { value: lightDir },
    },
  });

  /* 模型：GLB 里的扇面、扇骨、扇钉分别换上自定义着色器 */
  const gltf = await new Promise<any>((resolve, reject) => {
    new GLTFLoader().load(MODEL_URL, resolve, undefined, reject);
  }).catch((err: unknown) => {
    console.warn('[fan3d] model load failed', err);
    return null;
  });
  if (!gltf) {
    renderer.domElement.remove();
    return null;
  }
  gltf.scene.traverse((obj: any) => {
    if (!obj.isMesh) return;
    const name = obj.name || '';
    if (name === 'leaf') obj.material = leafMat;
    else if (name === 'nail' || name === 'axle' || name === 'knot') obj.material = metalMat;
    else obj.material = ribMat;
  });
  group.add(gltf.scene);
  plate.classList.add('is-3d');
  svg.setAttribute('aria-hidden', 'true');

  /* 相机：让整把扇子正好落在版面里 */
  const target = new THREE.Vector3(0, 54, 0);
  const fit = () => {
    const w = plate.clientWidth;
    const h = plate.clientHeight;
    camera.aspect = w / Math.max(1, h);
    const vFov = (camera.fov * Math.PI) / 180;
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
    /* 扇沿横向到 122，竖向从扇钉下沿到扇顶约 70：先满足横向 */
    const need = Math.max(122 / Math.tan(hFov / 2), 72 / Math.tan(vFov / 2));
    camera.position.set(0, target.y, need * 1.02);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };
  fit();
  const resize = new ResizeObserver(fit);
  resize.observe(plate);

  /* 贴图与配色：换色、换明暗都重画一次 */
  const repaint = async () => {
    const canvas = await paintLeaf(svg);
    texture.image = canvas;
    texture.needsUpdate = true;
    const p = paletteOf(picker);
    ribMat.uniforms.uDark.value.set(p.boneDark);
    ribMat.uniforms.uLight.value.set(p.fleck);
    metalMat.uniforms.uBase.value.set(p.gold);
    leafMat.uniforms.uAmbient.value.set(p.ink).lerp(new THREE.Color('#ffffff'), 0.82);
  };
  await repaint();

  let pending = 0;
  const schedule = () => {
    window.clearTimeout(pending);
    pending = window.setTimeout(() => {
      void repaint();
    }, 80);
  };
  const observer = new MutationObserver(schedule);
  observer.observe(svg, { attributes: true, childList: true, characterData: true, subtree: true });
  const rootObserver = new MutationObserver(schedule);
  rootObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-palette'] });

  /* 鼠标停在扇面上就定住：射线打到扇子即冻结 */
  const ray = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let frozen = false;
  const onMove = (ev: PointerEvent) => {
    const rect = plate.getBoundingClientRect();
    pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    ray.setFromCamera(pointer, camera);
    const hit = ray.intersectObject(gltf.scene, true).length > 0;
    if (hit !== frozen) frozen = hit;
    plate.classList.toggle('is-hover', frozen);
  };
  const onLeave = () => {
    frozen = false;
    plate.classList.remove('is-hover');
  };
  plate.addEventListener('pointermove', onMove);
  plate.addEventListener('pointerleave', onLeave);

  /* 渲染循环：绕扇钉前后摆，停在指针上不动 */
  let raf = 0;
  let running = false;
  let t0 = performance.now();
  /* 合扇进度：0 全开，1 合拢 */
  let foldTarget = 0;
  let foldNow = 0;
  const tmp = new THREE.Vector3();
  const project = (p: [number, number, number]) => {
    tmp.set(p[0], p[1], p[2]).applyMatrix4(group.matrixWorld).project(camera);
    return [(tmp.x * 0.5 + 0.5) * plate.clientWidth, (-tmp.y * 0.5 + 0.5) * plate.clientHeight];
  };
  const placeButtons = () => {
    MAJORS.forEach((bi, k) => {
      const btn = buttons[k];
      if (!btn) return;
      const a = boneAngle(bi);
      const p0 = project([0, 0, 0]);
      const p1 = project(fanPoint(a, MARK_R));
      /* 屏幕上的「正上方」为基准，顺时针为正 */
      const deg = (Math.atan2(p1[0] - p0[0], -(p1[1] - p0[1])) * 180) / Math.PI;
      const len = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
      const w = 18;
      const h = Math.max(24, len);
      btn.style.left = '0px';
      btn.style.top = '0px';
      btn.style.bottom = 'auto';
      btn.style.width = `${w}px`;
      btn.style.height = `${h.toFixed(0)}px`;
      /* transform-origin 在底边中点，位移要减掉这个偏移，骨根才落在枢轴上 */
      btn.style.transform = `translate(${(p0[0] - w / 2).toFixed(1)}px, ${(p0[1] - h).toFixed(1)}px) rotate(${deg.toFixed(2)}deg)`;
    });
  };
  const frame = () => {
    if (!running) return;
    const t = (performance.now() - t0) / 1000;
    if (!frozen) group.rotation.x = Math.sin((t / SWAY_PERIOD) * Math.PI * 2) * SWAY;
    /* 合扇：扇面向中轴收拢，像折扇一把把叠起来 */
    foldNow += (foldTarget - foldNow) * 0.055;
    if (Math.abs(foldTarget - foldNow) < 0.002) foldNow = foldTarget;
    group.scale.set(1 - foldNow * 0.955, 1 - foldNow * 0.07, 1);
    group.rotation.z = foldNow * 0.05;
    group.updateMatrixWorld();
    placeButtons();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  };
  const setActive = (on: boolean) => {
    if (on === running) return;
    running = on;
    if (on) {
      t0 = performance.now();
      raf = requestAnimationFrame(frame);
    } else {
      cancelAnimationFrame(raf);
    }
  };

  return {
    setActive,
    setFold(on: boolean) {
      foldTarget = on ? 1 : 0;
    },
    dispose() {
      setActive(false);
      resize.disconnect();
      observer.disconnect();
      rootObserver.disconnect();
      plate.removeEventListener('pointermove', onMove);
      plate.removeEventListener('pointerleave', onLeave);
      renderer.dispose();
    },
  };
}
