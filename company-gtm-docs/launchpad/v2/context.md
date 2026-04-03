# GTM Foundations — Shared Context

## Company Overview
LaunchPad is a campaign orchestration platform for B2B marketing teams. It sits above the existing martech stack (Marketo/HubSpot Enterprise + Salesforce + ad platforms) as a unified orchestration layer — not replacing tools but coordinating campaign execution, audience syncing, UTM management, and cross-tool attribution across them.

## ICP Context (added by ICP skill)

### Pain Patterns (for PSF to quantify and map to solutions)
**Pain areas to quantify in PSF:**
- Campaign coordination delays: measure time lost per quarter to manual handoffs, audience sync delays, UTM verification; express as % of marketing ops capacity and revenue impact of missed campaign windows
- Siloed campaign data: quantify hours spent manually building campaign ROI reports; connect to CFO conversations about marketing spend justification; measure discrepancy between marketing's claimed pipeline impact and finance's ability to verify
- UTM/audience sync manual work: hours per campaign, cost per hour of ops time, impact of incorrect UTMs on attribution accuracy (lost revenue visibility)
- Campaign velocity constraint: number of campaigns delayed or deprioritized due to ops capacity; revenue impact of slower go-to-market on new products; comparison: hiring ops headcount vs. LaunchPad investment

**Buyer outcomes by role:**
- VP of Marketing: campaign velocity improvement (campaigns launched faster), team efficiency (ops person able to manage 3x campaign volume), ability to prove marketing ROI to CFO, reduced hiring pressure
- Director of Demand Gen: campaign execution speed, visibility into what's coordinated vs. pending, ability to parallel-manage multiple campaigns without Salesforce sync bottleneck
- Marketing Operations Manager: hours saved on manual coordination, integration reliability (Marketo-to-Salesforce sync confidence), ability to scale without adding tasks

**Initial estimates for PSF validation:**
- Assume 25-30% of marketing ops time spent on manual orchestration work (UTM building, audience sync verification, campaign coordination); with 1-2 FTE ops per company at $120K-$150K loaded cost, that's $30K-$45K annually
- Campaign delay cost: if each delayed campaign loses 1 week of performance window (e.g., seasonal demand gen window), assume 2-3 delays per year × average campaign ACV impact; rough order: $50K-$250K revenue impact per incident
- Quantify CFO pressure: "cannot defend marketing spend" = finance applying increased scrutiny to marketing budget (may reduce allocation by 5-15% in absence of proof); cost of that shrinkage justifies orchestration investment

### Competitive & Market Context (for Positioning)
**Competitors and alternatives:**
- Direct: HubSpot built-in workflows and campaigns (for prospects considering consolidation into HubSpot)
- Alternative/adjacent: Monday.com for marketing operations (feature-poor orchestration but lower friction); Zapier/Integromat for DIY automation (lower cost but high ops burden)
- Adjacent category confusion: prospects may initially think "marketing automation platform" and compare to Marketo/HubSpot, or "analytics platform" and compare to Amplitude/Mixpanel; positioning must clarify LaunchPad is the orchestration *layer above* tools, not a replacement

**Win/lose signals:**
- **Win against:** HubSpot (enterprises choose LaunchPad because they're Salesforce/Marketo-locked in and value the unified orchestration vs. Salesforce/Marketo's native limitations); Zapier DIY (customers tired of managing integration logic themselves)
- **Lose to:** HubSpot consolidation play (customer decides to simplify stack rather than add another tool); Salesforce Flow/Marketo Journey Orchestration (customer invests in native platform capabilities vs. third-party; usually happens after pilot fails to show ROI in short POC window)

**Adjacent categories to clarify against:**
- MarTech platform (e.g., Pardot, HubSpot) — LaunchPad is not a CRM or automation tool, it's the orchestration layer connecting them
- Analytics consolidation (e.g., CDP like Segment) — LaunchPad orchestrates; Segment ingests data; different use cases but may appear similar to prospects
- Workflow automation (e.g., Zapier) — LaunchPad is marketing-specific orchestration with pre-built campaign intelligence; Zapier is general-purpose; cost/speed/reliability different enough to position against clearly

