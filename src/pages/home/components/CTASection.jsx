"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "../../../../components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import DecorativeGradientCircle from "../../../../components/ui/DecorativeGradientCircle";
import CustomSwiperNav from "../../../../components/layout/CustomSwiperNav";
import { useRef } from "react";
import { RiTimeLine, RiCalendarLine, RiMapPinLine } from "react-icons/ri";

const jobs = [
  {
    image: "/images/doctors/img1.png",
    specialty: "Medical Specialty",
    title: "Demo Job Title Is Written Here In One Line Or Two",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distrac The Readable Content. ",
    type: "Part Time",
    posted: "Since 8 Days",
    location: "Country , City",
    link: "/jobs/1",
  },
  {
    image: "/images/doctors/img4.png",
    specialty: "Medical Specialty",
    title: "Demo Job Title Is Written Here In One Line Or Two",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distrac The Readable Content.",
    type: "Part Time",
    posted: "Since 8 Days",
    location: "Country , City",
    link: "/jobs/1",
  },
  {
    image: "/images/doctors/img2.png",
    specialty: "Medical Specialty",
    title: "Demo Job Title Is Written Here In One Line Or Two",
    description:
      "It Is A Long Established Fact That A Reader Will Be Distrac The Readable Content.",
    type: "Part Time",
    posted: "Since 8 Days",
    location: "Country , City",
    link: "/jobs/1",
  },
  // Add more job objects as needed
];

export default function CTASection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // Handler to update navigation after refs are set
  const handleSwiper = (swiper) => {
    if (swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  return (
    <section className="py-32 relative ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: CTA Text */}
          <div className="flex-1 max-w-xl text-left">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/gifs/explore.gif"
                alt="Available Jobs"
                width={24}
                height={24}
              />
              <span className="text-[#076A60] ml-2 font-semibold text-lg">
                Available Jobs
              </span>
            </div>
            <h2 className="text-4xl md:text-[52px] font-bold mb-7 text-[#076A60] leading-tight">
              <span className="block">Grow With Us</span>
              <span className="block    ">Medical Jobs For You</span>
            </h2>
            <p className="text-lg text-[#617A78] mb-8">
              It Is A Long Established Fact That A Reader Will Be Distrac The
              Readable Content Of A Page When Looking.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#076A60] text-[#076A60] hover:bg-[#076A60] hover:text-white"
            >
              <Link href="/jobs">Explore All</Link>
            </Button>
          </div>

          {/* Right: Swiper with Job Cards */}
          <div className="flex-1 p-6 w-1/2 relative ">
            <CustomSwiperNav
              prevRef={prevRef}
              nextRef={nextRef}
              leftButtonPosition="absolute left-20 top-1/2"
              rightButtonPosition="absolute right-10 top-1/2"
              leftButtonBg="transparent"
              rightButtonBg="transparent"
              leftButtonBorder="1px solid #076A60"
              rightButtonBorder="1px solid #076A60"
              leftButtonHoverBg="#076A60"
              rightButtonHoverBg="#076A60"
              leftButtonArrowColor="#076A60"
              rightButtonArrowColor="#076A60"
              leftButtonHoverArrowColor="#fff"
              rightButtonHoverArrowColor="#fff"
              wrapperClassName="my-swiper-nav"
            />
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              loop
              onSwiper={handleSwiper}
              className="job-swiper "
            >
              {jobs.map((job, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white m-auto w-[643px]  rounded-2xl shadow-[0_0_35px_0_rgba(7,106,96,0.07)] p-6 flex flex-col md:flex-row items-center gap-6 border border-gray-100 relative">
                    <div className="w-[252px] h-[296px] rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={job.image}
                        alt={job.title}
                        width={252}
                        height={296}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <span className="text-[#076A60] font-bold text-sm ">

                        {job.specialty}
                      </span>
                      <h3 className="text-lg font-bold text-[#076A60] my-3 leading-snug ">
                        {job.title}
                      </h3>
                      <p className="text-[#617A78] text-sm mb-2 line-clamp-2 overflow-hidden">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-[#617A78] text-sm my-3">
                        <div className="flex items-center justify-between w-full">
                          <p className="flex items-center gap-1">
                            <RiTimeLine className="inline-block" />
                            {job.type}
                          </p>
                          <p className="flex items-center gap-1">
                            <RiCalendarLine className="inline-block" />
                            {job.posted}
                          </p>
                        </div>
                        <p className="flex items-center gap-1">
                          <RiMapPinLine className="inline-block" />
                          {job.location}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-[#076A60] text-white w-full mt-auto transition hover:shadow-lg"
                      >
                        <Link
                          className="w-full h-full flex items-center justify-center "
                          href={job.link}
                        >
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <DecorativeGradientCircle
        positionClass="absolute right-52 -z-1 top-26 rotate-z-34"
        size={240}
        innerSize={120}
      />
    </section>
  );
}
