# 没积分也能用 WorkBuddy？接上你自己的 API 照常跑任务

你打开 WorkBuddy，想让它帮你干活，却发现自己账号里积分不够了，弹窗提示额度不足。你正准备关掉，其实先别急——你手里可能就攥着能用的「弹药」：你自己的 LLM API 密钥，或者公司给你配的 Coding Plan、Token Plan 这类套餐。WorkBuddy 支持接入其他大模型的 API，你把钥匙填上，它就能继续替你跑任务，花的还是你自己的额度，不占用站内的积分。

直接从设置里进入，不用装任何额外插件。

![](/workbuddy/09-external-api/assets/001_image_CaRmbk2N1o.png)

点进模型选项。

![](/workbuddy/09-external-api/assets/002_image_PQxNb3id8o.png)

你点「添加模型」。

![](/workbuddy/09-external-api/assets/003_image_De1fbH0Gho.png)

你可以选各种 Coding Plan，或者填一个自定义的 API。

![](/workbuddy/09-external-api/assets/004_image_Fa7pb60ARo.png)

比如接 DeepSeek，你只需要把 API Key 填进去就行，剩下的交给它。

![](/workbuddy/09-external-api/assets/005_image_W9u5bNsaMo.png)

也能接本地的 Ollama 模型——前提是先在本地把 Ollama 启动起来，它默认走 11434 端口，用的是 OpenAI 兼容接口。本地模型有三个实在的好处：数据不出本机、能离线用、零 Token 成本。

你可能会纠结：到底用云端 API 还是本地模型？简单说，云端 API（如 DeepSeek）省心、随接随用，但要联网、数据会出本机；本地 Ollama 完全离线、零成本，但要你自己把服务跑起来。你按手头的活和对数据的要求来选就行。

![](/workbuddy/09-external-api/assets/006_image_BSnBbYupuo.png)

> API Key 属于敏感凭证，只填在客户端设置里，不要写进任务说明或分享的文件中。

## 新手常见问题

**我没有 WorkBuddy 积分，还能用吗？**
能。只要你有自己的 LLM API（比如 DeepSeek），或者 Coding Plan、Token Plan 这类套餐，按上面的步骤填进设置就能用，消耗的是你自己的额度。

**本地 Ollama 怎么接？**
你先在电脑上把 Ollama 跑起来，它默认监听 11434 端口，接口和 OpenAI 兼容。然后在 WorkBuddy 里添加模型、选本地/Ollama 类型即可。好处是数据不出本机、可离线、还不用花 Token。

**API Key 填在哪里才安全？**
只填在客户端的设置里。千万别把它写进任务说明、提示词，或者顺手塞进要分享的文件——API Key 是敏感凭证，泄露了别人就能盗用你的额度。

**接了外部 API，模型还分自动和手动吗？**
分的。你照样可以在任务里指定用哪个模型，不同模型的速度和成本不一样，按你的活来挑。

---

下一步：让任务定时自己跑——[WorkBuddy 自动化任务 →](/workbuddy/10-automation/)
