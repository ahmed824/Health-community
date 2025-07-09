"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const doctors = [
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    details: "Expert in heart diseases and cardiovascular health.",
    link: "/course/ahmed-hassan",
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
    link: "/course/sara-ali",
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
    link: "/course/omar-youssef",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 150,
    fromDate: "2025-07-14",
    toDate: "2025-07-20",
  },
];

export default function Course() {
  const params = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const foundDoctor = doctors.find((d) => d.link.split("/").pop() === params.slug);
    setDoctor(foundDoctor || null);
  }, [params.slug]);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-primary">{doctor.name}</h1>
      <p>Specialty: {doctor.specialty}</p>
      <p>Details: {doctor.details}</p>
      <p>Price: ${doctor.price}</p>
      <p>Remotely: {doctor.remotely ? "Yes" : "No"}</p>
      <p>From: {doctor.fromDate}</p>
      <p>To: {doctor.toDate}</p>
      {/* Add more details or a DoctorCard component here if needed */}
    </div>
  );
}