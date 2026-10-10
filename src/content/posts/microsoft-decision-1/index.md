---
title: "Microsoft Decision-1：不聊天、只給各選項機率的決策模型"
date: 2026-10-11T15:00:00+08:00
slug: microsoft-decision-1
categories: [new-models]
hero: ./hero.webp
banner: ./banner.webp
description: "Microsoft 推出決策模型 Decision-1：不寫文字，只回傳每個選項的機率，適合分類、分流與把關 AI 代理，每百萬輸入 token 0.042 美元。"
---

Microsoft 在官方部落格 Command Line 標示 **2026 年 10 月 9 日**的文章中，[發表 Microsoft-Decision-1](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/)（以下簡稱 Decision-1）。它和 ChatGPT、Copilot 這類聊天 AI 很不一樣：**它不寫任何文字**，你給它一段情境和幾個固定選項，它只回答「每個選項的機率是多少」。（[Microsoft Foundry 模型卡](https://ai.azure.com/catalog/models/Microsoft-Decision-1)上標的發布日期是 10 月 8 日。）

## AI 不只會聊天：「決策模型」是什麼？

我們熟悉的大型語言模型（LLM），擅長的是「寫」：寫回答、寫摘要、寫程式。但很多軟體在流程中，其實只需要 AI 做一個很小的判斷：

- 這封客服信是退款、技術問題，還是業務詢問？
- 這則留言有沒有違反社群規範？
- AI 代理準備按下「付款」鍵，這一步該放行、停下，還是交給真人？

這類問題答案是固定的幾個選項，用會寫長篇文字的模型來回答，又慢又貴，回答格式也不一定好處理。**決策模型**就是專門做這件事的：只看情境、只從選項裡挑，並把信心程度用機率表示。Microsoft 在公告中說，決策模型「正快速成為 AI 的一個重要新類別」，和 LLM 不同，它的輸出是軟體可以立刻拿來用的結構化結果。

如果你看過我們介紹的[〈OpenAI Decisions API 公測〉](/posts/openai-decisions-api-gpt-6-luna/)，會發現概念很像：同樣是是非、選擇、評分這幾種題型，同樣回傳機率，同樣只收輸入費。Microsoft 也把 OpenAI 的 GPT-6 Luna Decisions 列在自家評測的比較對象裡。另外，Cloudflare 在 Hugging Face 上也放了名為 [Clef](https://huggingface.co/Cloudflare/clef) 的模型，標籤標示為 decision-model、Apache-2.0 授權；它的細節本文不另外介紹。

## Decision-1 怎麼運作？

依[官方公告](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/)與 [Foundry 模型卡](https://ai.azure.com/catalog/models/Microsoft-Decision-1)：

- **輸入**：一段情境（state）、一個問題、一組固定的答案選項。只吃文字，不收圖片、聲音或影片。
- **輸出**：每個選項的機率分數。它**不會解釋理由**，也不產生任何說明文字。
- **題型**：是非題、單選題、評分題，也可以依一套評分標準（rubric）幫 AI 的回答或 AI 代理的動作打分數。資訊不夠時，還可以設「無法判斷」這類選項。
- **底座**：Microsoft 拿阿里巴巴的開放權重模型 Qwen3.5-9B 做後訓練，模型卡寫參數規模落在 50 億到 150 億之間。官方說之後會改用其他模型當底座，包括 Microsoft AI（MAI）和 OpenAI 的模型。

舉個例子，Microsoft 在公告中建議的用途之一是「事件分流」：把一則事件依類型和緊急程度分類，再交給對應的團隊或流程。開發者把事件內容和固定的選項一起丟給 Decision-1，拿到各選項的機率，程式再依結果決定怎麼處理。

官方特別強調機率要「校準過」：回答 90% 的那些判斷，在具代表性的案例中，應該大約 10 次對 9 次。這樣開發者才能設門檻，例如「信心夠高就自動處理，不夠就交給真人」。

## 官方說它多快、多準？（都是 Microsoft 自家測試）

以下數字都出自 [Microsoft 公告](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/)，是官方自己的評測，目前還沒看到第三方獨立驗證：

- **速度**：在 Microsoft 的測試中，它是量到最快的模型，**比第二名 H2O-Lightning-4B v1.1 快 2.5 倍，比 GPT-6 Sol 快 35 倍**；公告寫明，和 GPT-6 Sol 比的是 P50，也就是中位數延遲。
- **準確度**：在涵蓋 36 個評測、近 15 萬道題目、且沒拿來訓練的比較中，準確度最高。
- **穩定性**：同一個請求用 8 種方式改寫（換句話說、調換選項順序等），平均只有 1.3% 的情況會改變判斷；只改寫選項描述或打亂選項順序時，判斷完全沒變。
- **內部試用**：Xbox 研究團隊用它把 1 萬多則玩家回饋分到固定主題，官方說品質和 GPT-6 Sol 相當，速度快 14 倍以上、成本低 200 倍。

模型卡也寫出弱點：它在推理、套用規則上最強，分類、檢索和多數多語言任務有競爭力，但**專門領域知識題比較弱**。

## 能做什麼、不該做什麼？

官方建議的用途包括：分流客服單、替社群貼文或客戶回饋貼標籤、當 AI 的「評審」檢查回答品質、在 AI 代理執行下一步前先把關（繼續、停止、重試或轉給真人）、挑選最適合的模型處理請求、判斷搜尋結果相不相關等。

[模型卡](https://ai.azure.com/catalog/models/Microsoft-Decision-1)也明列它**不適合**的事：

- 寫文章、開放式問答、聊天、翻譯、摘要。
- 沒有固定選項的問題，或需要輸入內容以外知識的問題。
- **不能當作對人做重大決定的唯一依據**，例如信用、就業、住房、保險、教育、醫療、法律權益等。
- 不得用於監控、建立個人檔案或追蹤特定個人。

## 怎麼取得？價格多少？

- **只能透過雲端 API 使用**：模型卡寫明「模型權重不對外散布」，目前可在 [Microsoft Foundry](https://ai.azure.com/catalog/models/Microsoft-Decision-1) 和 [OpenRouter](https://openrouter.ai/microsoft/microsoft-decision-1) 呼叫，不能下載到自己電腦跑。OpenRouter 頁面另外註明，權重會持續更新，但 API 格式維持不變。
- **價格**：官方公告寫，**每 100 萬個輸入 token 0.042 美元，輸出免費**。
- **脈絡長度**：一次最多 32,768 個輸入 token（Foundry 模型卡與 OpenRouter 頁面一致）。
- **呼叫方式不同於聊天 API**：OpenRouter 說明，這個模型走的是它的 Decisions API，不是一般相容 OpenAI 格式的聊天端點，所以平常的聊天 SDK 不能直接拿來用。

## 台灣讀者看這裡

- **台灣能不能用**：OpenRouter 的[服務條款](https://openrouter.ai/terms)說，部分模型供應商會限制特定國家或地區的使用者，這類「受限模型」不能透過 OpenRouter 使用。Decision-1 在 OpenRouter 上目前只有 Azure 一家供應商；它是否限制台灣，Microsoft 與 OpenRouter 官方尚未公布（見 [OpenRouter 模型頁](https://openrouter.ai/microsoft/microsoft-decision-1)、[Foundry 模型卡](https://ai.azure.com/catalog/models/Microsoft-Decision-1)）。企業用戶也可以直接走 Microsoft Foundry（Azure 帳號）。
- **中文支援**：這是給開發者串接的 API，沒有一般人直接操作的中文介面。[模型卡](https://ai.azure.com/catalog/models/Microsoft-Decision-1)寫，它主要針對英文最佳化，並在中文、日文、韓文等 20 多種語言上做過評測，但也提醒涵蓋程度、品質和機率校準會因語言而異；模型卡沒有區分繁體或簡體中文。
- **價格換算**：每 100 萬輸入 token 0.042 美元，約 **NT$1.34**；同樣是決策用途的 OpenAI Decisions API（GPT-6 Luna）是 0.10 美元，約 NT$3.2。舉例來說，處理 1 萬筆、每筆 1,000 token 的請求，共 1,000 萬 token，約 0.42 美元，大約 NT$13。換算依 [2026 年 10 月 8 日 16:00 臺灣銀行美元即期賣出牌告](https://rate.bot.com.tw/xrt/quote/2026-10-08/USD)，1 美元兌 31.95 新台幣（10 月 9 日的臺銀頁面查無牌告資料，故採前一個有資料的營業日），僅供概算，實際金額依發卡銀行匯率與手續費而定。
- **OpenRouter 的額外費用**：OpenRouter 以美元儲值，[官方 FAQ](https://openrouter.ai/docs/faq) 寫明購買額度時收 5.5% 手續費（最低 0.80 美元，約 NT$25.6），用加密貨幣付款則收 5%；接受主要信用卡、AliPay 和 USDC 加密貨幣。

## 小編觀點

Decision-1 最值得注意的不是又多一個模型，而是 AI 正在分工：會寫的交給大模型，只要判斷的交給便宜又快的決策模型。每百萬輸入 token 0.042 美元，價格不到 OpenAI Decisions API 的一半，對要大量分類、審核或替 AI 代理把關的開發者有吸引力。不過，「比 GPT-6 Sol 快 35 倍」和各項準確度都是 Microsoft 自家測試，尚無第三方驗證；它也不給理由，判錯時較難追查，模型卡更明說不能單獨用來對人做重大決定。台灣開發者若要處理中文資料，官方只說做過中文評測、主力在英文，建議先用自己的資料小量測準確度再上線。對一般讀者來說，未來客服分流、留言審核變快，背後可能就是這類模型。

## 參考來源

- [Microsoft Command Line：Introducing Microsoft-Decision-1, our model for fast decision-making](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/)
- [Microsoft Foundry 模型卡：Microsoft-Decision-1](https://ai.azure.com/catalog/models/Microsoft-Decision-1)
- [OpenRouter：Microsoft-Decision-1 模型頁](https://openrouter.ai/microsoft/microsoft-decision-1)
- [OpenRouter：Terms of Service](https://openrouter.ai/terms)
- [OpenRouter：FAQ（手續費與付款方式）](https://openrouter.ai/docs/faq)
- [Hugging Face：Cloudflare/clef](https://huggingface.co/Cloudflare/clef)
- [臺灣銀行：2026/10/8 美元牌告匯率（16:00 即期賣出 31.95）](https://rate.bot.com.tw/xrt/quote/2026-10-08/USD)
