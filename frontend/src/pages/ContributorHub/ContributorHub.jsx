import { BookOpenCheck, CircleDot, ClipboardCheck, GitPullRequestArrow, ShieldCheck, Terminal } from 'lucide-react'
import Button from '../../components/Button/Button'
import GlassCard from '../../components/GlassCard/GlassCard'

const lanes = [
  {
    title: 'Good first UI',
    count: 5,
    body: 'Small visual or interaction fixes that are safe for new contributors.',
    tags: ['React', 'Tailwind', 'Responsive'],
  },
  {
    title: 'Backend quality',
    count: 4,
    body: 'Tests, validation, and API response behavior that keep the app reliable.',
    tags: ['Node', '.NET', 'Tests'],
  },
  {
    title: 'Docs and setup',
    count: 6,
    body: 'README, setup, and maintainer notes that reduce onboarding friction.',
    tags: ['Docs', 'CI', 'Examples'],
  },
]

const checklist = [
  'Keep the pull request focused on one issue.',
  'Run the exact checks listed in the issue.',
  'Add a screenshot for visible frontend changes.',
  'Explain what changed and what was tested.',
]

const commands = [
  { label: 'Frontend lint', command: 'cd frontend && npm run lint' },
  { label: 'Frontend build', command: 'cd frontend && npm run build' },
  { label: 'Node backend tests', command: 'cd backend && npm test' },
  { label: '.NET backend tests', command: 'dotnet test backend-dotnet/OpenLife.DotNet.slnx' },
]

export default function ContributorHub() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <GlassCard className="p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200/30 bg-emerald-200/10">
              <GitPullRequestArrow className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Open source flow</p>
              <h2 className="text-2xl font-bold text-white">Pick a lane, verify locally, then ask for review</h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200/85">
            Contributor Hub gives maintainers and first-time contributors a quick operating view. It turns scattered setup notes into a
            clear review checklist and highlights the safest areas to improve next.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="https://github.com/BhupinderSehjal/OpenLife/issues" variant="primary">
              View issues
            </Button>
            <Button to="/contribute" variant="secondary">
              Contribution guide
            </Button>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-sky-200" />
            <h3 className="text-xl font-semibold text-white">Review checklist</h3>
          </div>
          <div className="space-y-3">
            {checklist.map((item) => (
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3" key={item}>
                <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" />
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {lanes.map((lane) => (
          <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur" key={lane.title}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-white">{lane.title}</h3>
              <span className="rounded-full border border-emerald-200/30 bg-emerald-200/10 px-3 py-1 text-xs font-bold text-emerald-100">
                {lane.count}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{lane.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {lane.tags.map((tag) => (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="p-6">
          <div className="mb-4 flex items-center gap-3">
            <BookOpenCheck className="h-5 w-5 text-amber-200" />
            <h3 className="text-xl font-semibold text-white">Before opening a PR</h3>
          </div>
          <ol className="space-y-3">
            {['Link the issue number', 'Describe the behavior change', 'Paste test output', 'Wait for maintainer review'].map(
              (step, index) => (
                <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3" key={step}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-200/10 text-sm font-bold text-emerald-200">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-200">{step}</span>
                </li>
              ),
            )}
          </ol>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="mb-4 flex items-center gap-3">
            <Terminal className="h-5 w-5 text-emerald-200" />
            <h3 className="text-xl font-semibold text-white">Verification commands</h3>
          </div>
          <div className="space-y-3">
            {commands.map((item) => (
              <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4" key={item.command}>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  <CircleDot className="h-3.5 w-3.5" />
                  {item.label}
                </div>
                <code className="text-sm text-emerald-200">{item.command}</code>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>
    </div>
  )
}
