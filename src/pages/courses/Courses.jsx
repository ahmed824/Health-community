import React from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import DoctorCard from "../../../components/layout/DoctorCard";

const doctors = [
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    details: "Expert in heart diseases and cardiovascular health.",
    link: "/courses/ahmed-hassan",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 200,
    fromDate: "2025-07-10",
    toDate: "2025-07-15",
  },
  {
    name: "Dr. Sara Ali",
    specialty: "Dermatologist",
    image: "/images/doctors/img2.png",
    details: "Specialist in skin care and dermatological treatments.",
    link: "/courses/sara-ali",
    avatar: "/images/avatar.jpg",
    remotely: false,
    price: 180,
    fromDate: "2025-07-12",
    toDate: "2025-07-18",
  },
  {
    name: "Dr. Omar Youssef",
    specialty: "Pediatrician",
    image: "/images/doctors/img3.png",
    details: "Caring for children and infants with compassion.",
    link: "/courses/omar-youssef",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 150,
    fromDate: "2025-07-14",
    toDate: "2025-07-20",
  },
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    details: "Expert in heart diseases and cardiovascular health.",
    link: "/courses/ahmed-hassan",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 200,
    fromDate: "2025-07-10",
    toDate: "2025-07-15",
  },
  {
    name: "Dr. Sara Ali",
    specialty: "Dermatologist",
    image: "/images/doctors/img2.png",
    details: "Specialist in skin care and dermatological treatments.",
    link: "/courses/sara-ali",
    avatar: "/images/avatar.jpg",
    remotely: false,
    price: 180,
    fromDate: "2025-07-12",
    toDate: "2025-07-18",
  },
  {
    name: "Dr. Omar Youssef",
    specialty: "Pediatrician",
    image: "/images/doctors/img3.png",
    details: "Caring for children and infants with compassion.",
    link: "/courses/omar-youssef",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 150,
    fromDate: "2025-07-14",
    toDate: "2025-07-20",
  },
];

export default function Courses() {
  return (
    <>
      <BreadCramp
        heading={"our courses"}
        paragraph={
          "Fill in your details and let us craft a professional resume just for you"
        }
        image={"course-bg.png"}
        imageClass="bottom-4"
      />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary">
          find your course
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {doctors.map((doctor, idx) => (
            <DoctorCard {...doctor} mode="secondary" key={idx} />

          ))}
        </div>
      </div>
    </>
  );
}
