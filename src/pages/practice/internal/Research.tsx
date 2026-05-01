export default function Research() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &middot; Research
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Background Research</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Three working dossiers commissioned at project kickoff (May 2026). Full citations
            in the working repository.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12 space-y-6">

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Eric Gulve — Background Dossier</h2>
            <p className="text-sm text-slate-500 mb-5">Used to tailor how we demonstrate AI value to Eric.</p>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                <span className="font-medium">Role:</span> 15 years President of BioGenerator + EVP BioSTL.
                Currently founding CEO/PI of NEURO360. Board: Pulse Therapeutics.
              </p>
              <p>
                <span className="font-medium">Track record:</span> ~$39M deployed → $2.6B+ follow-on across
                100+ St. Louis bioscience startups. Notable: Confluence Life Sciences,
                Benson Hill, Canopy Biosciences, CoverCress.
              </p>
              <p>
                <span className="font-medium">Domain:</span> diabetes/metabolic disease drug discovery
                (PhD physiology Harvard); translational medicine; therapeutics startup formation;
                neuroscience translation.
              </p>
              <p>
                <span className="font-medium">AI literacy:</span> baseline-curious, not native. Wet-lab/
                translational scientist. No public statements on AI surface.
              </p>
              <p>
                <span className="font-medium">Style:</span> builder/operator, measured, written-word and
                roundtable-oriented. Expects substance, not jargon.
              </p>
              <p>
                <span className="font-medium">Demo strategy:</span> show don't tell. Use his domain
                (metabolic / neuro / translational). Quantify time savings. See <span className="font-mono text-xs">jobs/ai-leverage-matrix.md</span> for three concrete demo scripts.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Industry Best Practices &mdash; Non-BD Healthcare Advisory</h2>
            <p className="text-sm text-slate-500 mb-5">Boutique healthcare fundraising advisory landscape, May 2026.</p>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                <span className="font-medium">Key insight:</span> the most prestigious healthcare-advisory
                brand names (Locust Walk, Back Bay, Torreya, MTS, Leerink) are functionally
                investment banks &mdash; either registered BDs or with BD subsidiaries. Once you take
                success fees on capital raised, you are a broker. Real non-BD comparables are
                small (Pharmagellan, k38, fractional-CFO shops).
              </p>
              <p>
                <span className="font-medium">The wedge:</span> healthcare-native non-BD with AI integration.
                Generic AI deck shops can't credibly serve biotech. Boutique BDs are too
                expensive for pre-seed and won't take small Series A's.
              </p>
              <p>
                <span className="font-medium">Standard pipeline:</span> 6 stages, 6&ndash;9 months pre-meeting
                relationship-building, 12&ndash;18 month total. Plan for 20&ndash;30 pitches per term sheet.
                Median biotech Series A 2024: ~$58.7M.
              </p>
              <p>
                <span className="font-medium">Pricing benchmarks:</span> $5K&ndash;$25K for individual
                deliverables; $5K&ndash;$25K/mo retainer at seed; $25K&ndash;$50K/mo at Series A/B.
                No success fees, ever.
              </p>
              <p>
                <span className="font-medium">Healthcare deliverable musts:</span> 12&ndash;18 slide deck with
                target product profile, MoA, preclinical/clinical data with stats, IP/patent
                landscape, regulatory pathway, reimbursement strategy, KOL validation, comp set.
                Tiered data room (NDA &rarr; CDA &rarr; diligence room).
              </p>
              <p>
                <span className="font-medium">Healthcare-specific kills:</span> reimbursement is often the
                killer, not the FDA. Stage gating drives 2&ndash;3x valuation step-ups. KOL
                validation = traction at pre-clinical stages.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">SEC Broker-Dealer Compliance Memo</h2>
            <p className="text-sm text-slate-500 mb-5">Working internal memo. Not legal advice. Counsel review required.</p>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                <span className="font-medium">Bright line:</span> transaction-based compensation is the
                SEC's stated "hallmark" of broker activity. Any fee structure that depends on a
                securities transaction closing makes us a broker.
              </p>
              <p>
                <span className="font-medium">Finders Exemption status (May 2026):</span> the 2020 proposal
                has not been adopted. Re-examined July 2025 at SEC SBCFAC. Federal law still
                does not provide a finders exemption for transaction-based comp.
              </p>
              <p>
                <span className="font-medium">Triggers (any one is a yellow flag):</span> solicitation,
                negotiation, structuring, handling investor funds, transaction-based comp,
                pattern-of-activity, holding-out, recommending the investment, distributing
                offering documents, assisting with closings.
              </p>
              <p>
                <span className="font-medium">Penalties:</span> SEC enforcement (disgorgement, civil
                penalties, bars), Section 29(b) investor rescission rights (later of 3 years
                from issuance or 1 year from discovery), state criminal liability (Missouri
                treats it as a felony), private rights of action.
              </p>
              <p>
                <span className="font-medium">The single biggest commercial risk:</span> investor rescission.
                Sophisticated investors run this diligence and refuse to invest if a finder's
                fee is in the structure. (Neogenix Oncology cautionary tale.)
              </p>
              <p>
                <span className="font-medium">Bottom line:</span> flat-fee/retainer advisory practice
                that explicitly does no investor-facing work, with all placement activity
                referred to a registered broker-dealer.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Source files</h2>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              Full research dossiers with all citations live in the working repository:
            </p>
            <ul className="space-y-1 text-sm font-mono text-slate-500">
              <li>research/eric-gulve.md</li>
              <li>research/industry-best-practices.md</li>
              <li>research/sec-broker-dealer.md</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  )
}
