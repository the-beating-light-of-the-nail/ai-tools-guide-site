---
description: "你開啟 WorkBuddy，想讓它幫你幹活，卻發現自己賬號裡積分不夠了，彈窗提示額度不足。"
---

# 沒積分也能用 WorkBuddy？接上你自己的 API 照常跑任務

你開啟 WorkBuddy，想讓它幫你幹活，卻發現自己賬號裡積分不夠了，彈窗提示額度不足。其實先別急——你手裡可能就攥著能用的「彈藥」：你自己的 LLM API 金鑰，或者公司給你配的 Coding Plan、Token Plan 這類套餐。WorkBuddy 支援接入其他大模型的 API，把鑰匙填上，它就能繼續替它跑任務，花的還是你自己的額度，不佔用站內的積分。

直接從設定裡進入，不用裝任何額外外掛。

![從設定進入模型接入，無需外掛](/workbuddy/09-external-api/assets/001_image_CaRmbk2N1o.png)

點進模型選項。

![設定裡的模型選項](/workbuddy/09-external-api/assets/002_image_PQxNb3id8o.png)

點「新增模型」。

![點「新增模型」](/workbuddy/09-external-api/assets/003_image_De1fbH0Gho.png)

可選各種 Coding Plan，或者填一個自定義的 API。

![選擇 Coding Plan 或填自定義 API](/workbuddy/09-external-api/assets/004_image_Fa7pb60ARo.png)

比如接 DeepSeek，只需把 API Key 填進去就行，剩下的交給它。

![填入 DeepSeek API Key 完成接入](/workbuddy/09-external-api/assets/005_image_W9u5bNsaMo.png)

也能接本地的 Ollama 模型——前提是先在本地把 Ollama 啟動起來，它預設走 11434 埠，用的是 OpenAI 相容介面。本地模型有三個實在的好處：資料不出本機、能離線用、零 Token 成本。

你可能會糾結：到底用雲端 API 還是本地模型？簡單說，雲端 API（如 DeepSeek）省心、隨接隨用，但要聯網、資料會出本機；本地 Ollama 完全離線、零成本，但要你自己把服務跑起來。你按手頭的活和對資料的要求來選就行。

![雲端 API 與本地 Ollama 的選擇](/workbuddy/09-external-api/assets/006_image_BSnBbYupuo.png)

> API Key 屬於敏感憑證，只填在客戶端設定裡，不要寫進任務說明或分享的檔案中。

## 新手常見問題

**我沒有 WorkBuddy 積分，還能用嗎？**
能。只要你有自己的 LLM API（比如 DeepSeek），或者 Coding Plan、Token Plan 這類套餐，按上面的步驟填進設定就能用，消耗的是自有額度。

**本地 Ollama 怎麼接？**
先在電腦上把 Ollama 跑起來，它預設監聽 11434 埠，介面和 OpenAI 相容。然後在 WorkBuddy 裡新增模型、選本地/Ollama 型別即可。好處是資料不出本機、可離線、還不用花 Token。

**API Key 填在哪裡才安全？**
只填在客戶端的設定裡。千萬別把它寫進任務說明、提示詞，或者順手塞進要分享的檔案——API Key 是敏感憑證，洩露了別人就能盜用對應額度。

**接了外部 API，模型還分自動和手動嗎？**
分的。你照樣可以在任務裡指定用哪個模型，不同模型的速度和成本不一樣，按手頭的活來挑。

---
下一步：讓任務定時自己跑——[WorkBuddy 自動化任務 →](/zh-tw/workbuddy/10-automation/)
