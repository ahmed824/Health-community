import React from "react";

export default function AnalysisItem({ item, numberRef }) {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6 lg:px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-4 sm:gap-6 w-full">
        {/* Number Circle */}
        <div className="flex-shrink-0">
          <span
            className="flex items-center justify-center rounded-full"
            style={{
              width: "clamp(80px, 15vw, 120px)",
              height: "clamp(80px, 15vw, 120px)",
              minWidth: "clamp(80px, 15vw, 120px)",
              background: "#076A6012",
            }}
          >
            <span
              ref={numberRef}
              className="font-bold text-[clamp(20px,4vw,32px)] leading-[100%] tracking-[0%] text-center capitalize text-primary"
            >
              +0
            </span>
          </span>
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-2 sm:gap-3 flex-1 text-center sm:text-left">
          <h3 className="font-bold text-primary text-[clamp(16px,3vw,20px)] leading-tight max-w-full sm:max-w-xs">
            {item.main}
          </h3>
          <p className="text-[clamp(12px,2.5vw,14px)] font-normal leading-relaxed text-[#617A78] max-w-full sm:max-w-xs">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
} 