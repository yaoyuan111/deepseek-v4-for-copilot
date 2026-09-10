<h1 align="center">Personal-AI for Copilot Chat</h1>

<p align="center">
  <!-- marketplace-readme:remove-start -->
  <a href="https://marketplace.visualstudio.com/items?itemName=Vizards.deepseek-v4-for-copilot"><img src="https://img.shields.io/badge/VS%20Code%20Marketplace-Install-007ACC?logo=visualstudiocode&logoColor=white&style=for-the-badge" alt="从 VS Code Marketplace 安装"></a>
  <a href="https://open-vsx.org/extension/Vizards/deepseek-v4-for-copilot"><img src="https://img.shields.io/badge/Open%20VSX-Install-6A4FB6?style=for-the-badge" alt="从 Open VSX 安装"></a>
  <br/>
  <!-- marketplace-readme:remove-end -->
  <img src="https://img.shields.io/github/v/release/Vizards/deepseek-v4-for-copilot?style=for-the-badge&label=Version" alt="版本" />
  <img src="https://vsmarketplacebadges.dev/installs-short/Vizards.deepseek-v4-for-copilot.svg?style=for-the-badge" alt="安装量" />
</p>

<p align="center">
  <a href="https://github.com/yaoyuan111/deepseek-v4-for-copilot/blob/main/README.md">English</a> |
  简体中文
</p>

