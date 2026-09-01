# 第 9 章 如何接入外部 API

你也许没有积分，但是有自己的 LLM API——WorkBuddy 支持接入其他 LLM 的 API，以及 Coding Plan、Token Plan 等套餐。

直接从设置中进入：

![](/workbuddy/09-external-api/assets/001_image_CaRmbk2N1o.png)

选择模型选项：

![](/workbuddy/09-external-api/assets/002_image_PQxNb3id8o.png)

点击添加模型：

![](/workbuddy/09-external-api/assets/003_image_De1fbH0Gho.png)

可以选择各种 Coding Plan 或者自定义的 API：

![](/workbuddy/09-external-api/assets/004_image_Fa7pb60ARo.png)

比如 DeepSeek，你只需要输入 API Key 即可：

![](/workbuddy/09-external-api/assets/005_image_W9u5bNsaMo.png)

也可以接入本地 Ollama 模型（需先本地启动 Ollama，默认端口 11434，OpenAI 兼容接口）。本地模型的优势：**数据不出本机、可离线、零 Token 成本**。

![](/workbuddy/09-external-api/assets/006_image_BSnBbYupuo.png)

> API Key 属于敏感凭证，只填在客户端设置里，不要写进任务说明或分享的文件中。
