import React from "react";
import Image from "next/image";

function BreadCramp({
  heading = "Welcome to Health Community",
  paragraph = "Explore our platform to connect with trusted health resources and a supportive community.",
  image ,
  imageClass = "",
  bgImage = "/images/green-bg.png",
}) {
  return (
    <section
      className="relative bg-cover bg-no-repeat min-h-[280px] sm:min-h-[360px] md:min-h-[440px] overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-36 py-6 sm:py-8 md:py-10 relative z-10">
        <Image
          src="/images/white-decor.png"
          alt="Decorative Circle"
          width={300}
          height={300}
          priority
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[550px] absolute left-0 top-0 pointer-events-none z-10"
          sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 550px"
        />
        <div className="relative z-20 flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-10 md:mt-12 lg:mt-18 max-w-full sm:max-w-lg md:max-w-xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-white">
            {heading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-normal max-w-full sm:max-w-11/12 capitalize text-[#FFFFFF99]">
            {paragraph}
          </p>
        </div>
      </div>
      {image && (
        <div
          className={`absolute right-4 sm:right-8 md:right-16 lg:right-24 bottom-0 z-0 ${imageClass}`}
        >
          <Image
            loading="lazy"
            src={`/images/cartoon/${image}`}
            alt="Health Community Illustration"
            className="w-auto h-auto max-w-[200px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[372px] max-h-[200px] sm:max-h-[280px] md:max-h-[340px] lg:max-h-[380px] object-contain"
            width={372}
            height={380}
            sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 372px"
          />
        </div>
      )}
    </section>
  );
}

export default BreadCramp;
