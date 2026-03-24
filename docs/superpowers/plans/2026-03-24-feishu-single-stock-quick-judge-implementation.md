# Feishu Single-Stock Quick-Judge Assistant Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Feishu bot that returns a single-stock quick-judge card in one chat turn, supports one-click deep-research job creation, and answers follow-up questions against completed reports.

**Architecture:** Use a `pnpm` + TypeScript workspace with `apps/feishu-bot` handling Feishu persistent-connection events, `apps/research-worker` polling queued jobs from SQLite, and `packages/research-core` owning symbol resolution, quick-judge logic, storage, and report-bound Q&A. Because this repository currently contains prompts/specs rather than a callable research service, deep research must be abstracted behind a `ResearchExecutor` interface with a `ReplayExecutor` for tests/demo data and a `ClaudeCliExecutor` for environments that can run the existing research workflow.

**Tech Stack:** Node.js 22+, TypeScript, pnpm workspace, `@larksuiteoapi/node-sdk`, Vitest, `better-sqlite3`, `zod`, `tsx`

---

## File Structure

### Workspace and toolchain

- Create: `package.json`
- Create: `pnpm-workspace.yaml`
- Create: `tsconfig.base.json`
- Create: `vitest.workspace.ts`
- Modify: `.gitignore`
- Create: `.env.example`

### Feishu bot app

- Create: `apps/feishu-bot/package.json`
- Create: `apps/feishu-bot/tsconfig.json`
- Create: `apps/feishu-bot/src/main.ts`
- Create: `apps/feishu-bot/src/config.ts`
- Create: `apps/feishu-bot/src/bootstrap.ts`
- Create: `apps/feishu-bot/src/feishu/client.ts`
- Create: `apps/feishu-bot/src/feishu/persistent-connection.ts`
- Create: `apps/feishu-bot/src/handlers/message-handler.ts`
- Create: `apps/feishu-bot/src/handlers/card-action-handler.ts`
- Create: `apps/feishu-bot/src/cards/quick-judge-card.ts`
- Create: `apps/feishu-bot/src/cards/deep-research-status-card.ts`
- Create: `apps/feishu-bot/src/cards/report-summary-card.ts`
- Test: `apps/feishu-bot/src/handlers/message-handler.test.ts`
- Test: `apps/feishu-bot/src/handlers/card-action-handler.test.ts`

### Shared research core

- Create: `packages/research-core/package.json`
- Create: `packages/research-core/tsconfig.json`
- Create: `packages/research-core/src/index.ts`
- Create: `packages/research-core/src/config.ts`
- Create: `packages/research-core/src/intents/intent-router.ts`
- Create: `packages/research-core/src/intents/intent-router.test.ts`
- Create: `packages/research-core/src/symbols/symbol-aliases.ts`
- Create: `packages/research-core/src/symbols/symbol-resolver.ts`
- Create: `packages/research-core/src/symbols/symbol-resolver.test.ts`
- Create: `packages/research-core/src/market-data/market-data-provider.ts`
- Create: `packages/research-core/src/market-data/fixture-market-data-provider.ts`
- Create: `packages/research-core/src/market-data/market-data-provider.test.ts`
- Create: `packages/research-core/src/quick-judge/types.ts`
- Create: `packages/research-core/src/quick-judge/quick-judge-service.ts`
- Create: `packages/research-core/src/quick-judge/quick-judge-service.test.ts`
- Create: `packages/research-core/src/storage/db.ts`
- Create: `packages/research-core/src/storage/schema.ts`
- Create: `packages/research-core/src/storage/db.test.ts`
- Create: `packages/research-core/src/jobs/job-repository.ts`
- Create: `packages/research-core/src/jobs/job-service.ts`
- Create: `packages/research-core/src/jobs/job-service.test.ts`
- Create: `packages/research-core/src/reports/report-store.ts`
- Create: `packages/research-core/src/reports/report-store.test.ts`
- Create: `packages/research-core/src/research/research-executor.ts`
- Create: `packages/research-core/src/research/replay-executor.ts`
- Create: `packages/research-core/src/research/claude-cli-executor.ts`
- Create: `packages/research-core/src/research/research-executor.test.ts`
- Create: `packages/research-core/src/report-qa/report-qa-service.ts`
- Create: `packages/research-core/src/report-qa/report-qa-service.test.ts`

