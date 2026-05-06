import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-primary-container text-white font-semibold shadow-md shadow-blue-200 hover:opacity-90 active:scale-[0.98]',
  secondary:
    'bg-blue-50 text-blue-700 font-semibold border border-blue-100 hover:bg-blue-100 active:scale-[0.98]',
  ghost:
    'text-primary font-semibold hover:bg-blue-50 active:scale-[0.98]',
};

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-5 py-3 rounded-xl transition-[color,background-color,box-shadow,transform] flex items-center justify-center gap-2 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
