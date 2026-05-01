import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ClientIndex() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#2d6fa3' }}>
            For Healthcare Founders
          </p>
          <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
            Healthcare fundraising,<br />
            accelerated.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            We help healthcare and biotech startups prepare for and execute fundraises.
            Pitch deck. Financial model. Data room. Investor targeting. Coaching. Process.
            Built by a team that has spent careers in healthcare investment, drug
            discovery, translational science, and ecosystem building.
          </p>
          <p className="text-sm text-slate-400 mt-6">
            Pre-seed first-time raises through Series B follow-ons. Therapeutics, devices,
            digital health, diagnostics.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            How we work
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                title: 'Services',
                blurb: 'What we deliver across the raise. Deck, model, data room, market analysis, investor targeting, diligence support.',
                href: '/practice/client/services',
              },
              {
                title: 'Process',
                blurb: 'How an engagement runs from intake through close. What you do, what we do, on what timeline.',
                href: '/practice/client/process',
              },
              {
                title: 'Team',
                blurb: 'The people behind the practice. Healthcare investors, scientists, operators, and ecosystem partners.',
                href: '/practice/client/team',
              },
              {
                title: 'FAQ',
                blurb: 'Common questions on fees, scope, what happens if your raise stretches, and what to expect at each stage.',
                href: '/practice/client/faq',
              },
            ].map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group bg-white rounded-xl border border-slate-200 p-7 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-slate-900 font-semibold text-base mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.blurb}</p>
                <span className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#2d6fa3' }}>
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Why founders work with us
          </h2>
          <div className="prose max-w-3xl text-slate-700 leading-relaxed">
            <p className="mb-4">
              <span className="font-semibold text-slate-900">Deep healthcare experience.</span>{' '}
              Our team has lived through pre-clinical, IND, pivotal trials, FDA pathways,
              payer dynamics, and HCP adoption &mdash; on both the operator and investor
              sides. Your story is told by people who understand the science and the
              market, not generalists translating from a brief.
            </p>
            <p className="mb-4">
              <span className="font-semibold text-slate-900">Acceleration.</span>{' '}
              An experienced team that has run this playbook many times moves materials
              to investor-ready faster than a first-pass effort. Faster materials means
              you start meetings sooner, iterate sooner, and close sooner.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Often, lower total cost.</span>{' '}
              Many founders still engage a broker-dealer or placement agent for the raise
              itself, and that can be the right call. Our work tends to compress the
              readiness phase and sharpen the materials, which can reduce hours billed
              elsewhere or make a parallel BD engagement more productive when you need one.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
