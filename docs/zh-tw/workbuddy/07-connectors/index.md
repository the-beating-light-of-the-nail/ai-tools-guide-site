# 第 7 章 WorkBuddy 使用連接器



**MCP** 指的是 **Model Context Protocol（模型上下文協議）**，是由 Anthropic 於 2024 年底推出並開源的一個開放標準協議，目前已經成為 AI 領域最熱門的基礎設施之一。

用一個通俗的比喻：**MCP 就是 AI 世界的「USB-C 介面」。**



## 為什麼需要 MCP？

在過去，如果你想讓一個 AI 助手（Agent）連接外部工具（比如 GitHub、本機檔案系統、PostgreSQL 資料庫、Slack 等），開發者必須為「每一個 AI 應用」和「每一個工具」編寫專門的對接程式碼。如果有 10 個 AI 應用和 10 個工具，就需要寫 100 個介面（N × M 的整合噩夢）。



有了 MCP，工具開發者只需要按照 MCP 標準開發一個「MCP Server」（相當於 USB-C 設備），而任何支援 MCP 的 AI 應用（如 Cursor、各類 Agent 框架）只需內建「MCP Client」（相當於 USB-C 介面），就能**即插即用**。這就把 N × M 的複雜開發工作，簡化成了 N + M。



## MCP 的核心特點

- 統一的標準化協議（告別重複造輪子）

MCP 提供了一套通用的規範（基於 JSON-RPC）。無論是讀取本機檔案、查詢資料庫，還是調用第三方 SaaS API，AI 都能透過同一套協議邏輯去理解和調用。這大幅降低了 Agent 開發中工具整合的門檻，讓開發者可以把精力集中在 Agent 的核心邏輯上，而不是寫繁瑣的 API 對接程式碼。

- 支援三大核心能力

MCP 不僅能讓 AI「做事」，還能讓 AI「看資料」和「按套路出牌」，它標準化了三種核心原語：

- **Tools（工具）**：允許 AI 執行操作。例如：運行一段程式碼、在 Jira 建立一個任務、向資料庫寫入資料。
- **Resources（資源/上下文）**：允許 AI 讀取外部資料。例如：獲取 Git 儲存庫的檔案列表、查詢向量資料庫中的特定片段，作為回答問題的上下文。
- **Prompts（提示詞模板）**：提供預先定義的互動模板，讓用戶或 AI 能以標準化的方式觸發特定的複雜工作流。

- C/S 架構與高度解耦，MCP 採用用戶端-伺服器（Client-Server）架構：

  - **MCP Host**：你使用的 AI 宿主應用（如 IDE、Agent 平台）。
  - **MCP Client**：Host 內部負責與 Server 保持 1:1 連線的組件。
  - **MCP Server**：輕量級的獨立程式，專門負責暴露特定工具或資料的能力。

這種解耦意味著你可以隨時替換底層的大模型，或者隨時增加新的資料源，而無需重構整個 Agent 系統。

- 本機優先與安全性（隱私友好）

MCP 支援透過本機標準輸入輸出（stdio）或本機 HTTP 進行通信。這意味著你的 MCP Server 可以完全運行在本機電腦上。敏感資料（如本機程式碼、私有資料庫內容、電商後台資料）不需要上傳到雲端第三方伺服器，AI 模型只在需要推理時獲取必要的上下文，極大提升了企業級應用的資料安全性。



## 載入一個連接器

**目前已支援 QQ 信箱、騰訊文件、騰訊樂享、騰訊會議、TAPD 等連接器。**

![](/workbuddy/07-connectors/assets/001_image_IZzfbK38Ao.png)

比如載入騰訊會議連接器，

![](/workbuddy/07-connectors/assets/002_image_WF3ab0WSbo.png)

![](/workbuddy/07-connectors/assets/003_image_ZssEbuMsdo.png)



## 建立一個任務

幫我建立一個明天下午 3 點的會議，

![](/workbuddy/07-connectors/assets/004_image_KVIJbpUZdo.png)

主題「項目討論」，時長 1h

![](/workbuddy/07-connectors/assets/005_image_FPy1bGJJZo.png)

建立成功

![](/workbuddy/07-connectors/assets/006_image_WQ6Zb1Rero.png)



## 新建連接器

連接器管理頁右上角點「自訂連接器」，按引導設定 MCP（含服務地址、鑑權方式），並提示自訂連接器的存取範圍由用戶設定

![](/workbuddy/07-connectors/assets/007_image_M2itbQUceo.png)