> 🎉 **致谢与说明**
>
> 本项目基于 [Vizards/deepseek-v4-for-copilot](https://github.com/Vizards/deepseek-v4-for-copilot) 进行**个人化改造**。
> 在此特别感谢原作者 **Vizards** 开发的出色扩展——将 DeepSeek 模型无缝接入 GitHub Copilot Chat，保留了完整的 Agent 模式、工具调用与优雅的 UI。
> 本人仅在此基础上修改了模型接入配置，使其对接**自建的大模型服务**（如需了解原始版本，请访问上方链接）。
>
> ⚠️ 本仓库为**个人 fork / 演示用途**，不提供对原作者 Marketplace 版本的替代，请以原作者官方发布为准。

---

**Personal-AI for Copilot Chat**——在 Copilot Chat 模型选择器中选用你的个人模型，同时保留 Copilot 原本的所有能力。

<p align="center">
  <img src="resources/screenshots/01-picker.png" alt="Personal-AI 出现在 Copilot Chat 模型选择器中，并展示思考深度菜单" width="800">
</p>

喜欢 DeepSeek 的性价比，但不想放弃 GitHub Copilot 的 Agent 模式、工具调用和成熟的交互体验？本扩展将你的 **Personal-AI** 模型（基于 DeepSeek V4 Flash Vision Exp）直接接入 Copilot Chat 模型选择器，支持**原生视觉**、**思考模式**，并使用你自己的 API Key。

## 为什么选这个扩展？

- **不是替换 Copilot，而是增强它。** 没有新的侧边栏，没有新的聊天界面需要学习。只是在你已经在用的模型选择器中多了一个选项。
- **Agent 模式、工具调用、Instructions、MCP、Skills——全部正常运作。** Copilot 的完整能力栈，现在跑在你的模型上。
- **原生图片支持。** Personal-AI 直接处理图片附件，无需视觉代理。
- **需自行提供 API Key，向你的服务商付费。** 你的 API Key，你的账单，你的速率限制。密钥存储在操作系统密钥链中，不会以明文形式写入磁盘。

## 功能特性

### Personal-AI 出现在模型选择器中
选择器包含单一 **Personal-AI** 入口（映射到 `deepseek-v4-flash-vision-exp`），支持长上下文、工具调用和可配置的思考强度。

### 原生视觉
**Personal-AI** 直接处理图片附件，不经过视觉代理。将图片拖入 Copilot Chat，模型即可直接响应。

### 思考模式与思考强度控制
支持思考模式和 `reasoning_content`。`停用`关闭思考模式；开启后可选择`轻量`（`low`）、`标准`（`high`，默认）或`深度`（`max`）。

### 继承全部 Copilot 能力
由于本扩展接入的是 Copilot 的原生 provider API，你免费获得完整能力栈：
- **Agent 模式**——自主执行多步骤任务
- **工具调用**——文件编辑、终端操作、工作区搜索、Git、测试
- **Instructions & Skills**——你的 `.instructions.md`、`AGENTS.md` 和各项 Skills 开箱即用
- **Prompt 缓存统计**——在输出通道中记录 DeepSeek 缓存命中率，直观看到成本节省

<p align="center">
  <img src="resources/screenshots/04-agent.png" alt="Personal-AI 运行 Copilot 的 Agent 模式，执行工具调用" width="800">
</p>

### 安全优先
API Key 存储在 VS Code 的 `SecretStorage` 中（macOS 钥匙串 / Windows 凭据管理器 / Linux 密钥环）。绝不会出现在 `settings.json` 中，也不会被提交到 Git 历史。

### 零运行时依赖
纯 VS Code API + Node.js 内置模块。无需 Python、Docker 或本地代理进程。

## 快速开始

### 前置条件

- VS Code 1.116 及以上版本。本扩展依赖非公开的 Copilot Chat API，较新的 VS Code 版本可能存在兼容性问题——如遇到请[提交 Issue](https://github.com/Vizards/deepseek-v4-for-copilot/issues)。
- GitHub Copilot 订阅（Free / Pro / Enterprise——免费版即可使用）
- DeepSeek API Key，从 [platform.deepseek.com](https://platform.deepseek.com) 获取；使用自定义 `personal-ai.baseUrl` 时也可使用兼容的 provider token

### 安装方式

根据你所使用的编辑器选择对应的注册表安装：

1. **Microsoft VS Code** — 从 [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Vizards.deepseek-v4-for-copilot) 安装。
2. **使用 Open VSX 的编辑器** — 从 [Open VSX](https://open-vsx.org/extension/Vizards/deepseek-v4-for-copilot) 安装。

### 使用步骤

1. 通过命令面板（`Cmd+Shift+P`）运行 **DeepSeek: 设置 API Key**
2. 粘贴你的 Key 或兼容的 provider token（官方 DeepSeek Key 通常以 `sk-` 开头）
3. 打开 Copilot Chat，点击模型选择器，选择 **Personal-AI**
4. 搞定——开始聊天

## 模型

> **个性化改造说明**：本项目已将模型列表精简为单一入口，对接自建的大模型服务。

| 模型入口 | 图片处理 | 思考强度 |
|---|---|---|
| **Personal-AI** (`deepseek-v4-flash-vision-exp`) | 原生图片输入 | `停用` / `轻量` / `标准` / `深度` |

该模型支持思考模式、工具调用和 1M Token 上下文。

## 设置项

| 设置项 | 默认值 | 说明 |
|---|---|---|
| `personal-ai.baseUrl` | `https://api.deepseek.com` | API 端点——可改为自托管或代理部署地址 |
| `personal-ai.requestHeaders` | `{}` | 聊天补全请求的自定义请求头。[配置说明](https://github.com/Vizards/deepseek-v4-for-copilot/blob/main/docs/settings/request-headers.zh.md) |
| `personal-ai.maxTokens` | `0` | 最大输出 Token 数（`0` = API 默认值）。可用于成本控制 |
| `personal-ai.modelIdOverrides` | 预填个人 ID 映射 | Personal-AI 对应的 API 模型 ID。仅在使用模型名不同的兼容第三方 API 时修改 |
| `personal-ai.debugMode` | `minimal` | 诊断模式：`minimal` 仅上报 token 用量，`metadata` 输出隐私安全日志，`verbose` 将完整请求 dump 和 pipeline snapshot 写入扩展 global storage。完整 dump 可能包含敏感提示词文本、工具定义、文件片段和图片描述。使用 `DeepSeek: 打开请求 Dump 目录` 打开 dump 位置 |
| `personal-ai.visionModel` | *(自动)* | **Personal-AI 不使用此配置**——该模型支持原生图片输入。保留以兼容原版扩展 |
| `personal-ai.visionPrompt` | *(内置)* | **Personal-AI 不使用此配置**——该模型支持原生图片输入。保留以兼容原版扩展 |
| `personal-ai.experimental.stabilizeToolList` | `false` | 实验性设置。尝试预先激活 VS Code/Copilot 的虚拟工具，让传给 API 的 `tools` 参数在多轮对话中更完整、更稳定。当已启用工具跨轮次变化时，可能提高上下文缓存命中率。代价是 input tokens 可能增加；缓存命中的 input tokens 单价更低，但仍会计入用量。64 个或更少已启用工具时通常无需开启，除非工具列表仍在跨轮次变化；超过 128 个已启用工具时不建议开启 |

思考强度可通过 Copilot Chat 的模型选择器对 Personal-AI 进行设置。

兼容 API 代理的 `settings.json` 配置示例：

```json
{
  "personal-ai.modelIdOverrides": {
    "deepseek-v4-flash-vision-exp": "your-model-id"
  }
}
```

## 方案对比

| | 本扩展 | 本地代理（如 LiteLLM） | 独立 DeepSeek 扩展 |
|---|---|---|---|
| 在 Copilot Chat 内使用 | ✅ | ✅ | ❌ 独立界面 |
| Agent 模式、工具、Skills | ✅ | ✅ | ⚠️ 自行实现 |
| 视觉支持 | ✅ 原生 | ❌ | ❌ |
| 无需额外运行进程 | ✅ | ❌ | ✅ |
| 一键安装 | ✅ | ❌ | ✅ |
| API Key 存系统密钥链 | ✅ | ❌ | ⚠️ 各异 |

## 个人化改造

> 本段落记录本项目相对原版的改动，仅供参考。

本项目在原版 `Vizards/deepseek-v4-for-copilot` 基础上做了如下个人化改造：

| 项目 | 原版 | 个人化改造 |
|---|---|---|
| **模型入口** | 4 个（V4.1 Flash / V4 Flash / V4 Pro / Flash Vision Exp） | 精简为 **1 个** `Personal-AI`（`deepseek-v4-flash-vision-exp`） |
| **显示名称** | DeepSeek V4.1 Flash 等 | `Personal-AI` |
| **视觉处理** | 原生 + 视觉代理两种 | 仅**原生视觉**（`nativeImageInput: true`） |
| **退役提示** | V4 系列会显示「已退役」警告 | 已移除 `LEGACY_MODEL_IDS`，不显示退役警告 |
| **`modelIdOverrides`** | 4 个模型映射 | 仅 `deepseek-v4-flash-vision-exp` 一项 |
| **接入端点** | 官方 DeepSeek API | 可配置为自建 / 自托管 / 中转服务（`personal-ai.baseUrl`） |

### 对接自建服务的配置示例

```jsonc
{
  // 自建端点（阿里云中转 / 本地 vLLM / 自托管）
  "personal-ai.baseUrl": "https://your-endpoint/v1",

  // 模型 ID 覆盖（对接第三方兼容 API 时使用）
  "personal-ai.modelIdOverrides": {
    "deepseek-v4-flash-vision-exp": "deepseek-v4-flash-vision-exp"
  }
}
```

然后在命令面板运行 **`DeepSeek: 设置 API Key`**，输入你的服务商 API Key 即可。

## 许可证

[MIT](LICENSE)
