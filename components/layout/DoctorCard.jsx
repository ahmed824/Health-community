import Image from "next/image";
import Button from "../ui/Button";
import React from "react";
import Link from "next/link";
import { MdOutlineVideoCall, MdLocationOn } from "react-icons/md";
import { TbCalendarClock } from "react-icons/tb";
import Reyal from "./Reyal";

export default function DoctorCard({
  name,
  specialty,
  image,
  details,
  link,
  avatar,
  remotely,
  price,
  fromDate,
  toDate,
  className = "",
  mode = "primary", // 'primary' or 'secondary'
}) {
  // Color and style configs
  const isPrimary = mode === "primary";
  const bgClass = isPrimary ? "bg-[#0E6E65]" : "bg-[#EEF5F4]";
  const hoverClass = isPrimary
    ? "hover:border-white"
    : "hover:bg-white hover:border-primary";
  const nameClass = isPrimary ? "text-white" : "text-primary";
  const specialtyClass = isPrimary ? "text-white" : "text-primary";
  const textClass = isPrimary ? "text-[#B7D3D1]" : "text-[#617A78]";
  const iconColor = isPrimary ? "#B7D3D1" : "#617A78";
  const buttonVariant = isPrimary ? "default" : "ghost";
  const buttonTextClass = isPrimary
    ? ""
    : "text-white border-primary text-[14px] font-bold rounded-full h-fit w-full bg-primary hover:bg-white border hover:border-primary hover:text-primary";

  return (
    <div
      className={`rounded-2xl max-w-[360px] h-[593px] p-6 flex flex-col justify-between items-start text-left w-fit ${bgClass} border border-transparent ${hoverClass} transition-all duration-300 ease-in-out hover:scale-101 ${className}`}
    >
      <div className="w-[300px] h-[230px] rounded-sm mx-auto mb-4 overflow-hidden  ">
        <Image
          src={image}
          alt={name}
          width={300}
          height={230}
          className="object-contain  "
        />
      </div>
      <div className="flex items-center h-[40px] justify-center mb-1 gap-2">
        {avatar && (
          <Image
            src={avatar}
            alt={name + " avatar"}
            width={40}
            height={40}
            className="rounded-full h-[40px] w-[40px] object-cover "
          />
        )}
        <h3 className={`text-sm font-bold ${nameClass}`}>{name}</h3>
      </div>
      <h4 className={`text-md font-bold text-[20px] mb-2 ${specialtyClass}`}>
        {specialty}
      </h4>
      <p className={`${textClass} text-sm mb-4`}>
        {details && details.split(" ").length > 10
          ? details.split(" ").slice(0, 10).join(" ") + "..."
          : details}
      </p>
      <div className="flex flex-col items-center  mb-4 w-full">
        <div className="flex justify-between mb-6 w-full">
          {price !== undefined && (
            <p
              className={`text-sm capitalize flex items-center gap-1 ${textClass}`}
            >
              <Reyal fill={iconColor} /> {price} R.S
            </p>
          )}
          {remotely !== undefined && (
            <p
              className={`text-sm capitalize flex items-center gap-1 mr-2 ${textClass}`}
            >
              {remotely ? (
                <MdOutlineVideoCall
                  className="inline-block text-lg"
                  color={iconColor}
                />
              ) : (
                <MdLocationOn
                  className="inline-block text-lg"
                  color={iconColor}
                />
              )}
              {remotely ? "Remotely" : "On-site "}
            </p>
          )}
        </div>
        {(fromDate || toDate) && (
          <div className="flex justify-between w-full">
            <p
              className={`text-sm capitalize flex items-center gap-1 ${textClass}`}
            >
              <TbCalendarClock className="inline-block" color={iconColor} />
              {fromDate && `From ${fromDate}`}
            </p>
            <p
              className={`text-sm capitalize flex items-center gap-1 ${textClass}`}
            >
              <TbCalendarClock className="inline-block" color={iconColor} />
              {toDate && `To ${toDate}`}
            </p>
          </div>
        )}
      </div>
      <Button
        variant={buttonVariant}
        asChild
        size="md"
        className={buttonTextClass}
      >
        <Link className="w-full h-full py-4 flex justify-center" href={link}>
          Read More
        </Link>
      </Button>
    </div>
  );
}
