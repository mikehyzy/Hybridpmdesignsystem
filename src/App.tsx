import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/screens/Dashboard';
import { ProjectHub } from './components/screens/ProjectHub';
import { KnowledgeBase } from './components/screens/KnowledgeBase';
import { BuildFocusPlan } from './components/screens/BuildFocusPlan';
import { AIRecommendations } from './components/screens/AIRecommendations';
import { MyDay } from './components/screens/MyDay';
import { WorkflowBuilder } from './components/screens/WorkflowBuilder';

export type Screen = 
  | 'dashboard' 
  | 'project-hub' 
  | 'knowledge-base' 
  | 'build-focus-plan' 
  | 'ai-recommendations' 
  | 'my-day' 
  | 'workflow-builder';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'project-hub':
        return <ProjectHub />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      case 'build-focus-plan':
        return <BuildFocusPlan />;
      case 'ai-recommendations':
        return <AIRecommendations />;
      case 'my-day':
        return <MyDay />;
      case 'workflow-builder':
        return <WorkflowBuilder />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0A0A0F] text-white overflow-hidden">
      <Sidebar currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      <main className="flex-1 overflow-y-auto">
        {renderScreen()}
      </main>
    </div>
  );
}
