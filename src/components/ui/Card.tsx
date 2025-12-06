import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
}

export function Card({ children, className = '', gradient = false, hover = false }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl backdrop-blur-sm transition-all duration-300
        ${gradient 
          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10' 
          : 'bg-white/[0.03] border border-white/5'
        }
        ${hover ? 'hover:bg-white/[0.05] hover:border-white/10 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
