import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CLIENTS } from './registry'

const TIER_LABEL: Record<string, string> = {
  A: 'Tier A — First raise',
  B: 'Tier B — Bridge / Seed',
  C: 'Tier C — Follow-on',
}

const STATUS_COLORS: Record<string, string> = {
  'In Progress': 'bg-emerald-50 text-emerald-700',
  'Proposal': 'bg-amber-50 text-amber-700',
  'On Hold': 'bg-slate-100 text-slate-600',
  'Completed': 'bg-slate-100 text-slate-600',
  'None': 'bg-slate-100 text-slate-600',
}

export default function ClientsIndex() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
            Internal &middot; Clients
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Client Roster</h1>
          <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
            Active and sample client engagements. Each card links to the client's full
            internal page: harvested BioSTL context, what we're producing, research, and
            compliance file.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 gap-5">
            {CLIENTS.map((c) => (
              <Link
                key={c.slug}
                to={`/practice/internal/clients/${c.slug}`}
                className="group bg-white rounded-xl border border-slate-200 p-7 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-xl font-bold text-slate-900">{c.name}</h2>
                      {c.isSample && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                          SAMPLE
                        </span>
                      )}
                      {c.tags.includes('NEURO360') && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                          NEURO360
                        </span>
                      )}
                      <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_COLORS[c.currentEngagement.status] ?? 'bg-slate-100 text-slate-600'}`}>
                        {c.currentEngagement.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.tagline}</p>

                    <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-slate-500">
                      <span><span className="text-slate-400">Stage:</span> <span className="font-medium text-slate-700">{c.stage}</span></span>
                      <span><span className="text-slate-400">Tier:</span> <span className="font-medium text-slate-700">{TIER_LABEL[c.tier] ?? c.tier}</span></span>
                      <span><span className="text-slate-400">Domain:</span> <span className="font-medium text-slate-700">{c.domain}</span></span>
                      <span><span className="text-slate-400">Geo:</span> <span className="font-medium text-slate-700">{c.geography}</span></span>
                      <span><span className="text-slate-400">Source:</span> <span className="font-medium text-slate-700">{c.source}</span></span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex flex-col items-end gap-2 text-xs text-slate-400">
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                    {!c.isSample && (
                      <div className="text-right space-y-0.5">
                        <div>{c.harvest.engagementsCount} engagement{c.harvest.engagementsCount === 1 ? '' : 's'}</div>
                        <div>{c.harvest.interactionsCount} interaction{c.harvest.interactionsCount === 1 ? '' : 's'}</div>
                        <div>{c.harvest.contractsCount} contract{c.harvest.contractsCount === 1 ? '' : 's'}</div>
                      </div>
                    )}
                    {c.isSample && (
                      <div className="text-right">
                        {c.artifacts.length} sample artifact{c.artifacts.length === 1 ? '' : 's'}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Adding a client
          </h2>
          <ol className="space-y-2 text-sm text-slate-600 max-w-3xl leading-relaxed list-decimal list-inside">
            <li>Run the harvester: <code className="text-xs bg-slate-100 px-1 rounded">AIRTABLE_TOKEN=pat... python tools/harvest-client.py "&lt;name&gt;"</code></li>
            <li>Hand-write <code className="text-xs bg-slate-100 px-1 rounded">clients/&lt;slug&gt;/metadata.json</code> from the harvested data.</li>
            <li>Mirror metadata into <code className="text-xs bg-slate-100 px-1 rounded">registry.ts</code> here in the website.</li>
            <li>Begin Stage 2 (Assessment) and start writing into <code className="text-xs bg-slate-100 px-1 rounded">artifacts/</code>.</li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            See <code className="text-xs bg-slate-100 px-1 rounded">investmentAnalyst/clients/README.md</code> and
            <code className="text-xs bg-slate-100 px-1 rounded ml-1">skills/client-harvest/SKILL.md</code> for the full process.
          </p>
        </div>
      </section>
    </div>
  )
}
