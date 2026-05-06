import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label.replace(/\s+/g, '-').toLowerCase();

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <label htmlFor={inputId} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-white border rounded-lg px-4 py-2.5 text-body-md text-on-surface outline-none transition-all focus:ring-2 focus:ring-primary focus:border-primary ${
            error ? 'border-error' : 'border-outline-variant'
          }`}
          {...props}
        />
        {error && (
          <span className="text-xs text-error" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
