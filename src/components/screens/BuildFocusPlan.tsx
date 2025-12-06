import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  Sparkles, 
  Calendar,
  Clock,
  Zap,
  Target,
  Plus,
  Trash2,
  Loader
} from 'lucide-react';

export function BuildFocusPlan() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2500);
  };

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl text-white mb-2">Build My Focus Plan</h1>
        <p className="text-white/40">Let AI analyze your workload and create an optimized daily workflow</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          <Card gradient>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white">Your Schedule</h2>
                  <p className="text-xs text-white/40">Add meetings and commitments</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Meeting title"
                        defaultValue="Team Standup"
                        className="w-full bg-transparent text-white text-sm mb-2 outline-none placeholder:text-white/40"
                      />
                      <div className="flex items-center gap-3">
                        <input
                          type="time"
                          defaultValue="09:00"
                          className="bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none"
                        />
                        <span className="text-white/40 text-xs">to</span>
                        <input
                          type="time"
                          defaultValue="09:30"
                          className="bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none"
                        />
                      </div>
                    </div>
                    <button className="text-white/40 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Meeting title"
                        defaultValue="Client Sync"
                        className="w-full bg-transparent text-white text-sm mb-2 outline-none placeholder:text-white/40"
                      />
                      <div className="flex items-center gap-3">
                        <input
                          type="time"
                          defaultValue="14:00"
                          className="bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none"
                        />
                        <span className="text-white/40 text-xs">to</span>
                        <input
                          type="time"
                          defaultValue="15:00"
                          className="bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none"
                        />
                      </div>
                    </div>
                    <button className="text-white/40 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="w-full">
                  <Plus className="w-4 h-4" />
                  Add Meeting
                </Button>
              </div>
            </div>
          </Card>

          <Card gradient>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white">Priority Tasks</h2>
                  <p className="text-xs text-white/40">What needs to get done today</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <input
                    type="text"
                    placeholder="Task description"
                    defaultValue="Review Q4 product roadmap"
                    className="w-full bg-transparent text-white text-sm mb-2 outline-none placeholder:text-white/40"
                  />
                  <div className="flex items-center gap-2">
                    <select className="bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none">
                      <option>High Priority</option>
                      <option>Medium Priority</option>
                      <option>Low Priority</option>
                    </select>
                    <select className="bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none">
                      <option>2 hours</option>
                      <option>1 hour</option>
                      <option>30 min</option>
                    </select>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <input
                    type="text"
                    placeholder="Task description"
                    defaultValue="Update sprint planning template"
                    className="w-full bg-transparent text-white text-sm mb-2 outline-none placeholder:text-white/40"
                  />
                  <div className="flex items-center gap-2">
                    <select className="bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none">
                      <option>High Priority</option>
                      <option>Medium Priority</option>
                      <option>Low Priority</option>
                    </select>
                    <select className="bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 text-xs text-white outline-none">
                      <option>1 hour</option>
                      <option>2 hours</option>
                      <option>30 min</option>
                    </select>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="w-full">
                  <Plus className="w-4 h-4" />
                  Add Task
                </Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-white">Energy Preferences</h2>
                  <p className="text-xs text-white/40">When do you work best?</p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-xl cursor-pointer hover:bg-white/[0.05]">
                  <span className="text-sm text-white">Morning person</span>
                  <input type="radio" name="energy" defaultChecked className="accent-violet-500" />
                </label>
                <label className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-xl cursor-pointer hover:bg-white/[0.05]">
                  <span className="text-sm text-white">Afternoon person</span>
                  <input type="radio" name="energy" className="accent-violet-500" />
                </label>
                <label className="flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 rounded-xl cursor-pointer hover:bg-white/[0.05]">
                  <span className="text-sm text-white">Evening person</span>
                  <input type="radio" name="energy" className="accent-violet-500" />
                </label>
              </div>
            </div>
          </Card>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          <Card gradient>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-white">AI-Generated Focus Plan</h2>
                  <p className="text-xs text-white/40">Optimized for your energy and schedule</p>
                </div>
              </div>

              {!hasGenerated && !isGenerating && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-violet-400" />
                  </div>
                  <p className="text-white/60 text-sm mb-6">
                    Fill in your schedule and tasks, then click generate to create your optimized focus plan
                  </p>
                  <Button variant="primary" size="lg" onClick={handleGenerate}>
                    <Sparkles className="w-4 h-4" />
                    Generate Focus Plan
                  </Button>
                </div>
              )}

              {isGenerating && (
                <div className="text-center py-12">
                  <Loader className="w-12 h-12 text-violet-400 animate-spin mx-auto mb-4" />
                  <p className="text-white mb-2">Analyzing your workload...</p>
                  <p className="text-white/40 text-sm">Creating optimal time blocks</p>
                </div>
              )}

              {hasGenerated && !isGenerating && (
                <div className="space-y-4">
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm text-violet-400">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-white text-sm">Deep Work Block</h3>
                          <span className="text-xs text-white/40">2.5 hours</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
                          <Clock className="w-3 h-3" />
                          <span>7:00 AM - 9:00 AM (Before standup)</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                            Review Q4 product roadmap
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm text-fuchsia-400">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-white text-sm">Team Standup</h3>
                          <span className="text-xs text-white/40">30 min</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
                          <Clock className="w-3 h-3" />
                          <span>9:00 AM - 9:30 AM</span>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          Scheduled Meeting
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm text-cyan-400">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-white text-sm">Focus Block</h3>
                          <span className="text-xs text-white/40">1 hour</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
                          <Clock className="w-3 h-3" />
                          <span>10:00 AM - 11:00 AM</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                            Update sprint planning template
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm text-emerald-400">4</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-white text-sm">Client Sync</h3>
                          <span className="text-xs text-white/40">1 hour</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
                          <Clock className="w-3 h-3" />
                          <span>2:00 PM - 3:00 PM</span>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          Scheduled Meeting
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="primary" size="md" className="flex-1">
                      <Target className="w-4 h-4" />
                      Apply to My Day
                    </Button>
                    <Button variant="secondary" size="md">
                      <Sparkles className="w-4 h-4" />
                      Regenerate
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