**"Why us vs. them" summary:**
- vs. HubSpot native: LaunchPad's value is highest for customers already locked into Salesforce/Marketo Enterprise; positions as "unified orchestration for existing stack" not "simplified single tool"
- vs. Zapier DIY: "Managed orchestration with campaign-specific intelligence (audience matching, UTM consistency, budget optimization)" vs. "rules engine that requires custom logic"
- vs. Monday.com: "Purpose-built for B2B demand gen complexity (audience sync, UTM, revenue attribution)" vs. "general project management tool adapted to marketing"

### Buyer Language & Framing (for Messaging)
**How buyers in enterprise SaaS talk about this problem:**
- "Campaign chaos" / "tool sprawl" — frustration with fragmented systems
- "Orchestration nightmare" / "campaign coordination bottleneck" — ops person as constraint
- "Can't prove campaign ROI" / "reporting is a black hole" — finance pushing back on spend
- "Audience sync is manual and unreliable" — technical friction surfaced by ops teams
- "We're outgrowing our process" — team growth creating coordination pressure

**Content themes to map to this segment:**
- How enterprise SaaS teams manage multi-tool stacks (industry-specific: data/cloud/fintech companies running complex demand programs)
- Campaign ROI measurement across Salesforce/Marketo/Ads ecosystem (speak to CFO/board conversation pressure)
- Scaling campaign velocity without hiring (positioning orchestration as force multiplier for ops team)
- Audience sync best practices and common mistakes (technical credibility with ops buyers)
- Case studies: before/after time savings on ops tasks; before/after campaign launch velocity

**Buyer motivation framing (what they care about in their own words):**
- VP of Marketing: "I need my ops team to move faster" / "I want to prove marketing's impact on pipeline" / "I can't hire another ops person" / "I need visibility into what's actually driving revenue"
- Demand Gen Director: "Campaigns take too long to launch" / "I spend time waiting for ops instead of optimizing campaigns" / "I need to see campaign performance in real time"
- Ops Manager: "I'm managing spreadsheets for something that should be automated" / "Syncing audiences between Marketo and Salesforce is fragile" / "I need a day off"

**Tone and voice signals:**
- Professional, operations-focused; speaks to marketing leaders frustrated with tools, not excited about technology
- Candid about pain ("manual orchestration doesn't scale") without being condescending
- Evidence-based (show time/cost savings, campaign velocity improvements) not aspirational ("imagine a unified world")
- B2B SaaS-specific language and examples (references to Marketo, Salesforce, Demand Gen budgets) not generic martech talk

**Positioning lever:**
"LaunchPad is the orchestration layer for your fragmented martech stack. It gives you the speed of a single-tool setup with the flexibility of an enterprise multi-tool environment."

## PSF Context (added by PSF skill)

### For Positioning

**Solution differentiation angles:**
- vs. Marketo/Salesforce native orchestration: "[Native platforms] handle single-system orchestration; LaunchPad orchestrates across Marketo + Salesforce + ad platforms simultaneously—the coordination layer they were never designed for. Enterprises invested in Salesforce/Marketo are locked into those systems; LaunchPad multiplies their value instead of forcing expensive rip-and-replace to HubSpot or Pardot."
- vs. Zapier DIY: "[Zapier] requires engineering time to build and maintain integration logic; campaigns break when schemas change. LaunchPad pre-builds marketing-specific orchestration (audience sync, UTM validation, budget coordination) so ops teams focus on optimization instead of maintenance. Pre-built intelligence (UTM consistency, audience overlap detection) prevents mistakes Zapier would require custom logic to solve."
- vs. BI/analytics tools: "[Analytics platforms] report on what happened after the fact; LaunchPad prevents coordination failures before they happen. Real-time campaign orchestration visibility that feeds your Looker/Tableau dashboards, not a replacement for them."

**Problem areas ranked by strength of right-to-win:**
1. **Strongest:** Problem 1 (Campaign Coordination Chaos) — LaunchPad has clear orchestration templates and automation that directly address this. High ICP alignment (12+ campaigns triggers the pain). Marketo/Salesforce have no comparable capability. Right-to-win is highest because problem is most acute for Marketo/Salesforce-locked customers and solution is most differentiated.
2. **Strong:** Problem 3 (Manual UTM + Audience Sync) — LaunchPad's unified orchestration workflow directly automates these highest-friction tasks. Clear win against DIY Zapier (maintenance burden) and manual processes. Ops teams see immediate time value. Right-to-win is strong in orchestration and ease-of-use.
3. **Strong:** Problem 4 (Campaign Velocity / Headcount vs. Tooling) — LaunchPad's force-multiplier value proposition is clear; economics favor orchestration over headcount. CFO/economic buyer alignment is high. Challenge: Customers might still choose hiring if budget allows; right-to-win depends on headcount constraint conversation.
4. **Good:** Problem 2 (Siloed Data / Campaign ROI) — LaunchPad's attribution and cross-platform data consolidation is valuable, but Salesforce Einstein Analytics and custom BI (Looker/Tableau) provide partial solutions. Right-to-win is good if LaunchPad's real-time, campaign-specific ROI dashboard proves superior to quarterly manual reporting or Einstein's opportunity-focused approach. Requires strong POC proof of superior attribution.

