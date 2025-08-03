import React from "react";
import "../../src/app/globals.css";

/**
 * DecorativeGradientCircle
 * @param {string} className - Extra classes for the outer wrapper
 * @param {string} positionClass - Tailwind classes for positioning (e.g., 'absolute left-[-100px] top-1/2 -translate-y-1/2')
 * @param {number} size - Size of the outer circle in pixels
 * @param {number} innerSize - Size of the inner circle in pixels
 */
export default function DecorativeGradientCircle({
  className = "",
  positionClass = "absolute left-[-100px] top-1/2 -translate-y-1/2",
  size = 240,
  innerSize = 120,
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex items-center justify-center z-0 ${positionClass} ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div 
        className="flex items-center justify-center rounded-full"
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          background: `conic-gradient(
            from 230.73deg,
            rgba(7, 106, 96, 0.07) 15.34%,
            rgba(7, 106, 96, 0) 75.05%
          )`
        }}
      >
        <div 
          className="bg-transparent rounded-full" 
          style={{ 
            width: `${innerSize}px`, 
            height: `${innerSize}px`,
            background: 'white'
          }}
        />
      </div>
    </div>
  );
} 