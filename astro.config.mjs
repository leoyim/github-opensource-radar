import { defineConfig } from 'astro/config';

/**
 * 部署在自定义域名 osradar.leoyim.cn，因此 base 恒为根路径 '/'。
 * site 用于生成 canonical 与 og:url；未注入时（本地构建）不输出这两个标签，
 * 避免产物里出现占位域名。GitHub Actions 会注入真实值。
 */
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.SITE_BASE || '/',
  output: 'static',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
