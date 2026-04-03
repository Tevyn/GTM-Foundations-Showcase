# Tonic.ai Textual — Ideal Customer Profile

## Target Market

**Industries:** Healthcare/Health Tech, Financial Services, Insurance, Contact/Call Centers, Logistics, EdTech, E-commerce

**Company Size:** 500–10,000+ employees

**Geography:** North America (primary), EMEA, APAC (secondary)

---

## Technographics

Organizations currently using:
- Machine learning platforms (scikit-learn, TensorFlow, PyTorch) or LLM services (OpenAI, Anthropic, Azure OpenAI)
- Data warehousing solutions (Snowflake, Redshift, BigQuery, Databricks)
- LangChain, LlamaIndex, or similar LLM orchestration frameworks
- Microsoft Fabric or other enterprise data platforms
- Manual redaction workflows (spreadsheets, custom scripts, regex-based tools)
- Existing NER models (spaCy, NLTK, or proprietary in-house models)
- Compliance tools (data governance platforms, DLP solutions) or manual compliance processes

---

## Buying Triggers

- Embarking on AI/ML projects that require training data privacy
- Planning LLM fine-tuning or model training initiatives
- Expanding use of LLM services (ChatGPT, Claude, Azure OpenAI) and needing privacy guardrails
- Scaling data science teams and needing standardized data preparation workflows
- Regulatory audits or compliance mandates requiring data de-identification
- Audio data integration into AI workflows (contact center recordings, patient conversations, etc.)
- Internal data governance initiatives aimed at broadening data usability for analytics and ML

---

## Buyer Roles

- **Heads of AI/ML, Data Science Directors** — oversight, strategy, and budget authority for AI initiatives
- **VP/Director of Engineering** — responsible for implementation, infrastructure, and team productivity
- **Compliance Leads, Chief Data Officers** — responsible for data governance, regulatory requirements, and risk
- **CTO** (in smaller/mid-market orgs) — technology decisions and vendor evaluation
- **CISO** (in larger or regulated orgs) — security and privacy sign-off
- **Individual Data Scientists and ML Engineers** — day-to-day users, technical evaluation of tools

---

## Pain Points

- **Data usability bottleneck:** Teams have high-quality, sensitive data (clinical notes, customer calls, financial records) but cannot use it directly for training or fine-tuning due to compliance constraints. Manual redaction removes PII but loses semantic context, rendering the data less useful for model training.

- **Regulatory and compliance risk:** Undetected PII in training datasets creates exposure to HIPAA, GDPR, CCPA, and industry-specific regulations. Manual redaction is inconsistent; spreadsheet-based processes are error-prone. The compliance team struggles to audit what was redacted and whether de-identification was adequate.

- **Slow, labor-intensive data preparation:** Custom NER pipelines require ML expertise to build and maintain. Regex-based or manual redaction approaches don't scale. Data scientists spend weeks preparing datasets instead of training models. Each new data source (audio, unstructured text, documents) requires custom engineering.

- **Audio data is underserved:** Contact center recordings, patient conversations, and other audio sources carry rich training signal, but commercial tools for audio de-identification are sparse. Building in-house audio redaction/synthesis is expensive and error-prone.

- **Lack of data synthesis capability:** Simple redaction (masking, deletion) breaks narrative flow and semantic structure. Data is cleaner but less useful for model training. Teams need realistic synthetic replacements (e.g., fake names, phone numbers, medical codes) that preserve context and intent.

- **LLM privacy without rearchitecture:** As teams adopt ChatGPT and Claude for internal tools, there's no easy way to redact sensitive data in real-time without rebuilding workflows. A "privacy proxy" layer is needed but is difficult to bolt on.

- **Fragmented tooling:** Compliance and data science teams use separate tools (DLP solutions, NER pipelines, masking tools). No unified workflow. Each tool requires learning, configuration, and maintenance.

---

## Not a Fit

- Organizations without active AI/ML initiatives or LLM projects
- Companies with extremely limited sensitive data or fully pseudonymized datasets
- Organizations requiring fully custom or whitebox redaction rules (prefer vendor-managed NER models)
- Highly regulated entities requiring on-premises-only solutions (if Tonic Textual is cloud-only)
- Companies with existing, mature in-house NER/synthesis pipelines that meet their needs

---

## Notes

This ICP reflects the breadth of Tonic Textual's addressable market. The company serves multiple industries, multiple buyer roles, and multiple use cases (redaction, synthesis, audio, real-time privacy proxying) without clear prioritization. The pain points are comprehensive but lack specificity about which segments experience which pains most acutely. Sales teams using this ICP would need additional guidance to prioritize targets and conversations within each industry vertical.
