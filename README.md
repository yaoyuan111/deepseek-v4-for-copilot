<h1 align="center">Personal-AI for Copilot Chat</h1>

<p align="center">
  <!-- marketplace-readme:remove-start -->
  <a href="https://marketplace.visualstudio.com/items?itemName=Vizards.deepseek-v4-for-copilot"><img src="https://img.shields.io/badge/VS%20Code%20Marketplace-Install-007ACC?logo=visualstudiocode&logoColor=white&style=for-the-badge" alt="Install from VS Code Marketplace"></a>
  <a href="https://open-vsx.org/extension/Vizards/deepseek-v4-for-copilot"><img src="https://img.shields.io/badge/Open%20VSX-Install-6A4FB6?style=for-the-badge" alt="Install from Open VSX"></a>
  <br/>
  <!-- marketplace-readme:remove-end -->
  <img src="https://img.shields.io/github/v/release/Vizards/deepseek-v4-for-copilot?style=for-the-badge&label=Version" alt="Version" />
  <img src="https://vsmarketplacebadges.dev/installs-short/Vizards.deepseek-v4-for-copilot.svg?style=for-the-badge" alt="Installs" />
</p>

<p align="center">
  English |
  <a href="https://github.com/yaoyuan111/deepseek-v4-for-copilot/blob/main/README.zh-cn.md">简体中文</a>
</p>

