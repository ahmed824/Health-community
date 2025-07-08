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
  icon,
  rightIcon,
  onRightIconClick,
  ...props
}, ref) {
  return (
    <div className="w-full space-y-1 text-[#617A78] focus-within:text-primary">
      {label && (
        <label
          htmlFor={name}
          className={cn(
            "block text-[16px] font-medium mb-1 transition-colors capitalize text-inherit"
          )}
        >
          {label}
        </label>
      )}
      <div className="relative mb-8">
        {icon && (
          <span className="absolute left-3 top-1/2 pl-3 -translate-y-1/2 text-[#617A78] pointer-events-none">
            {icon}
          </span>
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
            cn(
              "w-full px-6 py-3 border border-transparent placeholder:text-[#617A78] placeholder:text-[14px] rounded-full bg-[#F3F7F7] text-foreground transition-all focus:bg-white focus:border-ring focus:outline-none",
              icon && rightIcon ? "pl-11 pr-11" : icon ? "pl-11" : rightIcon ? "pr-11" : "",
              className
            )
          )}
          {...props}
        />
        {rightIcon && (
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-[#617A78] focus:outline-none bg-transparent border-none p-0 m-0"
            onClick={onRightIconClick}
          >
            {rightIcon}
          </button>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
});

export default Input; 