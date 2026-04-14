import { ArrowUpRight, Briefcase, Code2 } from 'lucide-react'

const VENTURES = [
  {
    name: 'Smarter Travel Planner',
    domain: 'SmarterTravelPlanner.com',
    href: 'https://www.smartertravelplanner.com',
    description: 'AI-powered trip planning that handles the complexity so you can focus on the adventure.',
    category: 'Technology',
  },
  {
    name: 'Tim Mattingly',
    domain: 'TimMattingly.com',
    href: 'https://www.timmattingly.com',
    description: 'Advisory services, writing, and professional background.',
    category: 'Advisory',
  },
  {
    name: 'Build Engine',
    domain: 'TimMattingly.com/projects/build-engine',
    href: 'https://timmattingly.com/projects/build-engine',
    description: 'An autonomous AI build orchestration system for managing parallel development sprints.',
    category: 'Technology',
  },
]

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f9f8f7' }}>
      {/* Nav */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 h-20 flex items-center justify-between">
          <img src="/sls-logo.jpg" alt="Spring Lake Services" className="h-14 w-auto" />
          <a
            href="https://www.timmattingly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
          >
            TimMattingly.com
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-8 py-20">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#2d6fa3' }}
            >
              Spring Lake Services
            </p>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Advisory Services &<br />Technology Projects
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              A personal holding company for Tim Mattingly's advisory work and
              software ventures. Strategy and product counsel for growing
              companies, alongside digital tools built for real-world use.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-8 py-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
              What We Do
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Advisory */}
              <div className="bg-white rounded-xl border border-slate-200 p-8">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#f0f7fc' }}
                >
                  <Briefcase size={20} style={{ color: '#2d6fa3' }} />
                </div>
                <h3 className="text-slate-900 font-semibold text-lg mb-3">Advisory Services</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Strategy, product direction, and operational guidance for
                  startups and growth-stage companies. Drawing on experience
                  across product development, team building, and go-to-market
                  execution.
                </p>
              </div>

              {/* Technology */}
              <div className="bg-white rounded-xl border border-slate-200 p-8">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#f0f7fc' }}
                >
                  <Code2 size={20} style={{ color: '#2d6fa3' }} />
                </div>
                <h3 className="text-slate-900 font-semibold text-lg mb-3">Technology Projects</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Software products and AI-powered applications designed for
                  practical, everyday use. Built with modern tooling and a
                  focus on delivering real value — not demos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ventures */}
        <section className="border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-8 py-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
              Ventures
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {VENTURES.map((v) => (
                <a
                  key={v.domain}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: '#f0f7fc', color: '#2d6fa3' }}
                      >
                        {v.category}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-300 group-hover:text-slate-500 transition-colors mt-0.5"
                    />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-base mb-1">{v.name}</h3>
                  <p className="text-xs font-mono text-slate-400 mb-3">{v.domain}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
                </a>
              ))}

              {/* Placeholder */}
              <div className="bg-white rounded-xl border border-slate-200 border-dashed p-8 flex items-center justify-center">
                <p className="text-slate-300 text-sm">More coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Spring Lake Services
          </p>
          <p className="text-xs text-slate-400">
            springlakeservices.com
          </p>
        </div>
      </footer>
    </div>
  )
}
