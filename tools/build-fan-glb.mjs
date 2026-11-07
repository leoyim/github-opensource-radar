/**
 * Build the 3D folding-fan model (glTF 2.0 / GLB).
 *   leaf  : sector r48 -> r122 bent over a shallow cone (ribs are the generatrices)
 *   ribs  : 18 of them; the outermost two are the wide edge ribs reaching the rim
 *   pivot : rivet head + axle + bundled tails
 * The GLB carries geometry only; the leaf artwork is painted at runtime on a
 * canvas so it can follow the palette.
 *   usage: node tools/build-fan-glb.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '../public/models/fan.glb');

/* geometry shared with SiteNav.astro */
const BONES = 18;
const R_IN = 48;
const R_OUT = 122;
const A0 = -78;
const A1 = 78;
const CONE = 0.17;
const EDGE_W = 5.4;
const RIB_T = 1.5;
const EDGE_T = 2.2;
const EDGE_INDEX = [0, BONES - 1];

const boneAngle = (i) => A0 + ((A1 - A0) * i) / (BONES - 1);
const boneWidth = (i) => {
  if (i === 0 || i === BONES - 1) return EDGE_W;
  const mid = (BONES - 1) / 2;
  const t = Math.abs(i - mid) / mid;
  return +(2.7 - 1.2 * t).toFixed(2);
};

/** fan coords -> 3D: pivot at origin, leaf faces +Z, +Y up */
const at = (deg, r) => {
  const a = (deg * Math.PI) / 180;
  return [r * Math.sin(a), r * Math.cos(a), CONE * r];
};

const F32 = 5126;
const U16 = 5123;
const ARRAY_BUFFER = 34962;
const ELEMENT_ARRAY_BUFFER = 34963;

class Builder {
  constructor() {
    this.json = {
      asset: { version: '2.0', generator: 'github-opensource-radar fan builder' },
      scene: 0,
      scenes: [{ nodes: [] }],
      nodes: [],
      meshes: [],
      materials: [],
      accessors: [],
      bufferViews: [],
      buffers: [],
    };
    this.chunks = [];
    this.length = 0;
  }

  view(data, target) {
    const bytes = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    const pad = (4 - (this.length % 4)) % 4;
    if (pad) {
      this.chunks.push(Buffer.alloc(pad));
      this.length += pad;
    }
    const offset = this.length;
    this.chunks.push(bytes);
    this.length += bytes.length;
    this.json.bufferViews.push({
      buffer: 0,
      byteOffset: offset,
      byteLength: bytes.length,
      ...(target ? { target } : {}),
    });
    return this.json.bufferViews.length - 1;
  }

  accessor(view, componentType, count, type, extra = {}) {
    this.json.accessors.push({ bufferView: view, componentType, count, type, ...extra });
    return this.json.accessors.length - 1;
  }

  material(name, opts = {}) {
    this.json.materials.push({
      name,
      doubleSided: true,
      pbrMetallicRoughness: {
        baseColorFactor: opts.color ?? [1, 1, 1, 1],
        metallicFactor: 0,
        roughnessFactor: opts.roughness ?? 0.85,
      },
    });
    return this.json.materials.length - 1;
  }