### Worker app

- Create: `apps/research-worker/package.json`
- Create: `apps/research-worker/tsconfig.json`
- Create: `apps/research-worker/src/main.ts`
- Create: `apps/research-worker/src/config.ts`
- Create: `apps/research-worker/src/poll-loop.ts`
- Create: `apps/research-worker/src/job-runner.ts`
- Test: `apps/research-worker/src/job-runner.test.ts`

### Storage and fixtures

- Create: `storage/reports/.gitkeep`
- Create: `storage/sqlite/.gitkeep`
- Create: `tests/fixtures/market-data/tencent.json`
- Create: `tests/fixtures/reports/STOCK_00700_HK_Tencent/00_Executive_Summary.md`
- Create: `tests/fixtures/reports/STOCK_00700_HK_Tencent/08_综合投资报告.md`
- Create: `tests/fixtures/feishu/message-event.json`
- Create: `tests/fixtures/feishu/card-action.json`

### Documentation

- Modify: `README.md`
- Create: `docs/feishu-bot-mvp-operations.md`

## Implementation Notes

- MVP uses Feishu SDK persistent connection rather than a public webhook server to reduce first-mile complexity.
- The quick-judge path must never call the full deep-research executor synchronously.
- Quick-judge must read from a dedicated `MarketDataProvider` seam so production data-source choice stays swappable.
- Deep research runs asynchronously via SQLite-backed job records plus a dedicated worker process.
- The worker must not depend on live Feishu callbacks to finish a job; all job state changes must persist in SQLite first.
- `ClaudeCliExecutor` is an integration seam, not a reason to hard-wire the rest of the app to Claude Code internals.

## Chunk 1: Workspace Foundation and Shared Storage

### Task 1: Create the workspace and shared toolchain

**Files:**
- Create: `package.json`
- Create: `pnpm-workspace.yaml`
- Create: `tsconfig.base.json`
- Create: `vitest.workspace.ts`
- Modify: `.gitignore`
- Create: `.env.example`

- [ ] **Step 1: Add the root workspace manifest**

```json
{
  "name": "feishu-stock-bot",
  "private": true,
  "packageManager": "pnpm@10",
  "scripts": {
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "check": "pnpm -r check"
  }
}
```

- [ ] **Step 2: Add the workspace package list and shared TypeScript config**

Run: `pnpm install`
Expected: root lockfile generated without missing workspace errors

- [ ] **Step 3: Add root ignore and environment template**

```dotenv
FEISHU_APP_ID=
FEISHU_APP_SECRET=
FEISHU_USE_PERSISTENT_CONNECTION=true
BOT_REPORT_ROOT=storage/reports
BOT_SQLITE_PATH=storage/sqlite/app.db
RESEARCH_EXECUTOR_MODE=replay
CLAUDE_CLI_PATH=claude
```

- [ ] **Step 4: Verify the workspace bootstraps**

Run: `pnpm install`
Expected: install completes and links `apps/*` and `packages/*`

- [ ] **Step 5: Commit**

```bash
git add package.json pnpm-workspace.yaml tsconfig.base.json vitest.workspace.ts .gitignore .env.example
git commit -m "chore: scaffold Feishu bot workspace"
```

### Task 2: Add shared config parsing and SQLite storage primitives

**Files:**
- Create: `packages/research-core/package.json`
- Create: `packages/research-core/tsconfig.json`
- Create: `packages/research-core/src/config.ts`
- Create: `packages/research-core/src/storage/db.ts`
- Create: `packages/research-core/src/storage/schema.ts`
- Create: `packages/research-core/src/storage/db.test.ts`
- Create: `storage/reports/.gitkeep`
- Create: `storage/sqlite/.gitkeep`

- [ ] **Step 1: Write the failing storage test**

```ts
import { describe, expect, it } from "vitest";
import { createAppDb } from "./db";

describe("createAppDb", () => {
  it("creates the jobs and reports tables on first boot", () => {
    const db = createAppDb(":memory:");
    const tables = db.prepare("select name from sqlite_master where type='table'").all();
    expect(tables).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "research_jobs" }),
        expect.objectContaining({ name: "reports" })
      ])
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @stock-bot/research-core test -- db.test.ts`
Expected: FAIL because `createAppDb` does not exist yet

