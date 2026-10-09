---
title: "JetBrains 開源 Mellum2.1：能自己架的寫程式代理模型"
date: 2026-10-10T15:00:00+08:00
slug: jetbrains-mellum-2-1
categories: [open-source]
hero: ./hero.webp
banner: ./banner.webp
description: "JetBrains 開源 Mellum2.1，總參數 12B、每次只動用 2.5B，Apache 2.0 授權免費下載，主打能在自己的機器上當寫程式代理。"
---

做 IntelliJ IDEA、PyCharm 等開發工具的 JetBrains，在官方部落格標示 **2026 年 10 月 8 日**的文章中[發布 Mellum2.1](https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/)。這是他們 6 月開源的 Mellum2 的新版，官方的定位是給「寫程式代理」（coding agent）用的模型：不只補一行程式碼，而是能自己在專案裡翻檔案、改檔案，再檢查自己改得對不對。

它採 **Apache 2.0** 開源授權，權重已放在 [Hugging Face](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)。官方也特別強調，可以在自己的電腦或公司自己的伺服器上執行，程式碼和資料不必交給別人。

## 先看重點規格

以下數字來自 [Hugging Face 模型卡](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)：

- **總參數 12B（120 億），每次只啟用 2.5B（25 億）**，屬於「混合專家」（MoE）架構。
- 共有 **64 個「專家」**，每處理一個字詞（token）會挑其中 **8 個**來算。
- 一次最多能讀 **131,072 個 token** 的內容。
- 這是「思考型」模型，會先寫出推理過程再給答案。
- 架構和 Mellum2 完全一樣，差別在訓練後段。

## 什麼是「混合專家」（MoE）？

可以想像一間有 64 位專科醫師的診所。病人進門時，櫃台不會讓 64 位醫師全部看診，而是挑最相關的 8 位來處理。整間診所的知識量很大（12B 參數），但每次實際出動的人力只有一小部分（2.5B 參數）。

好處是每次計算量比較小。要注意的是，雖然每次只用到一部分，**下載的模型檔仍包含全部 12B 參數**，檔案大小要看總參數，不是 2.5B（見下方「在自己電腦跑」）。

## 這一版改了什麼？

JetBrains 說，這一版幾乎所有功夫都花在預訓練之後的「強化學習」（RL）。白話講，就是讓模型實際動手做題，做對給獎勵、做錯就修正：

- 強化學習從原本訓練最後的一小段，變成**訓練的主體**。
- 加入數學、程式競賽、科學、工具使用和軟體工程等新題目，並先把「測試壞掉、答案無法驗證、太簡單或根本做不到」的題目濾掉。
- 自己架設了數千個訓練環境，整個訓練過程啟動了**數百萬次沙盒**（隔離的練習環境）。模型卡說明，軟體工程題是讓模型在真實程式碼庫裡用終端機和改檔工具作業，**測試通過才給獎勵**。

官方的結論是：Mellum2 速度快，但在程式碼庫裡做事的能力不夠；Mellum2.1 則能自己探索專案、改檔案並檢查修改。

## 成績怎麼樣？（官方自評）

模型卡寫明，所有分數都是 **JetBrains 用同一套流程自行測得**，不是第三方評測。拿來比較的是 Mellum2，以及兩款同等級的開放模型 Qwen3.5-9B 和 Gemma 4 E4B：

| 測試項目 | Mellum2.1 | Mellum2 | Qwen3.5-9B | Gemma 4 E4B |
| :--- | ---: | ---: | ---: | ---: |
| SWE-bench Verified（修真實專案的問題） | 47.0 | 2.0 | 50.0 | 23.0 |
| LiveCodeBench v6（程式解題） | 82.0 | 69.4 | 75.4 | 69.4 |
| BFCL v4（呼叫工具） | 62.3 | 49.6 | 58.5 | 52.5 |
| GPQA Diamond（科學知識） | 64.6 | 51.0 | 77.8 | 53.1 |

（單位：%，數字越高越好；資料來源：[Mellum2.1 模型卡](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)）

最大的進步在「代理式寫程式」：SWE-bench Verified 從上一版的 2.0 跳到 47.0。不過在同一張表裡，Qwen3.5-9B 在 SWE-bench Verified、SWE-bench Pro、Terminal-Bench 2.1 和 GPQA Diamond 等項目分數仍比 Mellum2.1 高，Mellum2.1 並不是每一項都領先。

## 速度：官方說高負載下最快

