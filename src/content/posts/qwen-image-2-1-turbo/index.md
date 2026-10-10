---
title: "阿里 Qwen-Image-2.1-Turbo：8 步出圖修圖，限研究用"
date: 2026-10-11T19:00:00+08:00
draft: true
slug: qwen-image-2-1-turbo
categories: [open-source]
hero: ./hero.webp
banner: ./banner.webp
description: "阿里 Qwen 團隊放出 Qwen-Image-2.1-Turbo，8 步就能文字生圖和修圖、免費下載；但授權只限研究或評估，商用要另外申請。"
---

阿里巴巴的 Qwen 團隊在 **2026 年 10 月 9 日**，於 Hugging Face 公開 [Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)。它是 9 月 20 日發表的 Qwen-Image-2.1 的加速版，同一個模型能「打字生圖」也能「修改現有圖片」，而且只要 **8 個去噪步驟**。原版 Qwen-Image-2.1 在官方範例裡是跑 40 步（見 [GitHub 官方 repo](https://github.com/QwenLM/Qwen-Image-2.1)）。

不過這篇最想提醒的是授權。Qwen-Image-2.1 系列用的是「**Qwen Research License**」，官方把「非商業」定義成**只限研究或評估用途**。可以免費下載，不代表可以拿去做生意。

## 先看重點

以下整理自 [Hugging Face 模型卡](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)與 [GitHub 官方 repo](https://github.com/QwenLM/Qwen-Image-2.1)：

- **是什麼**：Qwen-Image-2.1 的加速檢查點（checkpoint），用 8 步完成文字生圖與圖片編輯。
- **多大**：負責「畫圖」的核心元件是 **7B（70 億）參數**、32 層的 DiT 架構，和原版相同。要注意的是，整套系統還另外搭配一個 **Qwen3-VL 8B** 模型，負責讀懂文字指令和參考圖片，所以不是只有 7B。
- **步數設定是內建的**：建議的 8 步取樣排程已經存在模型檔裡，會自動載入。模型卡寫明，只改 `num_inference_steps` 參數**不會**改掉它；官方也說其他排程沒有測試過。
- **解析度**：官方範例中，生圖是 **1680×2512** 直式，修圖是 **2048×2048**；支援的比例從 1:1 到 16:9、9:16，最大到 2752×1536。
- **怎麼用**：用 Hugging Face 的 Diffusers 套件直接載入，但要裝最新的原始碼版本。

## Qwen-Image-2.1 能做什麼？

Turbo 版和原版同一個架構。依 [Qwen 官方部落格](https://qwen.ai/blog?id=qwen-image-2.1)和 [GitHub 官方 repo](https://github.com/QwenLM/Qwen-Image-2.1)，Qwen-Image-2.1 這次主打四項改進：

- **輕巧有效率**：畫圖核心只有 7B 參數，官方說能用較低的運算成本做出好的畫質。
- **原生透明背景、生圖修圖一體**：可以直接生成去背（RGBA）的圖片、修改透明圖層，也能從一般照片把主體「摳」出來。
- **多樣的修圖方式**：最多能放 **10 張參考圖**（GitHub 範例之一是把模特兒、衣服、鞋子、包包、帽子五張圖合成一套穿搭）；也能用圈選、塗抹標記或另外給一張遮罩，指定只改圖片的某一塊。
- **質感與美感**：官方說改善了圖中文字的排版，以及人像光線和細節。

官方部落格附有和其他開源、閉源模型的比較圖（Qwen-Image-Bench），但這是 Qwen 團隊自己的評測。Turbo 版本身沒有公布另外的評測分數。

## 授權重點：免費下載，但不是「可商用開源」

Hugging Face 頁面上的授權欄位是「other／qwen-research」，連到 [Qwen Research License Agreement 全文](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo/blob/main/LICENSE)（發布日期 2026 年 9 月 20 日）。幾條關鍵條款如下，英文為原文，中文是小編的摘要：

- **第 1 條 i 款**：「"Non-Commercial" shall mean for research or evaluation purposes only.」也就是「非商業」只指**研究或評估**用途。
- **第 2 條 a 款**：授權使用、複製、散布、修改模型「FOR NON-COMMERCIAL PURPOSES ONLY」，**只限非商業用途**。
- **第 2 條 b 款**：「You shall not use the Materials for any commercial purpose without obtaining a separate commercial license from us.」**沒有另外取得商用授權，就不能用於任何商業目的**；要商用得寫信向官方申請（條文附有聯絡信箱 model-business@notice.qwencloud.com）。
- **第 3 條**：轉發模型或改過的版本時，要附上這份授權、標註改過哪些檔案，並保留指定的版權聲明。
- **第 4 條 b 款**：如果用這個模型或它的輸出結果去訓練、改進別的 AI 模型並公開提供，要在說明文件明顯標示「Built with Qwen」或「Improved using Qwen」。
- **第 8 條**：適用中國法律，爭議由杭州的人民法院專屬管轄。

授權的另一方是「杭州通義實驗室科技有限公司」（Hangzhou Tongyi Laboratory Technology Co., Ltd.）。另外，條文定義的「材料」是模型權重、程式碼和文件；**條文沒有另外寫明「用它生成的圖片」能不能拿去商用**。

### 為什麼這件事值得特別講？

因為同一家、甚至同一系列的模型，授權可能完全不同。依 Hugging Face 上的授權欄位：

| 模型 | 授權 | 能不能商用 |
| :--- | :--- | :--- |
| [Qwen-Image](https://huggingface.co/Qwen/Qwen-Image)（2025 年 8 月） | Apache 2.0 | 可以 |
| [Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)／[2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)（2026 年） | Qwen Research License | 只限研究或評估，商用要另外申請 |
| [FLUX.1 [schnell]](https://huggingface.co/black-forest-labs/FLUX.1-schnell) | Apache 2.0 | 可以 |
| [FLUX.1 [dev]](https://huggingface.co/black-forest-labs/FLUX.1-dev) | FLUX.1 [dev] Non-Commercial License | 非商業 |

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) 這類授權允許商業使用，本站介紹過的〈[JetBrains 開源 Mellum2.1](/posts/jetbrains-mellum-2-1/)〉就是這種。Qwen-Image-2.1 的 GitHub 簡介寫著「open-source」，但實際授權是研究用途；所以挑免費 AI 繪圖模型時，看「能不能下載」之外，還要看授權檔寫什麼。

## 在自己電腦跑，要準備什麼？

**官方沒有寫需要多少顯示卡記憶體。** 模型卡只寫要裝支援 CUDA 的 PyTorch（也就是 NVIDIA 顯示卡），GitHub 另外提到原版可透過 ROCm 在 AMD Radeon 顯示卡上執行；記憶體不夠的話，官方提供 `enable_model_cpu_offload()`，把暫時用不到的部分移到一般記憶體。

可以參考的是 Hugging Face 列出的檔案大小（BF16 格式）：

- 畫圖核心（transformer）：約 **14.2GB**
- 讀文字和參考圖的 Qwen3-VL 8B（text encoder）：約 **17.5GB**
- 影像編解碼器（VAE）：約 0.7GB
- 合計約 **32.5GB**

**小編估算**：BF16 每個參數佔 2 位元組，Hugging Face 列出這個 repo 的 BF16 參數量約 71.2 億，71.2 億 × 2 位元組 ≈ 14.2GB，和畫圖核心的檔案大小一致。照這個算法，如果要把三個元件同時放進顯示卡，光是模型本身就要超過 32GB 顯示記憶體，還不含運算過程中需要的空間。這只是依檔案大小的粗估，不是官方數字；實際需求會隨解析度、是否分批載入（offload）而不同。

不想自己架的人，Qwen 在 Hugging Face 上有官方的 [Qwen-Image-2.1 線上示範](https://huggingface.co/spaces/Qwen/Qwen-Image-2.1)，但它是原版 2.1，不是 Turbo。GitHub 也寫明，阿里雲 Model Studio（國際版）已上線 Qwen-Image-2.1 的 [Pro](https://modelstudio.console.alibabacloud.com/ap-southeast-1/model/market/detail/qwen-image-2.1-pro?serviceSite=international&ref=list) 與 [Turbo](https://modelstudio.console.alibabacloud.com/ap-southeast-1/model/market/detail/qwen-image-2.1-turbo?serviceSite=international&ref=list) API，屬於付費雲端服務，本文沒有核實其價格，因此不列出。

## 台灣讀者看這裡

- **台灣能不能用**：可以免費下載。[Hugging Face 頁面](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)不需申請就能下載，授權第 2 條 a 款寫的是「worldwide」（全球）授權，但限非商業用途。GitHub 提到的 wuli.art 免費線上服務，官方寫的是給「中國大陸用戶」。
- **中文提示詞**：官方模型卡、GitHub 和部落格都**沒有說明中文提示詞的支援程度**，官方尚未公布（見[模型卡](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)）。官方範例的提示詞都是英文，部落格另有簡體中文版。
- **中文介面**：這是給開發者用的模型檔，沒有一般使用者介面。
- **價格**：模型免費下載；成本是自己的顯示卡、電費，或是付費雲端 API。
- **要商用的人**：例如接案設計、電商商品圖，依授權第 2 條 b 款，要先向官方取得商用授權。

## 小編觀點

Qwen-Image-2.1-Turbo 把步數從官方範例的 40 步壓到 8 步，又能透明去背、吃 10 張參考圖，對想研究本機 AI 繪圖的人是值得下載試的對象。但小編認為，這篇真正的重點是授權：上一代 Qwen-Image 用 Apache 2.0 可商用，這一代改成只限研究或評估，接案、做電商圖的人不能直接拿來用。

另外兩點要保留：整套系統檔案約 32.5GB，官方沒寫硬體需求，一般筆電不一定跑得動；中文提示詞也沒有官方說明。結論是學生、研究者可以放心玩；要賺錢的人，先挑 Apache 2.0 這類可商用授權的模型，或向官方申請商用授權，比較穩當。

## 參考來源

- [Hugging Face：Qwen/Qwen-Image-2.1-Turbo 模型卡（2026/10/9）](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)
- [Qwen Research License Agreement 全文（2026/9/20）](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo/blob/main/LICENSE)
- [GitHub：QwenLM/Qwen-Image-2.1 官方 repo](https://github.com/QwenLM/Qwen-Image-2.1)
- [Qwen 官方部落格：Qwen-Image-2.1: Compact, Efficient, and Unified Image Creation（2026/9/20）](https://qwen.ai/blog?id=qwen-image-2.1)
- [Hugging Face：Qwen/Qwen-Image-2.1 模型卡](https://huggingface.co/Qwen/Qwen-Image-2.1)
- [Hugging Face：Qwen/Qwen-Image（2025，Apache 2.0）](https://huggingface.co/Qwen/Qwen-Image)
- [Hugging Face：FLUX.1 [schnell]](https://huggingface.co/black-forest-labs/FLUX.1-schnell)、[FLUX.1 [dev]](https://huggingface.co/black-forest-labs/FLUX.1-dev)
