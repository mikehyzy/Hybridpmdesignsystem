import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  Plus, 
  Sparkles,
  GripVertical,
  MoreVertical,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Workflow as WorkflowIcon,
  Trash2
} from 'lucide-react';

export function WorkflowBuilder() {
  const workflows = [
    {
      id: 1,
      name: 'Sprint Planning Workflow',
      steps: 7,
      category: 'Agile',
      status: 'active',
      lastUsed: '2 days ago',
    },
    {
      id: 2,
      name: 'Client Onboarding Process',
      steps: 12,
      category: 'Operations',
      status: 'active',
      lastUsed: '1 week ago',
    },
    {
      id: 3,
      name: 'Product Launch Checklist',
      steps: 24,
      category: 'Strategy',
      status: 'draft',
      lastUsed: 'Never',
    },
  ];

  const currentWorkflowSteps = [
    {
      id: 1,
      title: 'Define Sprint Goals',
      description: 'Collaborate with stakeholders to set clear objectives',
      assignee: 'Product Owner',
      estimatedTime: '1 hour',
      type: 'planning',
    },
    {
      id: 2,
      title: 'Review Product Backlog',
      description: 'Prioritize and refine backlog items for the sprint',
      assignee: 'Team',
      estimatedTime: '2 hours',
      type: 'review',
    },
    {
      id: 3,
      title: 'Capacity Planning',
      description: 'Calculate team capacity and commitment level',
      assignee: 'Scrum Master',
      estimatedTime: '30 minutes',
      type: 'planning',
    },
    {
      id: 4,
      title: 'Sprint Backlog Creation',
      description: 'Select and commit to user stories for the sprint',
      assignee: 'Team',
      estimatedTime: '1.5 hours',
      type: 'execution',
    },
    {
      id: 5,
      title: 'Task Breakdown',
      description: 'Break down stories into actionable tasks',
      assignee: 'Developers',
      estimatedTime: '1 hour',
      type: 'planning',
    },
  ];

  const getStepIcon = (type: string) => {
    const icons: Record<string, React.ElementType> = {
      planning: FileText,
      review: CheckCircle,
      execution: WorkflowIcon,
    };
    return icons[type] || FileText;
  };

  const getStepColor = (type: string) => {
    const colors: Record<string, string> = {
      planning: 'bg-violet-500/20 text-violet-400',
      review: 'bg-cyan-500/20 text-cyan-400',
      execution: 'bg-fuchsia-500/20 text-fuchsia-400',
    };
    return colors[type] || colors.planning;
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-white mb-2">Workflow Builder</h1>
            <p className="text-white/40">Create and manage structured workflows</p>
          </div>
          <Button variant="primary" size="md">
            <Plus className="w-4 h-4" />
            New Workflow
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Workflows List */}
        <div className="lg:col-span-1 space-y-6">
          <Card gradient>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white">AI Workflow Assistant</h2>
                  <p className="text-xs text-white/40">Generate workflow steps</p>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="text-xs text-white/60 mb-2 block">Workflow Type</label>
                <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-violet-500/50">
                  <option>Sprint Planning</option>
                  <option>Product Launch</option>
                  <option>Client Onboarding</option>
                  <option>Risk Assessment</option>
                  <option>Custom Workflow</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="text-xs text-white/60 mb-2 block">Team Size</label>
                <input
                  type="number"
                  placeholder="5"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-violet-500/50"
                />
              </div>

              <Button variant="ai" size="md" className="w-full">
                <Sparkles className="w-4 h-4" />
                Generate Steps
              </Button>
            </div>
          </Card>

          <div>
            <h3 className="text-white mb-4 px-1">Your Workflows</h3>
            <div className="space-y-3">
              {workflows.map((workflow) => (
                <Card key={workflow.id} hover>
                  <button className="w-full p-4 text-left">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white text-sm">{workflow.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-md ${
                        workflow.status === 'active'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-white/5 text-white/40 border border-white/10'
                      }`}>
                        {workflow.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span>{workflow.steps} steps</span>
                      <span>{workflow.category}</span>
                    </div>
                    <p className="text-xs text-white/30 mt-2">Used {workflow.lastUsed}</p>
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Editor */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="p-6 border-b border-white/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    defaultValue="Sprint Planning Workflow"
                    className="w-full bg-transparent text-xl text-white outline-none mb-2"
                  />
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <WorkflowIcon className="w-4 h-4" />
                      <span>5 steps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>~6 hours total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Team workflow</span>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="md">
                  Save Workflow
                </Button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white">Workflow Steps</h3>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                  Add Step
                </Button>
              </div>

              <div className="space-y-3">
                {currentWorkflowSteps.map((step, index) => {
                  const StepIcon = getStepIcon(step.type);
                  const colorClass = getStepColor(step.type);
                  
                  return (
                    <Card key={step.id}>
                      <div className="p-5">
                        <div className="flex items-start gap-4">
                          <button className="text-white/40 hover:text-white cursor-grab active:cursor-grabbing mt-1">
                            <GripVertical className="w-4 h-4" />
                          </button>

                          <div className={`w-10 h-10 rounded-xl ${colorClass} flex items-center justify-center flex-shrink-0`}>
                            <StepIcon className="w-5 h-5" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs text-white/40">Step {index + 1}</span>
                                  <span className="text-xs px-2 py-0.5 rounded-md bg-white/[0.03] text-white/60 border border-white/5 capitalize">
                                    {step.type}
                                  </span>
                                </div>
                                <h4 className="text-white mb-1">{step.title}</h4>
                                <p className="text-sm text-white/60 mb-3">{step.description}</p>
                                
                                <div className="flex items-center gap-4 text-xs text-white/60">
                                  <div className="flex items-center gap-2">
                                    <Users className="w-3.5 h-3.5" />
                                    <span>{step.assignee}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{step.estimatedTime}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <button className="text-white/40 hover:text-white transition-colors">
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                                <button className="text-white/40 hover:text-red-400 transition-colors">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}

                <button className="w-full p-5 rounded-2xl border-2 border-dashed border-white/10 hover:border-violet-500/30 hover:bg-white/[0.02] transition-all flex items-center justify-center gap-3 text-white/40 hover:text-violet-400">
                  <Plus className="w-5 h-5" />
                  <span className="text-sm">Add another step</span>
                </button>
              </div>
            </div>
          </Card>

          {/* AI Suggestions */}
          <Card gradient>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-2">AI Suggestions</h3>
                  <ul className="space-y-2 text-sm text-white/60 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span>Consider adding a &quot;Definition of Done&quot; review step before closing the sprint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span>Your capacity planning step could benefit from velocity tracking</span>
                    </li>
                  </ul>
                  <Button variant="ai" size="sm">
                    Apply Suggestions
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
