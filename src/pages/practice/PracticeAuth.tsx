import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// Casual access gate. The password lives in client-side source — anyone who
// views page source can read it. Treat as "keep casual visitors out" not real
// security. Don't put anything truly sensitive in /practice/* until this is
// replaced with a server-side gate.
const ACCESS_CODE = '2RaiseMore!'
const STORAGE_KEY = 'practice-auth-v1'

function isAuthed(): boolean {
  if (typeof window === 'undefined') return false
  return window.sessionStorage.getItem(STORAGE_KEY) === 'ok'
}

export default function PracticeAuth() {
  const [authed, setAuthed] = useState<boolean>(() => isAuthed())
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (input === ACCESS_CODE) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, 'ok')
      } catch {
        // sessionStorage can fail in private modes; auth still works for this tab
      }
      setAuthed(true)
      setError('')
    } else {
      setError('Incorrect access code.')
      setInput('')
    }
  }

  if (authed) return <Outlet />

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f9f8f7' }}>
      <div className="bg-white rounded-xl border border-slate-200 p-10 max-w-md w-full mx-4 shadow-sm">
        <img src="/sls-logo.jpg" alt="Spring Lake Services" className="h-12 w-auto mb-8" />
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d6fa3' }}>
          Investment Analyst Practice
        </p>
        <h1 className="text-xl font-semibold text-slate-900 mb-2">Internal draft</h1>
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          This area is a working draft for the team. Enter the access code to continue.
        </p>
        <form onSubmit={submit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-slate-500 focus:outline-none text-sm"
            placeholder="Access code"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white font-medium text-sm transition-colors hover:opacity-90"
            style={{ backgroundColor: '#2d6fa3' }}
          >
            Continue
          </button>
        </form>
        <p className="text-xs text-slate-400 mt-6 leading-relaxed">
          Trouble? Contact Tim Mattingly.
        </p>
      </div>
    </div>
  )
}
