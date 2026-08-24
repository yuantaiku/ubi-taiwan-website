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

// 預覽站（GitHub Pages）不產生 sitemap。
// 原因：sitemap 內的網址一律以 site 設定為準，也就是正式網域 ubitaiwan.org，
// 但改版後的路徑在目前線上的站尚不存在。若預覽站的 sitemap 被爬蟲取得，
// 會對正式網域發出一批註定 404 的請求。預覽站本身已全頁 noindex，不需要 sitemap。
// 正式上線時移除 CI 的 PREVIEW_DEPLOY，sitemap 會自動恢復產生。
const isPreview = process.env.PREVIEW_DEPLOY === 'true';

// UBI Taiwan 官網：純靜態輸出，無任何前端框架依賴，維護門檻最低
export default defineConfig({
  site: 'https://ubitaiwan.org',
  output: 'static',
  integrations: isPreview
    ? []
    : [
        sitemap({
          filter: (page) => {
            const path = decodeURIComponent(new URL(page).pathname);
            return !redirectStubs.includes(path);
          },
        }),
      ],
});