> 🎉 **致谢与说明**
>
> 本项目基于 [Vizards/deepseek-v4-for-copilot](https://github.com/Vizards/deepseek-v4-for-copilot) 进行**个人化改造**。
> 在此特别感谢原作者 **Vizards** 开发的出色扩展 —— 将 DeepSeek 模型无缝接入 GitHub Copilot Chat，保留了完整的 Agent 模式、工具调用与优雅的 UI。
> 本人仅在此基础上修改了模型接入配置，使其对接**自建的大模型服务**（如需了解原始版本，请访问上方链接）。
>
> ⚠️ 本仓库为**个人 fork / 演示用途**，不提供对原作者 Marketplace 版本的替代，请以原作者官方发布为准。

---

**Personal-AI for Copilot Chat** — 在 Copilot Chat 模型选择器中选用你的个人模型，同时保留 Copilot 原本的所有能力。

<p align="center">
  <img src="resources/screenshots/01-picker.png" alt="Personal-AI in the Copilot Chat model picker, alongside the Thinking Effort menu" width="800">
</p>

Love DeepSeek's price-performance but don't want to give up GitHub Copilot's agent mode, tool calling, and polished UI? This extension adds your **Personal-AI** model (backed by DeepSeek V4 Flash Vision Exp) to the Copilot Chat model selector — with **native vision**, **thinking mode**, and your own API key.

## Why this extension?

- **Don't replace Copilot — power it up.** No new sidebar, no new chat UI to learn. Just a new model in the picker you already use.
- **Agent mode, tool calling, instructions, MCP, skills — all of it still works.** Copilot's entire stack, now running on your model.
- **Native image support.** Personal-AI receives image attachments natively, no Vision Proxy needed.
- **BYOK, pay your provider directly.** Your API key, your bill, your rate limits. Stored in the OS keychain, never on disk.

## Features

### Personal-AI in the model picker
The picker includes a single **Personal-AI** entry (mapped to `deepseek-v4-flash-vision-exp`), with long context, tool calling, and configurable thinking effort.

### Native Vision
**Personal-AI** handles image attachments natively, without a Vision Proxy. Drop an image into Copilot Chat and the model responds to it directly.

### Thinking Mode and Effort Control
Supports thinking mode and `reasoning_content`. `none` disables thinking mode; `low`, `high` (default), and `max` set the thinking effort.

### Inherits Every Copilot Capability
Because this plugs into Copilot's native provider API, you get the full stack for free:
- **Agent mode** — autonomous multi-step tasks
- **Tool calling** — file edits, terminal, workspace search, Git, tests
- **Instructions & skills** — all your `.instructions.md`, `AGENTS.md`, and skills just work
- **Prompt caching stats** — DeepSeek's cache hit rate logged in the output channel so you can see the savings

<p align="center">
  <img src="resources/screenshots/04-agent.png" alt="Personal-AI running Copilot's agent mode with tool calls" width="800">
</p>

### Secure by Default
API key lives in VS Code's `SecretStorage` (OS keychain on macOS / Windows / Linux). Never in `settings.json`, never in your Git history.

### Zero Runtime Dependencies
Pure VS Code API + Node.js built-ins. No Python, no Docker, no local proxy server to babysit.

## Getting Started

### Prerequisites

- VS Code 1.116 or later. This extension relies on non-public Copilot Chat APIs that may break on newer VS Code versions — [report an issue](https://github.com/Vizards/deepseek-v4-for-copilot/issues) if you hit one.
- GitHub Copilot subscription (Free / Pro / Enterprise — the free tier works)
- A compatible provider API key, or a compatible provider token when using a custom `deepseek-copilot.baseUrl`

### Installation

Install from the registry used by your editor:

1. **Microsoft VS Code** — install from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Vizards.deepseek-v4-for-copilot).
2. **Editors that use Open VSX** — install from [Open VSX](https://open-vsx.org/extension/Vizards/deepseek-v4-for-copilot).

### Usage

1. Run **DeepSeek: Set API Key** from the Command Palette (`Cmd+Shift+P`)
2. Paste your key or compatible provider token (official DeepSeek keys usually start with `sk-`)
3. Open Copilot Chat, click the model picker, and choose **Personal-AI**
4. That's it — chat away

## Models

> **个性化改造说明**：本项目已将模型列表精简为单一入口，对接自建的大模型服务。

| Model Entry | Image Handling | Thinking Effort |
|---|---|---|
| **Personal-AI** (`deepseek-v4-flash-vision-exp`) | Native image input | `none` / `low` / `high` / `max` |

The model supports thinking mode, tool calling, and 1M token context.

## Settings

| Setting | Default | Description |
|---|---|---|
| `deepseek-copilot.baseUrl` | `https://api.deepseek.com` | API endpoint — change for self-hosted / proxied deployments |
| `deepseek-copilot.requestHeaders` | `{}` | Custom headers for chat completions. [Configuration guide](https://github.com/Vizards/deepseek-v4-for-copilot/blob/main/docs/settings/request-headers.en.md) |
| `deepseek-copilot.maxTokens` | `0` | Max output tokens (`0` = API default). Useful for cost control |
| `deepseek-copilot.modelIdOverrides` | prefilled personal ID map | API model ID to send for Personal-AI. Change only for compatible third-party APIs with different model names |
| `deepseek-copilot.debugMode` | `minimal` | Diagnostic mode: `minimal` for token usage only, `metadata` for privacy-preserving logs, or `verbose` for full request dumps and pipeline snapshots under extension global storage. Full dumps may include sensitive prompt text, tool schemas, file snippets, and image descriptions. Use `DeepSeek: Open Request Dumps Folder` to open the dump location |
| `deepseek-copilot.visionModel` | *(auto)* | **Not used by Personal-AI** — this model has native image input. Kept for compatibility with the original extension |
| `deepseek-copilot.visionPrompt` | *(built-in)* | **Not used by Personal-AI** — this model has native image input. Kept for compatibility with the original extension |
| `deepseek-copilot.experimental.stabilizeToolList` | `false` | Experimental. Tries to pre-activate VS Code/Copilot virtual tools so the API `tools` parameter is more complete and stable across turns. May improve context-cache hit rate when enabled tools change between turns. Can increase input tokens because more function definitions may be included; cache-hit input tokens are cheaper but still count toward usage. Usually leave it off with 64 or fewer enabled tools unless the tool list still changes across turns; do not enable it with more than 128 enabled tools |

Thinking Effort is configured from Copilot Chat's model picker for the Personal-AI model.

Example `settings.json` override for compatible API proxies:

```json
{
  "deepseek-copilot.modelIdOverrides": {
    "deepseek-v4-flash-vision-exp": "your-model-id"
  }
}
```

## Compared to alternatives

| | This extension | Local proxy (e.g. LiteLLM) | Standalone DeepSeek extensions |
|---|---|---|---|
| Works inside Copilot Chat | ✅ | ✅ | ❌ separate UI |
| Agent mode, tools, skills | ✅ | ✅ | ⚠️ reimplemented |
| Vision support | ✅ native | ❌ | ❌ |
| No extra process to run | ✅ | ❌ | ✅ |
| One-click install | ✅ | ❌ | ✅ |
| API key in OS keychain | ✅ | ❌ | ⚠️ varies |

## 个人化改造

> 本段落记录本项目相对原版的改动，仅供参考。

本项目在原版 `Vizards/deepseek-v4-for-copilot` 基础上做了如下个人化改造：

| 项目 | 原版 | 个人化改造 |
|---|---|---|
| **模型入口** | 4 个（V4.1 Flash / V4 Flash / V4 Pro / Flash Vision Exp） | 精简为 **1 个** `Personal-AI`（`deepseek-v4-flash-vision-exp`） |
| **显示名称** | DeepSeek V4.1 Flash 等 | `Personal-AI` |
| **视觉处理** | 原生 + Vision Proxy 两种 | 仅**原生视觉**（`nativeImageInput: true`） |
| **退役提示** | V4 系列会显示「已退役」警告 | 已移除 `LEGACY_MODEL_IDS`，不显示退役警告 |
| **`modelIdOverrides`** | 4 个模型映射 | 仅 `deepseek-v4-flash-vision-exp` 一项 |
| **接入端点** | 官方 DeepSeek API | 可配置为自建 / 自托管 / 中转服务（`deepseek-copilot.baseUrl`） |

### 对接自建服务的配置示例

```jsonc
{
  // 自建端点（阿里云中转 / 本地 vLLM / 自托管）
  "deepseek-copilot.baseUrl": "https://your-endpoint/v1",

  // 模型 ID 覆盖（对接第三方兼容 API 时使用）
  "deepseek-copilot.modelIdOverrides": {
    "deepseek-v4-flash-vision-exp": "deepseek-v4-flash-vision-exp"
  }
}
```

然后在命令面板运行 **`DeepSeek: Set API Key`**，输入你的服务商 API Key 即可。

## License

[MIT](LICENSE)
