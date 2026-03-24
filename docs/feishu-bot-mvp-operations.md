# Feishu Bot MVP Operations

## Scope

当前 MVP 只覆盖 3 条链路：

- 单票快判
- 从快判卡片创建深研任务
- 围绕已完成报告追问

不支持泛财经闲聊、多资产扩展、技术分析和交易信号。

## Runtime Layout

- `apps/feishu-bot`: 飞书入口、卡片构建、消息与卡片动作处理
- `apps/research-worker`: 轮询 SQLite 队列，异步执行深研
- `packages/research-core`: 标的解析、快判、任务持久化、报告存储、报告追问

## Required Environment

`.env.example` 里的关键变量：

- `FEISHU_APP_ID`: 飞书应用 App ID
- `FEISHU_APP_SECRET`: 飞书应用 App Secret
- `FEISHU_USE_PERSISTENT_CONNECTION`: 是否启用 persistent connection，默认 `true`
- `BOT_REPORT_ROOT`: 报告输出目录，默认 `storage/reports`
- `BOT_SQLITE_PATH`: SQLite 文件路径，默认 `storage/sqlite/app.db`
- `RESEARCH_EXECUTOR_MODE`: `replay` 或 `claude_cli`
- `CLAUDE_CLI_PATH`: Claude CLI 可执行文件路径
- `WORKER_POLL_INTERVAL_MS`: worker 轮询间隔，默认 `5000`
- `REPLAY_FIXTURE_ROOT`: replay 模式下的报告 fixture 目录，默认 `tests/fixtures/reports`

实现说明：

- 当前 SQLite 运行时使用 `node:sqlite`，所以本地会出现 ExperimentalWarning
- `claude_cli` 目前只是执行器接缝；如果没有额外注入 runner，请保持 `replay`

## Feishu App Requirements

至少准备以下能力：

- 自建飞书应用并开启 Bot 能力
- 打开消息事件接收
- 打开卡片回调能力
- 为机器人模式预留 persistent connection 配置

当前仓库中的 persistent connection 仍是薄层 stub，适合先验证本地链路和卡片/队列结构，不适合直接宣称已完成生产接入。

## Local Startup

```bash
pnpm install
cp .env.example .env
pnpm --filter @stock-bot/feishu-bot dev
pnpm --filter @stock-bot/research-worker dev
```

建议本地默认使用：

```dotenv
RESEARCH_EXECUTOR_MODE=replay
REPLAY_FIXTURE_ROOT=tests/fixtures/reports
```

## Smoke Test Expectations

Bot:

- 未设置 `FEISHU_APP_ID` 或 `FEISHU_APP_SECRET` 时，应输出清晰缺失错误
- 设置后会输出当前是 scaffold stub 的提示，而不是假装已经连上真实飞书

Worker:

- 启动时输出 executor mode、SQLite 路径、report root
- 输出开始轮询的日志
- 使用 `replay` 模式时，可以把 pending job 转成 completed report

## Verification Commands

```bash
pnpm test
pnpm check
pnpm build
```

如果只想快速检查新链路：

```bash
pnpm --filter @stock-bot/research-core test -- job-service.test.ts report-qa-service.test.ts
pnpm --filter @stock-bot/research-worker test -- job-runner.test.ts
pnpm --filter @stock-bot/feishu-bot test -- message-handler.test.ts card-action-handler.test.ts
```

## Known Limitations

- `apps/feishu-bot/src/feishu/persistent-connection.ts` 还是 stub，没有接入真实飞书 SDK
- `ClaudeCliExecutor` 目前没有默认 runner，真实 CLI 执行链路还未落地
- 报告追问当前只保证“基于已存报告回答”，没有做复杂多轮上下文管理
