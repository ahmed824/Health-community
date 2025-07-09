import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function CountrySelect({ value, onChange, error, countries }) {
  return (
    <div className="w-full space-y-1 text-[#617A78] focus-within:text-primary">
      <label
        htmlFor="country"
        className="block text-[16px] font-medium mb-1 transition-colors capitalize text-inherit"
      >
        Country
      </label>
      <div className="relative mb-8">
        <span className="absolute left-3 top-1/2 pl-3 -translate-y-1/2 text-[#617A78] pointer-events-none">
          <MdLocationOn />
        </span>
        <select
          id="country"
          name="country"
          value={value}
          onChange={onChange}
          className="w-full px-6 py-3 text-[#617A78] border border-transparent rounded-full bg-[#F3F7F7] transition-all focus:bg-white focus:border-ring focus:outline-none pl-11"
        >
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
} 