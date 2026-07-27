# Data Sources：Qualcomm（QCOM）

- SEC submissions JSON：`https://data.sec.gov/submissions/CIK0000804328.json`。用于定位 10-K、10-Q、DEF 14A 等文件。
- StockAnalysis 财务报表页面：用于自动化抽取历史损益、资产负债和现金流表。
- Nasdaq summary API：用于市场快照；该数据不作为唯一估值依据。

## 数据限制
1. 自动化脚本未逐页解析所有 SEC HTML/PDF 附注；
2. 聚合数据可能存在 TTM、non-GAAP 或时点差异；
3. 历史估值分位和完整同行矩阵需要专业数据终端补强；
4. 本报告不含目标价。