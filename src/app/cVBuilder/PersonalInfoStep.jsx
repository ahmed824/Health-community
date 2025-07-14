"use client";
import React, { useRef } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUserTie,
  FaCalendarAlt,
  FaPlus,
  FaTrash,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import Input from "../../../components/ui/Input";
import CountrySelect from "../../pages/Profile/components/CountrySelect";
import CitySelect from "../../pages/Profile/components/CitySelect";
import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const socialOptions = [
  {
    value: "linkedin",
    label: "LinkedIn",
    icon: <FaLinkedinIn className="inline mr-2 text-[#0A66C2]" />,
  },
  {
    value: "facebook",
    label: "Facebook",
    icon: <FaFacebookF className="inline mr-2 text-[#1877F3]" />,
  },
  {
    value: "twitter",
    label: "Twitter",
    icon: <FaTwitter className="inline mr-2 text-[#1DA1F2]" />,
  },
  {
    value: "instagram",
    label: "Instagram",
    icon: <FaInstagram className="inline mr-2 text-[#E4405F]" />,
  },
  {
    value: "github",
    label: "GitHub",
    icon: <FaGithub className="inline mr-2 text-black" />,
  },
  {
    value: "website",
    label: "Website",
    icon: <span className="inline mr-2">🌐</span>,
  },
];

const PersonalInfoStep = ({
  personalInfo,
  updatePersonalInfo,
  countries,
  cities,
  onCountryChange,
  onCityChange,
  onImageChange,
  onAddSocialLink,
  onRemoveSocialLink,
  onSocialLinkChange,
  filteredCities,
  onRemoveImage,
}) => {
  const fileInputRef = useRef();

  return (
    <div>
      <h3 className="text-xl font-medium mb-4 text-gray-700 flex items-center gap-2">
        <FaUserTie className="w-5 h-5 text-primary" />
        Personal Information
      </h3>
      <div className="space-y-4">
        {/* Image Upload - Dropzone Style */}
        <div className="w-full flex flex-col items-center mb-4">
          <span className="text-[16px] text-primary text-start w-full my-2">
            Upload your photo
          </span>

          <div
            className="w-full rounded-xl bg-[#E6F0EF80] flex flex-col items-center justify-center p-8 cursor-pointer transition-all"
            onClick={() => fileInputRef.current?.click()}
            tabIndex={0}
            role="button"
            aria-label="Upload your photo"
          >
            <div className="flex flex-col items-center justify-center w-full h-full px-10 py-12 rounded-xl border border-dashed border-[#076A6099] bg-[#E6F0EF80] relative mb-2">
              {personalInfo.photoPreview ? (
                <div className="relative flex flex-col items-center">
                  <img
                    src={personalInfo.photoPreview}
                    alt="Profile"
                    className="object-cover w-32 h-32 rounded-full border-4 border-white shadow"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-white rounded-full p-1 shadow hover:bg-red-100 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveImage();
                    }}
                    aria-label="Remove photo"
                  >
                    <FaTrash className="text-red-500 w-4 h-4" />
                  </button>
                </div>
              ) : (
                <IoDocumentText className="w-14 h-14 text-[#617A78] z-0" />
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onImageChange}
              />
              <span className="text-sm text-[#617A78] font-medium mt-6">
                support png , jpg{" "}
              </span>
            </div>
          </div>
        </div>
        {/* Full Name */}
        <Input
          type="text"
          placeholder="Full Name"
          value={personalInfo.fullName}
          onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
          icon={<FaUser className="w-4 h-4 text-[#617A78]" />}
          name="fullName"
          label="Full Name"
        />
        {/* Email */}
        <Input
          type="email"
          placeholder="Email Address"
          value={personalInfo.email}
          onChange={(e) => updatePersonalInfo("email", e.target.value)}
          icon={<FaEnvelope className="w-4 h-4 text-[#617A78]" />}
          name="email"
          label="Email Address"
        />
        {/* Phone */}
        <Input
          type="tel"
          placeholder="Phone Number"
          value={personalInfo.phone}
          onChange={(e) => updatePersonalInfo("phone", e.target.value)}
          icon={<FaPhone className="w-4 h-4 text-[#617A78]" />}
          name="phone"
          label="Phone Number"
        />
        {/* Job Title */}
        <Input
          type="text"
          placeholder="Job Title"
          value={personalInfo.jobTitle}
          onChange={(e) => updatePersonalInfo("jobTitle", e.target.value)}
          icon={<FaUserTie className="w-4 h-4 text-[#617A78]" />}
          name="jobTitle"
          label="Job Title"
        />
        {/* Country & City */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <CountrySelect
              value={personalInfo.country}
              onChange={onCountryChange}
              countries={countries}
            />
          </div>
          <div className="w-full">
            <CitySelect
              value={personalInfo.city}
              onChange={onCityChange}
              cities={filteredCities}
            />
          </div>
        </div>
        {/* Nationality & Date of Birth */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Nationality"
              value={personalInfo.nationality}
              onChange={(e) =>
                updatePersonalInfo("nationality", e.target.value)
              }
              icon={<GiEarthAfricaEurope className="w-4 h-4 text-[#617A78]" />}
              name="nationality"
              label="Nationality (optional)"
            />
          </div>
          <div className="w-full">
            <Input
              type="date"
              placeholder="Date of Birth"
              value={personalInfo.dob}
              onChange={(e) => updatePersonalInfo("dob", e.target.value)}
              icon={<FaCalendarAlt className="w-4 h-4 text-[#617A78]" />}
              name="dob"
              label="Date of Birth (optional)"
              className="text-[#617A78]"
            />
          </div>
        </div>
        {/* Social Links */}
        <div>
          <label className="block text-[16px] font-medium mb-1 text-[#617A78]">
            Links (optional)
          </label>
          <div className="space-y-2">
            {personalInfo.socialLinks &&
              personalInfo.socialLinks.length > 0 &&
              personalInfo.socialLinks.map((link, idx) => {
                // Only allow options that are not already selected, or the current one
                const selectedOption = socialOptions.find(
                  (opt) => opt.value === link.type
                );
                const usedTypes = personalInfo.socialLinks.map((l) => l.type);
                const availableOptions = socialOptions.filter(
                  (opt) => !usedTypes.includes(opt.value) || opt.value === link.type
                );
                return (
                  <div key={idx} className="flex gap-2 items-center">
                    <ShadcnSelect
                      value={link.type}
                      onValueChange={(val) =>
                        onSocialLinkChange(idx, "type", val)
                      }
                    >
                      <SelectTrigger
                        className="w-1/2 px-6 py-5 text-[#617A78] border border-transparent rounded-full bg-[#F3F7F7] transition-all focus:bg-white focus:border-ring focus:outline-none pl-11"
                      >
                        {/* Left icon placeholder for alignment */}
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"></span>
                        <SelectValue placeholder="Select">
                          {selectedOption ? (
                            <span className="flex items-center">
                              {selectedOption.icon}
                              {selectedOption.label}
                            </span>
                          ) : null}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {availableOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            <span className="flex items-center">{opt.icon}{opt.label}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </ShadcnSelect>
                    <Input
                      type="url"
                      placeholder="Link URL"
                      value={link.url}
                      onChange={(e) =>
                        onSocialLinkChange(idx, "url", e.target.value)
                      }
                      className="flex-1"
                    />
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => onRemoveSocialLink(idx)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                );
              })}
            <button
              type="button"
              className="flex items-center gap-1 text-primary mt-2"
              onClick={onAddSocialLink}
            >
              <FaPlus /> Add Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
