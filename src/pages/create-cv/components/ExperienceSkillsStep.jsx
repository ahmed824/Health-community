"use client"
import React from "react";
import { FaBriefcase, FaPlus, FaMinus, FaLaptopCode, FaUserTie } from "react-icons/fa";
import Input from "../../../../components/ui/Input";
 
// 🧠 Dynamically loaded, client-side only
const CountrySelect = dynamic(() => import("../../Profile/components/CountrySelect"), { ssr: false });
const CitySelect = dynamic(() => import("../../Profile/components/CitySelect"), { ssr: false });

import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RiBuilding2Fill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import dynamic from "next/dynamic";

const years = Array.from({ length: 50 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: String(year), label: String(year) };
});
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

const ExperienceSkillsStep = ({
  experience,
  addExperience,
  updateExperience,
  removeExperience,
  skills,
  addSkill,
  updateSkill,
  removeSkill,
  only,
  countries = [],
  cities = [],
  filteredCities = [],
  countryCityMap = {},
}) => (
  <div>
    {/* Experience Section */}
    {only !== "skills" && (
      <div className="mb-8 pb-8 border-b border-[#B7D3D1] ">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
            <FaBriefcase className="w-5 h-5 text-primary" />
            Work Experience
          </h3>
          <button
            onClick={addExperience}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#076A60] text-white hover:bg-[#05543e] transition-all duration-200"
          >
            <FaPlus className="w-4 h-4" />
            Add Experience
          </button>
        </div>
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50  transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 space-y-3">
                <Input
                  type="text"
                  label="Job Title"
                  placeholder="Job Title"
                  value={exp.jobTitle}
                  onChange={e => updateExperience(exp.id, "jobTitle", e.target.value)}
                  name={`jobTitle-${exp.id}`}
                  icon={<FaUserTie className="w-4 h-4 text-[#617A78]" />}
                />
                <Input
                  type="text"
                  label="Employer"
                  placeholder="Employer (Company Name)"
                  value={exp.company}
                  onChange={e => updateExperience(exp.id, "company", e.target.value)}
                  name={`company-${exp.id}`}
                  icon={<RiBuilding2Fill className="w-4 h-4 text-[#617A78]" />}
                />
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <CountrySelect
                      value={exp.country || ""}
                      onChange={val => updateExperience(exp.id, "country", val)}
                      countries={countries}
                    />
                  </div>
                  <div className="w-full">
                    <CitySelect
                      value={exp.city || ""}
                      onChange={val => updateExperience(exp.id, "city", val)}
                      cities={exp.country ? [cities[0], ...(countryCityMap[exp.country] || [])] : cities}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-[16px] font-medium mb-1 transition-colors capitalize text-[#617a78]">Start Date</label>
                    <div className="flex gap-2">
                      <div className="relative w-full">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                          <FaCalendarAlt />
                        </span>
                        <ShadcnSelect
                          value={exp.startMonth || ""}
                          onValueChange={val => updateExperience(exp.id, "startMonth", val)}
                        >
                          <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none pl-11">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            {months.map(month => (
                              <SelectItem key={month.value} value={month.value}>{month.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </ShadcnSelect>
                      </div>
                      <div className="relative w-full">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                          <FaCalendarAlt />
                        </span>
                        <ShadcnSelect
                          value={exp.startYear || ""}
                          onValueChange={val => updateExperience(exp.id, "startYear", val)}
                        >
                          <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none pl-11">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            {years.map(year => (
                              <SelectItem key={year.value} value={year.value}>{year.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </ShadcnSelect>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block text-[16px] font-medium mb-1 transition-colors capitalize text-[#617a78]">End Date</label>
                    <div className="flex gap-2">
                      <div className="relative w-full">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                          <FaCalendarAlt />
                        </span>
                        <ShadcnSelect
                          value={exp.endMonth || ""}
                          onValueChange={val => updateExperience(exp.id, "endMonth", val)}
                        >
                          <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none pl-11">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            {months.map(month => (
                              <SelectItem key={month.value} value={month.value}>{month.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </ShadcnSelect>
                      </div>
                      <div className="relative w-full">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                          <FaCalendarAlt />
                        </span>
                        <ShadcnSelect
                          value={exp.endYear || ""}
                          onValueChange={val => updateExperience(exp.id, "endYear", val)}
                        >
                          <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none pl-11">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            {years.map(year => (
                              <SelectItem key={year.value} value={year.value}>{year.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </ShadcnSelect>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor={`description-${exp.id}`} className="block text-[16px] font-medium mb-1 transition-colors capitalize text-[#617a78]">Description</label>
                  <div className="relative">
                    <span className="absolute left-3 top-6 -translate-y-1/2 text-sm text-[#617A78] pointer-events-none">
                      <FaRegEnvelope />
                    </span>
                    <textarea
                      id={`description-${exp.id}`}
                      placeholder="Job Description & Achievements"
                      value={exp.description}
                      onChange={e => updateExperience(exp.id, "description", e.target.value)}
                      rows={3}
                      className="w-full px-6 py-3 border border-transparent placeholder:text-[#617A78] placeholder:text-[14px] rounded-lg bg-[#F3F7F7] text-foreground transition-all focus:bg-white focus:border-ring focus:outline-none resize-none pl-9"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeExperience(exp.id)}
                className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <FaMinus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
    {/* Skills Section */}
    {only !== "experience" && (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
            <FaLaptopCode className="w-5 h-5 text-primary" />
            Skills
          </h3>
          <button
            onClick={addSkill}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#076A60] text-white hover:bg-[#05543e] transition-all duration-200"
          >
            <FaPlus className="w-4 h-4" />
            Add Skill
          </button>
        </div>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50  transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 space-y-3">
                <Input
                  type="text"
                  label="Skill Name"
                  placeholder="Skill Name (e.g., JavaScript, Python)"
                  value={skill.name}
                  onChange={e => updateSkill(skill.id, "name", e.target.value)}
                  name={`skillName-${skill.id}`}
                />
                <ShadcnSelect
                  value={skill.level}
                  onValueChange={val => updateSkill(skill.id, "level", val)}
                >
                  <SelectTrigger className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] focus:bg-white focus:border-ring focus:outline-none">
                    <SelectValue placeholder="Select Level" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </ShadcnSelect>
              </div>
              <button
                onClick={() => removeSkill(skill.id)}
                className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <FaMinus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default ExperienceSkillsStep; 