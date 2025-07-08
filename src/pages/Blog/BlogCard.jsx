import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarDays } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";

export default function BlogCard({ date, title, image, link }) {
  return (
    <div className="bg-[#EEF5F4] rounded-[10px] hover:scale-101 p-6 shadow-[0_0_35px_0_#076A6012] flex flex-col h-full transition-all duration-200 border border-transparent hover:border-[#076A60] hover:bg-white group">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[14px] capitalize text-[#617A78]">
          <FaRegCalendarDays className="text-[#617A78] inline-block mr-1.5" />{" "}
          {date}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-[#076A60] max-w-1/2 text-[20px] line-clamp-2 font-bold mb-4 flex-1">
          {title}
        </h4>
        <Link
          href={link}
          className="text-[14px] text-[#076A60] font-bold flex items-center gap-2 group-hover:text-[#076A60] transition-all duration-200"
        >
          Read More
          <SlArrowRightCircle className="text-xl group-hover:text-[#076A60] transition-all duration-200" />
        </Link>
      </div>
      <div className="relative aspect-[940/483] w-full rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          width={940}
          height={483}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 pointer-events-none rounded-xl shadow-inner bg-[#076A60]/20" />
      </div>
    </div>
  );
}
