# AI 新知站（auto-blog）

網址：https://autopost.wwwang.tw　｜　Astro 靜態網站，GitHub Actions 部署到 GitHub Pages。

## 寫手須知：新增一篇文章

每篇文章一個資料夾，資料夾名稱＝slug：

```
src/content/posts/<slug>/
├── index.md   ← 文章內容
├── hero.jpg   ← 封面圖（必填），1200×630，用在列表卡片和社群分享（og:image）
└── banner.jpg ← 橫幅圖（選填），1920×640，放在文章頁最上方
```

`index.md` 開頭的 frontmatter：

```yaml
---
title: "文章標題"
date: 2026-10-08T09:00:00+08:00   # 發布時間（台北時間，務必加 +08:00）
updated: 2026-10-10T12:00:00+08:00 # 選填：更新舊文時才填
slug: openai-new-model            # 小寫英數與連字號，須與資料夾同名
categories: [new-models, ai-tools] # 至少一個，見下表
hero: ./hero.jpg
heroCredit: "圖片作者或來源名稱"       # 選填
heroCreditUrl: "https://..."          # 選填，填了會變成連結
banner: ./banner.jpg                  # 選填
bannerCredit: "橫幅圖來源"            # 選填
bannerCreditUrl: "https://..."        # 選填
description: "一到兩句摘要，會用在列表、搜尋結果與社群分享"
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

### 圖片規則
| 欄位 | 尺寸 | 用途 |
|---|---|---|
| `hero`（必填） | 1200×630 | 列表卡片、og:image；沒有 banner 時也會放在文章頁頂端 |
| `banner`（選填） | 1920×640（3:1） | 文章頁頂端的寬版橫幅 |

文章頁的頂端圖下方會顯示「圖片來源：…」。用了 banner 就顯示 `bannerCredit`，沒有 banner 就顯示 `heroCredit`。有填網址的話會變成連結，都沒填就不顯示。

### 排程發文
`date` 晚於建置時間的文章不會出現在網站上。Actions 每天台北時間 09:00、12:00、15:00、19:00 自動重建，時間到了的文章就會上線。所以可以先合併、排好時間。

### 規則
- 引用一律附來源連結；不全文翻譯別人的文章；查不到的寫「待查」。
- 首圖不放真實人物或品牌商標。
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

`src/content/posts/sample-welcome` 是示範文章，正式上線後可刪除。
