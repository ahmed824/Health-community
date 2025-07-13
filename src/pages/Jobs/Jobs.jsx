"use client"
import React, { useState, useMemo } from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import JobCard from "../../../components/layout/JobCard";
import Button from "../../../components/ui/Button";
import Link from "next/link";
import Filter from "../../../components/layout/Filter";

const doctors = [
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    details: "Expert in heart diseases and cardiovascular health.",
    link: "/jobs/ahmed-hassan",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 200,
    fromDate: "2025-07-10",
    toDate: "2025-07-15",
    location: "Egypt, Cairo",
  },
  {
    name: "Dr. Sara Ali",
    specialty: "Dermatologist",
    image: "/images/doctors/img2.png",
    details: "Specialist in skin care and dermatological treatments.",
    link: "/jobs/sara-ali",
    avatar: "/images/avatar.jpg",
    remotely: false,
    price: 180,
    fromDate: "2025-07-12",
    toDate: "2025-07-18",
    location: "KSA, Riyadh",
  },
  {
    name: "Dr. Omar Youssef",
    specialty: "Pediatrician",
    image: "/images/doctors/img3.png",
    details: "Caring for children and infants with compassion.",
    link: "/jobs/omar-youssef",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 150,
    fromDate: "2025-07-14",
    toDate: "2025-07-20",
    location: "UAE, Dubai",
  },
  {
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    image: "/images/doctors/img1.png",
    details: "Expert in heart diseases and cardiovascular health.",
    link: "/jobs/ahmed-hassan",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 200,
    fromDate: "2025-07-10",
    toDate: "2025-07-15",
    location: "USA, New York",
  },
  {
    name: "Dr. Sara Ali",
    specialty: "Dermatologist",
    image: "/images/doctors/img2.png",
    details: "Specialist in skin care and dermatological treatments.",
    link: "/jobs/sara-ali",
    avatar: "/images/avatar.jpg",
    remotely: false,
    price: 180,
    fromDate: "2025-07-12",
    toDate: "2025-07-18",
    location: "Egypt, Cairo",
  },
  {
    name: "Dr. Omar Youssef",
    specialty: "Pediatrician",
    image: "/images/doctors/img3.png",
    details: "Caring for children and infants with compassion.",
    link: "/jobs/omar-youssef",
    avatar: "/images/avatar.jpg",
    remotely: true,
    price: 150,
    fromDate: "2025-07-14",
    toDate: "2025-07-20",
    location: "KSA, Riyadh",
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
  egypt: [
    { value: "cairo", label: "Cairo" },
  ],
  ksa: [
    { value: "riyadh", label: "Riyadh" },
  ],
  uae: [
    { value: "dubai", label: "Dubai" },
  ],
  usa: [
    { value: "newyork", label: "New York" },
  ],
};

const allCities = [
  { value: "", label: "Select City" },
  { value: "cairo", label: "Cairo" },
  { value: "riyadh", label: "Riyadh" },
  { value: "dubai", label: "Dubai" },
  { value: "newyork", label: "New York" },
];

export default function Jobs() {
  const [filter, setFilter] = useState({
    search: "",
    specialty: "",
    country: "",
    city: "",
    mode: "",
  });

  // Extract unique specialties from doctors
  const specialties = useMemo(() => {
    const set = new Set();
    doctors.forEach((d) => set.add(d.specialty));
    return [{ value: "", label: "Medical Specialty" }, ...Array.from(set).map(s => ({ value: s, label: s }))];
  }, []);

  // Filter cities based on selected country
  const filteredCities = useMemo(() => {
    if (!filter.country) return allCities;
    return [allCities[0], ...(countryCityMap[filter.country] || [])];
  }, [filter.country]);

  // Filtering logic
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        !filter.search ||
        doctor.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(filter.search.toLowerCase()) ||
        doctor.details.toLowerCase().includes(filter.search.toLowerCase());
      const matchesSpecialty = !filter.specialty || doctor.specialty === filter.specialty;
      // For demo, country/city are not in doctor data, so skip those filters
      const matchesMode =
        !filter.mode ||
        (filter.mode === "remotely" && doctor.remotely) ||
        (filter.mode === "in-person" && !doctor.remotely);
      return matchesSearch && matchesSpecialty && matchesMode;
    });
  }, [filter]);

  // Handle filter change, reset city if country changes
  const handleFilterChange = (newFilter) => {
    if (newFilter.country !== filter.country) {
      setFilter({ ...newFilter, city: "" });
    } else {
      setFilter(newFilter);
    }
  };

  return (
    <>
      <BreadCramp
        heading={"our Jobs"}
        paragraph={
          "Fill in your details and let us craft a professional resume just for you"
        }
        image={"Job.png"}
        imageClass="bottom-3   w-[300px]   "
      />
      <div className="container mx-auto py-8 px-16">
        <h1 className="text-3xl font-bold mb-8 text-primary">
          find your course
        </h1>
        <Filter
          filter={filter}
          onChange={handleFilterChange}
          specialties={specialties}
          countries={countries}
          cities={filteredCities}
          onSearch={() => {}}
          variant="jobs"
        />
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredDoctors.length === 0 ? (
            <div className="text-gray-500 text-lg py-12">No jobs found.</div>
          ) : (
            filteredDoctors.map((doctor, idx) => (
              <JobCard
                key={idx}
                image={doctor.image}
                specialty={doctor.specialty}
                title={doctor.name}
                description={doctor.details}
                type={doctor.remotely ? "Remote" : "Onsite"}
                posted={`${doctor.fromDate} - ${doctor.toDate}`}
                location={doctor.location}
                link={doctor.link}
                action={
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-[#076A60] text-white w-full mt-auto transition hover:shadow-lg"
                  >
                    <Link
                      className="w-full h-full flex items-center justify-center "
                      href={doctor.link}
                    >
                      Apply Now
                    </Link>
                  </Button>
                }
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
