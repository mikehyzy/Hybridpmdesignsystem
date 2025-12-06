import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  Search, 
  Filter, 
  Plus,
  FileText,
  Sparkles,
  Bookmark,
  TrendingUp,
  Users,
  Zap,
  Target
} from 'lucide-react';

export function KnowledgeBase() {
  const templates = [
    {
      id: 1,
      title: 'Sprint Planning Template',
      category: 'Agile',
      description: 'Comprehensive sprint planning framework with capacity calculation',
      icon: Target,
      color: 'violet',
      usageCount: 127,
      tags: ['Scrum', 'Planning', 'Agile'],
    },
    {
      id: 2,
      title: 'Product Roadmap Framework',
      category: 'Strategy',
      description: 'Strategic roadmap builder with milestone tracking',
      icon: TrendingUp,
      color: 'fuchsia',
      usageCount: 94,
      tags: ['Strategy', 'Planning', 'Roadmap'],
    },
    {
      id: 3,
      title: 'Stakeholder Analysis',
      category: 'Research',
      description: 'Map stakeholder influence and engagement strategies',
      icon: Users,
      color: 'cyan',
      usageCount: 82,
      tags: ['Research', 'Analysis', 'Communication'],
    },
    {
      id: 4,
      title: 'Risk Assessment Matrix',
      category: 'Waterfall',
      description: 'Identify and mitigate project risks systematically',
      icon: Zap,
      color: 'orange',
      usageCount: 76,
      tags: ['Risk', 'Assessment', 'Mitigation'],
    },
    {
      id: 5,
      title: 'User Story Mapping',
      category: 'Agile',
      description: 'Visualize user journeys and prioritize features',
      icon: FileText,
      color: 'emerald',
      usageCount: 103,
      tags: ['UX', 'Stories', 'Mapping'],
    },
    {
      id: 6,
      title: 'Retrospective Guide',
      category: 'Agile',
      description: 'Facilitation guide for effective team retrospectives',
      icon: Sparkles,
      color: 'pink',
      usageCount: 89,
      tags: ['Retrospective', 'Team', 'Improvement'],
    },
  ];

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      violet: 'bg-violet-500/20 text-violet-400',
      fuchsia: 'bg-fuchsia-500/20 text-fuchsia-400',
      cyan: 'bg-cyan-500/20 text-cyan-400',
      orange: 'bg-orange-500/20 text-orange-400',
      emerald: 'bg-emerald-500/20 text-emerald-400',
      pink: 'bg-pink-500/20 text-pink-400',
    };
    return colors[color] || colors.violet;
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl text-white mb-2">Knowledge Base</h1>
        <p className="text-white/40">Templates, frameworks, and repeatable workflows</p>
      </header>

      {/* AI Recommendation Banner */}
      <Card gradient className="mb-6">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-2">AI Recommended for You</h3>
              <p className="text-white/60 text-sm mb-4">
                Based on your current projects, we recommend starting with the &quot;Sprint Planning Template&quot; 
                and &quot;Risk Assessment Matrix&quot; for your Enterprise Platform initiative.
              </p>
              <div className="flex gap-3">
                <Button variant="ai" size="sm">
                  View Suggestions
                </Button>
                <Button variant="ghost" size="sm">
                  Dismiss
                </Button>
              </div>
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
              placeholder="Search templates and frameworks..."
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
          Create Template
        </Button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['All', 'Agile', 'Waterfall', 'Strategy', 'Research', 'Analysis'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all ${
              category === 'All'
                ? 'bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-violet-300'
                : 'bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">Total Templates</p>
                <p className="text-2xl text-white">48</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-violet-400" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">Bookmarked</p>
                <p className="text-2xl text-white">12</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-fuchsia-400" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs mb-1">Most Used</p>
                <p className="text-sm text-white">Sprint Planning</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <Card key={template.id} hover>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColor(template.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white mb-1 truncate">{template.title}</h3>
                    <p className="text-xs text-white/40">{template.category}</p>
                  </div>
                  <button className="text-white/40 hover:text-violet-400 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-sm text-white/60 mb-4 line-clamp-2">
                  {template.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-white/[0.03] text-white/60 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Users className="w-3.5 h-3.5" />
                    <span>{template.usageCount} uses</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Use Template
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
