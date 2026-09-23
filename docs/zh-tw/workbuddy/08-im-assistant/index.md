---
description: "你裝好了 WorkBuddy 客戶端，可人一離開工位，電腦一鎖屏，活就派不出去了。你想在地鐵上讓它在家裡那臺電腦上跑個分析，或者直接在微信裡丟一句「幫我建明天的會」，不用再開電腦。"
---

# WorkBuddy 能裝進微信和手機嗎？接上 IM 助理隨時遠端派活

你裝好了 WorkBuddy 客戶端，可人一離開工位，電腦一鎖屏，活就派不出去了。你想在地鐵上讓它在家裡那臺電腦上跑個分析，或者直接在微信裡丟一句「幫我建明天的會」，不用再開電腦。這一章就是把 WorkBuddy 從「坐在電腦前才能用」變成「手機上隨時派活」：小程式讓你遠端檢視與排程，IM 助理讓你在微信、飛書、釘釘裡直接下任務。

## 小程式的兩種模式

![小程式本機模式與雲端模式入口](/workbuddy/08-im-assistant/assets/001_image_Vv5bbtLVBo.png)

| 模式 | 任務在哪裡執行 | 是否依賴電腦線上 | 適合任務 |
| --- | --- | --- | --- |
| 本機模式 | 已連線的電腦 | 是 | 本地檔案、本地 Skill、已有工作區 |
| 雲端模式 | 隔離的雲端環境 | 否 | 調研、寫作、臨時分析、並行任務 |

首次使用：你通過官方入口開啟 WorkBuddy 小程式並登入，你檢視當前處於本機還是雲端模式；本機模式下確認目標電腦線上且連線正確。

## IM 助理的工作鏈路

你發一條訊息過去，背後鏈路是這樣的：

```mermaid
sequenceDiagram
    participant U as 手机 IM
    participant B as 应用机器人
    participant W as WorkBuddy 助理
    participant P as 本机工作区
    U->>B: 发送任务
    B->>W: 回调或长连接传递消息
    W->>P: 在授权目录执行
    P-->>W: 产物与状态
    W-->>B: 返回结果
    B-->>U: 手机查看与确认
```

## 接入微信助理：掃碼繫結即可

你按這五步來：

1. 開啟 WorkBuddy，在左側「助理」欄點齒輪，進入「助理設定」；

![「助理」欄齒輪進入助理設定](/workbuddy/08-im-assistant/assets/002_微信助理-进入助理设置_NbI2b9v4fo.png)

2. 找到「微信助理整合」，點「配置」；

![「微信助理整合」點「配置」](/workbuddy/08-im-assistant/assets/003_微信助理-选择集成_S9HlbaEmdo.png)

3. 等待繫結二維碼生成，用手機微信掃碼；

![手機微信掃碼繫結](/workbuddy/08-im-assistant/assets/004_微信助理-扫码绑定_TElmbNPG5o.png)

4. 卡片顯示「已繫結」後，先發一條只讀測試指令；

![卡片顯示「已繫結」，發只讀測試指令](/workbuddy/08-im-assistant/assets/005_微信助理-已绑定_ZQtrb6jCmo.png)

5. 要換微信賬號時，先解綁當前賬號，再重新掃碼。

五步走完，你在微信裡就能直接給 WorkBuddy 下任務了。

> 二維碼有時效限制。停留在「繫結中」、二維碼過期或掃碼失敗時，你關閉配置視窗後重新進入，必要時重啟 WorkBuddy 重新生成二維碼。

## 接入飛書

你走飛書的話，步驟比微信多些，你照著走：

1. 走 WorkBuddy → 設定 → 助理設定 → 選擇飛書；

![助理設定裡選擇飛書](/workbuddy/08-im-assistant/assets/006_image_SbcEbSaoio.png)

2. 在飛書開放平臺建立企業自建應用；

![登入飛書開放平臺，建立企業自建應用](/workbuddy/08-im-assistant/assets/007_飞书-登录开放平台_EUPhblavHo.png)

3. 為應用新增機器人能力；