**Win/lose scenarios by problem area:**
- Win Problem 1 + Lose Problem 2: Customer cares most about ops efficiency and campaign launch speed; less focused on CFO/attribution story. Common win pattern: Demand Gen Director drives adoption; VP Marketing sponsors. Lower ACV risk but good land position for expansion.
- Win Problems 1 + 3 + Lose Problem 4: Customer has op headcount available; not motivated by headcount replacement story. Focus on coordination/speed value; economic buyer (VP + CFO) buys on operational velocity gain, not headcount savings. Still strong deal if coordination chaos is acute.
- Win Problem 2 + Lose Problem 1: Customer's pain is primarily CFO visibility and marketing ROI proof; orchestration coordination is secondary. Less common entry pattern but high economic buyer alignment. VP and CFO sponsor; Demand Gen Director is less engaged. High ACV risk if ops team doesn't see direct benefit.
- Lose to HubSpot: Customer decides to simplify stack by consolidating into HubSpot Enterprise; chooses to abandon Salesforce/Marketo. LaunchPad's value proposition (orchestrate existing stack) evaporates. Defend by emphasizing Salesforce/Marketo lock-in costs and LaunchPad's faster time-to-value vs. migration.
- Lose to Salesforce Flow / Marketo Journey Orchestrator: Customer invests in native platform capabilities (8-12 week build effort). Typically happens when LaunchPad POC timeline is tight (<30 days) and customer prefers to stay within platform. Defend by shortening POC to 2-3 weeks (focus on Problem 1: launch 2 live campaigns, measure coordination time savings) and emphasizing cross-platform limitations of native tools.

**Objections that reveal positioning opportunities:**
- "We built our own Zapier workflows—why not just maintain those?" → Positioning opportunity: frame as "managed orchestration + built-in intelligence you'd have to custom-code in Zapier." Lead with time-to-value story (Zapier build takes 6-8 weeks; LaunchPad live in 2 weeks) and maintenance cost (Zapier breaks with schema changes; LaunchPad updates automatically).
- "Salesforce/Marketo should handle this natively." → Positioning opportunity: "They do single-system orchestration excellently; LaunchPad is the above-stack visibility when you're orchestrating across 4+ systems." Emphasize that staying in single platform means abandoning proven tools (Salesforce, LinkedIn, Google Ads). LaunchPad keeps them all.
- "We don't have budget for another tool; we need to hire ops." → Positioning opportunity: "What if you didn't have to choose? LaunchPad costs half what ops headcount costs and goes live in weeks instead of months. It's the economics argument—TCO of tooling vs. headcount."
- "Attribution is too complex for a third-party tool; we need custom logic." → Positioning opportunity: "Which campaigns drive revenue is a straightforward question; LaunchPad answers it across your existing systems without custom integration. You configure campaign-to-opportunity rules once; LaunchPad applies them daily. Your BI team builds on top of our data layer."

### For Messaging

**Quantified impact data per problem area:**

| Problem | Time Savings | Cost Savings | Pipeline/Revenue Impact |
|---------|--------------|--------------|------------------------|
| **Campaign Coordination Chaos** | 60 hours/quarter freed (25-30% of ops time) | $60K/year in ops time recovered; $400K/year in misdirected ad spend prevented | $200K-$900K/year from eliminated launch delays |
| **Siloed Data / Campaign ROI** | 15-20 hours/month (180-240 hours/year) eliminated from manual ROI reporting | $18K/year reporting cost saved; $200K-$500K/year from finance budget protection (prevented 10-15% marketing budget cuts) | $100K-$500K from real-time campaign reallocation (shifting budget to high performers mid-cycle) |
| **Manual UTM + Audience Sync** | 4-5 hours/campaign × 15 campaigns = 60-75 hours/year on setup + 2-3 day queue elimination | $4.5K-$5.6K direct ops time; $100K-$300K from attribution error remediation prevented | $525K-$750K from eliminated launch delays (7% of engagement window preserved per campaign) |
| **Campaign Velocity / Headcount** | N/A (time savings captured in Problems 1-3) | $200K annual ops headcount replaced by $112.5K LaunchPad investment (net $87.5K saving) | $6M-$15M from accelerated go-to-market velocity (3x campaign volume with existing ops team) |

