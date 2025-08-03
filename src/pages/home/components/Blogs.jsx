"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomSwiperNav from "../../../../components/layout/CustomSwiperNav";
import Image from "next/image";
import "swiper/css/effect-cards";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { FaRegCalendarDays } from "react-icons/fa6";
import Button from "../../../../components/ui/Button";
import { DotsLoader, SkeletonLoader } from "../../../../components/ui";
import { SlArrowRightCircle } from "react-icons/sl";

const blogs = [
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines ",
    image: "/images/hand.png",
    link: "/blog/1",
  },
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blog/1",
  },
  {
    date: "13 May 2025",
    title:
      "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blog/1",
  },
];

export default function Blogs() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for blogs
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative">
      {/* Decorative Radial Gradient Background */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[614px] lg:h-[614px] pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(7,106,96,0.09)_0%,rgba(7,106,96,0)_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-primary text-sm sm:text-base md:text-lg font-bold mb-2">
          Our Blogs
        </h2>
        <h3 className="text-center text-primary text-2xl sm:text-3xl md:text-4xl lg:text-[52px] max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto font-[700] mb-6 sm:mb-8 md:mb-10 leading-tight">
          Your Medical Learning Journey Starts Here!
        </h3>
        <div className="relative">
          {isLoading ? (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center space-x-3 py-6 sm:py-8">
                <DotsLoader size="default" speed="normal" />
                <span className="text-primary font-medium text-sm sm:text-base">
                  Loading blogs...
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[1, 2, 3].map((i) => (
                  <SkeletonLoader key={i} type="card" />
                ))}
              </div>
            </div>
          ) : (
            <>
              <CustomSwiperNav
                prevRef={prevRef}
                nextRef={nextRef}
                leftButtonPosition="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2"
                rightButtonPosition="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2"
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
                modules={[EffectCards, Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 3
                }}
                loop
                effect={"cards"}
                grabCursor={true}
                className="blogs-swiper swiper-cards"
                onSwiper={handleSwiper}
                breakpoints={{
                  640: {
                    spaceBetween: 20,
                  },
                  768: {
                    spaceBetween: 24,
                  },
                  1024: {
                    spaceBetween: 32,
                  },
                }}
              >
                {blogs.map((blog, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-white rounded-[10px] p-4 sm:p-5 md:p-6 shadow-[0_0_35px_0_#076A6012] ">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm capitalize text-[#617A78]">
                          {" "}
                          <FaRegCalendarDays className="text-[#617A78] inline-block mr-1 sm:mr-1.5" />{" "}
                          {blog.date}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
                        <h4 className="text-[#076A60] max-w-[400px] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-bold leading-tight line-clamp-2   flex-1">
                          {blog.title}
                        </h4>
                        <Link
                          href={blog.link}
                          className="text-sm sm:text-base md:text-lg text-[#076A60] font-bold flex items-center gap-1 sm:gap-2 group self-start sm:self-center"
                        >
                          Read More
                          <SlArrowRightCircle className="text-xl sm:text-2xl md:text-3xl group-hover:text-[#076A60] transition-all duration-200" />
                        </Link>
                      </div>
                      <div className="relative aspect-[940/483] w-full rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={940}
                          height={483}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}

          <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#076A60] text-[#076A60] hover:bg-[#076A60] hover:text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              <Link href="/blogs">Explore All</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
