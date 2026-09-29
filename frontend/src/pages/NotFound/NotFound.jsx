import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <h2 className="text-6xl font-bold text-white">404</h2>

      <p className="text-xl text-slate-300">
        Oops! Page not found.
      </p>

      <p className="text-slate-400">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  )
}