- [ ] **Step 3: Implement minimal config and DB bootstrap**

```ts
export function createAppDb(path: string) {
  const db = new Database(path);
  db.exec(SCHEMA_SQL);
  return db;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm --filter @stock-bot/research-core test -- db.test.ts`
Expected: PASS with 1 test passed

- [ ] **Step 5: Commit**

```bash
git add packages/research-core storage
git commit -m "feat: add shared config and sqlite storage"
```

## Chunk 2: Quick-Judge Request Path

### Task 3: Implement symbol resolution and intent routing

**Files:**
- Create: `packages/research-core/src/intents/intent-router.ts`
- Create: `packages/research-core/src/intents/intent-router.test.ts`
- Create: `packages/research-core/src/symbols/symbol-aliases.ts`
- Create: `packages/research-core/src/symbols/symbol-resolver.ts`
- Create: `packages/research-core/src/symbols/symbol-resolver.test.ts`
- Create: `tests/fixtures/feishu/message-event.json`

- [ ] **Step 1: Write the failing intent-router test**

```ts
it("routes a plain stock question to quick_judge", () => {
  expect(routeIntent("腾讯值得继续研究吗")).toEqual({
    type: "quick_judge",
    rawSymbolQuery: "腾讯"
  });
});
```

- [ ] **Step 2: Write the failing symbol-resolver test**

