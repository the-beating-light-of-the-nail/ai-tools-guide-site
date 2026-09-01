# 安裝與登入

QoderWork 是本地執行的桌面應用。系統要求：**macOS 14+**（Apple Silicon / Intel 雙架構包）、**Windows 10+ 64 位**、磁碟 500MB+、穩定網路（需要從雲端拉取模型、技能與聯結器）。

> 官方安裝檔案：[macOS](https://docs.qoder.com/zh/qoderwork/installation-macos) ｜ [Windows](https://docs.qoder.com/zh/qoderwork/installation-windows)

## 下載渠道

- 國際版：[qoderwork.com](https://qoderwork.com)（官方快速開始檔案指定）
- 國內版：[qoder.com.cn/qoderwork](https://qoder.com.cn/qoderwork)（阿里雲渠道，登入 Qoder CN 賬號）

## macOS 安裝

1. 下載 .dmg，拖入 Applications；
2. 首次啟動若被 Gatekeeper 攔截：系統設定 → 隱私與安全性 → 底部點「仍然開啟」（此提示只出現一次）；
3. 登入：已有 Qoder 賬號直接登入，沒有就郵箱註冊或第三方登入；
4. 進入工作介面。

更新：預設後臺檢查，需你點選確認才下載重啟，不會未經確認替換當前版本；手動檢查在選單欄 QoderWork → 檢查更新。

解除安裝：拖入廢紙簍；想徹底清理配置，退出登入後在終端執行 `rm -rf ~/.qoderwork`（會清除未同步到雲端的本地任務歷史）。

## Windows 安裝：先選對安裝包

兩種安裝包**功能完全一致**，區別在安裝位置和許可權：

| | 系統版 X64(System) | 使用者版 X64(User) |
| --- | --- | --- |
| 安裝位置 | Program Files | %LOCALAPPDATA% |
| 誰能用 | 所有賬戶 | 僅當前賬戶 |
| 管理員許可權 | 需要 | **不需要** |

官方原話："拿不準就選**使用者版**：不需要管理員許可權，安裝最省事。"

被 SmartScreen 攔截時：點「更多資訊」→「仍要執行」。解除安裝：設定 → 應用 → 已安裝的應用 → 搜 Qoder → 解除安裝；清理配置刪 `%USERPROFILE%\.qoderwork`。

## 登入後先做三件事

1. **切中文**：左下角語言設定（預設可能為英文）；
2. **看積分**：右上角 Credits 按鈕檢視餘額。新使用者註冊送積分禮包；國內版另有每日簽到領積分活動（留意活動有效期）；
3. **理解計費**：QoderWork 按 Credits 計費，與 Qoder 全家桶共享餘額。模型分檔（標準/高階/旗艦）消耗不同——日常任務標準檔夠用，詳見[意識、成本與安全環境](/zh-tw/qoderwork/adv-memory-cost)。

## 常見安裝問題

| 問題 | 解決 |
| --- | --- |
| macOS 提示"無法驗證開發者" | 系統設定 → 隱私與安全性 → 仍要開啟 |
| Windows 許可權不足 | 換使用者版安裝包，或以管理員身份執行 |
| 低於 macOS 14 | 無法啟動，需先升級系統 |
| 任務執行提示許可權不足 | 檢查是否授權了對應工作目錄 |

## 隱私三條（官方口徑）

1. 檔案操作在本地完成，不會被上傳到雲端；但相關文字內容會傳送至大模型 API 服務商處理；
2. 只能訪問你明確授權的工作目錄，未授權目錄確需訪問時會先徵求你的同意；
3. 檔案內容不會在雲端永久儲存。

---

下一步：[第一個任務 →](/zh-tw/qoderwork/03-first-task)
