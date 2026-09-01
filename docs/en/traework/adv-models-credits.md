# Advanced: Model Management and Credit Pitfalls

TraeWork bills by "credits," and your model choice directly affects how fast they burn. This chapter distills the official billing docs into a map of the most common pitfalls.

> Official docs: [work_models](https://docs.trae.cn/work_models) | [ide_plans-and-billing](https://docs.trae.cn/ide_plans-and-billing). **Prices and plans as of 2026-08-31; see [trae.cn/pricing](https://www.trae.cn/pricing) for current information.**

## Two Kinds of Credits—Know the Difference First

| | General credits | Work-exclusive credits |
| --- | --- | --- |
| Scope | Usable in both TraeCode and TraeWork | **TraeWork only** |
| Sources | Pro / Pro+ / Ultra memberships, add-on purchases, sign-up packages, check-in events, etc. | Lite membership, sign-up packages, daily check-ins, referrals |

Key consumption rules:

- Credits are consumed only when calling **TRAE's built-in models**; custom models cost none;
- TraeWork's consumption order: **shortest expiry first → for equal validity, Work-exclusive before general → reward credits before membership credits**;
- Seed-2.1-Turbo and Seed-Code are billed at 25% of the normal rate (included with every membership tier).

## Plans at a Glance (China Edition)

| | Lite | Pro | Pro+ | Ultra |
| --- | --- | --- | --- | --- |
| Monthly | ¥49 | ¥99 | ¥239 | ¥699 |
| Monthly subscription | ¥45 (first month ¥9.9) | ¥89 (first month ¥59) | ¥219 | ¥629 |
| Credits/month | 2,000 Work-exclusive | 4,000 general | 12,000 general | 40,000 general |
| Cloud parallelism | 2 | 10 | 10 | 20 |

Free users: 500 general credits for monthly login + 200 Work-exclusive for daily check-in + a 2,000 + 2,000 package for new sign-ups.

**Pitfalls**:

1. **Lite comes with Work-exclusive credits only**—if you also code in TraeCode, you'll find they don't work there; go straight to Pro;
2. Add-on credits (¥50 / 1,000) are all general credits and **can only be purchased by paying members**; unused add-on credits remain usable after membership expires, until their own validity ends;
3. **No downgrades**—you can only move to a lower tier after the current cycle ends; upgrade charges are prorated by unused time;
4. Credits are refunded for failures caused by sensitive-word blocking, underlying model errors, or infinite loops, but not for local errors (e.g., disk full).

## Choosing a Model

Built-in models in Work mode (selection): Seed-2.1-Pro / Seed-2.1-Turbo, GLM-5.3 / GLM-5.2, DeepSeek-V4-Pro / V4-Flash, Kimi-K3 / K2.7-Code, MiniMax-M3, Qwen3.8-Max, and more. Flagship models marked `*` are available only to Pro+ / Ultra / Express members.

Practical strategies:

- **Everyday tasks**: stick with the default Auto Mode (auto-selects a model balancing speed, performance, and resource usage) or a standard-tier model;
- **High volume on a budget**: Seed-2.1-Turbo (25% rate) plus clear, concise task instructions (fewer tokens, lower cost);
- **Important deliverables**: switch to a flagship model for key reports and complex analysis—doing it right once beats repeated rework.

## Bringing Your Own Models (No Credits Consumed)

Settings > Models > "Add Model" (**desktop only**; custom models work only in local environments):

1. Pick a preset provider (pay-as-you-go / Coding Plan / Agent Plan) or "Custom Model";
2. Choose an API format: **OpenAI Chat Completions** (compatible with OpenAI, DeepSeek, Kimi, GLM, OpenRouter, etc.) or **Anthropic Messages** (Claude family);
3. Fill in the API endpoint, model ID, and key; the system verifies them;
4. Optional advanced settings: context window, tool-call rounds, image support, thinking mode, temperature, and more.

Quick reference for common setups: Claude-4 = Anthropic format + the Claude-4 family; GPT-5 = OpenAI format + the GPT-5 family; GLM/DeepSeek/Kimi = OpenAI format + the corresponding family.

> Enter keys only in the client settings—never in task instructions or shared files.

## Credit-Saving Habits Checklist

- [ ] One topic per task; start a new task for unrelated content (avoids replaying old context)
- [ ] Run the workflow on a cheap model first; switch to a flagship only for the final polish
- [ ] Specify the output format in your instructions to cut rework rounds
- [ ] For long documents, have the AI draft an outline first, then expand after you confirm
- [ ] Run a scheduled task manually once before scheduling it, so it doesn't burn credits failing repeatedly unattended
