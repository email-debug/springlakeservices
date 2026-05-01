import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SECTIONS = [
  {
    title: 'Clients',
    href: '/practice/internal/clients',
    blurb: 'Active and sample client engagements. Harvested BioSTL context, what we are producing, research, and compliance file.',
  },
  {
    title: 'Pipeline',
    href: '/practice/internal/pipeline',
    blurb: 'The 9-stage process from intake through funded round and beyond. Owners, AI leverage points, and gating criteria per stage.',
  },
  {
    title: 'Contracts & Compliance',
    href: '/practice/internal/contracts',
    blurb: 'Engagement structures (flat-fee, retainer, hybrid), SEC broker-dealer guardrails, and the do/don\'t list every engagement runs against.',
  },
  {
    title: 'Skills',
    href: '/practice/internal/skills',
    blurb: '16 repeatable, AI-assisted units of work. Deck review, financial analysis, data room audit, investor targeting, and more.',
  },
  {
    title: 'Agents',
    href: '/practice/internal/agents',
    blurb: 'Three orchestrators that compose skills into multi-week workflows: intake, materials prep, diligence.',
  },
  {
    title: 'Job Map & AI Leverage',
    href: '/practice/internal/jobs',
    blurb: 'Every job we do, who owns it, where AI changes the economics. The pitch to Eric, in two documents.',
  },
  {
    title: 'Team',
    href: '/practice/internal/team',
    blurb: 'Tim, Eric, Crystal, Noah. Roles, ownership map, and the dossier on Eric tailored for the AI demonstration.',
  },
  {
    title: 'Research',
    href: '/practice/internal/research',
    blurb: 'Background research: Eric Gulve dossier, industry best practices for non-BD healthcare advisors, SEC compliance memo.',
  },
]

export default function InternalIndex() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &mdash; Operating System
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Practice Operating System
          </h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Working materials for the team. Pipeline, contracts, skills, agents, and the
            research that informs how we operate. Everything here is a draft pending
            counsel review.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 gap-5">
            {SECTIONS.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group bg-white rounded-xl border border-slate-200 p-7 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-slate-900 font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.blurb}</p>
                <span className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#2d6fa3' }}>
                  Open <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Status
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>&middot; Pipeline drafted (9 stages).</li>
            <li>&middot; Engagement letter framework drafted (3 templates) &mdash; pending counsel review.</li>
            <li>&middot; SEC compliance memo drafted &mdash; pending counsel review.</li>
            <li>&middot; 16 skills drafted with prompt scaffolding.</li>
            <li>&middot; 3 agent orchestrators drafted.</li>
            <li>&middot; Eric Gulve dossier compiled with three tailored AI demo plans.</li>
            <li>&middot; Industry best-practices research compiled with white-space analysis.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
