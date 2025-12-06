import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  Sparkles, 
  TrendingUp, 
  Zap,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  X,
  Users,
  Clock
} from 'lucide-react';

export function AIRecommendations() {
  const recommendations = [
    {
      id: 1,
      type: 'optimization',
      priority: 'high',
      title: 'Resource Reallocation Opportunity',
      description: 'The "Customer Portal" project is 15% ahead of schedule. Consider moving 2 team members to "Analytics Dashboard" which is currently behind.',
      impact: 'Could save 5 days on critical path',
      icon: Users,
      color: 'violet',
      actions: ['View Details', 'Apply Suggestion'],
    },
    {
      id: 2,
      type: 'risk',
      priority: 'urgent',
      title: 'Deadline Risk Detected',
      description: 'The "Mobile App Redesign" has 3 incomplete critical tasks with only 5 days until deadline. AI suggests daily check-ins and task prioritization.',
      impact: 'Reduces risk from High to Medium',
      icon: AlertCircle,
      color: 'red',
      actions: ['Create Action Plan', 'Dismiss'],
    },
    {
      id: 3,
      type: 'automation',
      priority: 'medium',
      title: 'Automate Sprint Retrospectives',
      description: 'You conduct retrospectives every 2 weeks. AI can generate discussion topics and sentiment analysis from team activity.',
      impact: 'Saves 30 minutes per session',
      icon: Zap,
      color: 'fuchsia',
      actions: ['Enable Automation', 'Learn More'],
    },
    {
      id: 4,
      type: 'workflow',
      priority: 'medium',
      title: 'Template Recommendation',
      description: 'Based on your project patterns, the "Stakeholder Analysis" template would be valuable for your current Enterprise Platform work.',
      impact: 'Improves stakeholder clarity',
      icon: Sparkles,
      color: 'cyan',
      actions: ['View Template', 'Not Now'],
    },
    {
      id: 5,
      type: 'efficiency',
      priority: 'low',
      title: 'Meeting Consolidation',
      description: 'You have 3 similar status meetings weekly. AI suggests consolidating into 1 comprehensive sync, saving 2 hours per week.',
      impact: 'Saves 8 hours per month',
      icon: Clock,
      color: 'emerald',
      actions: ['Review Schedule', 'Dismiss'],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      violet: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/20' },
      red: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/20' },
      fuchsia: { bg: 'bg-fuchsia-500/20', text: 'text-fuchsia-400', border: 'border-fuchsia-500/20' },
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/20' },
      emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/20' },
    };
    return colors[color] || colors.violet;
  };

  const getPriorityBadge = (priority: string) => {
    const styles: Record<string, string> = {
      urgent: 'bg-red-500/10 text-red-400 border-red-500/20',
      high: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      low: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    };
    return styles[priority] || styles.medium;
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl text-white mb-2">AI Recommendations</h1>
        <p className="text-white/40">Intelligent insights to optimize your workflow and projects</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card gradient>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">Active Insights</p>
                <p className="text-2xl text-white">12</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">Applied This Week</p>
                <p className="text-2xl text-white">8</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">Time Saved</p>
                <p className="text-2xl text-white">14h</p>
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
                <p className="text-white/40 text-xs mb-1">Acceptance Rate</p>
                <p className="text-2xl text-white">73%</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-fuchsia-400" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['All', 'Optimization', 'Risk', 'Automation', 'Workflow', 'Efficiency'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all ${
              filter === 'All'
                ? 'bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-violet-300'
                : 'bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {recommendations.map((rec) => {
          const Icon = rec.icon;
          const colorClasses = getColorClasses(rec.color);
          
          return (
            <Card key={rec.id} hover>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-white">{rec.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-md border ${getPriorityBadge(rec.priority)}`}>
                            {rec.priority}
                          </span>
                        </div>
                        <p className="text-sm text-white/60 mb-2">
                          {rec.description}
                        </p>
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${colorClasses.bg} border ${colorClasses.border}`}>
                          <TrendingUp className={`w-3.5 h-3.5 ${colorClasses.text}`} />
                          <span className={`text-xs ${colorClasses.text}`}>
                            Impact: {rec.impact}
                          </span>
                        </div>
                      </div>
                      
                      <button className="text-white/40 hover:text-white transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Button variant="primary" size="sm">
                        {rec.actions[0]}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        {rec.actions[1]}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* AI Learning Notice */}
      <Card gradient className="mt-8">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white mb-2">AI is Learning Your Patterns</h3>
              <p className="text-white/60 text-sm mb-3">
                The more you use Hybrid PM, the better AI becomes at understanding your workflow preferences 
                and making relevant recommendations.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                </div>
                <span className="text-xs text-white/60">68% trained</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
