"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DoctorCard from "../../../../components/layout/DoctorCard";
import Button from "../../../../components/ui/Button";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import CustomSwiperNav from "../../../../components/layout/CustomSwiperNav";
import { DotsLoader, SkeletonLoader } from "../../../../components/ui";

const doctors = [
  {
    name: "Dr. Michael Carter",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    avatar: "/images/doctors/doctor.png",
    details:
      "Its a long established fact that a reader will be distracted the readable content ..",
    link: "/doctors/michael-carter",
    remotely: true,
    price: 120,
    fromDate: "31 june",
    toDate: "31 june",
  },
  {
    name: "Dr. Lisa Doe",
    specialty: "Psychologist",
    image: "/images/doctors/img2.png",
    avatar: "/images/doctors/doctor.png",
    details:
      "Specialist in mental health and wellness. Focused on holistic patient care and therapy.",
    link: "/doctors/lisa-doe",
    remotely: false,
    price: 100,
    fromDate: "231 june",
    toDate: "31 june",
  },
  {
    name: "Dr. Steven Jacob",
    specialty: "Anesthesiologist",
    image: "/images/doctors/img3.png",
    avatar: "/images/doctors/doctor.png",
    details:
      "Experienced in pain management and surgical anesthesia. Dedicated to patient safety.",
    link: "/doctors/steven-jacob",
    remotely: true,
    price: 150,
    fromDate: "31 june",
    toDate: "31 june",
  },
  {
    name: "Dr. Emma Button",
    specialty: "Dermatologist",
    image: "/images/doctors/img2.png",
    avatar: "/images/doctors/doctor.png",
    details:
      "Expert in skin care and dermatological treatments. Passionate about patient education.",
    link: "/doctors/emma-button",
    remotely: false,
    price: 110,
    fromDate: "31 june",
    toDate: "31 june",
  },
  {
    name: "Dr. Ahmed Abdo",
    specialty: "Dermatologist",
    image: "/images/doctors/img2.png",
    avatar: "/images/doctors/doctor.png",
    details:
      "Expert in skin care and dermatological treatments. Passionate about patient education.",
    link: "/doctors/emma-button",
    remotely: false,
    price: 110,
    fromDate: "31 june",
    toDate: "31 june",
  },
];

export default function OurCoursesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Simulate loading time for courses
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Helper to update slidesPerView responsively
  const handleSwiper = (swiper) => {
    setSlidesPerView(swiper.params.slidesPerView);
    // Attach navigation refs
    if (swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setSlidesPerView(swiper.params.slidesPerView);
  };

  return (
    <section className="py-32 relative bg-[#076A60] overflow-hidden">
      <Image
        src="/images/decoration/right.png"
        alt="Right Decoration"
        width={88}
        height={214}
        className="absolute right-0 top-0 z-0 pointer-events-none select-none"
        priority
      />
      <Image
        src="/images/decoration/left.png"
        alt="Left Decoration"
        width={88}
        height={214}
        className="absolute left-0 top-0 z-0 pointer-events-none select-none"
        priority
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col">
            <h2 className="text-[18px] z-20 font-bold text-white  mb-6 capitalize text-left">
              Our Courses
            </h2>
            <h3 className="text-[52px] z-20 font-bold text-white  mb-10 capitalize text-left">
              explore our courses
            </h3>
          </div>
          <Button variant="destructive" asChild className={"z-20"} >
            <Link
              className="w-[132px] z-20  py-8 flex capitalize justify-center items-center"
              href="/courses"
            >
              explore all
            </Link>
          </Button>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="relative">
          {isLoading ? (
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-3 py-12">
                <DotsLoader size="large" speed="normal" color="white" />
                <span className="text-white font-medium text-lg">Loading courses...</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <SkeletonLoader type="card" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <CustomSwiperNav
                prevRef={prevRef}
                nextRef={nextRef}
                leftButtonPosition="absolute left-4 top-1/2"
                rightButtonPosition="absolute right-4 top-1/2"
                leftButtonBg="transparent"
                rightButtonBg="transparent"
                leftButtonBorder="1px solid #fff"
                rightButtonBorder="1px solid #fff"
                leftButtonHoverBg="#fff"
                rightButtonHoverBg="#fff"
                leftButtonArrowColor="#fff"
                rightButtonArrowColor="#fff"
                leftButtonHoverArrowColor="#076A60"
                rightButtonHoverArrowColor="#076A60"
                wrapperClassName="my-swiper-nav"
              />
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={-200}
                slidesPerView={1}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="courses-swiper"
                onSwiper={handleSwiper}
                onSlideChange={handleSlideChange}
              >
                {doctors.map((doctor, idx) => {
                  // Blur if NOT in the visible range
                  const isVisible =
                    idx >= activeIndex && idx < activeIndex + slidesPerView;
                  const blurClass = !isVisible ? "overaly" : "";
                  const disableClass = !isVisible
                    ? "pointer-events-none cursor-not-allowed"
                    : "";
                  return (
                    <SwiperSlide className={`p-4 py-10 ${blurClass}`} key={idx}>
                      <div className={disableClass}>
                      <DoctorCard {...doctor} mode="primary" key={idx} />

                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
