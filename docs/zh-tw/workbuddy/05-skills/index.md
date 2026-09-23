---
description: "你讓 WorkBuddy 寫一篇文章，每次都得在對話方塊裡反覆叮囑：「別寫太 AI」「長短句結合」「別編例子」。同樣的叮囑你說了一遍又一遍，它還是偶爾走樣。"
---

# WorkBuddy 的 Skill 是什麼？裝一個就讓 AI 照著老手的套路幹活

你讓 WorkBuddy 寫一篇文章，每次都得在對話方塊裡反覆叮囑：「別寫太 AI」「長短句結合」「別編例子」。同樣的叮囑你說了一遍又一遍，它還是偶爾走樣。你心裡大概想過：這些重複的要求，能不能一次性教給它，以後不用再講？能，這就是 Skill 要解決的問題。

WorkBuddy 本身負責理解任務、組織執行；Skill 則是一組可複用的說明、指令碼、參考資料和資源——你告訴它某類任務該怎麼做、呼叫什麼工具、交付什麼格式。你裝上一個寫作風格的 Skill，往後發一句「寫一篇 WorkBuddy 文章」，習慣它自己帶，你不用每次重講。

## 一個標準 Skill 長什麼樣

最標準的 Skill，大概長這樣——只有 `SKILL.md` 是必須的，其餘是你按需加的輔助檔案：

```text
my-skill/
├── SKILL.md
├── scripts/
│   └── check.py
├── references/
│   └── guide.md
└── assets/
    └── template.pptx
```

你只要記住，其中只有 `SKILL.md` 是必須的，開頭兩行寫清名稱和用途：

```markdown
---
name: tech-article-writing
description: 用于撰写 AI 产品、模型评测和科技行业相关文章
---

收到写作任务后：

1. 先确认文章核心角度
2. 查找一手资料
3. 对核心事实交叉验证
4. 根据用户写作风格完成初稿
5. 检查禁用句式和 AI 味表达
```

## Skill 是怎麼被呼叫的

Skill 最關鍵的設計，不是你看到的幾行說明，而是漸進式披露（Progressive Disclosure）。假設你的 Agent 裝了 100 個 Skill，它不會一上來把全部內容塞進上下文，而是分三層按需載入：

1. **啟動時**：只讀所有 Skill 的名稱和 description（幾十至上百 Token）；
2. **匹配到任務時**：你說「幫我寫一篇 WorkBuddy 的公眾號文章」，Agent 根據 description 判斷 `tech-article-writing` 相關，這時才載入完整的 SKILL.md；
3. **執行中**：需要模仿寫作風格，才繼續讀 `references/style.md`；需要檢查 AI 味，才執行 `scripts/check-ai-phrases.py`。

所以 Skill 幫你解決了一個長期困擾 Agent 的問題：怎麼給 Agent 很多知識和工作方法，又不把所有東西永遠塞在 Prompt 裡。

## Skill 跟 Prompt 到底差在哪

最簡單的理解是：**Prompt = 任務，Skill = 做法。** 你反覆在對話裡重複的「不要寫得太 AI、長短句結合、不要編造例子」，其實天然適合做成一個 `writing-style` Skill——以後你發一句「寫一篇 WorkBuddy 文章」，寫作習慣都由 Skill 提供，你不必再囉嗦。

| 維度 | Prompt | Skill |
| --- | --- | --- |
| 核心作用 | 描述當前任務 | 定義一類任務怎麼做 |
| 生命週期 | 通常針對一次請求 | 長期複用 |
| 觸發方式 | 使用者主動輸入 | Agent 自動選擇或使用者顯式呼叫 |
| 載體 | 主要是文本 | 資料夾 |
| 內容 | 指令、上下文、示例 | 指令、指令碼、資料、模板、資源 |
| 上下文佔用 | 通常直接進入上下文 | 按需載入 |
| 複用 | 經常複製貼上 | 原生可複用、可分享 |

Skill 還有兩個 Prompt 給不了你的價值：一是**固定複雜工作流**（你把行業調研的七步流程固化下來，而不是每次讓模型重新思考）；二是**把個人經驗資產化**——Skill 是檔案，你可以用 Git 管理、版本回滾、團隊共享。

