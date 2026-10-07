---
title: "OpenAI 推出 Decisions API：讓 AI 專心做「是非、選擇、打分數」，跟你有什麼關係？"
date: 2026-10-07T22:45:00+08:00
slug: openai-decisions-api-gpt-6-luna
categories: [new-models, ai-tools]
hero: ./hero.webp
description: "OpenAI 開放 Decisions API 公開測試版，由 GPT-6 Luna 驅動，專門快速回答是非機率、從選項挑一個、依標準打分數三種問題。白話整理它能做什麼、多少錢，以及一般人會在哪裡感受到。"
---

OpenAI 在美國時間 **2026 年 10 月 6 日**於[官方開發者論壇](https://community.openai.com/t/decisions-api-is-now-available-in-public-beta/1403877)宣布，**Decisions API** 開放所有開發者以公開測試版（public beta）使用。它不是給一般人聊天用的新 App，而是一個讓其他 App「快速做判斷」的工具，背後使用的模型是 **GPT-6 Luna**。

## 它是什麼？

我們平常用 ChatGPT，是請 AI「寫出一段回答」。但很多 App 其實只需要 AI 給一個**簡短的判斷**：這封信是不是在問退款？這張照片裡的商品有沒有壞？這個問題有多嚴重？

Decisions API 就是專門做這件事的。依 [OpenAI 官方文件](https://developers.openai.com/api/docs/guides/decisions)，它可以讀文字、圖片或兩者一起，然後回傳三種固定格式的答案：

- **是非題（predicate）**：回答「某件事成立的機率」，例如「這張照片的商品有明顯損壞」的機率是 0.92。
- **選擇題（choice）**：從開發者事先給的選項裡挑一個，例如把客訴分到「帳務」「技術」「物流」或「其他」。
- **評分題（score）**：依照一套由低到高的標準打分數，例如問題嚴重度是「外觀小瑕疵」「有替代方法」還是「完全卡住」。

同一次請求可以一次問好幾個問題，每題可用不同類型。

## 為什麼值得注意？

**1. 快。** 官方文件寫，它回傳答案比透過一般的 Responses API 快**約 10 倍**。對需要即時反應的服務（像客服分流、遊戲、語音助理挑選動作）來說，速度很關鍵。

**2. 便宜、計價簡單。** 用 `gpt-6-luna` 時，**每 100 萬個輸入 token 收 0.10 美元，只收輸入費**，沒有輸出費，也沒有快取讀寫費。（長文本與指定地區處理另有加價規則。）

**3. 答案附「信心程度」。** 選擇題和評分題會一併給出各選項的機率與信心值，開發者可以自己設門檻：信心夠高就自動處理，不夠就轉給真人。

**4. 企業可用的資料保護。** 官方說明它支援零資料保留（ZDR）與符合 HIPAA 的使用情境（限符合資格的客戶），並可在美國與歐洲處理資料。

## GPT-6 Luna 是什麼？

依 [GPT-6 Luna 官方模型頁](https://developers.openai.com/api/docs/models/gpt-6-luna)，它是 OpenAI 目前「**最有效率、適合專注且大量任務**」的模型，支援文字與圖片輸入。目前 Decisions API **只支援這一個模型**。

## 跟一般人有什麼關係？

你不會直接「打開」Decisions API，但未來可能在這些地方間接碰到它：

- **客服變快**：你寄出的問題可能在一瞬間就被分到對的部門。
- **購物與退貨**：上傳的商品照片可能由 AI 先判斷有沒有損壞。
- **內容審核**：社群平台可以更快判斷圖片或文字是否違反規範。
- **App 裡的小助理**：語音或遊戲裡，AI 能更即時地決定下一步動作。

## 需要留意的地方

- **還在測試階段**：官方表示目前是公開測試版，預計「未來幾週」正式推出，功能和規則可能調整。
- **機率不等於真相**：AI 給的是「估計」，官方也建議開發者用自己的實際資料來設定門檻，並權衡判錯的代價。開發者論壇上已有早期使用者分享測試心得，有人認為某些題型的機率分布不夠準，這類意見都還屬個人初步測試。
- **只適合「判斷」，不負責「寫」**：要產生一段說明文字或自訂格式的資料，官方建議改用其他功能。

## 總結

Decisions API 把 AI 從「什麼都寫」變成「快速下判斷」：是不是、選哪個、幾分。對一般人來說，它是幕後工具，影響的會是各種 App 的反應速度與自動化程度。若你是開發者，可以先在 OpenAI Playground 試用；若你是一般使用者，接下來可以留意常用服務的客服、審核是否變得更快。

## 參考來源

- [OpenAI API 文件：Decisions](https://developers.openai.com/api/docs/guides/decisions)
- [OpenAI API 文件：GPT-6 Luna 模型頁](https://developers.openai.com/api/docs/models/gpt-6-luna)
- [OpenAI 開發者論壇：Decisions API is now available in Public Beta](https://community.openai.com/t/decisions-api-is-now-available-in-public-beta/1403877)
