import DailySummary from '../../components/DailySummary/DailySummary'
import Tasks from './../../components/Tasks/Tasks'
import Timer from '../../components/Timer/Timer'
import Button from '../../components/Button/Button'
import Checks365 from '../../components/Checks365/Checks365'

const Card = ({ title, children }) => (
  <div className="hover-grid group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/50 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
    <h2 className="mb-2 text-lg font-semibold text-white">{title}</h2>
    <p className="text-sm leading-relaxed text-slate-300">{children}</p>
  </div>
)

export default function Home() {
  return (
    <div className="space-y-8">
      <Checks365 />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="hover-grid rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-7 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Welcome</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Plan your day and understand where your time goes</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            A beginner-friendly, open-source workspace where you can plan your day, protect focus time, and learn how to build React
            components alongside the community.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/showcase" variant="primary">
              Explore UI
            </Button>
            <Button to="/contribute" variant="secondary">
              Contribute
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100/80">
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3 py-1">Focus blocks</span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3 py-1">Time insights</span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3 py-1">Daily review</span>
          </div>
        </div>

        <div className="hover-grid rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Focus snapshot</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-slate-300">Today</p>
              <p className="text-2xl font-bold text-white">2h 40m</p>
            </div>
            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-slate-300">Deep work</p>
              <p className="text-2xl font-bold text-white">3 blocks</p>
            </div>
            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-slate-300">Breaks</p>
              <p className="text-2xl font-bold text-white">4</p>
            </div>
            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-slate-300">Energy</p>
              <p className="text-2xl font-bold text-white">High</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Use this space to summarize the day at a glance. Replace the stats with live data as you build.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card title="What OpenLife is">
          OpenLife is a simple tool that helps you organize your tasks,
          plan your time, and stay focused on what matters most.
          It is designed to be easy to use, even if you are just starting
          with productivity tools.
        </Card>
        <Card title="Why time awareness matters">
         Managing your time helps you reduce stress, avoid last-minute rushes,
         and make steady progress toward your goals.
         When your tasks are organized, you can focus better and feel more
         in control of your day.
        </Card>
        <Card title="How beginners can contribute">
          Start by editing the placeholder components below. Swap the text, add inputs, and try new layouts. Small pull requests are
          perfect here.
        </Card>
      </div>

      <section className="hover-grid rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 backdrop-blur">
        <h2 className="text-xl font-bold text-white">Daily planning and time tracking for better focus</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            OpenLife brings daily planning, time tracking, and habit reflection into one open-source productivity workspace. Plan
            focused work alongside routines and breaks, then review the day to understand which activities supported your goals.
          </p>
          <p>
            The goal is not to fill every minute. OpenLife helps you build a realistic workflow, notice patterns in your time, and make
            small improvements without losing space for recovery. Your daily plan and productivity insights stay clear enough to use
            consistently and simple enough for new contributors to extend.
          </p>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <Tasks />
        <Timer />
        <DailySummary />
      </div>

      <div className="hover-grid rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
        <p className="font-semibold text-white">Next steps for beginners</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Pick one placeholder above and add a tiny improvement.</li>
          <li>Use Tailwind classes to style buttons, inputs, or cards.</li>
          <li>Share your change as a pull request and ask for feedback.</li>
        </ul>
        {/* BEGINNER: Add your own quick-start steps or learning resources here */}
      </div>

      <div className="hover-grid rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-7 text-sm text-slate-200 backdrop-blur">
        <h2 className="mb-2 text-xl font-bold text-emerald-200">How to Contribute</h2>
        <p className="mb-6 leading-relaxed text-slate-300">
          This project is designed for beginners to learn the professional open-source workflow. Follow these detailed steps to make
          your first contribution.
        </p>

        <div className="space-y-8">
          <div className="hover-grid relative rounded-xl border border-white/5 border-l border-emerald-500/30 bg-white/0 p-4 pl-8 transition hover:border-emerald-300/40 hover:bg-white/5">
            <div className="absolute left-2 top-5 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <h3 className="text-base font-bold text-white">1. Fork & Understand</h3>
            <p className="mt-1 text-slate-300">
              Click the <span className="font-semibold text-emerald-300 underline">'Fork'</span> button at the top-right. This creates
              a personal "sandbox" copy of this project on your GitHub account, so you can experiment safely without breaking the
              original code.
            </p>
          </div>

          <div className="hover-grid relative rounded-xl border border-white/5 border-l border-emerald-500/30 bg-white/0 p-4 pl-8 transition hover:border-emerald-300/40 hover:bg-white/5">
            <div className="absolute left-2 top-5 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <h3 className="text-base font-bold text-white">2. Clone & Sync</h3>
            <p className="mt-1 text-slate-300">
              Bring your copy to your computer and set up the connection to the original project:
            </p>
            <div className="mt-3 rounded-lg border border-white/5 bg-black/40 p-3 font-mono text-[11px] text-emerald-300/90">
              <p>git clone https://github.com/YOUR_USERNAME/OpenLife.git</p>
              <p className="text-slate-500"># Move into the folder and install tools</p>
              <p>cd OpenLife && npm install</p>
            </div>
          </div>

          <div className="hover-grid relative rounded-xl border border-white/5 border-l border-emerald-500/30 bg-white/0 p-4 pl-8 transition hover:border-emerald-300/40 hover:bg-white/5">
            <div className="absolute left-2 top-5 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <h3 className="text-base font-bold text-white">3. Create a Branch (Important!)</h3>
            <p className="mt-1 text-slate-300">
              Never work on 'main'. Create a new branch for your feature to keep changes organized:
            </p>
            <div className="mt-3 rounded-lg border border-white/5 bg-black/40 p-3 font-mono text-[11px] text-emerald-300/90">
              <p>git checkout -b feature/your-feature-name</p>
            </div>
          </div>

          <div className="hover-grid relative rounded-xl border border-white/5 bg-white/0 p-4 pl-8 transition hover:border-emerald-300/40 hover:bg-white/5">
            <div className="absolute left-2 top-5 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <h3 className="text-base font-bold text-white">4. Push & Pull Request</h3>
            <p className="mt-1 text-slate-300">
              Upload your work and ask for a review. In professional dev, your code is merged only after a
              <span className="text-emerald-300"> "Reviewer Approval" </span> to ensure quality.
            </p>
            <div className="mt-3 rounded-lg border border-white/5 bg-black/40 p-3 font-mono text-[11px] text-emerald-300/90">
              <p>git add .</p>
              <p>git commit -m "Add: my new feature explanation"</p>
              <p>git push origin feature/your-feature-name</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
