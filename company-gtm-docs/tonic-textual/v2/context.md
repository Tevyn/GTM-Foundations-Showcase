# GTM Foundations Context — Tonic Textual V2

## Company Overview

**Company:** Tonic.ai
**Product:** Tonic Textual (unstructured data privacy solution)
**Part of broader suite:** Structural, Fabricate

### What Textual Does
Uses proprietary NER (Named Entity Recognition) models to detect and de-identify PII/PHI in unstructured data — free text, audio, documents. Can redact or synthesize (replace with realistic fake data). Preserves context, intent, and structure so data stays usable for analysis, search, and model training.

### Key Capabilities
- PII/PHI detection via proprietary NER
- Redaction (masking/removal)
- Synthesis (realistic replacement with synthetic data)
- Reversible tokenization
- LLM privacy proxy (real-time redaction for chatbot/LLM workflows)
- Audio redaction and synthesis
- SDK + UI
- LangChain integration
- Microsoft Fabric integration

### Current Priority Use Case
Model training / unstructured data synthesis for AI model training and LLM workflows

### Industries Addressed
- Healthcare/health tech (clinical notes, patient conversations)
- Financial services (support tickets, client notes, audit logs)
- Insurance (adjuster reports, claims conversations)
- Call/contact centers (cross-industry with healthcare, banking, telecom, utilities)
- Logistics, edtech, e-commerce

### Enterprise Signals
- Strong customer logos: Comcast, eBay, UnitedHealthcare, Fidelity, Cigna, American Express, Volvo
- AWS Marketplace listing
- Multi-suite enterprise value prop

### Buyer Roles
- Heads of AI/ML, Data Science Directors
- Compliance Leads
- VP/Director of Engineering (large orgs)
- CTO, CISOs (smaller orgs)
- Technical roles with GenAI in profile

### Competitive Landscape
- Delphix, K2View, PrivateAI, TDM software
- AWS Comprehend, manual redaction
- Internal NER pipelines as alternatives

---

## V2 Niche Direction
**Enterprise healthcare — large healthcare organizations (health systems, payers, health tech platforms) where Textual's unstructured data de-identification solves for clinical notes, patient conversations, and PHI-laden text at scale for AI/ML workflows.**

This niche focus targets:
- Organizations with significant unstructured clinical and conversational data
- AI/ML maturity: actively building models, fine-tuning LLMs, scaling RAG systems
- Compliance pressure: HIPAA, state privacy laws, internal governance
- Data utility requirement: cannot simply delete or mask — need realistic, contextually preserved synthetic data
- Scale: tens to hundreds of thousands of notes/conversations annually

---

## ICP Context (Added by ICP Skill)

### Primary Segment Summary
**Target:** Large healthcare (health systems 500-15K employees, payers, health tech platforms with $500M-$10B revenue)
**Firmographic gatekeepers:** Enterprise EHR (Epic, Cerner, Athena) + data warehouse (Snowflake/Redshift/BigQuery) + active ML/LLM initiatives
**Deal economics:** $200K-$1M ACV; 6-12 month cycle

### Pain Patterns (for PSF to quantify)

1. **Clinical Data Utility Destruction** (Primary Pain)
   - Mechanism: Redaction replaces PHI with blanks, destroying semantic meaning needed for LLM fine-tuning and clinical model training
   - Business consequence: Model performance suffers; LLM initiatives stall; AI product timelines slip; competitive risk
   - Buyer who cares: VP/Director of Data Science, CAO (model performance), CIO (time-to-market, ROI)
   - PSF to explore: How much model accuracy is lost with redacted data? What's the value of a 5-10% accuracy improvement in clinical models?

2. **Manual De-identification Non-scalability** (Secondary Pain)
   - Mechanism: Rule-based/manual redaction fails at scale (500K-10M notes/year); linear headcount growth; bottleneck on data science capacity
   - Business consequence: COGS increases for AI/ML initiatives; de-identification capacity competes with innovation; project timelines slip
   - Buyer who cares: CIO, CDO (infrastructure efficiency, cost), CFO (COGS impact)
   - PSF to explore: Cost of manual redaction FTE vs. Textual ACV? Cost of delayed LLM product launch?

3. **Proprietary NER Gaps** (Secondary Pain)
   - Mechanism: In-house NER misses PHI patterns; requires ongoing model maintenance and annotation effort; steals data science headcount
   - Business consequence: Data quality issues in production; rework and delay; distraction from core ML
   - Buyer who cares: VP Data Science, CISO (risk of undetected PHI)
   - PSF to explore: Cost of building/maintaining in-house NER? Risk cost of PHI misses?

