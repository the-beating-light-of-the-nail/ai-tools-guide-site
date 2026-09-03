---
title: 主張證據臺賬
description: V2.0 關鍵主張的來源、狀態與適用邊界
status: community-practice
verifiedAt: 2026-08-01
sources: []
---

# 主張證據臺賬

> 本頁由結構化資料自動生成，請修改源專案 QwenWorkGuide 中的 `docs/bluebook/data/evidence-ledger.json`。本檔案及其 JSON 源均為公開內容。

已釋出主張：44；待核驗線索：0。

## 已釋出主張

## claim-automation-human-handoff-01

自動化只有在異常時能夠停止執行、保護原件、通知責任人、轉為人工完成並經重新驗證後恢復，才具備進入企業執行的基本條件。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 自動化接管鏈 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch05-automation-boundaries#claim-automation-human-handoff-01](/zh-tw/qwenwork/ch05-automation-boundaries#claim-automation-human-handoff-01) |
| 統計口徑 | 不適用：自動化執行控制規則 |
| 適用範圍 | 定時任務、瀏覽器自動化、電腦操控和跨系統工作流 |
| 侷限 | 不同系統對撤銷和恢復的支援不同；無法撤銷的動作需要更嚴格的事前確認和補救計劃。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 自動化執行負責人 |

## claim-capacity-separate-01

現金 ROI 與可釋放產能必須分開報告；品質和風險也單獨報告，只有形成可核驗的實際損失或收益時才進入現金口徑。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 現金與產能分列規則 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch13-value-measurement#claim-capacity-separate-01](/zh-tw/qwenwork/ch13-value-measurement#claim-capacity-separate-01) |
| 統計口徑 | 同口徑任務時長、有效任務量、現金憑證及品質風險記錄 |
| 適用範圍 | 企業 AI 試點價值報告、預算覆盤和規模化決策 |
| 侷限 | 可釋放產能不保證形成支出減少或增量毛利；品質和風險金額只有在實際發生且可核驗時才進入現金賬。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 財務與價值複核者 |

## claim-cash-roi-formula-01

現金 ROI 只納入已經實現或有可核驗依據的現金收益，並計入從輸入準備、人工複核到治理和失敗損失的全部增量成本。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 現金 ROI 口徑 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch13-value-measurement#claim-cash-roi-formula-01](/zh-tw/qwenwork/ch13-value-measurement#claim-cash-roi-formula-01) |
| 統計口徑 | 已實現現金收益、增量總成本、現金淨收益和現金 ROI 的社群規範公式 |
| 適用範圍 | 邊界明確且能夠取得同口徑任務、成本和現金憑證的企業 AI 場景 |
| 侷限 | 該公式是本書的管理決策口徑，不是會計準則或估值意見；增量總成本為 0 時不計算現金 ROI。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 財務與價值複核者 |

## claim-connector-authorization-01

連接器用於連線外部資料或工具，實際可訪問的資料和可執行動作受當前授權與可用範圍約束。

