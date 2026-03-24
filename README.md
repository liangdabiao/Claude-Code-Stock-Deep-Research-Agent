# Claude Code Stock Deep Research Agent

**Investment Research Edition** - 专业股票投资尽调系统

  ⚖️ 免责声明

  本研究报告不构成投资建议或推荐。所有投资存在风险，包括本金损失。

  重要提示:
  1. 本报告仅供教育和信息用途
  2. 部分数据需要通过官方渠道验证
  3. 过往业绩不代表未来表现
  4. 投资决策前请自行进行尽职调查
  5. 建议咨询合格的财务顾问

  ---
  🎓 研究框架

  本研究基于 Claude Code Deep Research 系统：
  - 方法论: 8阶段股票投资尽调框架
  - 智能体: 28个并行研究智能体
  - 工具: WebSearch、WebFetch、综合分析
  - 质量: 多空平衡、明确风险、数据验证

  ---
 
## Table of Contents

1. [Features](#features)
2. [Repo Structure](#repo-structure)
3. [Feishu Bot MVP](#feishu-bot-mvp)
4. [Quick Start](#quick-start)
5. [Stock Investment Research](#stock-investment-research)
6. [How It Works](#how-it-works)
7. [Customization](#customization)
8. [Credits & Acknowledgements](#credits--acknowledgements)
9. [License](#license)

---

## Features

This repository contains **two specialized deep research frameworks** for Claude Code:

### 1. 🎯 Stock Investment Research (股票投资尽调系统) ⭐ PRIMARY

An **8-phase investment due diligence framework** for analyzing publicly traded companies, inspired by professional investment research methodologies.

**Key Capabilities**:
- 📊 **Comprehensive Analysis**: Business model, industry dynamics, financial quality, governance, valuation
- 🤖 **Multi-Agent Research**: ~28 parallel research agents working concurrently
- 📈 **Investment Style Adaptation**: Value, growth, turnaround, dividend investing
- 💰 **Valuation Models**: DCF, reverse DCF, relative valuation, scenario analysis
- 🛡️ **Risk Assessment**: Bear case, black swans, monitoring checklist
- ✅ **Quality Assurance**: Cross-validation (profit vs. cash flow, company vs. peers)
- 📝 **Structured Output**: 20-file standardized due diligence report

**Research Coverage**:
- A-shares (A股) - 中国大陆股市
- Hong Kong stocks (港股)
- US stocks (美股)
- Other global markets

**Output**: Signal rating (🟢🟢🟢 Strong Buy / 🟡🟡🟡 Hold / 🔴🔴 Avoid) based on fundamental analysis

### 2. 📚 General Deep Research (通用深度研究系统)

A flexible **7-phase framework** for general research topics (business, technology, academic, etc.).

---

## Repo Structure

| File/Folder | Purpose |
|-------------|---------|
| **CLAUDE.md** | Master instructions for Claude Code |
| **.claude/skills/stock-question-refiner/** | Stock research question refinement skill |
| **.claude/skills/stock-research-executor/** | 8-phase investment due diligence executor |
| **.claude/commands/stock-research.md** | Main stock research command |
| **.claude/skills/citation-validator/** | Citation verification skill |
| **.claude/skills/got-controller/** | Graph of Thoughts controller |
| **.claude/skills/synthesizer/** | Findings synthesis skill |
| **STOCK_RESEARCH_IMPLEMENTATION_PLAN.md** | Stock research system design document |
| **CLAUDE2.md** | Graph of Thoughts implementation details |
| **PROJECT_UNDERSTANDING.md** | Architecture deep dive |
| **IMPLEMENTATION_GUIDE.md** | User guide |
| **apps/feishu-bot/** | 飞书机器人入口与卡片/消息处理 |
| **apps/research-worker/** | SQLite 轮询 worker 与异步深研执行 |
| **packages/research-core/** | 标的解析、快判、任务队列、报告存储、报告追问 |
| **docs/feishu-bot-mvp-operations.md** | 飞书 Bot MVP 本地启动与运维说明 |

---

## Feishu Bot MVP

Repository 现在包含一个聚焦的飞书单票助手工作区，MVP 只做三件事：

- 单票快判
- 一键创建完整深研任务
- 围绕已完成报告追问

当前实现目录：

- `apps/feishu-bot`
- `apps/research-worker`
- `packages/research-core`

本地启动：

```bash
pnpm install
cp .env.example .env
pnpm --filter @stock-bot/feishu-bot dev
pnpm --filter @stock-bot/research-worker dev
```

运行说明：

- 默认 `RESEARCH_EXECUTOR_MODE=replay`，适合本地 smoke test
- `claude_cli` 目前只是执行器接缝，尚未接入真实 runner，先不要作为默认模式
- SQLite 当前使用 `node:sqlite`，本地测试/运行会看到 ExperimentalWarning，这是已知现象
- 更完整的启动、权限和排障说明见 `docs/feishu-bot-mvp-operations.md`

---

## Quick Start

### Stock Research (股票投资尽调)

```bash
# Start Claude Code
claude

# Set model (optional, but recommended)
/model opus

# Execute stock research
/stock-research [股票代码或公司名称]

# Examples:
/stock-research 600519              # 贵州茅台 (A-share)
/stock-research AAPL                # 苹果公司 (US)
/stock-research 腾讯 00700.HK       # 腾讯控股 (HK)
```

**The system will**:
1. Ask about your investment style (价值/成长/困境/红利), holding period, risk tolerance
2. Deploy ~28 parallel research agents across 7 phases
3. Generate comprehensive due diligence report in `RESEARCH/STOCK_[ticker]_[company]/`

**Time**: 2-4 hours for standard due diligence

### Output Example

```
RESEARCH/STOCK_600519_Kweichow_Moutai/
├── 00_Executive_Summary.md        # 🟡🟡🟡 Hold / Fairly Valued
├── 01_Business_Foundation.md      # Products, revenue, customers
├── 02_Industry_Analysis.md        # Industry cycle, competition
├── 03_Business_Breakdown.md       # Profit drivers, economics
├── 04_Financial_Quality.md        # Cash flow, margins, red flags
├── 05_Governance_Analysis.md      # Ownership, management
├── 06_Market_Sentiment.md         # Bull/bear cases
├── 07_Valuation_Moat.md           # Moat rating, valuation
├── Financial_Data/                # Metrics, trends, peer comparison
├── Valuation/                     # DCF, scenarios
├── Risk_Monitoring/               # Bear case, monitoring checklist
└── sources/                       # Citations with quality ratings
```

---

## Stock Investment Research

### 8-Phase Due Diligence Process

| Phase | Focus | Output |
|-------|-------|--------|
| **1. Business Foundation** | 公司事实底座 | Products, revenue mix, customers, value chain, strategy |
| **2. Industry Analysis** | 行业周期分析 | Cycle stage, supply-demand, competition, policy impacts |
| **3. Business Breakdown** | 业务拆解 | Segments, profit engines, pricing power, economics |
| **4. Financial Quality** | 财务质量 | Metrics trends, cash flow vs. earnings, red flags, peers |
| **5. Governance Analysis** | 股权治理 | Ownership, management, capital allocation, ROIC |
| **6. Market Sentiment** | 市场分歧 | Bull case, bear case, key debates, verification nodes |
| **7. Valuation & Moat** | 估值护城河 | Moat rating (0-5), relative/absolute valuation, risks |
| **8. Final Synthesis** | 综合报告 | Signal rating, thesis, monitoring checklist |

### Investment Style Adaptation

The system adapts research approach based on investment style:

| Style | Focus | Valuation Methods | Key Metrics |
|-------|-------|-------------------|-------------|
| **Value** (价值投资) | Intrinsic value, margin of safety | P/B, EV/EBITDA, DCF (conservative) | P/B, normalized earnings, FCF yield |
| **Growth** (成长投资) | TAM, competitive positioning | PEG, DCF (aggressive), user models | Revenue growth, moat, TAM penetration |
| **Turnaround** (困境反转) | Liquidity, solvency, catalysts | Liquidation value, option value | Debt ratios, cash runway, catalyst timeline |
| **Dividend** (红利投资) | Dividend sustainability | DDM, FCF yield, yield comparison | Dividend yield, payout ratio, FCF coverage |

### Quality Standards

**Mandatory Cross-Validation**:
- ✅ Profit vs. cash flow (OCF/NI ratio analysis)
- ✅ Company vs. peer comparison (key ratios, margins)
- ✅ Bear case analysis (3-5 key risks identified)

**Citation Requirements**:
- Every factual claim must include: Author, Date, Title, URL
- Source quality rated (A-E scale)
- A-grade sources: Annual reports, regulatory filings
- B-grade: Industry reports, analyst research
- C-grade: News articles, expert commentary

**Signal Rating** (based on fundamentals only):
- 🟢🟢🟢 **Strong Buy**: Significant margin of safety, strong moat, attractive valuation
- 🟡🟡🟡 **Hold**: Fairly valued or limited margin of safety
- 🔴🔴 **Avoid**: Overvalued, deteriorating fundamentals, excessive risks

### Example Usage

```
User: /stock-research 贵州茅台 600519

Claude: 我可以帮您研究贵州茅台。让我先了解您的投资需求：

       1. 投资风格：价值投资/成长投资/困境反转/红利投资？
       2. 持有周期：短期(<6月)/中期(6-18月)/长期(1-3年以上)?
       3. 关注重点：生意质量/财务质量/估值/公司治理 (选2-3个)
       4. 风险偏好：保守/平衡/激进？

User: 价值投资，长期持有3年以上，关注：生意质量、公司治理、估值，风险保守

Claude: [Generating research plan...]
       [Deploying 28 parallel research agents...]
       [Analyzing 5-10 years of financial data...]
       [Comparing with Wuliangye, Yanghe, Fenjiu...]
       [Assessing competitive moat...]
       [DCF valuation with 3 scenarios...]
       [Identifying bear case risks...]

Output: RESEARCH/STOCK_600519_Kweichow_Moutai/

🟡🟡🟡 Hold / Fairly Valued

Investment Thesis:
茅台是中国领先的白酒品牌，拥有强大的品牌护城河和定价能力。然而当前估值（P/E 32x）安全边际有限。建议继续持有现有仓位，但新投资应等待10-15%回调至¥1,750-1,850区间。

Key Metrics:
- Market Cap: ¥2.8T
- P/E (TTM): 32x (above 5-year average)
- Gross Margin: 91.2%
- ROE: 31%
- Moat Rating: 5/5 (Very Strong)

Top 3 Reasons to Consider:
1. Unassailable brand moat with 800-year heritage
2. Exceptional margins (91% gross, 53% net)
3. Strong cash generation (OCF/NI > 1.0)

Top 3 Reasons to Avoid:
1. Full valuation (P/E 32x, limited margin of safety)
2. Regulatory risk (government scrutiny of luxury pricing)
3. Competitive intensification (Wuliangwa narrowing gap)

Monitoring Checklist:
✅ Strengthen: Price pulls back 10-15% to ¥1,750-1,850
❌ Exit: Price drops below ¥1,300 (-35%), net margin < 45%

[Full report: 20 files, 127 sources, 50+ pages]
```

---

## How It Works

### Stock Research Workflow

```
User: /stock-research [ticker]
  ↓
stock-question-refiner skill
  - Asks: Investment style? Holding period? Focus areas? Risk tolerance?
  ↓
Structured Research Prompt (investment parameters, priorities, constraints)
  ↓
stock-research-executor skill
  ├─ Phase 1: Business Foundation (4 parallel agents)
  ├─ Phase 2: Industry Analysis (4 parallel agents)
  ├─ Phase 3: Business Breakdown (4 parallel agents)
  ├─ Phase 4: Financial Quality (4 parallel agents)
  ├─ Phase 5: Governance Analysis (4 parallel agents)
  ├─ Phase 6: Market Sentiment (4 parallel agents)
  └─ Phase 7: Valuation & Moat (4 parallel agents)
  ↓
citation-validator skill
  - Verifies all claims have citations
  - Rates source quality (A-E)
  ↓
Comprehensive Investment Due Diligence Report
  - Signal rating
  - 8 phase reports
  - Financial data tables
  - Valuation analysis
  - Risk monitoring checklist
```

### Key Innovations

1. **Investment Style Adaptation**: Research approach tailored to value, growth, turnaround, or dividend investing
2. **Parallel Multi-Agent Execution**: ~28 agents working concurrently for efficiency
3. **Mandatory Cross-Validation**: Profit vs. cash flow, company vs. peers, bear case analysis
4. **Structured Output**: Standardized 20-file report format
5. **Quality Assurance**: A-E source quality rating, citation verification

### General Research Workflow (Secondary)

```
[ Question ] → [ stock-question-refiner ]
      ↓
[ Structured Prompt ]
      ↓
[ research-executor ]
      ├─ Planning (break into subtopics)
      ├─ Multi-Agent Research (parallel)
      ├─ Source Triangulation (A-E rating)
      └─ Synthesis (combine findings)
      ↓
[ Citation Validation ]
      ↓
[ Research Report ]
```

---

## Customization

### Adapting Stock Research Parameters

The system automatically adapts based on:

1. **Investment Style**:
   - Value: Emphasize balance sheet, normalized earnings, margin of safety
   - Growth: Emphasize TAM, competitive positioning, growth sustainability
   - Turnaround: Emphasize liquidity, solvency, catalysts
   - Dividend: Emphasize payout sustainability, FCF generation

2. **Holding Period**:
   - Short-term (<6 months): Focus on near-term catalysts, sentiment
   - Medium-term (6-18 months): Balanced approach
   - Long-term (1-3+ years): Emphasize business sustainability, moat, intrinsic value

3. **Risk Tolerance**:
   - Conservative: Add filters (debt limits, minimum profitability)
   - Balanced: Standard risk checks
   - Aggressive: Accept higher volatility, focus on upside scenarios

### Customizing Output

Adjust research parameters by answering the question-refiner's questions with your specific needs:

- Geographic focus (China, US, global)
- Timeframe (3 years, 5 years, 10 years of data)
- Source preferences (annual reports only, include news, etc.)
- Language (Chinese, English, or bilingual)
- Valuation methods (DCF required? sum-of-parts?)

---

## Credits & Acknowledgements

### Stock Research Framework
- **8-Phase Methodology**: Based on professional investment due diligence best practices
- **Graph of Thoughts Framework**: [SPCL, ETH Zürich](https://github.com/spcl/graph-of-thoughts) (MIT License)
- **Quality Standards**: Inspired by institutional investment research processes

### Core System
- **Research Methodology**: Inspired by OpenAI and Google Gemini deep research playbooks
- **Prompt Generation**: Eliminates need for external question-refinement tools
- **Claude Code Integration**: Leverages native Skills and Commands capabilities

### Development
- **Developed by**: Ankit at [My Business Care Team (MyBCAT)](https://mybcat.com)
- **Stock Research Edition**: December 2025
- **License**: MIT License (see LICENSE file)

---

## License

MIT License. See `LICENSE` file for full details.

---

## Important Disclaimer

⚠️ **WARNING / 重要提示**:

**Stock Research System**:
- This system does **NOT** provide investment advice
- This system does **NOT** predict stock prices or provide target prices
- Signal ratings (🟢🟢🟢/🟡🟡🟡/🔴🔴) are based **ONLY on fundamental analysis** (business quality, financial health, valuation, competitive moat)
- All investments involve risk, including the loss of principal
- Past performance does not guarantee future results
- Always conduct your own due diligence and consult with qualified financial advisors before making investment decisions

**股票研究系统**：
- 本系统**不构成投资建议**
- 本系统**不预测股价**
- 信号灯评级仅基于**基本面分析**（业务质量、财务健康、估值、护城河）
- 所有投资均有风险，包括本金损失
- 过往表现不代表未来结果
- 请自行进行尽职调查并在做出投资决策前咨询合格的财务顾问
- 提示词参考来源：https://mp.weixin.qq.com/s/EFT5S-cCeCnEIDZOD_DYbA

---

## Support

For detailed documentation:
- See `CLAUDE.md` for Claude Code instructions
- See `STOCK_RESEARCH_IMPLEMENTATION_PLAN.md` for system design
- See `.claude/skills/*/` for skill-specific instructions 
