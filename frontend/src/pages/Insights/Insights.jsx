import { Activity, BarChart3, BatteryCharging, Moon, TrendingUp } from 'lucide-react'
import GlassCard from '../../components/GlassCard/GlassCard'

const days = [
  { day: 'Mon', focus: 150, admin: 45, recovery: 35 },
  { day: 'Tue', focus: 95, admin: 70, recovery: 45 },
  { day: 'Wed', focus: 180, admin: 50, recovery: 30 },
  { day: 'Thu', focus: 130, admin: 80, recovery: 40 },
  { day: 'Fri', focus: 165, admin: 55, recovery: 55 },
]

const recommendations = [
  'Move one admin task after lunch to protect the morning focus window.',
  'Add a 15 minute recovery break after any block longer than 90 minutes.',
  'Keep Friday planning light so weekly review does not compete with deep work.',
]

export default function Insights() {
  const weeklyData = days.filter(Boolean)
  const chartSegments = [
    { key: 'focus', label: 'Focus', className: 'bg-emerald-300', textClassName: 'text-emerald-200' },
    { key: 'admin', label: 'Admin', className: 'bg-sky-300', textClassName: 'text-sky-200' },
    { key: 'recovery', label: 'Recovery', className: 'bg-indigo-300', textClassName: 'text-indigo-200' },
  ]
  const maxTotal = Math.max(
    1,
    ...weeklyData.map((day) =>
      chartSegments.reduce((sum, segment) => sum + Number(day[segment.key] ?? 0), 0)
    )
  )
  const totalFocus = days.reduce((sum, day) => sum + day.focus, 0)
  const totalRecovery = days.reduce((sum, day) => sum + day.recovery, 0)

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200/30 bg-sky-200/10">
              <BarChart3 className="h-5 w-5 text-sky-200" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Weekly signal</p>
              <h2 className="text-2xl font-bold text-white">Focus is strongest when recovery is planned</h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200/85">
            This page is a frontend-ready analytics surface. The current data is static, which makes it a good target for contributor
            issues around API integration, charts, and exports.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <TrendingUp className="mb-3 h-5 w-5 text-emerald-200" />
              <p className="text-2xl font-bold text-white">{Math.round(totalFocus / 60)}h</p>
              <p className="text-xs text-slate-300">focus this week</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <Moon className="mb-3 h-5 w-5 text-indigo-200" />
              <p className="text-2xl font-bold text-white">{totalRecovery}m</p>
              <p className="text-xs text-slate-300">recovery time</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <BatteryCharging className="mb-3 h-5 w-5 text-amber-200" />
              <p className="text-2xl font-bold text-white">82%</p>
              <p className="text-xs text-slate-300">balance score</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Focus minutes</p>
              <h3 className="text-xl font-semibold text-white">Five-day trend</h3>
            </div>
            <Activity className="h-5 w-5 text-emerald-200" />
          </div>
          {weeklyData.length > 0 ? (
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3" aria-label="Chart legend">
                {chartSegments.map((segment) => (
                  <span className={`inline-flex items-center gap-2 text-xs font-semibold ${segment.textClassName}`} key={segment.key}>
                    <span className={`h-2.5 w-2.5 rounded-full ${segment.className}`} />
                    {segment.label}
                  </span>
                ))}
              </div>
              <div className="space-y-4" role="list" aria-label="Weekly activity minutes by category">
                {weeklyData.map((day) => {
                  const totalMinutes = chartSegments.reduce(
                    (sum, segment) => sum + Number(day[segment.key] ?? 0),
                    0
                  )

                  return (
                    <div className="grid grid-cols-[44px_1fr_58px] items-center gap-3" key={day.day} role="listitem">
                      <span className="text-sm font-semibold text-slate-200">{day.day}</span>
                      <div
                        aria-label={`${day.day}: ${day.focus} focus minutes, ${day.admin} admin minutes, ${day.recovery} recovery minutes`}
                        className="h-4 overflow-hidden rounded-full bg-white/10"
                      >
                        <div className="flex h-full rounded-full" style={{ width: `${(totalMinutes / maxTotal) * 100}%` }}>
                          {chartSegments.map((segment) => {
                            const segmentMinutes = Number(day[segment.key] ?? 0)

                            return segmentMinutes > 0 ? (
                              <span
                                aria-hidden="true"
                                className={`h-full ${segment.className}`}
                                key={segment.key}
                                style={{ width: `${(segmentMinutes / totalMinutes) * 100}%` }}
                              />
                            ) : null
                          })}
                        </div>
                      </div>
                      <span className="text-right text-sm text-slate-300">{totalMinutes}m</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-white/15 bg-white/5 p-5 text-sm text-slate-300">
              Weekly insight data will appear here after focus, admin, or recovery minutes are recorded.
            </div>
          )}
        </GlassCard>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {recommendations.map((item, index) => (
          <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur" key={item}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-200/10 text-sm font-bold text-emerald-200">
              {index + 1}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">{item}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
