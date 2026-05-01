const SKILLS = [
  { name: 'Deck Review', purpose: 'Critique a healthcare/biotech pitch deck against a 12-dimension investor rubric. Identify gaps before human review.', stages: '1, 2, 4, 6', leverage: '~10x' },
  { name: 'Deck Update', purpose: 'Apply prioritized edits — copy, data refresh, structural reorder — preserving voice and visual style.', stages: '4, 6, 9', leverage: '~6x' },
  { name: 'Financial Analysis', purpose: 'Diagnose model rigor. Surface assumptions, sensitivities, red flags. CFO-grade critique.', stages: '2, 4, 7', leverage: '~7x' },
  { name: 'Pro-Forma Creation', purpose: 'Build pro-forma cap table and post-raise dilution model across scenarios.', stages: '4, 7, 8', leverage: '~12x' },
  { name: 'Data Room Audit', purpose: 'Audit data room for completeness, organization, and risk-disclosure cleanliness against the 10-category healthcare taxonomy.', stages: '1, 4, 7', leverage: '~12x' },
  { name: 'Competitive Market Analysis', purpose: 'Build a molecule- or device-level competitive matrix that healthcare investors take seriously. Not a logo grid.', stages: '2, 4, 6', leverage: '~8x' },
  { name: 'Investment Market Analysis', purpose: 'Map the capital market — recent comparable rounds, lead investors, valuations, deal terms.', stages: '2, 4, 5', leverage: '~10x' },
  { name: 'Investor Targeting', purpose: 'Build a tiered, thesis-matched target list. Tier-1 dossiers with named partners and warm-intro paths.', stages: '5, 6', leverage: '~9x' },
  { name: 'Intake Questionnaire', purpose: 'Structured intake form. Captures everything we need before assessment without burning senior time.', stages: '1', leverage: 'enables flow' },
  { name: 'Regulatory Pathway Summary', purpose: 'Articulate the FDA pathway with comparable precedents, timeline, and risk register.', stages: '2, 4, 7', leverage: '~8x' },
  { name: 'Cap Table Review', purpose: 'Audit current cap table for accuracy and red flags. Surface dead equity, missing 83(b)s, vesting cliffs.', stages: '1, 2, 4, 7, 8', leverage: '~5x' },
  { name: 'IP Landscape Review', purpose: 'Map patent and trade-secret landscape. Surface FTO concerns and white-space (not a legal FTO opinion).', stages: '2, 4', leverage: '~6x' },
  { name: 'Diligence Q&A Prep', purpose: 'Build and drill the founder\'s 50–80 question Q&A bank. Iterate from real meetings.', stages: '4, 6, 7', leverage: '~8x' },
  { name: 'One-Pager Generation', purpose: 'Single-page investor door-opener. The 90-second skim that earns a first meeting. Also: closing announcement variant.', stages: '4, 8', leverage: '~9x' },
  { name: 'Market Sizing', purpose: 'Patient-population-grounded TAM/SAM/SOM with explicit reimbursement modeling. Not "$4T healthcare."', stages: '2, 4, 7', leverage: '~12x' },
  { name: 'Valuation Comparables', purpose: 'Comp-set table for valuation defense. Read-across to target valuation with named precedents.', stages: '2, 4, 7', leverage: '~10x' },
  { name: 'Client Harvest', purpose: 'Pull everything in the BioSTL Advisory Ops Airtable base related to a client (Companies, Contacts, Engagements, Interactions, Contracts, Box Files index) into a structured client folder. Read-only and idempotent.', stages: '1, 6, 9', leverage: 'enables flow' },
]

export default function Skills() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &middot; Skills
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">17 AI-Assisted Skills</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Repeatable units of work. Each skill has a defined purpose, inputs, prompt
            scaffolding, output, quality bar, and human-pass requirement. Drafted in the
            <code className="text-xs bg-slate-100 px-1 mx-1 rounded">skills/</code>
            directory of the working repository.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 gap-5">
            {SKILLS.map((s) => (
              <div key={s.name} className="bg-white rounded-xl border border-slate-200 p-7">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-slate-900 font-semibold text-base">{s.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0f7fc', color: '#2d6fa3' }}>
                    {s.leverage}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.purpose}</p>
                <p className="text-xs text-slate-400">Stages: {s.stages}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Quality bar (every skill)
          </h2>
          <ul className="space-y-2 text-sm text-slate-600 max-w-3xl leading-relaxed">
            <li>&middot; Every claim is sourced or flagged "needs source."</li>
            <li>&middot; Outputs are reproducible: a different reviewer with the same rubric arrives at materially the same result.</li>
            <li>&middot; Healthcare-specific. We use healthcare-investor language and concerns, not generic VC language.</li>
            <li>&middot; Eric reviews substance on every output before it leaves the building.</li>
            <li>&middot; Compliance flags surface immediately — anything that reads like solicitation, undisclosed material info, or unsupported claim.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
