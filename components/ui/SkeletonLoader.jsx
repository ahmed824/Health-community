import React from 'react';

const SkeletonLoader = ({ 
  type = 'text', 
  lines = 3, 
  className = '',
  height = 'default',
  width = 'full'
}) => {
  const heightClasses = {
    small: 'h-3',
    default: 'h-4',
    large: 'h-6',
    xl: 'h-8'
  };

  const widthClasses = {
    full: 'w-full',
    '3/4': 'w-3/4',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
    '1/4': 'w-1/4'
  };

  if (type === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`
              ${heightClasses[height]} 
              ${widthClasses[width]}
              bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200
              rounded-md
              animate-pulse
              skeleton-shimmer
            `}
            style={{
              backgroundSize: '200% 100%',
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div className={`bg-white rounded-lg p-4 shadow-sm border border-border ${className}`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse skeleton-shimmer" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse skeleton-shimmer" />
            <div className="h-3 w-2/3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse skeleton-shimmer" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse skeleton-shimmer" />
          <div className="h-4 w-5/6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse skeleton-shimmer" />
          <div className="h-4 w-4/6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse skeleton-shimmer" />
        </div>
      </div>
    );
  }

  if (type === 'avatar') {
    return (
      <div className={`${heightClasses[height]} ${widthClasses[width]} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse skeleton-shimmer ${className}`} />
    );
  }

  return null;
};

export default SkeletonLoader; 