"use client";
import React, { useState, useMemo } from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import DoctorCard from "../../../components/layout/DoctorCard";
import Filter from "../../../components/layout/Filter";
import { useTranslation } from "react-i18next";

const doctors = [
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    details: "Expert in heart diseases and cardiovascular health.",
    link: "courses/ahmed-hassan", // Base path without language
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
    link: "courses/sara-ali",
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
    link: "courses/omar-youssef",
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
    link: "courses/ahmed-hassan",
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
    link: "courses/sara-ali",
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
    link: "courses/omar-youssef",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 150,
    fromDate: "2025-07-14",
    toDate: "2025-07-20",
  },
];

const countries = [
  { value: "", label: "Select Country" },
  { value: "egypt", label: "Egypt" },
  { value: "ksa", label: "Saudi Arabia" },
  { value: "uae", label: "UAE" },
  { value: "usa", label: "USA" },
];

const countryCityMap = {
  egypt: [{ value: "cairo", label: "Cairo" }],
  ksa: [{ value: "riyadh", label: "Riyadh" }],
  uae: [{ value: "dubai", label: "Dubai" }],
  usa: [{ value: "newyork", label: "New York" }],
};

const allCities = [
  { value: "", label: "Select City" },
  { value: "cairo", label: "Cairo" },
  { value: "riyadh", label: "Riyadh" },
  { value: "dubai", label: "Dubai" },
  { value: "newyork", label: "New York" },
];

export default function Courses() {
  const [filter, setFilter] = useState({
    search: "",
    specialty: "",
    license: "",
    country: "",
    city: "",
    mode: "",
  });
  const [startDate, setStartDate] = useState("");
  const { i18n } = useTranslation();

  // Extract unique specialties from doctors
  const specialties = useMemo(() => {
    const set = new Set();
    doctors.forEach((d) => set.add(d.specialty));
    return [
      { value: "", label: "Medical Specialty" },
      ...Array.from(set).map((s) => ({ value: s, label: s })),
    ];
  }, []);

  // Filter cities based on selected country
  const filteredCities = useMemo(() => {
    if (!filter.country) return allCities;
    return [allCities[0], ...(countryCityMap[filter.country] || [])];
  }, [filter.country]);

  // Map doctors with localized links
  const localizedDoctors = useMemo(() => {
    return doctors.map((doctor) => ({
      ...doctor,
      link: `/${i18n.language}/${doctor.link}`,
    }));
  });

  // Filtering logic
  const filteredDoctors = useMemo(() => {
    return localizedDoctors.filter((doctor) => {
      const matchesSearch =
        !filter.search ||
        doctor.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(filter.search.toLowerCase()) ||
        doctor.details.toLowerCase().includes(filter.search.toLowerCase());
      const matchesSpecialty =
        !filter.specialty || doctor.specialty === filter.specialty;
      const matchesMode =
        !filter.mode ||
        (filter.mode === "remotely" && doctor.remotely) ||
        (filter.mode === "in-person" && !doctor.remotely);
      return matchesSearch && matchesSpecialty && matchesMode;
    });
  }, [filter, localizedDoctors]);

  // Dummy license options
  const licenseOptions = [
    { value: "", label: "License" },
    { value: "general", label: "General" },
    { value: "specialist", label: "Specialist" },
    { value: "consultant", label: "Consultant" },
  ];

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
      <div className="container mx-auto py-8 px-4 sm:px-6 md:px-8 lg:px-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-primary">
          Find Your Course
        </h1>
        <Filter
          filter={filter}
          onChange={setFilter}
          specialties={specialties}
          countries={countries}
          cities={filteredCities}
          onSearch={() => {}}
          variant="courses"
          licenseOptions={licenseOptions}
          startDate={startDate}
          onStartDateChange={setStartDate}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredDoctors.length === 0 ? (
            <div className="col-span-full text-gray-500 text-lg py-12 text-center">
              No courses found.
            </div>
          ) : (
            filteredDoctors.map((doctor, idx) => (
              <DoctorCard {...doctor} mode="secondary" key={idx} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
