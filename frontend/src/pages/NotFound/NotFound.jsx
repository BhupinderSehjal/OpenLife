import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
   <div className="flex min-h-[60vh] items-center justify-center py-12">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Page not found</p>

        <h1 className="mt-4 text-6xl font-bold text-white sm:text-8xl">404</h1>

        <p className="mx-auto mt-4 max-w-md text-slate-200/85">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
