# 引用文献与来源质量评级 — Intel (INTC)

**研究日期**：2026 年 7 月 26 日
**数据截止**：2026 年 7 月 24 日（收盘）/ 7 月 25 日（预测页）

---

## 一、来源质量评级标准

| 等级 | 定义 | 本报告使用情况 |
|---|---|---|
| **A** | 年报、10-K/10-Q、SEC 备案、同行评议研究 | 🔴 **0 项** |
| **B** | 行业报告、聚合财务数据平台、公司演示材料 | ✅ **主要来源** |
| **C** | 新闻报道、专家评论 | ✅ 辅助 |
| **D** | 预印本、初步研究、博客 | 未使用 |
| **E** | 社交媒体、论坛 | 未使用 |

---

## 二、🔴 重大来源限制声明

> ### **本报告未能引用任何 A 级来源。**
>
> **原因**：
> 1. **SEC EDGAR 访问被拒（HTTP 403）** — 无法取得英特尔的 10-K、10-Q、DEF 14A 原始文件
> 2. **WebSearch 工具在本次会话中不可用**（API 配置错误）— 无法进行广泛的来源发现
> 3. **stockanalysis.com 的 `/holders/` 路径返回 404** — 无法取得机构持股与内部人交易明细
>
> **影响**：
> - 所有分部数据（CCG / DCAI / Intel Foundry 各自的收入与利润）**完全缺失**，相关结论为推断
> - 高管薪酬结构、董事会构成、内部人交易记录**完全缺失**
> - 客户集中度、地域收入分布**完全缺失**
> - 现金流量表"其他调整"（TTM +$196.91 亿）的具体构成**无法核实**
> - 政府/战略持股比例为**根据流通股与总股本差额推断**（约 9%），非官方披露
>
> **本报告的所有结论应在此限制下阅读。**

---

## 三、主要来源清单（B 级）

| # | 来源 | URL | 访问日期 | 用途 | 评级 |
|---|---|---|---|---|---|
| 1 | stockanalysis.com — INTC Statistics | https://stockanalysis.com/stocks/intc/statistics/ | 2026-07-24 | 当前估值、WACC、ROIC、股本、技术指标、Altman Z | **B** |
| 2 | stockanalysis.com — INTC Financials | https://stockanalysis.com/stocks/intc/financials/ | 2026-07-24 | 六年利润表 | **B** |
| 3 | stockanalysis.com — INTC Cash Flow | https://stockanalysis.com/stocks/intc/financials/cash-flow-statement/ | 2026-07-24 | 六年现金流量表、股息、回购、发行 | **B** |
| 4 | stockanalysis.com — INTC Ratios | https://stockanalysis.com/stocks/intc/financials/ratios/ | 2026-07-24 | 六年估值倍数、回报率、市值序列 | **B** |
| 5 | stockanalysis.com — INTC Forecast | https://stockanalysis.com/stocks/intc/forecast/ | 2026-07-25 | 分析师目标价、评级分布、FY2026/27 共识 | **B** |
| 6 | stockanalysis.com — INTC Profile & News | https://stockanalysis.com/stocks/intc/ | 2026-07-24 | 公司概况、分部名称、新闻标题 | **B/C** |
| 7 | stockanalysis.com — AMD Statistics | https://stockanalysis.com/stocks/amd/statistics/ | 2026-07-24 | 同业对比 | **B** |
| 8 | stockanalysis.com — TSM Statistics | https://stockanalysis.com/stocks/tsm/statistics/ | 2026-07-24 | 同业对比 | **B** |
| 9 | stockanalysis.com — NVDA Statistics | https://stockanalysis.com/stocks/nvda/statistics/ | 2026-07-24 | 同业对比 | **B** |

---

## 四、新闻来源（C 级）

