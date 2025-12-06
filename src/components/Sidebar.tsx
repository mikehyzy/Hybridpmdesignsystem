import { 
  LayoutDashboard, 
  Folder, 
  BookOpen, 
  Sparkles, 
  Lightbulb, 
  CheckCircle, 
  Workflow 
} from 'lucide-react';
import type { Screen } from '../App';

interface SidebarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

interface NavItem {
  id: Screen;
  label: string;
  icon: React.ElementType;
  category?: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, category: 'Core' },
  { id: 'project-hub', label: 'Project Hub', icon: Folder, category: 'Core' },
  { id: 'knowledge-base', label: 'Knowledge Base', icon: BookOpen, category: 'Core' },
  { id: 'build-focus-plan', label: 'Build My Focus Plan', icon: Sparkles, category: 'AI' },
  { id: 'ai-recommendations', label: 'AI Recommendations', icon: Lightbulb, category: 'AI' },
  { id: 'my-day', label: 'My Day', icon: CheckCircle, category: 'Workflow' },
  { id: 'workflow-builder', label: 'Workflow Builder', icon: Workflow, category: 'Workflow' },
];

export function Sidebar({ currentScreen, onNavigate }: SidebarProps) {
  const groupedItems = navItems.reduce((acc, item) => {
    const category = item.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, NavItem[]>);

  return (
    <aside className="w-64 bg-gradient-to-b from-[#12121A] to-[#0F0F16] border-r border-white/5 flex flex-col">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white tracking-tight">Hybrid PM</h1>
            <p className="text-xs text-white/40">Command Center</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <div className="px-3 mb-2">
              <span className="text-xs tracking-wider text-white/30 uppercase">{category}</span>
            </div>
            <div className="space-y-1">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 text-white border border-violet-500/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/80 mb-1">AI Assist Active</p>
              <p className="text-xs text-white/40">Learning your patterns</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
