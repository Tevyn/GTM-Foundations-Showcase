# Tonic Textual — Ideal Customer Profile (V2)

## Overview

Tonic Textual targets **large healthcare organizations (health systems, payers, health tech platforms) with 500+ employees, $500M+ annual revenue, and active AI/ML initiatives** where unstructured clinical data de-identification is the blocking issue for model training, fine-tuning LLMs, and RAG system deployment. These organizations have the compliance maturity to handle HIPAA governance, the data volume to justify automation, the budget to invest in privacy infrastructure, and the urgency to move AI/ML projects from pilot to production. They choose Textual because simple redaction destroys data utility, and internal NER pipelines can't scale or keep pace with PHI detection.

---

## Primary Segment

### Firmographics

**Industry:** Healthcare and health tech
- Large health systems (health systems > 10 hospitals, physician networks > 1,000 providers, regional/national scope)
- Health insurance organizations / payers (Medicare Advantage, Medicaid, commercial plans with > 1M covered lives)
- Health tech platforms (patient engagement, telehealth, EHR vendors, clinical documentation SaaS serving health systems)

**Company Size:** 500–15,000 employees

**Revenue:** $500M–$10B+ (minimum revenue floor signals sufficient data volumes and budget authority; enables $200K–$1M+ ACV deals)

**Geography:** North America (US/Canada primary, expansion to EMEA secondary); mature compliance frameworks, regulatory enforcement, and healthcare IT infrastructure concentration

**Funding/Maturity Signal (for startups/health tech platforms):** Series B+; $50M+ in funding; health data collection at scale (millions of patient records, provider interactions, claims records, conversation logs)

---

### Technographics

**Data Infrastructure Signals:**
- **EHR/EMR system:** Epic, Cerner, Athena, or comparable enterprise EHR with unstructured data export capabilities (clinical notes, provider conversations, patient communications) — organizations without export capability can't feed Textual, so this is a hard gate
- **Data warehouse or lake:** Snowflake, Redshift, BigQuery, or on-premises data warehouse; indicates data science maturity and investment
- **ML/LLM stack:** Active fine-tuning, RAG system deployment, or model training initiatives; use of frameworks like LangChain, LlamaIndex, or custom orchestration
- **Compliance/governance platform:** Atlassian, Varonis, or comparable; indicates serious compliance/data governance investment

**What this combination signals:**
- EHR + warehouse + ML stack = organizations that have unstructured clinical data extracted at scale and are actively building models. Without the EHR, they can't feed Textual; without the warehouse, they're not centralizing data for ML; without the ML stack, they're not attempting the workflows Textual solves for.

**Why competitors or alternatives don't fit:**
- Organizations using small-scale EHR systems (Medidata, practice management systems) typically lack the volume and complexity to justify Textual's pricing; they redact manually or tolerate lower utility
- Organizations without active ML/LLM initiatives have no urgent problem Textual solves; they're not building models, so why de-identify at scale?
- Organizations relying purely on manual redaction or rule-based masking haven't hit the wall where utility destruction becomes intolerable — they haven't tried to fine-tune models on redacted notes

---

### Buying Triggers

1. **AI/ML Initiative Phase Transition (Event + Threshold)**
   - **Trigger:** Moving from AI/ML pilot → production deployment (model fine-tuning, LLM adoption, RAG system rollout)
   - **Why it creates urgency:** Pilots operate on toy datasets; production requires real clinical data at scale. Privacy wall appears here. Redacted data doesn't fine-tune LLMs. Generic synthetic data lacks clinical realism. In-house NER can't scale or keep up with new PHI patterns.
   - **Threshold:** Project roadmap includes clinical LLM fine-tuning or production RAG on real notes *within 6 months*. Below this, "exploring AI" doesn't have enough urgency to buy.

2. **Data Access / Regulatory Requirement Shift (Event + Threshold)**
   - **Trigger:** New privacy regulation (state privacy laws tightening HIPAA audit scope, internal governance shift, acquisition bringing in new compliance standards) makes current de-identification approach untenable
   - **Why it creates urgency:** Manual or rule-based redaction can't prove systematic coverage; auditors or legal teams demand data lineage and consistent PHI detection at scale. Organizations face risk if they can't demonstrate adequate de-identification.
   - **Threshold:** Active audit, regulatory notification, or board-level privacy initiative launched *this fiscal year*. Below this, "planning for future compliance" doesn't create buying urgency.

