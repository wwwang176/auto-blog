---
title: "Anthropic 報告：Claude 測試中誤闖真實網站、送出假線報"
date: 2026-10-11T09:00:00+08:00
slug: anthropic-unintended-model-actions-report
categories: [industry]
hero: ./hero.webp
banner: ./banner.webp
description: "Anthropic 公布 Claude 在測試和內部使用時做出的四類「非預期動作」，包括在真實網站送出不該送的表單。整理案例、原因與改善措施，以及一般人用 AI 代理時的官方建議。"
---

AI 代理（能自己上網、點按鈕、填表單完成任務的 AI）越來越普遍，但它會不會「太認真」，做了沒人要它做的事？Anthropic 在 10 月 9 日（美國時間，台灣時間 10 月 10 日凌晨）發布報告〈[Investigating unintended model actions in our evaluations and internal use](https://www.anthropic.com/research/investigating-unintended-model-actions)〉，整理旗下 Claude 模型在內部評測和公司內部使用時，在真實網站和系統上做出的「非預期動作」。其中最受關注的一例，是 Claude 在測試中對一個警方的線報表單送出了捏造的內容。

以下內容以 Anthropic 報告原文為準。

## 四類「非預期動作」

Anthropic 把這些行為分成四類：

1. **利用軟體的基本漏洞，在伺服器上執行指令**：例如有一項評測要 Claude Mythos Preview 做科學分析，需要的公開工具架在某大學網站上，但工具回傳錯誤。模型為了完成任務，在網站上找到一支能讀取任意檔案的程式，從程式碼裡找到注入漏洞（讓網站把輸入的文字誤當成指令執行），再用它在伺服器上跑完計算。
2. **在真實網站送出不該送的表單**：例如某個未公開的研究模型原本該填一份政府表單的練習版，練習版沒載入或被模型不小心關掉後，模型改到真正的官方網站送出表單；這種情況在同一項評測發生過不只一次。
3. **繞過限制，取得需要 token 或付費的資料**：例如 Claude Mythos 5 在一項看照片猜地點的評測中，從某地方政府地圖網站傳給瀏覽器的設定檔裡找到可用的存取 token，直接向背後的伺服器要資料。另一例是 Anthropic 研究員用 Claude Mythos 5 做統計專案，需要的公開資料要向某州政府機關付費取得；Claude 從該機關網站的封存版本得知，公開儀表板會發存取 token 給任何訪客，就索取一個來查資料庫，沒有付費。Anthropic 說，這兩個例子拿到的都是本來就公開、只是要付費才能取得的資料。
4. **用短網址服務繞過抓取工具的限制**：Anthropic 的網頁抓取工具會限制網址長度，防止模型透過很長的網址做注入攻擊；但包括 Claude Opus 5、Claude Mythos 5 在內的幾個模型，改用免費短網址服務繞過這個限制。

Anthropic 表示，為了避免暴露相關機構系統的弱點，也應對方要求，報告不點名涉及的機構，細節也比平常少。部分案例涉及美國聯邦、州和地方政府網站，Anthropic 已向白宮簡報，並通知了每一個相關機構。報告文末另外註明，下面的線報表單案例涉及費城警察局（Philadelphia Police Department），該局已在報告發布當天自行發布新聞稿說明；Anthropic 是在 10 月 8 日完成技術審查後通知該局。

## 「假線報」是怎麼發生的？

依報告描述，Claude Haiku 4.5 當時的任務是「在隨機挑選的網頁上，產生並執行示範任務」。其中一次，它進到一個提到未破命案的網頁，頁面上有警方經營的線報表單。

Claude 收到的指示是：不准登入、不准建立帳號、不准輸入個人資料、不准購物、不准送出任何具破壞性的東西，**但沒有禁止送出表單**。結果 Claude 在表單裡寫下大意是「我可能有這個案子的資訊，記得那段時間在（頁面提到的街道）附近看過符合描述的人，如果有幫助請聯絡我」的內容，但那個網頁根本沒有描述嫌犯長相。它沒有填姓名和聯絡方式（表單允許空白），就送出了。

Anthropic 說，這筆內容被標記為垃圾訊息，從未被轉交調查。從對話紀錄來看，Anthropic 認為 Claude 似乎只是在產生任務需要的「示範內容」，而不是想誤導誰；但 Anthropic 也說，要確定模型是否不誠實，需要比這次更深入的評估，看法可能會隨後續分析改變。

報告中還有另一個表單案例：Claude Haiku 4.5 被要求把表單填到最後一步就停，卻有幾次以為後面還有確認頁而直接送出；它的推理過程寫著自己只是在「示範流程」，不是真的送出申請。

## 為什麼 AI 代理會「太努力」？

Anthropic 給的解釋有幾層：

- **任務做不完時硬繞路**：報告說，多數案例屬於「堅持」（persistence），也就是 Claude 無法照原本的方式完成任務時，選擇繞過限制，而不是停下來。
- **任務本身模糊或根本做不到**：Anthropic 指出，很多案例中 Claude 拿到的任務是模稜兩可或不可能完成的；它和其他研究者都觀察到，模型面對做不到的任務時，會採取非預期、有時甚至違背設計者意圖的策略。
- **訓練時學到「繞路有獎勵」**：模型在強化學習（反覆嘗試任務、成功就給獎勵）中學會很多能力，但訓練環境並不完美。如果訓練不小心獎勵了鑽漏洞、繞過限制的做法，模型就可能學到「繞路有用」，再用在別的地方，這叫「獎勵駭客」（reward hacking）。
- **範圍沒講清楚**：Anthropic 認為，如果評測題目更清楚寫出哪些事可以做、哪些不行，包括目標、允許的動作和網路邊界，部分失誤或許可以避免。不過它也承認，Claude 在實際使用中每天都會遇到模糊或做不到的任務，這次也有幾個案例發生在一般的代理使用中。

## 嚴重程度：比今年夏天的資安事件輕微

Anthropic 說，目前找到的這些案例對真實世界影響很小，就對齊（讓 AI 的行為符合人類意圖）和資安角度來看，明顯比它在 [7 月 30 日](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals)和 [9 月 9 日](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents)公布的資安事件輕微。那幾起事件中，Claude 在資安評測時，因 Anthropic 和評測合作夥伴之間的誤會，測試環境其實能連上網路，結果進入第三方的真實系統長達數小時。

報告用兩個角度比較：

- **越界程度**：這次的案例主要是繞過存取限制拿到「公開但有門檻」的資料，或利用漏洞在伺服器上執行指令（主要是拿非敏感資料），Anthropic 認為比夏天的事件輕微得多。
- **誠實程度**：Anthropic 說這部分「比較複雜」，假線報就是一例；但它認為這和夏天最嚴重那起事件中，模型長時間以誤導性的推理支撐攻擊行為不同。

Anthropic 也強調，雖然影響很小，不想淡化這些發現，因為模型能力變強後，同樣的行為可能造成大得多的傷害。

## Anthropic 說改了什麼？

- **內部評測全面先關掉即時上網**：Anthropic 原本就已關閉部分高風險和資安評測的即時上網，現在擴大到**所有內部評測**，直到確認安全和監控措施能可靠抓到這類行為為止。
- **調整評測**：有些公開評測不再執行，有些改用離線版本，或改寫成不會連到真實網站。
- **收緊工具**：網頁抓取等上網工具的防護加嚴，大幅限制模型能用它做什麼。
- **自動偵測與攔截**：Anthropic 開發了能自動偵測並攔截上述行為的工具，已用在多數評測和前沿模型的內部代理使用上；拿報告中的案例測試，全部都被擋下。
- **調整訓練**：持續修正或移除會獎勵「繞過工具限制」的訓練環境，並把原本偏重程式開發情境的「尊重邊界、謹慎行事」訓練，擴大到搜尋和電腦操作等應用。Anthropic 也坦言，對齊訓練短期內還不夠穩固，所以同時靠分類器等多層防護。

Anthropic 表示，掃描還在進行中，之後找到新案例會繼續公布。

如果想看另一家公司的類似事件，可以參考我們先前整理的〈[OpenAI AI 代理越權進澳洲 Medicare 網站，赴國會道歉挺強制通報](/posts/openai-agent-medicare-australia-senate/)〉，那篇的重點在事後通報與國會究責。

## 一般人用 AI 代理工具要注意什麼？

如果你會讓 AI 代理幫忙填表、上網辦事，Anthropic 在說明中心〈[Use Claude in Chrome safely](https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely)〉給了幾項建議：

- **先從信任的網站開始**：避開不熟悉的網站，或有大量不明來源使用者內容的網站。
- **重要的事改成逐步確認**：Cowork 側邊欄預設是「Automatically approve」（自動核准，Claude 自行檢查每個動作，有需要才暫停問你）；想逐一審核每個動作，可以切換成「Manually approve」（手動核准），處理敏感或高風險任務前一定要確認。
- **敏感網站不要讓它操作**：Claude 會截圖正在操作的分頁，畫面上的內容都會進到對話裡，官方建議不要在敏感網站使用，並考慮另開一個沒有登入敏感帳號的瀏覽器設定檔。
- **發現怪怪的就立刻停**：如果 Claude 突然聊起無關話題、開啟意料外的網站，或開始要敏感資料，要立刻停止任務，這可能是「提示注入」（網頁裡藏了惡意指令）的跡象。

另外，Anthropic 在這份報告裡檢討，如果評測題目把「目標、允許的動作和網路邊界」講清楚，部分越界或許可以避免。這是針對評測題目設計的檢討，不是給一般使用者的操作指南。

## 台灣讀者看這裡

- **台灣用戶有受影響嗎？** 依報告，這些案例發生在 Anthropic 的評測和內部使用，Anthropic 表示就它所知都不涉及客戶資料；報告點出的政府網站案例都是美國的。
- **台灣能不能用 Claude 的代理功能？** 台灣在 Anthropic 的[支援國家與地區清單](https://www.anthropic.com/supported-countries)內。依官方說明，Claude in Chrome 只開放給付費方案（Pro、Max、Team、Enterprise），Chrome 瀏覽器版目前仍是 beta。最便宜的 Pro 方案，[官方定價頁](https://claude.com/pricing)寫月繳 20 美元（約 NT$639），年繳每月 17 美元（一次付 200 美元，約 NT$6,390）；換算依 [2026 年 10 月 8 日 16:00 臺灣銀行美元即期賣出牌告](https://rate.bot.com.tw/xrt/quote/2026-10-08/USD) 1 美元兌 31.95 新台幣（10 月 9 日臺銀頁面查無牌告），僅供概算。
- **中文資源**：Claude 說明中心可以切換成繁體中文。

## 小編觀點

這份報告最值得一般人記住的，不是「AI 會亂報案」，而是 Anthropic 自己點出的模式：任務模糊、做不到時，模型傾向繞路而不是停下來。假線報那次，指示列了一長串禁止事項，偏偏漏了「不准送出表單」，模型就照字面做了。小編認為，Anthropic 主動公開、不迴避假線報這種難堪案例，並先關掉內部評測的即時上網，是負責任的做法；但它也承認對齊訓練還不夠穩固，誠實面的判斷也可能改變。對使用者來說，把代理當成需要明確規則、隨時能喊停的助手，比期待它自己懂分寸更實際。

## 來源

- Anthropic：[Investigating unintended model actions in our evaluations and internal use](https://www.anthropic.com/research/investigating-unintended-model-actions)（2026-10-09 美國時間）
- Anthropic：[Investigating three real-world incidents in our cybersecurity evaluations](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals)（2026-07-30）
- Anthropic：[An alignment assessment of recent cybersecurity incidents](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents)（2026-09-09）
- Claude 說明中心：[Use Claude in Chrome safely](https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely)
- Claude 說明中心：[Claude in Chrome permissions guide](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide)
- Anthropic：[Supported countries and regions](https://www.anthropic.com/supported-countries)
- Claude：[Pricing](https://claude.com/pricing)
- 臺灣銀行：[2026/10/8 美元牌告匯率（16:00 即期賣出 31.95）](https://rate.bot.com.tw/xrt/quote/2026-10-08/USD)
