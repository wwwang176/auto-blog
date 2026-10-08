---
title: "OpenAI 10/23 停用舊模型：GPT-4、o1 等 17 項 API 退場"
date: 2026-10-07T20:00:00+08:00
updated: 2026-10-08T09:53:00+08:00
slug: openai-model-shutdown-2026-10-23
categories: [new-models, industry]
hero: ./hero.webp
banner: ./banner.webp
description: "OpenAI 10/23 起停用 GPT-4、o1、o3-mini 等 17 項舊模型 API，主要影響開發者與串接舊模型的 App。整理停用清單、官方替代模型與因應方式。"
---

OpenAI 在官方的[模型停用公告頁](https://developers.openai.com/api/docs/deprecations)列出：**2026 年 10 月 23 日**起，一批舊模型將無法再透過 API 使用。這份名單最早在 2026 年 4 月 22 日公布，距離停用只剩大約兩週。

## 哪些模型會停用？

官方表格分成兩部分，合計 **17 項**（12 個模型版本＋5 種微調模型）。括號內是指向同一版本的別名，也會一起失效。

**一般模型（12 項）**

| 停用的模型 | 官方建議替代 |
|---|---|
| `gpt-3.5-turbo-0125`（含 `gpt-3.5-turbo`） | `gpt-5.6-terra` |
| `gpt-4-0613`（含 `gpt-4`） | `gpt-5.6-sol` |
| `gpt-4-1106-preview` | `gpt-5.6-sol` |
| `gpt-4-turbo`（含 `gpt-4-turbo-2024-04-09`） | `gpt-5.6-sol` |
| `gpt-4.1-nano`（含 `gpt-4.1-nano-2025-04-14`） | `gpt-5.6-luna` |
| `gpt-4o-2024-05-13` | `gpt-5.6-sol` |
| `gpt-image-1`（圖片生成） | `gpt-image-2.5-sunburst` 或 `gpt-image-2.5-flare` |
| `o1-2024-12-17`（含 `o1`） | `gpt-5.6-sol` |
| `o1-pro-2025-03-19`（含 `o1-pro`） | `gpt-5.6-sol`（pro 推理模式） |
| `o3-mini-2025-01-31`（含 `o3-mini`） | `gpt-5.6-sol` |
| `o4-mini-2025-04-16`（含 `o4-mini`） | `gpt-5.6-terra` |
| `ft-o4-mini-2025-04-16` | `gpt-5.6-terra` |

**微調（fine-tuned）模型（5 項）**：以 `gpt-3.5-turbo`、`gpt-4`、`gpt-4.1-nano-2025-04-14`、`babbage-002`、`davinci-002` 為基礎做的微調模型，也會在同一天關閉。

> 小提醒：「17 項」是照官方表格的列數計算；如果把每個別名分開算，數字會更多。

## 對一般 ChatGPT 使用者有什麼影響？

這份公告針對的是 **API**（也就是開發者把 OpenAI 模型接進自己產品的管道）。OpenAI 在 Help Center 的 [Model Release Notes（模型更新紀錄）](https://help.openai.com/en/articles/9624314)中，並沒有針對 10 月 23 日發布任何 ChatGPT 調整。事實上，ChatGPT 和 API 的模型退場是分開進行的：GPT-4o、GPT-4.1、o4-mini 等舊模型早在 2026 年 2 月 13 日就已從 ChatGPT 下架（[官方說明](https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models)），當時官方也註明這些模型「在 API 上仍可繼續使用」。所以這次 10/23 的停用，主要影響的是 API，直接使用 ChatGPT App 的人通常不會看到模型選單有變化。

比較可能感受到影響的情況是：你用的**第三方 App、聊天機器人、外掛或自動化工具**，背後還在呼叫這些舊模型。如果開發者沒有及時更新，10/23 之後可能出現錯誤、功能失效，或是回答風格突然改變（因為換成新模型）。

**你可以做的事：**
- 常用的 AI 工具若有「選擇模型」設定，看看是不是選了 GPT-4、o1、o3-mini 等舊模型，提前換掉。
- 10/23 前後若某個工具突然壞掉，可以先查看它有沒有發布更新公告。

## 對 API 使用者（開發者、公司）有什麼影響？

10/23 起呼叫上述模型會直接失敗。OpenAI 在停用公告頁說明，受影響的客戶都會收到 email 通知。建議：

1. **盤點程式碼**：搜尋專案中的模型名稱（例如 `gpt-4`、`gpt-3.5-turbo`、`o1`、`o3-mini`、`gpt-image-1`），包含設定檔與環境變數。
2. **照官方對照表換模型**：多數改成 `gpt-5.6-sol`（能力較強）或 `gpt-5.6-terra`；輕量用途可考慮 `gpt-5.6-luna`；圖片生成改用 `gpt-image-2.5` 系列。
3. **先測試再上線**：新模型的回答長度、格式、價格都可能不同，換之前先拿實際案例比對。
4. **微調模型要重新規劃**：官方對每種微調模型都列了建議的新基礎模型，需要用新模型重新微調；此外，官方也公告自助微調服務正逐步收緊（2027 年 1 月 6 日起現有客戶也不能建立新的微調任務），務必提早評估。
5. **留意後面還有一波**：官方同一頁也列出 2026 年 12 月 11 日將停用舊版 GPT-5 與 o3 快照，可以一起規劃。

## 重點整理

- **什麼時候**：2026 年 10 月 23 日（官方只公布日期，確切關閉時刻尚未公布，請以[官方停用公告頁](https://developers.openai.com/api/docs/deprecations)為準）。
- **停什麼**：GPT-4、GPT-4 Turbo、GPT-3.5 Turbo、GPT-4.1 nano、早期 GPT-4o、o1、o1-pro、o3-mini、o4-mini、gpt-image-1，以及 5 種微調模型，共 17 項。
- **影響誰**：主要是 API 開發者；一般人則可能透過第三方 App 間接受影響。

## 來源

- OpenAI API 官方文件：[Deprecations](https://developers.openai.com/api/docs/deprecations)（「2026-04-22: Legacy GPT model snapshots」段落）
- OpenAI Help Center：[Model Release Notes](https://help.openai.com/en/articles/9624314)、[Retiring GPT-4o and other ChatGPT models](https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models)
- OpenAI 開發者社群公告：[Deprecation notice: upcoming model shutdowns in 2026](https://community.openai.com/t/deprecation-notice-upcoming-model-shutdowns-in-2026/1379553)
