# AI 新知站（auto-blog）

網址：https://autopost.wwwang.tw　｜　Astro 靜態網站，GitHub Actions 部署到 GitHub Pages。

## 寫手須知：新增一篇文章

每篇文章一個資料夾，資料夾名稱＝slug：

```
src/content/posts/<slug>/
├── index.md   ← 文章內容
└── hero.jpg   ← 首圖，1200×630（jpg/png/webp 皆可）
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
