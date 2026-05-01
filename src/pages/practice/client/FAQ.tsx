const FAQS = [
  {
    q: 'How are your fees structured?',
    a: 'Flat fees for discrete deliverables, monthly retainer for full-pipeline engagements, or a hybrid. Typical seed retainer: $15K–$30K/month. Series A/B: $25K–$50K/month. Discrete deliverables (deck, model, data room) range $5K–$25K. We do not take success fees or compensation contingent on a securities transaction; founders running a formal placement typically pair our work with a broker-dealer or placement agent for that side.',
  },
  {
    q: 'Do you take success fees?',
    a: 'No. Our compensation is flat fees and retainers tied to deliverables and time, not the size or closing of any particular round. If your raise involves transaction-based compensation or formal solicitation of investors, that work belongs with a registered broker-dealer or placement agent &mdash; many of our clients pair us with one.',
  },
  {
    q: 'Will you make introductions to investors?',
    a: 'We will research and tier your investor universe, build dossiers on the top targets with named partners and warm-intro paths through our networks, and coach you on the outreach. The actual introductions you make are yours to make, in your voice. Where we facilitate a relationship intro, it is non-transactional and disclosed in writing.',
  },
  {
    q: 'Will you attend investor meetings with us?',
    a: 'Often, yes &mdash; as your advisor, on your invitation. We may provide scientific, clinical, or strategic context if asked. We do not pitch the investment, negotiate terms, or make recommendations. Your founder runs the meeting.',
  },
  {
    q: 'How long does a typical engagement run?',
    a: 'For a first-time pre-seed/seed raise: 6&ndash;12 months from kickoff to close. For a Series A: 12&ndash;18 months including the typical 6&ndash;9 month relationship-building runway investors expect. Series B follow-ons after a clean prior round can be faster. We are honest about timelines: a Series A close in under 6 months is rare, and we will not promise it.',
  },
  {
    q: 'What do I need to start?',
    a: 'If you are early: a 30-minute discovery call and the willingness to share whatever you have, even if it is messy. We have an intake questionnaire that captures the rest. If you are running a follow-on raise: prior round materials, current cap table, current model, prior investor list. We can move fast for clients with full data rooms.',
  },
  {
    q: 'What therapeutic areas do you cover?',
    a: 'Healthcare and biotech broadly. Strongest depth in metabolic/diabetes, translational therapeutics, neuroscience, and digital health/health tech via our healthcare consortium connections. For other therapeutic areas (oncology, rare disease, devices), we engage outside specialists where their domain depth is needed.',
  },
  {
    q: 'Who is on the team?',
    a: 'Senior healthcare investment, drug-discovery, translational-science, and ecosystem-building experience. Eric Gulve led BioGenerator (BioSTL\'s startup-creation/investment arm) for 15 years and deployed ~$39M into 100+ bioscience startups generating $2.6B+ in follow-on capital. The full team is on the Team page.',
  },
  {
    q: 'What if my raise stretches longer than planned?',
    a: 'We expect it. Most healthcare raises stretch. Our retainer continues at the agreed rate; we do not nickel-and-dime you for the extension. We will, however, have a frank conversation if at month 6 you have had no second meetings &mdash; that signals a narrative or pricing problem we should address before more time passes.',
  },
  {
    q: 'What if my raise fails?',
    a: 'Our fees are not contingent on closing, so a failed raise does not change what you owe. What happens next is more important: we run a post-mortem with you, surface what we learned, and give you a candid read on whether to bridge, pivot, or pause. Some of our most valuable engagements end without a raise &mdash; because the founder learned the round was not the right move.',
  },
  {
    q: 'Can you help with a SAFE or convertible note round?',
    a: 'Yes. We will help you structure, model dilution under conversion scenarios, and prepare the materials investors expect. Your counsel handles the actual instrument.',
  },
  {
    q: 'Do you require exclusivity?',
    a: 'No. You may engage other advisors in parallel. We do disclose conflicts up front, and we will not represent two clients raising in directly competing therapeutic areas without written waivers from both.',
  },
]

export default function FAQ() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Client View &middot; FAQ
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Frequently asked</h1>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-8 py-12 space-y-5">
          {FAQS.map((f) => (
            <div key={f.q} className="bg-white rounded-xl border border-slate-200 p-7">
              <h3 className="text-slate-900 font-semibold text-base mb-3">{f.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
