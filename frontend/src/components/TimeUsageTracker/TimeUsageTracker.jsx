import React, { useState, useEffect } from 'react';
import { Clock, Plus, Trash2, Calendar, Tag, FileText } from 'lucide-react';
import { getActivities, addActivity, deleteActivity } from '../../services/timeTrackingAPI';  
import { categories } from '../../services/timeTrackingData';

const TimeUsageTracker = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newActivity, setNewActivity] = useState({
    category: '',
    startTime: '',
    endTime: '',
    notes: ''
  });

  useEffect(() => {
    let isActive = true;

    async function loadInitialActivities() {
      try {
        const data = await getActivities();
        if (isActive) {
          setActivities(data);
        }
      } catch (error) {
        console.error('Failed to load activities:', error);
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    Promise.resolve().then(loadInitialActivities);

    return () => {
      isActive = false;
    };
  }, []);

  const calculateDuration = (start, end) => {
    if (!start || !end) return '';
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);
    const startMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;
    const diff = endMinutes - startMinutes;
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  const handleAddActivity = async () => {
    if (newActivity.category && newActivity.startTime && newActivity.endTime) {
      try {
        const duration = calculateDuration(newActivity.startTime, newActivity.endTime);
        const activityToAdd = { ...newActivity, duration };
        const createdActivity = await addActivity(activityToAdd);
        setActivities([...activities, createdActivity]);
        setNewActivity({ category: '', startTime: '', endTime: '', notes: '' });
        setShowAddForm(false);
      } catch (error) {
        console.error('Failed to add activity:', error);
      }
    }
  };

  const handleDeleteActivity = async (id) => {
    try {
      await deleteActivity(id);
      setActivities(activities.filter(activity => activity.id !== id));
    } catch (error) {
      console.error('Failed to delete activity:', error);
    }
  };

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'slate';
  };

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : '📌';
  };

  const totalHours = activities.reduce((sum, activity) => {
    const [hours, minutes] = activity.duration.split(' ');
    const h = parseInt(hours) || 0;
    const m = minutes ? parseInt(minutes) : 0;
    return sum + h + (m / 60);
  }, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading activities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="hover-grid rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-7 backdrop-blur">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-1">Time Tracking</p>
              <h1 className="text-3xl font-bold text-white sm:text-4xl mb-2">Daily Time Usage</h1>
              <p className="text-sm leading-relaxed text-slate-200">Track how you spend your time throughout the day</p>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              Add Activity
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="hover-grid rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-emerald-200/30">
            <h3 className="text-lg font-semibold text-white mb-4">Log New Activity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-2">
                  <Tag className="w-3 h-3 inline mr-1" />
                  Category
                </label>
                <select
                  value={newActivity.category}
                  onChange={(e) => setNewActivity({ ...newActivity, category: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                >
                  <option value="" className="bg-slate-900">Select category</option>
                  {categories.map(cat => (
                    <option key={cat.name} value={cat.name} className="bg-slate-900">
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-2">
                  <Clock className="w-3 h-3 inline mr-1" />
                  Start Time
                </label>
                <input
                  type="time"
                  value={newActivity.startTime}
                  onChange={(e) => setNewActivity({ ...newActivity, startTime: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-2">
                  <Clock className="w-3 h-3 inline mr-1" />
                  End Time
                </label>
                <input
                  type="time"
                  value={newActivity.endTime}
                  onChange={(e) => setNewActivity({ ...newActivity, endTime: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-2">
                  Duration
                </label>
                <div className="px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-300 font-semibold">
                  {calculateDuration(newActivity.startTime, newActivity.endTime) || '--'}
                </div>
              </div>

             
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-2">
                  <FileText className="w-3 h-3 inline mr-1" />
                  Notes (Optional)
                </label>
                <textarea
                  value={newActivity.notes}
                  onChange={(e) => setNewActivity({ ...newActivity, notes: e.target.value })}
                  placeholder="Add context or notes about this activity..."
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none"
                  rows="3"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddActivity}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                Add Activity
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-white">Today's Activities</h2>
            {activities.length === 0 ? (
              <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
                <Clock className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                <p className="text-slate-400">No activities logged yet. Add your first activity!</p>
              </div>
            ) : (
              activities.map((activity) => (
                <div
                  key={activity.id}
                  className="hover-grid group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/30 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(15,23,42,0.3)]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-${getCategoryColor(activity.category)}-500/10 border border-${getCategoryColor(activity.category)}-500/20 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110`}>
                      {getCategoryIcon(activity.category)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold">{activity.category}</h3>
                        <span className={`px-2.5 py-1 rounded-md text-xs font-bold bg-${getCategoryColor(activity.category)}-500/10 text-${getCategoryColor(activity.category)}-400 border border-${getCategoryColor(activity.category)}-500/20`}>
                          {activity.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {activity.startTime} - {activity.endTime}
                        </span>
                      </div>
                      {activity.notes && (
                        <p className="text-sm text-slate-300 leading-relaxed">{activity.notes}</p>
                      )}
                    </div>

                    <button
                      onClick={() => handleDeleteActivity(activity.id)}
                      className="flex-shrink-0 p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Daily Summary</h2>
            
            <div className="hover-grid rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_8px_20px_rgba(16,185,129,0.15)]">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300 mb-2">Total Time Tracked</p>
              <p className="text-4xl font-bold text-white">{totalHours.toFixed(1)}h</p>
              <p className="text-xs text-slate-400 mt-1">{activities.length} activities logged</p>
            </div>

            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-white/20">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 mb-4">Category Breakdown</p>
              <div className="space-y-3">
                {categories.map(category => {
                  const categoryActivities = activities.filter(a => a.category === category.name);
                  const totalTime = categoryActivities.reduce((sum, a) => {
                    const [hours, minutes] = a.duration.split(' ');
                    const h = parseInt(hours) || 0;
                    const m = minutes ? parseInt(minutes) : 0;
                    return sum + h + (m / 60);
                  }, 0);
                  
                  if (totalTime === 0) return null;
                  
                  return (
                    <div key={category.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-sm text-slate-300">{category.name}</span>
                      </div>
                      <span className="text-sm font-bold text-white">{totalTime.toFixed(1)}h</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hover-grid rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-white/20">
              <div className="flex items-center gap-2 text-slate-300 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em]">Today's Date</span>
              </div>
              <p className="text-white font-semibold">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeUsageTracker;
