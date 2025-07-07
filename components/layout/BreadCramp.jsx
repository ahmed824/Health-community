import React from "react";
import DecorativeGradientCircle from "../ui/DecorativeGradientCircle";
import Image from "next/image";

function BreadCramp({ heading, paragraph, image }) {
  return (
    <section className="relative [background-image:url('/images/green-bg.png')] [background-size:100%_100%] min-h-[440px] overflow-hidden">
      <div className="flex items-center justify-between px-36 py-8 relative z-10 ">
        {/* Left Side */}
        <div className="relative z-10 flex flex-col gap-4 mt-18 max-w-lg">
          <DecorativeGradientCircle
            positionClass="absolute left-[-100px] top-1/2 -translate-y-1/2"
            size={240}
            innerSize={120}
          />
          <h1 className="text-3xl font-bold text-white  ">{heading}</h1>
          <p className="text-lg font-normal text-[#FFFFFF99]  ">{paragraph}</p>
        </div>
      </div>
      {/* Right Side Image absolutely positioned */}
      <div className="absolute right-0 -bottom-3 z-0">
        <Image
          loading="lazy"
          src={`/images/cartoon/${image}`}
          alt="Health Community Illustration"
          className="w-auto h-auto max-w-[372px] max-h-[380px] object-contain"
          width={372}
          height={380}
        />
      </div>
    </section>
  );
}

export default BreadCramp;
