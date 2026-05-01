const STEPS = [
  { n: 1, title: 'Intake', dur: '1–2 weeks', body: 'A discovery call. We send our intake questionnaire. You share what you have. We run an automated triage on your deck and data room before our human read. We decide together whether to engage.' },
  { n: 2, title: 'Assessment', dur: '1–2 weeks', body: 'A readiness scorecard across 12 healthcare-investor dimensions. Gap analysis. An honest investor-eye review. A written scope and fee proposal.' },
  { n: 3, title: 'Engagement', dur: '~1 week', body: 'Engagement letter signed. Workspace and data room shell stood up. Kick-off meeting. Weekly cadence locked.' },
  { n: 4, title: 'Preparation', dur: '4–8 weeks', body: 'Six parallel workstreams: deck/exec summary/one-pager, financial model and pro forma, market and competitive analysis, regulatory pathway and IP, data room build, Q&A bank. You sign off on every deliverable.' },
  { n: 5, title: 'Investor Targeting', dur: '1–2 weeks', body: 'Tiered target list. Tier-1 dossiers with named partners and warm-intro paths. Outreach plan and message templates that you adapt and send. Mock pitches.' },
  { n: 6, title: 'Outreach & Meetings', dur: '3–6 months', body: 'You run the meetings. We track the pipeline, debrief after each meeting, iterate materials based on real feedback, and keep your Q&A bank growing.' },
  { n: 7, title: 'Diligence & Negotiation', dur: '2–8 weeks', body: 'When a lead investor opens diligence: data room audit, Q-list responses (you sign and send), term sheet review with benchmarks, scenario modeling on the cap table. Your securities counsel runs the negotiation; we coach.' },
  { n: 8, title: 'Close', dur: '1–2 weeks', body: 'Final docs. Closing checklist. Cap table reconciliation at close. Optional closing announcement.' },
  { n: 9, title: 'Post-Close', dur: 'Ongoing', body: 'Quarterly investor letter setup. KPI dashboard. Board deck refresh. Milestone tracking. Next-round prep typically starts 6–9 months before your next target close.' },
]

export default function Process() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Client View &middot; Process
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">How an engagement runs</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Nine stages, from first call through funded round and beyond. Most active
            engagements run 6&ndash;12 months end-to-end depending on stage and how the market
            receives you.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-8 py-12 space-y-5">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-white rounded-xl border border-slate-200 p-7">
              <div className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-base font-semibold"
                  style={{ backgroundColor: '#f0f7fc', color: '#2d6fa3' }}
                >
                  {s.n}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                    <span className="text-xs text-slate-400">{s.dur}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
            What you do vs. what we do
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-7">
              <h3 className="text-slate-900 font-semibold mb-4">You</h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li>&middot; Own every investor relationship.</li>
                <li>&middot; Send all investor outreach (we draft; you adapt and send).</li>
                <li>&middot; Run all investor meetings.</li>
                <li>&middot; Sign and send diligence Q-list responses.</li>
                <li>&middot; Negotiate term sheets with your counsel.</li>
                <li>&middot; Sign final documents and receive wires.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-7">
              <h3 className="text-slate-900 font-semibold mb-4">We</h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li>&middot; Build every artifact you need.</li>
                <li>&middot; Research and tier the investor universe.</li>
                <li>&middot; Coach you, drill your Q&A, debrief every meeting.</li>
                <li>&middot; Track the pipeline and run weekly status.</li>
                <li>&middot; Draft diligence responses for your sign-off.</li>
                <li>&middot; Comment on terms; model scenarios; coach negotiation alongside your counsel.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
