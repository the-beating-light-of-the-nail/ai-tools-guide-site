---
description: "如果一個人同時使用 WPS、ima、Obsidian、微信收藏、會議記錄和本地檔案，怎樣分工才能避免“每個地方都有一份，但沒有一份可信”？"
---

# 收藏的東西怎麼變成能用的知識？WPS / ima / Obsidian / 微信收藏這樣分工

你大概也有過這種時刻：WPS 裡存一份、ima 裡收藏一篇、微信裡轉存一條、Obsidian 裡又記一筆，本地資料夾還躺著一個副本。等真要寫東西，翻了一圈，發現每個地方都有一份，但沒有一份你敢拍胸脯說「這是最新的、可信的」。

知識管理的痛點，往往不是「存得不夠多」，而是「散得太開、主版本不清」。這一篇不談大道理，只幫你把幾樣常用工具分好工：誰當主版本、誰當臨時收件箱、誰只負責移動端收集。

## 先定主版本，再談連線工具

你先把一句話記牢：一個穩健的個人知識系統可以有多個入口，但只能有一個清楚的主版本。下面這張表把每樣工具的「推薦角色」和「不建議承擔」列出來了，你可以照著對號入座。

| 系統 | 推薦角色 | 不建議承擔 |
| --- | --- | --- |
| WPS / Kdocs | 工作檔案、表格、協作筆記和團隊知識 | 所有私人原始資料的唯一備份 |
| ima | 微信生態收集、移動問答和知識庫檢索 | 儲存沒有來源的二手結論 |
| Obsidian | 本地 Markdown、雙鏈、專題 Wiki 和長期遷移 | 未備份情況下讓自動化批次移動或重新命名 |
| 微信收藏 / 靈感工具 | 低摩擦入口和臨時收件箱 | 永久歸檔與結構化檢索 |
| 飛書 / 騰訊檔案 | 團隊協作、評論和釋出副本 | 預設擴大私人資料可見範圍 |

## 場景一：靈感來了，你只記下一句話

靈感最怕兩種處理：一種是沒來得及記就溜了，另一種是 AI 立刻把一句話擴寫成一篇看似完整、卻已經偏離你原意的文章。

你可以用這兩個 Skill 接住靈感：[靈感捕手](https://skillhub.cn/skills/inspiration-hunter-skill)（自動分類並寫入 Markdown 收件箱）、[ima-skills](https://skillhub.cn/skills/ima-skills)（移動端記錄、知識庫讀寫與檢索）。Obsidian 本地目錄作為長期主版本時，還能接入 Wiki 類 Skill。

```text
把下面內容記入"靈感收件箱"，保留我的原話，不擴寫、不評價：
"AI 工具真正的門檻不是提示詞，而是驗收結果。"
```

![靈感收件箱：保留原話不擴寫](/workbuddy/case-knowledge/assets/001_image_M29JbJQ3po.png)

## 場景二：微信收藏很多，真寫的時候還是搜不到

你微信裡攢了一大堆收藏，真到寫稿時卻搜不出來、也串不起來。問題通常出在「只收集、不匯出」——收藏躺在微信裡，跟你的知識庫是兩張皮。

可用 Skill：[微信收藏知識庫](https://skillhub.cn/skills/wechat-favorite)（匯出、分類，進入 ima / Obsidian / Notion）、[URL to Obsidian](https://skillhub.cn/skills/url-to-obsidian)（抓取網頁、總結並儲存到 Vault）、[公眾號內容提取](https://skillhub.cn/skills/wxpublic-fetch)（公眾號文章儲存為本地 Markdown）。

```text
處理本週微信收藏，只讀，不刪除原收藏。
```

![處理微信收藏：只讀匯出並分類](/workbuddy/case-knowledge/assets/002_byKl8HZ2_TtombzmOwo.jpg)

## 場景三：把 ima 當你的移動知識入口

ima 的優勢不是「問答更聰明」，而是手機收集、知識庫讀寫和微信上下文銜接順手。你用 [ima-skills](https://skillhub.cn/skills/ima-skills) 時，先想清楚目標知識庫和寫入規則，別讓內容亂塞進一個你後來找不到的地方。

```text
將我剛選擇的 3 份檔案放入 ima"WorkBuddy 案例庫"的收件箱。
```

![把檔案放入 ima 知識庫收件箱](/workbuddy/case-knowledge/assets/003_image_D0c8blIsEo.png)

## 場景四：Obsidian 不是資料夾，而是能維護的 Wiki

你如果拿 Obsidian 當普通資料夾，就浪費了它的雙鏈和長期遷移能力。把它當作可維護的 Wiki 才用得值。可用 Skill：[Obsidian 資料整理](https://skillhub.cn/skills/obsidian-core-notes)（維護核心筆記、專題綜合和目錄連結）、[agent + Obsidian 長期記憶](https://skillhub.cn/skills/obsidian-memory)（在明確專案邊界後讀寫長期記憶）。

```text
把一篇公眾號文章交給 WorkBuddy 解析，再要求放進指定的 Obsidian 素材目錄。
```

WorkBuddy 能識別文章正文和作者，並生成 Markdown 條目。

![公眾號文章解析為 Obsidian Markdown 條目](/workbuddy/case-knowledge/assets/004_test_SSsAbxS8po.jpg)

## 常見問題

**收藏那麼多，為什麼我還是寫不出東西？**
你缺的通常不是素材，而是一條「從收集到能用」的鏈路。先定主版本，再讓每個工具各管一段，寫完自然有料可用。

**ima 和 Obsidian 要同時用嗎？**
看你的習慣。ima 適合手機隨手收、微信生態裡撈；Obsidian 適合本地長期沉澱和雙鏈整理。你讓 ima 當入口、Obsidian 當主版本，是最穩的組合。

**讓 AI 整理知識，會不會把我的原話改掉？**
會，如果提示詞沒說清楚。你像上面那樣寫明「保留原話、不擴寫、不評價」，AI 就不會自作主張替你發揮。

**自動化會不會把我檔案搞亂？**
會，如果你在沒備份時讓自動化批次移動或重新命名。Obsidian 那條「不建議承擔」說的就是這事——備份第一，自動化第二。

---

> 更系統的"AI 依據什麼"（知識庫、RAG 與記憶的區別），見[課外閱讀：看懂 AI 工作系統](/zh-tw/workbuddy/11-ai-work-system/)。
