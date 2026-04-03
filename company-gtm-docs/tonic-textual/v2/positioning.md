# Tonic Textual — Positioning (V2)

## Overview

Tonic Textual is positioned as the **clinical data optimization layer** for enterprise healthcare organizations building AI/ML at scale — the category where organizations go when they've realized that redacted data can't fine-tune LLMs, manual de-identification can't scale, and in-house NER requires unsustainable headcount. The positioning anchors on a specific wedge: **synthetic data generation combined with healthcare-specialized NER** — which preserves clinical meaning while removing PHI, enabling models trained on de-identified data to achieve raw-data-equivalent performance. This is defensible because it's not a feature competitors have replicated; it requires healthcare-specific model expertise (not generic NLP) and a product philosophy that prioritizes data utility over redaction, which competes directly against the status quo of rule-based masking. Textual wins for health systems and payers where AI/ML performance is non-negotiable, compliance proof is required, and headcount for manual de-identification is the hidden cost of inaction.

---

## Product Vision

Clinical AI and LLM initiatives are transforming how healthcare organizations deliver care, manage risk, and operate at scale. But these initiatives stall when organizations realize they can't train effective models on redacted data, can't scale manual de-identification without exploding headcount, and can't prove to regulators that their de-identification was rigorous. Tonic Textual exists because this problem — the inability to use unstructured clinical data safely and usefully at scale — is the blocking issue for the entire category of clinical AI. We exist to move healthcare organizations past de-identification as a bottleneck and toward de-identification as a capability. When healthcare leaders can de-identify data with confidence and preserve clinical meaning, the constraint shifts — from "our data is too sensitive to use" to "what models should we build?" That's the unlock.

---

## Market Frame of Reference

### The Category We're Defining

**Category:** Clinical Data Privacy for AI/ML Workflows (or "Unstructured Data Synthesis")

**Why this frame, not adjacent ones:**

Healthcare organizations live in a specific problem space: they have enormous volumes of unstructured clinical data (notes, conversations, transcripts) that hold enormous value for AI/ML — but can't be used directly because of privacy and compliance requirements. They're not shopping for "privacy" tools (compliance-first); they're shopping for "data solutions that enable AI" (AI-first, compliance-enabled).

The adjacent category frames would be:
- **Privacy/Compliance (wrong frame):** If Textual is positioned as a "privacy tool," it competes on audit trail completeness, regulatory certifications, and risk reduction. These matter, but they're secondary to the healthcare buyer's core driving need (getting models to production). Compliance is table-stakes; it's not the differentiator.
- **Enterprise Data Masking/Redaction (wrong frame):** If positioned here, Textual is perceived as an incremental improvement on redaction — better rules, better detection, but still fundamentally about redacting data. It doesn't acknowledge the fundamental limitation of redaction (utility destruction) that's driving the pain.
- **General Data Synthesis (wrong frame):** Synthetic data is a broad category; it includes everything from generating synthetic datasets for testing to privacy-preserving data sharing. General synthetic data buyers are not focused on clinical meaning preservation. Healthcare buyers are.

**Right frame — Clinical Data Privacy for AI/ML:**
This frame acknowledges the real buyer need (AI/ML enablement), the constraint (privacy compliance), and the solution approach (data synthesis that preserves utility). It defines a competitive set: alternatives include redaction tools, manual de-identification processes, cloud de-identification services (AWS Comprehend), building in-house NER, and "doing nothing" (stalling AI/ML until they figure it out). Within this frame, Textual's healthcare-specialized synthesis approach is differentiated — not a feature against feature-equivalent competitors, but a fundamentally different category of solution.

### How Buyers Evaluate Alternatives

Healthcare buyers evaluating de-identification solutions follow a specific decision sequence:

**First:** They diagnose whether redaction is the constraint on their AI initiatives.
- Question: "Are our LLMs and models underperforming because of redaction?"
- Outcome: If no, they're not actively buying. If yes, they move to solution evaluation.

**Second:** They evaluate whether they can solve it internally.
- Options: Build in-house NER? Hire contractors? Invest engineering time?
- Constraint: Headcount, time-to-market, and maintenance burden usually disqualify in-house for all but the largest organizations.

**Third:** They evaluate commercial solutions on two axes simultaneously:
- **Data Utility:** Does the solution preserve clinical meaning? Can we train models on de-identified data and get model performance parity with raw data?
- **Operational Efficiency:** Does it remove the headcount burden we're currently carrying? Can it scale to our data volume without ongoing maintenance?

