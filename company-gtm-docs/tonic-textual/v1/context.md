# GTM Foundations — Shared Context

## Company Overview

**Company:** Tonic.ai
**Product:** Tonic Textual (part of broader suite: Structural, Fabricate)
**Market Category:** Unstructured data privacy for AI / synthetic data for LLM workflows
**What Textual Does:** Uses proprietary NER (Named Entity Recognition) models to detect and de-identify PII/PHI in unstructured data — free text, audio, documents. Can redact or synthesize (replace with realistic fake data). Preserves context, intent, and structure so data stays usable for analysis, search, and model training.

**Key Capabilities:**
- PII/PHI detection via proprietary NER
- Redaction and synthesis (realistic replacement)
- Reversible tokenization
- LLM privacy proxy (real-time redaction for chatbot/LLM workflows)
- Audio redaction and synthesis
- SDK + UI
- LangChain integration
- Microsoft Fabric integration

**Current Priority Use Case:** Model training / unstructured data synthesis for AI model training and LLM workflows

**Target Industries:** Healthcare/health tech (clinical notes, patient conversations), Financial services (support tickets, client notes, audit logs), Insurance (adjuster reports, claims conversations), Call/contact centers (cross-industry), Logistics, EdTech, E-commerce

**Enterprise Signals:** Strong — customer logos include Comcast, eBay, UnitedHealthcare, Fidelity, Cigna, American Express, Volvo. AWS Marketplace listing.

**Competitive Landscape:** Delphix, K2View, PrivateAI, TDM software, plus AWS Comprehend, manual redaction, and internal NER pipelines

**Known Playbooks:** LLM fine-tuning, audio redaction and synthesis, centralized vs decentralized data de-identification

---

## ICP Context (added by ICP skill)

### Pain Patterns (for PSF to quantify)
- Teams need to work with sensitive data (clinical notes, customer conversations, financial records) for AI model training and LLM fine-tuning, but cannot use raw data due to compliance/privacy regulations
- Current alternatives (manual redaction, spreadsheets, custom NER pipelines) are slow, inconsistent, and labor-intensive
- Preserving data usability while removing PII/PHI is difficult — crude redaction breaks context; poor synthesis loses semantic value
- Audio data carries special challenges — commercial solutions are limited, custom pipelines are expensive
- Compliance risk: undetected PII in training data can lead to regulatory penalties and brand damage
- LLM services (ChatGPT, Claude) require real-time privacy proxying; teams need on-the-fly de-identification without rearchitecting workflows

### Competitive & Market Context
- **Direct competitors:** Delphix (structured/snapshot focus), K2View (federated data privacy), PrivateAI (focused on PII detection)
- **Indirect/alternative:** AWS Comprehend (detection only, no synthesis), manual processes (spreadsheets, regex), internal NER teams
- **Win/lose signals:** Wins when customer needs synthesis (not just redaction), wants to preserve data usability for ML, or needs audio support. Loses to internal pipelines when company has NER expertise, or to simpler redaction tools when customer only needs basic masking.
- **Confusion risk:** May be compared to general data masking/PII redaction tools (which are simpler, cheaper) or to data governance platforms (which are broader but shallower on synthesis)

### Buyer Language & Framing
- Buyers tend to frame problem as "we need to use our real data for AI" rather than "we need to redact PII"
- Strong emphasis on "preserving context" and "keeping data useful" — not just compliance checkbox
- Audio use case is emerging but not yet mainstream in conversation; when mentioned, shows high urgency
- Regulatory language (HIPAA, GDPR, CCPA) appears but is usually framed as constraint, not primary driver
- Interest in SDK/API access (developer-friendly, no vendor lock-in) vs. UI-only (easier to sell to ops teams)

---

## PSF Context (added by PSF skill)

### For Positioning
- Solution differentiation angles:
  - **NER + synthesis** vs. simple redaction: Competitors often provide detection-only or crude masking. Tonic's synthesis approach preserves data utility for model training (realistic replacements instead of [REDACTED]).
  - **Proprietary NER models** vs. generic regex/manual: In-house NER teams require expertise and maintenance; AWS Comprehend lacks synthesis; Tonic provides production-ready detection tuned for PII/PHI domains.
  - **Audio support** vs. text-only: Most commercial solutions focus on unstructured text. Tonic's audio redaction/synthesis is rare in the market.
  - **Real-time LLM proxy** vs. pre-processing: Rather than requiring data teams to redact before LLM submission, Tonic intercepts at the LLM integration layer (LangChain, SDK), enabling real-time privacy without pipeline restructuring.

