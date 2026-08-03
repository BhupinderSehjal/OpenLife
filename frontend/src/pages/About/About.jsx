import GlassCard from './../../components/GlassCard/GlassCard'

export default function About() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">About</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Why we are building OpenLife</h2>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-base text-slate-200/85 backdrop-blur">
          <p className="leading-relaxed">
            OpenLife is an open-source productivity and time-management project focused on helping individuals understand how they
            spend their time and how they can improve their daily workflow through reflection and data-driven insights.
          </p>
          <p className="leading-relaxed">
            The core idea behind OpenLife is simple: most people stay busy but lack clarity. OpenLife aims to bridge this gap by
            allowing users to track daily activities, analyze time usage patterns, and make small, consistent improvements over time.
          </p>
          <p className="leading-relaxed">
            Instead of being just another task tracker, OpenLife emphasizes awareness, analysis, and gradual improvement. It is
            designed to capture not only what tasks are done, but also how time flows throughout the day, helping users identify
            distractions, inefficiencies, and productivity leaks.
          </p>
          <p className="leading-relaxed">
            The project is built with a clean, API-driven and modular architecture, making it easy to extend, scale, and experiment
            with new ideas. It is intentionally kept beginner-friendly so that students, freshers, and new open-source contributors
            can learn real-world development practices while building something meaningful.
          </p>
          <p className="leading-relaxed">
            OpenLife is community-driven by design. Contributors are encouraged to participate not only through code, but also by
            proposing ideas, improving documentation, refining workflows, and shaping the long-term vision of the project together.
          </p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Bhupinder Sehjal</p>
      </div>

      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white">Vision</h3>
        <p className="mt-2 text-sm text-slate-200/85">
          Build an open-source operating system for personal productivity - one that anyone can read, remix, and rely on daily. We aim
          to keep the UI welcoming, the code approachable, and the roadmap honest about what matters.
        </p>
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white">Open-source philosophy</h3>
        <ul className="mt-2 grid gap-2 text-sm text-slate-200/85 sm:grid-cols-2">
          <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Transparent decisions and simple patterns.</li>
          <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            Contributions of all sizes - copy, design, code - are celebrated.
          </li>
          <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Privacy-first productivity with minimal data.</li>
          <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Reusable components over custom one-offs.</li>
        </ul>
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white">Roadmap highlights</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            'Dashboard for time, energy, and habits with glass cards.',
            'Template gallery for routines and daily planning flows.',
            'Theming tokens for quick brand or palette swaps.',
            'Animation hooks for contributors to showcase micro-interactions.',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200/85">
              {item}
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white">Call for designers & developers</h3>
        <p className="mt-2 text-sm text-slate-200/85">
          Designers: iterate on glass cards, typography, and motion. Developers: add routes, improve accessibility, and craft new
          components. Every contribution is a step toward a friendlier open-source productivity stack.
        </p>
      </GlassCard>
    </div>
  )
}
