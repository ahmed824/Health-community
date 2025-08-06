import Image from "next/image";

export default function MissionVision({
  heading,
  subheading,
  description,
  direction,
  img,
}) {
  return (
    <div
      className={`mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between ${
        direction === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className={`w-full flex justify-center ${
          direction === "right" ? "md:justify-start" : ""
        } mt-6 sm:mt-8 md:mt-0 ${direction === "left" ? "md:justify-end" : ""}`}
      >
        <Image
          src={img}
          alt="About Health Community"
          width={direction === "left" ? 480 : 424}
          height={direction === "left" ? 391 : 420}
          className="rounded-xl object-cover w-full max-w-[300px] sm:max-w-[400px] md:max-w-[424px] lg:max-w-[480px]"
          priority
          sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 424px, 480px"
        />
      </div>

      {/* Text Section */}
      <div
        className={`text-center md:text-left mt-6 sm:mt-8 md:mt-0 md:max-w-[${
          direction === "left" ? "40" : "45"
        }%] w-full px-4 sm:px-6`}
      >
        <h2 className="text-base sm:text-lg md:text-[18px] capitalize text-primary font-bold mb-4 sm:mb-6 md:mb-[30px]">
          {heading}
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[52px] font-bold text-primary capitalize leading-tight mb-4">
          {subheading}
        </h3>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#617A78] capitalize">
          {description}
        </p>
      </div>
    </div>
  );
}