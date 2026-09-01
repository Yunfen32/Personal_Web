我需要更深入了解项目的技术细节和 Claude Code 的使用方式，让我并行探索几个关键部分。

让我再看看 Claude Code 的配置细节和几个辅助文件，了解使用手法。

项目摸清楚了。这是一个「宝可梦 AI 文字冒险」游戏，你实际做的是**接手一个白屏、半成品的压缩打包项目，逆向定位问题、修复 10 个阻断性 Bug、PWA 化并用 Capacitor 打成安卓 APK**,整个过程重度依赖 Claude Code 的 skill/插件和一套逆向 + 探测的工作流。下面给你可直接放进简历的版本。

---
## 一句话定位

> 独立主导「宝可梦 AI 文字冒险」跨端游戏的救活与交付：接手线上白屏的半成品，借助 Claude Code（Agentic Coding）逆向定位并修复全部阻断性 Bug，完成 PWA 化与安卓 APK 打包上线。

---

## 项目经历条目（STAR 式，可直接用）

**宝可梦 AI 文字冒险 · 移动版**　　个人项目 / AI 辅助全流程开发

- 接手一个**处于半完成状态、线上白屏**的项目（多构建版本互相覆盖、源码为压缩打包产物），系统性排查并修复 **10 项阻断性缺陷**：包括构建期变量丢失导致的首屏崩溃、BrowserRouter 在任意路径白屏（改造为 Hash 路由）、存档写入 IndexedDB 的 `DataCloneError`（序列化净化）、以及**完全缺失的读档功能**补全。
- 将纯前端应用（React 18 + Zustand + Dexie/IndexedDB + TDesign）**完整 PWA 化**：manifest、Service Worker 离线缓存、多尺寸/maskable 图标、安装提示条，并做移动端刘海屏安全区、动态视口、iOS 输入防放大等适配。
- 用 **Capacitor 6** 将同一套 Web 代码封装为可安装的 **Android APK**（自签名 release 版），打通国内构建链路：切换被墙资源到 jsDelivr CDN 镜像、Gradle 走腾讯云镜像绕行、开启明文流量豁免以兼容任意 OpenAI 协议接口。
- 叙事引擎对接 **OpenAI 兼容 Chat Completions**，用结构化 JSON 输出（叙事 / 选项 / 遭遇 / 道具）驱动剧情，宝可梦图鉴数据接 PokéAPI 并本地缓存 7 天。

---

## Claude Code 使用能力（这是你想突出的部分，单独成栏）

**Skill 与插件的实战运用**

- 调用官方 `frontend-design` skill 完成 UI「明亮版」改造，把设计原则（配色 token、字体层级、signature 元素）落到实际 CSS。
- **离线安装第三方 skills 插件**：在网络受限环境下，通过本地 marketplace 方式（下载 zip → 解压到 `~/.claude/local-marketplaces`）装入 mattpocock 的工程化 skills（`tdd` / `diagnosing-bugs` / `code-review` 等），绕过在线安装限制。

**面向压缩产物的逆向定位工作流**

- 源码是 minified bundle，采用**定向 grep 切片**（按字节偏移抽取 system prompt 构造、`chat/completions` 请求体、JSON 解析器等关键函数片段到 `_slice.txt`/`_contract.txt`），在**不把整文件读进上下文**的前提下精确定位逻辑，节省 token、提高命中率。

**契约探测驱动决策，而非靠猜**

- 面对文档不全的第三方 AI 网关，编写探针脚本（`_probe.cjs`）与本地 mock AI server，用 curl 逐一探测 endpoint 形态（`/v1/chat/completions` vs `/v1/responses`）、鉴权与状态码，**以真实响应验证 API 契约**后再改代码。

**环境与权限工程**

- 用 `.claude/launch.json` 配置 preview server，在浏览器内直接验证改动（快照 / 控制台日志 / 网络请求），做到「改完即验」。
- 维护精细到参数级的 `settings.local.json` 权限 allowlist（数十条），显著减少重复授权中断，提升自动化连贯性。

---

## 提示词 / 协作方法（如果简历里想再点一句）

- **先探测、后动手**：对未知系统（陌生 API、压缩代码）先建立事实（探针脚本、grep 切片），再让 AI 基于证据修改，而非直接让它「猜着改」。
- **小步可验证**：每次改动都接一个反馈回路（preview server 验证 / mock server 探测 / `node --check` 语法校验），把 AI 的输出锁在可回归的边界内。
- **善用 skill 组合**：设计交给 `frontend-design`，工程纪律交给 tdd / code-review 类 skill，让每类任务走对应的专家流程。

---
