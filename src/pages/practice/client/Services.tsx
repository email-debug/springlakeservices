const SERVICES = [
  {
    cat: 'Diagnostic',
    items: [
      { name: 'Raise readiness assessment', body: 'A 12-dimension scorecard against what healthcare investors expect. Brutally honest. You hear how a Series A partner would react before you ever meet one.' },
      { name: 'Gap analysis', body: 'For every dimension below the bar, what specifically would change to fix it. Not "improve the deck." "Slide 7 makes a 4-step claim but only steps 1 and 3 cite data — fix or remove."' },
      { name: 'Investor-eye review', body: 'Eric Gulve reads your full package as an investor would. One sitting. Honest read.' },
    ],
  },
  {
    cat: 'Materials',
    items: [
      { name: 'Pitch deck', body: '12–18 slides, healthcare-investor-grade. Target product profile, mechanism, data with stats, IP, regulatory pathway, reimbursement strategy, KOL validation, comp set, milestones, ask.' },
      { name: 'Executive summary', body: 'Two pages. Written for the partner who skims it in 90 seconds.' },
      { name: 'Investor one-pager', body: 'The door-opener. Single page that earns the first meeting.' },
      { name: 'Financial model', body: 'Operating model with program-level burn against milestones. PoS-adjusted NPV for therapeutics. Reimbursement modeling for digital health and medtech.' },
      { name: 'Pro forma cap table', body: 'Pre/post-money under base, high, low, and investor-pushback scenarios. Founder dilution trajectory through this round and the next.' },
      { name: 'Cap table cleanup', body: 'Surface dead equity, missing 83(b)s, SAFE conversion math. Fix before diligence opens.' },
    ],
  },
  {
    cat: 'Market & Science',
    items: [
      { name: 'Market sizing', body: 'TAM/SAM/SOM grounded in patient population epidemiology and reimbursement reality. Not "$4T US healthcare."' },
      { name: 'Competitive landscape', body: 'Molecule-level or device-level matrix. Includes incumbents and emerging. Not a logo grid.' },
      { name: 'Investment market analysis', body: 'Recent comparable rounds in your space. Lead investors, valuations, deal terms. Calibration for what is realistic right now.' },
      { name: 'Regulatory pathway summary', body: 'FDA pathway with comparable precedents, timeline-to-approval, and risk register.' },
      { name: 'IP overview', body: 'Issued vs. pending, jurisdictional coverage, term, white-space analysis. Strategic-level overview &mdash; not a legal FTO opinion.' },
    ],
  },
  {
    cat: 'Process',
    items: [
      { name: 'Data room build & audit', body: 'Tiered access (NDA → CDA → diligence room). Standard 10-category healthcare taxonomy. Audited for completeness before you open it to a lead investor.' },
      { name: 'Q&A bank', body: '50–80 anticipated investor questions, drafted answers, drilled with you until you can deliver them cold.' },
      { name: 'Investor target list', body: 'Tiered (10–15 Tier 1, 25–40 Tier 2, 50+ Tier 3). Per-Tier-1 dossiers with named partners and warm-intro paths.' },
      { name: 'Coaching', body: 'Mock pitches before real meetings. Post-meeting debriefs. Voice and confidence in the room.' },
      { name: 'Diligence support', body: 'When investors send a 30–80 question DD list, we draft responses; you sign and send.' },
      { name: 'Term sheet review', body: 'Memo with benchmarks. Side-by-side comparison if multiple sheets. Negotiation coaching alongside your counsel.' },
    ],
  },
  {
    cat: 'Post-Close',
    items: [
      { name: 'Investor reporting', body: 'Quarterly investor letter template, KPI dashboard, board deck refresh.' },
      { name: 'Milestone tracking', body: 'Burn vs. plan, clinical/regulatory milestones, hiring plan. Monthly review.' },
      { name: 'Next-round prep', body: 'Typically starts 6–9 months before the next raise target.' },
    ],
  },
]

export default function Services() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Client View &middot; Services
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">What we deliver</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Across an engagement, in roughly the order you'll experience them.
            Scope per engagement; not every client needs every item.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-8 py-12 space-y-12">
          {SERVICES.map((cat) => (
            <div key={cat.cat}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
                {cat.cat}
              </h2>
              <div className="grid grid-cols-2 gap-5">
                {cat.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-xl border border-slate-200 p-6">
                    <h3 className="text-slate-900 font-semibold text-sm mb-2">{item.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