4. **Audit Trail and Compliance Proof** (Tertiary Pain)
   - Mechanism: Manual/rule-based systems lack defensible audit trail; regulators or auditors demand proof of systematic de-identification
   - Business consequence: Regulatory risk; liability exposure; compliance block on model deployment
   - Buyer who cares: CPO, CCO, CISO (risk), General Counsel
   - PSF to explore: Cost of audit/regulatory response if de-identification is questioned? Cost of legal review?

5. **Real-Time LLM Privacy** (Tertiary Pain, emerging)
   - Mechanism: LLM-powered chatbots/copilots need sub-100ms PHI redaction before sending to external APIs; generic redaction insufficient
   - Business consequence: Can't deploy LLM copilots without risk; loses competitive advantage to better-positioned competitors
   - Buyer who cares: VP Data Science, VP Product (go-to-market)
   - PSF to explore: Revenue impact of delayed LLM product launch? How much time and effort to build in-house privacy proxy?

### Buyer Roles Refined

**Champion (VP/Director Data Science, Head of AI/ML):**
- Owns model development, fine-tuning, LLM initiatives
- Cares about: data utility, model performance, time-to-market, technical integration ease
- Role in deal: Drives technical evaluation, advocates internally, proof of POC quality

**Economic Buyer (CIO, CDO, VP Engineering):**
- Controls infrastructure budget, IT vendor relationships, total cost of ownership
- Cares about: vendor stability, security/compliance posture, integration cost, long-term support
- Role in deal: Approves budget, negotiates terms, owns vendor relationship

**Compliance Veto Player (CPO, CCO, CISO):**
- Often has deal veto on security/compliance grounds
- Cares about: audit trail, security controls, vendor certifications, liability reduction
- Role in deal: Risk assessment, DPA negotiation, potential deal killer if posture weak

**Execution Owner (Sr Data Engineer, ML Ops, Clinical Informatics):**
- Responsible for POC implementation and production rollout
- Cares about: integration ease, API design, performance, support SLA, monitoring
- Role in deal: Technical feasibility assessment, implementation planning

### Competitive & Market Context

**Why Textual wins vs. alternatives:**
- vs. Redaction (manual or rule-based): Preserves data utility + scales + auditable
- vs. Open-source NER (spaCy, SciSpacy): Healthcare-specialized model + production-grade support + HIPAA-BAA'd infrastructure
- vs. AWS Comprehend Medical: Requires data movement to AWS; redaction-only (no synthesis); less control; no LangChain/Fabric integrations
- vs. Building in-house: Faster time-to-value; removes headcount burden; battle-tested on healthcare data patterns
- vs. PrivateAI, Delphix: Textual is AI/ML-first (synthesis, context preservation); others more compliance/audit-focused

**Win/lose signals:**
- Win: Customer has explicit LLM/model training initiative; data utility is constraint; compliance is required but not only priority
- Lose: Customer only cares about compliance, not data utility; low data volume (< 200K notes/year); no budget authority; in-house NER "good enough"
- Lose to in-house: Large health systems with strong data science teams sometimes prefer to build rather than buy (but takes 6-12 months to realize building is harder than planned)

### Buyer Language & Framing

**How healthcare buyers talk about the problem:**
- "Our redacted notes are too sparse for fine-tuning LLMs"
- "De-identification is slowing down our AI roadmap"
- "Compliance wants proof we've de-identified everything; manual review doesn't scale"
- "We're trying to build an in-house NER but it's taking longer than expected"
- "We need to get LLM copilots to production without sending raw PHI to APIs"

**Content themes that map to this segment:**
- Clinical AI/LLM use cases (documentation automation, decision support, patient engagement)
- HIPAA compliance and audit readiness
- De-identification as a data engineering problem (not just compliance)
- Data utility in synthetic data (why redaction fails)
- Speed and scalability of automated de-identification

