import { useEffect, useMemo, useState } from 'react'
import { CalendarDays, CheckCircle2, Clock3, Plus, RotateCcw, Target } from 'lucide-react'
import Button from '../../components/Button/Button'
import GlassCard from '../../components/GlassCard/GlassCard'

const PLANNER_STORAGE_KEY = 'openlife.planner.blocks'

const defaultBlocks = [
  { id: 1, title: 'Morning planning', time: '08:30', duration: 20, type: 'Routine', done: true },
  { id: 2, title: 'Deep work sprint', time: '10:00', duration: 90, type: 'Focus', done: false },
  { id: 3, title: 'Learning block', time: '15:30', duration: 45, type: 'Growth', done: false },
]

const typeStyles = {
  Focus: 'border-emerald-300/40 bg-emerald-300/10 text-emerald-100',
  Routine: 'border-sky-300/40 bg-sky-300/10 text-sky-100',
  Growth: 'border-amber-300/40 bg-amber-300/10 text-amber-100',
}

function readStoredBlocks() {
  try {
    const savedBlocks = localStorage.getItem(PLANNER_STORAGE_KEY)
    if (!savedBlocks) return defaultBlocks

    const parsedBlocks = JSON.parse(savedBlocks)
    return Array.isArray(parsedBlocks) ? parsedBlocks : defaultBlocks
  } catch {
    return defaultBlocks
  }
}

export default function Planner() {
  const [blocks, setBlocks] = useState(readStoredBlocks)
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('17:00')
  const [duration, setDuration] = useState(30)

  useEffect(() => {
    localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(blocks))
  }, [blocks])

  const totals = useMemo(() => {
    const planned = blocks.reduce((sum, block) => sum + Number(block.duration), 0)
    const complete = blocks.filter((block) => block.done).length
    return { planned, complete }
  }, [blocks])

  function addBlock(event) {
    event.preventDefault()
    const nextTitle = title.trim()
    if (!nextTitle) return

    setBlocks((current) => [
      ...current,
      {
        id: Date.now(),
        title: nextTitle,
        time,
        duration: Number(duration),
        type: 'Focus',
        done: false,
      },
    ])
    setTitle('')
  }

  function toggleBlock(id) {
    setBlocks((current) => current.map((block) => (block.id === id ? { ...block, done: !block.done } : block)))
  }

  function resetBlocks() {
    localStorage.removeItem(PLANNER_STORAGE_KEY)
    setBlocks(defaultBlocks)
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200/30 bg-emerald-200/10">
                  <CalendarDays className="h-5 w-5 text-emerald-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Today</p>
                  <h2 className="text-2xl font-bold text-white">Build a realistic day before it starts</h2>
                </div>
              </div>
              <button
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-white/20 hover:text-white"
                onClick={resetBlocks}
                type="button"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>
            <p className="text-sm leading-relaxed text-slate-200/85">
              Use the planner to split the day into small commitments. Blocks are saved in this browser so the plan stays available
              after refresh; contributors can later connect it to the backend task API.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <Clock3 className="mb-3 h-5 w-5 text-sky-200" />
                <p className="text-2xl font-bold text-white">{totals.planned}m</p>
                <p className="text-xs text-slate-300">planned time</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-200" />
                <p className="text-2xl font-bold text-white">{totals.complete}</p>
                <p className="text-xs text-slate-300">completed blocks</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <Target className="mb-3 h-5 w-5 text-amber-200" />
                <p className="text-2xl font-bold text-white">{blocks.length}</p>
                <p className="text-xs text-slate-300">daily commitments</p>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <form className="space-y-4" onSubmit={addBlock}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Add block</p>
              <h3 className="mt-1 text-xl font-semibold text-white">Schedule a focus block</h3>
            </div>
            <label className="block text-sm text-slate-200">
              Title
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-emerald-200"
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Write a proposal"
                value={title}
              />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm text-slate-200">
                Start
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-emerald-200"
                  onChange={(event) => setTime(event.target.value)}
                  type="time"
                  value={time}
                />
              </label>
              <label className="block text-sm text-slate-200">
                Minutes
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-emerald-200"
                  min="10"
                  onChange={(event) => setDuration(event.target.value)}
                  step="5"
                  type="number"
                  value={duration}
                />
              </label>
            </div>
            <Button className="w-full" type="submit">
              <Plus className="h-4 w-4" />
              Add to today
            </Button>
          </form>
        </GlassCard>
      </section>

      <section className="grid gap-4">
        {blocks.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <p className="text-sm text-slate-400">No scheduled blocks yet. Add a focus block above to start planning your day!</p>
          </div>
        ) : (
          blocks.map((block) => (
            <button
              className="hover-grid flex w-full flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition hover:border-emerald-200/40 sm:flex-row sm:items-center sm:justify-between"
              key={block.id}
              onClick={() => toggleBlock(block.id)}
              type="button"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    block.done ? 'border-emerald-200 bg-emerald-200 text-slate-950' : 'border-white/30'
                  }`}
                >
                  {block.done ? <CheckCircle2 className="h-4 w-4" /> : null}
                </span>
                <div>
                  <p className={`font-semibold ${block.done ? 'text-slate-300 line-through' : 'text-white'}`}>{block.title}</p>
                  <p className="text-sm text-slate-300">
                    {block.time} · {block.duration} minutes
                  </p>
                </div>
              </div>
              <span className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${typeStyles[block.type]}`}>
                {block.type}
              </span>
            </button>
          ))
        )}
      </section>
    </div>
  )
}
