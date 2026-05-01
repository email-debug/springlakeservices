import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getClient, type ClientResearch } from '../registry'

import incisionCompetitive from './incision/competitive-landscape.md?raw'
import incisionInvestment from './incision/investment-market.md?raw'

// Map (client slug, research category) → markdown content. Add more entries
// here as research files are imported into the site bundle.
const RESEARCH_BODIES: Record<string, string> = {
  'incision/competitive': incisionCompetitive,
  'incision/investment-market': incisionInvestment,
}

export default function ResearchDoc() {
  const { slug, doc } = useParams()
  const client = slug ? getClient(slug) : undefined
  const research = client?.research?.find((r) => slugForCategory(r.category) === doc)
  const body = slug && doc ? RESEARCH_BODIES[`${slug}/${doc}`] : undefined

  if (!client || !research || !body) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link to={`/practice/internal/clients/${slug ?? ''}`} className="text-sm text-slate-500 hover:text-slate-800">
          &larr; back to client
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 mt-6">Research not found</h1>
        <p className="text-slate-500 mt-2 text-sm">
          {client ? `No research document "${doc}" for ${client.name}.` : `Client "${slug}" not found.`}
        </p>
      </div>
    )
  }

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-8 py-10">
          <Link to={`/practice/internal/clients/${client.slug}`}
                className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-6">
            <ArrowLeft size={14} /> {client.name}
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#2d6fa3' }}>
            {client.name} &middot; Research
          </p>
          <h1 className="text-2xl font-bold text-slate-900">{research.title}</h1>
          {research.generatedAt && (
            <p className="text-xs text-slate-400 mt-2">Generated {research.generatedAt} &middot; status: {research.status}</p>
          )}
        </div>
      </section>

      <section>
        <article className="max-w-4xl mx-auto px-8 py-12 prose-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </article>
      </section>
    </div>
  )
}

export function slugForCategory(cat: ClientResearch['category']): string {
  return cat
}
