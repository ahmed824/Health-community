"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomSwiperNav from "../../../../components/layout/CustomSwiperNav";
import Image from "next/image";
import "swiper/css/effect-cards";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsArrowRightCircle } from "react-icons/bs";
import Button from "../../../../components/ui/Button";
import { DotsLoader, SkeletonLoader } from "../../../../components/ui";
import { SlArrowRightCircle } from "react-icons/sl";

const blogs = [
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines ",
    image: "/images/hand.png",
    link: "/blog/1",
  },
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines Blog Written In Two Lines",
    image: "/images/hand.png",
    link: "/blog/1",
  },
  {
    date: "13 May 2025",
    title: "Demo Title Of This Blog Written In Two Lines .Blog Written In Two Lines",
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
    <section className="py-32 relative">
      {/* Decorative Radial Gradient Background */}
      <div className="absolute top-0 left-0 w-[614px] h-[614px] pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(7,106,96,0.09)_0%,rgba(7,106,96,0)_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-primary text-lg font-bold mb-2">
          Our Blogs
        </h2>
        <h3 className="text-center text-primary text-[52px] max-w-1/2 m-auto font-[700] mb-10">
          Your Medical Learning Journey Starts Here!
        </h3>
        <div className="relative">
          {isLoading ? (
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 py-8">
                <DotsLoader size="default" speed="normal" />
                <span className="text-primary font-medium">Loading blogs...</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                leftButtonPosition="absolute left-4 top-1/2"
                rightButtonPosition="absolute right-4 top-1/2"
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
                spaceBetween={0}
                slidesPerView={1}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                pagination={{ clickable: true }}
                loop
                effect={"cards"}
                grabCursor={true}
                className="blogs-swiper swiper-cards"
                onSwiper={handleSwiper}
              >
                {blogs.map((blog, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-white rounded-[10px] p-6  shadow-[0_0_35px_0_#076A6012]">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[14px] capitalize text-[#617A78]">
                          {" "}
                          <FaRegCalendarDays className="text-[#617A78] inline-block mr-1.5" />{" "}
                          {blog.date}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[#076A60] text-[32px] max-w-1/4 line-clamp-2 font-bold mb-4">
                          {blog.title}
                        </h4>
                        <Link
                          href={blog.link}
                          className="text-lg text-[#076A60] font-bold flex items-center gap-2 group"
                        >
                          Read More
                          <SlArrowRightCircle className="text-3xl group-hover:text-[#076A60] transition-all duration-200" />
                        </Link>
                      </div>
                      <div className="relative aspect-[940/483] w-full rounded-xl overflow-hidden mb-4">
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
           
          <div className="flex  ">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#076A60] text-[#076A60] m-auto flex w-fit mt-10 hover:bg-[#076A60] hover:text-white"
            >
              <Link href="/jobs">Explore All</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
