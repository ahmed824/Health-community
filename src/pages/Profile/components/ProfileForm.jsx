import React from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import BagIcon from "../../../../components/ui/BagIcon";  
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { TfiReload } from "react-icons/tfi";
import CountrySelect from "./CountrySelect";
import CitySelect from "./CitySelect";

export default function ProfileForm({
  form,
  errors,
  handleChange,
  handleCreateCV,
  handleCancel,
  handleSubmit,
  createCVLoading,
  countries,
  cities,
  submitted
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full ">
      {/* Row 1: Name + Email */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full">
          <Input
            label="Full Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            error={errors.name}
            icon={<FaUser />}
          />
        </div>
        <div className="w-full">
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            error={errors.email}
            icon={<FaEnvelope />}
          />
        </div>
      </div>
      {/* Row 2: Phone + Date of Birth */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <Input
            label="Phone Number"
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            error={errors.phone}
            icon={<FaPhone />}
          />
        </div>
        <div className="w-full">
          <Input
            label="Date of Birth (optional)"
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            placeholder="Date of Birth"
            error={errors.dob}
            icon={<FaCalendarAlt />}
          />
        </div>
      </div>
      {/* Row 3: Country + City */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <CountrySelect
            value={form.country}
            onChange={handleChange}
            error={errors.country}
            countries={countries}
          />
        </div>
        <div className="w-full">
          <CitySelect
            value={form.city}
            onChange={handleChange}
            error={errors.city}
            cities={cities}
          />
        </div>
      </div>
      {/* Row 4: Job Title + Nationality */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full">
          <Input
            label="Job Title"
            type="text"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
            error={errors.jobTitle}
            icon={<BagIcon className="-ml-2" />}
          />
        </div>
        <div className="w-full">
          <Input
            label="Nationality (optional)"
            type="text"
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
            placeholder="Nationality"
            icon={<GiEarthAfricaEurope />}
          />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="w-fit capitalize border-transparent hover:border-[#B7D3D1] text-primary  hover:bg-[#F3F7F7]"
            onClick={handleCreateCV}
            disabled={createCVLoading}
          >
            <p>use to create cv</p>
          </Button>
          {createCVLoading && (
            <span className="ml-2 flex items-center justify-center w-12 h-12 border border-primary  rounded-full bg-white animate-spin">
              <TfiReload className="text-primary text-xl font-bold" />
            </span>
          )}
        </div>
        <div className="flex gap-4">
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="w-40 capitalize border-[#B7D3D1] text-primary bg-white hover:bg-[#F3F7F7]"
            onClick={handleCancel}
          >
            <p>Cancel</p>
          </Button>
          <Button
            type="submit"
            variant="outline"
            size="lg"
            className="bg-[#076A60] text-white w-40 capitalize "
          >
            <p>update</p>
          </Button>
        </div>
      </div>
      {submitted && Object.keys(errors).length === 0 && (
        <div className="text-green-600 text-sm mt-2">
          Profile updated successfully!
        </div>
      )}
    </form>
  );
} 