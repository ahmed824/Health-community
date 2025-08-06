"use client";
import React, { useState } from "react";
import Input from "../ui/Input";
import {
  FiSearch,
  FiCalendar,
  FiGlobe,
  FiMapPin,
  FiBriefcase,
  FiFilter,
  FiX,
} from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";
import { FaIdBadge } from "react-icons/fa";
import CountrySelect from "@/pages/Profile/components/CountrySelect";
import CitySelect from "@/pages/Profile/components/CitySelect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const modeOptions = [
  { value: "none", label: "Mode" },
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
  variant = "jobs",
  licenseOptions = [],
  startDate = "",
  onStartDateChange,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter out options with empty values and ensure placeholder is handled
  const validSpecialties = specialties.filter((option) => option.value !== "");
  const validLicenseOptions = licenseOptions.filter(
    (option) => option.value !== ""
  );
  const validModeOptions = modeOptions.filter((option) => option.value !== "");

  // Count active filters
  const activeFiltersCount = Object.values(filter).filter(
    (value) => value && value !== "" && value !== "none"
  ).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch();
    // Close filter on mobile after search
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };

  const clearFilters = () => {
    onChange({
      search: "",
      specialty: "",
      country: "",
      city: "",
      license: "",
      mode: "",
    });
    if (onStartDateChange) {
      onStartDateChange("");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-8">
      {/* Main Search Bar - Always visible */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:p-6">
        <div className="flex gap-2 w-full">
          <div className="flex-1">
            <Input
              name="search"
              placeholder={
                variant === "jobs" ? "Find your job" : "Find your course"
              }
              value={filter.search || ""}
              onChange={(e) => onChange({ ...filter, search: e.target.value })}
              icon={<FiSearch />}
              className="w-full"
            />
          </div>

          {/* Filter Toggle Button - Mobile */}
          <div className="md:hidden flex gap-2">
            <button
              type="button"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="relative flex items-center justify-center p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition min-w-[48px] h-12"
              aria-label="Toggle filters"
            >
              {isFilterOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiFilter className="text-xl" />
              )}
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <button
              type="submit"
              className="flex items-center justify-center p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition disabled:opacity-60 min-w-[48px] h-12"
              disabled={loading}
              aria-label="Search"
            >
              <FiSearch className="text-xl" />
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div
          className={`
          md:flex md:w-full md:items-center md:justify-between md:flex-wrap md:gap-4
          ${isFilterOpen ? "block" : "hidden md:flex"}
        `}
        >
          {/* Filter Header - Mobile Only */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FiFilter />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-primary text-white text-sm rounded-full px-2 py-1">
                  {activeFiltersCount}
                </span>
              )}
            </h3>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm text-primary hover:text-primary/80 transition"
            >
              Clear all
            </button>
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-4 w-full md:justify-between">
            {/* Medical Specialty */}
            <div className="md:w-[20%] md:min-w-[180px]">
              <Select
                value={filter.specialty || ""}
                onValueChange={(val) => onChange({ ...filter, specialty: val })}
                name="specialty"
              >
                <SelectTrigger
                  icon={<MdMedicalServices />}
                  className="w-full text-[#617A78] bg-[#f3f7f7] py-6 rounded-full focus:border-ring focus:bg-white focus:ring-primary/50 data-[state=open]:border-ring data-[state=open]:bg-white data-[state=open]:ring-primary/50"
                >
                  <SelectValue placeholder="Medical Specialty" />
                </SelectTrigger>
                <SelectContent>
                  {validSpecialties.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Jobs variant filters */}
            {variant === "jobs" && (
              <>
                <div className="md:w-[20%] md:min-w-[180px]">
                  <CountrySelect
                    value={filter.country || ""}
                    onChange={(val) => onChange({ ...filter, country: val })}
                    countries={countries}
                    icon={<FiGlobe />}
                    label={false}
                    className="w-full text-[#617A78] bg-[#f3f7f7] py-6 rounded-full focus:border-ring focus:bg-white focus:ring-primary/50 data-[state=open]:border-ring data-[state=open]:bg-white data-[state=open]:ring-primary/50"
                  />
                </div>
                <div className="md:w-[20%] md:min-w-[180px]">
                  <CitySelect
                    value={filter.city || ""}
                    onChange={(val) => onChange({ ...filter, city: val })}
                    cities={cities}
                    icon={<FiMapPin />}
                    label={false}
                    className="w-full text-[#617A78] bg-[#f3f7f7] py-6 rounded-full focus:border-ring focus:bg-white focus:ring-primary/50 data-[state=open]:border-ring data-[state=open]:bg-white data-[state=open]:ring-primary/50"
                  />
                </div>
              </>
            )}

            {/* Courses variant filters */}
            {variant === "courses" && (
              <>
                <div className="md:w-[20%] md:min-w-[180px]">
                  <Select
                    value={filter.license || ""}
                    onValueChange={(val) =>
                      onChange({ ...filter, license: val })
                    }
                    name="license"
                  >
                    <SelectTrigger
                      icon={<FaIdBadge />}
                      className="w-full text-[#617A78] bg-[#f3f7f7] py-6 rounded-full focus:border-ring focus:bg-white focus:ring-primary/50 data-[state=open]:border-ring data-[state=open]:bg-white data-[state=open]:ring-primary/50"
                    >
                      <SelectValue placeholder="License" />
                    </SelectTrigger>
                    <SelectContent>
                      {validLicenseOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-[20%] md:min-w-[180px]">
                  <Input
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={(e) =>
                      onStartDateChange && onStartDateChange(e.target.value)
                    }
                    placeholder="Start Date"
                    icon={<FiCalendar />}
                    className="text-[#617A78] w-full"
                  />
                </div>
              </>
            )}

            {/* Mode */}
            <div className="md:w-[20%] md:min-w-[180px]">
              <Select
                value={filter.mode || ""}
                onValueChange={(val) => onChange({ ...filter, mode: val })}
                name="mode"
              >
                <SelectTrigger
                  icon={<FiBriefcase />}
                  className="w-full text-[#617A78] bg-[#f3f7f7] py-6 rounded-full focus:border-ring focus:bg-white focus:ring-primary/50 data-[state=open]:border-ring data-[state=open]:bg-white data-[state=open]:ring-primary/50"
                >
                  <SelectValue placeholder="Mode" />
                </SelectTrigger>
                <SelectContent>
                  {validModeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Button - Desktop */}
            <div className="hidden md:block">
              <button
                type="submit"
                className="flex items-center justify-center p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition disabled:opacity-60 min-w-[48px] h-12"
                disabled={loading}
                aria-label="Search"
              >
                <FiSearch className="text-xl" />
              </button>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="md:hidden mt-6 flex gap-3">
            <button
              type="button"
              onClick={clearFilters}
              className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition font-medium"
            >
              Clear Filters
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-primary text-white rounded-full hover:bg-primary/90 transition disabled:opacity-60 font-medium"
              disabled={loading}
            >
              {loading ? "Searching..." : "Apply Filters"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
