import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const CVStepper = ({ step, steps }) => (
  <div className="flex justify-between w-full mb-8">
    {steps.map((stepObj, idx) => (
      <div
        key={stepObj.label}
        className="flex-1 flex flex-row items-center mt-6"
      >
        <span
          aria-label={stepObj.aria}
          className={`rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200`}
          style={{
            width: 40,
            height: 40,
            color: step === idx + 1 ? "#076A60" : "#A3BBB9",
            backgroundColor: "#F3F7F7",
          }}
        >
          {stepObj.icon}
        </span>
        <div className="flex flex-col items-start justify-center mt-2">
          <span
            className="mt-2 text-xs font-medium ml-2"
            style={{ color: step === idx + 1 ? "#076A60" : "#A3BBB9" }}
          >
            {stepObj.label}
          </span>
          <span
            className="text-[10px] mt-1 ml-2"
            style={{ color: "#A3BBB9" }}
          >
            {stepObj.desc}
            <HiOutlineArrowLongRight className="inline ml-2 text-xl align-middle" />
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default React.memo(CVStepper); 