
import useStarterTasks from '../../hooks/useStarterTasks'

// Placeholder tasks list that beginners can expand
export default function Tasks() {
  const tasks = useStarterTasks()

  // BEGINNER: Swap the sample tasks below for your own data or UI
  return (
    <div className="hover-grid rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-[0_18px_50px_rgba(15,23,42,0.4)]">
      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Tasks</div>
      {tasks.length === 0 ? (
        <p className="py-2 text-slate-400 text-xs italic">No tasks yet. Add some to get started!</p>
      ) : (
        <ul className="space-y-1 text-sm text-slate-300">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
              {task.title}
            </li>
          ))}
        </ul>
      )}
      {/* BEGINNER: Add inputs, checkboxes, or drag-and-drop here */}
    </div>
  )
}
