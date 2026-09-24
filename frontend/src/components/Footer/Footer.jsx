import { Link } from 'react-router-dom'
import { GitFork, GitPullRequest, Map, ExternalLink, Heart } from 'lucide-react'
import OpenLifeLogo from '../../assets/OpenLife_Logo.png'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent px-[var(--page-gutter)] py-8 backdrop-blur" role="contentinfo">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        {/* Categorized Navigation Links & Community Call-to-Action */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img className="h-9 w-9 object-contain" src={OpenLifeLogo} alt="OpenLife logo" />
              <span className="text-base font-bold uppercase tracking-[0.14em] text-emerald-100">OpenLife</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Open-source productivity, daily planning, habit reflection, and workflow analysis app built for mindful focus.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open Source · MIT License</span>
            </div>
          </div>

          {/* Column 2: Application Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Application</h4>
            <nav className="flex flex-col space-y-2 text-xs text-slate-400" aria-label="Application links">
              <Link to="/" className="transition-colors hover:text-emerald-200">Home</Link>
              <Link to="/planner" className="transition-colors hover:text-emerald-200">Daily Planner</Link>
              <Link to="/insights" className="transition-colors hover:text-emerald-200">Productivity Insights</Link>
              <Link to="/api-lab" className="transition-colors hover:text-emerald-200">API Lab</Link>
              <Link to="/showcase" className="transition-colors hover:text-emerald-200">UI Showcase</Link>
              <Link to="/settings" className="transition-colors hover:text-emerald-200">Settings</Link>
            </nav>
          </div>

          {/* Column 3: Contribute & Community Call-to-Action */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Contribute</h4>
            <nav className="flex flex-col space-y-2 text-xs text-slate-400" aria-label="Contributor links">
              <a
                href="https://github.com/BhupinderSehjal/OpenLife"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-200"
              >
                <GitFork className="h-3.5 w-3.5 text-emerald-400" />
                <span>GitHub Repository</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
              <Link to="/contributor-hub" className="transition-colors hover:text-emerald-200">
                Contributor Hub
              </Link>
              <Link to="/contribute" className="transition-colors hover:text-emerald-200">
                Contribute Guide
              </Link>
              <a
                href="https://github.com/BhupinderSehjal/OpenLife/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-200"
              >
                <GitPullRequest className="h-3.5 w-3.5 text-emerald-400" />
                <span>Good First Issues</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
              <a
                href="https://github.com/BhupinderSehjal/OpenLife/blob/main/ROADMAP.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-200"
              >
                <Map className="h-3.5 w-3.5 text-emerald-400" />
                <span>Project Roadmap</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </nav>
          </div>

          {/* Column 4: Documentation & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Resources</h4>
            <nav className="flex flex-col space-y-2 text-xs text-slate-400" aria-label="Project resources">
              <Link to="/about" className="transition-colors hover:text-emerald-200">About OpenLife</Link>
              <a
                href="https://github.com/BhupinderSehjal/OpenLife/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-200"
              >
                <span>Contributing Docs</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
              <a
                href="https://github.com/BhupinderSehjal/OpenLife/blob/main/CONTRIBUTOR_ONBOARDING.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-200"
              >
                <span>Contributor Onboarding</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
              <a
                href="https://github.com/BhupinderSehjal/OpenLife/blob/main/CODE_OF_CONDUCT.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-200"
              >
                <span>Code of Conduct</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <span>Built with React + Vite + Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with</span>
            <Heart className="inline h-3.5 w-3.5 fill-rose-400 text-rose-400" />
            <span>by the open-source community</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} OpenLife · MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
