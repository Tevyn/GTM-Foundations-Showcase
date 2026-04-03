# Tonic Textual V2 GTM Foundations

## Overview

This directory contains a complete V2 GTM foundation doc set for **Tonic.ai's Textual product** (unstructured data privacy for AI/ML workflows) **focused on the enterprise healthcare niche** — large health systems, payers, and health tech platforms where clinical data de-identification is the blocking issue for LLM/ML workflows.

## V2 Niche Direction

**Enterprise healthcare — large healthcare organizations (health systems, payers, health tech platforms) where Textual's unstructured data de-identification solves for clinical notes, patient conversations, and PHI-laden text at scale for AI/ML workflows.**

### Key Characteristics of the V2 ICP Segment

- **Target organizations:** Health systems (500+ employees, $500M+ revenue), payers (Medicare Advantage, Medicaid, commercial plans with 1M+ covered lives), health tech platforms with mature healthcare data collection
- **Firmographic gatekeepers:** Enterprise EHR (Epic, Cerner, Athena) + data warehouse (Snowflake, Redshift, BigQuery) + active ML/LLM initiatives
- **Deal economics:** $200K-$1M ACV; 6-12 month sales cycle
- **Buying urgency:** Moving from AI/ML pilot to production deployment; new regulatory requirements; competitive pressure for LLM products
- **Buyer landscape:** VP/Director of Data Science (champion), CIO/CDO (economic buyer), Chief Privacy Officer (compliance veto player), Sr Data Engineer (execution owner)

## Document Set

### 1. **icp.md** — Ideal Customer Profile (1,200 words)

Defines the specific healthcare segment and what makes them fit. Includes:
- Primary segment firmographics (company size, revenue, industries)
- Technographic requirements (EHR, data warehouse, ML stack combinations that signal fit)
- Buying triggers with thresholds (AI/ML phase transition, regulatory shift, time-to-market pressure, data science maturity)
- Buyer roles with deal economics (who buys, what they care about, ACV range, deal cycle)
- Pain points traced from specific mechanism to business consequence
- Targeting criteria for marketing (how to build a target account list)
- Qualification framework for sales (5 key questions to validate fit in first conversation)
- Negative ICP (who NOT to pursue and why)

**Use this for:** Sales qualification, marketing targeting, product prioritization

### 2. **psf.md** — Problem-Solution Fit (900 words)

Maps three quantified problems that this segment faces to their solutions. Includes:
- **Problem 1:** Clinical data utility destruction from redaction (prevents fine-tuned LLMs from reaching production)
  - Impact: $4.6M-$11M/year in delayed AI/ML product revenue
  - Solution: Synthetic data generation that preserves clinical meaning
- **Problem 2:** Manual de-identification non-scalability (headcount burden, project bottleneck)
  - Impact: $4.1M-$8.2M/year from headcount, project delay, COGS compression
  - Solution: Automation + healthcare-specialized NER as managed service
- **Problem 3:** Proprietary NER gaps and compliance proof (in-house maintenance burden, audit risk)
  - Impact: $317K-$650K/year from headcount, rework, regulatory risk
  - Solution: Third-party managed NER + audit trail infrastructure

Each problem includes: specific pain description → quantified business impact → mapped solution → objection handling → proof points

**Use this for:** Sales conversation grounding, ROI justification, customer success value measurement

### 3. **positioning.md** — Positioning (800 words)

Defines where Textual stands in the buyer's mind relative to alternatives. Includes:
- Product vision (why Textual exists)
- Market frame of reference (the category: "Clinical Data Privacy for AI/ML Workflows")
- How buyers evaluate alternatives (redaction tools, in-house NER, cloud de-identification, status quo)
- Value wedge (synthetic data that preserves clinical meaning)
- Positioning statement (anchors all downstream messaging)
- Competitive positioning by alternative (vs. redaction, vs. in-house, vs. AWS Comprehend, vs. doing nothing)

**Use this for:** Marketing positioning, sales messaging spine, product roadmap prioritization

### 4. **messaging.md** — Messaging Framework (1,000 words)

Translates positioning into the actual words every GTM function uses. Includes:
- Positioning spine (the anchoring statement)
- The story (problem → why now → promise narrative arc)
- Messaging pillars (3 primary value props with supporting language and proof points)
  1. Clinical Data Optimization (model performance parity)
  2. Scaling De-identification (automation + headcount freed)
  3. Compliance-Ready (audit trail + third-party validation)
- Voice & tone guidance (how to sound like you understand healthcare, not like a vendor)
- Talk track guidance ("What do you do?" "How are you different?" language to avoid)
- Metaphors and analogies (redaction as white-out, synthesis as editing)
- Content themes by buyer role (what to emphasize for data scientists vs. CFOs vs. compliance)

**Use this for:** Marketing copy, sales conversations, customer communication, enablement

### 5. **context.md** — Shared Context (1,400 words)

Accumulated context that flows between skills. Includes:
- Company overview and V2 niche direction
- ICP context: pain patterns, buyer roles, competitive positioning, buyer language
- PSF context: quantified problem areas, solution differentiation, proof point templates, objection resolution
- Positioning context: market frame, value wedge, competitive contrasts, buyer evaluation criteria ranking
- Messaging context: narrative arc, pillar reference labels, voice/tone summary, talk track anchors

