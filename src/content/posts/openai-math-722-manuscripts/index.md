---
title: "OpenAI 公開 722 份 AI 數學手稿：openai/math 是什麼、為什麼重要？"
date: 2026-10-07T21:30:00+08:00
updated: 2026-10-08T15:39:00+08:00
slug: openai-math-722-manuscripts
categories: [open-source, industry]
hero: ./hero.webp
banner: ./banner.webp
description: "OpenAI 在 GitHub 公開 openai/math，收錄內部未發布模型寫出的 722 份數學手稿與 Lean 證明。白話整理內容、驗證方式，以及一般人該怎麼看。"
---

OpenAI 在台灣時間 **2026 年 10 月 7 日清晨**（美國時間 10 月 6 日）發表文章[〈Sharing AI progress in mathematics〉](https://openai.com/index/sharing-ai-progress-in-mathematics/)，同時在 GitHub 開放了 [openai/math](https://github.com/openai/math) 公開庫。裡面放的是 OpenAI 一個**尚未對外推出的內部模型**，針對數學界的開放問題寫出的研究成果。

## 這些手稿是什麼？

根據 [openai/math 的說明文件](https://github.com/openai/math)，目前收錄：

- **722 份數學手稿**，依主題整理成 **372 個「結果家族」**。一個家族裡可能有主要結果、延伸推論或另一種證明方式。
- 手稿附有 PDF 與原始檔，每個家族都依數學領域分類。
- 許多（但不是全部）結果附有 **Lean 形式化證明**，也就是可以交給電腦逐行檢查邏輯的版本。
- **10 份模型推理過程的摘要**，讓外界看到 AI 是怎麼一步步想出來的，例如圓周率 π 的無理性指數、Mahler 猜想等。

OpenAI 說，這些成果來自內部評測：他們向模型丟了**約 4,000 道題目**，每個結果平均用掉相當於 **ChatGPT Pro 約 3 小時的思考算力**，再挑出夠有分量的整理成冊。整個 repo 採 Apache 2.0 授權，任何人都能下載閱讀。

## 為什麼重要？

**1. AI 從「解考題」走到「做研究」。** OpenAI 表示，他們原本的數學測驗已經被模型考到接近滿分，才改拿真正還沒解決的研究問題來測。這代表 AI 處理的不再是有標準答案的題目。

**2. 可以被檢查，不只是自說自話。** 有 Lean 證明的部分，任何人都能在自己的電腦上重跑驗證。OpenAI 開發者論壇上，已經有使用者回報重新檢查了一個與黎曼 ζ 函數有關的證明，結果通過。

**3. 對科學界的衝擊。** 《Scientific American》的報導標題形容數學界「早已處於震驚之中」，並指出數學家可能要花好幾個月才能消化，判斷哪些是真正的新想法、哪些只是既有技巧的組合。

## 一般人該怎麼看？

- **還不是定論。** OpenAI 自己也說，這批成果處在不同的驗證階段，**沒有形式化證明的部分可能有錯**，發現問題會更新，並保留舊版本供查。
- **已經有撤回和修正。** 依 openai/math 的[更新紀錄](https://github.com/openai/math/blob/main/history.md)，OpenAI 在美國時間 10 月 7 日發現其中一篇手稿有符號錯誤，連同兩篇依賴它的手稿共**撤回 3 份**，另外修訂了 14 份。目前公開庫收錄 **719 份**手稿，約 42%（300／719）的主要結果有 Lean 形式化證明。
- **你現在用不到這個模型。** 產出這些手稿的是內部模型，OpenAI 在[官方文章](https://openai.com/index/sharing-ai-progress-in-mathematics/)中表示，正在努力以負責任的方式釋出這個模型。
- **公開方式也經過諮詢。** OpenAI 表示曾諮詢普林斯頓高等研究院（IAS）的數學與 AI 獨立顧問小組，來決定這次的公開方式。

## 台灣讀者看這裡

- **台灣能不能看**：可以。[openai/math](https://github.com/openai/math) 公開在 GitHub，任何人都能免費下載，採 Apache 2.0 授權。
- **中文**：手稿和說明文件都是英文，官方沒有提供中文版；內容是研究等級的數學論文，一般讀者直接讀會很吃力，可以先從公開庫建議的總覽 PDF 看起。

## 小編觀點

（以下是小編的看法，不是官方說法，也不是實際使用心得。）

這批手稿對一般人沒有立即影響，但它是觀察 AI 能力的好指標：AI 開始處理沒有標準答案的研究問題，而且一部分結果能交給電腦逐行檢查。小編認為這次最值得肯定的是透明度，連撤回和修正都公開記錄；10 月 7 日的更新因為一個符號錯誤撤回 3 份手稿，正好說明沒有形式化證明的部分確實可能出錯。所以我們的立場是審慎樂觀：進展是真的，但「AI 已經能取代數學家」這類說法言之過早，真正的評價要等數學界花時間檢驗。另外，產出手稿的是還沒推出的內部模型，一般人目前用不到；每個結果平均耗用相當於 ChatGPT Pro 約 3 小時的思考算力，也代表這種能力短期內不會便宜。

## 來源

- [OpenAI：Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics/)
- [GitHub：openai/math](https://github.com/openai/math)
- [GitHub：openai/math 更新紀錄（history.md）](https://github.com/openai/math/blob/main/history.md)
- [OpenAI Developer Community：First look at mathematics manuscripts from an internal frontier model at OpenAI](https://community.openai.com/t/first-look-at-mathematics-manuscripts-from-an-internal-frontier-model-at-openai/1403886)
- [Scientific American：OpenAI unleashes hundreds more math results upon a field already in shock](https://www.scientificamerican.com/article/openai-unleashes-hundreds-more-math-results-upon-a-field-already-in-shock/)
