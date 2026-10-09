---
title: "Google EmbeddingGemma 2 開源：多模態嵌入模型手機能跑"
date: 2026-10-09T15:00:00+08:00
slug: google-embeddinggemma-2
categories: [open-source, new-models]
hero: ./hero.webp
banner: ./banner.webp
description: "Google 開源 EmbeddingGemma 2，7.4 億參數，能把文字、程式碼、圖片、影片、聲音放進同一個「語意空間」，手機上也能跑，適合做搜尋、推薦和 RAG。"
---

Google 在美國時間 **2026 年 10 月 6 日**[發表 EmbeddingGemma 2](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/)，這是一個以 **Gemma 4** 架構打造、採 **Apache 2.0** 開源授權的「嵌入模型」。它總共約 **7.4 億（740M）參數**，能處理**文字（含程式碼）、圖片、影片和聲音**，而且設計成可以直接在手機、筆電上執行。

它不是聊天機器人，不會回答問題或寫文章。它做的是 AI 搜尋、推薦背後一個很基礎的步驟：把內容變成「座標」。

## 什麼是嵌入模型？

想像一間圖書館，不是照書名筆畫排書，而是照「內容像不像」擺放：講極光的書放在一起，講天文的放在旁邊，講料理的離得很遠。

嵌入模型做的就是這件事。它把一段文字、一張照片或一段錄音，轉成一串數字（稱為「向量」），可以想成內容在一個巨大空間裡的座標。**意思相近的內容，座標就靠得近。**有了座標，電腦就能：

- **搜尋**：你輸入「海邊夕陽」，系統找出座標最接近的照片，就算照片沒有任何文字標籤。
- **推薦**：找出跟你剛看過的內容座標相近的東西。
- **分類與分群**：把相似的客訴、文件自動歸成一堆。
- **RAG（檢索增強生成）**：先用嵌入模型從資料庫找出相關段落，再交給 ChatGPT、Gemma 這類生成式 AI 根據資料回答，減少憑空亂講。

## EmbeddingGemma 2 有什麼新東西？

以下數字都來自 [Google 官方模型卡](https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2)與[官方部落格](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/)：

**1. 一個模型處理四種內容。** 第一代 EmbeddingGemma 只處理文字；第二代把**文字（含程式碼）、圖片、影片、聲音**放進同一個 768 維的空間。官方舉的例子是：用一段語音備忘錄找出某段影片片段，或用一句文字搜尋好幾小時的錄音。單一輸入也能混合文字、圖片和影片，例如把一則商品介紹（文字＋照片＋示範影片）變成一組座標。

**2. 要用什麼就載入什麼。** 模型是「積木式」的：只處理文字時只需 2.7 億參數；文字加上視覺編碼器（1.7 億）是 4.4 億；文字加上聲音編碼器（3 億）是 5.7 億；全部載入是 7.4 億。

**3. 手機跑得動。** 官方說，經過量化（壓縮）後，在 Google Pixel 11 Pro 上，純文字版最少約需 **191MB** 執行記憶體，完整多模態版約 **567MB**。資料在裝置上處理，不必上傳雲端。

**4. 能讀更長的內容。** 一次可輸入 8,192 個 token，是第一代的 4 倍。換算下來，單次大約可處理 5.5 分鐘的聲音、29 張圖片或 58 格影片畫面（影片預設每秒取 1 格）。

**5. 座標可以「縮短」省空間。** 透過名為 Matryoshka（俄羅斯娃娃）的訓練方式，768 維的座標可以截短成 512、256 或 128 維，儲存空間最多省 6 倍。[官方開發者指南](https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/)提醒：縮到 128 維時，圖片、影片、語音檢索的品質會掉到約七成五，最好先用自己的資料測過。

**6. 程式碼搜尋明顯進步。** 在程式碼檢索測試 MTEB Code 上，分數從第一代的 68.76 提高到 78.68；多語言文字的表現則和第一代差不多（61.15 對 61.36）。Google 也說，它在 10 億參數以下的多模態嵌入模型裡，MTEB Code 和聲音測試 MAEB 等成績領先同級。

## 誰會用到它？

一般人不會直接「打開」EmbeddingGemma 2，它是給開發者用的零件。不過未來你可能在這些地方間接碰到：

- 手機相簿用一句話找照片，而且不用上傳雲端。
- 筆記或文件 App 的「語意搜尋」，搜意思而不只是搜關鍵字。
- 企業內部知識庫的 AI 助理，先找到正確文件再回答。

開發者可以在 [Hugging Face](https://huggingface.co/google/embeddinggemma-2) 和 Kaggle 下載權重；官方也列出 sentence-transformers、Ollama、LM Studio、llama.cpp、vLLM、MLX 等常用工具支援。想先看效果的人，官方在 Google AI Edge Gallery 裡放了「Instant Media Search」「Video Moments Finder」等手機示範。同一週開源圈還有另一則消息：Mistral 公布大型開放權重模型預覽版，詳見本站〈[Mistral Large 4 預覽版登場](/posts/mistral-large-4-preview/)〉。

## 需要留意的地方

- **語言表現不一定平均**：模型卡寫明支援 100 多種語言，但也說「各語言的表現可能不一致」。
- **沒有輸出端的安全審核**：模型卡說明，它不像生成式模型那樣做後訓練的安全調整或輸出審核，只在訓練資料階段做過濾；怎麼使用、要加哪些防護，責任在開發者。
- **精度設定**：官方提醒要用 bfloat16 或 float32 執行，用 float16 可能得到錯誤結果卻不會報錯。

## 台灣讀者看這裡

- **台灣能不能用**：可以。模型權重以 Apache 2.0 授權公開，[Hugging Face 頁面](https://huggingface.co/google/embeddinggemma-2)不需另外申請就能下載，商業使用也在授權範圍內。
- **中文支援**：[模型卡](https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2)寫支援 100 多種語言，訓練資料涵蓋 140 多種語言，但沒有單獨公布繁體中文或中文的評測分數；要用在中文搜尋的團隊，建議先拿自己的資料測試。
- **中文介面**：這是開發者用的模型檔，沒有一般使用者介面。
- **價格**：模型本身免費下載使用，成本是自己的電腦、手機或伺服器算力。

## 小編觀點

EmbeddingGemma 2 最值得注意的，是把「用一句話找照片、找影片片段、找錄音」這類多模態搜尋，壓到手機記憶體裝得下的大小，而且免費開源、可商用。資料不必上傳雲端就能做語意搜尋，對重視隱私的 App 是實際的好處；只做文字搜尋的人載入 2.7 億參數就夠，也很務實。

小編存疑的有兩點。第一，多語言文字分數和上一代幾乎持平，進步主要在程式碼和新增的圖片、聲音；官方沒有公布中文分數，台灣團隊不能直接套用英文測試的好成績。第二，「同級最佳」是 Google 自己的比較，還要看第三方評測。值不值得試？做相簿、筆記、知識庫的開發者值得測；一般讀者則可以期待，手機上的搜尋會越來越聽得懂「意思」。

## 參考來源

- [Google 官方部落格：EmbeddingGemma 2: an open, lightweight multimodal embedding model（2026/10/6）](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/)
- [Google AI for Developers：EmbeddingGemma 2 模型卡](https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2)
- [Google Developers Blog：EmbeddingGemma 2: The Developer Guide（2026/10/6）](https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/)
- [Hugging Face：google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)
