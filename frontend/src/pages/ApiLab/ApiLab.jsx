import { useState } from 'react'
import { Code2, Database, KeyRound, Server, ShieldCheck } from 'lucide-react'
import GlassCard from '../../components/GlassCard/GlassCard'

const endpoints = [
  {
    method: 'GET',
    path: '/health',
    purpose: 'Check whether the backend is alive before running manual tests.',
    response: '{ "status": "ok" }',
  },
  {
    method: 'POST',
    path: '/api/tasks',
    purpose: 'Create a task with title, description, priority, period, and due date.',
    response: '{ "id": "...", "title": "Plan today" }',
  },
  {
    method: 'PATCH',
    path: '/api/tasks/{id}',
    purpose: 'Update an existing task. Invalid title or priority should return 400.',
    response: '{ "id": "...", "title": "Updated task" }',
  },
  {
    method: 'DELETE',
    path: '/api/tasks/{id}',
    purpose: 'Delete an existing task. Missing IDs should return 404.',
    response: '200 OK',
  },
]

const checks = [
  { icon: <Server className="mb-3 h-5 w-5 text-sky-200" />, title: 'Health first', body: 'Start every manual test with the health endpoint.' },
  { icon: <Database className="mb-3 h-5 w-5 text-sky-200" />, title: 'No secrets', body: 'Use fake sample values in docs and screenshots.' },
  { icon: <KeyRound className="mb-3 h-5 w-5 text-sky-200" />, title: 'Auth-ready', body: 'Keep token examples generic until auth is wired into the UI.' },
  { icon: <ShieldCheck className="mb-3 h-5 w-5 text-sky-200" />, title: 'Status codes', body: 'Document 400, 401, 404, and 500 responses consistently.' },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="rounded-md border border-white/10 bg-white/10 px-2 py-1 text-xs text-slate-300 hover:bg-white/20 hover:text-white transition-colors"
    >
      {copied ? '✓ Copied!' : 'Copy'}
    </button>
  )
}

export default function ApiLab() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <GlassCard className="p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200/30 bg-emerald-200/10">
              <Code2 className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Developer workflow</p>
              <h2 className="text-2xl font-bold text-white">A small API surface contributors can test by hand</h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200/85">
            API Lab is a frontend reference page for expected backend behavior. It gives contributors a place to add copy buttons,
            live request execution, response examples, and environment switching without touching production data.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {checks.map(({ icon, title, body }) => (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4" key={title}>
                {icon}
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Environment</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Local backend setup</h3>
          <div className="mt-5 space-y-3 rounded-xl border border-white/10 bg-slate-950/70 p-4 font-mono text-xs text-emerald-200">
            <p>cd backend</p>
            <p>npm ci</p>
            <p>npm test</p>
            <p>npm run dev</p>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Keep this page in sync with README backend setup instructions so new contributors can test APIs with confidence.
          </p>
        </GlassCard>
      </section>

      <section className="grid gap-4">
        {endpoints.map((endpoint) => (
          <div
            className="hover-grid grid gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur lg:grid-cols-[170px_1fr_240px]"
            key={`${endpoint.method}-${endpoint.path}`}
          >
            <div>
              <span className="rounded-lg border border-emerald-200/30 bg-emerald-200/10 px-3 py-1 text-xs font-bold text-emerald-100">
                {endpoint.method}
              </span>
              <p className="mt-3 font-mono text-sm text-white">{endpoint.path}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-200">{endpoint.purpose}</p>
            <div className="flex flex-col gap-1">
              <div className="flex justify-end">
                <CopyButton text={endpoint.response} />
              </div>
              <pre className="overflow-x-auto rounded-lg border border-white/10 bg-slate-950/70 p-3 text-xs text-slate-200">
                {endpoint.response}
              </pre>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}