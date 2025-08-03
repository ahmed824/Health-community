"use client";
import React from "react";
import dynamic from "next/dynamic";

const PersonalInfoStep = dynamic(
  () => import("./PersonalInfoStep"),
  { ssr: false }
);
const EducationStep = dynamic(() => import("./EducationStep"), {
  ssr: false,
});
const ExperienceSkillsStep = dynamic(
  () => import("./ExperienceSkillsStep"),
  { ssr: false }
);
const LanguagesCertificatesStep = dynamic(
  () => import("./LanguagesCertificatesStep"),
  { ssr: false }
);

const StepFormContainer = ({
  step,
  cvData,
  updatePersonalInfo,
  countries,
  cities,
  filteredCities,
  onCountryChange,
  onCityChange,
  onImageChange,
  onAddSocialLink,
  onRemoveSocialLink,
  onSocialLinkChange,
  onRemoveImage,
  addExperience,
  updateExperience,
  removeExperience,
  skills,
  addSkill,
  updateSkill,
  removeSkill,
  countryCityMap,
  addEducation,
  updateEducation,
  removeEducation,
  addLanguage,
  updateLanguage,
  removeLanguage,
  addCertificate,
  updateCertificate,
  removeCertificate,
}) => {
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoStep
            personalInfo={cvData.personalInfo}
            updatePersonalInfo={updatePersonalInfo}
            countries={countries}
            cities={cities}
            filteredCities={filteredCities}
            onCountryChange={onCountryChange}
            onCityChange={onCityChange}
            onImageChange={onImageChange}
            onAddSocialLink={onAddSocialLink}
            onRemoveSocialLink={onRemoveSocialLink}
            onSocialLinkChange={onSocialLinkChange}
            onRemoveImage={onRemoveImage}
          />
        );
      case 2:
        return (
          <ExperienceSkillsStep
            experience={cvData.experience}
            addExperience={addExperience}
            updateExperience={updateExperience}
            removeExperience={removeExperience}
            skills={cvData.skills}
            addSkill={addSkill}
            updateSkill={updateSkill}
            removeSkill={removeSkill}
            countries={countries}
            cities={cities}
            filteredCities={filteredCities}
            countryCityMap={countryCityMap}
          />
        );
      case 3:
        return (
          <EducationStep
            education={cvData.education}
            addEducation={addEducation}
            updateEducation={updateEducation}
            removeEducation={removeEducation}
            countries={countries}
            cities={cities}
          />
        );
      case 4:
        return (
          <LanguagesCertificatesStep
            languages={cvData.languages}
            addLanguage={addLanguage}
            updateLanguage={updateLanguage}
            removeLanguage={removeLanguage}
            certificates={cvData.certificates}
            addCertificate={addCertificate}
            updateCertificate={updateCertificate}
            removeCertificate={removeCertificate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-fit mb-8">
      {renderStep()}
    </div>
  );
};

export default StepFormContainer; 