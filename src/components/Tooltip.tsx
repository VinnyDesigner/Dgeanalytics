import { ReactNode, useState } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
  show: boolean;
}

export function Tooltip({ content, children, show }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  if (!show) {
    return <>{children}</>;
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-[9999] pointer-events-none">
          <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap shadow-lg">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}