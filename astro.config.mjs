// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 2026-08 改版後的舊網址，皆為 noindex 的 meta refresh 轉址頁，
// 不應出現在 sitemap（否則等同請搜尋引擎去爬明示不要收錄的頁面）。
const redirectStubs = [
  '/qa/',
  '/pilot-program/',
  '/impacts/',
  '/press/',
  '/credit-donate/',
  '/2024report-impact/',
  '/2023-korea-basic-income-summit/',
  '/ubi-taiwan/2025report-impact/',
  '/國際交流-2024英國巴斯bien高峰會/',
];

// UBI Taiwan 官網：純靜態輸出，無任何前端框架依賴，維護門檻最低
export default defineConfig({
  site: 'https://ubitaiwan.org',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = decodeURIComponent(new URL(page).pathname);
        return !redirectStubs.includes(path);
      },
    }),
  ],
});