A third, concurrent evaluation: Compliance/Risk
- **Compliance Credibility:** Does the vendor have third-party validation (certifications, customer references)? Can we defend our de-identification approach to auditors?

**What buyers consider and why:**

**Redaction Tools (Rule-Based Masking or Generic Redaction Services)**
Buyers consider this because it feels like the obvious solution — "we need to redact PHI, so let's buy a redaction tool." They like that it's familiar (most have some redaction process already), and it's perceived as "secure" because it removes data entirely. What holds them back: When they test it on actual clinical notes and fine-tune models, they discover models trained on redacted data underperform by 10-15%. They realize redaction solves the privacy problem but destroys the data utility problem. Redaction is not a viable path forward if they need high-performing models.

**In-House NER Build / "We'll Do It Ourselves"**
Buyers consider this because they think "we have strong data science teams, we can build a model." They like the perceived control and customization. What makes them walk away: After a few months, they realize building a production NER system is harder than building an ML model — they need labeled training data, DevOps infrastructure, ongoing model maintenance, and the final model never matches the performance they expected. The opportunity cost (data scientists diverted from actual ML work) becomes visible. They abandon the project or downgrade to an inadequate internal system they perpetually maintain and never improve.

**Cloud De-identification Services (AWS Comprehend Medical, Azure AI, etc.)**
Buyers consider this because it's "managed" (reduces headcount) and they already use the cloud provider. They like that it's easy to get started (no vendor relationship to build). What holds them back: When they test it on clinical notes, they discover it catches 85-90% of PHI (misses subtle patterns like medication names that are identifiable, family relationships mentioned in passing). More importantly, it's redaction-only — no synthesis — so they hit the same utility wall as rule-based approaches. They're not solving the core problem.

**Building vs. Buying De-identification / "What If We Allocate More Engineers?"**
The persistent internal resistance. What makes buyers reconsider: ROI calculation. If you allocate 1-2 FTE for NER maintenance, that's $150K-$200K/year sunk cost plus opportunity cost of lost ML work. Textual's ACV ($200K-$1M) amortizes over 3+ years and frees headcount for higher-ROI work. The math flips when they realize the true cost of building.

**Status Quo / "We'll Pause AI/ML Until We Figure This Out"**
This is more common than most positioning docs acknowledge. Some organizations genuinely aren't in a hurry — they're not under competitive pressure; their AI roadmap isn't urgent. What triggers movement from status quo: Board pressure for AI initiatives, competitive product launch that surprises them, or regulatory requirement forcing data governance urgency. These events create the urgency that tips from "someday we'll solve this" to "we need to solve this this quarter."

---

## Value Wedge

**The wedge: Synthetic data that preserves clinical meaning.**

Not redaction that erases it. Not generic synthetic data that ignores healthcare semantics. Textual's core differentiation is enabling models trained on de-identified data to achieve equivalent or near-equivalent performance to models trained on raw data.

This works because Textual's approach isn't "mask PHI more cleverly." It's "replace PHI with realistic, clinically coherent synthetic equivalents that preserve statistical and linguistic properties." When a clinical note says "Patient is a 45-year-old smoker from rural Ohio whose mother has type 2 diabetes," Textual generates "Patient is a 42-year-old nonsmoker from rural Iowa whose mother has hypertension" — different specifics, but statistically similar, clinically meaningful, PHI-removed. A model trained on this data learns the relationships between smoking status, geography, and family history, which is exactly what clinical models need.

The wedge is defensible because:

1. **Buyers perceive it as meaningful:** Healthcare data science leaders immediately understand why this matters. Every conversation with health systems includes a story about models that failed on redacted data. They know this is the constraint — they're not looking for better redaction, they're looking for de-identified data that doesn't cripple model performance.

2. **It's ownable:** Redaction vendors could theoretically add synthesis, but they haven't — because their product philosophy is anchored in "remove data." Their go-to-market is built on "compliance and security" not "model performance." Switching that positioning would confuse their existing market. In-house builders focus on detection, not synthesis. Generic synthetic data vendors don't understand healthcare. Textual owns the intersection: healthcare expertise + synthesis approach.

3. **It resonates on contact:** When you explain the synthetic data approach to a clinical data scientist, their immediate response is "that makes sense, and we know why redaction doesn't work." There's no confusion, no "I don't understand why that's different." It's recognition.

---

## Positioning Statement

