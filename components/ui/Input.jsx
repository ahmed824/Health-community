import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  className = '',
  ...props
}, ref) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          `w-full px-4 py-2 border border-transparent rounded-full bg-[#F3F7F7] text-foreground transition-all focus:bg-white focus:border-ring focus:outline-none ${className}`
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-destructive mt-1">{error}</p>
      )}
    </div>
  );
});

export default Input; 