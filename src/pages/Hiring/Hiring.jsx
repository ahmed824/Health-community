"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import Button from "../../../components/ui/Button";
import PersonalInfoForm from "./components/PersonalInfoForm";
import LocationForm from "./components/LocationForm";
import SpecialtyLevelForm from "./components/SpecialtyLevelForm";
import CVUpload from "./components/CVUpload";
import { doctors } from "../../lib/jobsData";
import PageLoader from "../../../components/ui/PageLoader";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";

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

const levels = [
  { value: "", label: "Select Level" },
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid" },
  { value: "senior", label: "Senior" },
  { value: "consultant", label: "Consultant" },
];

const defaultForm = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  country: "",
  city: "",
  location: "",
  nationality: "",
  specialty: "",
  level: "",
  cv: null,
};

export default function Hiring() {
  const [form, setForm] = useState(defaultForm);
  const [cvFileName, setCvFileName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const fileInputRef = useRef();

  // Load form data from localStorage on mount (client only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hiringForm");
      if (saved) {
        const parsed = JSON.parse(saved);
        setForm({ ...defaultForm, ...parsed });
        if (parsed.cvFileName) setCvFileName(parsed.cvFileName);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save form data to localStorage on change
  useEffect(() => {
    if (typeof window !== "undefined" && isLoaded) {
      const { cv, ...rest } = form;
      localStorage.setItem(
        "hiringForm",
        JSON.stringify({ ...rest, cvFileName })
      );
    }
  }, [form, cvFileName, isLoaded]);

  // Extract unique specialties from doctors
  const specialties = useMemo(() => {
    const set = new Set();
    doctors.forEach((d) => set.add(d.specialty));
    return [
      { value: "", label: "Select Specialty" },
      ...Array.from(set).map((s) => ({ value: s, label: s })),
    ];
  }, []);

  // Filter cities based on selected country
  const filteredCities = useMemo(() => {
    if (!form.country) return allCities;
    return [allCities[0], ...(countryCityMap[form.country] || [])];
  }, [form.country]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setForm((prev) => ({ ...prev, cv: files[0] }));
      setCvFileName(files[0]?.name || "");
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRemoveCV = (e) => {
    e.stopPropagation();
    setForm((prev) => ({ ...prev, cv: null }));
    setCvFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleCancel = () => {
    localStorage.removeItem("hiringForm");
    setForm(defaultForm);
    setCvFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Optionally, don't render the form until loaded to avoid flicker
  if (!isLoaded) return <PageLoader size="large" className="min-h-[60vh]" />;

  return (
    <>
      <BreadCramp
        heading={"Hiring Opportunities"}
        paragraph={
          "Find the best candidates for your healthcare organization. Use the form below to submit your hiring request."
        }
        image={"Job.png"}
        imageClass="bottom-3 w-[300px]"
      />
      <div className="container mx-auto py-8 px-4 md:px-16">
        <div className=" mx-auto  mt-8 mb-4">
          <h2 className="text-2xl font-bold text-primary mb-2">
            Fill in these information To see available positions
          </h2>
          <div className="flex items-center text-info gap-2 text-primary text-xs md:text-base whitespace-nowrap font-bold py-2 mb-2">
            <BsInfoCircleFill className="text-primary" />
            <span>Your request is sent to the HR of the organization</span>
          </div>
        </div>
        <form className="bg-white" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PersonalInfoForm form={form} handleChange={handleChange} />
            <LocationForm
              form={form}
              setForm={setForm}
              countries={countries}
              filteredCities={filteredCities}
            />
            <SpecialtyLevelForm
              form={form}
              setForm={setForm}
              specialties={specialties}
              levels={levels}
            />
            <CVUpload
              cvFileName={cvFileName}
              fileInputRef={fileInputRef}
              handleChange={handleChange}
              handleRemoveCV={handleRemoveCV}
            />
          </div>
          <div className="flex flex-row-reverse justify-start mt-6 gap-4">
            <Button
              variant="outline"
              type="submit"
              className="px-8 py-3 w-fit rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
            >
              apply now
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={handleCancel}
              className="px-8 py-3 w-fit rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