  mesh(name, { positions, normals, uvs, indices }, material) {
    const pos = positions instanceof Float32Array ? positions : new Float32Array(positions);
    const nor = normals instanceof Float32Array ? normals : new Float32Array(normals);
    const tex = uvs ? (uvs instanceof Float32Array ? uvs : new Float32Array(uvs)) : undefined;
    const idx = indices instanceof Uint16Array ? indices : new Uint16Array(indices);
    const pv = this.view(pos, ARRAY_BUFFER);
    const nv = this.view(nor, ARRAY_BUFFER);
    const uv = tex ? this.view(tex, ARRAY_BUFFER) : undefined;
    const iv = this.view(idx, ELEMENT_ARRAY_BUFFER);
    const min = [Infinity, Infinity, Infinity];
    const max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < pos.length; i += 3) {
      for (let k = 0; k < 3; k++) {
        min[k] = Math.min(min[k], pos[i + k]);
        max[k] = Math.max(max[k], pos[i + k]);
      }
    }
    const attrs = { POSITION: this.accessor(pv, F32, pos.length / 3, 'VEC3', { min, max }) };
    attrs.NORMAL = this.accessor(nv, F32, nor.length / 3, 'VEC3');
    if (uv) attrs.TEXCOORD_0 = this.accessor(uv, F32, tex.length / 2, 'VEC2');
    const indexAccessor = this.accessor(iv, U16, idx.length, 'SCALAR');
    this.json.meshes.push({
      name,
      primitives: [{ attributes: attrs, indices: indexAccessor, material }],
    });
    return this.json.meshes.length - 1;
  }

  node(name, mesh, translation = [0, 0, 0]) {
    this.json.nodes.push({ name, mesh, translation });
    return this.json.nodes.length - 1;
  }

  build() {
    const bin = Buffer.concat(this.chunks);
    this.json.buffers.push({ byteLength: bin.length });
    const jsonBuf = Buffer.from(JSON.stringify(this.json), 'utf8');
    const jsonPad = (4 - (jsonBuf.length % 4)) % 4;
    const binPad = (4 - (bin.length % 4)) % 4;
    const total = 12 + 8 + jsonBuf.length + jsonPad + 8 + bin.length + binPad;
    const out = Buffer.alloc(total);
    let o = 0;
    out.write('glTF', o, 'ascii');
    o += 4;
    out.writeUInt32LE(2, o);
    o += 4;
    out.writeUInt32LE(total, o);
    o += 4;
    out.writeUInt32LE(jsonBuf.length + jsonPad, o);
    o += 4;
    out.write('JSON', o, 'ascii');
    o += 4;
    jsonBuf.copy(out, o);
    o += jsonBuf.length;
    // the JSON chunk is padded with spaces (0x20), not NUL
    for (let i = 0; i < jsonPad; i++) out.writeUInt8(0x20, o + i);
    o += jsonPad;
    out.writeUInt32LE(bin.length + binPad, o);
    o += 4;
    out.write('BIN\0', o, 'ascii');
    o += 4;
    bin.copy(out, o);
    return out;
  }
}

/* ---------------- geometry ---------------- */
function buildLeaf() {
  const NA = 64; // steps along the arc
  const NR = 10; // steps along the radius
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const SVGW = 240;
  const SVGH = 166;
  for (let ia = 0; ia <= NA; ia++) {
    const a = A0 + (A1 - A0) * (ia / NA);
    for (let ir = 0; ir <= NR; ir++) {
      const r = R_IN + (R_OUT - R_IN) * (ir / NR);
      const p = at(a, r);
      positions.push(p[0], p[1], p[2]);
      const rad = a * (Math.PI / 180);
      const n = [Math.sin(rad) * CONE, Math.cos(rad) * CONE, -1];
      const len = Math.hypot(n[0], n[1], n[2]);
      normals.push(n[0] / len, n[1] / len, n[2] / len);
      uvs.push((120 + r * Math.sin(rad)) / SVGW, 1 - (150 - r * Math.cos(rad)) / SVGH);
    }
  }
  for (let ia = 0; ia < NA; ia++) {
    for (let ir = 0; ir < NR; ir++) {
      const p = ia * (NR + 1) + ir;
      const q = p + NR + 1;
      indices.push(p, q, p + 1, p + 1, q, q + 1);
    }
  }
  return { positions, normals, uvs, indices };
}

function buildRib(i) {
  const a = boneAngle(i);
  const edge = EDGE_INDEX.includes(i);
  const w = edge ? EDGE_W : boneWidth(i) * 1.1;
  const t = edge ? EDGE_T : RIB_T;
  const rEnd = edge ? R_OUT : R_IN;
  const root = at(a, 0);
  const tip = at(a, rEnd);
  const rad = a * (Math.PI / 180);
  const wide = [Math.cos(rad), -Math.sin(rad), 0];
  const perp = [-Math.sin(rad) * CONE, -Math.cos(rad) * CONE, 1];
  const nl = Math.hypot(perp[0], perp[1], perp[2]);
  const nrm = [perp[0] / nl, perp[1] / nl, perp[2] / nl];
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const corners = [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ];
  for (const [p, along] of [
    [root, 0],
    [tip, 1],
  ]) {
    for (const [cw, cn] of corners) {
      positions.push(
        p[0] + wide[0] * cw * (w / 2) + nrm[0] * cn * (t / 2),
        p[1] + wide[1] * cw * (w / 2) + nrm[1] * cn * (t / 2),
        p[2] + wide[2] * cw * (w / 2) + nrm[2] * cn * (t / 2),
      );
      const nx = wide[0] * cw + nrm[0] * cn;
      const ny = wide[1] * cw + nrm[1] * cn;
      const nz = wide[2] * cw + nrm[2] * cn;
      const l = Math.hypot(nx, ny, nz);
      normals.push(nx / l, ny / l, nz / l);
      uvs.push((cw + 1) / 2, along);
    }
  }
  const faces = [
    [0, 1, 2, 3],
    [7, 6, 5, 4],
    [4, 5, 1, 0],
    [6, 7, 3, 2],
    [4, 6, 7, 5],
    [0, 3, 2, 1],
  ];
  faces.forEach((f, fi) => {
    const [a0, a1, a2, a3] = f;
    if (fi % 2 === 0) indices.push(a0, a1, a2, a0, a2, a3);
    else indices.push(a0, a2, a1, a0, a3, a2);
  });
  return { positions, normals, uvs, indices };
}

