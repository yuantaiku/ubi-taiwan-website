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
  pages/                              # 網站地圖見「資訊架構」一節
    index.astro                       # 首頁
    articles.astro                    # 認識基本收入 → 基本收入二三事
    life-freedom.astro                # 生活自由計畫（第二階段實驗；網址刻意不搬）
    support.astro                     # 捐款支持
    ubi/                              # 認識基本收入
      index.astro                     #   什麼是基本收入（定義、五大條件、誰在支持）
      world.astro                     #   全球進程（13 個案例）
      faq.astro                       #   基本收入大哉問（14 題）
      reading.astro                   #   延伸閱讀
    experiment/                       # 台灣的實驗
      index.astro                     #   實驗總覽（兩階段時間軸）
      pilot.astro                     #   第一階段：單親家庭實驗
    impact/                           # 我們的行動
      index.astro                     #   行動里程碑
      international/index.astro       #   國際交流列表 ← 新增場次加在這裡
      international/2025-brazil.astro
      international/2024-bath.astro
      international/2023-korea.astro
      annual/index.astro              #   年度報告列表 ← 新增年度加在這裡
      annual/2025.astro, 2024.astro
    about/                            # 關於我們
      index.astro                     #   願景與團隊
      press.astro                     #   媒體專區（媒體報導清單的正本）
      transparency.astro              #   捐款徵信
    （根目錄另有 9 個舊網址的轉址頁，見「網址變更」一節）
  data/                               # 頁面文案（自團隊 docx 逐字轉出，非人工轉錄）
    ubi-content.json                  #   五大條件、支持者、13 案例、14 問答、延伸閱讀
    pilot-content.json                #   第一階段實驗七個區塊
    brazil-content.json               #   2025 巴西 BIEN
  layouts/BaseLayout.astro, RedirectStub.astro
  components/Header.astro, Footer.astro
  styles/tokens.css     # Design tokens（單一來源）
  styles/global.css     # 全站基礎樣式
public/images/          # 自原站下載之圖片素材
design-system/
  DESIGN-SYSTEM.md      # 設計系統規範（可貼入 claude.ai/design）
  tokens.json           # W3C Design Tokens 格式
docs/                   # 內部文件，不進版控（見 .gitignore）
  content-specs/        # 團隊提供內容的規格檔（三個頁面）
  new-input/            # 團隊提供的原始 docx
references-info/
  生活自由計畫-網頁內容素材.md  # 參考資料擷錄整理（內容單一來源）
```

## 資訊架構

2026-08 改版重排。核心原則：**導覽只放「類別」，單筆紀錄一律收進列表頁。**

改版前每一筆紀錄（各年度報告、各場國際交流）都直接掛進下拉選單，
選單長度隨年份線性成長——「我們在做什麼」已有 6 項，每年還會再增加 2～3 項。
現在「國際交流」與「年度報告」各有一個列表頁，**新增年份請加進列表頁的陣列，不要再掛進 `Header.astro`**。

頂層維持 5 項 + 捐款 CTA：

| 導覽 | 路徑 | 內容 |
|---|---|---|
| 認識基本收入 | `/ubi/` | 什麼是基本收入、全球進程、大哉問、延伸閱讀、二三事 |
| 台灣的實驗 | `/experiment/` | 實驗總覽、第一階段、第二階段 |
| 我們的行動 | `/impact/` | 行動里程碑、國際交流、年度報告 |
| 關於我們 | `/about/` | 願景與團隊、媒體專區、捐款徵信 |
| 生活自由計畫 | `/life-freedom/` | 招募期間保留的頂層獨立入口 |

## 網址變更

改版重排了網址，舊網址皆保留 `noindex` 的 meta refresh 轉址頁（`src/layouts/RedirectStub.astro`）。
GitHub Pages 無伺服器端轉址，只能用這個方式；正式站若部署於支援 301 的環境，
應改以伺服器設定轉址並移除根目錄那 9 個轉址頁，同時清掉 `astro.config.mjs` 的 sitemap 排除清單。

| 舊網址 | 新網址 |
|---|---|
| `/qa/` | `/ubi/faq/` |
| `/pilot-program/` | `/experiment/pilot/` |
| `/impacts/` | `/impact/` |
| `/press/` | `/about/press/` |
| `/credit-donate/` | `/about/transparency/` |
| `/2024report-impact/` | `/impact/annual/2024/` |
| `/ubi-taiwan/2025report-impact/` | `/impact/annual/2025/` |
| `/2023-korea-basic-income-summit/` | `/impact/international/2023-korea/` |
| `/國際交流-2024英國巴斯bien高峰會/` | `/impact/international/2024-bath/` |

`/life-freedom/` 是唯一不搬的頁面：報名入口在 JUJI 官方活動頁，招募期間（至 2026/08/31）
可能有外部連結指入，改網址風險過高。


## 與原站的差異備註

- 內容自 ubitaiwan.org/zh 原站移植；網站地圖已於 2026-08 重排，見上方「資訊架構」。
- 「基本收入二三事」列表卡片連回原站文章頁（部落格文章本文未搬遷）。
- 「捐款徵信」各月份明細由協會後台維護，頁面連回原站明細。
- 部分素材尚未到位：紀錄片截圖、首映會照片、夥伴 logo、名人頭像。缺漏清單見各頁規格檔的「開發待辦」表。
- 捐款金流連結沿用原站 neticrm 系統。

## 部署

### 預覽站（現行）

Push 到 `main` 分支即自動部署至 GitHub Pages：

- 預覽網址：https://yuantaiku.github.io/ubi-taiwan-website/
- 預覽站帶有 `noindex`（不會被搜尋引擎收錄），並由 CI 自動改寫子路徑。
- 流程見 `.github/workflows/deploy.yml`。

### 正式上線（未來）

正式站部署於網域根目錄（ubitaiwan.org）時：`npm run build` 產出 `dist/` 直接部署即可，
原始碼皆以根路徑撰寫，無需改寫；記得移除 CI 中的 `PREVIEW_DEPLOY` 環境變數以解除 noindex。
