---
title: "Mistral Large 4 預覽版登場：1 兆參數開放權重模型，月底可下載"
date: 2026-10-07T20:40:00+08:00
updated: 2026-10-08T15:39:00+08:00
slug: mistral-large-4-preview
categories: [new-models, open-source]
hero: ./hero.webp
banner: ./banner.webp
description: "Mistral Large 4 公開預覽版登場：1 兆參數、能看圖的開放權重模型，官方預計 10 月底釋出權重。白話整理規格、官方測試成績與使用方式。"
---

法國 AI 公司 Mistral 在台灣時間 **2026 年 10 月 7 日**（美國時間 10 月 6 日）[發表了 Mistral Large 4](https://mistral.ai/news/mistral-large-4/)，官方暱稱「le Chonk」。目前是**公開預覽版**，開發者可以先在 Mistral Studio 透過 API 試用。官方也說模型權重會在**本月底**釋出，屆時任何人都能下載、在自己的機器上執行。

## 它是什麼？

簡單說，這是 Mistral 到目前為止最大、能力最強的模型：

- **規模**：總參數約 1 兆。它採用「混合專家」（MoE）架構，每次回答只會動用其中一小部分參數，所以實際運算量比總規模小得多。發表文用的數字是啟用 490 億參數，[官方文件](https://docs.mistral.ai/models/mistral-large-4-0)則寫 1.05 兆總參數、520 億啟用參數。
- **能看圖**：原生多模態，可以讀文件、圖表和照片，另外搭配一個 16 億參數的視覺模組。
- **能讀很長的內容**：官方文件標示的上下文長度（context）是 **1M**，也就是一次大約能處理 100 萬個 token。
- **多語言**：官方說訓練資料涵蓋 160 多種語言，包含歐盟所有官方語言。

## 強在哪裡？

Mistral 主打幾個方向，以下數字都來自官方自己公布的測試：

- **寫程式與 AI 代理**：在 DeepSWE v1.1 拿到 61.7%，能理解整個程式庫，也能在終端機裡執行多步驟工作。
- **資安**：官方說它在獨立評測 Artificial Analysis Cyber Index 中排進全球前五。有一項「重現真實漏洞再修補」的測試，它拿到 82%。官方指出，有些封閉模型在這項測試幾乎是零分，因為它們直接拒絕執行。
- **看圖定位**：在密集場景的物件定位測試中，官方說它甚至略勝部分頂級封閉模型。
- **專業文書**：能建立、修改和修正複雜的試算表與文件，官方說在法律、財務類評測表現出色。

要注意的是，這些都是廠商自己挑選、公布的成績。實際好不好用，還是得等更多第三方測試和使用者回饋。

## 「歐洲製造」為什麼是重點？

Mistral 強調，Large 4 是在**自家位於歐洲的資料中心**，用 3,800 張 NVIDIA Grace Blackwell GPU 從零開始訓練的，預覽版也跑在同一套設備上。官方還會提供一個完全由 Mistral 營運、受歐洲法律管轄的部署選項。

對重視「資料主權」的歐洲政府和企業來說，這代表不必依賴美國或中國的雲端業者。再加上權重開放，企業可以把模型裝在自己的私有雲或機房裡，資料不必送出去。

## 現在可以怎麼用？

- **開發者**：現在就能在 [Mistral Studio](https://docs.mistral.ai/models/mistral-large-4-0) 用 API 試用。官方文件列出支援結構化輸出、函式呼叫、文件問答、批次處理、Agents 等功能。文件上的預覽價格是每百萬輸入 token 0.68 美元、輸出 2.09 美元（原價標示為 1.36 和 4.18 美元）。
- **想自己架設的人或企業**：等月底權重釋出。官方說屆時也會公布更多架構細節、測試成績和訓練方法。要注意的是，這種規模的模型需要大量高階 GPU 才跑得動。

## 台灣讀者看這裡

- **台灣能不能用**：預覽版透過 Mistral Studio 的 API 提供。Mistral 的發表文與[模型文件](https://docs.mistral.ai/models/mistral-large-4-0)沒有針對台灣說明開放狀況，官方尚未公布。依官方的[區域推理說明](https://docs.mistral.ai/inference/regional-inference)，目前可指定的推理地區只有歐盟和美國；不指定時走全球端點。
- **中文**：官方說訓練資料涵蓋 160 多種語言，但沒有單獨公布中文表現。發表文也沒有提到一般人用的聊天 App 何時能用 Large 4。
- **價格**：預覽價每 100 萬 token 輸入約 NT$21.7、輸出約 NT$66.7（原價約 NT$43.4 和 NT$133.3）。價格換算依臺灣銀行 2026 年 10 月 8 日美元即期賣出牌告，1 美元約 31.9 新台幣（[臺灣銀行牌告匯率](https://rate.bot.com.tw/xrt/quote/ltm/USD)），僅供概算，實際刷卡金額依發卡銀行匯率與手續費而定。
- **跟台灣常用工具比**：Mistral 主打「歐洲製造、資料主權」，台灣也有思路類似的國科會 TAIDE 計畫。TAIDE 最新的對話模型 Gemma-3-TAIDE-12b-Chat-2602 約 124 億參數、上下文 128K，以 Google Gemma 3 為基礎，加強正體中文與台灣在地知識（[Hugging Face 模型頁](https://huggingface.co/taide/Gemma-3-TAIDE-12b-Chat-2602)）。兩者規模差很多：Large 4 約 1 兆參數，主打頂尖能力；TAIDE 小得多、需要的硬體也少，主打台灣用語與在地知識。

## 接下來呢？

官方說模型仍在快速改進中。Large 4 也會成為下一代 Mistral 專用模型的基礎。月底權重釋出時，就能看出它在開源模型裡到底排在哪個位置。

## 小編觀點

（以下是小編的看法，不是官方說法，也不是實際使用心得。）

Large 4 短期內對一般人影響不大：目前只開放開發者用 API 試用，權重月底才釋出，而且 1 兆參數的規模，個人電腦跑不動。小編認為它真正的意義在「開放權重」：權重公開後，企業和研究單位可以把頂級模型裝在自己的機房，資料不必送出去，對重視機密的產業很有吸引力。預覽價換算每 100 萬輸入 token 約 NT$21.7，不算貴。存疑的地方有兩個：一是所有成績都是 Mistral 自己公布的；二是發表文和模型文件寫的啟用參數不一致（490 億與 520 億），要等月底更多資料才能釐清。值不值得試？比較多家 API 的開發者可趁預覽價試試；一般讀者等第三方評測即可。

## 參考資料

- [Introducing Mistral Large 4（Mistral 官方新聞）](https://mistral.ai/news/mistral-large-4/)
- [Mistral Large 4 模型文件（Mistral Docs）](https://docs.mistral.ai/models/mistral-large-4-0)
- [Regional inference（Mistral Docs）](https://docs.mistral.ai/inference/regional-inference)
- [TAIDE：Gemma-3-TAIDE-12b-Chat-2602（Hugging Face）](https://huggingface.co/taide/Gemma-3-TAIDE-12b-Chat-2602)
- [臺灣銀行：美元歷史牌告匯率（2026/10/8 即期賣出約 31.9）](https://rate.bot.com.tw/xrt/quote/ltm/USD)
