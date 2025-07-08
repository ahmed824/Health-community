import React from "react";
import Image from "next/image";

function BreadCramp({ heading, paragraph, image, imageClass }) {
  return (
    <section className="relative [background-image:url('/images/green-bg.png')] [background-size:100%_100%] min-h-[440px] overflow-hidden">
      <div className="flex items-center justify-between px-36 py-8 relative z-10 ">
        {/* Decorative Gradient Circle - Left Side */}
        <Image
          src="/images/white-decor.png"
          alt="Decorative Circle"
          width={550}
          height={550}
          priority
          className="w-auto absolute left-0 top-0 pointer-events-none z-10"
        />
        <div className="relative z-10 flex flex-col gap-4 mt-18 max-w-lg">
          <h1 className="text-3xl font-bold text-white  ">{heading}</h1>
          <p className="text-lg font-normal max-w-11/12 capitalize text-[#FFFFFF99]  ">
            {paragraph}
          </p>
        </div>
      </div>
      {/* Right Side Image absolutely positioned */}
      <div className={`absolute right-24 -mb-3 ${imageClass} bottom-0 z-0`}>
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
