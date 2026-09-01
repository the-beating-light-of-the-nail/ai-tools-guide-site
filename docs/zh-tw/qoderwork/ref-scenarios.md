# QoderWork 場景速查表

按「我想做什麼」組織的詞典式索引。

## 功能定位

| 我想做什麼 | 用什麼 | 詳見 |
| --- | --- | --- |
| 免費快速體驗能力 | 新任務 + 桌面清理等入門任務 | [第一個任務](/zh-tw/qoderwork/03-first-task) |
| 讓 AI 直接讀寫本地檔案 | 工作資料夾 | [工作資料夾](/zh-tw/qoderwork/04-files) |
| 給 AI 裝"標準做法" | 技能 Skill | [技能與專家套件](/zh-tw/qoderwork/05-skills) |
| 把重複流程封裝成一句話 | /create-skill | [對話式建立技能](/zh-tw/qoderwork/adv-skill-create) |
| 讓 AI 操控網頁（帶登入態） | 瀏覽器聯結器 | [聯結器與 MCP](/zh-tw/qoderwork/06-connectors) |
| 接釘釘/飛書/微信 遠端指揮 | IM 頻道 | [IM 頻道](/zh-tw/qoderwork/07-im-channels) |
| 定時自動跑任務 | 定時任務 | [定時任務](/zh-tw/qoderwork/08-automation) |
| 讓 AI 操作桌面軟體 | 電腦操控 | [電腦操控與語音輸入](/zh-tw/qoderwork/adv-computer-use) |
| 說話下達任務 | 按住 Fn 語音輸入 | [電腦操控與語音輸入](/zh-tw/qoderwork/adv-computer-use) |
| 做海報/落地頁/UI 原型 | 設計工作臺 | [三大工作臺](/zh-tw/qoderwork/adv-workbenches) |
| 做 PPT | 幻燈片工作臺（先確認大綱） | [三大工作臺](/zh-tw/qoderwork/adv-workbenches) |
| 寫長文/報告 | 寫作工作臺（版本可回溯） | [三大工作臺](/zh-tw/qoderwork/adv-workbenches) |
| 讓 AI 記住我的偏好 | 意識模式 | [意識、成本與安全環境](/zh-tw/qoderwork/adv-memory-cost) |
| 接私有系統 | MCP（JSON 匯入） | [聯結器與 MCP](/zh-tw/qoderwork/06-connectors) |
| 隔離環境跑敏感任務 | 安全工作環境 | [意識、成本與安全環境](/zh-tw/qoderwork/adv-memory-cost) |

## 按人群

| 你是誰 | 推薦起點 | 進階 |
| --- | --- | --- |
| 完全新手 | [第一個任務](/zh-tw/qoderwork/03-first-task) | [工作資料夾](/zh-tw/qoderwork/04-files) |
| 行政/文秘 | [檔案整理案例](/zh-tw/qoderwork/case-file-organize) | [定時任務](/zh-tw/qoderwork/08-automation) |
| 財務 | 收據歸檔模板（[批次檔案處理](/zh-tw/qoderwork/case-office-docs)） | 報銷彙總定時化 |
| 運營/電商 | [瀏覽器自動化案例](/zh-tw/qoderwork/case-browser) | 定時日報 + IM 推送 |
| 資料分析 | [資料分析案例](/zh-tw/qoderwork/case-data-report) | 分檔模型控成本 |
| HR | 簡歷篩選模板（[批次檔案處理](/zh-tw/qoderwork/case-office-docs)） | 匹配度規則技能化 |
| 法務/財稅 | 內建專家套件（企業法務/財稅） | [對話式建立技能](/zh-tw/qoderwork/adv-skill-create) |
| 內容創作者 | [三大工作臺](/zh-tw/qoderwork/adv-workbenches) | [技能生態](/zh-tw/qoderwork/05-skills) |
| 釘釘重度使用者 | [釘釘 MCP](/zh-tw/qoderwork/06-connectors) + [IM 頻道](/zh-tw/qoderwork/07-im-channels) | — |

## 提示詞五大誤區（官方檔案）

| ❌ 誤區 | ✅ 正解 |
| --- | --- |
| 一句話概括所有需求 | 說具體：目標 + 格式 + 約束 |
| 不檢查結果就繼續 | 錯誤會在後續步驟放大，每步抽查 |
| 同一任務混多主題 | 一事一任務，無關新開 |
| 從不使用附件 | "@檔案 + 一句要求"勝過一大段描述 |
| 不告訴用途 | 說明"給誰看、用來做什麼"，輸出更對路 |

## 硬限制備忘

- 一個任務只能關聯**一個**工作資料夾；
- 開關聯結器後需**新建對話**才生效；
- 定時任務由**本地客戶端**排程：電腦睡眠/關機不觸發，錯過不補（可手動「立即執行」）；
- CAPTCHA、簡訊驗證碼、人臉識別必須人工介入；
- 瀏覽器聯結器僅支援 Chromium 核心；
- 歷史任務存本地裝置，不跨裝置同步；
- 技能分享連結約 24 小時有效。

## 三家工具怎麼選

| 需求 | 推薦 | 原因 |
| --- | --- | --- |
| 瀏覽器自動化（帶登入態） | QoderWork | 聯結器複用真實瀏覽器 |
| 釘釘生態 | QoderWork | IM 頻道 + 釘釘 MCP 市場 |
| 桌面軟體自動化 | QoderWork | Computer Use 雙平臺支援 |
| 深度飛書/騰訊檔案 | TraeWork | 外部應用授權 13 個飛書模組 |
| 三端同步、移動派活 | TraeWork | 網頁/桌面/移動任務實時同步 |
| 辦公三件套深度處理 | WorkBuddy | 檔案/表格/PPT 技能生態成熟 |
| 都想要 | 三個都裝 | 賬號獨立、互不衝突 |
