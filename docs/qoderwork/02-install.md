# 安装与登录

QoderWork 是本地运行的桌面应用。系统要求：**macOS 14+**（Apple Silicon / Intel 双架构包）、**Windows 10+ 64 位**、磁盘 500MB+、稳定网络（需要从云端拉取模型、技能与连接器）。

> 官方安装文档：[macOS](https://docs.qoder.com/zh/qoderwork/installation-macos) ｜ [Windows](https://docs.qoder.com/zh/qoderwork/installation-windows)

## 下载渠道

- 国际版：[qoderwork.com](https://qoderwork.com)（官方快速开始文档指定）
- 国内版：[qoder.com.cn/qoderwork](https://qoder.com.cn/qoderwork)（阿里云渠道，登录 Qoder CN 账号）

## macOS 安装

1. 下载 .dmg，拖入 Applications；
2. 首次启动若被 Gatekeeper 拦截：系统设置 → 隐私与安全性 → 底部点「仍然打开」（此提示只出现一次）；
3. 登录：已有 Qoder 账号直接登录，没有就邮箱注册或第三方登录；
4. 进入工作界面。

更新：默认后台检查，需你点击确认才下载重启，不会未经确认替换当前版本；手动检查在菜单栏 QoderWork → 检查更新。

卸载：拖入废纸篓；想彻底清理配置，退出登录后在终端执行 `rm -rf ~/.qoderwork`（会清除未同步到云端的本地任务历史）。

## Windows 安装：先选对安装包

两种安装包**功能完全一致**，区别在安装位置和权限：

| | 系统版 X64(System) | 用户版 X64(User) |
| --- | --- | --- |
| 安装位置 | Program Files | %LOCALAPPDATA% |
| 谁能用 | 所有账户 | 仅当前账户 |
| 管理员权限 | 需要 | **不需要** |

官方原话："拿不准就选**用户版**：不需要管理员权限，安装最省事。"

被 SmartScreen 拦截时：点「更多信息」→「仍要运行」。卸载：设置 → 应用 → 已安装的应用 → 搜 Qoder → 卸载；清理配置删 `%USERPROFILE%\.qoderwork`。

## 登录后先做三件事

1. **切中文**：左下角语言设置（默认可能为英文）；
2. **看积分**：右上角 Credits 按钮查看余额。新用户注册送积分礼包；国内版另有每日签到领积分活动（留意活动有效期）；
3. **理解计费**：QoderWork 按 Credits 计费，与 Qoder 全家桶共享余额。模型分档（标准/高级/旗舰）消耗不同——日常任务标准档够用，详见[意识、成本与安全环境](/qoderwork/adv-memory-cost)。

## 常见安装问题

| 问题 | 解决 |
| --- | --- |
| macOS 提示"无法验证开发者" | 系统设置 → 隐私与安全性 → 仍要打开 |
| Windows 权限不足 | 换用户版安装包，或以管理员身份运行 |
| 低于 macOS 14 | 无法启动，需先升级系统 |
| 任务执行提示权限不足 | 检查是否授权了对应工作目录 |

## 隐私三条（官方口径）

1. 文件操作在本地完成，不会被上传到云端；但相关文本内容会发送至大模型 API 服务商处理；
2. 只能访问你明确授权的工作目录，未授权目录确需访问时会先征求你的同意；
3. 文件内容不会在云端永久存储。

---

下一步：[第一个任务 →](/qoderwork/03-first-task)
