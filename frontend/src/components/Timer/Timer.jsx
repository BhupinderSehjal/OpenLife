import { useEffect, useRef, useState } from 'react'

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

// Simple working timer for focus sessions
export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) {
      return
    }

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [isRunning])

  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-[0_18px_50px_rgba(15,23,42,0.4)]">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
        <span>Timer</span>
        <span className={`flex items-center gap-2 text-[10px] ${isRunning ? 'text-emerald-200' : 'text-slate-400'}`}>
          <span className={`h-2 w-2 rounded-full ${isRunning ? 'bg-emerald-300' : 'bg-white/30'}`} />
          {isRunning ? 'Running' : 'Paused'}
        </span>
      </div>
      <div className="mb-3 font-mono text-3xl font-bold text-white">{formatTime(seconds)}</div>
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
        <button
          className="rounded-full border border-emerald-300/60 bg-emerald-300/20 px-3 py-2 text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-300/30 hover:shadow-[0_10px_24px_rgba(105,255,226,0.3)] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          type="button"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="rounded-full border border-rose-300/60 bg-rose-300/15 px-3 py-2 text-rose-100 transition hover:-translate-y-0.5 hover:bg-rose-300/30 hover:shadow-[0_10px_24px_rgba(251,113,133,0.25)] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300"
          type="button"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-white/80 transition hover:-translate-y-0.5 hover:border-emerald-200/70 hover:text-emerald-100 hover:shadow-[0_10px_24px_rgba(105,255,226,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}