function buildCylinder(radius, length, axis = 'z', segments = 24, taper = 1) {
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  for (let s = 0; s <= segments; s++) {
    const t = s / segments;
    const ang = t * Math.PI * 2;
    const c = Math.cos(ang);
    const sn = Math.sin(ang);
    for (const end of [0, 1]) {
      const r = radius * (end === 0 ? 1 : taper);
      let p;
      let n;
      if (axis === 'z') {
        p = [c * r, sn * r, (end === 0 ? -1 : 1) * (length / 2)];
        n = [c, sn, 0];
      } else {
        p = [c * r, (end === 0 ? -1 : 1) * (length / 2), sn * r];
        n = [c, 0, sn];
      }
      positions.push(p[0], p[1], p[2]);
      normals.push(n[0], n[1], n[2]);
      uvs.push(t, end);
    }
  }
  for (let s = 0; s < segments; s++) {
    const p = s * 2;
    indices.push(p, p + 1, p + 2, p + 1, p + 3, p + 2);
  }
  return { positions, normals, uvs, indices };
}

function buildBox(x0, y0, z0, x1, y1, z1) {
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const faces = [
    [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1]],
    [[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1]],
    [[x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0]],
    [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0]],
    [[x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0]],
    [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0]],
  ];
  faces.forEach((f, fi) => {
    const base = positions.length / 3;
    f.slice(0, 4).forEach((p, k) => {
      positions.push(p[0], p[1], p[2]);
      normals.push(f[4][0], f[4][1], f[4][2]);
      uvs.push(k === 1 || k === 2 ? 1 : 0, k > 1 ? 1 : 0);
    });
    if (fi % 2 === 0) indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    else indices.push(base, base + 2, base + 1, base, base + 3, base + 2);
  });
  return { positions, normals, uvs, indices };
}

/* ---------------- assemble ---------------- */
const b = new Builder();
const leafMat = b.material('fan-leaf', { color: [0.96, 0.9, 0.74, 1], roughness: 0.92 });
const ribMat = b.material('fan-rib', { color: [0.42, 0.26, 0.12, 1], roughness: 0.72 });
const nailMat = b.material('fan-nail', { color: [0.86, 0.72, 0.42, 1], roughness: 0.35 });

const nodes = [];
nodes.push(b.node('leaf', b.mesh('leaf', buildLeaf(), leafMat)));

for (let i = 0; i < BONES; i++) {
  const edge = EDGE_INDEX.includes(i);
  nodes.push(
    b.node(
      `rib-${i}`,
      b.mesh(`rib-${i}`, buildRib(i), ribMat),
      [0, 0, edge ? -1.1 : -0.6]
    )
  );
}

/* pivot hardware: rivet head, axle and the bundled tails below it */
nodes.push(b.node('nail', b.mesh('nail', buildCylinder(3.1, 2.6, 'z', 28), nailMat), [0, 0, 1.1]));
nodes.push(b.node('axle', b.mesh('axle', buildCylinder(1.15, 11, 'y', 16), nailMat), [0, -5.4, -0.4]));
nodes.push(b.node('knot', b.mesh('knot', buildCylinder(1.7, 1.6, 'y', 16), nailMat), [0, -11.2, -0.4]));
nodes.push(
  b.node('tails', b.mesh('tails', buildBox(-3.6, -7.2, -0.9, 3.6, 0.2, 0.9), ribMat), [0, 0, -0.4])
);

b.json.scenes[0].nodes = nodes;
const glb = b.build();
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, glb);
console.log(`wrote ${OUT} (${glb.length} bytes, ${nodes.length} nodes)`);
