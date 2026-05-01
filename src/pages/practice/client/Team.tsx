type Member = {
  name: string
  credentials?: string
  role: string
  initials: string
  photo?: string
  bio: string[]
}

const TEAM: Member[] = [
  {
    name: 'Eric Gulve',
    credentials: 'PhD',
    role: 'Senior Healthcare Investment Partner',
    initials: 'EG',
    bio: [
      '15 years as President of BioGenerator (BioSTL’s startup-creation/investment arm), concurrently EVP of BioSTL. Deployed ~$39M into 100+ St. Louis bioscience startups, generating $2.6B+ in follow-on capital (~85% from external investors).',
      'Notable portfolio: Confluence Life Sciences (acq. Aclaris), Benson Hill (NYSE: BHIL), Canopy Biosciences (acq. Bruker), CoverCress (acq. Bayer).',
      'Currently founding CEO/Principal Investigator of NEURO360, an NSF Regional Innovation Engines neuroscience-translation coalition (WashU + BioSTL). Board member at Pulse Therapeutics.',
      'Domain depth: diabetes/metabolic disease drug discovery (PhD physiology Harvard; post-doc WashU; 14 years Searle/Pharmacia/Pfizer leading CV and metabolic programs); translational medicine; therapeutics startup formation and syndication; agtech/plant biosciences; neuroscience translation.',
    ],
  },
  {
    name: 'Tim Mattingly',
    role: 'Practice Lead',
    initials: 'TM',
    bio: [
      'Practice operations, materials authoring, and engagement management. Career background in technology leadership and product operations, applied here to running a disciplined fundraising process end-to-end.',
      'Owns templates, workspace, weekly cadence, and the artifacts that go to investors.',
    ],
  },
  {
    name: 'Noah Wolthausen',
    credentials: 'MPH',
    role: 'Channel Partner · BioSTL Global Advisory Services',
    initials: 'NW',
    bio: [
      'Manager, Strategic Partnerships at BioSTL Global Advisory Services. Public-health background (WashU population health; Peace Corps community health; CPH-certified).',
      'GlobalSTL’s healthcare consortium spans 17–22 health systems across 5 Midwestern states representing ~$360B in healthcare delivery spend (~10% of US healthcare). Buy side: health systems and large corporates. Supply side: growth-stage healthtech startups seeking US entry.',
    ],
  },
]

export default function TeamClient() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Client View &middot; Team
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">The team behind the practice</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Healthcare investors, scientists, operators, and ecosystem partners who have
            spent careers on the funding, science, and translation of life-sciences
            companies.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-8 py-12 space-y-6">
          {TEAM.map((m) => (
            <div key={m.name} className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-xl font-semibold overflow-hidden"
                  style={{ backgroundColor: '#f0f7fc', color: '#2d6fa3' }}
                >
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                  ) : (
                    m.initials
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {m.name}
                    {m.credentials ? <span className="text-slate-500 font-normal">, {m.credentials}</span> : null}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{m.role}</p>
                  <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                    {m.bio.map((p, i) => <p key={i}>{p}</p>)}
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
