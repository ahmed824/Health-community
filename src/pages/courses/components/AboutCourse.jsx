import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";

export default function AboutCourse({ course }) {
  return (
    <div className="flex-1 max-w-full lg:max-w-[55%] bg-white px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-primary mb-4">
        About This Course
      </h2>
      <div className="flex items-center gap-2 mb-4 sm:mb-5">
        <Image
          loading="lazy"
          src={course.avatar}
          alt={course.name}
          width={28}
          height={28}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border"
        />
        <span className="font-bold text-primary text-sm sm:text-base">
          {course.name}
        </span>
      </div>
      <p className="text-[#617A78] text-sm sm:text-base md:text-lg leading-6 sm:leading-7 mb-4 sm:mb-6">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
        Since The 1500s, When An Unknown Printer Took A Galley Of Type And
        Scrambled It To Make A Type Specimen Book.
      </p>
      <div className="text-sm sm:text-base flex items-center gap-1 mb-4 sm:mb-5 text-[#617A78]">
        <TfiLocationPin className="text-base sm:text-[18px]" />
        <p>location is written here</p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-[#617A78] text-sm sm:text-base mb-4">
        <li>
          <p>• The First Feature Is Written Here</p>
        </li>
        <li>
          <p>• The First Feature Is Written Here</p>
        </li>
        <li>
          <p>• The First Feature Is Written Here</p>
        </li>
        <li>
          <p>• The First Feature Is Written Here</p>
        </li>
      </ul>
    </div>
  );
}