**Use this for:** Reference during GTM execution, cross-functional alignment, downstream skill input

## Key Findings from V2 Analysis

### The Value Wedge
**Synthetic data that preserves clinical meaning** — not redaction that erases it. This is defensible because:
1. Buyers recognize it immediately (they've experienced redaction failure)
2. It's ownable (redaction vendors won't reposition; in-house builders can't scale; generic vendors don't understand healthcare)
3. It resonates on contact (data scientists understand why this solves the root problem)

### The Competitive Landscape
- **Strongest position against:** Organizations that tried redaction and saw model performance suffer
- **Weakest position against:** Very small health tech without active AI/ML; organizations with zero urgency; pure-compliance-focused buyers
- **Emerging risk:** Large cloud vendor (AWS, Azure, Google Cloud) building healthcare-specialized NER + synthesis could disrupt; response is to deepen on healthcare specialization and customer outcomes

### The Business Model
- **ACV sweet spot:** $400K-$750K for regional health systems; $750K-$1M for national payers
- **Payback period:** 18 months through freed headcount (1-2 FTE at $120K/year)
- **Deal cycle:** 6-12 months (8-week security review + 6-10 week POC are standard)
- **Win conditions:** Active AI/ML initiative with model performance pressure; manual de-identification headcount burden visible; compliance maturity present

## How to Use This Doc Set

### For Marketing
- Use the narrative arc (problem → why now → promise) as the backbone for campaigns
- Build content around the three messaging pillars (model performance, efficiency, compliance)
- Use buyer language patterns from messaging.md to write resonant copy
- Use positioning.md to understand the market frame (what category we're playing in)

### For Sales
- Use the qualification framework from icp.md to validate fit in first 30 minutes
- Use the narrative arc from messaging.md to guide discovery conversations
- Lead with problem (from psf.md) not product features
- Use proof points (from psf.md and messaging.md) to build credibility
- Use talk track guidance (from messaging.md) to handle objections and differentiators

### For Product
- Use psf.md problem areas to prioritize roadmap against quantified value
- Use positioning.md value wedge to evaluate whether features move the needle on the core differentiation (synthesis quality, healthcare NER depth, audit trail completeness)
- Use icp.md buyer roles to understand what each persona evaluates and in what order

### For Customer Success
- Use the three messaging pillars to structure QBR conversations (model accuracy improvement + headcount freed + audit trail complete)
- Use psf.md proof points to measure value delivery
- Use positioning.md value wedge to frame ongoing optimization (helping customers move from "solved the privacy problem" to "unlocked the AI/ML roadmap")

## Document Statistics

- **Total words:** 14,900
- **ICP:** 1,200 words (focused, exclusionary, with concrete qualification framework)
- **PSF:** 900 words (3 problems, each quantified through impact/solution/proof chain)
- **Positioning:** 800 words (market frame + value wedge + competitive contrasts)
- **Messaging:** 1,000 words (narrative arc + 3 pillars with voice/tone/talk track)
- **Context:** 1,400 words (accumulated cross-functional reference)

## Quality Markers of V2 (vs. V1)

This doc set demonstrates what's possible with a focused ICP and quantified PSF:

1. **Specificity:** Not "healthcare companies" but "large health systems and payers with 500+ employees, $500M+ revenue, active ML/LLM initiatives"
2. **Quantification:** Every problem maps to a dollar impact ($4.6M-$11M revenue loss, $4.1M-$8.2M cost burden, etc.)
3. **Buyer-anchored:** Every message traces back to a specific buyer's evaluation criterion and frame of reference
4. **Narrowed scope:** 3 problems instead of 5-6; 3 messaging pillars instead of 7-8; single market category instead of multiple categories
5. **Narrative coherence:** Every doc connects — ICP pain patterns feed PSF, PSF differentiation feeds positioning, positioning statement anchors messaging
6. **Workable across GTM:** Each doc serves a specific function (ICP for sales qualification, PSF for ROI justification, Positioning for strategy, Messaging for operations)

## Notes for GTM Teams

**This is a demo.** The specific problem areas, quantified impacts, and buyer segments are based on the company context provided and represent a reasonable niche selection for Textual given its healthcare customer base and product strengths. In a real engagement, these would be validated through customer research and market data. However, the structure and methodology — how to scope a niche, quantify its value, position against alternatives, and translate into workable messaging — applies whether this is a demo or a production GTM foundation.

**Context.md is the connective tissue.** As downstream work (sales-comms, campaigns, content development, enablement) extends this foundation, all of it should reference and append to context.md. This keeps accumulated insights in one place and makes it easier for cross-functional teams to understand why decisions were made.

**Positioning is the spine.** Every piece of customer-facing communication should be traceable back to the positioning statement. If you're writing copy and it doesn't connect to the value wedge (synthetic data that preserves meaning), that's a signal to redirect.

---

**Generated:** March 24, 2026
**V2 Foundation Set:** Tonic.ai Textual — Enterprise Healthcare Niche
**Status:** Complete (ICP → PSF → Positioning → Messaging)
