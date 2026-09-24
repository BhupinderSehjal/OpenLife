const chartSegments = [
  { key: 'focus', label: 'Focus', className: 'bg-emerald-300', textClassName: 'text-emerald-200' },
  { key: 'admin', label: 'Admin', className: 'bg-sky-300', textClassName: 'text-sky-200' },
  { key: 'recovery', label: 'Recovery', className: 'bg-indigo-300', textClassName: 'text-indigo-200' },
]

export default function WeeklyActivityChart({ data = [] }) {
  const maxTotal = Math.max(
    1,
    ...data.map((day) =>
      chartSegments.reduce((sum, segment) => sum + Number(day[segment.key] ?? 0), 0)
    )
  )

  if (data.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/15 bg-white/5 p-5 text-sm text-slate-300">
        Weekly insight data will appear here after focus, admin, or recovery minutes are recorded.
      </div>
    )
  }

  return (
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
        {data.map((day) => {
          const totalMinutes = chartSegments.reduce(
            (sum, segment) => sum + Number(day[segment.key] ?? 0),
            0
          )

          return (
            <div className="grid grid-cols-[44px_1fr_58px] items-center gap-3" key={day.day} role="listitem">
              <span className="text-sm font-semibold text-slate-200">{day.day}</span>
              <div
                aria-label={`${day.day}: ${day.focus ?? 0} focus minutes, ${day.admin ?? 0} admin minutes, ${day.recovery ?? 0} recovery minutes`}
                className="h-4 overflow-hidden rounded-full bg-white/10"
                role="img"
              >
                <div className="flex h-full rounded-full" style={{ width: `${(totalMinutes / maxTotal) * 100}%` }}>
                  {chartSegments.map((segment) => {
                    const segmentMinutes = Number(day[segment.key] ?? 0)

                    return segmentMinutes > 0 && totalMinutes > 0 ? (
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
  )
}