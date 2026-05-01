export default function Team() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &middot; Team
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Team &amp; Roles</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Who does what. The Eric dossier is the load-bearing document &mdash; tailoring how we
            position AI to him drives the demonstration plan.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="space-y-6">

            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-xl font-semibold text-slate-900">Eric Gulve, PhD</h3>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0f7fc', color: '#2d6fa3' }}>
                  The moat
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-5">Senior healthcare investment partner</p>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  15 years as President of BioGenerator (BioSTL's startup-creation/investment
                  arm), concurrently EVP of BioSTL. Deployed ~$39M into 100+ St. Louis
                  bioscience startups, generating $2.6B+ follow-on capital (~85% from external
                  investors).
                </p>
                <p>
                  Notable portfolio: Confluence Life Sciences (acq. Aclaris), Benson Hill
                  (NYSE: BHIL), Canopy Biosciences (acq. Bruker), CoverCress (acq. Bayer).
                </p>
                <p>
                  Currently founding CEO/Principal Investigator of NEURO360 (NSF Regional
                  Innovation Engines neuroscience-translation coalition, WashU + BioSTL).
                  Board member at Pulse Therapeutics.
                </p>
                <p>
                  Domain depth: diabetes/metabolic disease drug discovery (PhD physiology
                  Harvard; post-doc WashU; 14 years Searle/Pharmacia/Pfizer leading CV and
                  metabolic programs); translational medicine; therapeutics startup formation
                  and syndication; agtech/plant biosciences; neuroscience translation;
                  public-private ecosystem mechanics.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">AI literacy posture</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Baseline-curious, not AI-native. Wet-lab/translational scientist by training.
                  No public statements on AI surface. Communication style: builder/operator,
                  measured, written-word and roundtable-oriented. Expects substance, not jargon.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-3 italic">
                  Implication: demo by showing, not telling. Use his domain (metabolic /
                  neuro / translational). Quantify time savings. Avoid "AI agent" jargon.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Irreplaceable jobs</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Go/no-go decision &middot; investor-eye review &middot; kick-off meeting and briefing &middot;
                  regulatory pathway sanity (metabolic/neuro especially) &middot; mock pitch coaching &middot;
                  in-room judgment at investor meetings &middot; term sheet negotiation coaching &middot;
                  investor-redirect on "should I invest?"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-xl font-semibold text-slate-900">Tim Mattingly</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">The leverage</span>
              </div>
              <p className="text-sm text-slate-500 mb-5">Practice lead &middot; AI/automation</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Builds the templates, the agent stack, the workspace. Owns process discipline.
                Authors the artifacts at AI-assisted speed. Runs orchestration, owns automation,
                produces drafts that Eric adjudicates.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-xl font-semibold text-slate-900">Crystal Winkeler</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">Team</span>
              </div>
              <p className="text-sm text-slate-500 mb-5">Role TBD</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Strong candidates given the job map: client-facing project management
                (Stage 3 setup, Stage 6 pipeline tracking, weekly status); materials authoring
                with Tim's scaffolds (decks, models, market memos); founder coaching when
                Eric is bandwidth-constrained.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-xl font-semibold text-slate-900">Noah Wolthausen, MPH</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">Channel partner</span>
              </div>
              <p className="text-sm text-slate-500 mb-5">Manager, Strategic Partnerships &middot; BioSTL Global Advisory Services</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Manages BioSTL's GlobalSTL advisory practice, a significant client channel.
                Public-health background (WashU population health, Peace Corps community
                health, CPH-certified). GlobalSTL's healthcare consortium spans 17–22 health
                systems across 5 Midwestern states representing ~$360B in healthcare delivery
                spend (~10% of US healthcare). Buy side: health systems and large corporates.
                Supply side: growth-stage international healthtech startups seeking US entry.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
