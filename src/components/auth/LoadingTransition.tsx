import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface LoadingTransitionProps {
  onComplete: () => void;
}

export function LoadingTransition({ onComplete }: LoadingTransitionProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(235,72,65,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-slate-100 mb-3">Authentication Successful</h2>
        <p className="text-slate-400 mb-8">Loading your dashboard...</p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#EB4841] to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Percentage */}
        <p className="text-sm text-slate-400 mt-4">{progress}%</p>
      </div>
    </div>
  );
}