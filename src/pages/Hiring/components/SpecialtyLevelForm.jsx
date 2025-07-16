import React from "react";
import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FaUserMd, FaStar } from "react-icons/fa";

export default function SpecialtyLevelForm({ form, setForm, specialties, levels }) {
  return (
    <>
      <div className="relative w-full">
        <label className="block text-[16px] font-medium mb-1 text-[#617A78]" htmlFor="specialty-select">
          Specialty
        </label>
        <ShadcnSelect
          name="specialty"
          value={form.specialty}
          onValueChange={(val) => setForm((prev) => ({ ...prev, specialty: val }))}
        >
          <SelectTrigger
            id="specialty-select"
            className="w-full px-6 py-6 text-[#617A78] border border-transparent rounded-full bg-[#F3F7F7] transition-all focus:bg-white focus:border-ring focus:outline-none pl-11"
          >
            <span className="absolute left-3 top-[70%] -translate-y-1/2 pointer-events-none">
              <FaUserMd />
            </span>
            <SelectValue placeholder="Select Specialty">
              {specialties.find((opt) => opt.value === form.specialty)?.label}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {specialties.filter((opt) => opt.value !== "").map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                <span className="flex items-center">{opt.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </ShadcnSelect>
      </div>
      <div className="relative w-full">
        <label className="block text-[16px] font-medium mb-1 text-[#617A78]" htmlFor="level-select">
          Level
        </label>
        <ShadcnSelect
          name="level"
          value={form.level}
          onValueChange={(val) => setForm((prev) => ({ ...prev, level: val }))}
        >
          <SelectTrigger
            id="level-select"
            className="w-full px-6 py-6 text-[#617A78] border border-transparent rounded-full bg-[#F3F7F7] transition-all focus:bg-white focus:border-ring focus:outline-none pl-11"
          >
            <span className="absolute left-3 top-[70%] -translate-y-1/2 pointer-events-none">
              <FaStar />
            </span>
            <SelectValue placeholder="Select Level">
              {levels.find((opt) => opt.value === form.level)?.label}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {levels.filter((opt) => opt.value !== "").map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                <span className="flex items-center">{opt.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </ShadcnSelect>
      </div>
    </>
  );
} 