## 在 WorkBuddy 裡找到合適的 Skill

你開啟左側「專家·技能·連接器」，可以從技能市場搜尋，也可以用「查詢技能」描述你的需求。

![左側「專家·技能·連接器」入口與技能搜尋](/workbuddy/05-skills/assets/001_image_TdcLblfvIo.png)

你也能在 SkillHub 技能市場裡找合適的 Skill：

![SkillHub 技能市場](/workbuddy/05-skills/assets/002_image_V3E5bsVZGo.png)

除了從推薦列表裡直接安裝，你還可以匯入自己下載的技能：你在網上看到好用的技能包，下載下來是一個 zip 壓縮檔案，點「上傳技能」把 zip 檔案載入即可。

![「上傳技能」匯入 zip 技能包](/workbuddy/05-skills/assets/003_image_Oag3bNQHOo.png)

![選擇本地 zip 檔案上傳技能](/workbuddy/05-skills/assets/004_image_GgOebNBh3o.png)

## 用 Skill 解決一件具體的事

比如，你讓 AI 寫了一篇文章，需要去除 AI 味。你找到「文章去 AI 味工具」Skill，安裝之後，使用時直接按 `/` 就能喚出。

![輸入 / 喚出已安裝的技能](/workbuddy/05-skills/assets/005_20260708200848_NN3hbPsKAo.gif)

你只需要引用 Skill 內容，把文章給到：

![引用 Skill 並把文章給到](/workbuddy/05-skills/assets/006_image_Xom2btXVZo.png)

WorkBuddy 會先載入 Skill 的內容：

![WorkBuddy 載入 Skill 內容](/workbuddy/05-skills/assets/007_image_AmOVb1oGEo.png)

然後根據 Skill 中的規則來執行，比如要去除「不是……而是……」、雙引號等內容：

![按 Skill 規則執行去 AI 味處理](/workbuddy/05-skills/assets/008_image_FbpQbmSswo.png)

修改之後你可以拿到結果——確實去除了 AI 味。

![去 AI 味後的成品效果](/workbuddy/05-skills/assets/009_image_RhBKbRhgIo.png)

## Skill 的關閉和解除安裝

你從全部技能裡點「我安裝的」：

![技能列表切到「我安裝的」](/workbuddy/05-skills/assets/010_image_NGsdbBcjso.png)

點按鈕關閉（則該 Skill 關閉）：

![點開關關閉對應 Skill](/workbuddy/05-skills/assets/011_image_DABBb41fGo.png)

你點「···」，可以選擇刪除或編輯該 Skill：

![「···」選單：刪除或編輯 Skill](/workbuddy/05-skills/assets/012_image_Uya3bNC9io.png)

## 新手常見問題

**Skill 和 Prompt 我該先弄懂哪個？**
你先把 Prompt 寫順手，知道「材料、結果、邊界」怎麼說清。等同一類活你反覆說同樣的叮囑，再把它做成 Skill，省得每次重講。

**裝了 Skill 會一直佔著上下文嗎？**
不會。它用的是漸進式披露：啟動時只讀名字和簡介，匹配到任務才載入正文，執行中才讀參考資料和指令碼。你裝一百個也不會一次性全塞進去。

**我自己做的 Skill 能給別人用嗎？**
能。Skill 本質是個資料夾，你打包成 zip 就能上傳分享，也能用 Git 管理、版本回滾，適合團隊共用一套工作方法。

**Skill 不合適了怎麼撤？**
你開啟「我安裝的」，點按鈕先關閉；想徹底刪就點「···」選刪除，也能在那兒直接編輯。關掉後這一單就不會再呼叫它。

---

下一步：讓專家替你扛專業活——[WorkBuddy 的專家和專家團 →](/zh-tw/workbuddy/06-experts/)

> 想把一本書或一門課蒸餾成自己的 Skill？見進階篇[打造 Skill：把知識蒸餾為可執行能力](/zh-tw/workbuddy/adv-build-skill/)。
