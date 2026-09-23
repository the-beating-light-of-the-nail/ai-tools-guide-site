---
description: "你接到一個活，不知道該用 TraeWork 的哪塊功能？這篇按「你想做什麼」組織的詞典式索引，你找到場景就能直接跳對應章節。"
---

# TraeWork 場景速查表怎麼查？按你想做的事對號入座

你接到一個活，不知道該用 TraeWork 的哪塊功能？這篇按「你想做什麼」組織的詞典式索引，你找到場景就能直接跳對應章節。

## 功能定位

先按想做的事挑功能：

| 我想做什麼 | 用什麼 | 詳見 |
| --- | --- | --- |
| 免安裝先體驗 | 網頁版 work.trae.cn | [安裝與三端協同](/zh-tw/traework/02-install) |
| 操作本地檔案 | 桌面版 + 本地任務 | [安裝與三端協同](/zh-tw/traework/02-install) |
| 通勤路上派活 | 移動端 + 雲端執行 | [安裝與三端協同](/zh-tw/traework/02-install) |
| 給 AI 裝“標準做法” | 技能 Skills | [Skills](/zh-tw/traework/04-skills) |
| 把常用 Prompt 固化 | 自定義命令 | [三種工作流與命令](/zh-tw/traework/adv-workflows) |
| 在微信/飛書裡派活 | 辦公助理 | [辦公助理](/zh-tw/traework/05-bot-assistant) |
| 讀寫飛書雲檔案/多維表格 | 外部應用授權（飛書） | [外掛與外部應用](/zh-tw/traework/06-plugins-integrations) |
| 線上協作檔案 | 騰訊檔案外掛 | [外掛與外部應用](/zh-tw/traework/06-plugins-integrations) |
| 定時跑資訊/週報/監控 | 自動化任務 | [自動化定時任務](/zh-tw/traework/07-automated-tasks) |
| 讓 AI 填表單/操作軟體 | 電腦控制 | [電腦與瀏覽器控制](/zh-tw/traework/08-computer-browser) |
| 讓 AI 抓網頁資料 | 瀏覽器控制 | [電腦與瀏覽器控制](/zh-tw/traework/08-computer-browser) |
| 複雜任務先對齊方案 | Spec / Plan 工作流 | [三種工作流](/zh-tw/traework/adv-workflows) |
| 長任務自動續跑到達標 | Goal 工作流 | [三種工作流](/zh-tw/traework/adv-workflows) |
| 接自己的 API 模型 | 設定 > 模型 | [模型與積分](/zh-tw/traework/adv-models-credits) |

挑不準時，你先看「想做什麼」這一列，對準功能再往下讀。

## 按人群

按自己的身份對號入座：

| 你是誰 | 推薦起點 | 進階 |
| --- | --- | --- |
| 完全新手 | [第一個任務](/zh-tw/traework/03-first-task) + 模板庫 | [Skills](/zh-tw/traework/04-skills) |
| 天天寫週報/彙報 | [動態彙報案例](/zh-tw/traework/case-report) | [自動化定時任務](/zh-tw/traework/07-automated-tasks) |
| 常做 PPT | [做 PPT 案例](/zh-tw/traework/case-ppt) | 設計模式（Design） |
| 做知識管理 | [公眾號→飛書流水線](/zh-tw/traework/case-feishu-pipeline) | [辦公助理](/zh-tw/traework/05-bot-assistant) |
| 重度飛書使用者 | [外部應用授權](/zh-tw/traework/06-plugins-integrations) | [辦公助理](/zh-tw/traework/05-bot-assistant) |
| 關注成本 | [模型與積分避坑](/zh-tw/traework/adv-models-credits) | — |
| 資料安全敏感 | [安全邊界](/zh-tw/traework/08-computer-browser) | [MCP 與雲端環境](/zh-tw/traework/adv-mcp-env) |

## 模式與端的限制矩陣（收藏級）

你買之前先看清哪些功能在哪些端能用：

| 功能 | Work | Code | Design | 網頁版 | 桌面版 | 移動端 |
| --- | --- | --- | --- | --- | --- | --- |
| 模式支援 | ✓ | ✓ | ✓ | ✓ | ✓ | 僅 Work/Code |
| 產物空間（我的檔案） | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ |
| 辦公助理繫結 | ✓ | ✓ | ✓ | ✗ | ✓（首次必須） | ✓（連線後） |
| GitHub 整合 | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ |
| Spec 工作流 | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ |
| 自定義雲端環境 | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ |
| 新增自定義模型 | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| 電腦控制 | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| 外部瀏覽器（Chrome） | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| 瀏覽器（雲端任務） | 內建 | 內建 | 內建 | ✓ | ✓ | ✗ |

## 三家工具怎麼選

你在 TraeWork / QoderWork / WorkBuddy 之間挑花眼了？看這張：

| 需求 | 推薦 | 原因 |
| --- | --- | --- |
| 深度飛書/騰訊檔案協作 | TraeWork | 外部應用授權覆蓋 13 個飛書模組 |
| 三端同步、移動派活 | TraeWork | 網頁/桌面/移動任務即時同步 |
| 瀏覽器自動化抓資料 | QoderWork | 瀏覽器連接器複用真實登入態 |
| 釘釘生態 | QoderWork | IM 頻道 + 釘釘 MCP 市場 |
| 辦公三件套深度處理 | WorkBuddy | 檔案/表格/PPT 技能生態 |
| 都想要 | 三個都裝 | 賬號獨立、互不衝突 |

## 新手常見問題

我是完全新手，從哪進？
你從[第一個任務](/zh-tw/traework/03-first-task)加模板庫開始，跑通第一單，你再去看 Skills，別一上來貪多。

網頁版能操作本地檔案嗎？
不能。你操作本地檔案得用桌面版 + 本地任務；網頁版摸不到你硬碟，你只能跑雲端。

移動端能綁辦公助理嗎？
你連線後就能用。但你首次繫結必須在桌面版發起，連完之後你才能用移動端接著幹。

飛書重度使用者重點看哪塊？
你看[外部應用授權](/zh-tw/traework/06-plugins-integrations)和[辦公助理](/zh-tw/traework/05-bot-assistant)，飛書 13 個模組的讀寫是 TraeWork 的強項，你重點看這兩個。

限制矩陣看不懂怎麼辦？
你記住一條：辦公助理、電腦控制、外部瀏覽器這些重功能，網頁版基本沒有，你得用桌面版或移動端。你買會員前先對清楚端。
