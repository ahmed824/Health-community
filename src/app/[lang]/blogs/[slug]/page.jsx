"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useParams } from "next/navigation";

const PageLoader = dynamic(
  () => import("../../../../../components/ui/PageLoader"),
  {
    loading: () => (
      <div className="min-h-[400px]">
        <div className="flex items-center justify-center h-full">
          <span>Loading...</span>
        </div>
      </div>
    ),
  }
);
const SkeletonLoader = dynamic(() =>
  import("../../../../../components/ui/SkeletonLoader")
);
const BlogCard = dynamic(() => import("@/pages/Blog/BlogCard"), {
  loading: () => <SkeletonLoader type="card" />,
});
const BreadCramp = dynamic(
  () => import("../../../../../components/layout/BreadCramp"),
  {
    loading: () => <PageLoader size="small" />,
  }
);
const BlogHeaderSection = dynamic(
  () => import("../../../../pages/Blog/components/BlogHeaderSection"),
  {
    loading: () => <PageLoader size="small" />,
  }
);
const CustomSwiperNav = dynamic(
  () => import("../../../../../components/layout/CustomSwiperNav"),
  {
    loading: () => <PageLoader size="small" />,
  }
);
const BlogContentSection = dynamic(
  () => import("../../../../pages/Blog/components/BlogContentSection"),
  {
    loading: () => <PageLoader size="small" />,
  }
);
const BlogSidebarSection = dynamic(
  () => import("../../../../pages/Blog/components/BlogSidebarSection"),
  {
    loading: () => <PageLoader size="small" />,
  }
);

const blogs = [
    {
      id: "1",
      date: "13 May 2025",
      title:
        "The Future of Healthcare: AI and Machine Learning in Medical Diagnosis",
      image: "/images/hand.png",
      link: "/blog/1",
      content:
        "This comprehensive article explores how artificial intelligence and machine learning are revolutionizing medical diagnosis. We delve into the latest advancements in AI-powered diagnostic tools, their accuracy rates, and the potential impact on healthcare delivery. From early disease detection to personalized treatment plans, AI is transforming the way doctors approach patient care.",
      author: "Dr. Sarah Johnson",
      readTime: "8 min read",
      category: "Technology",
      tags: ["AI", "Healthcare", "Diagnosis", "Technology"],
      views: 1247,
      likes: 89,
    },
    {
      id: "2",
      date: "12 May 2025",
      title: "Mental Health Awareness: Breaking the Stigma in Modern Healthcare",
      image: "/images/hand.png",
      link: "/blog/2",
      content:
        "Mental health has become a critical focus in modern healthcare. This article examines the importance of mental health awareness, the challenges in breaking societal stigmas, and the innovative approaches being used to provide better mental health care. We explore various treatment methods, support systems, and the role of healthcare professionals in mental health advocacy.",
      author: "Dr. Michael Chen",
      readTime: "6 min read",
      category: "Mental Health",
      tags: ["Mental Health", "Awareness", "Stigma", "Wellness"],
      views: 892,
      likes: 67,
    },
    {
      id: "3",
      date: "11 May 2025",
      title: "Preventive Medicine: The Key to Long-term Health and Wellness",
      image: "/images/hand.png",
      link: "/blog/3",
      content:
        "Preventive medicine is increasingly recognized as the cornerstone of effective healthcare. This article discusses the importance of preventive care, including regular check-ups, vaccinations, lifestyle modifications, and early intervention strategies. We examine how preventive medicine can reduce healthcare costs and improve quality of life.",
      author: "Dr. Emily Rodriguez",
      readTime: "7 min read",
      category: "Preventive Care",
      tags: ["Prevention", "Wellness", "Health", "Lifestyle"],
      views: 1563,
      likes: 112,
    },
    {
      id: "4",
      date: "11 May 2025",
      title: "Preventive Medicine: The Key to Long-term Health and Wellness",
      image: "/images/hand.png",
      link: "/blog/3",
      content:
        "Preventive medicine is increasingly recognized as the cornerstone of effective healthcare. This article discusses the importance of preventive care, including regular check-ups, vaccinations, lifestyle modifications, and early intervention strategies. We examine how preventive medicine can reduce healthcare costs and improve quality of life.",
      author: "Dr. Emily Rodriguez",
      readTime: "7 min read",
      category: "Preventive Care",
      tags: ["Prevention", "Wellness", "Health", "Lifestyle"],
      views: 1563,
      likes: 112,
    },
    {
      id: "5",
      date: "11 May 2025",
      title: "Preventive Medicine: The Key to Long-term Health and Wellness",
      image: "/images/hand.png",
      link: "/blog/3",
      content:
        "Preventive medicine is increasingly recognized as the cornerstone of effective healthcare. This article discusses the importance of preventive care, including regular check-ups, vaccinations, lifestyle modifications, and early intervention strategies. We examine how preventive medicine can reduce healthcare costs and improve quality of life.",
      author: "Dr. Emily Rodriguez",
      readTime: "7 min read",
      category: "Preventive Care",
      tags: ["Prevention", "Wellness", "Health", "Lifestyle"],
      views: 1563,
      likes: 112,
    },
  ];

export default function BlogPage() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Get the current blog based on URL params
  const params = useParams();
  const blog = blogs.find((b) => b.id === params.slug);

  // Handler to update navigation after refs are set
  const handleSwiper = (swiper) => {
    if (swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  if (!blog) {
    return <PageLoader size="large" className="min-h-[400px]" />;
  }

  // Get other blogs for the swiper
  const otherBlogs = blogs.filter((b) => b.id !== blog.id);

  return (
    <>
      <BreadCramp
        heading={blog.title}
        paragraph={blog.date}
        imageClass="bottom-3 w-[300px]"
        bgImage="/images/colored-bg.png"
      />
      <div className="container mx-auto py-8 px-4 md:px-0">
        {/* Header Section */}
        <BlogHeaderSection blog={blog} />

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Blog Content */}
          <BlogContentSection blog={blog} />
          {/* Right: Sidebar */}
          <BlogSidebarSection />
        </div>

        {/* Bottom Swiper Section */}
        <div className="mt-12">
          <h3 className="text-[42px] capitalize font-bold text-primary mb-4">
            explore other blogs
          </h3>
          <div className="relative">
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
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              loop
              onSwiper={handleSwiper}
              className="blog-swiper py-6 px-4  "
            >
              {otherBlogs.map((blogItem, idx) => (
                <SwiperSlide key={idx}>
                  <BlogCard
                    date={blogItem.date}
                    title={blogItem.title}
                    image={blogItem.image}
                    link={blogItem.link}
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
