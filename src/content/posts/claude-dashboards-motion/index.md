---
title: "Claude 推 Dashboards 和 Motion：不會 SQL 也能做即時報表"
date: 2026-10-10T09:00:00+08:00
slug: claude-dashboards-motion
categories: [ai-tools]
hero: ./hero.webp
banner: ./banner.webp
description: "Claude 新增即時儀表板 Dashboards 和動畫解說 Motion，用白話提問就能做報表；Docs、Slides、Design 也結束 beta，免費版就能用。"
---

Anthropic 在美國時間 **2026 年 10 月 8 日**[宣布](https://claude.com/resources/articles/dashboards-and-motion)，Claude 新增兩個 beta 功能：能接公司資料、自動更新的 **Claude Dashboards（儀表板）**，以及把報告做成短動畫的 **Claude Motion**。同一天，Claude 的 **Docs、Slides、Design** 正式拿掉 beta 標籤，**所有方案（包含免費版）都能用**。

簡單說：以前想看公司數據，常常要開單請資料團隊幫忙，或自己寫 SQL 查詢；現在可以直接用白話問 Claude，讓它做出一張會自己更新的報表。

## 先看懂：哪個功能、哪個方案能用？

三組功能的開放程度不一樣，這是最容易搞混的地方。依[官方公告](https://claude.com/resources/articles/dashboards-and-motion)與[官方價格頁](https://claude.com/pricing)：

| 功能 | 狀態 | 誰能用 |
|---|---|---|
| Claude Dashboards 儀表板 | beta 測試版 | 付費方案（Pro、Max、Team、Enterprise） |
| Claude Motion 動畫解說 | beta 測試版 | 只有 Team、Enterprise |
| Claude Docs、Slides、Design | 正式版 | 所有方案，包含免費版 |

價格頁的個人方案比較表中，Free 版的 Dashboards 標示為「No」，Motion 在 Free、Pro、Max 都是「No」。另外，官方提醒 Enterprise 管理員：Dashboards 和 Motion **預設是關閉的**，要到「Organization settings > Artifacts」打開；Docs、Slides、Design 則會在 10 月 15 日預設開啟，也可以提前手動打開。

## Claude Dashboards：用白話問數據，報表自己更新

### 怎麼運作

依[官方說明](https://claude.com/resources/articles/dashboards-and-motion)，先把公司的資料平台接上 Claude，例如 Amazon Redshift、BigQuery、ClickHouse、Databricks 或 Snowflake，然後用一般的句子提問。Claude 會從資料裡找答案、做出儀表板，資料變動時儀表板也會跟著更新。它也能搭配其他連接器，例如請 Claude 把 Salesforce 裡的商機做成儀表板。

官方舉的提問例子是「這週的註冊人數跟上個月比如何」，也就是適合**快速、探索性**的問題。

### 不會 SQL，也能檢查它算得對不對

讓 AI 幫忙算數字，最擔心的是算錯還不知道。官方的設計是：

- **點任何一個數字**，就能看到背後用的查詢語法，或請 Claude 解釋它怎麼算的。
- **每張圖表都會標示**資料最後更新的時間。

也就是說，不用自己寫 SQL，但會寫或看得懂 SQL 的同事，仍然可以點開來核對。

### 不是要取代 BI 工具

官方說 Dashboards 是和既有的 BI（商業智慧）與分析工具**搭配使用**。問題需要更深入分析時，可以把儀表板直接送到 Amplitude、Grafana、Hex、Mixpanel、Omni、Perplexity、PostHog 或 Sigma 繼續做；Looker、monday.com 和 Tableau 官方標示為「即將支援」。

## Claude Motion：把報告變成 30 秒動畫，但不是 AI 影片

Motion 是把想法或報告做成短動畫。官方舉的例子包括：把季報變成全員大會用的 30 秒解說動畫、讓董事會簡報裡的圖表動起來，或做一段新客戶上手的產品導覽。做好之後可以在編輯器裡調整，或請 Claude 修改，最後**下載成 MP4 檔**。

要特別注意：**Motion 不是影片生成模型**。官方說明，它是由 Claude 寫程式碼，讓你的文字、圖表、形狀和圖片動起來，所以每個字、數字和時間點都能改；它**不使用影片生成模型**，因此不會產生 AI 生成的畫面，也不會出現 AI 生成的人物。

如果想再加工，可以把動畫開到 Adobe、Descript、HeyGen、Higgsfield、invideo、Luma AI 或 Runway；Canva 和 Captions 官方標示為「即將支援」。

## Docs、Slides、Design 結束 beta，免費版也能用

Docs（文件）、Slides（簡報）、Design（設計）是在 9 月 16 日[推出並加進每一段 Claude 對話](https://claude.com/blog/cowork-is-now-claude)。官方說，到目前為止用戶已經在 Claude 裡做出**超過 4,500 萬份**文件、簡報和設計，這次正式拿掉 beta 標籤。官方列出的更新包括：

- **團隊共同編輯**：團隊成員和 Claude 可以一起改同一份文件、簡報、設計或儀表板。
- **對外分享**：在管理員允許的前提下，投影片、設計、儀表板和動畫可以分享給組織外的人，或任何拿到連結的人。
- **匯出不跑版**：下載成 PowerPoint 和 PDF 會和編輯器裡看到的一樣，簡報也能直接存成可編輯的 Google 簡報。
- **手機也能改**：可以在 Claude 手機 App 裡修改文件、簡報或設計。
- **企業功能**：Artifacts 支援客戶自管加密金鑰（CMEK），管理員可以決定組織能用哪些範本。

## 用過 claude.ai/design 的人要注意：12 月 14 日關閉

Claude Design 一開始有自己的獨立網站 claude.ai/design。官方說，Design 從 9 月 16 日起也能在每段 Claude 對話中使用，兩個版本同時維護會拖慢修正，所以要把獨立網站併進 Claude。**獨立網站會保留到 12 月 14 日**，依[官方公告](https://claude.com/resources/articles/dashboards-and-motion)：

- **設計系統可以先搬**：在 Claude 的 Artifacts 頁面點「Migrate team design systems」，一次搬完組織裡所有設計系統，原本的版本在關閉前不受影響。
- **專案暫時不用動**：在獨立網站關閉前都能照常使用。
- **對話和留言要自己保存**：你和 Claude 的對話、專案上的留言都留在獨立版，關閉後就看不到；獨立版專案的公開連結也會一起失效。

詳細步驟可以看官方的[搬移說明](https://support.claude.com/en/articles/17440474)。

## 台灣讀者看這裡

- **台灣能不能用**：可以。台灣列在 Anthropic 的[支援地區清單](https://www.anthropic.com/supported-countries)中。官方公告沒有提到各功能的地區限制。
- **中文介面**：Anthropic 官方說明中心的[介面語言清單](https://support.claude.com/en/articles/10769299)（2026 年 8 月 6 日版）列了 11 種語言，沒有中文；中文介面何時正式列入，官方尚未公布。不過同一篇說明也寫到，不論介面設定成什麼語言，都可以用任何語言跟 Claude 對話。
- **價格（個人方案）**：[App Store 台灣區 Claude 頁面](https://apps.apple.com/tw/app/claude-by-anthropic/id6473753684)列出的 App 內購價格（2026 年 10 月 9 日查詢）為 Pro 每月 NT$690（年繳 NT$6,990）、Max 5x 每月 NT$3,990、Max 20x 每月 NT$7,990。想用 Dashboards，至少要 Pro；想用 Motion，個人方案都不行。
- **價格（團隊方案）**：依[官方價格頁](https://claude.com/pricing)，Team 方案適合 2 到 150 人，Standard 席位年繳每人每月 20 美元（約 NT$639）、月繳 25 美元（約 NT$799）；Premium 席位年繳每人每月 100 美元（約 NT$3,195）、月繳 125 美元（約 NT$3,994）。Enterprise 是每席每月 20 美元（約 NT$639，年繳）再加上依 API 費率計算的用量費。官方價格未含稅。換算依[臺灣銀行 2026 年 10 月 8 日 16:00 美元即期賣出牌告](https://rate.bot.com.tw/xrt/quote/2026-10-08/USD) 31.95 元，僅供概算，實際金額依刷卡銀行匯率與手續費而定。
- **跟台灣常見的報表工具比**：
  - **Google Data Studio（原名 Looker Studio）**：Google 在 2026 年 4 月把 Looker Studio [改回舊名 Data Studio](https://cloud.google.com/blog/products/data-analytics/looker-studio-is-data-studio)。依[官方文件](https://docs.cloud.google.com/looker/docs/studio-comparison)，Data Studio 是免費工具，有 Google 帳號就能用，以拖拉方式做報表，可接 1,000 個以上的資料來源；另有付費的 Data Studio Pro。
  - **Microsoft Power BI**：依[官方價格頁](https://www.microsoft.com/en-us/power-platform/products/power-bi/pricing)，製作報表用的 Power BI Desktop 可免費下載，要發佈、分享報表則需要 Power BI Pro，年繳每人每月 14 美元（約 NT$447）。
  - 兩者的做法都是自己拖拉欄位、設定圖表；Claude Dashboards 則是用白話提問，由 Claude 寫查詢、做圖表。Anthropic 自己的定位是「適合快速、探索性的問題」，需要深入分析時再交給 BI 工具。

## 小編觀點

Dashboards 對「有資料但不會 SQL」的人最有感：業務、行銷、主管想看個數字，不必再排隊等資料團隊。小編最肯定的是「每個數字都能點開看查詢」，讓結果可以被檢查，而不是只能相信 AI。但門檻要看清楚：它得先接上 BigQuery、Snowflake 這類資料平台，比較適合資料已經集中的團隊；資料還散在試算表裡的小公司，免費的 Data Studio 仍是務實選項。Motion 只開放 Team、Enterprise，個人用戶暫時用不到。對多數讀者來說，這次最實用的反而是 Docs、Slides、Design 免費版也能用；用過 claude.ai/design 的人，記得在 12 月 14 日前保存對話和留言。

## 參考來源

- [Claude 官方：Build live dashboards and animate explainers with Claude（2026-10-08）](https://claude.com/resources/articles/dashboards-and-motion)
- [Claude 官方價格頁](https://claude.com/pricing)
- [Claude 說明中心：Claude Design 搬移說明](https://support.claude.com/en/articles/17440474)
- [Claude 說明中心：How to use Claude in your preferred language](https://support.claude.com/en/articles/10769299)
- [Anthropic：Supported countries and regions](https://www.anthropic.com/supported-countries)
- [App Store 台灣區：Claude by Anthropic](https://apps.apple.com/tw/app/claude-by-anthropic/id6473753684)
- [臺灣銀行：2026-10-08 美元牌告匯率](https://rate.bot.com.tw/xrt/quote/2026-10-08/USD)
- [Google Cloud Blog：Looker Studio is Data Studio](https://cloud.google.com/blog/products/data-analytics/looker-studio-is-data-studio)
- [Google Cloud 文件：Looker 與 Data Studio 比較](https://docs.cloud.google.com/looker/docs/studio-comparison)
- [Microsoft：Power BI pricing](https://www.microsoft.com/en-us/power-platform/products/power-bi/pricing)
- [tbreak：Anthropic adds live dashboards and animated explainers to Claude](https://tbreak.com/claude-dashboards-motion-beta/)