| 欄位 | 內容 |
|---|---|
| 主張型別 | product-fact |
| 來源型別 | official-product |
| 來源定位 | [連接器](https://qwenwork.cn/docs/features/connectors) |
| 核驗狀態 | verified |
| 正文位置 | [docs/qwenwork/ch04-skills-connectors#claim-connector-authorization-01](/zh-tw/qwenwork/ch04-skills-connectors#claim-connector-authorization-01) |
| 統計口徑 | 官方連接器頁面公開說明 |
| 適用範圍 | 連線外部資料來源、賬號和工具動作的任務 |
| 侷限 | 連接器清單、授權方式和可執行動作可能變化，應以使用時頁面、組織配置和賬號實測為準。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 產品事實核驗者 |

## claim-critical-error-hard-gate-01

關鍵錯誤、法律、安全和未授權動作是不可放寬的硬門；效率、採用率和滿意度是可調整的實驗閾值。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 關鍵錯誤硬門 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch10-pilot-roadmap#claim-critical-error-hard-gate-01](/zh-tw/qwenwork/ch10-pilot-roadmap#claim-critical-error-hard-gate-01) |
| 統計口徑 | 階段內全量登記關鍵錯誤、法律、安全和未授權事件 |
| 適用範圍 | 企業 AI 場景試點、團隊釋出、規模化推廣和事件覆盤 |
| 侷限 | 本書只定義最低關鍵錯誤類別；業務負責人和資料/安全責任人還需按場景補充更嚴格分類與判定證據。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 試點治理負責人 |

## claim-define-done-first-01

在啟動 AI 任務前先定義完成，再決定提示詞、工具和自動化方式。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 任務交付協議 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch02-task-delivery-protocol#claim-define-done-first-01](/zh-tw/qwenwork/ch02-task-delivery-protocol#claim-define-done-first-01) |
| 統計口徑 | 不適用：實踐順序建議 |
| 適用範圍 | 企業 AI 任務設計、試執行和覆盤 |
| 侷限 | 探索性任務也可以使用該順序，但完成可以定義為形成問題清單或驗證假設，而非作出最終結論。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 方法規範負責人 |

## claim-delivery-criteria-01

用可編輯、可驗證、可流轉三個判據共同定義業務交付；任一判據不滿足，都應把任務視為未完成或降級為草稿。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 交付判據 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch01-delivery-standard#claim-delivery-criteria-01](/zh-tw/qwenwork/ch01-delivery-standard#claim-delivery-criteria-01) |
| 統計口徑 | 不適用：實踐驗收規則 |
| 適用範圍 | 文件、資料、研究、彙報和協同任務的交付驗收 |
| 侷限 | 高風險任務可把人工複核和明確確認定義為交付的一部分，三個判據不等於全自動化。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 內容複核者 |

## claim-delivery-not-generation-01

生成內容不等於完成工作；只有結果能夠繼續編輯、接受核驗並進入下一業務環節，AI 才完成了一次業務交付。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 交付標準 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch01-delivery-standard#claim-delivery-not-generation-01](/zh-tw/qwenwork/ch01-delivery-standard#claim-delivery-not-generation-01) |
| 統計口徑 | 不適用：規範性判斷 |
| 適用範圍 | 企業 AI 任務選型、試點驗收和工作流升級 |
| 侷限 | 這是本書對業務交付的規範定義，不是行業統計結論，也不要求所有任務自動完成。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-demo-boundary-01

公開演示只能證明可觀察的交付形態，不能據此推導客戶身份、實施成本、生產穩定性或業務效果。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | first-party-disclosure |
| 來源定位 | [千問辦公·案例庫](https://alidocs.dingtalk.com/i/nodes/Gl6Pm2Db8DMGQKRatejr3EKoWxLq0Ee4) |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch08-research-evidence-chain#claim-demo-boundary-01](/zh-tw/qwenwork/ch08-research-evidence-chain#claim-demo-boundary-01) |
| 統計口徑 | 不適用：公開材料證據邊界判斷 |
| 適用範圍 | 公開網頁、看板、報告和其他示例產物的引用 |
| 侷限 | R11 提供案例庫入口；對示例產物可支援範圍的界定是本書編輯判斷。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 案例證據複核者 |

## claim-ecosystem-status-columns-01

產品與生態討論統一分為已公開能力、已實測組合、基於公開介面的可行推斷、待驗證路線假設四類，不能把推斷或建議寫成已經發布的產品能力。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 產品生態狀態列 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/conclusion#claim-ecosystem-status-columns-01](/zh-tw/qwenwork/conclusion#claim-ecosystem-status-columns-01) |
| 統計口徑 | 不適用：產品與生態建議的證據狀態分類 |
| 適用範圍 | 產品路線討論、夥伴方案評審和企業架構假設驗證 |
| 侷限 | 四類狀態是本書的編輯治理方法，不代表官方路線、產品排期或行業通用成熟度等級。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 產品與生態建議複核者 |

## claim-evidence-card-fields-01

研究證據卡唯一規範由主張、來源原文、來源型別、日期、統計口徑、適用範圍、限制、衝突、狀態九個欄位組成。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 證據卡 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch08-research-evidence-chain#claim-evidence-card-fields-01](/zh-tw/qwenwork/ch08-research-evidence-chain#claim-evidence-card-fields-01) |
| 統計口徑 | 不適用：研究工作記錄規範 |
| 適用範圍 | 需要形成可複核事實、推斷和建議的研究任務 |
| 侷限 | 欄位完整隻能提高可複核性，不能保證來源真實、口徑正確或結論成立。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 研究方法負責人 |

## claim-expert-kit-release-01

專家套件只能組合已經通過崗位階段門的工作流，不能用套件名稱替代組成資產的測試、許可權和責任記錄。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 專家套件釋出規則 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch04-skills-connectors#claim-expert-kit-release-01](/zh-tw/qwenwork/ch04-skills-connectors#claim-expert-kit-release-01) |
| 統計口徑 | 不適用：資產釋出規則 |
| 適用範圍 | 崗位級專家套件的設計、評審、釋出和回退 |
| 侷限 | 該階段門對映是本書治理建議，不代表官方產品對專家套件的釋出條件。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 工作流資產負責人 |

## claim-g0-g3-controls-01

G0–G3 只表示動作風險等級；資料敏感度和專業後果必須獨立判斷，並採用三者中更嚴格的控制。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 G0–G3 動作控制模型 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch11-security-governance#claim-g0-g3-controls-01](/zh-tw/qwenwork/ch11-security-governance#claim-g0-g3-controls-01) |
| 統計口徑 | 不適用：動作、資料和專業後果的治理分類 |
| 適用範圍 | 讀取、草稿寫入、內部業務寫入和高後果動作的企業工作流 |
| 侷限 | G0–G3 是本書的社群治理模型，不是產品官方評級；組織政策或適用規則更嚴格時，應採用更嚴格控制。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 資料與安全治理負責人 |

## claim-g2-continuous-authorization-01

G2 只有在工作流正式釋出、邊界明確且取得共同核准的持續授權後，才可從逐批事前確認轉為核准範圍內執行和抽檢；G3 每次仍須事前確認。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 G2 持續授權規則 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch11-security-governance#claim-g2-continuous-authorization-01](/zh-tw/qwenwork/ch11-security-governance#claim-g2-continuous-authorization-01) |
| 統計口徑 | 不適用：有界工作流授權、留痕和抽檢規則 |
| 適用範圍 | 建立或更新內部待辦、臺賬、日誌、CRM 等 G2 業務物件 |
| 侷限 | 持續授權只適用於登記的工作流版本、執行主體、執行環境、核准用途和業務邊界；許可權、欄位、接收物件、錯誤率、工作流邏輯或規則、版本、模型、連接器、執行主體或執行環境任一變化時均立即失效，並要求重驗和共同核准。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 資料與安全治理負責人 |

## claim-human-responsibility-01

業務負責人始終對最終業務結果負責，不能把責任轉移給 AI 或流程維護者；G3 執行者與動作核准人不得為同一人。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 人機責任模型 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch11-security-governance#claim-human-responsibility-01](/zh-tw/qwenwork/ch11-security-governance#claim-human-responsibility-01) |
| 統計口徑 | 不適用：企業工作流責任與職責分離原則 |
| 適用範圍 | 企業 AI 工作流的設計、執行、複核、核准、事件處置和結果問責 |
| 侷限 | 角色可由小團隊成員兼任，但不得破壞 G3 執行與核准分離；具體法定責任仍以適用法律和組織制度為準。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 企業治理負責人 |

## claim-office-delivery-acceptance-01

文件、資料、彙報和網頁任務都按輸入、處理、產物、驗收、風險、人工確認設計，不能把檔案成功生成當成交付通過。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 辦公交付規範 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch06-office-delivery#claim-office-delivery-acceptance-01](/zh-tw/qwenwork/ch06-office-delivery#claim-office-delivery-acceptance-01) |
| 統計口徑 | 不適用：辦公任務驗收規範 |
| 適用範圍 | 文件、資料、彙報和網頁類企業辦公任務 |
| 侷限 | 各專業領域仍需追加法務、財務、品牌、隱私和無障礙等強制標準。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 辦公交付方法負責人 |

## claim-pilot-stage-gates-01

個人模板候選、團隊工作流釋出和規模化推廣構成唯一三階段門；日曆時間、場景評分或平均效率提升都不能替代階段門。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 試點階段門 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch10-pilot-roadmap#claim-pilot-stage-gates-01](/zh-tw/qwenwork/ch10-pilot-roadmap#claim-pilot-stage-gates-01) |
| 統計口徑 | 不適用：試點發布與升級規則 |
| 適用範圍 | 企業 AI 場景從個人驗證、團隊釋出到規模化推廣的決策 |
| 侷限 | 三階段門是本書的預設治理建議；組織可以提高標準，但不能用日曆時間代替驗證結果。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 試點治理負責人 |

## claim-product-delivery-forms-01

千問辦公官方簡介將 Word、Excel、PPT、網頁等列為可交付產物形態。

| 欄位 | 內容 |
|---|---|
| 主張型別 | product-fact |
| 來源型別 | official-product |
| 來源定位 | [千問辦公簡介](https://qwenwork.cn/docs/product-introduction) |
| 核驗狀態 | verified |
| 正文位置 | [docs/qwenwork/ch01-delivery-standard#claim-product-delivery-forms-01](/zh-tw/qwenwork/ch01-delivery-standard#claim-product-delivery-forms-01) |
| 統計口徑 | 官方頁面列出的產物型別 |
| 適用範圍 | 用於說明產品官方列出的交付形態，不用於推斷具體任務完成率 |
| 侷限 | 產品能力、賬號權益、地區可用性和具體任務效果可能變化，應以使用時頁面和賬號實測為準。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 產品事實核驗者 |

## claim-public-case-count-01

截至 2026-08-01，滿足案例級來源定位與釋出門的公開案例為 0。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | first-party-disclosure |
| 來源定位 | [千問辦公·案例庫](https://alidocs.dingtalk.com/i/nodes/Gl6Pm2Db8DMGQKRatejr3EKoWxLq0Ee4) |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch09-public-case-atlas#claim-public-case-count-01](/zh-tw/qwenwork/ch09-public-case-atlas#claim-public-case-count-01) |
| 統計口徑 | 截至 2026-08-01，逐條檢查案例候選的外部記錄 ID、案例級來源定位、核驗狀態和公開計數標記；滿足全部發布門的條目數為 0。 |
| 適用範圍 | QwenWorkGuide 當前公開案例圖譜、案例入口和對外案例計數 |
| 侷限 | R11 只提供候選集合級入口，公開計數 0 是本倉庫截至核驗日的釋出門審計結果；後續取得案例級證據並重新核驗後，計數可能變化。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 案例證據複核者 |

## claim-public-demo-boundary-01

示例產物只證明產物形態，不能證明案例歸屬、實施成本、生產穩定性或業務效果。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | first-party-disclosure |
| 來源定位 | [千問辦公·案例庫](https://alidocs.dingtalk.com/i/nodes/Gl6Pm2Db8DMGQKRatejr3EKoWxLq0Ee4) |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch09-public-case-atlas#claim-public-demo-boundary-01](/zh-tw/qwenwork/ch09-public-case-atlas#claim-public-demo-boundary-01) |
| 統計口徑 | 不適用：案例候選中的示例產物與案例級來源證據分開判斷 |
| 適用範圍 | 公開案例候選中的網頁、看板、報告和其他示例產物連結 |
| 侷限 | R11 未暴露可把單個示例產物穩定繫結到具體候選案例的案例級記錄；該邊界不評價示例產物本身的品質。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 案例證據複核者 |

## claim-question-workflow-boundary-01

純問答用法與任務型工作流的差異在於使用方式和責任鏈，而不是對整個產品類別作優劣判斷。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | first-party-disclosure |
| 來源定位 | [千問辦公·職場 AI 三千問—基礎必修課](https://alidocs.dingtalk.com/i/nodes/mExel2BLV59rgdDPiPER1ZZDVgk9rpMq) |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch01-delivery-standard#claim-question-workflow-boundary-01](/zh-tw/qwenwork/ch01-delivery-standard#claim-question-workflow-boundary-01) |
| 統計口徑 | 不適用：基於公開材料的編輯判斷 |
| 適用範圍 | 企業 AI 使用方式比較、任務選型和採購演示評估 |
| 侷限 | R10 提供產品方的定位語境；本書將比較範圍收窄到使用方式，不據此推出整個產品類別的普遍優劣。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-research-question-tree-01

研究先把決策問題拆成可由證據回答的問題樹，再檢索和寫作。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 研究問題樹 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch08-research-evidence-chain#claim-research-question-tree-01](/zh-tw/qwenwork/ch08-research-evidence-chain#claim-research-question-tree-01) |
| 統計口徑 | 不適用：研究流程建議 |
| 適用範圍 | 行業掃描、競品分析、客戶研究、政策跟蹤和內部立項 |
| 侷限 | 問題樹幫助限定研究範圍，但不能代替新證據出現後的假設修正。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 研究方法負責人 |

## claim-role-scenario-card-01

崗位 AI 場景統一使用業務問題、角色、輸入、當前步驟、交付物、驗收、禁做動作、指標、風險、基線十個欄位登記。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 崗位場景卡 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch07-role-roadmaps#claim-role-scenario-card-01](/zh-tw/qwenwork/ch07-role-roadmaps#claim-role-scenario-card-01) |
| 統計口徑 | 不適用：崗位場景登記規範 |
| 適用範圍 | HR、銷售與商務、產品與專案、財務與法務、內容與市場場景 |
| 侷限 | 場景卡用於任務選型和基線採集，不是崗位績效評價，也不代表固定優先順序。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 崗位場景方法負責人 |

## claim-six-layer-diagnosis-01

企業 AI 的穩定交付由智慧基座、上下文、工具與連線、產物工作臺、複用與自動化、治理六層共同決定；模型只是其中一層。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 六層診斷模型 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch03-work-environment#claim-six-layer-diagnosis-01](/zh-tw/qwenwork/ch03-work-environment#claim-six-layer-diagnosis-01) |
| 統計口徑 | 不適用：故障診斷框架 |
| 適用範圍 | 企業 AI 試點設計、故障覆盤和責任分工 |
| 侷限 | 六層是本書的診斷分類，不是產品官方架構；一個故障可能同時涉及多層。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 工作環境架構負責人 |

## claim-skill-asset-boundary-01

Skill 封裝可重複方法和工具步驟；它不自動取得資料許可權，也不替代專業驗收。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | official-product |
| 來源定位 | [技能](https://qwenwork.cn/docs/features/skills) |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch04-skills-connectors#claim-skill-asset-boundary-01](/zh-tw/qwenwork/ch04-skills-connectors#claim-skill-asset-boundary-01) |
| 統計口徑 | 不適用：基於公開產品說明的資產治理定義 |
| 適用範圍 | 個人方法沉澱、團隊 Skill 釋出和版本治理 |
| 侷限 | 官方頁面用於確認 Skill 的產品語境；許可權和專業驗收邊界是本書的治理要求。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 工作流資產負責人 |

## claim-summary-calendar-gate-01

30/60/90 天只是三個驗證視窗，日曆不能替代階段門，上一階段未通過不得自動升級。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 10 章《場景選擇與 30/60/90 天試點》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-calendar-gate-01](/zh-tw/qwenwork/executive-summary#claim-summary-calendar-gate-01) |
| 統計口徑 | 不適用：社群判斷 |
| 適用範圍 | 企業 AI 試點的階段安排與升級決策 |
| 侷限 | 30/60/90 是本書便於規劃的社群視窗，不是統一專案工期、產品官方承諾或行業統計；業務週期較長或樣本不足時可以延長，高風險場景也不能壓縮硬門。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-capability-map-01

按完成一次交付、沉澱一條工作流、應用於專業場景、擴充套件為組織能力的順序推進，並以對應規範和證據決定是否升級。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 版本說明：結構與釋出門 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-capability-map-01](/zh-tw/qwenwork/executive-summary#claim-summary-capability-map-01) |
| 統計口徑 | 不適用：社群實踐建議 |
| 適用範圍 | 企業 AI 從個人交付到組織能力的採用路線 |
| 侷限 | 四步地圖是 V2 正文的社群閱讀與採用架構，不是產品官方成熟度模型或行業統計；組織不必按同一工期線性推進，但不能據此跳過對應規範和升級證據。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-delivery-01

生成內容不等於完成工作；結果只有可編輯、可驗證、可流轉，才構成可驗收的一次交付。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 1 章《交付新標準：從回答問題到完成工作》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-delivery-01](/zh-tw/qwenwork/executive-summary#claim-summary-delivery-01) |
| 統計口徑 | 不適用：社群判斷 |
| 適用範圍 | 企業 AI 任務驗收、試點擊擇和交付覆盤 |
| 侷限 | 三個判據是本書的社群交付規範，不是產品官方承諾或行業統計；高風險任務可把人工複核和明確確認納入交付，判據成立不等於任務應全自動執行。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-demo-case-boundary-01

公開演示不能推導客戶效果；案例計數只由公開案例章節與結構化案例來源對映決定。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 9 章《公開案例圖譜：按證據門釋出》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-demo-case-boundary-01](/zh-tw/qwenwork/executive-summary#claim-summary-demo-case-boundary-01) |
| 統計口徑 | 不適用：社群判斷 |
| 適用範圍 | 企業 AI 公開演示解讀、客戶效果表述和案例計數 |
| 侷限 | 這是本書對公開材料的社群證據邊界，不是產品官方承諾或行業案例規模統計；公開演示只支援可觀察的產物形態，不能證明客戶採用或效果，案例計數會隨逐條核驗、失效或撤回變化。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-durable-value-01

長期價值應由工作流資產、專業標準、組織連線和治理能力共同承載，不能用一次生成效果代替持續證明。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 12 章《團隊工作流運營：把一次成功變成可維護資產》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-durable-value-01](/zh-tw/qwenwork/executive-summary#claim-summary-durable-value-01) |
| 統計口徑 | 不適用：社群判斷 |
| 適用範圍 | 企業 AI 的長期運營、組織建設和價值覆盤 |
| 侷限 | 四個維度是本書用於持續運營的社群判斷，不代表產品官方承諾或行業統計；它們描述應持續取證的價值載體，不表示任一組織已經形成這些能力或實現收益。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-evidence-classes-01

讀者應先區分產品事實、客戶結果、公開演示和社群方法，再核對主張型別、來源、狀態和侷限。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 8 章《研究與證據鏈：從問題樹到釋出記錄》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-evidence-classes-01](/zh-tw/qwenwork/executive-summary#claim-summary-evidence-classes-01) |
| 統計口徑 | 不適用：社群實踐建議 |
| 適用範圍 | 企業 AI 內容閱讀、證據複核和釋出審查 |
| 侷限 | 證據分類是本書的社群研究方法，不是產品官方認證或行業統計；分類和欄位齊全只提高可追溯性，不等於來源真實、結論正確或已經完成核驗。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-g3-separation-01

G3 執行者與動作核准人必須職責分離。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 11 章《安全治理：動作、資料、後果與人機責任》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-g3-separation-01](/zh-tw/qwenwork/executive-summary#claim-summary-g3-separation-01) |
| 統計口徑 | 不適用：社群實踐建議 |
| 適用範圍 | 企業 AI 工作流的 G3 高後果動作控制 |
| 侷限 | 職責分離是本書針對 G3 高後果動作的社群治理建議，不是產品官方授權或行業統計；小團隊可兼任其他角色，但不得由同一人執行並核准 G3 動作。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-roles-01

責任鏈採用業務負責人、流程維護者、資料/安全責任人、使用者、內容複核者、動作核准人六類角色，業務負責人始終對最終業務結果負責。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 11 章《安全治理：動作、資料、後果與人機責任》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-roles-01](/zh-tw/qwenwork/executive-summary#claim-summary-roles-01) |
| 統計口徑 | 不適用：社群判斷 |
| 適用範圍 | 企業 AI 工作流的責任分配、上線核准和結果追責 |
| 侷限 | 六類角色是本書的社群責任模型，不是法定崗位編制、產品官方角色或行業統計；小團隊可兼任，但各項責任仍須明確，且 G3 執行者與動作核准人必須分離。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-scene-workflow-01

場景界定試點與價值邊界，工作流才是可複用、可運營的資產；二者之間必須經過階段門。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 10 章《場景選擇與 30/60/90 天試點》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-scene-workflow-01](/zh-tw/qwenwork/executive-summary#claim-summary-scene-workflow-01) |
| 統計口徑 | 不適用：社群判斷 |
| 適用範圍 | 企業 AI 場景試點、工作流釋出和規模化決策 |
| 侷限 | 階段門是本書的社群治理判斷，不代表產品官方承諾或行業統計；通過階段門只說明具備升級條件，不授予資料訪問、寫入、傳送或釋出許可權。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-value-reporting-01

使用量不等於價值；現金 ROI、可釋放產能、品質和風險應分開報告，節省工時不能直接寫成現金收益。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 13 章《價值度量：從使用資料到可復算決策》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-value-reporting-01](/zh-tw/qwenwork/executive-summary#claim-summary-value-reporting-01) |
| 統計口徑 | 不適用：社群判斷 |
| 適用範圍 | 企業 AI 試點價值報告、預算覆盤和規模化決策 |
| 侷限 | 分列報告是本書的社群管理口徑，不是會計準則、估值意見、產品官方承諾或行業統計；現金確認仍服從組織財務制度，未現金化產能不得外推為已實現收益。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-window-30-01

0–30 天只驗證個人模板候選；階段最低核准人為使用者與業務負責人，最終核准人取該集合與全部適用硬門核准人的並集；以交付物、驗收和異常記錄為證據，任一適用硬門失敗或驗收未通過即停止升級。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 10 章《場景選擇與 30/60/90 天試點》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-window-30-01](/zh-tw/qwenwork/executive-summary#claim-summary-window-30-01) |
| 統計口徑 | 不適用：社群實踐建議 |
| 適用範圍 | 企業 AI 試點的 0–30 天個人模板候選驗證視窗 |
| 侷限 | 0–30 天是本書的社群規劃標籤，不是產品官方工期或行業統計；它不構成自動時鐘，任務頻率不足時可延長取證，但不能因到期跳過適用硬門。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-window-60-01

31–60 天只驗證團隊工作流釋出；階段最低核准人為業務負責人、流程維護者與資料/安全責任人，最終核准人取該集合與全部適用硬門核准人的並集；以工作流版本、團隊驗收、核准和異常記錄為證據，任一適用硬門失敗即停止釋出，其他釋出門未通過則最佳化後再測或停止。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 10 章《場景選擇與 30/60/90 天試點》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-window-60-01](/zh-tw/qwenwork/executive-summary#claim-summary-window-60-01) |
| 統計口徑 | 不適用：社群實踐建議 |
| 適用範圍 | 企業 AI 試點的 31–60 天團隊工作流釋出驗證視窗 |
| 侷限 | 31–60 天是團隊釋出驗證的社群規劃標籤，不是產品官方釋出週期或行業統計；版本、邊界或許可權變化時即使已到第 60 天也應退回重驗，不能自動釋出。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-summary-window-90-01

61–90 天只驗證規模化推廣；階段最低核准人為業務負責人與資料/安全責任人，最終核准人取該集合與全部適用硬門核准人的並集；以覆蓋業務週期的執行、品質、效率和許可權證據作決定，任一適用硬門失敗、登記目標未達到或許可權問題未解決即停止推廣。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 第 10 章《場景選擇與 30/60/90 天試點》 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-summary-window-90-01](/zh-tw/qwenwork/executive-summary#claim-summary-window-90-01) |
| 統計口徑 | 不適用：社群實踐建議 |
| 適用範圍 | 企業 AI 試點的 61–90 天規模化推廣驗證視窗 |
| 侷限 | 61–90 天是規模化驗證的社群規劃標籤，不是產品官方承諾或行業統計；未覆蓋業務週期、登記目標未達到或許可權問題未閉環時，不得以到期為由推廣。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## claim-task-card-fields-01

任務卡唯一規範由目標、輸入、約束、交付、驗收五個欄位組成。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 五段式任務卡 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch02-task-delivery-protocol#claim-task-card-fields-01](/zh-tw/qwenwork/ch02-task-delivery-protocol#claim-task-card-fields-01) |
| 統計口徑 | 不適用：任務輸入規範 |
| 適用範圍 | 文件、資料、研究、彙報和協同類 AI 任務 |
| 侷限 | 五個欄位規定最低任務合同，不替代各專業領域的法規、品質標準或審批要求。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 方法規範負責人 |

## claim-three-surfaces-choice-01

Web、桌面和釘釘應按任務上下文選擇，不存在對所有任務預設最優的入口。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | official-product |
| 來源定位 | [千問辦公簡介](https://qwenwork.cn/docs/product-introduction) |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch03-work-environment#claim-three-surfaces-choice-01](/zh-tw/qwenwork/ch03-work-environment#claim-three-surfaces-choice-01) |
| 統計口徑 | 不適用：基於官方入口語境的使用建議 |
| 適用範圍 | 需要在雲端、本地或釘釘組織上下文中執行的企業 AI 任務 |
| 侷限 | 入口存在和產品能力以當前官方頁面及賬號實測為準；選擇原則是本書建議，不代表官方優先順序。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 工作環境架構負責人 |

## claim-usage-not-value-01

DAU、對話數、Token 和產物數只能說明使用，不能單獨證明企業 AI 已產生業務價值。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 使用與價值邊界 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch13-value-measurement#claim-usage-not-value-01](/zh-tw/qwenwork/ch13-value-measurement#claim-usage-not-value-01) |
| 統計口徑 | 不適用：價值度量的指標解釋邊界 |
| 適用範圍 | 企業 AI 試點運營看板、價值覆盤和擴大決策 |
| 侷限 | 使用指標仍可用於判斷採用和負載，但必須與同口徑效率、品質、風險和現金證據共同解釋。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 價值度量負責人 |

## claim-workflow-card-fields-01

團隊工作流卡唯一規範由 Owner（業務負責人）、流程維護者、版本、適用範圍、輸入輸出、許可權、測試樣本、品質門、變更記錄、失敗案例、回退方式、執行日誌和覆盤節奏十三個欄位組成。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 團隊工作流卡 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch12-workflow-operations#claim-workflow-card-fields-01](/zh-tw/qwenwork/ch12-workflow-operations#claim-workflow-card-fields-01) |
| 統計口徑 | 不適用：團隊工作流運營記錄規範 |
| 適用範圍 | 進入團隊複用範圍的 AI 工作流設計、釋出、執行、變更和退役 |
| 侷限 | 十三欄位是最低運營記錄，不替代組織制度、專業標準或每次執行的實際日誌。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 工作流運營負責人 |

## claim-workflow-change-gate-01

欄位、許可權、模型、連接器或接收物件發生變化時，工作流必須停止沿用舊驗證結論，按受影響範圍重新測試、複核和核准。

| 欄位 | 內容 |
|---|---|
| 主張型別 | practice-guidance |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 工作流變更門 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/ch12-workflow-operations#claim-workflow-change-gate-01](/zh-tw/qwenwork/ch12-workflow-operations#claim-workflow-change-gate-01) |
| 統計口徑 | 不適用：版本變化後的重驗和核准規則 |
| 適用範圍 | 包含欄位、許可權、模型、連接器或接收物件的團隊工作流 |
| 侷限 | 重驗範圍可按變更影響縮小，但涉及授權邊界的變化仍必須先使舊授權失效並恢復事前確認。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 工作流運營負責人 |

## claim-workflow-core-01

企業採用 AI 時，應把關注點從單次模型問答延伸到可驗證、可複用、可治理的業務工作流。

| 欄位 | 內容 |
|---|---|
| 主張型別 | community-judgment |
| 來源型別 | community-framework |
| 來源定位 | QwenWorkGuide V2.0 編輯審查 |
| 核驗狀態 | editor-reviewed |
| 正文位置 | [docs/qwenwork/executive-summary#claim-workflow-core-01](/zh-tw/qwenwork/executive-summary#claim-workflow-core-01) |
| 統計口徑 | 不適用：社群判斷 |
| 適用範圍 | 企業 AI 試點、複用、治理和價值評估 |
| 侷限 | 這是本書的社群判斷，不代表已經得到行業統計證明的普遍事實。 |
| 核驗日期 | 2026-08-01 |
| 責任角色 | 編輯複核者 |

## 待核驗線索（公開安全）


