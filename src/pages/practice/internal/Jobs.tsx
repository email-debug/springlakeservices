export default function Jobs() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &middot; Jobs &amp; AI Leverage
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">The Pitch to Eric, in Two Documents</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            What we actually do, who owns it, where AI changes the math.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-5">The thesis</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-7 max-w-3xl">
              <p className="text-slate-700 leading-relaxed mb-4">
                A traditional healthcare-fundraising advisory practice has a partner-to-deal
                ratio of roughly <span className="font-semibold">1:3</span> &mdash; one senior partner can run three active engagements
                at a quality bar that wins. The work is bottlenecked on senior judgment plus
                skilled-but-slow junior labor.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                AI doesn't replace the senior judgment. It collapses the junior labor.
                The new ratio looks like <span className="font-semibold">1:6&ndash;8</span> &mdash; one senior partner running six to eight
                engagements at the same quality bar, with an AI-augmented operator handling
                production at 5&ndash;10x prior speed.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Same quality. Double the deals. Lower per-engagement cost.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-5">First-draft authoring multipliers</h2>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Artifact</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Pre-AI</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">With AI</th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Multiplier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Pitch deck refresh', '30–40 hr', '4–6 hr', '~7x'],
                    ['Executive summary', '4–6 hr', '30 min', '~10x'],
                    ['Investor one-pager', '3 hr', '20 min', '~9x'],
                    ['Financial model first draft', '20–30 hr', '4 hr', '~6x'],
                    ['Pro forma cap table', '6 hr', '30 min', '~12x'],
                    ['Market sizing memo', '12 hr', '1 hr', '~12x'],
                    ['Competitive landscape', '16 hr', '2 hr', '~8x'],
                    ['Investment market analysis', '10 hr', '1 hr', '~10x'],
                    ['Regulatory pathway summary', '8 hr', '1 hr', '~8x'],
                    ['IP overview', '6 hr', '1 hr', '~6x'],
                    ['Data room scaffold', '6 hr', '30 min', '~12x'],
                    ['Q&A bank', '12 hr', '90 min', '~8x'],
                    ['Per-investor dossier (Tier 1)', '90 min', '10 min', '~9x'],
                  ].map(([a, b, c, d]) => (
                    <tr key={a}>
                      <td className="px-5 py-2.5 text-slate-700">{a}</td>
                      <td className="px-5 py-2.5 text-right text-slate-500">{b}</td>
                      <td className="px-5 py-2.5 text-right text-slate-500">{c}</td>
                      <td className="px-5 py-2.5 text-right font-medium" style={{ color: '#2d6fa3' }}>{d}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50 border-t-2 border-slate-200">
                  <tr>
                    <td className="px-5 py-3 font-semibold text-slate-900">Aggregate (Tier-A engagement)</td>
                    <td className="px-5 py-3 text-right font-semibold text-slate-900">~150 hr</td>
                    <td className="px-5 py-3 text-right font-semibold text-slate-900">~20 hr</td>
                    <td className="px-5 py-3 text-right font-semibold" style={{ color: '#2d6fa3' }}>~7.5x</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-5">Three demos for Eric</h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
              Tailored to Eric's specific background &mdash; 15 years at BioGenerator, $39M deployed
              into 100+ St. Louis bioscience startups, deep expertise in metabolic disease and
              translational science, currently CEO of NEURO360.
            </p>
            <div className="grid grid-cols-1 gap-5">
              {[
                {
                  title: 'Demo 1: Diligence acceleration on a real deal',
                  body: 'Pick a recent metabolic or neuroscience Series A. Feed AI: deck, founder LinkedIn profiles, ClinicalTrials.gov entries, recent papers, competitive landscape, patent filings. Watch it produce a 1-page diligence memo with red flags, follow-up questions, and a comp set in 5 minutes. Eric has personally written hundreds of these by hand.',
                },
                {
                  title: 'Demo 2: Translational gap analyzer',
                  body: 'Feed a WashU/academic preprint or grant abstract. Output a "commercializability scorecard": IP whitespace, regulatory path complexity, comparable exits, likely funding partners, three named potential strategic acquirers. This is exactly the BioGenerator playbook Eric ran for 15 years, and exactly what NEURO360 needs to do at scale.',
                },
                {
                  title: 'Demo 3: GlobalSTL-style innovation match',
                  body: 'Take a health-system member\'s published "innovation priority" (e.g., reducing 30-day CHF readmissions). AI scans a global database of healthtech startups + recent funding + pilot results. Surface a ranked top-10 with a 2-sentence fit thesis each &mdash; in 90 seconds. This is precisely Noah Wolthausen\'s job, framed as leverage on Noah, not replacement.',
                },
              ].map((d) => (
                <div key={d.title} className="bg-white rounded-xl border border-slate-200 p-7">
                  <h3 className="text-slate-900 font-semibold text-base mb-3">{d.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-5">What AI does NOT change</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-7 max-w-3xl">
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li>&middot; <span className="font-medium">Eric's investor-eye judgment.</span> Still the moat.</li>
                <li>&middot; <span className="font-medium">Live investor meetings.</span> Founder runs them.</li>
                <li>&middot; <span className="font-medium">Founder coaching that requires reading the room.</span></li>
                <li>&middot; <span className="font-medium">Compliance trip-wire judgment.</span> Where's the BD line?</li>
                <li>&middot; <span className="font-medium">Term sheet negotiation strategy.</span> Eric + counsel.</li>
                <li>&middot; <span className="font-medium">The yes/no on engaging a client.</span> Gut + experience.</li>
              </ul>
              <p className="mt-6 text-sm text-slate-500 italic leading-relaxed">
                The right framing for Eric: AI is a junior associate that never sleeps, drafts at
                5x speed, and needs your judgment on every output.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
