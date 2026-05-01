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
            Raise capital on your terms.<br />
            Without the broker-dealer baggage.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            We help healthcare and biotech startups prepare for and execute fundraises.
            Pitch deck. Financial model. Data room. Investor targeting. Coaching. Process.
            Compressed by AI to deliver Tier-A quality at sustainable cost.
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
          <div className="grid grid-cols-3 gap-5">
            {[
              {
                title: 'Services',
                blurb: 'What we deliver across the raise. Deck, model, data room, market analysis, investor targeting, diligence support.',
                href: '/practice/client/services',
              },
              {
                title: 'Process',
                blurb: 'How an engagement runs from intake through close. What you do, what we do, what AI does, on what timeline.',
                href: '/practice/client/process',
              },
              {
                title: 'FAQ',
                blurb: 'Common questions on fees, scope, the SEC line, what happens if your raise stretches, and what to expect at each stage.',
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
            What we are not
          </h2>
          <div className="prose max-w-3xl text-slate-700 leading-relaxed">
            <p className="mb-4">
              We are not a broker-dealer. We are not a placement agent. We are not finders.
              That distinction matters: it means we do not solicit investors on your behalf,
              we do not take success fees, and we do not negotiate terms with investors.
            </p>
            <p className="mb-4">
              What we do: we help you build everything you need to walk into investor
              meetings looking like you already raised the money. We do the research and
              hand you the target list. We coach you through the meetings. We support
              diligence and term-sheet review alongside your securities counsel. You own
              every investor relationship.
            </p>
            <p>
              That structure is by design. It keeps us legal. It keeps you protected from
              rescission risk. And it aligns our fees with the quality of your materials
              and your process &mdash; not with the size of any particular deal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
