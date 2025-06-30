import React from "react";

export default function AnalysisItem({ item, numberRef }) {
  return (
    <div className="flex-1 flex flex-col items-center text-center">
      <div className="flex items-center justify-center mb-2 gap-3">
        <span
          className="flex items-center justify-center rounded-full"
          style={{
            width: 120,
            height: 120,
            minWidth: 120,
            background: "#076A6012",
          }}
        >
          <span
            ref={numberRef}
            className="font-bold text-[32px] leading-[100%] tracking-[0%] text-center capitalize text-primary"
          >
            +0
          </span>
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-primary text-[20px] max-w-xs text-left">
            {item.main}
          </h3>
          <p className="text-xl font-normal text-left text-[14px] mb-1 m-0 flex items-center text-[#617A78] ">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
} 