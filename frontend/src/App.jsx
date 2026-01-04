import { Link, Routes, Route, useLocation } from 'react-router-dom'

const SectionCard = ({ title, eyebrow, children, actions, className = '', ...rest }) => (
  <section
    className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${className}`}
    {...rest}
  >
    <div className="flex flex-col gap-4">
      {eyebrow ? (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(105,255,226,0.8)]" />
          {eyebrow}
        </div>
      ) : null}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">{title}</h2>
        <div className="text-sm leading-relaxed text-slate-200/85 sm:text-base">{children}</div>
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  </section>
)

const Nav = () => {
  const { pathname } = useLocation()
  const linkBase =
    'rounded-xl px-3 py-2 text-xs font-semibold transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-emerald-200'
  return (
    <header className="sticky top-4 z-20 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase">
        <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-emerald-300 to-indigo-400 shadow-[0_0_14px_rgba(104,150,255,0.9)]" />
        <span>OpenLife</span>
      </div>

      <nav className="hidden items-center gap-4 text-slate-200/80 md:flex">
        <Link className={`${linkBase} ${pathname === '/' ? 'text-emerald-200' : ''}`} to="/">
          Home
        </Link>
        <Link className={`${linkBase} ${pathname === '/contribute' ? 'text-emerald-200' : ''}`} to="/contribute">
          Contribute
        </Link>
        <a className={linkBase} href="#productivity">
          Productivity
        </a>
        <a className={linkBase} href="#time-audit">
          Time audit
        </a>
      </nav>

      <div className="flex items-center gap-2 text-sm font-semibold">
        <Link
          className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-200/70 hover:shadow-[0_12px_30px_rgba(105,255,226,0.18)]"
          to="/contribute"
        >
          How to contribute
        </Link>
        <a
          className="rounded-xl border border-white/15 bg-gradient-to-r from-emerald-300 to-indigo-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(105,255,226,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(105,255,226,0.45)]"
          href="#start"
        >
          Start tracking
        </a>
      </div>
    </header>
  )
}

const Hero = () => (
  <section
    id="start"
    className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:grid-cols-[1.4fr_1fr]"
    style={{ perspective: '1200px' }}
  >
    <div className="flex flex-col gap-4">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(105,255,226,0.8)]" />
        Open source · Daily life management
      </div>
      <h1>Sourav</h1>
      <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
        Track every second. <br />
        <span className="text-emerald-200 drop-shadow-[0_0_18px_rgba(155,249,223,0.6)]">Contribute</span> to build the toolkit.
      </h1>
      <p className="max-w-3xl text-base text-slate-200/80 sm:text-lg">
        OpenLife helps you map where time goes, reclaim minutes, and share improvements. It&apos;s fully open source—jump in,
        ship features, and guide daily routines that keep every second intentional.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          className="rounded-xl border border-white/15 bg-gradient-to-r from-emerald-300 to-indigo-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(105,255,226,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(105,255,226,0.45)]"
          to="/contribute"
        >
          How to contribute
        </Link>
        <a
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-200/70 hover:shadow-[0_12px_30px_rgba(105,255,226,0.18)]"
          href="#time-audit"
        >
          See time audit
        </a>
      </div>
      <div className="grid grid-cols-2 items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 sm:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300/80">Contributors</span>
          <span className="text-xl font-bold">3.2k+</span>
        </div>
        <span className="hidden h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block" />
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300/80">Daily check-ins</span>
          <span className="text-xl font-bold">12,400</span>
        </div>
        <span className="hidden h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block" />
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300/80">Time saved</span>
          <span className="text-xl font-bold">+18% avg</span>
        </div>
      </div>
    </div>

    <div
      className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-[1deg] hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
          <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(105,255,226,0.7)] animate-pulse" />
          Live focus feed
        </div>
        <span className="rounded-lg border border-emerald-200/50 bg-white/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-100">
          Realtime
        </span>
      </div>
      <p className="text-sm text-slate-200/80">See where your day flows. Share insights to improve everyone&apos;s rhythm.</p>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">Deep work</span>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">Routines</span>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">Health</span>
      </div>
      <div className="flex flex-col gap-3">
        {[
          { label: 'Design review', time: '09:30', type: 'Focus' },
          { label: 'Community PR merge', time: '12:10', type: 'Collab' },
          { label: 'Reset + stretch', time: '14:00', type: 'Energy' },
        ].map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-[18px_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition-transform duration-300 group-hover:translate-z-[10px]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-300 to-indigo-400 shadow-[0_0_12px_rgba(105,255,226,0.8)]" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-50">{item.label}</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-slate-300/80">{item.type}</span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300/80">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const ProductivitySection = () => (
  <SectionCard id="productivity" title="Every minute matters" eyebrow="Daily life management">
    <ul className="grid gap-3 md:grid-cols-2">
      {[
        'Plan morning in 5 minutes: set focus, one health action, one admin task.',
        'Batch distractions: keep a 15-minute window every 2 hours for pings and triage.',
        'Use micro-retros: 3 bullet check at night—what worked, what dragged, what to drop.',
        'Share templates: routines, checklists, and dashboards stay open for contributors to remix.',
      ].map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200/85 transition-transform duration-400 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
        >
          {item}
        </li>
      ))}
    </ul>
  </SectionCard>
)

const TimeAuditSection = () => (
  <SectionCard id="time-audit" title="Where does your time go?" eyebrow="Audit + reclaim">
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.45)]">
        <h3 className="text-lg font-semibold text-slate-50">Daily time map</h3>
        <p className="text-sm text-slate-200/80">Track focus, admin, community, and recovery blocks with live charts.</p>
        <div className="mt-3 grid gap-2">
          {[
            { label: 'Focus / deep work', percent: 42, color: 'from-emerald-300 to-indigo-400' },
            { label: 'Collaboration', percent: 26, color: 'from-sky-300 to-emerald-300' },
            { label: 'Life admin', percent: 18, color: 'from-amber-200 to-orange-300' },
            { label: 'Recovery', percent: 14, color: 'from-violet-300 to-blue-400' },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="w-28 text-sm text-slate-200/80">{row.label}</span>
              <div className="relative h-2 flex-1 rounded-full bg-white/10">
                <div
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${row.color} animate-[pulseGlow_6s_ease-in-out_infinite]`}
                  style={{ width: `${row.percent}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-slate-100">{row.percent}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.45)]">
        <h3 className="text-lg font-semibold text-slate-50">Playbook to reclaim minutes</h3>
        <div className="grid gap-2 text-sm text-slate-200/85">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="font-semibold text-slate-50">90-second resets</p>
            <p>Short resets per hour keep energy stable and protect deep-work streaks.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="font-semibold text-slate-50">Context capsules</p>
            <p>Save tiny context notes at handoff—fewer minutes lost reloading your brain.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="font-semibold text-slate-50">Community nudges</p>
            <p>Open prompts keep contributors aligned on what actually matters today.</p>
          </div>
        </div>
      </div>
    </div>
  </SectionCard>
)

const FeatureGrid = () => (
  <section className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold text-slate-50">Build together</h2>
    <div className="grid gap-4 md:grid-cols-3">
      {[
        { icon: '∞', title: 'Open by default', body: 'Transparent issues, public roadmaps, remixable routines.' },
        { icon: '✦', title: 'Glass security', body: 'Privacy-safe telemetry—see patterns without exposing people.' },
        { icon: '↺', title: 'Ship weekly', body: 'Small, weekly improvements to protect focus and energy.' },
      ].map((feature) => (
        <div
          key={feature.title}
          className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:rotate-[0.5deg] hover:shadow-[0_26px_70px_rgba(0,0,0,0.45)]"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-lg font-bold text-emerald-200 shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-slate-50">{feature.title}</h3>
          <p className="text-sm text-slate-200/80">{feature.body}</p>
        </div>
      ))}
    </div>
  </section>
)

const ContributePage = () => (
  <div className="flex flex-col gap-6">
    <SectionCard title="Contribute to OpenLife" eyebrow="Community">
      <p className="text-sm text-slate-200/85">
        This project stays alive through your ideas, code, docs, and rituals. Whether you&apos;re fixing a typo or shipping a new
        routine template, every commit helps people reclaim time.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {[
          'Fork & clone the repo, run npm install, npm run dev.',
          'Pick an issue labeled “good first issue” or propose an improvement.',
          'Add or update a routine template (focus, health, admin) in docs.',
          'Open a PR with a short demo gif or screenshots.',
        ].map((step, idx) => (
          <div
            key={step}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200/85 transition-transform duration-400 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
          >
            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-indigo-400 text-xs font-bold text-slate-900 shadow-[0_8px_20px_rgba(105,255,226,0.35)]">
              {idx + 1}
            </span>
            <span>{step}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          className="rounded-xl border border-white/15 bg-gradient-to-r from-emerald-300 to-indigo-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(105,255,226,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(105,255,226,0.45)]"
          href="https://github.com/"
        >
          View repository
        </a>
        <Link
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-200/70 hover:shadow-[0_12px_30px_rgba(105,255,226,0.18)]"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </SectionCard>

    <SectionCard title="What to build next" eyebrow="Open roadmap">
      <div className="grid gap-3 md:grid-cols-2">
        {[
          { title: 'Time-blocking presets', body: 'Reusable daily templates with smart defaults for focus, admin, and recovery.' },
          { title: 'Energy scoring', body: 'Track how you feel before and after tasks; surface trends per time of day.' },
          { title: 'Community routines', body: 'Shared rituals for contributors—coffee chats, review hours, maker days.' },
          { title: 'Mobile quick capture', body: 'Capture interruptions and tasks in seconds; auto-slot into the next block.' },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-400 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
          >
            <p className="text-base font-semibold text-slate-50">{item.title}</p>
            <p className="text-sm text-slate-200/80">{item.body}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  </div>
)

const HomePage = () => (
  <div className="flex flex-col gap-8">
    <Hero />
    <ProductivitySection />
    <TimeAuditSection />
    <FeatureGrid />
  </div>
)

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-48 -top-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,#2a7fff,rgba(42,127,255,0))] blur-[110px] opacity-70 animate-[float_14s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-56 -right-28 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,#63f5c0,rgba(99,245,192,0))] blur-[130px] opacity-70 animate-[float_16s_ease-in-out_infinite_reverse]" />

      <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-10">
        <Nav />
        <main className="relative z-10 flex flex-col gap-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contribute" element={<ContributePage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
