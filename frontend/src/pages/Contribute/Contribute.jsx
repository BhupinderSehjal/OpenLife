import GlassCard from '../../components/GlassCard/GlassCard'
import Button from '../../components/Button/Button'

const steps = [
  { title: 'Fork the repository', body: 'Create your own copy of OpenLife on GitHub to work safely.' },
  { title: 'Clone your fork', body: 'git clone your fork locally so you can run and edit the project.' },
  { title: 'Create a branch', body: 'Use a descriptive branch name (e.g., feature/ritual-templates) for your changes.' },
  { title: 'Make changes', body: 'Add components, polish UI, or improve docs. Keep commits focused and clear.' },
  { title: 'Open a Pull Request', body: 'Describe what you changed, add screenshots if relevant, and request feedback.' },
]

export default function Contribute() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Community</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Contributing to OpenLife</h2>
          <p className="w-full text-base text-slate-200/85">
            OpenLife thrives on clear, welcoming workflows. Follow the steps below, ship improvements, and leave the project better for
            the next contributor.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="https://github.com/" variant="primary">
              Open GitHub
            </Button>
            <Button to="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, idx) => (
          <GlassCard key={step.title} className="p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-emerald-300 to-indigo-400 text-sm font-bold text-slate-950 shadow-[0_10px_24px_rgba(105,255,226,0.35)]">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold text-white">{step.title}</p>
                <p className="text-sm text-slate-200/85">{step.body}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
