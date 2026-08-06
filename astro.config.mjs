// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// UBI Taiwan 官網：純靜態輸出，無任何前端框架依賴，維護門檻最低
export default defineConfig({
  site: 'https://ubitaiwan.org',
  output: 'static',
  integrations: [sitemap()],
});
