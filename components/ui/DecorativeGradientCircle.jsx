import React from "react";
import "../../src/app/globals.css";

/**
 * DecorativeGradientCircle
 * @param {string} className - Extra classes for the outer wrapper
 * @param {string} positionClass - Tailwind classes for positioning (e.g., 'absolute left-[-100px] top-1/2 -translate-y-1/2')
 */
export default function DecorativeGradientCircle({
  className = "",
  positionClass = "absolute left-[-100px] top-1/2 -translate-y-1/2",
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex items-center justify-center z-0 ${positionClass} decorative-gradient-outer ${className}`}
    >
      <div className="decorative-gradient-conic flex items-center justify-center rounded-full">
        <div className="decorative-gradient-inner bg-white rounded-full" />
      </div>
    </div>
  );
} 