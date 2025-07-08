import Image from "next/image";

export default function Mission({ heading, subheading, description }) {
  return (
    <div className="mb-28 -mt-10 flex flex-col md:flex-row md:items-end md:justify-between">
      {/* Text Section */}
      <div className="text-center md:text-left md:max-w-[45%]">
        <h2 className="text-[18px] font-bold text-primary capitalize mb-6">
          {heading}
        </h2>
        <h3 className="text-[42px] md:text-[52px] font-bold text-primary capitalize leading-tight mb-4">
          {subheading}
        </h3>
        <p className="mt-6 text-[#617A78] text-lg capitalize">{description}</p>
      </div>

      {/* Image Section */}
      <div className="w-full mt-10 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/images/mission.png"
          alt="About Health Community"
          width={424}
          height={420}
          className="rounded-xl object-cover"
          priority
        />
      </div>
    </div>
  );
}
