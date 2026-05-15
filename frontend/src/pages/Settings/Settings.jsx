import { useMemo, useState } from 'react'
import { Bell, Clock, Database, Moon, Save, SlidersHorizontal, SunMedium, TimerReset } from 'lucide-react'
import Button from '../../components/Button/Button'
import GlassCard from '../../components/GlassCard/GlassCard'
import { useTheme } from '../../hooks/useTheme'

const durations = [25, 45, 60, 90]
const themes = [
  { id: 'system', label: 'System', icon: <SlidersHorizontal className="h-4 w-4" /> },
  { id: 'light', label: 'Light', icon: <SunMedium className="h-4 w-4" /> },
  { id: 'dark', label: 'Dark', icon: <Moon className="h-4 w-4" /> },
]

export default function Settings() {
  const [focusDuration, setFocusDuration] = useState(45)
  const [backendUrl, setBackendUrl] = useState('http://localhost:3001')
  const [dailyReminder, setDailyReminder] = useState(true)
  const [breakReminder, setBreakReminder] = useState(true)
  const { preference: theme, resolvedTheme, setPreference: setTheme } = useTheme()

  const summary = useMemo(
    () => [
      { label: 'Focus default', value: `${focusDuration}m`, icon: <Clock className="h-5 w-5 text-emerald-200" /> },
      { label: 'Theme', value: theme === 'system' ? `system (${resolvedTheme})` : theme, icon: <Moon className="h-5 w-5 text-sky-200" /> },
      { label: 'API target', value: backendUrl.replace(/^https?:\/\//, ''), icon: <Database className="h-5 w-5 text-amber-200" /> },
    ],
    [backendUrl, focusDuration, resolvedTheme, theme],
  )

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200/30 bg-emerald-200/10">
              <SlidersHorizontal className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Preferences</p>
              <h2 className="text-2xl font-bold text-white">Tune planning defaults before connecting accounts</h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200/85">
            Theme preference is applied across the app and saved in this browser. The remaining settings are local UI state for future
            contributor work around backend URL configuration, notification toggles, and account preferences.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {summary.map((item) => (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4" key={item.label}>
                {item.icon}
                <p className="mt-3 truncate text-lg font-bold text-white">{item.value}</p>
                <p className="text-xs text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Focus</p>
              <h3 className="text-xl font-semibold text-white">Default block length</h3>
            </div>
            <TimerReset className="h-5 w-5 text-sky-200" />
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {durations.map((duration) => (
              <button
                className={`rounded-xl border px-4 py-4 text-sm font-bold transition ${
                  focusDuration === duration
                    ? 'border-emerald-200 bg-emerald-200 text-slate-950'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-emerald-200/50'
                }`}
                key={duration}
                onClick={() => setFocusDuration(duration)}
                type="button"
              >
                {duration}m
              </button>
            ))}
          </div>
          <label className="mt-5 block text-sm text-slate-200">
            Custom backend URL
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-emerald-200"
              onChange={(event) => setBackendUrl(event.target.value)}
              value={backendUrl}
            />
          </label>
        </GlassCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6">
          <div className="mb-5 flex items-center gap-3">
            <SunMedium className="h-5 w-5 text-amber-200" />
            <h3 className="text-xl font-semibold text-white">Theme preference</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {themes.map((item) => (
              <button
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  theme === item.id
                    ? 'border-sky-200 bg-sky-200 text-slate-950'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-sky-200/50'
                }`}
                key={item.id}
                onClick={() => setTheme(item.id)}
                aria-pressed={theme === item.id}
                type="button"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Current applied theme: <span className="font-semibold text-white">{resolvedTheme}</span>
          </p>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="mb-5 flex items-center gap-3">
            <Bell className="h-5 w-5 text-emerald-200" />
            <h3 className="text-xl font-semibold text-white">Reminder behavior</h3>
          </div>
          <div className="space-y-3">
            {[
              ['Daily planning reminder', dailyReminder, setDailyReminder],
              ['Break reminder after focus blocks', breakReminder, setBreakReminder],
            ].map(([label, enabled, setter]) => (
              <label className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4" key={label}>
                <span className="text-sm font-semibold text-slate-100">{label}</span>
                <input checked={enabled} className="h-5 w-5 accent-emerald-300" onChange={() => setter(!enabled)} type="checkbox" />
              </label>
            ))}
          </div>
        </GlassCard>
      </section>

      <div className="flex flex-wrap justify-end gap-3">
        <Button onClick={() => setBackendUrl('http://localhost:3001')} variant="secondary">
          Reset API URL
        </Button>
        <Button>
          <Save className="h-4 w-4" />
          Save preferences
        </Button>
      </div>
    </div>
  )
}
