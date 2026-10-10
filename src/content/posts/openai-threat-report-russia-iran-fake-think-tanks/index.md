---
title: "OpenAI 揪出俄、伊用 ChatGPT 經營假智庫和假記者"
date: 2026-10-11T12:00:00+08:00
slug: openai-threat-report-russia-iran-fake-think-tanks
categories: [industry]
hero: ./hero.webp
banner: ./banner.webp
description: "OpenAI 最新威脅報告：俄羅斯來源帳號操控拉美假智庫，伊朗來源帳號用 7 個假記者身分投稿近 100 篇。整理兩案經過，以及從報告看得出的辨識破綻。"
---

AI 寫得又快又通順，也可能被拿來包裝假消息。OpenAI 在 10 月 8 日（美國時間）發布威脅報告〈[Disrupting AI-enabled "false front" operations](https://openai.com/index/disrupting-ai-enabled-false-front-operations/)〉，說它封鎖了兩組從事「隱密影響力行動」的 ChatGPT 帳號：一組來自俄羅斯，另一組來自伊朗。兩組都不只是在社群網站洗留言，而是打造「假門面」，也就是假智庫和假記者，把特定立場的內容送進真正的媒體。

先說清楚範圍：以下「俄羅斯來源」「伊朗來源」都是 **OpenAI 的歸因**，指帳號的來源地。OpenAI 沒有把任何一案歸給特定政府機關。俄羅斯案方面，報告提到其中部分假消息，先前已被開源研究者歸給一個名為「Politology」（又稱「La Compania」）的俄羅斯組織，據報導是瓦格納集團等普里格津旗下組織的後繼者；伊朗案方面，OpenAI 說看起來像商業公司接案，但無法確認是哪一家。CNA 報導也指出，OpenAI 沒有公布涉及的帳號數量，也沒有指認最終的幕後操作者。兩組人都是透過 VPN 連上 ChatGPT。

## 影響力等級：第一次出現 5 級

OpenAI 用研究人員 Ben Nimmo 提出的「[影響力行動突破量表](https://www.brookings.edu/articles/the-breakout-scale-measuring-the-impact-of-influence-operations/)」（Breakout Scale）評分，1 最低、6 最高，看的是內容有沒有「突破」到原本圈子以外。

| 行動（OpenAI 取的代號） | OpenAI 歸因 | 主要手法 | OpenAI 評級 |
|---|---|---|---|
| Dark Clark | 俄羅斯來源 | 操控拉丁美洲假智庫「Social Research Center」、散布假「外洩」文件和假錄音 | 5 級 |
| Bogus Bylines（文章投稿） | 伊朗來源 | 7 個假記者身分，向中小型網路媒體投稿 | 4 級 |
| Bogus Bylines（社群留言） | 伊朗來源 | 成批產生英文、波斯文留言 | 2 級 |

OpenAI 表示，Dark Clark 是它開始發布這類報告以來，**第一個 5 級**的案例，因為有證據顯示它引發了多個國家的政治人物公開回應。OpenAI 也整理過去兩年半揭露的 30 起影響力行動，發現想辦法把內容送進真實媒體的行動，潛在觸及和影響通常最高。CyberScoop 報導也提到，OpenAI 追蹤的影響力行動大多影響很小，很少超過 1 或 2 級。

## 俄羅斯來源「Dark Clark」：假智庫、真員工

依 OpenAI 報告：

- **目標**：拉丁美洲各國，多數內容在打擊烏克蘭在當地的形象，部分想影響阿根廷、玻利維亞等國的內政。
- **假智庫**：操作者透過一個叫「Mia Clark」的假身分，控制一個自稱研究平台的「Social Research Center」（SRC）。他們用 ChatGPT 寫的內部報告裡，提到薪資級距、雇用和解雇等決定，OpenAI 因此判斷他們是在「控制」這個機構，而不只是合作。
- **員工不知情**：OpenAI 說，現有證據顯示 SRC 在拉美的員工並不知道自己在替俄羅斯團體工作，是真心在做訪談和研究。OpenAI 在 SRC 網站找到 60 多篇文章，大多是原創。OpenAI 稱這是它兩年半來遇過「最複雜的假門面行動」。
- **ChatGPT 主要拿來寫內部報告**：OpenAI 說，這組人最常做的是請 ChatGPT 撰寫、更新給上級的工作報告，真正用來產生宣傳內容的比例不高。少數例子包括請 AI 把指控烏克蘭官員貪汙的假信件翻成西班牙文、寫配音稿，或校稿一份假合約。
- **假消息真的擴散了**：報告舉例，操作者聲稱偽造秘魯教育單位的電子郵件，要學校舉辦以烏克蘭為主題、並提到爭議人物 Stepan Bandera 的活動，再把新聞送進秘魯和波蘭媒體；OpenAI 在公開資料中找到相符的報導，波蘭一位歐洲議會議員也公開回應。另一個例子是玻利維亞抗議期間流傳的假錄音，聲稱政府要停止供水給拉巴斯，後來當地國營水公司出面否認。

OpenAI 也提醒，這組人常把跟自己無關的事件寫成自己的功勞，所以他們內部報告裡的「戰果」不能照單全收。NPR 引述克萊姆森大學研究員 Darren Linvill 的看法：這些人想用 AI 少做點事，結果反而因此被抓到。

## 伊朗來源「Bogus Bylines」：7 個假記者、近 100 篇文章

依 OpenAI 報告：

- **7 個假署名**：操作者用 7 個假記者身分投稿，多半自稱美國或其他西方國家的記者，專長是國際政治、中東或人權；有些身分還有社群帳號撐場面。
- **AI 當編輯助理**：典型做法是請 ChatGPT 對照某家媒體的投稿規定修改英文長文，再寫一封投稿信給編輯。
- **刊出規模**：OpenAI 用公開資料找到近 100 篇以這些假署名刊出或轉載的文章，分布在十幾家中小型網路媒體，時間從 2025 年 7 月到 2026 年 10 月，主題以美伊衝突為主。NPR 報導，刊登的媒體包括美國的 Daily Kos 和英國的 Middle East Monitor。
- **留言幾乎沒人理**：同一組人也用 ChatGPT 成批產生留言，把美國描繪成侵略者、伊朗描繪成受害者，但 OpenAI 找到的留言互動數多半只有個位數或兩位數。他們的內部報告還用「被留言的原貼文瀏覽數」來算成效，OpenAI 認為這種算法大幅誇大了影響。
- **幕後是誰**：OpenAI 說，整體活動看起來像商業公司接案做的影響力行動，但無法確認是哪一家。

媒體的回應：NPR 報導，Daily Kos 回應說，假身分發文的社群區和該站員工的報導是分開的；依網站上的聲明，任何人都能註冊在社群區發文，刊出前不經 Daily Kos 員工審查。Middle East Monitor 則向 NPR 表示，正在檢討投稿流程、加強編輯把關。

## AI 在這兩案裡扮演什麼角色？

OpenAI 的結論是，這兩案的手法跟 AI 出現前的影響力行動很像，例如 2016–17 年由俄羅斯軍事情報單位操作的假記者「Alice Donovan」。差別在於 AI 讓其中幾個環節變輕鬆：更大量、更有效率、語言更自然、也更會改稿。OpenAI 也說，這些行動放進真媒體的內容，並不全是它的模型產生的。

NPR 引述 Linvill 的說法，AI 幫這組伊朗操作者寫出「看起來、讀起來都很真實」的文字，真實到能被正規媒體刊出，這在幾年前會困難得多。

## 怎麼辨識可疑的「智庫」和「記者」？

報告沒有列出給一般人的檢查清單，但案例裡露出的破綻可以當參考：

- **自稱的地點和帳號資訊對不上**：自稱「美國自由撰稿人」的假記者，社群平台的帳號透明度資訊卻顯示帳號在伊朗；SRC 的 X 帳號顯示位置在德國，卻是透過俄羅斯 App Store 連線（OpenAI 報告）。
- **規模和人數對不上**：SRC 的 LinkedIn 頁面宣稱有 200–500 名員工，卻只列出 2 名員工；操作者在報告中還提到用更多假帳號追蹤主帳號，讓它看起來更可信（OpenAI 報告）。
- **掛著知名媒體 logo，但帳號很新、追蹤者很少**：一則配上旁白的假信件照片，由一個冒用巴拿馬 TVN Noticias 電視台 logo 的 TikTok 帳號發出，那個帳號只有 1 個追蹤者，發完就停更（OpenAI 報告）。
- **留言在幾分鐘內成批出現**：報告附的例子中，一批英文假留言在 10 分鐘內、一批波斯文假留言在 13 分鐘內集中出現；這些留言得到的讚，很多來自同夥帳號（OpenAI 報告）。
- **刊在媒體網站上，不代表經過編輯審查**：依 Daily Kos 網站上的聲明，社群區文章刊出前不經該站員工審查（NPR 報導）。
- **文件裡的公司或機構查不到**：厄瓜多事實查核單位就是發現假合約上的公司，在該國公司登記資料中查不到（OpenAI 報告引述）。

## 台灣讀者看這裡

這份報告沒有提到台灣。不過在台灣收到可疑訊息時，可以用這些查核資源：

- **[台灣事實查核中心](https://tfc-taiwan.org.tw/)**：官網說明以「專業、透明、公正」原則查核公共事務相關訊息。依[法務部調查局整理的查證資訊](https://www.mjib.gov.tw/EditPage/?PageID=adf9b60f-98af-4b65-b996-4f74145a4cd0)，LINE 官方帳號是 @tfctaiwan。
- **[MyGoPen 麥擱騙](https://www.mygopen.com/)**：依[官方說明](https://www.mygopen.com/p/blog-page_19.html)，2015 年成立。[使用教學](https://www.mygopen.com/p/blog-page_28.html)寫到，在 LINE 加 @mygopen，把文字、圖片、影片轉傳過去就能快速查證；資料庫查不到時，會引導到真人查證。
- **[Cofacts 真的假的](https://cofacts.tw/)**：依[官方介紹](https://cofacts.tw/about)，是 g0v 公民科技社群的專案，由群眾協作和聊天機器人查核訊息，志工查核時必須附上出處。在 LINE 加 @cofacts，轉傳可疑訊息即可。
- **[LINE 訊息查證](https://fact-checker.line.me/)**：依法務部調查局的查證資訊，LINE 官方帳號是 @linefactchecker；[LINE 2019 年的新聞稿](https://linecorp.com/tw/pr/news/tw/2019/2791)說明，首波合作查核夥伴包括台灣事實查核中心、MyGoPen、真的假的和蘭姆酒吐司。

MyGoPen 的教學也提醒：找不到的訊息，並不代表它就是對的。

## 小編觀點

這份報告最值得注意的，不是 AI 生成多少假內容，而是 OpenAI 自己說的：手法和 AI 出現前差不多，AI 只是讓改稿、翻譯、寫投稿信更省力。真正讓內容擴散的，是不知情的員工和被利用的投稿管道。所以小編認為，與其擔心「AI 會不會寫假新聞」，更實際的是看作者、看機構、看帳號資訊對不對得上。也要留意這是 OpenAI 單方面的調查與歸因：幕後是誰、實際影響多大，報告自己也承認有查不到的部分。平台主動揭露是好事，但也只看得到自家服務上的活動，讀者自己的查證習慣還是最後一道防線。

## 來源

- OpenAI：[Disrupting AI-enabled "false front" operations](https://openai.com/index/disrupting-ai-enabled-false-front-operations/)（2026-10-08 美國時間）
- NPR：[OpenAI bans Russian, Iranian accounts over influence efforts](https://www.npr.org/2026/10/08/nx-s1-5995576/openai-russia-iran-influence-operations-chatgpt)
- CyberScoop：[OpenAI says Iran, Russia used AI journalists, think tanks to influence Western media](https://cyberscoop.com/openai-disrupts-russia-iran-ai-influence-operations/)
- CNA：[Russian fake think-tank with real employees exposed in 'most complex' influence operation attempt, OpenAI says](https://www.channelnewsasia.com/world/openai-russia-iran-chatgpt-influence-fake-front-6444996)
- Brookings：[The Breakout Scale: Measuring the impact of influence operations](https://www.brookings.edu/articles/the-breakout-scale-measuring-the-impact-of-influence-operations/)（Ben Nimmo，2020）
- 台灣事實查核中心：[成立宗旨](https://tfc-taiwan.org.tw/about/)
- 法務部調查局：[假訊息查證參考資訊](https://www.mjib.gov.tw/EditPage/?PageID=adf9b60f-98af-4b65-b996-4f74145a4cd0)
- MyGoPen：[關於我們](https://www.mygopen.com/p/blog-page_19.html)、[LINE 快速查證使用教學](https://www.mygopen.com/p/blog-page_28.html)
- Cofacts 真的假的：[關於](https://cofacts.tw/about)
- LINE 台灣：[「LINE 訊息查證」平台上線](https://linecorp.com/tw/pr/news/tw/2019/2791)
