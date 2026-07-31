import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import OpenLifeLogo from '../../assets/OpenLife_Logo.png'

const linkClass =
  'rounded-lg px-3 py-2 text-sm font-semibold text-slate-100 transition hover:text-emerald-200 hover:bg-white/10'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-transparent backdrop-blur-xl">
      <div className="flex w-full items-center justify-between gap-4 px-[var(--page-gutter)] py-3">
        <Link className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-emerald-100" to="/">
          <img className="h-12 w-12 object-contain" src={OpenLifeLogo} alt="OpenLife logo" />
          OpenLife
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/contribute">
            Contribute
          </NavLink>
          <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/planner">
            Planner
          </NavLink>
          <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/insights">
            Insights
          </NavLink>
          <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/api-lab">
            API Lab
          </NavLink>
          <NavLink
            className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`}
            to="/contributor-hub"
          >
            Hub
          </NavLink>
          <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/showcase">
            Showcase
          </NavLink>
          <a
            className={linkClass}
            href="https://github.com/BhupinderSehjal/OpenLife"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contribute" variant="secondary" className="hidden sm:inline-flex">
            Contribute
          </Button>
          <Button to="/settings" variant="primary">
            Settings
          </Button>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-200/70 md:hidden"
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-slate-950/95 px-[var(--page-gutter)] py-3 md:hidden"
          id="mobile-navigation"
        >
          <div className="grid gap-2">
            <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/planner" onClick={() => setIsMobileMenuOpen(false)}>
              Planner
            </NavLink>
            <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/insights" onClick={() => setIsMobileMenuOpen(false)}>
              Insights
            </NavLink>
            <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/api-lab" onClick={() => setIsMobileMenuOpen(false)}>
              API Lab
            </NavLink>
            <NavLink className={({ isActive }) => `${linkClass} ${isActive ? 'text-emerald-200' : ''}`} to="/contribute" onClick={() => setIsMobileMenuOpen(false)}>
              Contribute
            </NavLink>
            <a
              className={linkClass}
              href="https://github.com/BhupinderSehjal/OpenLife"
              rel="noreferrer"
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
