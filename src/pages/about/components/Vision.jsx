import Image from "next/image";

export default function Vision({ heading, subheading, description }) {
  return (
    <div className="mb-20 flex flex-col-reverse md:flex-row md:items-end md:justify-between">
      {/* Image Section - now on the left */}
      <div className="w-full flex justify-center md:justify-start mt-8 md:mt-0">
        <Image
          src="/images/vision.png"
          alt="About Health Community"
          width={480}
          height={391}
          className="rounded-xl object-cover"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:max-w-[40%]">
        <h2 className="text-[18px] capitalize text-primary font-bold mb-[30px]">
          {heading}
        </h2>
        <h3 className="text-[42px] md:text-[52px] font-bold text-primary capitalize leading-[1.2] mb-4">
          {subheading}
        </h3>
        <p className="mt-6 text-[#617A78] text-lg capitalize">{description}</p>
      </div>
    </div>
  );
}