| # | 标题 | 来源 | 日期 | 评级 |
|---|---|---|---|---|
| 1 | "Intel Stock Jumps as Earnings Blow Past Expectations Amid Booming AI Demand" | 聚合转载 | 2026-07-23/24 | C |
| 2 | "INTC Earnings Grows, Signals Long-Term Turnaround as CapEx Climbs" | 聚合转载 | 2026-07-24 | C |
| 3 | "AI Daily: Intel's AI surge drives fastest revenue growth in nearly 15 years" | 聚合转载 | 2026-07-24 | C |
| 4 | "Intel earnings show just how dramatically the company has come back from being 'near-dead'" | MarketWatch | 2026-07-24 | C |
| 5 | "New Collaboration with Lens Technology Sends Intel Stock Falling" | 聚合转载 | 2026-07-24 | C |
| 6 | "Intel announces semi packaging collaboration with Lens Technology" | 聚合转载 | 2026-07-24 | C |
| 7 | "'This Makes No Sense,' Says Investor About Intel Stock" | TipRanks | 2026-07-24 | C |
| 8 | "Intel's comeback premium depends on finally getting execution right" | SemiAnalysis | 2026-07-24 | C |

> ⚠️ 新闻标题均通过 stockanalysis.com 的聚合页取得，**未逐条访问原文**，内容细节未经核实。

---

## 五️、🔴 数据一致性问题记录

本报告在数据采集中发现以下矛盾，全部予以披露：

### 问题 1：TTM 营业利润的两个数字

| 来源 | 数值 | 利润率 |
|---|---|---|
| Statistics 页 | **$4.46B** | 7.82% |
| Financials 页（TTM） | **−$77M** | −0.14% |

**本报告的处理**：交叉验证 → EBITDA $12.30B − D&A $12.38B = −$0.08B，与财务页的 −$77M 一致。**采用 −$77M 作为 GAAP 口径**；$4.46B 可能是非 GAAP 调整后数字。所有分析基于 GAAP。

### 问题 2：FY2025 净利润的两个数字

| 来源 | 数值 |
|---|---|
| 利润表 | **−$267M** |
| 现金流量表 | **+$26M** |

**本报告的处理**：差异 $293M，可能源于少数股东权益或非持续经营业务的口径差异。在利润表分析中采用 −$267M，在现金流分析中采用 +$26M（保持各表内部一致）。差异不影响任何结论。

### 问题 3：ROIC 的两个数字

| 来源 | 数值 |
|---|---|
| Statistics 页 | **3.42%** |
| Ratios 页（TTM） | **−0.07%** |

**本报告的处理**：**在同业对比中采用 3.42%**（对英特尔更有利，且与同业口径一致）；在历史时间序列中采用 −0.07%（与序列内其他年度口径一致）。两处均已在正文标注。**注意：即使采用更有利的 3.42%，仍低于 WACC 14.86% 达 11.44 个百分点。**

### 问题 4：ROA 的两个数字

| 来源 | 数值 |
|---|---|
| Statistics 页 | +1.41% |
| Ratios 页（TTM） | −0.04% |

**本报告的处理**：同上，分别用于同业对比与历史序列。

---

## 六、本报告自行计算的指标（非来源数据）

以下指标为本报告基于上述 B 级数据计算或构造，**不是任何机构的官方数字**：

| # | 指标 | 计算方法 |
|---|---|---|
| 1 | **市值增长归因（98.3% 估值扩张）** | 市值 = PS × 收入，分解为两项贡献 |
| 2 | **边际毛利率 87.2%** | Δ毛利润 ÷ Δ收入 |
| 3 | **增量资本回报检验** | 累计 Capex − 累计 D&A，× WACC ÷ (1−税率) |
| 4 | **反向 DCF 隐含永续 FCF** | EV × (WACC − g)，戈登模型 |
| 5 | **三情景 DCF** | FY2030 EBITDA × 终值倍数 + 累计 FCF − 净债务 ÷ 股本 |
| 6 | **五年现金缺口与填补来源** | 累计 FCF + 累计股息回购 vs 累计融资 |
| 7 | **稀释代价测算（EPS −18.9%）** | FY2021 净利润 ÷ 当前股本 vs FY2021 EPS |
| 8 | **复苏进度（约 36%）** | (当前 − 谷底) ÷ (峰值 − 谷底) |
| 9 | **PE ÷ ROIC、PS ÷ FCF 利润率** | 启发式质量调整倍数 |
| 10 | **均值回归隐含股价** | 现价 × (目标倍数 ÷ 当前倍数) |
| 11 | **护城河评分 2.5/5** | 本报告的定性框架 |
| 12 | **财务质量 1.8/5、治理 2.0/5、估值 1.0/5** | 本报告的评分框架 |
| 13 | **情景概率 25/45/30%** | 本报告的主观判断 |
| 14 | **FY2021 股本约 40.9 亿股** | 由回购收益率序列反推 |
| 15 | **FY2021 员工数约 12.1 万** | 估算值 |
| 16 | **分部亏损归属（Foundry 亏 $50–80 亿）** | 🔴 **纯推断，无数据支持** |
| 17 | **政府/战略持股约 9%** | 🔴 由总股本 − 流通股推断 |

