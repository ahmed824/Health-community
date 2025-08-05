"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "../../../../components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import DecorativeGradientCircle from "../../../../components/ui/DecorativeGradientCircle";
import CustomSwiperNav from "../../../../components/layout/CustomSwiperNav";
import { useRef } from "react";
import JobCard from "../../../../components/layout/JobCard";
import { useTranslation } from "react-i18next";
 
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
  const { i18n } = useTranslation();

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
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16">
          {/* Left: CTA Text */}
          <div className="flex-1 w-full lg:max-w-xl text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6">
              <Image
                src="/images/gifs/explore.gif"
                alt="Available Jobs"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6"
                unoptimized
              />
              <span className="text-[#076A60] ml-2 font-semibold text-base sm:text-lg">
                Available Jobs
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold mb-4 sm:mb-6 lg:mb-7 text-[#076A60] leading-tight">
              <span className="block">Grow With Us</span>
              <span className="block">Medical Jobs For You</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#617A78] mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              It Is A Long Established Fact That A Reader Will Be Distrac The
              Readable Content Of A Page When Looking.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#076A60] text-[#076A60] hover:bg-[#076A60] hover:text-white text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
              >
                <Link href={`${i18n.language}/jobs`}>Explore All</Link>
              </Button>
            </div>
          </div>

          {/* Right: Swiper with Job Cards */}
          <div className="flex-1 w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative px-4 sm:px-6 lg:px-0">
              {/* Navigation buttons - hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block">
                <CustomSwiperNav
                  prevRef={prevRef}
                  nextRef={nextRef}
                  leftButtonPosition="absolute left-0 sm:left-4 md:left-8 lg:left-20 top-1/2 transform -translate-y-1/2 z-10"
                  rightButtonPosition="absolute right-0 sm:right-4 md:right-8 lg:right-10 top-1/2 transform -translate-y-1/2 z-10"
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
              </div>
              
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                loop
                onSwiper={handleSwiper}
                className="job-swiper"
              >
                {jobs.map((job, idx) => (
                  <SwiperSlide key={idx}>
                    <JobCard
                      image={job.image}
                      specialty={job.specialty}
                      title={job.title}
                      description={job.description}
                      type={job.type}
                      posted={job.posted}
                      location={job.location}
                      link={job.link}
                      action={
                        <Button
                          variant="outline"
                          size="lg"
                          className="bg-[#076A60] text-white w-full mt-auto transition hover:shadow-lg text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                        >
                          <Link
                            className="w-full h-full flex items-center justify-center"
                            href={job.link}
                          >
                            Apply Now
                          </Link>
                        </Button>
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Mobile navigation dots */}
              <div className="flex justify-center mt-4 sm:hidden">
                <div className="flex space-x-2">
                  {jobs.map((_, idx) => (
                    <div
                      key={idx}
                      className="w-2 h-2 rounded-full bg-[#076A60] opacity-30"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive decorative element */}
      <DecorativeGradientCircle
        positionClass="absolute right-4 sm:right-8 md:right-16 lg:right-52 -z-10 top-16 sm:top-20 md:top-24 lg:top-26 rotate-12 sm:rotate-24 lg:rotate-34"
        size={120}
        innerSize={60}
        className="sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60"
      />
    </section>
  );
}
