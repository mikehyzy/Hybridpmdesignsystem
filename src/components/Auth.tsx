import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Sparkles, AlertCircle } from 'lucide-react';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error } = isLogin
        ? await signIn(email, password)
        : await signUp(email, password);

      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl text-white mb-2">Hybrid PM</h1>
          <p className="text-white/40">Your AI-powered project management command center</p>
        </div>

        <Card>
          <div className="p-8">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => {
                  setIsLogin(true);
                  setError('');
                }}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  isLogin
                    ? 'bg-violet-500 text-white'
                    : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setError('');
                }}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  !isLogin
                    ? 'bg-violet-500 text-white'
                    : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-violet-500/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-white/60 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-violet-500/50"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={loading}
                className="w-full"
              >
                {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>

            {!isLogin && (
              <p className="text-xs text-white/40 text-center mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
