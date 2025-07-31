"use client"
import React from "react";
import {
  FaGraduationCap,
  FaPlus,
  FaMinus,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";
import { Input } from "../../../../components/ui";
const CountrySelect = dynamic(
  () => import("../../Profile/components/CountrySelect"),
  { ssr: false }
);
const CitySelect = dynamic(
  () => import("../../Profile/components/CitySelect"),
  { ssr: false }
);

import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FaRegEnvelope } from "react-icons/fa6";
import dynamic from "next/dynamic";

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];
const years = Array.from({ length: 50 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: String(year), label: String(year) };
});

const EducationStep = ({
  education,
  addEducation,
  updateEducation,
  removeEducation,
  countries,
  cities,
}) => (
  <div>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
        <FaGraduationCap className="w-5 h-5 text-primary" />
        Education
      </h3>
      <button
        type="button"
        onClick={addEducation}
        className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#076A60] text-white hover:bg-[#05543e] transition-all duration-200"
      >
        <FaPlus className="w-4 h-4" />
        Add Education
      </button>
    </div>
    {education.map((edu) => (
      <div key={edu.id} className="border border-gray-200 rounded-lg p-4 mb-4 ">
        <div className="flex justify-between items-start mb-3 gap-4 flex-wrap">
          <div className="flex-1 space-y-3">
            <Input
              type="text"
              placeholder="Degree (e.g., Bachelor of Science)"
              value={edu.degree}
              onChange={(e) =>
                updateEducation(edu.id, "degree", e.target.value)
              }
              name={`degree-${edu.id}`}
              label="Degree"
              icon={<FaGraduationCap className="w-4 h-4 text-[#617A78]" />}
            />
            <Input
              type="text"
              placeholder="University Name"
              value={edu.university}
              onChange={(e) =>
                updateEducation(edu.id, "university", e.target.value)
              }
              name={`university-${edu.id}`}
              label="University"
              icon={<FaUniversity className="w-4 h-4 text-[#617A78]" />}
            />
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-1/2">
                <CountrySelect
                  value={edu.country || ""}
                  onChange={(val) => updateEducation(edu.id, "country", val)}
                  countries={countries}
                />
              </div>
              <div className="w-full md:w-1/2">
                <CitySelect
                  value={edu.city || ""}
                  onChange={(val) => updateEducation(edu.id, "city", val)}
                  cities={cities}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-1/2">
                <label className="block text-[16px] font-medium mb-1 transition-colors capitalize text-[#617a78]">
                  Start Date
                </label>
                <div className="flex gap-2">
                  <div className="relative w-full">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                      <FaCalendarAlt />
                    </span>
                    <ShadcnSelect
                      value={edu.startMonth || ""}
                      onValueChange={(val) =>
                        updateEducation(edu.id, "startMonth", val)
                      }
                    >
                      <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none pl-11">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {months.map((month) => (
                          <SelectItem key={month.value} value={month.value}>
                            {month.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </ShadcnSelect>
                  </div>
                  <div className="relative w-full">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                      <FaCalendarAlt />
                    </span>
                    <ShadcnSelect
                      value={edu.startYear || ""}
                      onValueChange={(val) =>
                        updateEducation(edu.id, "startYear", val)
                      }
                    >
                      <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none pl-11">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {years.map((year) => (
                          <SelectItem key={year.value} value={year.value}>
                            {year.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </ShadcnSelect>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-[16px] font-medium mb-1 transition-colors capitalize text-[#617a78]">
                  End Date
                </label>
                <div className="flex gap-2">
                  <div className="relative w-full">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                      <FaCalendarAlt />
                    </span>
                    <ShadcnSelect
                      value={edu.endMonth || ""}
                      onValueChange={(val) =>
                        updateEducation(edu.id, "endMonth", val)
                      }
                    >
                      <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none pl-11">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {months.map((month) => (
                          <SelectItem key={month.value} value={month.value}>
                            {month.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </ShadcnSelect>
                  </div>
                  <div className="relative w-full">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                      <FaCalendarAlt />
                    </span>
                    <ShadcnSelect
                      value={edu.endYear || ""}
                      onValueChange={(val) =>
                        updateEducation(edu.id, "endYear", val)
                      }
                    >
                      <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none pl-11">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {years.map((year) => (
                          <SelectItem key={year.value} value={year.value}>
                            {year.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </ShadcnSelect>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor={`description-${edu.id}`}
                className="block text-[16px] font-medium mb-1 transition-colors capitalize text-[#617a78]"
              >
                Description
              </label>
              <div className="relative">
                <span className="absolute left-3 top-6 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                  {/* You may want to use a more relevant icon here, e.g., FaRegEdit or FaRegFileAlt */}
                  <FaRegEnvelope />
                </span>
                <textarea
                  id={`description-${edu.id}`}
                  placeholder="add a description of your education entry"
                  value={edu.description}
                  onChange={(e) =>
                    updateEducation(edu.id, "description", e.target.value)
                  }
                  rows={3}
                  className="w-full px-6 py-3 border border-transparent placeholder:text-[#617A78] placeholder:text-[14px] rounded-lg bg-[#F3F7F7] text-foreground transition-all focus:bg-white focus:border-ring focus:outline-none resize-none pl-9"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => removeEducation(edu.id)}
            className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
          >
            <FaMinus className="w-4 h-4" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default EducationStep;