---

## 七、无法验证的重要事项清单

| # | 事项 | 为何重要 | 缺失原因 |
|---|---|---|---|
| 1 | **CCG / DCAI / Foundry 分部收入与利润** | 决定"哪块业务在亏"这一核心问题 | SEC 403 |
| 2 | **客户集中度** | 决定收入的稳定性 | SEC 403 |
| 3 | **地域收入分布** | 决定地缘政治风险敞口 | SEC 403 |
| 4 | **高管薪酬结构与考核指标** | 决定管理层的激励方向 | SEC 403（DEF 14A） |
| 5 | **内部人交易记录（Form 4）** | 决定"管理层是否在买入" | SEC 403 + 404 |
| 6 | **机构持股明细与变动** | 决定筹码结构 | 404 |
| 7 | **"其他调整" $196.91 亿的构成** | 决定减值的性质与可持续性 | SEC 403 |
| 8 | **政府补贴的具体金额与条件** | 决定实际的股东成本 | SEC 403 |
| 9 | **18A / 14A 良率的实际数据** | 决定转型的技术可行性 | 公司不披露 |
| 10 | **代工业务的在手订单** | 决定 Foundry 的未来 | 公司不披露 |
| 11 | **FY2027 详细财务预测（分项）** | 决定中期路径 | 数据源付费墙 |

---

## 八、结论的确定性分级

| 结论 | 确定性 | 依据 |
|---|---|---|
| 市值增长 98.3% 来自估值扩张 | **高** | 由公开的 PS 与收入直接计算 |
| 股本一年稀释 13.28% | **高** | 直接披露数据 |
| ROIC < WACC 达 11.44pp | **高** | 直接披露数据（即使用更有利口径） |
| 自由现金流转正靠削减资本开支 | **高** | 由现金流量表直接验证 |
| FY2026 自由现金流将转负 | **中高** | 40 位分析师共识，非本报告预测 |
| 五年累计 FCF −$323 亿、全靠外部融资 | **高** | 现金流量表加总 |
| 两年减值 $313 亿 | **中高** | 现金流量表"其他调整"，构成未核实 |
| 边际毛利率 87.2%（经营杠杆巨大） | **中高** | 由公开数据计算，但受一次性因素影响 |
| Intel Foundry 是亏损主要来源 | **低** | 🔴 **纯推断，无分部数据** |
| 加权公允价值 $77 | **低** | 100% 依赖 FY2030 情景假设 |
| 护城河 2.5/5 | **中** | 定性判断 + ROIC 量化验证 |
| 熊市情景 30% 概率 | **低** | 主观判断 |

---

## 九、引用格式示例

本报告统一采用以下格式：

```
[来源机构, 日期, 标题, URL, Source Quality: 等级]
```

例：
```
[stockanalysis.com, 2026-07-24, INTC Statistics,
 https://stockanalysis.com/stocks/intc/statistics/, Source Quality: B]
```

---

> ## ⚠️ 总体免责声明
>
> - 本报告**不构成投资建议**，不推荐买入或卖出任何证券
> - 本报告**不预测股价**；所有情景分析均为假设性框架
> - 信号评级仅基于**基本面分析**（业务质量、财务健康、估值、护城河）
> - 本报告**未引用任何 A 级来源**，核心分部数据缺失
> - 所有投资均有风险，包括本金全部损失
> - 过往表现不代表未来结果
> - 请自行进行尽职调查并咨询持牌财务顾问
