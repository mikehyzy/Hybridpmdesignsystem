import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  CheckCircle, 
  Clock, 
  Folder, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export function Dashboard() {
  const todaysTasks = [
    { id: 1, title: 'Review Q4 product roadmap', priority: 'high', completed: false },
    { id: 2, title: 'Client sync: Enterprise features', priority: 'urgent', completed: false },
    { id: 3, title: 'Update sprint planning template', priority: 'medium', completed: true },
  ];

  const upcomingDeadlines = [
    { id: 1, project: 'Enterprise Platform', task: 'MVP Release', daysLeft: 3, status: 'on-track' },
    { id: 2, project: 'Mobile App Redesign', task: 'Design Review', daysLeft: 5, status: 'at-risk' },
    { id: 3, project: 'API Integration', task: 'Documentation', daysLeft: 7, status: 'on-track' },
  ];

  const activeProjects = 12;
  const completionRate = 87;

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl text-white mb-2">Good morning, Alex</h1>
        <p className="text-white/40">Here&apos;s your command center for today</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card gradient>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-2xl text-white">8</span>
            </div>
            <p className="text-white/60 text-sm">Today&apos;s Tasks</p>
          </div>
        </Card>

        <Card gradient>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-fuchsia-400" />
              </div>
              <span className="text-2xl text-white">3</span>
            </div>
            <p className="text-white/60 text-sm">Upcoming Deadlines</p>
          </div>
        </Card>

        <Card gradient>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Folder className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-2xl text-white">{activeProjects}</span>
            </div>
            <p className="text-white/60 text-sm">Active Projects</p>
          </div>
        </Card>

        <Card gradient>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-2xl text-white">{completionRate}%</span>
            </div>
            <p className="text-white/60 text-sm">Completion Rate</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* AI Daily Focus */}
        <Card gradient className="lg:col-span-2">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white">AI-Powered Daily Focus</h2>
                  <p className="text-xs text-white/40">Generated 2 hours ago</p>
                </div>
              </div>
              <Button variant="ai" size="sm">
                Regenerate
              </Button>
            </div>

            <div className="space-y-4">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-violet-400">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-sm mb-1">Morning: Deep Work Block</h3>
                    <p className="text-white/40 text-xs mb-3">9:00 AM - 11:30 AM · 2.5 hours</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        Review Q4 product roadmap
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                        Finalize sprint objectives
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-fuchsia-400">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-sm mb-1">Afternoon: Collaboration</h3>
                    <p className="text-white/40 text-xs mb-3">2:00 PM - 4:00 PM · 2 hours</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        Client sync: Enterprise features
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        Team standup and planning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button variant="primary" size="sm">
                <CheckCircle className="w-4 h-4" />
                Accept Plan
              </Button>
              <Button variant="secondary" size="sm">
                Customize
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <div className="p-6">
            <h2 className="text-white mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-violet-400" />
                  </div>
                  <span className="text-sm text-white">My Day</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-fuchsia-400" />
                  </div>
                  <span className="text-sm text-white">Build Focus Plan</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <Folder className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm text-white">Knowledge Base</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Tasks */}
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white">Today&apos;s Tasks</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-3">
              {todaysTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${
                    task.completed ? 'bg-violet-500 border-violet-500' : 'border-white/20'
                  }`}>
                    {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${task.completed ? 'text-white/40 line-through' : 'text-white'}`}>
                      {task.title}
                    </p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-md ${
                    task.priority === 'urgent' 
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                      : task.priority === 'high'
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white">Upcoming Deadlines</h2>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-3">
              {upcomingDeadlines.map((deadline) => (
                <div
                  key={deadline.id}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <div className="flex-1">
                    <h3 className="text-white text-sm mb-1">{deadline.project}</h3>
                    <p className="text-white/40 text-xs mb-2">{deadline.task}</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-white/40" />
                      <span className="text-xs text-white/60">{deadline.daysLeft} days left</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${
                    deadline.status === 'on-track'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-orange-500/10 text-orange-400'
                  }`}>
                    {deadline.status === 'on-track' ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <AlertCircle className="w-3 h-3" />
                    )}
                    <span>{deadline.status === 'on-track' ? 'On Track' : 'At Risk'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