![為飛書應用新增機器人能力](/workbuddy/08-im-assistant/assets/008_飞书-添加机器人能力_XFmTb5HGQo.png)

4. 按 WorkBuddy 當前頁面要求開通最小權限；

![按頁面要求開通最小權限](/workbuddy/08-im-assistant/assets/009_飞书-批量导入权限_MRdCbm3Dvo.png)

5. 在「憑證與基礎資訊」拿到 App ID 和 App Secret；

![「憑證與基礎資訊」裡拿 App ID 和 Secret](/workbuddy/08-im-assistant/assets/010_飞书-应用凭证_CnItbspOUo.png)

6. 把憑證填回 WorkBuddy，生成或複製回撥資訊；

![把憑證填回 WorkBuddy，生成回撥資訊](/workbuddy/08-im-assistant/assets/011_飞书-加密与校验配置_WiAYbwBDKo.png)

7. 在飛書配置事件訂閱與回撥，新增接收訊息、卡片互動等事件；

![飛書配置事件訂閱：新增接收訊息事件](/workbuddy/08-im-assistant/assets/012_飞书-添加接收消息事件_X4z6bNPsso.png)

![飛書配置卡片互動回撥](/workbuddy/08-im-assistant/assets/013_飞书-卡片回调_AvOxbO7M9o.png)

8. 建立版本併發布應用，然後在飛書內向機器人發一條只讀測試任務。

![建立版本併發布飛書應用](/workbuddy/08-im-assistant/assets/014_飞书-发布应用_TafwbySxco.png)

## 接入釘釘

![釘釘接入配置：應用開發與機器人入口](/workbuddy/08-im-assistant/assets/015_image_RRhMbPo5uo.png)

1. 你用企業管理員賬號登入釘釘開發者後臺，進「應用開發」，建立應用；

![釘釘開發者後臺建立應用](/workbuddy/08-im-assistant/assets/016_钉钉-创建应用_NuNTbdscZo.png)

2. 為應用新增機器人能力，填機器人名稱、描述和頭像並確認釋出；

![釘釘新增機器人能力併發布](/workbuddy/08-im-assistant/assets/017_钉钉-添加机器人能力_ORRbbZrqgo.png)

3. 開通所需權限；

![開通釘釘應用所需權限](/workbuddy/08-im-assistant/assets/018_钉钉-开通权限_QG1zbPhcxo.png)

4. 獲取應用憑證，填回 WorkBuddy。優先在測試組織或測試群完成驗證。

![獲取釘釘應用憑證，填回 WorkBuddy](/workbuddy/08-im-assistant/assets/019_钉钉-获取应用凭证_OI8fbW0JNo.png)

## 新手常見問題

**小程式本機模式和雲端模式怎麼選？**
你手頭的活要用本地檔案、本地 Skill 或已有工作區，就選本機模式，但它依賴那臺電腦線上。你做調研、寫作、臨時分析這類不挑機器的活，選雲端模式，斷網離開電腦也能跑。

**微信助理繫結失敗、二維碼過期怎麼辦？**
二維碼有時效。你停留在「繫結中」、過期或掃碼失敗時，關掉配置視窗重新進，必要時重啟 WorkBuddy 重新生成二維碼。你繫結後先發一條只讀測試指令，確認它只讀取不亂動。

**飛書、釘釘接入為什麼比微信麻煩？**
微信是掃碼繫結，幾步就好。飛書和釘釘要在開放平臺建應用、配權限和回撥，步驟多，但換來的是公司賬號體系下的穩定接入。你按頁面引導一步步填，優先在測試群驗證。

**IM 助理能直接替我發訊息嗎？**
能，但要看你授權了什麼。它只在授權範圍內動作——建會議、讀檔案、回訊息。第一次用，你先在小事上試，確認它只幹了你吩咐的，再放開更多權限。

---
下一步：讓任務定時自動跑——[WorkBuddy 自動化任務 →](/zh-tw/workbuddy/10-automation/)

> 繫結 IM 助理後，配合[自動化任務](/zh-tw/workbuddy/10-automation/)可以把「定時跑 + 推送到 IM」串成一條線。
