import React from 'react';

const DotsLoader = ({ 
  size = 'default', 
  color = 'primary', 
  className = '',
  count = 3,
  speed = 'normal'
}) => {
  const sizeClasses = {
    small: 'w-1.5 h-1.5',
    default: 'w-2 h-2',
    large: 'w-3 h-3',
    xl: 'w-4 h-4'
  };

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary-foreground',
    muted: 'bg-muted-foreground',
    white: 'bg-white'
  };

  const speedClasses = {
    slow: 'animate-enhanced-bounce',
    normal: 'animate-enhanced-bounce',
    fast: 'animate-enhanced-bounce'
  };

  const delayClasses = {
    slow: ['delay-0', 'delay-300', 'delay-600'],
    normal: ['delay-0', 'delay-150', 'delay-300'],
    fast: ['delay-0', 'delay-75', 'delay-150']
  };

  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`
            ${sizeClasses[size]} 
            ${colorClasses[color]} 
            ${speedClasses[speed]}
            ${delayClasses[speed][index]}
            rounded-full
            opacity-60
            hover:opacity-100
            transition-opacity
            duration-200
          `}
          style={{
            animationDelay: `${index * (speed === 'slow' ? 0.3 : speed === 'fast' ? 0.075 : 0.15)}s`
          }}
        />
      ))}
    </div>
  );
};

export default DotsLoader; 