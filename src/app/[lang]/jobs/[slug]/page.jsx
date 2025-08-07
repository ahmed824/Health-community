"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import JobPage from "@/pages/Jobs/JobPage";

// Function to decode job ID using Base64
const decodeJobId = (encodedId) => {
  try {
    return atob(decodeURIComponent(encodedId));
  } catch (error) {
    console.error("Error decoding job ID:", error);
    return null;
  }
};

const doctors = [
  {
    id: "1",
    name: "Dr. Ahmed Hassan",
    organization: "HeartCare Medical Center",
    jobTitle: "Cardiologist Position",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    details: "Expert in heart diseases and cardiovascular health.",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 200,
    fromDate: "2025-07-10",
    toDate: "2025-07-15",
    location: "Egypt, Cairo",
    level: "Senior",
  },
  {
    id: "2",
    name: "Dr. Fatima Al-Sayed",
    organization: "SkinHealth Clinic",
    jobTitle: "Dermatologist Position",
    specialty: "Dermatologist",
    image: "/images/doctors/img2.png",
    details: "Specialist in skin care and dermatological treatments.",
    avatar: "/images/avatar.jpg",
    remotely: false,
    price: 180,
    fromDate: "2025-07-12",
    toDate: "2025-07-18",
    location: "KSA, Riyadh",
    level: "Junior",
  },
  {
    id: "3",
    name: "Dr. Omar Khaled",
    organization: "BrightFuture Pediatrics",
    jobTitle: "Pediatrician Position",
    specialty: "Pediatrician",
    image: "/images/doctors/img3.png",
    details: "Caring for children and infants with compassion.",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 150,
    fromDate: "2025-07-14",
    toDate: "2025-07-20",
    location: "UAE, Dubai",
    level: "Mid",
  },
  {
    id: "4",
    name: "Dr. Sara Mahmoud",
    organization: "CardioPlus Hospital",
    jobTitle: "Cardiologist Position",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    details: "Expert in heart diseases and cardiovascular health.",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 200,
    fromDate: "2025-07-10",
    toDate: "2025-07-15",
    location: "USA, New York",
    level: "Senior",
  },
  {
    id: "5",
    name: "Dr. Youssef Ibrahim",
    organization: "DermaCare Institute",
    jobTitle: "Dermatologist Position",
    specialty: "Dermatologist",
    image: "/images/doctors/img2.png",
    details: "Specialist in skin care and dermatological treatments.",
    avatar: "/images/avatar.jpg",
    remotely: false,
    price: 180,
    fromDate: "2025-07-12",
    toDate: "2025-07-18",
    location: "Egypt, Cairo",
    level: "Junior",
  },
  {
    id: "6",
    name: "Dr. Layla Nour",
    organization: "KidsWell Medical Group",
    jobTitle: "Pediatrician Position",
    specialty: "Pediatrician",
    image: "/images/doctors/img3.png",
    details: "Caring for children and infants with compassion.",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 150,
    fromDate: "2025-07-12",
    toDate: "2025-07-20",
    location: "KSA, Riyadh",
    level: "Mid",
  },
];

export default function JobPageContainer() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { i18n } = useTranslation();
  const [doctor, setDoctor] = useState(null);
  const [otherJobs, setOtherJobs] = useState([]);

  useEffect(() => {
    // First, try to find by encoded ID from query parameter
    const encodedId = searchParams.get("id");
    let foundDoctor = null;

    if (encodedId) {
      const decodedId = decodeJobId(encodedId);
      foundDoctor = doctors.find((d) => d.id === decodedId);
    }

    // If no doctor found by ID, try matching by specialty from slug
    if (!foundDoctor && params.slug) {
      foundDoctor = doctors.find(
        (d) => d.specialty.toLowerCase() === params.slug.toLowerCase()
      );
    }

    // Add localized link to the found doctor
    if (foundDoctor) {
      setDoctor({
        ...foundDoctor,
        link: `/${i18n.language}/jobs/${foundDoctor.specialty}`,
      });
    } else {
      setDoctor(null);
    }

    // Set other jobs, excluding the found doctor
    setOtherJobs(
      doctors
        .filter((d) => foundDoctor && d.id !== foundDoctor.id)
        .map((d) => ({
          ...d,
          link: `/${i18n.language}/jobs/${d.specialty}`,
        }))
        .slice(0, 10)
    );
  }, [params.slug, searchParams, i18n.language]);

  return <JobPage doctor={doctor} otherJobs={otherJobs} />;
}
