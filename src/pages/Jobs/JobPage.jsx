"use client"
import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

const PageLoader = dynamic(() => import("../../../components/ui/PageLoader"), {
  loading: () => <div className="min-h-[400px]"><div className="flex items-center justify-center h-full"><span>Loading...</span></div></div>,
});
const SkeletonLoader = dynamic(() => import("../../../components/ui/SkeletonLoader"));
const JobCard = dynamic(() => import("../../../components/layout/JobCard"), {
  loading: () => <SkeletonLoader type="card" />, // Use skeleton card for JobCard loading
});
const BreadCramp = dynamic(() => import("../../../components/layout/BreadCramp"), {
  loading: () => <PageLoader size="small" />,
});
const JobHeaderSection = dynamic(() => import("./JobHeaderSection"), {
  loading: () => <PageLoader size="small" />,
});
const CustomSwiperNav = dynamic(() => import("../../../components/layout/CustomSwiperNav"), {
  loading: () => <PageLoader size="small" />,
});
const AboutJobSection = dynamic(() => import("./components/AboutJobSection"), {
  loading: () => <PageLoader size="small" />,
});
const JobRequirementsSection = dynamic(() => import("./components/JobRequirementsSection"), {
  loading: () => <PageLoader size="small" />,
});

export default function JobPage({ doctor, otherJobs }) {
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

  if (!doctor) {
    return <PageLoader size="large" className="min-h-[400px]" />;
  }

  return (
    <>
      <BreadCramp
        heading={"Job Name"}
        paragraph={
          "Cardiologist"
        }
        imageClass="bottom-3   w-[300px]   "
        bgImage="/images/colored-bg.png"
      />
      <div className="container mx-auto py-8 px-4 md:px-0">
        {/* Header Section */}
        <JobHeaderSection doctor={doctor} />

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: About This Course */}
          <AboutJobSection doctor={doctor} />
          {/* Right: Job Requirements */}
          <JobRequirementsSection />
        </div>

        {/* Bottom Swiper Section */}
        <div className="mt-12">
          <h3 className="text-[42px] capitalize font-bold text-primary mb-4">
          explore other jobs
          </h3>
          <div className="flex relative gap-8 overflow-x-auto pb-4">
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
              slidesPerView={2}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              loop
              onSwiper={handleSwiper}
              className="job-swiper "
            >
              {otherJobs.map((job, idx) => (
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
                        className="bg-[#076A60] text-white w-full mt-auto transition hover:shadow-lg"
                      >
                        <Link
                          className="w-full h-full flex items-center justify-center "
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
          </div>
        </div>
      </div>
    </>
  );
}
