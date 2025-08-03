"use client";
import React from "react";
import { FaCertificate, FaCheck } from "react-icons/fa";

const ATSBanner = () => {
  return (
    <div className="flex justify-center bg-[#F2F7F7] items-center gap-3 text-primary py-4">
      <span className="relative inline-block p-4 rounded-full w-[30px] h-[30px] bg-[#076A6012]">
        <FaCertificate className="text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary" />
        <FaCheck className="text-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
      </span>
      <h2 className="m-0 font-[500]">
        Optimized for Applicant Tracking Systems
      </h2>
    </div>
  );
};

export default ATSBanner; 