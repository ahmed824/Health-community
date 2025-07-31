import React from "react";
import Input from "../ui/Input";
import { FiSearch, FiCalendar, FiGlobe, FiMapPin, FiBriefcase } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";
import { FaIdBadge } from "react-icons/fa";
import CountrySelect from "../../src/pages/Profile/components/CountrySelect";
import CitySelect from "../../src/pages/Profile/components/CitySelect";
import { Select } from "@/components/ui/select";  

const modeOptions = [
  { value: "", label: "Mode" },
  { value: "remotely", label: "Remotely" },
  { value: "in-person", label: "In Person" },
];

export default function Filter({
  filter,
  onChange,
  onSearch,
  specialties = [],
  countries = [],
  cities = [],
  loading = false,
  variant = "jobs", // 'jobs' or 'courses'
  licenseOptions = [], // for courses
  startDate = "", // for courses
  onStartDateChange, // for courses
}) {
  return (
    <form
      className="flex flex-col md:flex-col flex-wrap md:flex-nowrap gap-4 items-end   md:p-6 mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch && onSearch();
      }}
    >
      <div className="w-full  ">
        <Input
          name="search"
          placeholder={
            variant === "jobs" ? "Find your job" : "Find your course"
          }
          value={filter.search || ""}
          onChange={(e) => onChange({ ...filter, search: e.target.value })}
          icon={<FiSearch />}
        />
      </div>
      <div className="flex w-full items-center gap-8 justify-center">
        <div className="w-full  ">
          <Select
            value={filter.specialty || ""}
            onValueChange={(val) => onChange({ ...filter, specialty: val })}
            options={specialties}
            placeholder="Medical Specialty"
            name="specialty"
            icon={<MdMedicalServices />}
          />
        </div>
        {variant === "courses" && (
          <>
            <div className="w-full  ">
              <Select
                value={filter.license || ""}
                onValueChange={(val) => onChange({ ...filter, license: val })}
                options={licenseOptions}
                placeholder="License"
                name="license"
                icon={<FaIdBadge />}
              />
            </div>
            <div className="w-full  ">
              <Input
                type="date"
                name="startDate"
                value={startDate}
                onChange={(e) =>
                  onStartDateChange && onStartDateChange(e.target.value)
                }
                placeholder="Start Date"
                icon={<FiCalendar />}
                className="text-[#617A78]"
              />
            </div>
          </>
        )}
        {variant === "jobs" && (
          <>
            <div className="w-full  ">
              <CountrySelect
                value={filter.country || ""}
                onChange={(val) =>
                  onChange({ ...filter, country: val })
                }
                countries={countries}
                icon={<FiGlobe />}
              />
            </div>
            <div className="w-full  ">
              <CitySelect
                value={filter.city || ""}
                onChange={(val) => onChange({ ...filter, city: val })}
                cities={cities}
                icon={<FiMapPin />}
              />
            </div>
          </>
        )}
        <div className="w-full  ">
          <Select
            value={filter.mode || ""}
            onValueChange={(val) => onChange({ ...filter, mode: val })}
            options={modeOptions}
            placeholder="Mode"
            name="mode"
            icon={<FiBriefcase />}
          />
        </div>
        <button
          type="submit"
          className="flex items-center cursor-pointer justify-center px-4 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition disabled:opacity-60 min-w-12 min-h-12   mt-0"
          disabled={loading}
          aria-label="Search"
         >
          <FiSearch className="text-xl" />
        </button>
      </div>
    </form>
  );
}
