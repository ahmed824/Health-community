"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import DoctorCard from "../../../../components/layout/DoctorCard";
import Button from "../../../../components/ui/Button";
import Link from "next/link";

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
];

export default function OurCoursesSection() {
  return (
    <section className="py-16 bg-[#076A60]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="text-[18px]  font-bold text-white  mb-6 capitalize text-left">
              Our Courses
            </h2>
            <h3 className="text-[52px]  font-bold text-white  mb-10 capitalize text-left">
              explore our courses
            </h3>
          </div>
          <Button variant="destructive" asChild>
            <Link
              className="w-[132px]   py-8 flex capitalize justify-center items-center"
              href="/courses"
            >
              explore all
            </Link>
          </Button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="courses-swiper"
        >
          {doctors.map((doctor, idx) => (
            <SwiperSlide className="p-4 py-10" key={idx}>
              <DoctorCard {...doctor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
