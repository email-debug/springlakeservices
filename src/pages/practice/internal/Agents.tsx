const AGENTS = [
  {
    name: 'Intake Orchestrator',
    when: 'New client signal arrives.',
    purpose: 'Take a prospective client from inbound through go/no-go and (if go) into assessment.',
    composition: [
      'Discovery call notes',
      'Founder/team background research (web subagent)',
      'Send Intake Questionnaire',
      'Receive intake → run automated triage in parallel: Deck Review, Data Room Audit, Cap Table Review',
      'Synthesize pre-assessment memo',
      'Internal go/no-go conversation (Eric + Tim)',
      'If go → handoff to Materials Prep Orchestrator. If no-go → polite decline + referrals.',
    ],
  },
  {
    name: 'Materials Prep Orchestrator',
    when: 'Engagement signed (Stage 3 complete). Client in active prep.',
    purpose: 'Run Stage 4 end-to-end. Coordinate the parallel workstreams that produce a complete, investor-ready package.',
    composition: [
      'Anchor: deck refresh (Workstream A) — feeds every other workstream',
      'Parallel: Workstream B (financial), C (market), D (regulatory + IP), E (data room), F (Q&A)',
      'Weekly cross-workstream sync',
      'Cross-workstream consistency pass — all numbers reconcile',
      'Eric investor-eye review on full package',
      'Founder sign-off',
      'Handoff to Investor Targeting / Stage 5',
    ],
  },
  {
    name: 'Diligence Orchestrator',
    when: 'Lead investor in formal DD or term sheet conversation has begun.',
    purpose: 'Run Stage 7. Support the founder through diligence and term sheet review without crossing into broker-dealer activity.',
    composition: [
      'Final pre-DD data room audit',
      'Diligence Q-list response drafting (founder signs and sends)',
      'Term sheet review memo + benchmark comparison',
      'Side-by-side comparison if multiple sheets',
      'Cap table modeling under negotiation scenarios',
      'Coaching session: Eric + counsel + founder',
      'Founder + counsel negotiate; we comment, model, coach',
      'Handoff to Close / Stage 8',
    ],
  },
]

export default function Agents() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &middot; Agents
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Three Orchestrators</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Multi-step orchestrators that compose the 16 skills into multi-week workflows.
            Each agent has explicit human checkpoints and compliance trip-wires.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12 space-y-6">
          {AGENTS.map((a) => (
            <div key={a.name} className="bg-white rounded-xl border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-2">{a.name}</h2>
              <p className="text-xs text-slate-400 mb-3">When: {a.when}</p>
              <p className="text-sm text-slate-700 leading-relaxed mb-5">{a.purpose}</p>

              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Composition</h3>
              <ol className="space-y-2 text-sm text-slate-600">
                {a.composition.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 text-xs flex items-center justify-center text-slate-500">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
