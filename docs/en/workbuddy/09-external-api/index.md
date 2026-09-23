---
description: "You open WorkBuddy ready to get some work done, and find your account is out of credits — a popup tells you the quota is used up. Don't panic; you may already be holding the ammo you need."
---

# Chapter 9: Out of Credits? Plug In Your Own API Key and Keep Going

You open WorkBuddy ready to get some work done, and find your account is out of credits — a popup tells you the quota is used up. Don't panic; you may already be holding the ammo you need: your own LLM API key, or a Coding Plan or Token Plan your company set up for you. WorkBuddy supports connecting third-party LLM APIs. Fill in the key and it keeps running tasks for you, spending your own quota instead of the built-in credits.

You get there straight from Settings — no extra plugins to install.

![Model access from settings, no plugin needed](/workbuddy/09-external-api/assets/001_image_CaRmbk2N1o.png)

Select the model option:

![The model options in settings](/workbuddy/09-external-api/assets/002_image_PQxNb3id8o.png)

Click "Add Model":

![Clicking Add Model](/workbuddy/09-external-api/assets/003_image_De1fbH0Gho.png)

You can pick from various Coding Plans, or fill in a custom API:

![Choosing a Coding Plan or a custom API](/workbuddy/09-external-api/assets/004_image_Fa7pb60ARo.png)

For DeepSeek, for example, you just drop your API Key in and let it handle the rest:

![Entering the DeepSeek API key to finish setup](/workbuddy/09-external-api/assets/005_image_W9u5bNsaMo.png)

You can also connect a local Ollama model — as long as you start Ollama on your machine first. It listens on port 11434 by default and uses an OpenAI-compatible interface. A local model gives you three concrete benefits: **data never leaves your machine, it works offline, and token cost is zero**.

You may be torn between the two. Put simply: a cloud API like DeepSeek is hassle-free and ready the moment you connect it, but it needs a network and your data leaves the machine. Local Ollama is fully offline and free, but you have to run the service yourself. Choose based on the job in front of you and how sensitive the data is.

![Choosing between cloud APIs and local Ollama](/workbuddy/09-external-api/assets/006_image_BSnBbYupuo.png)

> API Keys are sensitive credentials. Enter them only in the client settings — never in task descriptions or files you share.

## FAQ

**I'm out of WorkBuddy credits — can I still use it?**
Yes. If you have your own LLM API (DeepSeek, for example), or a plan like Coding Plan or Token Plan, follow the steps above and enter it in Settings. It will then draw on your own quota.

**How do I connect a local Ollama model?**
Start Ollama on your computer first — it listens on port 11434 by default and its interface is OpenAI-compatible. Then add a model in WorkBuddy and pick the local/Ollama type. You get data that never leaves your machine, offline use, and no token spend.

**Where is it safe to put my API Key?**
Only in the client settings. Never write it into a task description or a prompt, and never tuck it into a file you're about to share — an API Key is a credential, and if it leaks, someone else can burn your quota.

**Once I connect an external API, can I still pick models manually?**
Yes. You can still name the model you want for a given task. Different models differ in speed and cost, so pick per job.

---

Next up: make tasks run on their own schedule — [WorkBuddy Automated Tasks →](/en/workbuddy/10-automation/)
