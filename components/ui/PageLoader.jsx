import React from 'react';

const PageLoader = ({ size = 'default', className = '' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`flex items-center justify-center min-h-[200px] ${className}`}>
      <div className="relative">
        {/* Main spinning circle */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-primary rounded-full animate-spin`} />
        
        {/* Pulsing background circle */}
        <div className={`absolute inset-0 ${sizeClasses[size]} border-2 border-primary/20 rounded-full animate-pulse`} />
        
        {/* Center dot */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-bounce`} />
      </div>
      
      {/* Loading text */}
      <div className="ml-4">
        <div className="text-sm text-muted-foreground font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default PageLoader; 