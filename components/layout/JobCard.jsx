import React from "react";
import Image from "next/image";
import { RiTimeLine, RiCalendarLine, RiMapPinLine } from "react-icons/ri";

export default function JobCard({
  image,
  specialty,
  title,
  description,
  type,
  posted,
  location,
  link,
  action,
  className = "",
}) {
  return (
    <div className={`bg-white m-auto w-full max-w-[643px] rounded-2xl shadow-[0_0_35px_0_rgba(7,106,96,0.07)] p-4 sm:p-6 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 relative ${className}`}>
      <div className="w-full sm:w-[252px] h-[200px] sm:h-[296px] rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={252}
          height={296}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 w-full">
        <span className="text-[#076A60] font-bold text-sm">{specialty}</span>
        <h3 className="text-base sm:text-lg font-bold text-[#076A60] my-2 sm:my-3 leading-snug">{title}</h3>
        <p className="text-[#617A78] text-sm mb-2 line-clamp-2 overflow-hidden">{description}</p>
        <div className="flex flex-col sm:flex-wrap gap-2 sm:gap-4 text-[#617A78] text-sm my-2 sm:my-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
            <p className="flex items-center gap-1">
              <RiTimeLine className="inline-block" />
              {type}
            </p>
            <p className="flex items-center gap-1">
              <RiCalendarLine className="inline-block" />
              {posted}
            </p>
          </div>
          <p className="flex items-center gap-1">
            <RiMapPinLine className="inline-block" />
            {location}
          </p>
        </div>
        {action}
      </div>
    </div>
  );
} 