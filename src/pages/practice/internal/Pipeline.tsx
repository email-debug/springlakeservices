const STAGES = [
  {
    n: 1,
    title: 'Intake',
    duration: '1–2 weeks',
    owner: 'Eric (lead) + Tim',
    goal: 'Decide whether to engage. Gather what they have. Set expectations.',
    activities: [
      'Discovery call — capture company, stage, raise, team, regulatory pathway, IP, key risks',
      'Send Intake Questionnaire',
      'Receive artifacts; index in client folder',
      'Run automated triage (deck review, data room audit) before human read',
      'Internal go/no-go conversation',
    ],
    deliverables: ['Intake summary memo (1pp)', 'Initial automated artifact triage'],
    aiLeverage: 'Deck review 90min → 5min; data room scan 60min → 5min; founder background 30min → 5min.',
    compliance: 'Confirm client expectations align with non-BD scope before engaging. No success-fee promises carried over.',
  },
  {
    n: 2,
    title: 'Assessment',
    duration: '1–2 weeks',
    owner: 'Eric + Tim',
    goal: 'Diagnose readiness. Identify gaps. Propose scope, timeline, fee.',
    activities: [
      'Tier the client (A first-raise / B bridge / C follow-on)',
      'Readiness scorecard: 12 dimensions, 1–5 each',
      'Gap analysis memo for any dimension <4',
      'Eric\'s investor-eye review',
      'Plan & fee proposal',
    ],
    deliverables: ['Readiness scorecard', 'Gap analysis memo', 'Investor-eye review (1pp)', 'Engagement proposal'],
    aiLeverage: 'Scorecard scoring 4hr → 30min; gap analysis writeup 2hr → 20min; comp set 4hr → 20min. Eric still owns the investor-eye review.',
    compliance: 'All work product is for the issuer. No investor contact this stage.',
  },
  {
    n: 3,
    title: 'Engagement',
    duration: '~1 week',
    owner: 'Eric + Tim',
    goal: 'Sign the contract. Set up working infrastructure. Kick off.',
    activities: [
      'Final engagement letter (counsel review on first 3–5 deals)',
      'Sign and counter-sign; effective date logged',
      'Compliance file open; 6-year record retention starts',
      'Workspace + data room shell',
      'Kick-off meeting; weekly cadence locked',
    ],
    deliverables: ['Signed engagement letter', 'Project workspace', 'Kick-off briefing notes', 'Weekly status template'],
    aiLeverage: 'Engagement letter drafting 90min → 10min; workspace scaffolding 30min → 1min.',
    compliance: 'CRITICAL stage. Letter contains all disclaimers, carve-outs, non-contingent fees, no-tail clause.',
  },
  {
    n: 4,
    title: 'Preparation',
    duration: '4–8 weeks',
    owner: 'Tim (production) + Eric (judgment) + Crystal',
    goal: 'Build every artifact a client needs to walk in looking like they already raised.',
    activities: [
      'Workstream A: Deck, exec summary, one-pager',
      'Workstream B: Operating model, pro forma, cap table cleanup',
      'Workstream C: Market sizing, competitive, investment market',
      'Workstream D: Regulatory pathway, IP overview',
      'Workstream E: Data room build & audit',
      'Workstream F: Q&A bank build & drill',
    ],
    deliverables: ['Full materials package: deck, exec summary, one-pager, model, pro forma, cap table, market memos, regulatory summary, IP overview, populated data room, Q&A bank'],
    aiLeverage: 'Aggregate ~150 hours of authoring drops to ~20 hours. The senior advisor moves from authoring to judging.',
    compliance: 'Materials are work product for the issuer. Investor-facing footer disclaimer on shared deliverables.',
  },
  {
    n: 5,
    title: 'Investor Targeting',
    duration: '1–2 weeks',
    owner: 'Eric (judgment) + Tim (research)',
    goal: 'Build a tiered, thesis-matched target list. Coach the founder to own the outreach.',
    activities: [
      'Universe definition; thesis match',
      'Tier 1 (10–15) full dossiers; Tier 2 (25–40); Tier 3 (50+)',
      'Outreach plan & message templates (founder uses)',
      'Mock pitches with founder',
    ],
    deliverables: ['Tiered investor list', 'Tier-1 dossiers', 'Outreach plan & coaching notes'],
    aiLeverage: 'Thesis match 8hr → 30min; per-Tier-1 dossier 90min → 10min; comparable rounds research 4hr → 20min.',
    compliance: 'HIGH RISK. We research; founder contacts. We do not email investors. Intros are non-transactional and disclosed.',
  },
  {
    n: 6,
    title: 'Outreach & Meetings',
    duration: '3–6 months',
    owner: 'Founder (runs meetings) + Eric + Tim',
    goal: 'Get the founder into investor meetings. Iterate based on real feedback.',
    activities: [
      'Pipeline tracking (CRM or shared sheet)',
      'Attend pitches as company\'s advisor when invited',
      'Post-meeting debriefs; materials iteration',
      'Pace discipline; founder support',
      'Weekly status to founder',
    ],
    deliverables: ['Pipeline status reports', 'Iterated materials', 'Post-meeting debrief notes', 'Q&A bank updates'],
    aiLeverage: 'Debrief synthesis 30min → 5min; slide-level edits 90min → 15min per round.',
    compliance: 'HIGH RISK. Founder runs meetings. We do not pitch, solicit, or negotiate. Investor "should I invest?" → redirect, logged.',
  },
  {
    n: 7,
    title: 'Diligence & Negotiation',
    duration: '2–8 weeks',
    owner: 'Founder + securities counsel; Eric + Tim support',
    goal: 'Support the founder through DD and term sheet review. Close cleanly.',
    activities: [
      'Final pre-DD data room audit',
      'Diligence Q-list response drafting (founder signs and sends)',
      'Term sheet review memo + benchmarks',
      'Side-by-side comparison if multiple sheets',
      'Negotiation coaching; cap table modeling under scenarios',
    ],
    deliverables: ['Diligence Q-list responses', 'Term sheet review memo', 'Cap table scenarios', 'Closing checklist'],
    aiLeverage: 'DD response drafting 4hr → 30min per round; benchmark research 3hr → 20min; scenario modeling 90min → 10min.',
    compliance: 'Securities counsel runs negotiation. We comment, model, coach. We do not negotiate or handle subscription docs.',
  },
  {
    n: 8,
    title: 'Close',
    duration: '1–2 weeks',
    owner: 'Founder + counsel; we support',
    goal: 'Definitive documents executed, funds wired, round closed clean.',
    activities: [
      'Final document review',
      'Closing conditions checklist',
      'Cap table at close — reconcile',
      'Wire confirmation (founder; we do not touch)',
      'Closing announcement (optional)',
      'Internal post-mortem',
    ],
    deliverables: ['Updated cap table', 'Closing announcement (optional)', 'Internal post-mortem'],
    aiLeverage: 'Cap reconciliation 90min → 10min; announcement drafting 60min → 10min; post-mortem 90min → 15min.',
    compliance: 'CRITICAL. Final invoice non-contingent. We do not handle funds. Records retention clock starts (6 yr).',
  },
  {
    n: 9,
    title: 'Post-Close',
    duration: 'Ongoing',
    owner: 'Eric + Tim, light cadence',
    goal: 'Investor reporting, milestone tracking, board prep, eventual next round.',
    activities: [
      'Investor reporting setup (quarterly letter, KPI dashboard, board deck)',
      'Milestone tracking',
      'Board prep support',
      'Bridge financing if needed',
      'Next-round prep starts 6–9 months ahead',
    ],
    deliverables: ['Quarterly investor letter (recurring)', 'Board deck (recurring)', 'KPI dashboard'],
    aiLeverage: 'Quarterly letter 4hr → 30min; board deck refresh 6hr → 1hr; milestone variance 2hr → 15min.',
    compliance: 'Same rules as during fundraise. Quarterly letters are issuer-prepared with our help; founder/CEO signs.',
  },
]

export default function Pipeline() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &middot; Pipeline
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">9-Stage Pipeline</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Intake through post-close. Each stage has a defined goal, gating criteria, owner,
            AI leverage points, and explicit compliance posture.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12 space-y-6">
          {STAGES.map((s) => (
            <div key={s.n} className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-base font-semibold"
                    style={{ backgroundColor: '#f0f7fc', color: '#2d6fa3' }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                    <p className="text-xs text-slate-400 mt-0.5">{s.duration} &middot; {s.owner}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 mb-5 italic">{s.goal}</p>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Activities</h3>
                  <ul className="space-y-1.5 text-slate-600">
                    {s.activities.map((a, i) => (
                      <li key={i} className="leading-relaxed">&middot; {a}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Deliverables</h3>
                    <ul className="space-y-1.5 text-slate-600">
                      {s.deliverables.map((d, i) => (
                        <li key={i} className="leading-relaxed">&middot; {d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">AI Leverage</h3>
                    <p className="text-slate-600 leading-relaxed">{s.aiLeverage}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Compliance</h3>
                    <p className="text-slate-600 leading-relaxed">{s.compliance}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
