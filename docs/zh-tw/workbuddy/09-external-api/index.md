# 第 9 章 如何接入外部 API

你也許沒有積分，但是有自己的 LLM API——WorkBuddy 支援接入其他 LLM 的 API，以及 Coding Plan、Token Plan 等套餐。

直接從設定中進入：

![從設定進入模型接入，無需外掛](/workbuddy/09-external-api/assets/001_image_CaRmbk2N1o.png)

選擇模型選項：

![設定裡的模型選項](/workbuddy/09-external-api/assets/002_image_PQxNb3id8o.png)

點選新增模型：

![點「新增模型」](/workbuddy/09-external-api/assets/003_image_De1fbH0Gho.png)

可以選擇各種 Coding Plan 或者自定義的 API：

![選擇 Coding Plan 或填自訂 API](/workbuddy/09-external-api/assets/004_image_Fa7pb60ARo.png)

比如 DeepSeek，你只需要輸入 API Key 即可：

![填入 DeepSeek API Key 完成接入](/workbuddy/09-external-api/assets/005_image_W9u5bNsaMo.png)

也可以接入本地 Ollama 模型（需先本地啟動 Ollama，預設埠 11434，OpenAI 相容介面）。本地模型的優勢：**資料不出本機、可離線、零 Token 成本**。

![雲端 API 與本地 Ollama 的選擇](/workbuddy/09-external-api/assets/006_image_BSnBbYupuo.png)

> API Key 屬於敏感憑證，只填在客戶端設定裡，不要寫進任務說明或分享的檔案中。
