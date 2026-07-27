# Lumentum (LITE) — 参考文献与来源质量评级

> 研究执行日期：2026-07-26 | 数据截止：2026-07-24 收盘

---

## 一、来源质量分级说明

| 等级 | 定义 |
|---|---|
| **A** | 年报（10-K）、季报（10-Q）、监管备案、同行评审研究 |
| **B** | 行业报告、券商研究、公司演示材料、可靠财务数据聚合平台 |
| **C** | 新闻报道、专家评论 |
| **D** | 预印本、初步研究、博客 |
| **E** | 社交媒体、论坛（需一手来源验证） |

---

## 二、⚠️ 重要声明：本报告未能引用任何 A 级来源

**在本次研究中：**

| 尝试的一手来源 | 结果 |
|---|---|
| SEC EDGAR 全文检索 (`sec.gov/cgi-bin/browse-edgar`) | **HTTP 403 Forbidden** |
| Lumentum 10-K / 10-Q 原文 | 未能获取 |
| stockanalysis.com `/stocks/lite/holders/`（持股结构） | **HTTP 404** |
| WebSearch 通用检索 | **本会话不可用（模型配置错误）** |

**这意味着**：本报告的所有财务数据来自 B 级聚合平台，未经一手监管文件交叉核对。**所有涉及分部收入、客户集中度、地区拆分、可转债条款、非经营性收益构成、内部人持股的结论，均为推断（推断）或标注为证据缺口（待补证据），不应作为事实采信。**

---

## 三、B 级来源（本报告实际使用）

### 主要数据源：stockanalysis.com

| # | 页面 | URL | 提取内容 | 访问日期 |
|---|---|---|---|---|
| 1 | LITE 关键统计 | https://stockanalysis.com/stocks/lite/statistics/ | 市值、PE/PS/PB、毛利率、营业利润率、净利率、FCF、D/E、流动比率、52 周涨幅、空头占比、股数变化 | 2026-07-24 |
| 2 | LITE 财务报表 | https://stockanalysis.com/stocks/lite/financials/ | FY2021–FY2025 收入、毛利、营业利润、净利润 | 2026-07-24 |
| 3 | LITE 现金流量表 | https://stockanalysis.com/stocks/lite/financials/cash-flow-statement/ | OCF、Capex、FCF、SBC | 2026-07-24 |
| 4 | LITE 财务比率 | https://stockanalysis.com/stocks/lite/financials/ratios/ | 历史 PS/PB 区间、流动比率、D/E 历史 | 2026-07-24 |
| 5 | LITE 分析师预测 | https://stockanalysis.com/stocks/lite/forecast/ | FY2026E 收入/EPS/FCF 一致预期 | 2026-07-24 |
| 6 | LITE 公司概况与新闻 | https://stockanalysis.com/stocks/lite/ | 业务描述、近期新闻标题 | 2026-07-24 |

### 同业对比数据源

| # | 页面 | URL | 用途 | 访问日期 |
|---|---|---|---|---|
| 7 | Coherent (COHR) 统计 | https://stockanalysis.com/stocks/cohr/statistics/ | 同业估值与基本面对标（核心参照） | 2026-07-24 |
| 8 | Applied Optoelectronics (AAOI) 统计 | https://stockanalysis.com/stocks/aaoi/statistics/ | 同业估值对标 | 2026-07-24 |
| 9 | Micron (MU) 统计 | https://stockanalysis.com/stocks/mu/statistics/ | 跨赛道估值锚（AI 硬件周期参照） | 2026-07-24 |

**stockanalysis.com 质量评级：B**
理由：数据来源于 SEC 备案的结构化提取，覆盖完整且更新及时；但为二次加工，存在数据错误可能（本报告即发现一处 D/E 数据矛盾，见 `data_sources.md`），且不提供分部/客户等定性披露。

---

## 四、按报告章节的引用映射

| 章节 | 主要来源 | 证据强度 |
|---|---|---|
| 01 业务底座 | #6 公司概况 | 🟡 中（缺分部与客户数据） |
| 02 行业分析 | #7 #8 #9 同业对比 + 推断 | 🟡 中 |
| 03 业务拆解 | 推断为主 | 🔴 弱（**无分部数据**） |
| 04 财务质量 | #1 #2 #3 #4 | 🟢 强 |
| 05 股权治理 | **无数据** | 🔴 **极弱（/holders/ 404）** |
| 06 市场分歧 | #1（空头数据）+ #6（新闻） | 🟡 中 |
| 07 估值护城河 | #1 #2 #3 #4 #5 #7 #8 | 🟢 强 |
| Financial_Data/* | #1 #2 #3 #4 #7 #8 | 🟢 强 |
| Valuation/* | #1 #3 #5 #7 + 本报告测算 | 🟢 强（假设已披露） |
| Risk_Monitoring/* | 综合 + 推断 | 🟡 中 |

---

## 五、本报告的原创测算（非引用，为作者计算）

以下数值为本报告基于上述 B 级数据自行计算，方法已在对应章节披露：

| 测算项 | 结果 | 所在文件 |
|---|---|---|
| FY2021–FY2025 收入 CAGR | **−1.4%** | 03, 07, historical_trends |
| 净利润与营业利润差额 | **$201M（占 NI 46%）** | 04, cashflow_analysis |
| SBC / 营业利润 | **71.4%** | 04, cashflow_analysis |
| OCF/NI、FCF/NI | **0.50 / 0.26** | cashflow_analysis |
| 5 年累计 FCF | **$860.3M** | cashflow_analysis |
| 市值 / 5 年累计 FCF | **69 倍** | cashflow_analysis |
| 市值 / 营业利润 | **250 倍** | 07, historical_multiples |
| 反向 DCF 隐含 10 年 FCF CAGR | **约 44%** | reverse_dcf_implied_growth |
| 永续 FCF 需求 | **$4.17B（实际的 19 倍）** | reverse_dcf_implied_growth |
| 三情景 DCF 概率加权 | **$78 / 股（−80%）** | dcf_analysis |
| 账面权益反推（市值 ÷ PB） | **约 $3,226M** | 04, data_sources |
| 涨幅归因（估值扩张占比） | **约 98%** | historical_multiples |

---

## 六、引用格式规范

本报告采用格式：
```
[来源方, 日期, 标题, URL, Source Quality: 等级]
```

示例：
```
[stockanalysis.com, 2026-07-24, Lumentum (LITE) Statistics,
 https://stockanalysis.com/stocks/lite/statistics/, Source Quality: B]
```

---

## 七、来源质量总评

| 维度 | 评分 | 说明 |
|---|---|---|
| A 级来源占比 | **0%** | 🔴 未获取任何一手监管文件 |
| B 级来源占比 | **100%** | |
| 财务数据完整度 | 🟢 高 | 5 年利润表、现金流、比率均覆盖 |
| 定性披露完整度 | 🔴 低 | 无分部、客户、地区、内部人数据 |
| 交叉验证程度 | 🟡 中 | 同业三方对比完成；一手文件核对未完成 |
| **总体可信度** | **🟡 中** | **量化结论可信；定性与结构性结论需自行补证** |

---

> ⚠️ 本报告的核心结论（估值严重高于任何合理 DCF 情景）建立在 stockanalysis.com 披露的财务数据之上。这些数据本身来自 SEC 备案的结构化提取，可信度较高。但读者应自行查阅 Lumentum 最新 10-K/10-Q 核实关键数字后再做判断。
> ⚠️ 免责声明：本报告不构成投资建议，不预测股价。
