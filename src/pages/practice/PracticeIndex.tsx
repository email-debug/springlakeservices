import { Link } from 'react-router-dom'
import { ArrowRight, Users, Building2 } from 'lucide-react'

export default function PracticeIndex() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#2d6fa3' }}>
            Investment Advisory Practice
          </p>
          <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
            Healthcare startup fundraising,<br />operated like an AI-augmented studio.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            A boutique advisory practice helping healthcare and biotech startups raise capital.
            We are not a broker-dealer. Our value is in advisory work, materials preparation,
            process discipline, and coaching &mdash; compressed by AI to deliver Tier-A quality
            at sustainable cost.
          </p>
          <p className="text-sm text-slate-400 mt-6 italic">
            This site is an internal draft. Not for distribution.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Two views
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <Link
              to="/practice/internal"
              className="group bg-white rounded-xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: '#f0f7fc' }}>
                <Users size={20} style={{ color: '#2d6fa3' }} />
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-3">Internal View</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                The full operating system: pipeline, contracts, SEC compliance guardrails,
                skills, agents, AI leverage matrix, team. For Tim, Eric, Crystal, and Noah.
              </p>
              <span className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#2d6fa3' }}>
                Open internal docs <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/practice/client"
              className="group bg-white rounded-xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: '#f0f7fc' }}>
                <Building2 size={20} style={{ color: '#2d6fa3' }} />
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-3">Client View</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                What clients see: our services, our process, what to expect, FAQ.
                A draft of the eventual public-facing pages.
              </p>
              <span className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#2d6fa3' }}>
                Open client view <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            The thesis in one paragraph
          </h2>
          <div className="prose max-w-3xl text-slate-700 leading-relaxed">
            <p>
              A traditional healthcare-fundraising advisory practice is bottlenecked
              on senior judgment plus skilled-but-slow junior labor. AI doesn't replace
              the senior judgment &mdash; it collapses the junior labor. The new economics let
              one senior partner run six to eight engagements at the same quality bar,
              with an AI-augmented operator handling production at five to ten times prior speed.
              Same quality. Double the deals. Lower per-engagement cost. The senior advisor's
              job moves from authoring to judging.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
