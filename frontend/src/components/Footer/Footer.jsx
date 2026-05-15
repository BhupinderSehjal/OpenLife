import { Link } from 'react-router-dom';
import OpenLifeLogo from '../../assets/OpenLife_Logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent px-(--page-gutter) py-6 backdrop-blur">
      <div className="flex w-full flex-col items-center justify-between gap-4 text-xs text-slate-400 md:flex-row">
        
        {/* Left Side: Tech Stack */}
        <div className="flex items-center gap-2">
          <img className="h-10 w-10 object-contain" src={OpenLifeLogo} alt="OpenLife logo" />
          <span>Built with React + Vite + Tailwind</span>
        </div>

        {/* Center/Right: Navigation Links */}
        <div className="flex flex-col items-center gap-2">
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/contribute" className="hover:text-white transition-colors">Contribute</Link>
          <Link to="/planner" className="hover:text-white transition-colors">Planner</Link>
          <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
          <Link to="/api-lab" className="hover:text-white transition-colors">API Lab</Link>
          <Link to="/contributor-hub" className="hover:text-white transition-colors">Hub</Link>
          <Link to="/settings" className="hover:text-white transition-colors">Settings</Link>
          <Link to="/showcase" className="hover:text-white transition-colors">Showcase</Link>
        </nav>

        <div className="text-center text-[11px] text-slate-500">
            <p className="uppercase tracking-wide">OpenLife – Open Source Project</p>
            <p className="text-slate-400">Built by the community</p>
        </div>
        </div>
        {/* Right Side: Copyright/Status */}
        <div>
          <span>&copy; {new Date().getFullYear()} OpenLife</span>
        </div>
        
      </div>
    </footer>
  );
}