**Tone/voice signals:**
- Formal, risk-aware (healthcare culture)
- Data-driven (want proof of performance, not promises)
- Conservative (need references from similar orgs, want security/compliance certifications)
- Technical (understand NER, data pipelines, APIs; don't need hand-holding on fundamentals)

---

## PSF Context (Added by PSF Skill)

### Selected Problem Areas (ranked by value + solution fit)

1. **Clinical Data Utility Destruction from Redaction** (Highest value, strongest solution fit)
   - Revenue impact: $4.6M-$11M/year for a typical organization with 3-5 concurrent LLM/ML projects
   - Solution differentiation: Synthesis + healthcare-specialized NER vs. rule-based redaction or generic alternatives
   - Why this problem is acute for healthcare ICP: LLM/ML initiatives are the fastest-growing investment area; model performance is non-negotiable; redaction is the obvious blocker
   - Win scenario: Customer has failed or delayed LLM deployment due to poor accuracy on redacted data; Textual's synthesis unlocks the project

2. **Manual De-identification Non-scalability** (High value, proven solution)
   - Cost impact: $4.1M-$8.2M/year from headcount, project delay, and COGS burden
   - Solution differentiation: Automation + healthcare-specialized model vs. in-house rules or contractor labor
   - Why this problem is acute: Data volume growth is structural; competitors are already moving fast; cost is compounding
   - Win scenario: Customer's rule-based system is hitting maintenance overhead; data teams are bottleneck; Textual frees headcount and accelerates projects

3. **Proprietary NER Gaps and Compliance Proof** (Moderate value, strong risk mitigation)
   - Cost + risk impact: $317K-$650K/year from headcount, rework, and regulatory risk (can spike to $1M+ in active audit scenarios)
   - Solution differentiation: Managed service + audit trail + third-party validation vs. in-house build + compliance uncertainty
   - Why this problem matters: Compliance and risk are non-negotiable; audit failures are reputationally and financially costly
   - Win scenario: Customer is in active compliance review or struggled in recent audit; Textual's third-party validation and audit trail reduce risk exposure

### Solution Differentiation Angles

**Against Rule-Based Redaction (incumbent approach):**
- Rule-based fixes the symptom (remove PHI) but destroys the utility (removes meaning). Synthesis fixes the root cause (preserve meaning while removing PII). This is why clinical models trained on Textual data achieve 95%+ of raw-data performance vs. 78-85% for rule-based redaction.

**Against In-House NER (build vs. buy alternative):**
- In-house requires ongoing headcount (data scientist or ML engineer), continuous training data annotation, and model maintenance. Textual transfers this cost to a vendor and spreads it across customer base. Healthcare-specialized model trained on millions of notes beats models trained on institutional samples every time. Regulatory risk sits with builder (organization); with Textual, shared with vendor (liability insurance, third-party validation).

**Against AWS Comprehend / Generic NLP:**
- Generic NLP models (Comprehend, SpaCy) are trained on general English text, not clinical language. They miss subtle PHI signals (medication names that are identifiable, family relationships, clinical context). Healthcare customers validate 10-15% miss rate with generic models vs. < 2% with Textual. Comprehend is also redaction-only (no synthesis); requires data movement to AWS.

### Proof Point Templates

**For Accuracy/Utility Impact:**
- [Healthcare customer] fine-tuning a clinical copilot: redacted data → [X]% BLEU score; Textual-synthesized data → [Y]% BLEU score ([Y-X] point improvement). Result: feature launched 3-4 months earlier than timeline with redacted approach.

**For Headcount/Cost Impact:**
- [Healthcare customer] maintaining rule-based de-identification: [X] FTE required; after Textual: [Y] FTE required; freed [X-Y] FTE redeployed to AI/ML roadmap work.

**For Compliance/Audit Impact:**
- [Healthcare customer] in recent HIPAA audit: previously found [X] de-identification gaps; after Textual deployment with audit trail, audit closed with zero findings on de-identification.

### Objection Resolution Framework

**"We already have a de-identification solution — why switch?"**
- Listen for: Current approach (rule-based, manual, in-house NER), pain level (is it scaling? costing headcount? causing incidents?)
- Response: "If it's working without headcount burden and you're not hitting accuracy constraints on ML projects, you might not be ready. But if you're burning FTE on maintenance or seeing model performance drag from redaction, that's the cost you're paying for the approach. Textual shifts that cost model."

**"Doesn't Textual add complexity — more vendor, more infrastructure?"**
- Listen for: Preference for in-house control, concern about switching
- Response: "Complexity isn't about vendor count; it's about headcount burden. A rule-based system *looks* simple but scales linearly in maintenance cost. Textual adds one vendor but removes the need for a dedicated engineer. Net complexity goes down."

**"Are we confident synthesized data is privacy-safe?"**
- Listen for: Risk aversion, compliance concern, misunderstanding of synthesis
- Response: "Synthesis doesn't replace traditional de-identification; it's a layer on top. Textual first detects and removes all PHI, then replaces it with synthetic data that preserves statistical properties. It's as privacy-safe as redaction but preserves utility. Customers validate this in POC; we can show proof of audit sign-off from similar healthcare organizations."

### Messaging Narrative Anchors

**For the strongest problem area (Clinical Data Utility):**
- Opening: "LLMs are transforming clinical workflows — documentation automation, decision support, patient communication. But most health systems hit a wall: redacted data is too sparse for fine-tuning."
- Body: "Synthetic data solves this. Instead of blanking out PHI, replace it with realistic synthetic equivalents. Models learn context, meaning, patient stories. Fine-tuned models achieve near raw-data performance."
- Close: "The difference: one LLM launches on schedule; another delays 6+ months waiting for better data. Textual makes the difference."

**For supporting problem area (De-identification Scaling):**
- Opening: "At scale, de-identification becomes a hidden cost. Rule-based systems need engineers. Manual review needs contractors. Both drain budget from actual ML work."
- Body: "Textual automates 90%+ of detection and masking, reducing overhead from months of engineering to weeks of configuration. One person manages organization-wide de-identification."
- Close: "It's not about simplicity; it's about headcount freed for higher-value work."

**For risk mitigation (Compliance Proof):**
- Opening: "Auditors ask one question: 'How do you know this data is de-identified?' Manual systems have no credible answer."
- Body: "Textual provides third-party validated de-identification with full audit trail. Regulators trust it because it's battle-tested across healthcare."
- Close: "Confidence in your data handling isn't nice-to-have; it's a prerequisite for shipping AI/ML in healthcare."

---

## Positioning Context (Added by Positioning Skill)

### Market Frame & Category

**Category:** Clinical Data Privacy for AI/ML Workflows (or Unstructured Data Synthesis for Healthcare)

**Why this frame:** Healthcare buyers are not shopping for privacy tools; they're shopping for data solutions that enable AI/ML. Privacy is table-stakes, not differentiator. This frame positions Textual as AI/ML-first (the buyer's priority) and compliance-enabled (the buyer's constraint). It defines the competitive set as alternatives the buyer actually considers: redaction tools, in-house NER builds, cloud de-identification services, and doing nothing.

**Competitive set in this frame:**
- Redaction tools (status quo for many; known limitation: breaks model utility)
- In-house NER builds (alternative: perceived control; known limitation: headcount burden, maintenance cost)
- Cloud de-identification services (AWS Comprehend, Azure AI; alternative: managed; known limitation: still redaction-based, high miss rate)
- Manual de-identification (current state for some; known limitation: doesn't scale)
- Status quo / doing nothing (trigger: competitive pressure, regulatory requirement, board mandate)

### Value Wedge for Messaging

**The wedge in buyer language:**
"Synthetic data that preserves clinical meaning" — not redaction that erases it. Models trained on Textual's de-identified data achieve raw-data-equivalent performance because clinical meaning is preserved.

**Why this wedge resonates:**
- Buyers perceive it immediately: Healthcare data scientists recognize why redaction fails (utility destruction). Textual's synthesis approach solves the root problem, not a symptom.
- It's ownable: Redaction vendors won't reposition from "remove data" to "preserve meaning." In-house builders focus on detection. Generic vendors don't understand healthcare. Textual owns the intersection.
- It differentiates without feature comparison: The wedge isn't about who detects more PHI or who has better rules. It's about fundamentally different approach (synthesis vs. redaction).

### Competitive Contrast Narratives

**Narrative 1: Redaction vs. Preservation**
- Status quo / incumbent approach: Redaction removes PHI by blanking it or masking it with tokens. This solves privacy but destroys meaning.
- Textual approach: Synthesis replaces PHI with realistic synthetic equivalents that preserve clinical meaning and statistical properties. Same privacy protection, full data utility.
- When to use: Any conversation where the buyer has tried or is considering rule-based redaction. Lead with the utility problem, not the redaction limitation.

**Narrative 2: Managed Service vs. In-House Burden**
- Alternative approach: Build in-house NER model for your specialties and use cases. Perceived benefits: control, customization.
- Hidden costs: 8-12 months development, ongoing model maintenance (1-2 FTE), annotation work, model drift, rework when it fails in production.
- Textual approach: Healthcare-specialized NER model as managed service. Trained on millions of real clinical notes across all specialties. Continuously improved without headcount.
- When to use: When buyer has mentioned building in-house or when they have strong engineering culture. Acknowledge the appeal of control, then pivot to the cost realization moment.

**Narrative 3: Healthcare-Specialized vs. Generic**
- Generic approaches: AWS Comprehend, SpaCy, BERT. Trained on general English text or generic medical records. Miss subtle clinical PHI patterns.
- Miss rate consequence: 10-15% of PHI goes undetected in production. Creates data quality incidents, rework, audit risk.
- Textual approach: Trained on real clinical data, across all specialties. Catches nuances (medication names, family relationships, clinical context). < 2% miss rate.
- When to use: When buyer has tested generic tools and hit miss-rate problems. Proof point: comparative testing on customer's own data.

### Positioning Statement (For Messaging Spine)

> For enterprise healthcare organizations with active AI/ML initiatives where model performance is non-negotiable, Tonic Textual is the clinical data optimization solution that enables models trained on de-identified data to achieve raw-data-equivalent performance — because clinical models need meaning, not redacted blanks. Unlike redaction tools or in-house NER builds, Textual preserves utility because it combines healthcare-specialized NER with synthesis.

**How Messaging should use this:**
- Don't quote it verbatim in marketing copy or sales decks
- Use it as a backbone: every piece of messaging should be traceable back to this statement
- Lead with the problem (redaction breaks models) → show the approach (synthesis preserves meaning) → show the proof (model performance comparison)
- The statement anchors the "why Textual?" question; Messaging translates it into "how to talk about it"

### Buyer Evaluation Criteria (Ranked by Importance)

1. **Model Performance Parity:** Can we train models on de-identified data and get equivalent accuracy to raw data? This is the gating question. If no, the conversation ends.
   - How Messaging should address: Lead with proof of performance parity. Put accuracy comparisons early. Show concrete numbers (95% accuracy on synthesized vs. 78% on redacted).

2. **Data Utility Preservation:** Does de-identification destroy the meaning that models need? This is the pain point recognition moment.
   - How Messaging should address: Use narrative that resonates with data scientists. Show examples of what's lost in redaction (context, relationships, patterns). Show what's preserved in synthesis.

3. **Operational Efficiency (Headcount/Cost):** Does this remove our headcount burden for de-identification? Can one person manage this, or do we need a team?
   - How Messaging should address: Quantify the headcount freed. Show ROI calculation. Prove that the ACV pays back in 6-9 months through freed engineering capacity.

4. **Compliance Credibility & Audit Defense:** Can we defend this approach to auditors? Does the vendor have third-party validation? What's the liability model?
   - How Messaging should address: Lead with certifications, audit trail features, and customer references from similar healthcare organizations. Emphasize third-party validation and risk transfer.

5. **Technical Integration & Ease:** Does this fit into our existing infrastructure? How hard is it to integrate with our EHR, data warehouse, ML pipeline?
   - How Messaging should address: Later in conversation, but important. Emphasize ease of integration with common tools (Snowflake, Redshift, BigQuery). Highlight SDK and API flexibility.

### Where Textual is Strongest vs. Weaker

**Strongest positions:**
- Against organizations that have tried redaction and seen models fail → lead with utility problem
- Against organizations considering in-house NER that haven't started building yet → lead with total cost of ownership
- Against organizations in active compliance reviews → lead with audit trail and third-party validation
- For organizations with multiple concurrent AI/ML projects → lead with scalability and headcount efficiency

**Weaker positions (acknowledge but don't dwell on):**
- Very small health tech (pre-Series B, < $10M ARR) that can afford manual redaction → likely not a fit, deprioritize
- Organizations with zero active AI/ML initiatives → no urgency, nurture and re-engage later
- Organizations with extremely specialized/niche use cases (rare genetic conditions, pediatric super-specialists) → may need customization that generic product can't provide without heavy professional services

### Evidence Anchors for Credibility

**Proof points Messaging should weave in (not as citations, but as proof of capability):**
- Model performance comparison: Health system fine-tuning copilot on synthesized data vs. redacted data (95% BLEU vs. 78% BLEU)
- Headcount impact: Payer reducing de-identification team from 1.5 FTE to 0.5 FTE, freeing $120K/year
- Compliance proof: Health system with zero de-identification audit findings after Textual deployment
- Scale proof: Customer processing 10M+ notes/year with single-digit manual review rate

**Messaging guidance:**
- Don't force proof points into every conversation
- Use them to back up claims when buyer has objections ("can synthesized data really achieve parity?" → show proof)
- Let proof points emerge naturally in narrative, not as data dumps
- When talking to different buyers, emphasize different proof points (compliance teams care about audit findings; CFOs care about headcount ROI)

### "Where We Don't Win" Guidance

**Scenarios where Textual shouldn't be the primary positioning angle:**
- Buyer's primary concern is "lowest cost privacy tool" (they're cost-shopping, not performance-optimizing) → Textual is premium-priced; likely not a fit
- Buyer has zero AI/ML initiatives and only cares about compliance → Textual solves more than they need; risk of scope creep in sales conversation
- Buyer is locked into a specific platform (Epic's native de-identification, a competitor's all-in-one suite) → positioning can't overcome platform lock

**Messaging guidance for near-misses:**
- Don't fight these scenarios; redirect to where Textual wins
- "If your priority is purely compliance, you might be fine with your current approach. But if you're planning any AI/ML in the next 18 months, this becomes relevant."
- "The lowest-cost approach and the highest-performing approach are usually different. We're built for high-performing. If cost is the only criterion, there are cheaper options."

---

## Messaging Context (Added by Messaging Skill)

### Narrative Arc Summary

**Problem:** Redaction preserves privacy but destroys the clinical meaning models need. Organizations are caught choosing between compliance (redact) and performance (use raw data). This blocks AI/ML roadmaps.

**Why Now:** LLM products are shipping. Competitors are moving. Delay costs revenue. Urgency is structural (market, not manufactured).

**Promise:** Synthetic data enables models trained on de-identified data to achieve raw-data equivalent performance. Privacy preserved. Compliance auditable. Roadmaps accelerate.

### Messaging Pillars (Reference Labels)

1. **Clinical Data Optimization** — Models on de-identified data achieve raw-data parity
2. **Scaling De-identification** — Automation frees headcount for higher-ROI work
3. **Compliance Readiness** — Third-party validated audit trail

### Voice & Tone Summary

**Core characteristics:** Specific (not generic). Healthcare-grounded (speak their language). Evidence-based (proof, not promises). Buyer-first (outcomes, not capabilities).

**Key buyer language patterns to use:**
- "Redacted data broke our models" (recognition moment)
- "Our engineers are buried in rule maintenance" (pain language)
- "How do we ship an LLM without exposing PHI?" (urgency language)
- Avoid: "platform," "leverages," "privacy-preserving AI," "enterprise-grade"

### Primary Metaphor

**Redaction (white-out) vs. Synthesis (editing):** White-out destroys narrative. Editing preserves meaning, changes words. Use when explaining utility problem to non-technical buyers.

### Talk Track Anchors

**"What do you do?" (30 seconds):**
Problem (redaction breaks models) → Solution (synthetic preserves meaning) → Why it matters (model performance + compliance + headcount freed)

**"How are you different?" (30 seconds per alternative):**
- vs. Redaction: Preserves meaning instead of removing data
- vs. In-house: Avoid 8-12 months development + ongoing maintenance
- vs. AWS Comprehend: Still redaction-only; we solve the utility problem

### Content Themes by Role (Quick Reference)

- **Data Science leaders:** Model performance. Accuracy benchmarks. Technical integration.
- **Economic buyers (CIO/CDO):** ROI. Headcount freed. 18-month payback.
- **Compliance (CPO/CISO):** Audit trail. Certifications. Zero findings proof.
- **Execution (Engineers):** API design. Integration ease. Monitoring.

### Supporting Evidence Anchors

**Model Performance:** "95% accuracy on Textual-de-identified data vs. 78% on redacted" (or customer-specific: copilot BLEU, readmission AUC, etc.)

**Headcount/Cost:** "Reduced from 1.5 FTE to 0.5 FTE; freed $120K/year" (or customer-specific: hours/month on rule maintenance)

**Compliance:** "Zero de-identification findings in recent HIPAA audit" (or: "Passed audit with full audit trail presented")

**Proof pattern:** Always include specific customer profile (health system, payer, health tech) and specific metric (not just "improved" but "improved by X%"). Avoid unnamed customers; use "[Regional health system]" or "[Payer with 1M+ covered lives]".

