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
}) {
  return (
    <div className="rounded-2xl max-w-[360px] h-[593px] p-6 flex flex-col justify-between items-start text-left w-fit bg-[#0E6E65] border border-transparent hover:border-white transition-all duration-300 ease-in-out hover:scale-105">
      <div className="w-[300px] h-[230px] rounded-sm mx-auto mb-4 overflow-hidden  ">
        <Image
          src={image}
          alt={name}
          width={300}
          height={230}
          className="object-contain  "
        />
      </div>
      <div className="flex items-center justify-center mb-1 gap-2">
        {avatar && (
          <Image
            src={avatar}
            alt={name + " avatar"}
            width={40}
            height={40}
            className="rounded-full object-cover "
          />
        )}
        <h3 className="text-sm font-bold text-white">{name}</h3>
      </div>
      <h4 className="text-md text-white font-bold text-[20px] mb-2">
        {specialty}
      </h4>
      <p className="text-[#B7D3D1] text-sm mb-4">
        {details && details.split(" ").length > 10
          ? details.split(" ").slice(0, 10).join(" ") + "..."
          : details}
      </p>
      <div className="flex flex-col items-center  mb-4 w-full">
        <div className="flex justify-between mb-6 w-full">
          {price !== undefined && (
            <p className="text-sm capitalize text-[#B7D3D1]">
              <Reyal fill={"#B7D3D1"} /> {price} R.S
            </p>
          )}
          {remotely !== undefined && (
            <p className="text-sm capitalize text-[#B7D3D1] flex items-center gap-1 mr-2">
              {remotely ? (
                <MdOutlineVideoCall className="inline-block text-lg" />
              ) : (
                <MdLocationOn className="inline-block text-lg" />
              )}
              {remotely ? "Remotely" : "On-site "}
            </p>
          )}
        </div>
        {(fromDate || toDate) && (
          <div className="flex justify-between w-full">
            <p className="text-sm capitalize text-[#B7D3D1]">
              {" "}
              <TbCalendarClock className="inline-block" />{" "}
              {fromDate && `From ${fromDate}`}{" "}
            </p>
            <p className="text-sm capitalize text-[#B7D3D1]">
              {" "}
              <TbCalendarClock className="inline-block" />{" "}
              {toDate && `To ${toDate}`}
            </p>
          </div>
        )}
      </div>
      <Button variant="default" asChild size="md">
        <Link className="w-full h-full py-4 flex justify-center" href={link}>
          Read More
        </Link>
      </Button>
    </div>
  );
}
