# 第 8 章 WorkBuddy 接入小程式與 IM 助理

裝好客戶端只是第一步。這一章把 WorkBuddy 從"坐在電腦前才能用"變成"手機上隨時派活"：小程式讓你遠端檢視與排程，IM 助理讓你在微信、飛書、釘釘裡直接下任務。

## 小程式的兩種模式

![](/workbuddy/08-im-assistant/assets/001_image_Vv5bbtLVBo.png)

| 模式 | 任務在哪裡執行 | 是否依賴電腦線上 | 適合任務 |
| --- | --- | --- | --- |
| 本機模式 | 已連線的電腦 | 是 | 本地檔案、本地 Skill、已有工作區 |
| 雲端模式 | 隔離的雲端環境 | 否 | 調研、寫作、臨時分析、並行任務 |

**首次使用**：透過官方入口開啟 WorkBuddy 小程式並登入，檢視當前處於本機還是雲端模式；本機模式下確認目標電腦線上且連線正確。

## IM 助理的工作鏈路

```mermaid
sequenceDiagram
    participant U as 手機 IM
    participant B as 應用機器人
    participant W as WorkBuddy 助理
    participant P as 本機工作區
    U->>B: 傳送任務
    B->>W: 回撥或長連線傳遞訊息
    W->>P: 在授權目錄執行
    P-->>W: 產物與狀態
    W-->>B: 返回結果
    B-->>U: 手機檢視與確認
```

## 接入微信助理：掃碼繫結即可

1. 開啟 WorkBuddy，在左側"助理"欄點選齒輪，進入"助理設定"；

![](/workbuddy/08-im-assistant/assets/002_微信助理-进入助理设置_NbI2b9v4fo.png)

2. 找到"微信助理整合"，點選"配置"；

![](/workbuddy/08-im-assistant/assets/003_微信助理-选择集成_S9HlbaEmdo.png)

3. 等待繫結二維碼生成，用手機微信掃碼；

![](/workbuddy/08-im-assistant/assets/004_微信助理-扫码绑定_TElmbNPG5o.png)

4. 卡片顯示"已繫結"後，先傳送一條只讀測試指令；

![](/workbuddy/08-im-assistant/assets/005_微信助理-已绑定_ZQtrb6jCmo.png)

5. 需要切換微信賬號時，先解綁當前賬號，再重新掃碼。

> 二維碼有時效限制。停留在"繫結中"、二維碼過期或掃碼失敗時，關閉配置視窗後重新進入，必要時重啟 WorkBuddy 並重新生成二維碼。

## 接入飛書

1. WorkBuddy → 設定 → 助理設定 → 選擇飛書；

![](/workbuddy/08-im-assistant/assets/006_image_SbcEbSaoio.png)

2. 在飛書開放平臺建立企業自建應用；

![](/workbuddy/08-im-assistant/assets/007_飞书-登录开放平台_EUPhblavHo.png)

3. 為應用新增機器人能力；

![](/workbuddy/08-im-assistant/assets/008_飞书-添加机器人能力_XFmTb5HGQo.png)

4. 按 WorkBuddy 當前頁面要求開通最小許可權；

![](/workbuddy/08-im-assistant/assets/009_飞书-批量导入权限_MRdCbm3Dvo.png)

5. 在"憑證與基礎資訊"獲取 App ID 和 App Secret；

![](/workbuddy/08-im-assistant/assets/010_飞书-应用凭证_CnItbspOUo.png)

6. 將憑證填寫到 WorkBuddy，生成或複製回撥資訊；

![](/workbuddy/08-im-assistant/assets/011_飞书-加密与校验配置_WiAYbwBDKo.png)

7. 在飛書配置事件訂閱與回撥，新增接收訊息、卡片互動等事件；

![](/workbuddy/08-im-assistant/assets/012_飞书-添加接收消息事件_X4z6bNPsso.png)

![](/workbuddy/08-im-assistant/assets/013_飞书-卡片回调_AvOxbO7M9o.png)

8. 建立版本併發布應用，然後在飛書內向機器人傳送只讀測試任務。

![](/workbuddy/08-im-assistant/assets/014_飞书-发布应用_TafwbySxco.png)

## 接入釘釘

![](/workbuddy/08-im-assistant/assets/015_image_RRhMbPo5uo.png)

1. 使用企業管理員賬號登入釘釘開發者後臺，進入"應用開發"，建立應用；

![](/workbuddy/08-im-assistant/assets/016_钉钉-创建应用_NuNTbdscZo.png)

2. 為應用新增機器人能力，填寫機器人名稱、描述和頭像並確認發布；

![](/workbuddy/08-im-assistant/assets/017_钉钉-添加机器人能力_ORRbbZrqgo.png)

3. 開通所需許可權；

![](/workbuddy/08-im-assistant/assets/018_钉钉-开通权限_QG1zbPhcxo.png)

4. 獲取應用憑證，填回 WorkBuddy。優先在測試組織或測試群完成驗證。

![](/workbuddy/08-im-assistant/assets/019_钉钉-获取应用凭证_OI8fbW0JNo.png)

---

> 繫結 IM 助理後，配合[自動化任務](/zh-tw/workbuddy/10-automation/)可以把"定時跑 + 推送到 IM"串成一條線。