**Pain → consequence chains with buyer language:**
- **Ops Manager language:** "I'm managing spreadsheets for something that should be automated" → "Syncing audiences between Marketo and Salesforce is fragile" → "We missed a campaign deadline last month because I was reconciling UTM codes" → "I need a day off." **Resolution:** LaunchPad automates UTM/sync so ops manager focuses on optimization and velocity.

- **Demand Gen Director language:** "Campaigns take too long to launch" → "I spend time waiting for ops instead of optimizing campaigns" → "We can't test creative variations fast enough because launch cycle is 5 days" → "I need visibility into what's actually constraining velocity." **Resolution:** LaunchPad launch checklist shows which blocking items prevent launch; ops unblocks faster; campaigns launch in 1 day instead of 5.

- **VP of Marketing language:** "I need my ops team to move faster" → "I can't hire another ops person because headcount is frozen" → "I want to prove marketing's impact on pipeline to the board" → "I can't tell finance which campaigns drive efficiency because our ROI reporting is manual and late." **Resolution:** LaunchPad multiplies existing ops team capacity AND provides daily ROI dashboards CFO trusts.

- **CFO language:** "Is the $2M marketing budget working?" → "I see marketing spend but not ROI attribution" → "VP claims campaigns are driving pipeline but I can't verify it with Salesforce data" → "Marketing wants to grow budget but can't prove efficiency yet." **Resolution:** LaunchPad connects campaign spend to pipeline outcomes; finance can approve marketing budget growth with confidence.

**Before/after transformation framing per problem area:**

1. **Campaign Coordination:** Before: Ops person manages 8 campaigns, coordination breaks at 12, scaling requires hiring. After: Same ops person confidently manages 20+ campaigns with orchestration templates, automated sync, and monitoring alerts preventing coordination failures.

2. **Campaign ROI:** Before: VP spends 20 hours monthly building manual ROI reports that finance doesn't trust; finance cuts marketing budget due to lack of visibility. After: Daily automated campaign ROI dashboards updated automatically from Marketo/Salesforce/ad platforms; finance can approve budget increases because data is trustworthy and timely.

3. **UTM and Sync:** Before: Campaign launch is a 5-day process (setup + UTM verification + queue + audience sync + launch validation); 5-10% of campaigns have UTM errors discovered post-launch; attribution reporting is unreliable. After: Campaign launch is 1 day (setup in LaunchPad + automatic sync + pre-validated UTM codes); zero UTM errors because naming is formula-based.

4. **Campaign Velocity:** Before: Go-to-market velocity constrained by ops headcount; scaling from 8 to 15 campaigns requires hiring; company slower to market than competitors. After: Same ops team supports 20+ campaigns; company launches new products and campaigns faster than competitors; no incremental headcount cost.

**Story arc for strongest problem area (Problem 1: Campaign Coordination Chaos):**

**Situation:** Enterprise SaaS company with $100M ARR runs 12 concurrent campaigns annually (product launch, seasonal demand, event nurtures, ABM). Marketing stack: Marketo Enterprise, Salesforce CRM, LinkedIn and Google Ads. 1.5 FTE ops team.

**Pain:** Coordinating audience sync, UTM building, and Salesforce sync across campaigns is manual. Ops person spends 20+ hours/week on coordination. Two weeks ago, a major product launch campaign went live with overlapping audience (30% of contacts already in nurture campaign) and inconsistent UTMs across LinkedIn and Google Ads. Result: wasted $80K in ad spend targeting duplicates, UTM errors meant attribution showed "direct" traffic instead of campaign name.

**Consequence:** VP of Marketing told CFO campaigns are generating pipeline but can't prove it. Finance questions whether the 15 campaigns are efficient; skepticism about future marketing budget. Ops person is bottleneck; campaign launches slip 2-3 days while waiting for ops to coordinate. VP considers hiring a second ops person ($200K annually) to fix it.