- Problem areas ranked by strength of right-to-win:
  1. **Model training with sensitive data** — strong fit; proprietary NER and synthesis are core differentiators
  2. **LLM privacy proxy** — strong and emerging; very few competitors in real-time privacy layer
  3. **Audio redaction/synthesis** — strong but limited addressable market (specific to contact centers, healthcare); few alternatives
  4. **Centralized/decentralized workflows** — moderate fit; more about orchestration and policy management than core technology

- Win/lose scenarios:
  - **Wins:** When customer needs synthesis (not just detection), wants to preserve data usability for AI, requires audio support, or needs to integrate privacy into LLM workflows
  - **Loses:** When customer has mature in-house NER team + existing synthesis pipelines, or only needs basic masking (then cheaper alternatives win), or requires on-premises deployment (if Tonic is cloud-only)

- Positioning opportunities from objections:
  - Objection: "We could build this ourselves" → Position: NER expertise is rare; maintaining models across PII/PHI domains is complex; opportunity cost of engineering team is high; Tonic is production-ready and actively updated for new PII types
  - Objection: "AWS Comprehend + basic masking is enough" → Position: Comprehend detects but doesn't synthesize; crude redaction destroys data utility for model training; Tonic enables real use of real data
  - Objection: "Our DLP tool handles this" → Position: DLP tools are for preventing data loss (blocking, alerting); Tonic is for enabling data use (synthesis, utility preservation); different problem

### For Messaging
- Quantified impact data (to be developed in V2; V1 placeholders):
  - **Model training speed-up:** From "X weeks of manual redaction" to "Y days of synthesis pipeline" — direct time-to-value improvement
  - **Regulatory risk reduction:** From "undetected PII in datasets" to "auditable, consistent de-identification" — compliance narrative
  - **LLM adoption acceleration:** From "can't use ChatGPT/Claude internally" to "use LLM services safely with privacy proxy" — AI enablement narrative

- Pain → consequence chains (buyer language):
  - "We can't train on our best data" → "We're stuck using synthetic or external datasets that don't reflect our domain" → "Model performance suffers; we can't build competitive AI products"
  - "Redaction is slow and inconsistent" → "Data science teams are blocked; compliance can't audit" → "Time-to-model-launch increases; regulatory risk grows"
  - "Audio is off-limits for AI" → "Call center, healthcare, customer service teams can't leverage their richest data" → "Missed opportunity for proprietary, domain-specific models"

- Before/after transformation framing:
  - **Before:** Real data locked away due to compliance risk; manual, slow redaction; custom NER pipelines; no audio capability; LLM services require proxy work-arounds
  - **After:** Real data safe to use, via synthesis; fast, consistent de-identification at scale; production NER as a platform; audio redaction/synthesis unlocked; LLM services integrated directly with privacy layer

- Buyer language patterns:
  - Data science leadership: "We need to use our data to train better models"
  - Compliance leadership: "We need a repeatable, auditable process that we can show regulators"
  - Platform/LLM teams: "We need privacy integrated into our workflows, not bolted on afterward"

---

## Positioning Context (added by Positioning skill)

### Positioning Observations
- **Competitive landscape:** Primary competitors are AWS Comprehend (detection-only, generic), Delphix (structured data focus), K2View (federated approach), PrivateAI (narrower focus), plus manual processes and internal NER pipelines
- **Win patterns:** Wins when customer needs synthesis (not just detection), values ease of deployment (no ML team needed), or requires audio support. Loses to internal pipelines when customer has NER expertise, or to simple redaction when customer only needs masking.
- **Rough positioning claim:** Tonic is the easiest, fastest way to unlock sensitive data for AI using synthesis and proprietary detection; differentiates on audio support, real-time LLM integration, and developer-first approach
- **Perceived differentiators:** Synthesis over redaction, proprietary NER tuned for PII/PHI, audio capability, LLM integration, API/SDK-first design
- **Market category assumptions:** Currently positioned as "unstructured data privacy" or "data de-identification"; could also claim "synthetic data for AI" or "data usability" — market frame is ambiguous across use cases

## Messaging Context (added by Messaging skill)

### Messaging Observations
- **Value propositions identified:**
  - Unlock Sensitive Data for AI Without Compliance Risk
  - Synthesis That Preserves Data Value
  - Production-Ready NER at Scale
  - Real-time Privacy Protection for LLM Services

- **Elevator pitch:** Unstructured data privacy platform using NER to detect and de-identify PII/PHI while preserving data context through synthesis

- **Brand voice adjectives:** Practical, Trustworthy, Forward-thinking, Precise

- **Messaging patterns observed:**
  - Heavy emphasis on "unlocking data" and "preserving utility" — reflects data science buyer priorities
  - Secondary emphasis on compliance and risk reduction — appeals to compliance/governance buyers
  - Real-time LLM integration as an emerging use case — suggests platform/engineering buyer interest
  - No clear narrative arc connecting these propositions; each stands alone
