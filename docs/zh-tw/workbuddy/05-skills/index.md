# 第 5 章 WorkBuddy 載入一個真正用得上的 Skill

## Skill 是什麼

WorkBuddy 本身負責理解任務和組織執行；Skill 則是一組可複用的說明、腳本、參考資料和資源，告訴 Agent 某類任務應該怎樣做、調用什麼工具、交付什麼格式。

一個最標準的 Skill，大概長這樣：

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

其中只有 `SKILL.md` 是必須的，開頭兩行寫清名稱和用途：

```markdown
---
name: tech-article-writing
description: 用於撰寫 AI 產品、模型評測和科技行業相關文章
---

收到寫作任務後：

1. 先確認文章核心角度
2. 查找一手資料
3. 對核心事實交叉驗證
4. 根據用戶寫作風格完成初稿
5. 檢查禁用句式和 AI 味表達
```

## Skill 是怎麼工作的

Skill 最關鍵的設計不是 SKILL.md，而是**漸進式披露（Progressive Disclosure）**。假設你的 Agent 裝了 100 個 Skill，它不會一上來把全部內容塞進上下文，而是分三層按需載入：

1. **啟動時**：只讀所有 Skill 的名稱和 description（幾十至上百 Token）；
2. **匹配到任務時**：你說「幫我寫一篇 WorkBuddy 的公眾號文章」，Agent 根據 description 判斷 `tech-article-writing` 相關，這時才載入完整的 SKILL.md；
3. **執行中**：需要模仿寫作風格，才繼續讀 `references/style.md`；需要檢查 AI 味，才執行 `scripts/check-ai-phrases.py`。

所以 Skill 解決了一個長期困擾 Agent 的問題：**怎麼給 Agent 很多知識和工作方法，又不把所有東西永遠塞在 Prompt 裡。**

## Skill 跟 Prompt 到底有什麼區別

| 維度 | Prompt | Skill |
| --- | --- | --- |
| 核心作用 | 描述當前任務 | 定義一類任務怎麼做 |
| 生命週期 | 通常針對一次請求 | 長期複用 |
| 觸發方式 | 用戶主動輸入 | Agent 自動選擇或用戶顯式調用 |
| 載體 | 主要是文本 | 資料夾 |
| 內容 | 指令、上下文、示例 | 指令、腳本、資料、模板、資源 |
| 上下文佔用 | 通常直接進入上下文 | 按需載入 |
| 複用 | 經常複製貼上 | 原生可複用、可分享 |

最簡單的理解是：**Prompt = 任務，Skill = 做法。** 你反覆在對話裡重複的「不要寫得太 AI、長短句結合、不要編造例子」，其實天然適合做成一個 `writing-style` Skill——以後 Prompt 只需要一句「寫一篇 WorkBuddy 文章」，寫作習慣都由 Skill 提供。

Skill 還有兩個 Prompt 給不了的價值：一是**固定複雜工作流**（把行業調研的七步流程固化下來，而不是每次讓模型重新思考）；二是**把個人經驗資產化**——Skill 是檔案，可以 Git 管理、版本回滾、團隊共享。

## 在 WorkBuddy 裡找到合適的 Skill

打開左側「專家·技能·連接器」，可以從技能市場搜尋，也可以用「查找技能」描述需求。

![](/workbuddy/05-skills/assets/001_image_TdcLblfvIo.png)

也可以在 SkillHub 技能市場裡找到合適的 Skill：

![](/workbuddy/05-skills/assets/002_image_V3E5bsVZGo.png)

除了從推薦列表裡直接安裝，還可以**匯入自己下載的技能**：在網路上看到好用的技能包，下載下來是一個 zip 壓縮檔案，點擊「上傳技能」把 zip 檔案載入即可。

![](/workbuddy/05-skills/assets/003_image_Oag3bNQHOo.png)

![](/workbuddy/05-skills/assets/004_image_GgOebNBh3o.png)

## 使用 Skill 解決一個任務

比如，你讓 AI 寫了一篇文章，需要去除 AI 味。找到「文章去 AI 味工具」Skill，安裝之後，使用時直接按 `/` 就能喚出。

![](/workbuddy/05-skills/assets/005_20260708200848_NN3hbPsKAo.gif)

你只需要引用 Skill 內容，把文章給到：

![](/workbuddy/05-skills/assets/006_image_Xom2btXVZo.png)

WorkBuddy 會先載入 Skill 的內容：

![](/workbuddy/05-skills/assets/007_image_AmOVb1oGEo.png)

然後根據 Skill 中的規則來執行，比如要去除「不是……而是……」、雙引號等內容：

![](/workbuddy/05-skills/assets/008_image_FbpQbmSswo.png)

修改之後可以得到結果——確實去除了 AI 味。

![](/workbuddy/05-skills/assets/009_image_RhBKbRhgIo.png)

## Skill 的關閉和解除安裝

從全部技能中，點擊「我安裝的」：

![](/workbuddy/05-skills/assets/010_image_NGsdbBcjso.png)

按鈕關閉（則關閉該 Skill）：

![](/workbuddy/05-skills/assets/011_image_DABBb41fGo.png)

點擊「···」，可以選擇刪除或編輯該 Skill：

![](/workbuddy/05-skills/assets/012_image_Uya3bNC9io.png)

---

> 想把一本書或一門課蒸餾成自己的 Skill？見進階篇[打造 Skill：把知識蒸餾為可執行能力](/zh-tw/workbuddy/adv-build-skill/)。