**Solution intro:** "What if your ops team could coordinate 20+ campaigns with zero manual handoffs?"

**Solution evidence:** [Customer in ICP segment, data infrastructure company, $150M ARR] had same challenge: campaigns queued for ops person; coordination failures meant overlapping audiences and UTM errors monthly. Implemented LaunchPad in 3 weeks. Day 1 live: orchestration templates eliminated need to rebuild coordination workflow per campaign. Week 1 in: automated Marketo-to-Salesforce audience sync and UTM validation prevented a campaign overlap (would have cost $120K in wasted spend). Month 1: ops team launched 5 campaigns with zero coordination failures.

**Proof/quantification:** Ops team time on coordination dropped from 20 hours/week to 4 hours/week (managing LaunchPad orchestration vs. building it manually). Freed 60+ hours/quarter for optimization and process improvement. Campaign launch velocity improved 70% (5 days → 1.5 days). Zero attribution errors in past 6 months vs. average 2-3 per year before. VP of Marketing now shows CFO daily campaign ROI dashboards (LaunchPad feeds this data); CFO approved 15% marketing budget increase for next fiscal year.

**Buyer language patterns:**
- Ops managers say: "campaign chaos," "I'm the bottleneck," "we need orchestration," "one person can't manage this at scale," "spreadsheets for something that should be automated"
- Demand Gen directors say: "campaigns take too long to launch," "ops is the constraint," "we need faster velocity," "I want to test more variations but setup is the blocker"
- VP of Marketing says: "I need visibility into what's working," "I can't prove marketing's impact," "I want to scale velocity without hiring," "campaigns are too slow," "finance doesn't trust our ROI claims"
- CFO says: "I need to see how marketing spend translates to pipeline," "is that $2M working?", "marketing wants more budget but can't prove efficiency"

## Positioning Context (added by Positioning skill)

### For Messaging

**Market category and frame of reference:**
LaunchPad is positioned in the "campaign orchestration platform" category — not marketing automation (which puts it against Marketo/HubSpot), not workflow automation (which puts it against Zapier), and not analytics (which puts it against BI tools). The "campaign orchestration" frame activates the buyer's real evaluation criteria: cross-system coordination, reduced manual handoffs, and unified campaign visibility. Messaging should always introduce LaunchPad in context of the buyer's multi-tool stack problem, not as a standalone product capability. The frame implies LaunchPad sits above existing tools — Messaging should reinforce this "layer above" positioning consistently.

**Value wedge in buyer language:**
The core differentiating advantage is the above-stack orchestration position — LaunchPad is the only option that makes the existing martech stack (Marketo + Salesforce + ad platforms) work as a coordinated system without replacing any of it. In buyer language: "It sits on top of everything we already have and handles the coordination automatically — we didn't have to rip out anything or hire anyone." Messaging should lead with this "preserve your investment, eliminate the coordination tax" framing. The wedge resonates because it validates the buyer's past tool choices rather than questioning them.

**Competitive contrast themes:**
Messaging should weave these three narrative contrasts into communications:
1. "Coordination layer vs. single-system orchestration" — Native platform tools (Salesforce Flow, Marketo Journey Orchestrator) work within one system; LaunchPad coordinates across all of them. The contrast is scope of visibility, not feature depth.
2. "Campaign-intelligent orchestration vs. general-purpose automation" — Zapier moves data between systems; LaunchPad understands campaigns (audience overlap, UTM validation, launch readiness). The contrast is intelligence, not connectivity.
3. "Orchestrate the stack vs. replace the stack" — HubSpot consolidation eliminates complexity by eliminating tools; LaunchPad eliminates complexity while preserving enterprise investments. The contrast is approach philosophy, not capability.

**Positioning statement as messaging spine:**
"For VP of Marketing and demand gen leaders at enterprise SaaS companies running 12+ campaigns across Marketo, Salesforce, and paid channels — LaunchPad is the campaign orchestration platform that coordinates the entire stack as one system, preserving existing tool investments while eliminating the coordination tax that scales with campaign volume." Messaging should not quote this directly but should use it as the throughline: every piece of content should connect back to "coordination tax" as the problem and "above-stack orchestration" as the resolution. The statement anchors three messaging threads — operational (coordination chaos), economic (cost of manual orchestration vs. tooling), and strategic (campaign velocity without headcount growth).

