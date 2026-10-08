# AI 新知站（auto-blog）

網址：https://autopost.wwwang.tw　｜　Astro 靜態網站，GitHub Actions 部署到 GitHub Pages。

## 寫手須知：新增一篇文章

每篇文章一個資料夾，資料夾名稱＝slug：

```
src/content/posts/<slug>/
├── index.md    ← 文章內容
├── hero.webp   ← 封面圖（必填），1200×630，用在列表卡片和社群分享（og:image）
└── banner.webp ← 橫幅圖（選填），1920×640，放在文章頁最上方；沒有就用 hero
```

`index.md` 開頭的 frontmatter：

```yaml
---
title: "文章標題"
date: 2026-10-08T09:00:00+08:00   # 發布時間（台北時間，務必加 +08:00）
updated: 2026-10-10T12:00:00+08:00 # 選填：更新舊文時才填
slug: openai-new-model            # 小寫英數與連字號，須與資料夾同名
categories: [new-models, ai-tools] # 至少一個，見下表
hero: ./hero.webp
heroCredit: "OpenAI 官方新聞稿"        # 選填，用官方圖片時必填
heroCreditUrl: "https://..."          # 選填，必須是 http(s) 網址，填了會變成連結
banner: ./banner.webp                 # 選填
bannerCredit: "橫幅圖來源"            # 選填
bannerCreditUrl: "https://..."        # 選填，必須是 http(s) 網址
description: "一到兩句摘要，會用在列表、搜尋結果與社群分享"
author: xiaobian                      # 選填，預設 xiaobian（小編）
---
```

| 類別 | slug |
|---|---|
| 新模型發布 | `new-models` |
| AI 工具推薦 | `ai-tools` |
| 開源套件 | `open-source` |
| 產業動態 | `industry` |
| 入門教學 | `tutorials` |

類別定義在 `src/lib/config.ts`，新增類別請找網站工程。

### 作者
- `author` 是選填欄位，不填就是 `xiaobian`（顯示為「小編」）。目前只有這一位作者，一般**不用填**。
- 作者定義在 `src/lib/config.ts` 的 `AUTHORS`。填了清單以外的 id，建置會失敗。
- 文章標題下方會顯示「文／小編」，連到作者頁 `/author/xiaobian/`。作者頁會說明 AI 協作、來源查證和錯誤回報的方式，並列出小編的所有文章。

### 文末「小編觀點」
文章最後可以加一段 `## 小編觀點`，放小編的看法：

```markdown
## 小編觀點

（以下是小編的個人看法，不是官方說法。）
這次更新最實用的是免費版也能用，一般人不必升級就能試。不過功能還在逐步開放，建議先等官方說明再決定要不要改變使用習慣。
```

規則：
- **短**：2 到 4 句就好。
- **清楚標示是觀點**：開頭註明「以下是小編的個人看法」，用「我們認為」「建議」這類語氣，不要寫得像事實。
- **不加新的事實**：只能根據正文已經查證、附上來源的內容來評論；不要在這段放新的數字、日期或沒有來源的說法。

### 圖片規則
圖片一律用 `.webp`，和 `index.md` 放在同一個資料夾。

| 欄位 | 尺寸 | 用途 |
|---|---|---|
| `hero`（必填）`./hero.webp` | 1200×630 | 封面圖：列表卡片和 og:image（社群分享）；沒有 banner 時也放在文章頁頂端 |
| `banner`（選填）`./banner.webp` | 1920×640（3:1） | 文章頁頂端的寬版橫幅；沒填就用 hero |

**圖片來源欄位**

| 欄位 | 說明 |
|---|---|
| `heroCredit` / `heroCreditUrl` | hero 的來源名稱和網址 |
| `bannerCredit` / `bannerCreditUrl` | banner 的來源名稱和網址 |

- 什麼時候要填：用了官方新聞圖、產品截圖這類別人的圖片，一定要填來源名稱，最好也附上原始網址。來源寫在這些欄位就好，不要再寫在內文，否則頁面會出現兩次。
- 什麼時候不用填：美術用 AI 生成的圖片不必填。
- 網址必須是 `http://` 或 `https://` 開頭，不然建置會失敗。
- 文章頁頂端圖片下方會顯示「圖片來源：…」。用了 banner 就顯示 `bannerCredit`，沒有就顯示 `heroCredit`。有網址會變成連結，沒填就不顯示。

**圖片內容**
- hero 可以放文字：繁體中文短標題或重點數字。文字不能有錯字、要和內文一致，縮成手機寬度也要看得清楚。
- banner 不放任何文字。
- AI 生成的圖片不放真實人物或品牌商標，場景不要和最近幾篇文章重複。
- 官方圖片只能取自官方新聞室、官方公告頁或媒體資源包，照原樣使用：除了縮放或裁成規定尺寸，不加字、不改內容。官方圖本身帶的文字可以保留。一定要填 `heroCredit`／`heroCreditUrl`（banner 用 `bannerCredit`／`bannerCreditUrl`）。

### 排程發文
`date` 晚於建置時間的文章不會出現在網站上，等到時間之後的下一次重建才會上線，所以可以先合併、排好時間。

Actions 每天在台北時間 09、12、15、19 點的第 2、7、13 分自動重建，每個時段跑三次互為備援。文章大約會在排定時間後 15 分鐘內出現。GitHub 排程偶爾會延遲；急的話可以到 Actions 頁面手動執行「Deploy to GitHub Pages」（workflow_dispatch），或推一個新 commit 到 main。

### 規則
- 引用一律附來源連結；不全文翻譯別人的文章。
- 查不到來源的內容不要寫進文章；正式文章出現「待查」「待確認」「TBD」這類字眼不會合併。
- 圖片規則見上方「圖片內容」。
- 開 PR 後 Actions 會自動跑建置檢查，frontmatter 有錯會失敗。

## 自動產生的檔案
- `/content-index.json`：已發布文章清單（slug、title、date、updated、categories、description、url），供查重
- `/rss.xml`、`/sitemap-index.xml`

## 本機開發
```
npm ci
npm run dev     # 預覽
npm run build   # 建置到 dist/
```
GA4：設定環境變數 `PUBLIC_GA_ID=G-XXXX`（在 GitHub repo 的 Settings → Variables → Actions 設定）。