3. **Time-to-Market Pressure for LLM/AI Product (Event + Threshold)**
   - **Trigger:** Competitive or business pressure to ship LLM-powered clinical workflows (copilot for documentation, clinical decision support, patient communication agents) without hitting privacy roadblocks
   - **Why it creates urgency:** Every month delayed = competitors ship first, customers expect it, revenue timeline slips. De-identification is the gating issue between raw data and production model.
   - **Threshold:** Launch date set for LLM feature *within 12 months*; product roadmap includes the feature. Below this, "interested in AI" doesn't create deadline pressure.

4. **Data Science Maturity & Scale Threshold (Structural Trigger)**
   - **Trigger:** Annual data growth in clinical/conversational data exceeds 500K+ notes/interactions per year; data science team headcount > 3 FTE; active model training/fine-tuning work
   - **Why it creates urgency:** At this scale, manual redaction becomes unaffordable; in-house NER maintenance becomes a headcount cost. ROI on automation appears.
   - **Threshold:** Below 200K notes/year, manual or lightweight redaction remains tolerable cost and headcount. Below this, Textual ROI is marginal.

---

## Buyer Roles

| Role | Title(s) | What They Care About | Their Role in the Deal |
|------|----------|---------------------|----------------------|
| **Champion / Internal Driver** | VP/Director of Data Science, Head of AI/ML, Chief Analytics Officer | Time-to-market for ML/LLM initiatives; data utility (can't sacrifice model accuracy for privacy); technical fit (SDK integration, batch+real-time support) | Evaluates technical fit, drives internal consensus with engineering and compliance, advocates for POC budget |
| **Economic Buyer** | Chief Information Officer (CIO), Chief Data Officer (CDO), VP of Engineering, or VP of Enterprise Architecture | Total cost of ownership; security/compliance posture; vendor stability; integration with existing data/ML infrastructure | Signs off on budget ($200K–$1M+ ACV); negotiates terms; requires ROI/payback period, references from healthcare competitors, SOC 2/HITRUST compliance proof |
| **Compliance/Risk Owner** | Chief Privacy Officer (CPO), Chief Compliance Officer (CCO), VP of Compliance, Legal/Risk Lead | Audit trail and documentation (proof of PHI detection and handling); vendor security controls (encryption, access logs, data residency); compliance certifications (HITRUST, SOC 2) | Vets vendor risk; signs data processing agreement (DPA); may block or slow deal if security/compliance posture is weak; concerned with liability and regulatory enforcement |
| **Execution Owner** | Senior Data Engineer, ML Ops Lead, Clinical Informatics Lead | Operational fit (integration with EHR export, data warehouse, ML pipeline); ease of setup and maintenance; support quality and SLA | Owns implementation; evaluates integration cost, performance (latency, throughput), monitoring/alerting; responsible for successful POC and production rollout |

### Deal Economics

**ACV Range:** $200K–$1M (varies by data volume, number of use cases, and compliance/audit requirements)
- Smaller health tech platforms: $200K–$400K
- Regional/mid-market health systems: $400K–$750K
- National payers or large health systems: $750K–$1M+

**Deal Cycle:** 6–12 months
- Initial discovery/qualification: 4–6 weeks
- Security review, data processing agreement negotiation: 4–8 weeks
- Technical POC (de-id 10K–100K sample notes, measure quality/utility): 6–10 weeks
- Internal approvals (compliance, legal, finance, executive): 4–8 weeks
- Final negotiation and contracting: 2–4 weeks

**Buying Process Notes:**
- Security review is mandatory (HIPAA BAA, data residency, encryption, access controls); vendors without security/compliance certifications often fail here
- Data Processing Agreement (DPA) with healthcare-specific clauses is standard
- POC is expected in 9/10 deals; proof of PHI detection accuracy and data utility preservation is table stakes
- Finance approval is easier if ROI can be quantified (e.g., "replaces 2 FTE of manual redaction + unlocks $X value in LLM model accuracy")
- Compliance/privacy buyer is often a veto player if security posture is weak
- Integration testing with customer's data infrastructure (EHR export, data warehouse, ML pipeline) adds 2–4 weeks to POC

---

## Pain Points (Specific to This Segment)

**Problem 1: Clinical Data Utility Destruction from Redaction**
- **Mechanism:** Health systems use rule-based masking or manual redaction (HIPAA "safe harbor" rules) to de-identify clinical notes and patient conversations. However, simple redaction replaces PHI with blank tokens, removing semantic meaning. "Patient lives in [REDACTED]" tells a model nothing about social determinants; "Patient called 15 times in 2 weeks" becomes "Patient called [REDACTED] times," destroying signal. When data science teams attempt to fine-tune LLMs or train clinical models on redacted notes, model performance suffers — they can't learn context, patient history, or subtle clinical language.
- **Why it's acute for this segment:** Large health systems and payers are actively building LLMs for clinical documentation, patient engagement, claims processing, and clinical decision support. These models need rich, contextual training data. Redacted data is worthless for fine-tuning. The alternative — building models on raw PHI — is legally and ethically prohibited.
- **Business consequence:** Data scientists can't deploy models to production; LLM initiatives stall. Timeline slips. Revenue from AI-driven products (virtual care, automated documentation, clinical support) is delayed. Competitive products ship first. Internal pressure mounts to find a solution.

**Problem 2: Manual De-identification is Non-Scalable and High-Overhead**
- **Mechanism:** At scale (500K–10M+ clinical notes/year, ongoing new patient conversations), manual redaction or templated redaction rules become impractical. Each new data source, EHR workflow, or clinical specialty introduces new PHI patterns. Internal data teams either maintain increasingly complex rule engines (HIPAA safe harbor + custom patterns + exceptions) or hire contractors to manually review and redact. Both approaches fail: rules miss PII (a clinician mentions a relative's name in passing), contractors are slow and expensive, and scaling to new datasets requires rework.
- **Why it's acute for this segment:** Health systems and payers operate across dozens of clinical specialties, multiple EHR systems (after M&A), and new data sources (digital health platforms, social determinants data, claims). A rule engine built for oncology notes doesn't catch orthopedic records' jargon. Adding 500K new notes/quarter means redaction labor grows linearly with data growth, eating into data science budget.
- **Business consequence:** De-identification becomes a bottleneck. Data teams spend headcount on maintenance instead of innovation. Cost of goods sold (COGS) increases for any AI/ML initiative that requires de-identified training data. Projects compete for scarce de-identification capacity, and the highest-ROI projects (LLM fine-tuning) often lose to compliance workloads.

**Problem 3: Proprietary NER Gaps and Customization Burden**
- **Mechanism:** Some health organizations attempt to build or fine-tune their own NER models for PHI detection. This requires: labeled training data (annotation effort), DevOps infrastructure (model versioning, monitoring, retraining), PHI pattern expertise (what counts as sensitive in clinical context vs. general text), and ongoing maintenance as new PHI types emerge. Most organizations underestimate the effort. Models built on limited labeled data miss edge cases; they improve slowly; they drift as new clinical jargon emerges. Competitive open-source models (spaCy, SciSpacy) are trained on generic text, not clinical PHI.
- **Why it's acute for this segment:** Health systems and payers have data scientists, not NER specialists. Investing 1–2 FTE in model building steals them from higher-ROI work (actual clinical models). The result: they ship suboptimal NER, find gaps in production, and scramble to fix it mid-production.
- **Business consequence:** Data quality issues in production (undetected PHI slipping through), delayed launches, rework cost, and distraction from core AI/ML initiatives.

**Problem 4: Audit Trail and Compliance Proof Gaps**
- **Mechanism:** When regulators (CMS, state privacy boards, internal audit) ask "How do you prove this data was systematically de-identified?" most organizations struggle. Manual redaction has no audit trail. Rule-based systems have logs, but no third-party validation. Some vendors' de-identification claims aren't independently tested. Health organizations need to document: what PHI was detected, how it was handled (redacted/synthesized), and proof that coverage was consistent and defensible.
- **Why it's acute for this segment:** Large health systems and payers face escalating regulatory scrutiny (HIPAA enforcement, state privacy laws, board-level risk mandates). A data breach involving patient data (even allegedly de-identified) triggers investigations. Proof of rigorous de-identification is essential for limiting liability.
- **Business consequence:** Risk exposure; potential regulatory fines or enforcement action; inability to legally defend use of "de-identified" data in lawsuits or audits. Delayed model deployment if compliance can't sign off on data handling.

**Problem 5: Real-Time LLM Privacy (Chatbot / Copilot Workflows)**
- **Mechanism:** Health systems and health tech platforms deploying LLM-powered chatbots or copilots (e.g., clinical documentation assistants, patient support bots) need to redact PII from user input and chat history in real-time before sending to LLM APIs. Generic redaction (removing named entities) is inadequate; a clinician mentions a patient's race, zip code, or family history — all PHI. Real-time redaction is latency-sensitive (sub-100ms is required; standard NER is too slow). Custom solutions are fragile.
- **Why it's acute for this segment:** Organizations shipping LLM-powered workflows can't afford to send raw PHI to external LLM APIs (OpenAI, Anthropic, Cohere) — regulatory risk is too high. They need a privacy proxy layer. Building one in-house is time-consuming; using a generic privacy vendor is often too generic for healthcare PHI.
- **Business consequence:** LLM-powered workflows can't ship; if they do, privacy risk is material and unacceptable to compliance teams.

---

## Targeting Criteria (Marketing)

**Account-Level Filters (for target account list building):**
- Industry: Healthcare (NAICS: 6211, 6212, 6221, 6222, 6223, 6241 — health systems, payers, health tech)
- Company size: 500–15,000 employees
- Annual revenue: $500M–$10B+
- Technology stack signals:
  - Confirmed use of Enterprise EHR (Epic, Cerner, Athena) *or* health data platform (Veradigm, Allscripts, or cloud-native)
  - Presence of data science, AI, or ML team (job postings, LinkedIn signals, website messaging)
  - Adoption of cloud data platforms (Snowflake, Redshift, BigQuery) or data warehouse

**Behavioral/Intent Signals (from intent data, content engagement, website visitors):**
- Searches or content consumption around: "clinical NLP," "de-identification," "HIPAA synthetic data," "LLM healthcare," "clinical model training," "privacy-preserving AI"
- Website interactions: deep engagement with AI/ML, data science, compliance sections
- Recent news: funding announcements, product launches involving clinical AI/LLM, M&A activity indicating data consolidation
- LinkedIn: hiring for data scientists, ML engineers, compliance/privacy roles
- Advertising platform signals: visitors from health system or payer domains, engagement with AI/data governance content

**Disqualification Signals (stop pursuing if present):**
- Organization is purely a service provider (e.g., staffing, consultancy) without proprietary data or AI initiatives
- Technology stack doesn't include EHR or clinical data platform (rules out most non-healthcare use cases)
- Budget authority is unclear (matrix organizations where no single buyer can approve $200K+ spend)

---

## Qualification Framework (Sales)

**Quick qualification flow — 3 questions minimum before qualifying in; 5 if exploring depth.**

1. **Data Reality Opener** (Situational)
   - *Question:* "Tell me about your clinical data. How much unstructured data — notes, conversations, transcripts — are you working with annually? Is it growing?"
   - *Listen for:* Scale signals (500K–10M+ notes/year), growth trajectory, whether it's in active use or archival
   - *What it tells you:* Volume signals ROI potential; growth indicates urgency and future revenue. If they say "a few hundred notes," deprioritize; ROI is marginal.

2. **AI/ML Reality Check** (Situational)
   - *Question:* "What's your data science team working on right now? Are there any LLM or model training projects on the roadmap — either in production or planned for the next 12 months?"
   - *Listen for:* Concrete projects (fine-tuning, RAG, clinical copilots, documentation bots), timeline, whether data quality is currently a blocker
   - *What it tells you:* If no active ML initiatives, no urgency. If they say "we're interested in AI but haven't started," deprioritize. If they say "we're fine-tuning models on redacted notes and getting poor results," that's a high-signal pain.

3. **Privacy/De-identification Current State** (Technical)
   - *Question:* "How are you currently de-identifying clinical data? Are you using rule-based redaction, manual review, or something else? Is that scaling okay for your needs?"
   - *Listen for:* Current approach (redaction, masking, synthetic data, in-house NER), pain signals (manual overhead, rule maintenance, PHI misses), whether they've explored alternatives
   - *What it tells you:* Confirms the pain point. If they're happy with current approach, low fit. If they mention undetected PHI, scaling issues, or bottlenecks, strong fit.

4. **Compliance/Regulatory Pressure** (Situational)
   - *Question:* "Has privacy or compliance brought up de-identification as a concern — either around model training data quality or audit trail?"
   - *Listen for:* Recent audit, regulatory notice, board directive, or upcoming privacy/compliance review
   - *What it tells you:* Signals urgency. If they say "compliance hasn't flagged it," lower urgency; if they say "we just had a HIPAA audit and need to improve," high fit.

5. **Budget/Timeline Reality Check** (Buying Process)
   - *Question:* "If you decided to solve this, what's your timeline? Are there budget conversations already happening, or would this require new budget approval?"
   - *Listen for:* Fiscal year planning, existing IT budget, compliance budget, or new allocation. Timeline (this quarter, this year, next year).
   - *What it tells you:* If they say "maybe next year," deprioritize. If they say "this quarter" or "we have compliance budget," high-signal fit.

**Red flags (disqualify or deferred):**
- "We're just exploring privacy tools" (no urgent pain)
- "We don't have active data science projects" (no use case)
- "Our budget is all spoken for" + "timeline is 18+ months" (not ready)
- "We're using a small practice EHR with <100 providers" (volume too small; ROI marginal)

---

## Negative ICP (Not a Fit)

| Profile | Why Not | Disqualification Signal |
|---------|---------|------------------------|
| **Small or independent health practices (< 50 providers, < $50M revenue)** | Low annual data volume (< 100K notes/year); manual redaction is still feasible and cheaper than Textual; limited budget authority for $200K+ spend; compliance requirements are simpler | "We handle all de-identification manually" or "We have a compliance officer who reviews everything." Low data volume overheard. |
| **Health organizations with no active AI/ML or LLM initiatives** | No driving use case; compliance-driven de-identification alone doesn't justify premium pricing; they can use rule-based masking or open-source tools | "We're interested in AI but don't have any projects yet." OR "De-identification is purely for compliance; we're not building models." |
| **Organizations using small-scale EHRs or patient management systems without data export capability** | Can't integrate with Textual; cannot scale de-identification because data isn't centralized for processing | "Our EHR is [cloud practice management system with limited export API]." OR "We don't have a data warehouse; notes stay in the EHR." |
| **Mature genomic/lab-focused organizations (pathology, genomics labs)** | PHI is present, but unstructured text (clinical notes) is minimal; most data is structured (lab results, sequences); different privacy requirements and technical needs | "Most of our PHI is structured lab data, not notes." OR "We're primarily genomics and reference lab work." |
| **Organizations with strict data residency or air-gapped infrastructure** | Textual requires cloud or on-premises deployment with internet access for model updates; air-gapped systems may be incompatible or require expensive managed services | "All data must stay on-premises and air-gapped from the internet." |
| **Early-stage health tech with low traction (< $5M ARR, no major health system customers)** | Budget is tight; compliance maturity is low; pain is not yet acute; poor cultural fit (startup may tolerate risk; health systems need conservative, audit-trail-heavy approach) | Seed/Series A stage, single-digit customer count, revenue < $5M, founder-led sales |

**How to handle near-misses:**
- **Health tech that's 500+ employees but early-stage (Series B, $10M–50M ARR):** These can be fits if they have health system or payer customers and are actively building AI. Evaluate on data volume and AI/ML maturity, not funding stage. May have lower ACV ($200K–$300K range) but could be good reference customers.
- **Specialized health systems (pediatric, psychiatric, behavioral):** Not disqualified by specialty alone — if they have 500+ employees, active AI/ML, and similar data volume, they're fit. Evaluate on firmographic and use-case fit, not specialty.
- **Organizations with "AI aspirations but no current projects":** Deprioritize but don't disqualify. Build a nurture campaign around AI/ML content. Re-engage when they announce an AI/ML initiative.