速度同樣是 **JetBrains 自己的測試**。依官方部落格的速度圖，測試條件是**一張 NVIDIA H200 資料中心等級顯示卡、FP8 精度**，不是一般個人電腦：

- **伺服器滿載時**：Mellum2.1 每秒輸出約 7,969 個 token，Qwen3.5-9B 約 4,347 個。官方的說法是「將近兩倍」，也是比較組裡最快的。
- **一次只處理一個請求時**：搭配「多 token 預測」（MTP）技術，從每秒 339 個 token 提高到 557 個，官方說約快 **1.6 倍**。但同一張圖裡，Gemma 4 E4B 搭配加速模型時是每秒 607 個，在這個情境下比 Mellum2.1 快。

另外要注意，官方表示給 vLLM 用的 MTP 加速元件**「即將推出」**，目前還沒釋出。

## 在自己電腦跑，要準備什麼？

**官方尚未公布建議的硬體規格**（見[模型卡](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)）。可以參考的是官方公布的檔案大小：

- **原始權重**：Hugging Face 顯示模型約 121.5 億個參數、以 bfloat16（每個參數 2 位元組）儲存。小編估算：12.15B × 2 位元組 ≈ **24.3GB**，和官方 BF16 檔案大小一致。
- **壓縮（量化）版 GGUF**：JetBrains 官方帳號在 Hugging Face 上已公開 [GGUF 儲存庫](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking-GGUF)，列出的檔案大小是：8 位元 Q8_0 約 12.9GB、6 位元 Q6_K 約 10.9GB、官方推薦的 4 位元 Q4_K_M 約 **8.1GB**、最小的 MXFP4_MOE 約 7.0GB。

GGUF 是 llama.cpp、Ollama、LM Studio 這類「本機跑模型」工具常用的格式。官方部落格和主模型卡寫的是 GGUF 版「即將推出」；不過截至 10 月 9 日，這個 GGUF 儲存庫已公開、可下載，也列在 JetBrains 官方的 [Mellum2.1 模型合集](https://huggingface.co/collections/JetBrains/mellum21)裡，說明頁附有 llama.cpp 的執行指令。壓縮得越多檔案越小，但和原版的差異也越大，官方在說明頁列出了每個版本的差異數據。

## 台灣讀者看這裡

- **台灣能不能用**：可以。權重以 Apache 2.0 授權公開，[Hugging Face 頁面](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)不需申請就能下載，授權也允許商業使用。
- **中文支援**：模型卡的語言欄只標示英文，沒有說明中文、繁體中文或中文程式註解的表現，**官方尚未公布**（見[模型卡](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)）。
- **中文介面**：這是給開發者用的模型檔，沒有一般使用者介面。
- **價格**：模型免費下載，成本是自己的電腦或伺服器硬體與電費。

## 小編觀點

Mellum2.1 值得注意的地方，是把「能自己翻專案、改檔、跑測試」的代理能力放進一個總參數 12B 的開源模型，而且 Apache 2.0 可商用。對不想把公司程式碼上傳到雲端服務的團隊，這是一個能自己架設的選項。

但小編認為不必過度期待。第一，分數和速度都是 JetBrains 自評，速度還是在資料中心等級顯示卡上測的，換到一般電腦表現會不同。第二，在官方自己的比較表裡，Qwen3.5-9B 修真實專案問題的分數仍略高。第三，中文支援沒有任何說明。適合有本機部署需求、願意自己測試的開發者先試；一般人則可以把它當成「小模型也能當程式代理」的指標，觀察後續第三方評測。

## 參考來源

- [JetBrains AI 官方部落格：Mellum2.1 Gets to Work: A Fast Open Model for Coding Agents（2026/10/8）](https://blog.jetbrains.com/ai/2026/10/mellum2-1-gets-to-work-a-fast-open-model-for-coding-agents/)
- [Hugging Face：JetBrains/Mellum2.1-12B-A2.5B-Thinking 模型卡](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking)
- [Hugging Face：JetBrains/Mellum2.1-12B-A2.5B-Thinking-GGUF](https://huggingface.co/JetBrains/Mellum2.1-12B-A2.5B-Thinking-GGUF)
- [Hugging Face：JetBrains Mellum2.1 官方模型合集](https://huggingface.co/collections/JetBrains/mellum21)
- [JetBrains AI 官方部落格：Mellum2 Goes Open Source（2026/6）](https://blog.jetbrains.com/ai/2026/06/mellum2-goes-open-source-a-fast-model-for-ai-workflows/)