> For enterprise healthcare organizations (health systems, payers, health tech) with active AI/ML initiatives where model performance is non-negotiable, Tonic Textual is the clinical data optimization solution that enables models trained on de-identified data to achieve raw-data-equivalent performance using synthetic data generation — because clinical models need meaning, not redacted blanks. Unlike redaction tools or in-house NER builds, Textual removes PHI *and* preserves utility, because it combines healthcare-specialized NER with synthesis, not just masking.

**How to use this statement:**

- **Marketing** should frame campaigns around the problem (redaction breaks models) and the solution (preserve meaning, not redact). Use the health system's language: "Why your clinical LLM underperformed on redacted data — and how to fix it."

- **Sales** should lead conversations with: "So you're fine-tuning models on redacted data. How's the performance looking?" Listen for the recognition moment (they're experiencing the pain). Then position the wedge: "The issue isn't your model architecture — it's data poverty. We solve that differently than redaction."

- **Product** should evaluate roadmap priorities against: Does this capability strengthen our position in synthetic data quality or healthcare NER depth? If a feature doesn't move toward higher-fidelity synthesis or broader PHI coverage, it's likely scope creep.

- **Customer Success** should measure value delivery against: Are customers achieving model performance parity with raw data? Did they free headcount? Can they defend de-identification in audits? These are the proof points that validate the positioning.

---

## Competitive Positioning by Alternative

### Against Redaction Tools (Incumbent Alternative)

**Their strength:** Perceived security and audit trail completeness. Redaction removes data entirely — "safer" in a binary sense.

**Why they win:** Organizations defaulting to "remove = safe" without questioning model impact.

**Where Textual wins:** Organizations that have tried redaction and seen models fail. Once a data scientist tests models on redacted vs. synthesized data and sees 95% accuracy vs. 78% accuracy, the comparison is over.

**How to frame in sales:** "Redaction solves privacy but destroys data. You can't have both with blanks. Synthesis solves both — no PHI, full meaning."

### Against In-House NER / Build

**Their strength:** Perceived control and customization.

**Why they win:** Engineering-driven cultures that trust their own teams and underestimate the scope.

**Where Textual wins:** When the hidden cost becomes visible (6-12 months of effort, ongoing maintenance, model drift, rework), the ROI flips.

**How to frame in sales:** "Building an NER model is easier than operating one. By month 8, you'll realize you've built a liability, not a competitive advantage. We've built it and operate it."

### Against In-House Build + AWS Comprehend

**Their strength:** Managed service (you don't build it) + familiar platform (AWS customers feel less vendor lock-in).

**Why they win:** For companies that just need "something that works" and aren't pushing models hard.

**Where Textual wins:** When they test Comprehend on their clinical notes and discover it's still redaction-based (no synthesis) and has 10-15% miss rate on clinical PHI.

**How to frame in sales:** "AWS Comprehend is a tool that redacts better. We're a tool that preserves utility. If model performance matters, you'll feel the difference in your first POC."

### Against Status Quo / Doing Nothing

**Their strength:** No investment required right now; avoid the "disruption" of evaluating new vendors.

**Why they win:** When competitive pressure isn't acute yet or when the organization isn't mature enough to ship AI at scale.

**Where Textual wins:** When urgency appears (new regulatory requirement, competitive product launch, board pressure for AI initiatives).

**How to frame in sales:** "You can pause AI/ML initiatives until you figure this out, or you can solve the constraint now. The fastest-to-market health systems are already shipping AI on synthesized data."

---

## Market Dynamics & Positioning Longevity

**Why this positioning holds over time:**

The constraint Textual addresses (data utility destruction from redaction) is structural to the healthcare problem, not a feature that will be replicated away. Competitors could theoretically add synthesis, but they'd have to reposition from "privacy/compliance" to "data optimization" — and that's not their category today. By the time they notice the trend, Textual will have healthcare-specialized NER models trained on millions of real clinical notes, customer references proving model performance parity, and defensible compliance proof. Replicating that takes time.

Additionally, the wedge (healthcare-specialized synthesis) gets stronger over time as Textual's NER models are exposed to more data and more specialties. A generic vendor building a "me too" synthesis product would have to train on similar scale — and healthcare customers trust proven, battle-tested approaches over new entrants.

**Where the positioning is vulnerable:**

If a large cloud vendor (AWS, Azure, Google Cloud) builds healthcare-specialized NER + synthesis and bundles it into their existing cloud de-identification services, they could disrupt. Textual's response isn't to panic on feature parity — it's to deepen the wedge on healthcare specialization, customer outcomes (model performance proof), and audit-trail defensibility. The positioning can flex to emphasize the healthcare-first approach even as the competitive set evolves.
