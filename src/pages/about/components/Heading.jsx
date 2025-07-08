export default function Heading({ heading, subheading, description }) {
    return (
      <div className="mt-16  items-end md:mt-0 flex flex-col md:flex-row md:items-end md:justify-between">
        <div className="text-center md:text-left md:max-w-[40%]">
          <h2 className="text-[18px] capitalize text-primary font-bold mb-[30px]">
            {heading}
          </h2>
          <h3 className="text-[52px] font-bold text-primary max-w-2xl capitalize leading-[1.2] mb-4">
            {subheading}
          </h3>
        </div>
  
        <div className="relative md:w-1/3  md:mt-0 text-[#617A78] text-lg capitalize">
          <div className="relative before:content-[''] before:block before:w-[95px] before:h-[2px] before:bg-primary before:mb-2"></div>
          <p className="mt-10">
            {description}
          </p>
        </div>
      </div>
    );
  }
  