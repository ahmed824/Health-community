"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "../../../components/ui/Button";
import Link from "next/link";

const PageLoader = dynamic(() => import("../../../components/ui/PageLoader"), {
  loading: () => (
    <div className="min-h-[400px]">
      <div className="flex items-center justify-center h-full">
        <span>Loading...</span>
      </div>
    </div>
  ),
});
const SkeletonLoader = dynamic(() =>
  import("../../../components/ui/SkeletonLoader")
);
const JobCard = dynamic(() => import("../../../components/layout/JobCard"), {
  loading: () => <SkeletonLoader type="card" />, // Use skeleton card for JobCard loading
});

const BreadCramp = dynamic(
  () => import("../../../components/layout/BreadCramp"),
  {
    loading: () => <PageLoader size="small" />,
  }
);
const JobHeaderSection = dynamic(() => import("../Jobs/JobHeaderSection"), {
  loading: () => <PageLoader size="small" />,
});
const CustomSwiperNav = dynamic(
  () => import("../../../components/layout/CustomSwiperNav"),
  {
    loading: () => <PageLoader size="small" />,
  }
);
const DoctorCard = dynamic(
  () => import("../../../components/layout/DoctorCard"),
  {
    loading: () => <SkeletonLoader type="card" />, // Use skeleton card for JobCard loading
  }
);
const AboutCourse = dynamic(() => import("./components/AboutCourse"), {
  loading: () => <PageLoader size="small" />,
});
const ContactInformation = dynamic(
  () => import("./components/ContactInformation"),
  {
    loading: () => <PageLoader size="small" />,
  }
);

export default function CoursePage({ course, otherCourses }) {
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

  if (!course) {
    return <PageLoader size="large" className="min-h-[400px]" />;
  }

  return (
    <>
      <BreadCramp
        heading={`${course.specialty}`}
        paragraph={`${course.details}`}
        imageClass="bottom-3   w-[300px]   "
        bgImage="/images/colored-bg.png"
      />
      <div className="container mx-auto ">
        {/* Header Section */}
        <JobHeaderSection doctor={course} mode="course" />

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row gap-8">
          <AboutCourse course={course} />
          <ContactInformation />
        </div>

        {/* Bottom Swiper Section */}
        <div className="mt-12">
          <h3 className="text-[42px] capitalize font-bold text-primary mb-4">
            explore other courses
          </h3>
          <div className="flex relative gap-8 overflow-x-auto ">
            <CustomSwiperNav
              prevRef={prevRef}
              nextRef={nextRef}
              leftButtonPosition="absolute left-0 top-[40%]"
              rightButtonPosition="absolute right-0 top-[40%]"
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
              slidesPerView={3}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              loop
              onSwiper={handleSwiper}
              className="job-swiper py-20"
            >
              {otherCourses.map((job, idx) => (
                <SwiperSlide key={idx}>
                  <DoctorCard
                    name={job.name}
                    specialty={job.specialty}
                    image={job.image}
                    details={job.details}
                    link={job.link}
                    avatar={job.avatar}
                    remotely={job.remotely}
                    price={job.price}
                    fromDate={job.fromDate}
                    toDate={job.toDate}
                    mode="secondary"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#076A60] text-[#076A60] m-auto md:flex w-fit mt-8 hover:bg-[#076A60] hover:text-white"
          >
            <Link href="/blogs">Explore All</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
