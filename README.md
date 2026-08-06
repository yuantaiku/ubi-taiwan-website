# UBI Taiwan 官方網站（Astro）

以 [Astro](https://astro.build) 打造的 UBI Taiwan 官網：純靜態輸出、零前端框架依賴，維護門檻最低，適合 NGO 團隊接手。

## 快速開始

```bash
npm install
npm run dev      # 開發模式 http://localhost:4321
npm run build    # 產出靜態網站至 dist/
npm run preview  # 預覽 build 結果
```

## 專案結構

```
src/
  pages/                              # 網站地圖與 ubitaiwan.org/zh 一致
    index.astro                       # 首頁
    pilot-program.astro               # 實驗計畫
    articles.astro                    # 了解 UBI → 基本收入二三事
    qa.astro                          # 了解 UBI → 常見問答
    ubi-taiwan/2025report-impact.astro  # 我們在做什麼 → 2025年度報告書
    2024report-impact.astro           # 我們在做什麼 → 2024年度報告書
    國際交流-2024英國巴斯bien高峰會.astro  # 我們在做什麼 → 國際交流 2024
    2023-korea-basic-income-summit.astro  # 我們在做什麼 → 國際交流 2023
    impacts.astro                     # 我們在做什麼 → 行動里程碑
    about.astro                       # 關於我們
    support.astro                     # 捐款支持
    credit-donate.astro               # 捐款徵信
    life-freedom.astro                # 生活自由計畫（新頁面，內容取自 references-info）
  layouts/BaseLayout.astro
  components/Header.astro, Footer.astro
  styles/tokens.css     # Design tokens（單一來源）
  styles/global.css     # 全站基礎樣式
public/images/          # 自原站下載之圖片素材
design-system/
  DESIGN-SYSTEM.md      # 設計系統規範（可貼入 claude.ai/design）
  tokens.json           # W3C Design Tokens 格式
docs/
  生活自由計畫-設計說明.md  # 新頁面設計決策文件
  image-prompts.md      # ChatGPT 圖像生成 prompts（英文）
references-info/
  生活自由計畫-網頁內容素材.md  # 參考資料擷錄整理（內容單一來源）
```

## 與原站的差異備註

- 內容與網站地圖依 ubitaiwan.org/zh 原站移植，僅 Navigation 新增「生活自由計畫」。
- 「基本收入二三事」列表卡片連回原站文章頁（部落格文章本文未搬遷）。
- 「捐款徵信」各月份明細由協會後台維護，頁面連回原站明細。
- 實驗計畫頁三張說明截圖因原站伺服器重新導向異常無法下載，僅保留文字。
- 捐款金流連結沿用原站 neticrm 系統。

## 部署

`npm run build` 後將 `dist/` 部署至任何靜態主機（GitHub Pages、Netlify、Cloudflare Pages 免費方案皆可）。
