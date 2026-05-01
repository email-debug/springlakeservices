import { Link, Outlet, useLocation } from 'react-router-dom'

export default function PracticeLayout() {
  const location = useLocation()
  const isInternal = location.pathname.startsWith('/practice/internal')
  const isClient = location.pathname.startsWith('/practice/client')

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f9f8f7' }}>
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/practice" className="flex items-center gap-3">
              <img src="/sls-logo.jpg" alt="Spring Lake Services" className="h-9 w-auto" />
              <span className="text-sm font-semibold text-slate-900">Investment Analyst Practice</span>
            </Link>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              DRAFT &mdash; INTERNAL
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/practice/internal"
              className={`transition-colors ${isInternal ? 'text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Internal
            </Link>
            <Link
              to="/practice/client"
              className={`transition-colors ${isClient ? 'text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Client View
            </Link>
            <Link to="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
              SLS Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Spring Lake Services &middot; Investment Analyst Practice (Internal Draft)
          </p>
          <p className="text-xs text-slate-400">
            Not for distribution
          </p>
        </div>
      </footer>
    </div>
  )
}
