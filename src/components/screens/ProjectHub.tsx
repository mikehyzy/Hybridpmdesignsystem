import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  Search, 
  Filter, 
  Plus, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  Clock,
  Users,
  MoreVertical
} from 'lucide-react';

export function ProjectHub() {
  const projects = [
    {
      id: 1,
      name: 'Enterprise Platform',
      status: 'on-track',
      progress: 87,
      team: 8,
      deadline: 'Dec 15, 2025',
      phase: 'Development',
      risk: 'low',
    },
    {
      id: 2,
      name: 'Mobile App Redesign',
      status: 'at-risk',
      progress: 62,
      team: 5,
      deadline: 'Dec 20, 2025',
      phase: 'Design',
      risk: 'medium',
    },
    {
      id: 3,
      name: 'API Integration',
      status: 'on-track',
      progress: 45,
      team: 4,
      deadline: 'Dec 28, 2025',
      phase: 'Planning',
      risk: 'low',
    },
    {
      id: 4,
      name: 'Customer Portal',
      status: 'ahead',
      progress: 92,
      team: 6,
      deadline: 'Dec 10, 2025',
      phase: 'Testing',
      risk: 'low',
    },
    {
      id: 5,
      name: 'Analytics Dashboard',
      status: 'behind',
      progress: 28,
      team: 3,
      deadline: 'Dec 18, 2025',
      phase: 'Development',
      risk: 'high',
    },
    {
      id: 6,
      name: 'Infrastructure Upgrade',
      status: 'on-track',
      progress: 55,
      team: 7,
      deadline: 'Jan 5, 2026',
      phase: 'Implementation',
      risk: 'low',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ahead':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'on-track':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'at-risk':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      case 'behind':
        return 'text-red-400 bg-red-500/10 border-red-500/20';
      default:
        return 'text-white/40 bg-white/5 border-white/10';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-emerald-500';
      case 'medium':
        return 'bg-orange-500';
      case 'high':
        return 'bg-red-500';
      default:
        return 'bg-white/20';
    }
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl text-white mb-2">Project Hub</h1>
        <p className="text-white/40">Manage and monitor all your projects</p>
      </header>

      {/* AI Insights Banner */}
      <Card gradient className="mb-6">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-2">AI Project Health Insights</h3>
              <p className="text-white/60 text-sm mb-4">
                2 projects need attention this week. &quot;Analytics Dashboard&quot; is 15% behind schedule. 
                Consider reallocating resources from &quot;Customer Portal&quot; which is ahead of schedule.
              </p>
              <Button variant="ai" size="sm">
                View Recommendations
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-violet-500/50"
            />
          </div>
          <Button variant="secondary" size="md">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
        <Button variant="primary" size="md">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">Total Projects</p>
                <p className="text-2xl text-white">12</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-violet-400" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">On Track</p>
                <p className="text-2xl text-white">8</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">At Risk</p>
                <p className="text-2xl text-white">2</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-orange-400" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">Behind</p>
                <p className="text-2xl text-white">2</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-red-400" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} hover>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-white mb-1">{project.name}</h3>
                  <p className="text-xs text-white/40">{project.phase}</p>
                </div>
                <button className="text-white/40 hover:text-white transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/60">Progress</span>
                    <span className="text-xs text-white">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>{project.team} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{project.deadline}</span>
                  </div>
                </div>

                {/* Status and Risk */}
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-lg border ${getStatusColor(project.status)}`}>
                    {project.status === 'ahead' && 'Ahead'}
                    {project.status === 'on-track' && 'On Track'}
                    {project.status === 'at-risk' && 'At Risk'}
                    {project.status === 'behind' && 'Behind'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${getRiskColor(project.risk)}`} />
                    <span className="text-xs text-white/60 capitalize">{project.risk} risk</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
