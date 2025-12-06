import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  CheckCircle, 
  Plus,
  Sparkles,
  Clock,
  Zap,
  Target,
  MoreVertical,
  Calendar
} from 'lucide-react';

export function MyDay() {
  const tasks = [
    {
      id: 1,
      title: 'Review Q4 product roadmap',
      priority: 'urgent',
      energy: 'high',
      estimatedTime: '2h',
      project: 'Enterprise Platform',
      completed: false,
    },
    {
      id: 2,
      title: 'Client sync: Enterprise features',
      priority: 'high',
      energy: 'medium',
      estimatedTime: '1h',
      project: 'Enterprise Platform',
      completed: false,
    },
    {
      id: 3,
      title: 'Update sprint planning template',
      priority: 'medium',
      energy: 'low',
      estimatedTime: '1h',
      project: 'Knowledge Base',
      completed: true,
    },
    {
      id: 4,
      title: 'Team standup - share progress',
      priority: 'high',
      energy: 'medium',
      estimatedTime: '30m',
      project: 'General',
      completed: false,
    },
    {
      id: 5,
      title: 'Review design mockups',
      priority: 'medium',
      energy: 'medium',
      estimatedTime: '45m',
      project: 'Mobile App Redesign',
      completed: false,
    },
  ];

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      urgent: 'bg-red-500/10 text-red-400 border-red-500/20',
      high: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      low: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    };
    return colors[priority] || colors.medium;
  };

  const getEnergyColor = (energy: string) => {
    const colors: Record<string, string> = {
      high: 'text-violet-400',
      medium: 'text-cyan-400',
      low: 'text-emerald-400',
    };
    return colors[energy] || colors.medium;
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalTime = tasks.filter(t => !t.completed).reduce((acc, t) => {
    const time = t.estimatedTime;
    const hours = time.includes('h') ? parseInt(time) : 0;
    const mins = time.includes('m') ? parseInt(time.replace('m', '').replace('h', '').split(' ').pop() || '0') : 0;
    return acc + (hours * 60) + mins;
  }, 0);

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-white mb-2">My Day</h1>
            <p className="text-white/40">Saturday, December 6, 2025</p>
          </div>
          <Button variant="primary" size="md">
            <Plus className="w-4 h-4" />
            Add Task
          </Button>
        </div>
      </header>

      {/* Stats and AI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                <span className="text-white/60 text-sm">Progress</span>
              </div>
              <span className="text-white text-sm">{completedCount} of {tasks.length}</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all"
                style={{ width: `${(completedCount / tasks.length) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-white/60 text-sm">Total Time</span>
              </div>
              <span className="text-white text-sm">
                {Math.floor(totalTime / 60)}h {totalTime % 60}m remaining
              </span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-fuchsia-400" />
                <span className="text-white/60 text-sm">Focus Level</span>
              </div>
              <span className="text-white text-sm">High Energy</span>
            </div>
          </div>
        </Card>
      </div>

      {/* AI Suggestion */}
      <Card gradient className="mb-6">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-2">AI Suggestion</h3>
              <p className="text-white/60 text-sm mb-4">
                Start with &quot;Review Q4 product roadmap&quot; while your energy is high. 
                Save lower-energy tasks like template updates for after lunch.
              </p>
              <div className="flex gap-3">
                <Button variant="ai" size="sm">
                  Reorder Tasks
                </Button>
                <Button variant="ghost" size="sm">
                  Not Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Tasks List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white">Tasks</h2>
          <div className="flex gap-2">
            <button className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-white/60 hover:text-white transition-all">
              Sort by Priority
            </button>
            <button className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-white/60 hover:text-white transition-all">
              Sort by Energy
            </button>
          </div>
        </div>

        {tasks.map((task) => (
          <Card key={task.id} hover>
            <div className="p-5">
              <div className="flex items-start gap-4">
                <button className={`mt-1 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  task.completed 
                    ? 'bg-violet-500 border-violet-500' 
                    : 'border-white/20 hover:border-violet-500/50'
                }`}>
                  {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className={`text-white mb-2 ${task.completed ? 'line-through opacity-40' : ''}`}>
                        {task.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-md border ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-white/60">
                          <Zap className={`w-3 h-3 ${getEnergyColor(task.energy)}`} />
                          <span className="capitalize">{task.energy} energy</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/60">
                          <Clock className="w-3 h-3" />
                          <span>{task.estimatedTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/60">
                          <Calendar className="w-3 h-3" />
                          <span>{task.project}</span>
                        </div>
                      </div>
                    </div>

                    <button className="text-white/40 hover:text-white transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>

                  {!task.completed && (
                    <div className="flex gap-2">
                      <Button variant="primary" size="sm">
                        Start Task
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reschedule
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Add */}
      <Card className="mt-6">
        <button className="w-full p-5 flex items-center justify-center gap-3 text-white/60 hover:text-white transition-all group">
          <div className="w-8 h-8 rounded-lg bg-white/[0.03] group-hover:bg-white/[0.05] border border-white/10 group-hover:border-violet-500/20 flex items-center justify-center transition-all">
            <Plus className="w-4 h-4" />
          </div>
          <span className="text-sm">Add another task</span>
        </button>
      </Card>
    </div>
  );
}
