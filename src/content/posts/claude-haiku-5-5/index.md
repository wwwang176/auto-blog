---
title: "Claude Haiku 5.5 登場：Anthropic 最快最便宜的小模型，平均成本比 Haiku 4.5 低約 75%"
date: 2026-10-08T12:00:00+08:00
updated: 2026-10-08T15:39:00+08:00
slug: claude-haiku-5-5
categories: [new-models]
hero: ./hero.webp
banner: ./banner.webp
description: "Claude Haiku 5.5 主打快又便宜，平均執行成本比 Haiku 4.5 低約 75%，也是第一個可調「努力程度」的 Haiku。同場加映：Sonnet 5.5 快取讀取降價一半，Max、Team 訂閱戶每月送 API 額度。"
---

Anthropic 在美國時間 **2026 年 10 月 7 日**[發表了 Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)。Haiku 是 Claude 家族裡最小、最快的一型，這次官方形容新版是「我們推出過最便宜、最快、也最有能力的小模型」。同一天，Anthropic 也把中型模型 Sonnet 5.5 的部分價格砍半，並宣布 Max 和 Team 訂閱戶每個月可以領 API 額度。

## Haiku 5.5 是什麼？

Claude 目前有大中小幾種模型：大的（Opus、Fable）最聰明但最貴，中的 Sonnet 比較平衡，小的 Haiku 則主打**快和便宜**。

