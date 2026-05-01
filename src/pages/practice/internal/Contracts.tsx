export default function Contracts() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &middot; Contracts &amp; Compliance
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Contracting Framework</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Three engagement structures. SEC compliance guardrails baked in. All templates
            are working drafts pending counsel review.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Three engagement structures
          </h2>
          <div className="grid grid-cols-3 gap-5 mb-12">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-slate-900 font-semibold mb-2">Flat-Fee Deliverable</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">Discrete project (deck refresh, model build, data room build).</p>
              <p className="text-xs text-slate-400">Fixed $ per deliverable, paid on milestone delivery, not raise close.</p>
            </div>
            <div className="bg-white rounded-xl border-2 p-6" style={{ borderColor: '#2d6fa3' }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-slate-900 font-semibold">Monthly Retainer</h3>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0f7fc', color: '#2d6fa3' }}>most common</span>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">Full pipeline (Stages 3–8) for an active raise.</p>
              <p className="text-xs text-slate-400">$15–30K/mo seed; $25–50K/mo Series A/B. Minimum 3 months.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-slate-900 font-semibold mb-2">Hybrid</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">Lower retainer plus flat fees on heavy-lift deliverables.</p>
              <p className="text-xs text-slate-400">Predictable monthly cost with explicit pricing on big work products.</p>
            </div>
          </div>

          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            The bright line
          </h2>
          <div className="bg-white rounded-xl border border-amber-200 p-7 mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              <span className="font-semibold">Transaction-based compensation is the SEC's stated "hallmark" of broker activity.</span>
              {' '}If our compensation depends on a securities transaction closing, on capital
              raised, or on which investor invested, we are a broker. We are not registered as one.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Therefore: never a percentage of capital raised, never a success fee contingent
              on close, never fees that scale with round size, never equity vesting on financing
              close, never tail fees on introduced investors.
            </p>
          </div>

          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Pipeline-stage compliance map
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Stage</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Risk</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Key rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['1 — Intake', 'Low', 'Confirm client expectations align with non-BD scope before we engage.'],
                  ['2 — Assessment', 'Low', 'Work product is for the issuer. No investor contact.'],
                  ['3 — Engagement', 'Critical', 'Letter contains all disclaimers, carve-outs, non-contingent fees. Counsel review on first 3–5 deals.'],
                  ['4 — Preparation', 'Low', 'Materials are work product for the issuer.'],
                  ['5 — Investor Targeting', 'High', 'We research; founder contacts. Intros are non-transactional and disclosed.'],
                  ['6 — Outreach & Meetings', 'High', 'Founder runs meetings. We do not solicit, negotiate, or recommend.'],
                  ['7 — Diligence & Negotiation', 'High', 'Counsel runs negotiation. We comment, model, coach. We do not handle subscription docs.'],
                  ['8 — Close', 'Critical', 'We do not handle funds. Final invoice non-contingent.'],
                  ['9 — Post-Close', 'Low', 'Quarterly letters are issuer-prepared with our help.'],
                ].map(([stage, risk, rule]) => (
                  <tr key={stage}>
                    <td className="px-6 py-3 text-slate-900 font-medium">{stage}</td>
                    <td className="px-6 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        risk === 'Critical' ? 'bg-red-50 text-red-700' :
                        risk === 'High' ? 'bg-amber-50 text-amber-700' :
                        'bg-emerald-50 text-emerald-700'
                      }`}>{risk}</span>
                    </td>
                    <td className="px-6 py-3 text-slate-600">{rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Working-draft templates (in repo)
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 p-7">
            <ul className="space-y-3 text-sm text-slate-700">
              <li>&middot; <span className="font-medium">Flat-Fee Deliverable Engagement Letter</span> &mdash; complete with BD disclaimer, carve-outs, no-tail clause.</li>
              <li>&middot; <span className="font-medium">Monthly Retainer Engagement Letter</span> &mdash; same protections, ongoing scope language.</li>
              <li>&middot; <span className="font-medium">Hybrid Retainer + Deliverable</span> &mdash; combines both with non-overlapping scope sections.</li>
              <li>&middot; <span className="font-medium">Standard Disclaimers Library</span> &mdash; engagement-letter language, investor-facing footer, in-meeting verbal script, founder briefing script, co-advisor coordination, "should I invest?" redirect.</li>
              <li>&middot; <span className="font-medium">SEC Compliance Guardrails</span> &mdash; condensed do/don't list, trip-wires, records retention, scaling thresholds.</li>
            </ul>
            <p className="mt-6 text-xs text-slate-400 italic">
              All templates require outside securities counsel review before any client engagement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
