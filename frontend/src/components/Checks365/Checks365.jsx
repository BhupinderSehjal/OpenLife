import React, { useEffect, useMemo, useState } from 'react'
import './Checks365.css' // Import the CSS file for styling
import { messages as messagesArray } from './messagesarray'

const DaysGrid = ({
  size = 'clamp(6px, 1.2vw, 14px)',
  gap = 'clamp(4px, 1vw, 12px)',
  currentDay = 1,
}) => {
  const days = Array.from({ length: 365 }, (_, i) => i + 1)
  const sizeValue = typeof size === 'number' ? `${size}px` : size
  const gapValue = typeof gap === 'number' ? `${gap}px` : gap

  return (
    <div
      className="days-grid"
      style={{ '--dot-size': sizeValue, '--dot-gap': gapValue }}
      aria-label="365 days grid"
      role="grid"
    >
      {days.map((day) => (
        <button
          key={day}
          className={`day-dot ${day < currentDay ? 'day-dot-past' : day === currentDay ? 'day-dot-current' : 'day-dot-future'}`}
          role="gridcell"
          aria-label={`Day ${day}`}
          title={`Day ${day}`}
          onClick={(e) => e.currentTarget.classList.toggle('selected')}
        />
      ))}
    </div>
  )
}

const Checks365 = () => {
  const [now, setNow] = useState(() => new Date())
  const timeZone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local',
    []
  )

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const dateTimeFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        dateStyle: 'full',
        timeStyle: 'medium',
        timeZone,
      }),
    [timeZone]
  )

  const msPerDay = 24 * 60 * 60 * 1000
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999)
  const daysLeft = Math.max(0, Math.ceil((endOfYear - now) / msPerDay))

  const [dailyMessage, setDailyMessage] = useState(
    () => messagesArray[Math.floor(Math.random() * messagesArray.length)]
  )

  useEffect(() => {
    const pickMessage = () =>
      messagesArray[Math.floor(Math.random() * messagesArray.length)]

    const id = setInterval(() => {
      setDailyMessage(pickMessage())
    }, 60 * 1000)

    return () => clearInterval(id)
  }, [])

  const dayOfYear = Math.floor(
    (now - new Date(now.getFullYear(), 0, 0)) / msPerDay
  )

  return (
    
      <div className="hover-grid w-full rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-18 py-9 backdrop-blur">
        <p className="text-xl font-semibold uppercase tracking-[0.2em] text-emerald-400">Days That Matter</p>
        <div className="mt-4 grid grid-cols-1 rounded-xl border border-emerald-300/20 bg-emerald-950/20 p-4 text-emerald-100 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Time Zone</p>
            <p className="mt-1 text-base font-semibold text-emerald-50">{timeZone}</p>  
          </div>
          
          <div>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Today</p>
            <p className="mt-1 text-base font-semibold text-emerald-50">{dateTimeFormatter.format(now)}</p>
          </div>
          
          <div>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Days Left This Year</p>
            <p className="mt-1 text-2xl font-semibold text-emerald-50">{daysLeft}</p>
          </div>

          <div>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Motivation</p>
            <p className="mt-1 text-base text-emerald-100">{dailyMessage}</p>
          </div>
          
        </div>
        <div className='mt-8'>
          <DaysGrid currentDay={dayOfYear} />
        </div>
        
      </div>
  
  )
}

export default Checks365
