"use client";
import React from "react";
import { FaCode } from "react-icons/fa";
import dynamic from "next/dynamic";
import { formatEducationDuration } from "./cvUtils";
import Image from "next/image";
import pin1 from "../../../../public/images/pin1.png";
import plant from "../../../../public/images/plant.png";

const CVPreview = dynamic(() => import("./CVPreview"), {
  ssr: false,
});

const CVPreviewSection = ({ cvData, cvRef, isFormValid }) => {
  return (
    <div className="bg-white rounded-b-xl mt-10 w-full h-full shadow-xl border-b border-gray-100">
      <div className="relative w-full">
        <Image
          src={pin1}
          alt="pins"
          width={36}
          height={74}
          className="object-cover absolute pointer-events-none -top-3 left-18 md:left-4"
          unoptimized
        />
        <Image
          src={pin1}
          alt="pins"
          width={36}
          height={74}
          className="object-cover absolute pointer-events-none -top-3 right-18 md:right-4"
          unoptimized
        />
      </div>
      <div className="flex items-center mt-10 justify-center p-6 border-b border-gray-200 bg-[#076A60]">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <FaCode className="w-6 h-6 text-white" />
          CV Preview
        </h3>
      </div>
      <div className="p-0">
        <div className="relative">
          <CVPreview
            cvData={cvData}
            isFormValid={isFormValid}
            cvRef={cvRef}
            formatEducationDuration={formatEducationDuration}
            formatExperienceDuration={formatEducationDuration}
          />
          <Image
            src={plant}
            alt="plant image"
            width={140}
            height={182}
            className="object-cover pointer-events-none absolute bottom-0 -right-28 md:-right-20 drop-shadow-[5px_17px_12px_#0000004d]"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default CVPreviewSection;