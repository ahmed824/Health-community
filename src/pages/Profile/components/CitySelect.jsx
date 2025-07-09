import React from "react";
import { FaCity } from "react-icons/fa";

export default function CitySelect({ value, onChange, error, cities }) {
  return (
    <div className="w-full space-y-1 text-[#617A78] focus-within:text-primary">
      <label
        htmlFor="city"
        className="block text-[16px] font-medium mb-1 transition-colors capitalize text-inherit"
      >
        City
      </label>
      <div className="relative mb-8">
        <span className="absolute left-3 top-1/2 pl-3 -translate-y-1/2 text-[#617A78] pointer-events-none">
          <FaCity />
        </span>
        <select
          id="city"
          name="city"
          value={value}
          onChange={onChange}
          className="w-full px-6 py-3 border border-transparent rounded-full bg-[#F3F7F7] text-[#617A78] transition-all focus:bg-white focus:border-ring focus:outline-none pl-11"
        >
          {cities.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
} 