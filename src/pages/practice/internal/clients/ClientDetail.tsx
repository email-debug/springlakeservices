import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Download, FileText, FileWarning } from 'lucide-react'
import { getClient, type ClientArtifact, type ClientResearch } from './registry'

type ManifestEntry = {
  category: string
  title: string
  path: string
  size_bytes: number
  format: string
}

type Manifest = {
  company: string
  generated_at: string
  files: ManifestEntry[]
}

const RESEARCH_LABEL: Record<ClientResearch['category'], string> = {
  'competitive': 'Competitive Landscape',
  'investment-market': 'Investment Market',
  'market-sizing': 'Market Sizing',
  'regulatory': 'Regulatory Pathway',
  'ip': 'IP Landscape',
  'kol': 'KOL Research',
  'other': 'Other',
}

function fmtBytes(n: number): string {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

const ARTIFACT_LABEL: Record<string, string> = {
  'deck': 'Pitch Deck',
  'deal-memo': 'Deal Memo',
  'one-pager': 'One-Pager',
  'exec-summary': 'Executive Summary',
  'model': 'Financial Model',
  'data-room': 'Data Room',
  'market': 'Market Analysis',
  'regulatory': 'Regulatory',
  'ip': 'IP Overview',
  'investors': 'Investor Targeting',
  'qa': 'Q&A Bank',
  'misc': 'Other',
}

const STATUS_BADGE: Record<string, string> = {
  'Sample': 'bg-violet-50 text-violet-700 border-violet-200',
  'Final': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'In Review': 'bg-amber-50 text-amber-700 border-amber-200',
  'Draft': 'bg-slate-100 text-slate-600 border-slate-200',
}

function ArtifactRow({ a }: { a: ClientArtifact }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400 w-32 flex-shrink-0">
            {ARTIFACT_LABEL[a.category] ?? a.category}
          </span>
          <span className="text-sm text-slate-700 truncate">{a.title}</span>
        </div>
        <div className="text-xs text-slate-400 ml-32 pl-3 mt-0.5 font-mono truncate">{a.path}</div>
      </div>
      <div className="flex-shrink-0 flex items-center gap-3 ml-4">
        <span className="text-xs text-slate-400 uppercase">{a.format}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full border ${STATUS_BADGE[a.status] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
          {a.status}
        </span>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">{title}</h2>
      {children}
    </div>
  )
}

export default function ClientDetail() {
  const { slug } = useParams()
  const client = slug ? getClient(slug) : undefined
  const [manifest, setManifest] = useState<Manifest | null>(null)
  const [manifestErr, setManifestErr] = useState<string | null>(null)

  useEffect(() => {
    if (!client?.publicDownloadsBase) {
      setManifest(null)
      return
    }
    const url = `${client.publicDownloadsBase}manifest.json`
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`status ${r.status}`)
        return r.json()
      })
      .then((m: Manifest) => {
        setManifest(m)
        setManifestErr(null)
      })
      .catch((e) => {
        setManifest(null)
        setManifestErr(`Manifest not yet available (${String(e.message)}). Run the conversion script.`)
      })
  }, [client?.publicDownloadsBase])

  if (!client) {
    return (
      <div className="max-w-6xl mx-auto px-8 py-16">
        <Link to="/practice/internal/clients" className="text-sm text-slate-500 hover:text-slate-800">
          &larr; back to clients
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mt-6">Client not found</h1>
        <p className="text-slate-500 mt-2">No client matches slug "{slug}".</p>
      </div>
    )
  }

  const artifactsByCategory = client.artifacts.reduce<Record<string, ClientArtifact[]>>(
    (acc, a) => {
      ;(acc[a.category] ||= []).push(a)
      return acc
    },
    {}
  )

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-10">
          <Link to="/practice/internal/clients" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-6">
            <ArrowLeft size={14} /> Clients
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            {client.isSample && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                SAMPLE / DEMO
              </span>
            )}
            {client.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{t}</span>
            ))}
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              {client.currentEngagement.status}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">{client.name}</h1>
          {client.aliases && client.aliases.length > 0 && (
            <p className="text-xs text-slate-400 mb-4">also: {client.aliases.join(', ')}</p>
          )}
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">{client.tagline}</p>

          {(client.links.website || client.links.linkedin) && (
            <div className="flex gap-4 mt-4 text-sm">
              {client.links.website && (
                <a href={client.links.website} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800">
                  Website <ExternalLink size={12} />
                </a>
              )}
              {client.links.linkedin && (
                <a href={client.links.linkedin} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800">
                  LinkedIn <ExternalLink size={12} />
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Stage</div>
            <div className="text-lg font-semibold text-slate-900">{client.stage}</div>
            <div className="text-xs text-slate-500 mt-1">Tier {client.tier}</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Engagement</div>
            <div className="text-lg font-semibold text-slate-900">{client.currentEngagement.type}</div>
            <div className="text-xs text-slate-500 mt-1">
              {client.currentEngagement.startDate ? `Started ${client.currentEngagement.startDate}` : '—'}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Source</div>
            <div className="text-lg font-semibold text-slate-900">{client.source}</div>
            <div className="text-xs text-slate-500 mt-1">{client.geography}</div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-8 pb-12 space-y-10">

          <Section title="Overview">
            <div className="bg-white rounded-xl border border-slate-200 p-7 max-w-3xl">
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{client.notes}</p>
            </div>
          </Section>

          <Section title="Engagement scope">
            <div className="bg-white rounded-xl border border-slate-200 p-7 max-w-3xl">
              <p className="text-sm text-slate-700 leading-relaxed">{client.currentEngagement.scope}</p>
            </div>
          </Section>

          <Section title="Our role">
            <div className="bg-white rounded-xl border border-slate-200 p-7 max-w-3xl">
              <p className="text-sm text-slate-700 leading-relaxed">{client.ourRole}</p>
            </div>
          </Section>

          <Section title="Compliance posture">
            <div className="bg-white rounded-xl border border-amber-200 p-7 max-w-3xl">
              <p className="text-sm text-slate-700 leading-relaxed">{client.compliancePosture}</p>
            </div>
          </Section>

          <Section title="Team">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Name</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Title</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Background / Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {client.executives.map((e) => (
                    <tr key={e.name}>
                      <td className="px-5 py-3 font-medium text-slate-900">{e.name}</td>
                      <td className="px-5 py-3 text-slate-600">{e.title}</td>
                      <td className="px-5 py-3 text-slate-500 text-xs">
                        {e.background || (e.linkedin ? (
                          <a href={e.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 inline-flex items-center gap-1">
                            LinkedIn <ExternalLink size={10} />
                          </a>
                        ) : '—')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {(client.funding.lastRoundType || client.funding.investors.length > 0) && (
            <Section title="Funding history">
              <div className="bg-white rounded-xl border border-slate-200 p-7 max-w-3xl">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <div>
                    <span className="text-slate-400">Last round:</span>{' '}
                    <span className="text-slate-700">{client.funding.lastRoundType ?? '—'} {client.funding.lastRoundAmount ? `(${client.funding.lastRoundAmount})` : ''}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Date:</span>{' '}
                    <span className="text-slate-700">{client.funding.lastRoundDate ?? '—'}</span>
                  </div>
                  {client.funding.totalRaised && (
                    <div className="col-span-2">
                      <span className="text-slate-400">Total raised:</span>{' '}
                      <span className="text-slate-700">{client.funding.totalRaised}</span>
                    </div>
                  )}
                  {client.funding.investors.length > 0 && (
                    <div className="col-span-2">
                      <span className="text-slate-400">Investors:</span>{' '}
                      <span className="text-slate-700">{client.funding.investors.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            </Section>
          )}

          {client.research && client.research.length > 0 && (
            <Section title="Research">
              <div className="bg-white rounded-xl border border-slate-200 p-7 space-y-5">
                {!client.publicDownloadsBase && (
                  <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3 leading-relaxed">
                    <FileWarning size={12} className="inline mr-1.5 mb-0.5" />
                    Confidential research files. Source markdown lives in the local working repository
                    (<code className="text-xs">investmentAnalyst/clients/{client.slug}/research/</code>) and is not served by this site.
                  </div>
                )}
                {client.research.map((r) => (
                  <div key={r.path} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2 gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText size={14} className="text-slate-400 flex-shrink-0" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{RESEARCH_LABEL[r.category]}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${STATUS_BADGE[r.status] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                        {r.status}
                      </span>
                    </div>
                    <div className="text-sm text-slate-900 font-medium mb-1.5">{r.title}</div>
                    {r.summary && <p className="text-sm text-slate-600 leading-relaxed mb-2">{r.summary}</p>}
                    <div className="text-xs text-slate-400 font-mono truncate">
                      {r.path}
                      {r.generatedAt && <span className="ml-3 font-sans not-italic">generated {r.generatedAt}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {client.publicDownloadsBase && (
            <Section title="Public download package">
              <div className="bg-white rounded-xl border border-slate-200 p-7">
                {manifest && (
                  <>
                    <div className="text-xs text-slate-500 mb-4">
                      Generated {manifest.generated_at?.slice(0, 19).replace('T', ' ')} &middot; {manifest.files.length} files
                    </div>
                    {Object.entries(
                      manifest.files.reduce<Record<string, ManifestEntry[]>>((acc, f) => {
                        ;(acc[f.category] ||= []).push(f)
                        return acc
                      }, {}),
                    ).map(([cat, items]) => (
                      <div key={cat} className="mb-5 last:mb-0">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                          {ARTIFACT_LABEL[cat] ?? cat} <span className="text-slate-400 ml-2">({items.length})</span>
                        </div>
                        <div className="space-y-1">
                          {items.map((f) => (
                            <a
                              key={f.path}
                              href={`${client.publicDownloadsBase}${f.path}`}
                              download
                              className="flex items-center justify-between py-1.5 px-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors group"
                            >
                              <div className="flex items-center gap-2 min-w-0 flex-1">
                                <Download size={13} className="text-slate-400 flex-shrink-0 group-hover:text-slate-700" />
                                <span className="text-sm text-slate-700 truncate">{f.title}</span>
                              </div>
                              <div className="flex items-center gap-3 flex-shrink-0 ml-3 text-xs text-slate-400">
                                <span className="uppercase font-mono">{f.format}</span>
                                <span>{fmtBytes(f.size_bytes)}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                )}
                {manifestErr && (
                  <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3 leading-relaxed">
                    <FileWarning size={12} className="inline mr-1.5 mb-0.5" />
                    {manifestErr}
                  </div>
                )}
                {!manifest && !manifestErr && (
                  <div className="text-xs text-slate-400">Loading download manifest&hellip;</div>
                )}
              </div>
            </Section>
          )}

          {client.artifacts.length > 0 && (
            <Section title="Artifacts (source files)">
              <div className="bg-white rounded-xl border border-slate-200 p-7">
                {Object.entries(artifactsByCategory).map(([cat, items]) => (
                  <div key={cat} className="mb-4 last:mb-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                      {ARTIFACT_LABEL[cat] ?? cat} <span className="text-slate-400 ml-2">({items.length})</span>
                    </div>
                    {items.map((a, i) => (
                      <ArtifactRow key={i} a={a} />
                    ))}
                  </div>
                ))}
              </div>
            </Section>
          )}

          {!client.isSample && client.harvest.lastRun && (
            <Section title="BioSTL Airtable harvest">
              <div className="bg-white rounded-xl border border-slate-200 p-7 max-w-3xl">
                <div className="text-xs text-slate-500 mb-3">Last harvested {client.harvest.lastRun}</div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{client.harvest.companiesCount}</div>
                    <div className="text-xs text-slate-500 mt-1">Companies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{client.harvest.engagementsCount}</div>
                    <div className="text-xs text-slate-500 mt-1">Engagements</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{client.harvest.interactionsCount}</div>
                    <div className="text-xs text-slate-500 mt-1">Interactions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{client.harvest.contractsCount}</div>
                    <div className="text-xs text-slate-500 mt-1">Contracts</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-400">
                  Harvested files in <code className="text-xs bg-slate-100 px-1 rounded">investmentAnalyst/clients/{client.slug}/</code>:
                  00-summary, 01-companies, 02-contacts, 03-engagements, 04-interactions, 05-documents, 06-opportunities, 07-contracts, 08-box-files
                </div>
                {client.biostlLinks.companyRecordIds.length > 0 && (
                  <div className="mt-3 text-xs text-slate-400">
                    Company record IDs: {client.biostlLinks.companyRecordIds.map((id) => (
                      <code key={id} className="text-xs bg-slate-100 px-1 rounded ml-1">{id}</code>
                    ))}
                  </div>
                )}
              </div>
            </Section>
          )}

        </div>
      </section>
    </div>
  )
}