**Buyer evaluation criteria ranked:**
1. **Cross-system coordination capability** — Does this actually orchestrate across Marketo, Salesforce, and ad platforms simultaneously? This is the first and most decisive criterion. Messaging should lead here.
2. **Time-to-value and implementation simplicity** — How fast can we go live without disrupting existing workflows? Buyers have been burned by 8-12 week native orchestration builds that failed. Messaging should emphasize 2-4 week go-live.
3. **Ops team capacity multiplier** — Will this let my existing team handle 2-3x the campaign volume? The VP and CFO evaluate this as the economic justification. Messaging should frame as force multiplier, not replacement.
4. **Attribution and ROI visibility** — Can I finally prove to finance which campaigns drive pipeline? Important but secondary to coordination — buyers solve the operational pain first, then realize the attribution benefit. Messaging should position as a consequence of orchestration, not a standalone promise.

**Evidence anchors for credibility:**
- Ops time recovery: 25-30% of ops capacity freed from manual coordination (drops to 5-8% with LaunchPad)
- Campaign launch velocity: 5-day launch cycle compressed to 1 day
- Campaign capacity per ops FTE: from 6-8 campaigns to 20+ without additional headcount
- Economic comparison: LaunchPad at $75K-$150K/year vs. ops hire at $200K loaded cost — half the cost, 3-4x the capacity multiplier
- Coordination failure prevention: audience overlap detection, UTM validation, and sync monitoring that prevent the $80K-$400K misdirected spend incidents buyers have experienced
- Go-live timeline: 2-4 weeks vs. 8-12 weeks for native platform orchestration builds that often fail

**"Where we don't win" guidance:**
- Buyers considering full stack consolidation into HubSpot (abandoning Salesforce/Marketo) — LaunchPad's value proposition depends on the multi-tool stack existing. Messaging should steer toward the cost and risk of migration, not argue against simplification as a principle.
- Buyers with very low campaign volume (<10 concurrent annually) — coordination pain is manageable manually at this scale. Messaging should not over-promise value for teams that haven't hit the complexity threshold.
- Buyers who've already invested heavily in Salesforce Flow/Marketo Journey Orchestrator native builds and are seeing acceptable results within a single system — LaunchPad's cross-system advantage matters less if the buyer's pain is primarily within one platform. Messaging should probe for cross-system pain before leading with the orchestration story.
- Short POC windows (<30 days) where the buyer wants attribution proof before committing — LaunchPad's strongest quick-win is coordination/velocity (Problems 1 and 3), not attribution (Problem 2). Messaging should set POC expectations around coordination time savings, not full attribution visibility.

## Messaging Context (added by Messaging skill)
- **Narrative arc summary:** Problem: You're running 15+ campaigns across Marketo, Salesforce, and ad platforms, and one ops person can't coordinate the manual syncing, UTM building, and cross-platform handoffs — campaigns launch late, audiences overlap, and finance can't see which campaigns drive pipeline. Why now: Funding mandate to scale pipeline without adding headcount; campaign volume is growing regardless; native tools and Zapier have been tried and failed at this scale. Promise: Ops team manages 20+ campaigns with same headcount; campaigns launch in 1 day instead of 5; CFO gets daily ROI dashboards; existing tool investments are preserved.
- **Messaging pillars:** (1) "Above-Stack Coordination" — Your tools are powerful; the coordination between them is manual. (2) "Campaign Velocity Without Headcount" — Scale from 8 campaigns to 20 without hiring. (3) "Campaign ROI Visibility" — Prove to finance which campaigns drive pipeline.
- **Voice & tone summary:** Operationally candid (name the spreadsheet pain), specific about scale (12+ campaigns is where it breaks), economically grounded (half the cost of a hire, 3-4x capacity), stack-respectful (validate past tool choices, never question them). Key buyer language: "campaign chaos," "I'm the bottleneck," "can't prove ROI," "spreadsheets for something that should be automated."
- **Talk track anchors:** "What do you do?" → Enterprise teams end up with great tools that nobody coordinates between → LaunchPad is the orchestration layer above all of them → customers go from 8 campaigns at capacity to 20+ with the same team. "How are you different?" → Lead with where the coordination problem lives: native tools work within one system, Zapier connects without campaign intelligence, HubSpot means ripping out your stack — we're the above-stack layer purpose-built for cross-system coordination.
