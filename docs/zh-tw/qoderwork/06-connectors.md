# 聯結器與 MCP

聯結器是 QoderWork 與外部系統之間的橋樑——開啟後，AI 可以像你一樣操作瀏覽器、讀寫系統日曆與郵件、對接 Microsoft 365 和釘釘。MCP 則是接入更多外部工具的開放協議。

> 官方檔案：[connectors](https://docs.qoder.com/zh/qoderwork/connectors) ｜ [釘釘 MCP 實戰](https://docs.qoder.com/zh/qoderwork/mcp-walkthrough)

## 聯結器總覽

統一入口：左側導航 → 擴充套件 → 聯結器（「市場」/「已安裝」兩個選項卡）。**預設全部關閉**，只有你明確完成授權與配置後，QoderWork 才獲得相應訪問許可權。

| 類別 | 聯結器 |
| --- | --- |
| 內建 | **瀏覽器**（網頁操作、資料提取、表單填寫）、**macOS 應用**（提醒事項、日曆、備忘錄、郵件、通訊錄）、**Microsoft 365**（Outlook/日曆/聯絡人/To Do/OneNote/OneDrive） |
| 整合市場 | 釘釘、飛書、Notion、Linear、Todoist、Canva、Supabase、Vercel、Neon、Slack、Figma、Google 日曆、Google 地圖、LINE、企查查等 |

## 接入步驟（以三個高頻為例）

**瀏覽器聯結器**（QoderWork 的招牌能力）：聯結器頁找「瀏覽器」點 + →「在 Chrome 應用商店中安裝」擴充套件 → 狀態顯示「擴充套件已連線」。它複用你真實的瀏覽器登入態——後臺導資料、表單填報都不用重新登入。

**Microsoft 365**：點「連線微軟賬戶」→ 瀏覽器彈窗登入 → 確認授權。

**釘釘**：「市場」選項卡 → 釘釘卡片 →「登入釘釘賬號」完成授權。

⚠️ 關鍵限制：**開關聯結器後需要新建一個對話任務才能生效**，不要在原來的對話裡追問為什麼沒反應。

## MCP：AI 世界的 USB 介面

MCP（Model Context Protocol）是標準化 AI 應用與外部工具連線方式的開放協議。新增入口：聯結器頁右上角「+ 新增」，兩種方式：

1. **貼上 JSON 配置**匯入（推薦）；
2. 手動填寫。

兩種伺服器型別：**Streamable HTTP / SSE**（遠端託管，URL 訪問，推薦前者）；**STDIO**（本地命令列啟動，需 Node.js/Python）。JSON 結構示例：

```json
{
  "mcpServers": {
    "釘釘檔案": {
      "type": "streamable-http",
      "url": "https://mcp-gw.dingtalk.com/mserver/...key=..."
    }
  }
}
```

## 實戰：接入釘釘 MCP（四步）

釘釘有自己的 MCP 市場，適合已用釘釘協作的團隊：

1. 開啟 [mcp.dingtalk.com](https://mcp.dingtalk.com) 並登入，按關鍵詞搜尋（帶「平臺精選」標籤的是官方推薦）；
2. 在 MCP 詳情頁右側「使用 MCP」區域，複製 JSON Config；
3. QoderWork 聯結器頁「+ 新增」→ 貼上 JSON →「透過 JSON 匯入」（釘釘 MCP 一般無需額外 Headers，留空即可）；
4. 驗證：**服務名稱左側顯示綠色圓點即連線成功**，然後在對話裡直接試：

```text
幫我找一下名為《2026 Q3 營銷計劃》的檔案
幫我查一下北京的天氣（高德地圖 MCP）
幫我建立一個明天上午 10 點的日程（釘釘日曆 MCP）
```

常用釘釘 MCP：釘釘檔案、釘釘日曆、釘釘通訊錄、釘釘待辦、釘釘群聊、高德地圖、釘釘 AI 表格。

## 注意事項與故障排查

- 瀏覽器聯結器僅支援 **Chromium 核心**（Safari / Firefox 暫不支援）；任務執行期間避免手動操作被託管的標籤頁；
- macOS 應用首次開啟會彈系統許可權，誤拒後到 系統設定 → 隱私與安全性 手動放行；
- 驗證碼、簡訊驗證、掃碼登入需要人工接管；
- MCP 連不上按順序查：JSON/URL 完整性 → 網路 → 額外授權要求 → 刪除重加。

**最佳實踐**：Prompt 裡直接給 URL；聯結器與本地檔案讀寫結合；複雜流程先手動跑通，再固化為 Skill 或定時任務。

> MCP 的通用原理與安全邊界（它和 API 的關係、"怎麼連"與"連了安不安全"），見 WorkBuddy 板塊的[看懂 AI 工作系統](/zh-tw/workbuddy/11-ai-work-system/)。

---

下一步：[IM 頻道：聊天窗裡遠端指揮 →](/zh-tw/qoderwork/07-im-channels)