依[官方公告](https://www.anthropic.com/claude-haiku-5-5)，Haiku 5.5 適合這類「量很大、但每件事不難」的工作：

- 整理摘要、把長對話壓縮成重點
- 分類、查資料庫
- 即時客服、操作瀏覽器這類講究反應速度的任務
- 在寫程式時當大模型的「小幫手」（子代理），負責查找、整理等零碎工作

官方說它是 Anthropic **目前速度最快的模型**（以各模型的標準速度比較；Opus 開啟「快速模式」時會比它快）。

## 便宜多少？

官方說，**平均跑同樣的工作，Haiku 5.5 比 Haiku 4.5 便宜約 75%**。

它的計價有個特別的地方：**看你一次丟進去的內容長度**，以 10 萬 token 為界（token 是 AI 計算文字量的單位）。依 [Anthropic 官方價目表](https://platform.claude.com/docs/en/about-claude/pricing)，每 100 萬 token 的價格如下（美元）：

| 項目 | Haiku 5.5（10 萬 token 以內） | Haiku 5.5（超過 10 萬 token） | Haiku 4.5 |
|---|---|---|---|
| 輸入 | 0.10 | 0.50 | 1.00 |
| 輸出 | 0.50 | 2.50 | 5.00 |
| 快取讀取 | 0.01 | 0.05 | 0.10 |

簡單說，短的請求單價只有 Haiku 4.5 的**十分之一**，長的請求是**一半**。官方說，舊版 Haiku 約有九成請求都在 10 萬 token 以內。

那為什麼平均是「便宜約 75%」而不是 90%？官方註明，Haiku 5.5 換了新的斷字方式，[同樣的文字會被算成大約多 30% 的 token](https://platform.claude.com/docs/en/models/haiku-5-5/whats-new-haiku-5-5)，75% 這個數字已經把新斷字方式的影響算進去了。

## 第一個能調「努力程度」的 Haiku

以前用 Haiku，就是求快求省，沒什麼好調的。Haiku 5.5 是**第一個可以設定「努力程度」（effort）的 Haiku**，跟 Anthropic 其他模型一樣，使用者可以自己決定要省錢還是要更聰明。

依[官方開發文件](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-haiku-5-5)，努力程度分五級：

- **low**：最便宜、最快，適合聊天、簡單又大量的請求
- **medium**：預設值，大部分工作從這裡開始
- **high**：適合知識型工作、較長的任務、需要嚴格照指示做的情境
- **xhigh、max**：想得最多、回答也更長，成本跟著變高；官方建議這時也拿 Sonnet 5.5 比一比，看哪個划算

努力程度越高，AI「先想一想」的時間越多，答案品質可能更好，但也更花錢、更慢。

## 實力如何？

依官方公布的測試成績，Haiku 5.5 比 Haiku 4.5 進步很多。例如在測試「AI 能不能自己操作電腦完成多步驟任務」的 OSWorld 2.1（離線子集）上，Haiku 5.5 拿到 **72.4%**，Haiku 4.5 只有 15.7%；中型的 Sonnet 5.5 是 83.9%。官方表格也列了 OpenAI 的 GPT-6 Luna 對照，同一項測試是 48.9%（GPT-6 Luna 可參考我們之前的[〈OpenAI Decisions API 公開測試〉](/posts/openai-decisions-api-gpt-6-luna/)）。

不過官方也說得很清楚：**複雜的寫程式任務，還是 Sonnet 5.5 和 Opus 5.5 比較適合**。Haiku 5.5 的強項是範圍明確、數量很多的工作，這些工作以前用 Claude 可能太貴，現在比較負擔得起。

（以上成績都是 Anthropic 自己公布的數字。）

## 同場加映 1：Sonnet 5.5 快取讀取降價一半

「快取」是指把常用的固定內容（例如很長的說明文件）先存起來，之後重複使用時就不用每次都付全額。

依[官方公告](https://www.anthropic.com/claude-haiku-5-5)，從 10 月 7 日起，**Sonnet 5.5 的快取讀取價格從每 100 萬 token 0.20 美元降到 0.10 美元**，砍了一半。因為快取讀取占模型 token 用量的一大部分，官方估計 Sonnet 5.5 在多數 AI 代理（會自己連續做很多步驟的 AI）工作上**整體約便宜 20%**。Sonnet 5.5 的一般輸入、輸出價格則維持每 100 萬 token 2 美元和 10 美元。

## 同場加映 2：Max、Team 訂閱戶每月送 API 額度

這點跟付費訂閱 Claude 的人比較有關。官方說這週會陸續開放，**Max 和 Team 方案的訂閱戶每個月可以領一筆 API 額度**，拿來自己寫程式、做工具或 AI 代理：

| 方案 | 每月 API 額度 |
|---|---|
| Max 5x | 100 美元 |
| Max 20x | 200 美元 |
| Team | 每個標準席位 20 美元、每個進階席位 100 美元，全隊合併計算，上限 500 美元 |

依[官方說明中心](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans)，幾個要注意的地方：

- **免費、Pro 和 Enterprise 方案沒有**這項額度。
- 要訂閱滿 **7 天**才能領；要在網頁版 claude.ai 的帳單設定裡，把方案連結到一個 Claude Console 組織。
- 額度**每個帳單週期更新、用不完不能累積**。
- 可以用在 Claude API、Console 的 Playground、Claude Managed Agents 和 Agent SDK，**不能用在互動式的 Claude Code**，也不能抵用 App 裡超出方案上限的額外用量。
- 這筆額度跟你在 Claude App 裡的使用上限是分開的，**不會改變原本的用量限制**。

## 跟一般人有什麼關係？

- **如果你是開發者或小團隊**：Haiku 5.5 讓「大量、簡單」的 AI 工作便宜很多，例如自動分類客服信、整理大量文件摘要。開發者可以用模型名稱 `claude-haiku-5-5` 開始使用，官方說它已在 Claude 平台以及 Amazon、Google Cloud、Microsoft 的雲端服務上架。
- **如果你有訂 Max 或 Team**：每月 API 額度要在 claude.ai 的帳單設定連結 Console 組織才能領，用不完不會累積。
- **如果你用 Claude Code**：官方 [Claude Code v2.1.293 版本更新紀錄](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)寫明，Haiku 5.5 已成為 Anthropic API 上預設的 Haiku 模型。

## 台灣讀者看這裡

價格換算依臺灣銀行 2026 年 10 月 8 日美元即期賣出牌告，1 美元約 31.9 新台幣（[臺灣銀行牌告匯率](https://rate.bot.com.tw/xrt/quote/ltm/USD)），僅供概算，實際刷卡金額依發卡銀行匯率與手續費而定。

- **台灣能不能用**：可以。台灣同時列在 Anthropic [支援地區清單](https://www.anthropic.com/supported-countries)的 API 與 Claude.ai 兩部分。
- **中文介面**：用中文跟 Claude 對話一直都可以。介面語言方面，媒體 10 月初[報導](https://pcrookie.com/claude-desktop-traditional-chinese-interface-2026/)網頁版與桌面版已出現「中文（繁體）」選項，但 Anthropic 官方說明中心的[介面語言清單](https://support.claude.com/en/articles/10769299-how-to-use-claude-in-your-preferred-language)目前還沒列出中文，正式上線消息官方尚未公布。
- **API 價格換算**：Haiku 5.5 在 10 萬 token 以內，每 100 萬 token 輸入約 NT$3.2、輸出約 NT$16；超過 10 萬 token 時，輸入約 NT$16、輸出約 NT$80。對照 Haiku 4.5 輸入約 NT$32、輸出約 NT$160。
- **訂閱價格**：[App Store 台灣區 Claude 頁面](https://apps.apple.com/tw/app/claude-by-anthropic/id6473753684)列出的 App 內購價格（2026/10/8 查詢）為 Pro 每月 NT$690、Max 5x 每月 NT$3,990、Max 20x 每月 NT$7,990。Max 5x 每月送的 100 美元 API 額度約 NT$3,190，Max 20x 的 200 美元約 NT$6,380。
- **跟其他工具比**：同樣主打便宜的 OpenAI GPT-6 Luna，用在 Decisions API 時每 100 萬輸入 token 也是 0.10 美元（約 NT$3.2），但它只負責是非、選擇、評分這類判斷；Haiku 5.5 能寫出完整回答，兩者用途不同。

## 總結

Haiku 5.5 主打又快又便宜，適合範圍明確、數量很多的小工作；平均執行成本比 Haiku 4.5 低約 75%，這個數字已計入新斷字方式會多算 token 的影響。同一天，Sonnet 5.5 快取讀取降價一半，Max 和 Team 訂閱戶也會在這週陸續拿到每月 API 額度。

## 小編觀點

（以下是小編的看法，不是官方說法，也不是實際使用心得。）

Haiku 5.5 對一般消費者的直接影響不大，真正受惠的是開發者和用 AI 處理大量重複工作的小團隊：分類客服信、整理摘要這類工作，成本有機會明顯下降。小編看好它的定位很清楚，就是把「便宜到可以大量用」做好；可調努力程度也讓同一個模型能在省錢和品質之間取捨。不過有兩點要保留：第一，「平均便宜約 75%」是官方用自己的工作量估算，新斷字方式會讓同樣的文字多算約 30% token，實際能省多少，最好拿自己的資料試算；第二，測試成績都是 Anthropic 自己公布的。值不值得試？在用 Haiku 4.5 的開發者很值得換來比較；只想聊天的一般人，不必為它付費。

## 參考來源

- [Anthropic：Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)
- [Claude 開發文件：Claude Haiku 5.5 模型總覽](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
- [Claude 開發文件：What's new in Claude Haiku 5.5](https://platform.claude.com/docs/en/models/haiku-5-5/whats-new-haiku-5-5)
- [Claude 開發文件：Prompting Claude Haiku 5.5（努力程度說明）](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-haiku-5-5)
- [Claude 開發文件：Pricing 價目表](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude 說明中心：Monthly API credits for Max and Team plans](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans)
- [GitHub：Claude Code v2.1.293 版本更新紀錄](https://github.com/anthropics/claude-code/releases/tag/v2.1.293)
- [Anthropic：Supported countries and regions](https://www.anthropic.com/supported-countries)
- [Claude 說明中心：How to use Claude in your preferred language](https://support.claude.com/en/articles/10769299-how-to-use-claude-in-your-preferred-language)
- [軟體玩家：Claude 終於有繁體中文介面了（2026/10）](https://pcrookie.com/claude-desktop-traditional-chinese-interface-2026/)
- [App Store 台灣區：Claude by Anthropic](https://apps.apple.com/tw/app/claude-by-anthropic/id6473753684)（訂閱價格，2026/10/8 查詢）
- [OpenAI API 文件：Decisions](https://developers.openai.com/api/docs/guides/decisions)
- [臺灣銀行：美元歷史牌告匯率（2026/10/8 即期賣出約 31.9）](https://rate.bot.com.tw/xrt/quote/ltm/USD)
