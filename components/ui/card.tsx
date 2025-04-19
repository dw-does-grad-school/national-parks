import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black ${className}`}>
      {children}
    </div>
  );
} 