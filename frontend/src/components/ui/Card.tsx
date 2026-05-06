import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-4 shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-slate-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
