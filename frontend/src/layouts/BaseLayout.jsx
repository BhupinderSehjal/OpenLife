import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function BaseLayout({
  title = 'OpenLife',
  subtitle = 'Daily Workflow & Time Management',
  children,
}) {
  return (
    <div className="min-h-screen flex text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black/40 backdrop-blur-md flex flex-col">
        <div className="px-6 py-5 text-lg font-bold border-b border-white/10">
          OpenLife
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 text-sm">
          <div className="rounded px-3 py-2 hover:bg-white/10 cursor-pointer">
            Home
          </div>
          <div className="rounded px-3 py-2 hover:bg-white/10 cursor-pointer">
            About
          </div>
          <div className="rounded px-3 py-2 hover:bg-white/10 cursor-pointer">
            Contribute
          </div>
          <div className="rounded px-3 py-2 hover:bg-white/10 cursor-pointer">
            Showcase
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex w-full flex-col gap-8 px-(--page-gutter) py-8">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h1>
            <p className="text-sm text-slate-300">{subtitle}</p>
          </div>

          {children}
        </main>

        <Footer />
      </div>
    </div>
  )
}
