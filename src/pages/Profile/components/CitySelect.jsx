import React from "react";
import { FaCity } from "react-icons/fa";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function CitySelect({ value, onChange, error, cities }) {
  return (
    <div className="w-full space-y-1 group focus-within:text-primary">
      <label
        htmlFor="city"
        className="block text-[16px] font-medium mb-1 transition-colors capitalize text-[#617a78] group-focus-within:text-primary"
      >
        City
      </label>
      <div className="relative mb-8">
        <span className="absolute left-3 top-1/2 pl-3 -translate-y-1/2 text-[#617A78] pointer-events-none">
          <FaCity />
        </span>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger
            id="city"
            name="city"
            className="w-full px-6 py-6 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] transition-all focus:bg-white focus:border-ring focus:outline-none pl-11"
          >
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent className="w-full">
            {cities
              .filter((city) => city.value !== "")
              .map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
} 