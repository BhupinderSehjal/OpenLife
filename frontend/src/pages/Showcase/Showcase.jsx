import GlassCard from '../../components/GlassCard/GlassCard'
import TimerCard from '../../components/TimerCard/TimerCard'
import Button from '../../components/Button/Button'

export default function Showcase() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Components</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">UI Showcase</h2>
        <p className="text-base text-slate-200/85">
          This page surfaces reusable components that are easy to miss in the main flow. Use it as a playground when polishing the UI.
        </p>
      </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white">Glass Card</h3>
          <p className="mt-2 text-sm text-slate-200/85">
            A floating panel with sheen and depth. Use for feature callouts, metrics, or short content blocks.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </GlassCard>

        <TimerCard />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white">Interactive states</h3>
          <p className="mt-2 text-sm text-slate-200/85">
            Pair subtle motion with clear states to keep the UI lively without being distracting.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100/80">
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3 py-1">Hover lift</span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3 py-1">Soft glow</span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3 py-1">Glass blur</span>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white">Typography rhythm</h3>
          <p className="mt-2 text-sm text-slate-200/85">
            Use a steady type scale and consistent spacing to make long-form content easy to scan.
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-200/85">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Section label</p>
            <p className="text-lg font-semibold text-white">Headline scale</p>
            <p className="text-sm text-slate-300">Body text stays calm and readable across cards.</p>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
