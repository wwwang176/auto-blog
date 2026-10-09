---
title: "WIRED 實測 OpenAI Dots：全天候 AI 代理能辦事，也會出錯"
date: 2026-10-09T12:00:00+08:00
slug: openai-dots-agent-wired-hands-on
categories: [ai-tools]
hero: ./hero.webp
banner: ./banner.webp
description: "OpenAI Dots 是 24 小時待命、有自己雲端電腦的 ChatGPT 代理，目前限 Pro 等付費方案。WIRED 記者實測：幫忙挑沙發還算可靠，但會叫錯名字、過不了驗證碼。"
---

OpenAI 在美國時間 **2026 年 9 月 29 日**的 DevDay 開發者大會上發表了 **Dots**（官方寫法是小寫的 dot／dots），定位是「全天候待命、什麼都能幫你處理」的 AI 代理。科技媒體 WIRED 記者 Reece Rogers 在 10 月 7 日刊出兩天的試用心得，結論大致是：**能幫上忙，但還不夠可靠**。

這篇先用官方資料說明 Dots 是什麼、誰能用，再整理 WIRED 記者的實測重點。以下的使用經驗都來自 WIRED 記者，小編沒有親自使用。

## Dots 是什麼？

簡單說，Dots 是住在 ChatGPT 裡、**不用你一直盯著也會繼續做事**的 AI 助理。依 [OpenAI 官方公告](https://openai.com/index/introducing-dots/)：

- **由 GPT-6 Astra 驅動**，每個 dot 都有**自己的雲端電腦和瀏覽器**，可以 24 小時朝你設定的目標工作。
- 透過外掛生態系，可以連接**超過 4,000 個 App**，例如信箱、行事曆、檔案。
- **會越用越懂你**：它會從你的回饋學習你的偏好和做事標準。
- 你沒在用的時候，它會在背景做「主動研究」（proactive research），但這時連接的 App 只有**唯讀**權限，不能發訊息、改內容或操控你的電腦。
- 你可以隨時打開它的雲端電腦檢查它在做什麼；也可以授權它連到你自己的筆電。

官方舉的例子多半是工作情境，例如整理客戶回饋後修程式、依新數據更新研究圖表。[ChatGPT 繁體中文介紹頁](https://chatgpt.com/zh-Hant/features/dots/)也舉了生活例子：幫你找符合預算的週末旅行，或在你加班時列出外送晚餐選項，**等你核准才下單**。

### 在哪裡跟它說話？

依官方公告，可以在 ChatGPT 的桌面版、網頁版和手機 App 傳訊息或直接語音通話，也能在 Slack 和 Microsoft Teams 找它，簡訊則是「即將推出」。依 [OpenAI 說明中心](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot)，簡訊目前只是**美國 Pro 用戶的限量測試**。

要注意：**第一次建立 dot 必須用電腦**（ChatGPT 桌面 App 或電腦瀏覽器），設定好之後才能在手機 App 上跟它聊；手機瀏覽器不支援。

### 安全機制

官方說 Dots 預設有幾道防線：

- **自訂規則**：哪些事可以直接做、哪些要先問你、哪些禁止，都能自己設定。
- **自動審查**：可能影響你帳號或對外分享資料的動作，會先比對你的指示和規則，決定能不能做、要不要你核准。
- **有些事一定要你自己來**，例如改密碼。
- 登入網站時可以使用你存好的密碼，但密碼不會讓模型看到。

官方自己也提醒：「Dots 仍可能出錯，重要的工作一定要檢查。」

## 誰能用？要多少錢？

依[官方公告](https://openai.com/index/introducing-dots/)和[說明中心](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot)：

| 方案 | 能不能用 |
|---|---|
| Pro（個人） | 可以，逐步開放；歐洲經濟區、瑞士、英國除外 |
| Business Premium | 可以，所有支援 ChatGPT 的地區 |
| Enterprise（含 Edu、Healthcare） | 測試版，要工作區管理員開啟，預設關閉 |
| 免費、Go、Plus | 目前沒有 |

- **第一個 dot 包含在 Pro 或 Business Premium 方案裡，不另外收費**，方案也附帶一定的「深度工作」額度，上線第一個月額度較寬。
- 跟 dot 聊天**不算進** ChatGPT 的用量上限；但它幫你派給 Codex 或 ChatGPT Work 的任務，照常計入。
- 官方說之後可以加買更多 dot，或提升單一 dot 的速度與每月工作量，價格沒有公布。

Pro 目前有三種月費：Pro 100、Pro 200、Pro 500，分別是每月 100、200、500 美元（[OpenAI 說明中心](https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers)）。也就是說，**最便宜的入場門檻是每月 100 美元**。

## WIRED 記者實測：幫忙買沙發

WIRED 記者 Reece Rogers 試用了兩天，主要任務是請 dot 幫他和伴侶挑一張新沙發（[WIRED 原文](https://www.wired.com/story/openai-wants-its-new-agent-to-run-your-life-mine-said-it-loved-me/)）。重點整理如下：

**做得不錯的地方**

- 記者給了門框尺寸後，dot 主動追問預算，還察覺到有兩個人同時在跟它說話，回覆時會同時顧及兩人。
- 它交出一份約三頁的比較資料，列了四張沙發的價格、尺寸、商品連結、退貨規定和圖片，內容相當詳細。
- 記者用語音補充想要的顏色和款式、要求列出 10 個選項並用評分表說明理由後，推薦的沙發越來越接近兩人真正想買的。記者還請它持續追蹤這些商品，有降價就通知。
- 記者的整體評價是：有些小失誤，但結果算紮實。

**出錯的地方**

- **一開口就叫錯名字**：記者叫 Reece，它卻用別的名字打招呼。
- **聽錯話**：記者小聲嘀咕時，它誤以為對方說了「我愛你」，還回了一句「我也愛你」。事後它解釋是聽錯了，並承認這種說法暗示了它其實沒有的人類情感。OpenAI 發言人對 WIRED 表示，這屬於「呼應使用者的回應」，但助理不應主動營造過度的親密感；Dots 也只開放給成年用戶。
- **過不了驗證碼**：記者請它清查訂閱、取消不需要的項目。它找到一筆定期訂購，但取消頁面跳出拼圖驗證碼。它先問能不能幫忙解，結果失敗，只好請記者自己來。OpenAI 發言人表示，在使用者同意的前提下，Dots 有時能解開驗證碼。

記者的看法是：Dots 就像 ChatGPT 剛加入網頁瀏覽功能時，一開始不太好用，之後幾個月才明顯改善；Dots 可能也會走類似的路。他也提醒，連接 Gmail 這類帳號之前，要先想清楚隱私和安全的風險。

## 台灣讀者看這裡

- **能不能用**：依[說明中心](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot)，Pro 方案排除的地區只有歐洲經濟區、瑞士和英國，台灣不在排除名單中；但官方說是逐步開放，符合資格的帳號也可能要等幾天才看得到。Business Premium 則是所有支援 ChatGPT 的地區都能用。
- **中文**：ChatGPT 介面支援中文（[官方語言清單](https://help.openai.com/en/articles/8357869-how-to-use-chatgpt-in-a-language-other-than-english-alpha)），Dots 也有官方的[繁體中文介紹頁](https://chatgpt.com/zh-Hant/features/dots/)，中文名稱就叫「dot」。
- **價格**：依 [App Store 台灣區 ChatGPT 頁面](https://apps.apple.com/tw/app/chatgpt/id6448311069)列出的訂閱價格（2026/10/9 查詢），Pro 100 每月 NT$3,300、Pro 200 每月 NT$6,990、Pro 500 每月 NT$16,500。同一頁列出的 Plus 每月 NT$690，目前不含 Dots。
- **跟其他工具比**：WIRED 提到，同類型的 Meta Muse 是免費提供，而 Dots 要付每月 100 美元起的訂閱才能用。

## 小編觀點

Dots 讓 AI 助理從「你問它答」走向「你交代、它自己去做」，方向值得關注，但小編認為一般人還不必急著為它升級。最低每月 NT$3,300 的 Pro 門檻，對多數只用 ChatGPT 查資料、寫東西的人來說太高。WIRED 的實測剛好點出代理型 AI 的兩個難題：它能把比價、整理資料做得很細，但叫錯名字、聽錯話、卡在驗證碼這類小狀況，正是「放手讓它做」時最讓人不安的地方。尤其它可以連上信箱等帳號、代你下單，一旦誤會指令，代價比答錯一題高得多。官方設計了核准機制和自訂規則，方向正確，成效仍待時間驗證。已經在付 Pro 的人可以先交給它比價、追蹤降價這類低風險工作，牽涉付款或帳號的事，最好維持先核准再執行。

## 參考來源

- [Introducing dots（OpenAI，2026/9/29）](https://openai.com/index/introducing-dots/)
- [DevDay 2026 Recap（OpenAI，2026/9/29）](https://openai.com/index/devday-2026-recap)
- [Getting started with your dot（OpenAI 說明中心）](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot)
- [dot：全天候為你處理大小事的智慧體（ChatGPT 繁體中文介紹頁）](https://chatgpt.com/zh-Hant/features/dots/)
- [About ChatGPT Pro tiers（OpenAI 說明中心）](https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers)
- [How to change your language setting in ChatGPT（OpenAI 說明中心）](https://help.openai.com/en/articles/8357869-how-to-use-chatgpt-in-a-language-other-than-english-alpha)
- [OpenAI Wants Its New Agent to Run Your Life. Mine Said It Loved Me（WIRED，2026/10/7）](https://www.wired.com/story/openai-wants-its-new-agent-to-run-your-life-mine-said-it-loved-me/)
- [App Store 台灣區：ChatGPT](https://apps.apple.com/tw/app/chatgpt/id6448311069)（訂閱價格，2026/10/9 查詢）