```ts
it("resolves Tencent aliases to a single symbol record", () => {
  const resolver = new SymbolResolver();
  expect(resolver.resolve("腾讯")).toMatchObject({
    ticker: "00700.HK",
    companyName: "腾讯控股"
  });
});
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `pnpm --filter @stock-bot/research-core test -- intent-router.test.ts symbol-resolver.test.ts`
Expected: FAIL because router and resolver are missing

- [ ] **Step 4: Implement the minimal router and alias-based resolver**

```ts
export function routeIntent(text: string): Intent {
  return { type: "quick_judge", rawSymbolQuery: extractSymbolQuery(text) };
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `pnpm --filter @stock-bot/research-core test -- intent-router.test.ts symbol-resolver.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add packages/research-core/src/intents packages/research-core/src/symbols tests/fixtures/feishu/message-event.json
git commit -m "feat: add intent routing and symbol resolution"
```

### Task 4: Implement market-data seam, quick-judge scoring, and fixed card payloads

**Files:**
- Create: `packages/research-core/src/market-data/market-data-provider.ts`
- Create: `packages/research-core/src/market-data/fixture-market-data-provider.ts`
- Create: `packages/research-core/src/market-data/market-data-provider.test.ts`
- Create: `packages/research-core/src/quick-judge/types.ts`
- Create: `packages/research-core/src/quick-judge/quick-judge-service.ts`
- Create: `packages/research-core/src/quick-judge/quick-judge-service.test.ts`
- Create: `apps/feishu-bot/src/cards/quick-judge-card.ts`
- Create: `apps/feishu-bot/src/cards/quick-judge-card.test.ts`
- Create: `apps/feishu-bot/src/cards/deep-research-status-card.ts`
- Create: `apps/feishu-bot/src/cards/report-summary-card.ts`
- Create: `tests/fixtures/market-data/tencent.json`

- [ ] **Step 1: Write the failing market-data provider test**

```ts
it("loads a fixture snapshot for Tencent", async () => {
  const provider = new FixtureMarketDataProvider(fixturesDir);
  const snapshot = await provider.getSnapshot("00700.HK");
  expect(snapshot.companyName).toBe("腾讯控股");
});
```

- [ ] **Step 2: Write the failing quick-judge test**

```ts
it("returns a fixed-shape quick judge result", async () => {
  const result = await quickJudge(symbol, fixtureMarketDataProvider);

  expect(result).toMatchObject({
    verdict: expect.stringMatching(/值得继续研究|可观察但暂不优先|风险较高/),
    valuationTemperature: expect.stringMatching(/偏低|中性|偏高/),
    reasons: expect.toHaveLength(3),
    risks: expect.toHaveLength(2)
  });
});
```

- [ ] **Step 3: Write the failing card-shape test**

```ts
it("builds a card with the deep research action button", () => {
  const card = buildQuickJudgeCard(sampleQuickJudgeResult);
  expect(JSON.stringify(card)).toContain("生成完整深研");
});
```

- [ ] **Step 4: Run tests to verify they fail**

Run: `pnpm --filter @stock-bot/research-core test -- market-data-provider.test.ts quick-judge-service.test.ts`
Expected: FAIL because market data provider and service do not exist

Run: `pnpm --filter @stock-bot/feishu-bot test -- quick-judge-card.test.ts`
Expected: FAIL because card builder does not exist

- [ ] **Step 5: Implement the market-data seam, minimal quick-judge heuristics, and card builders**

```ts
export interface MarketDataProvider {
  getSnapshot(ticker: string): Promise<MarketDataSnapshot>;
}

export async function quickJudge(symbol: ResolvedSymbol, provider: MarketDataProvider): Promise<QuickJudgeResult> {
  const snapshot = await provider.getSnapshot(symbol.ticker);
  return {
    verdict: "值得继续研究",
    valuationTemperature: snapshot.valuationTemperature,
    reasons: ["业务质量清晰", "现金流没有明显恶化", "估值仍有继续研究空间"],
    risks: ["监管变化", "增长放缓"],
    nextAction: "生成完整深研"
  };
}
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `pnpm --filter @stock-bot/research-core test -- market-data-provider.test.ts quick-judge-service.test.ts`
Expected: PASS

Run: `pnpm --filter @stock-bot/feishu-bot test -- quick-judge-card.test.ts`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add packages/research-core/src/market-data packages/research-core/src/quick-judge apps/feishu-bot/src/cards tests/fixtures/market-data/tencent.json
git commit -m "feat: add market data seam and quick judge cards"
```

### Task 5: Wire the Feishu bot message and card-action handlers

**Files:**
- Create: `apps/feishu-bot/package.json`
- Create: `apps/feishu-bot/tsconfig.json`
- Create: `apps/feishu-bot/src/config.ts`
- Create: `apps/feishu-bot/src/feishu/client.ts`
- Create: `apps/feishu-bot/src/feishu/persistent-connection.ts`
- Create: `apps/feishu-bot/src/handlers/message-handler.ts`
- Create: `apps/feishu-bot/src/handlers/card-action-handler.ts`
- Create: `apps/feishu-bot/src/bootstrap.ts`
- Create: `apps/feishu-bot/src/main.ts`
- Create: `apps/feishu-bot/src/handlers/message-handler.test.ts`
- Create: `apps/feishu-bot/src/handlers/card-action-handler.test.ts`
- Create: `tests/fixtures/feishu/card-action.json`

- [ ] **Step 1: Write the failing message-handler test**

```ts
it("sends a quick judge card for a stock message", async () => {
  const client = createFakeFeishuClient();
  const handler = createMessageHandler({ client, quickJudgeService, symbolResolver });

  await handler.handle(sampleMessageEvent("腾讯值得继续研究吗"));

  expect(client.sendCard).toHaveBeenCalledTimes(1);
});
```

- [ ] **Step 2: Write the failing card-action test**

```ts
it("creates a deep research job when the card button is clicked", async () => {
  const service = createFakeJobService();
  const handler = createCardActionHandler({ jobService: service });

  await handler.handle(sampleCardAction("create_deep_research"));

  expect(service.enqueue).toHaveBeenCalledTimes(1);
});
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `pnpm --filter @stock-bot/feishu-bot test -- message-handler.test.ts card-action-handler.test.ts`
Expected: FAIL because handlers are missing

- [ ] **Step 4: Implement the persistent-connection bootstrap and both handlers**

```ts
const ws = createPersistentConnection({
  onMessage: messageHandler.handle,
  onCardAction: cardActionHandler.handle
});
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `pnpm --filter @stock-bot/feishu-bot test -- message-handler.test.ts card-action-handler.test.ts`
Expected: PASS

- [ ] **Step 6: Smoke the bot locally**

Run: `pnpm --filter @stock-bot/feishu-bot build`
Expected: build succeeds with no TypeScript errors

- [ ] **Step 7: Commit**

```bash
git add apps/feishu-bot tests/fixtures/feishu
git commit -m "feat: add Feishu quick judge bot handlers"
```

## Chunk 3: Deep-Research Job Queue and Worker

### Task 6: Define the research executor seam and file-backed report storage

**Files:**
- Create: `packages/research-core/src/reports/report-store.ts`
- Create: `packages/research-core/src/reports/report-store.test.ts`
- Create: `packages/research-core/src/research/research-executor.ts`
- Create: `packages/research-core/src/research/replay-executor.ts`
- Create: `packages/research-core/src/research/claude-cli-executor.ts`
- Create: `packages/research-core/src/research/research-executor.test.ts`
- Create: `tests/fixtures/reports/STOCK_00700_HK_Tencent/00_Executive_Summary.md`
- Create: `tests/fixtures/reports/STOCK_00700_HK_Tencent/08_综合投资报告.md`

- [ ] **Step 1: Write the failing report-store test**

```ts
it("persists a completed report and returns its summary path", async () => {
  const store = createReportStore(tempDir);
  const saved = await store.saveCompletedReport(sampleCompletedReport);
  expect(saved.summaryPath).toContain("00_Executive_Summary.md");
});
```

- [ ] **Step 2: Write the failing replay-executor test**

```ts
it("loads a canned report from fixtures for demo mode", async () => {
  const executor = new ReplayExecutor(fixturesDir);
  const result = await executor.run(sampleResearchRequest);
  expect(result.summaryMarkdown).toContain("腾讯");
});
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `pnpm --filter @stock-bot/research-core test -- report-store.test.ts research-executor.test.ts`
Expected: FAIL

- [ ] **Step 4: Implement `ResearchExecutor`, `ReplayExecutor`, and `ClaudeCliExecutor`**

```ts
export interface ResearchExecutor {
  run(request: DeepResearchRequest): Promise<CompletedResearchReport>;
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `pnpm --filter @stock-bot/research-core test -- report-store.test.ts research-executor.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add packages/research-core/src/reports packages/research-core/src/research tests/fixtures/reports
git commit -m "feat: add research executor seam and report store"
```

### Task 7: Add queued deep-research jobs and a polling worker

**Files:**
- Create: `packages/research-core/src/jobs/job-repository.ts`
- Create: `packages/research-core/src/jobs/job-service.ts`
- Create: `packages/research-core/src/jobs/job-service.test.ts`
- Create: `apps/research-worker/package.json`
- Create: `apps/research-worker/tsconfig.json`
- Create: `apps/research-worker/src/config.ts`
- Create: `apps/research-worker/src/poll-loop.ts`
- Create: `apps/research-worker/src/job-runner.ts`
- Create: `apps/research-worker/src/main.ts`
- Create: `apps/research-worker/src/job-runner.test.ts`

- [ ] **Step 1: Write the failing job-service test**

```ts
it("enqueues a deep research job with pending status", async () => {
  const job = await jobService.enqueue(sampleDeepResearchRequest);
  expect(job.status).toBe("pending");
});
```

- [ ] **Step 2: Write the failing job-runner test**

```ts
it("marks a job completed and stores the report", async () => {
  await runner.runNext();
  const stored = reportStore.findByJobId(sampleJobId);
  expect(stored?.status).toBe("completed");
});
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `pnpm --filter @stock-bot/research-core test -- job-service.test.ts`
Expected: FAIL

Run: `pnpm --filter @stock-bot/research-worker test -- job-runner.test.ts`
Expected: FAIL

- [ ] **Step 4: Implement repository, service, and poll loop**

```ts
setInterval(async () => {
  await runner.runNext();
}, pollIntervalMs);
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `pnpm --filter @stock-bot/research-core test -- job-service.test.ts`
Expected: PASS

Run: `pnpm --filter @stock-bot/research-worker test -- job-runner.test.ts`
Expected: PASS

- [ ] **Step 6: Build the worker**

Run: `pnpm --filter @stock-bot/research-worker build`
Expected: build succeeds

- [ ] **Step 7: Commit**

```bash
git add packages/research-core/src/jobs apps/research-worker
git commit -m "feat: add deep research queue and worker"
```

## Chunk 4: Report Follow-Up QA, Operations, and End-to-End Hardening

### Task 8: Implement report-bound follow-up QA

**Files:**
- Create: `packages/research-core/src/report-qa/report-qa-service.ts`
- Create: `packages/research-core/src/report-qa/report-qa-service.test.ts`
- Modify: `packages/research-core/src/intents/intent-router.ts`
- Modify: `apps/feishu-bot/src/handlers/message-handler.ts`
- Modify: `apps/feishu-bot/src/cards/report-summary-card.ts`

- [ ] **Step 1: Write the failing report-QA test**

```ts
it("answers using only the stored report context", async () => {
  const answer = await reportQa.answer({
    reportId: sampleReportId,
    question: "这份报告里最大的风险是什么？"
  });

  expect(answer).toContain("风险");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm --filter @stock-bot/research-core test -- report-qa-service.test.ts`
Expected: FAIL because `answer` is not implemented

- [ ] **Step 3: Implement report summary extraction and bounded QA**

```ts
export async function answer(input: ReportQaInput): Promise<string> {
  const report = await reportStore.require(input.reportId);
  return summarizeAgainstStoredMarkdown(report.fullMarkdown, input.question);
}
```

- [ ] **Step 4: Update the bot handler to route post-report questions**

Run: `pnpm --filter @stock-bot/feishu-bot test -- message-handler.test.ts`
Expected: PASS with new report-QA branch covered

- [ ] **Step 5: Commit**

```bash
git add packages/research-core/src/report-qa packages/research-core/src/intents apps/feishu-bot/src/handlers apps/feishu-bot/src/cards
git commit -m "feat: add report-bound follow-up qa"
```

### Task 9: Add operational docs, env wiring, and end-to-end verification

**Files:**
- Modify: `README.md`
- Create: `docs/feishu-bot-mvp-operations.md`
- Modify: `.env.example`
- Modify: `apps/feishu-bot/src/main.ts`
- Modify: `apps/research-worker/src/main.ts`

- [ ] **Step 1: Document local startup, required Feishu permissions, and executor modes**

```md
1. Publish a self-built Feishu app with bot capability.
2. Enable persistent connection for message events and card callbacks.
3. Start the bot with `pnpm --filter @stock-bot/feishu-bot dev`.
4. Start the worker with `pnpm --filter @stock-bot/research-worker dev`.
```

- [ ] **Step 2: Run the full test suite**

Run: `pnpm test`
Expected: all workspace tests pass

- [ ] **Step 3: Run the full build**

Run: `pnpm build`
Expected: all workspace packages compile cleanly

- [ ] **Step 4: Perform a manual local smoke test**

Run: `pnpm --filter @stock-bot/feishu-bot dev`
Expected: bot connects via Feishu persistent connection or logs a clear missing-env error

Run: `pnpm --filter @stock-bot/research-worker dev`
Expected: worker starts polling and logs idle state

- [ ] **Step 5: Commit**

```bash
git add README.md docs/feishu-bot-mvp-operations.md .env.example apps/feishu-bot/src/main.ts apps/research-worker/src/main.ts
git commit -m "docs: add Feishu bot setup and operations guide"
```

## Sequencing Rationale

- Chunk 1 makes the repository runnable before business logic is added.
- Chunk 2 ships the highest-value path first: single-stock quick judge.
- Chunk 3 introduces async deep research without blocking the quick path.
- Chunk 4 adds report follow-up QA only after reports are persisted and queryable.

## Risks to Watch During Execution

- The current repository does not yet expose the deep-research workflow as a service. If `ClaudeCliExecutor` proves too brittle, keep the bot path intact and leave `ReplayExecutor` as the default until a stable runtime adapter exists.
- Symbol resolution quality will shape first impressions. Keep the alias table tiny and explicit at first; do not pretend fuzzy matching is solved.
- Do not let quick judge start depending on slow or flaky external data calls before the card path is stable; keep fixture/demo mode available until production credentials are tested.
- Do not add double-stock comparison, watchlists, or financial-news chat during this plan.

## Verification Checklist

- Quick-judge requests return a fixed-shape card and never enqueue full research automatically.
- Quick-judge requests consume a `MarketDataProvider` snapshot instead of embedding vendor-specific fetch logic directly in handlers.
- Clicking `生成完整深研` creates exactly one pending job and persists it.
- The worker can turn a pending job into a completed report using `ReplayExecutor` without Feishu connected.
- Follow-up QA answers only against a stored report and fails closed when no report exists.
- README and operations docs are sufficient for a new engineer to boot both processes.

Plan complete and saved to `docs/superpowers/plans/2026-03-24-feishu-single-stock-quick-judge-implementation.md`. Ready to execute?
