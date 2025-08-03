"use client";
import React, { useRef, useState } from "react";
import {
  FaUserTie,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import dynamic from "next/dynamic";

// Import custom hooks
import { useCVData } from "./hooks/useCVData";
import { useStepNavigation } from "./hooks/useStepNavigation";
import { usePDFDownload } from "./hooks/usePDFDownload";

// Import constants
import { countries, allCities, countryCityMap, stepperSteps } from "./constants/cvConstants";

// Import components
import CVBuilderHeader from "./components/CVBuilderHeader";
import ATSBanner from "./components/ATSBanner";
import StepFormContainer from "./components/StepFormContainer";
import CVPreviewSection from "./components/CVPreviewSection";

const CVStepper = dynamic(() => import("./components/CVStepper"), {
  ssr: false,
});
const StepNavigation = dynamic(() => import("./components/StepNavigation"), {
  ssr: false,
});
const SuccessDialog = dynamic(() => import("./components/SuccessDialog"), {
  ssr: false,
});

import { isFormValid } from "./components/cvUtils";

const BuildCV = () => {
  const cvRef = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  // Use custom hooks
  const {
    cvData,
    updatePersonalInfo,
    handleImageChange,
    handleRemoveImage,
    handleCountryChange,
    handleCityChange,
    handleAddSocialLink,
    handleRemoveSocialLink,
    handleSocialLinkChange,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkill,
    updateSkill,
    removeSkill,
    addLanguage,
    updateLanguage,
    removeLanguage,
    addCertificate,
    updateCertificate,
    removeCertificate,
    resetPersonalInfo,
    resetExperience,
    resetEducation,
    resetSkillsAndMore,
  } = useCVData();

  const { step, nextStep, prevStep } = useStepNavigation();
  const { isGenerating, downloadPDF } = usePDFDownload(cvRef, cvData);

  // Filter cities based on selected country
  const filteredCities = cvData.personalInfo.country
    ? [allCities[0], ...(countryCityMap[cvData.personalInfo.country] || [])]
    : allCities;

  // Get reset function based on current step
  const getResetFunction = () => {
    switch (step) {
      case 1:
        return resetPersonalInfo;
      case 2:
        return resetExperience;
      case 3:
        return resetEducation;
      case 4:
        return resetSkillsAndMore;
      default:
        return resetPersonalInfo;
    }
  };

  // Map icon strings to actual components
  const iconMap = {
    FaUserTie: <FaUserTie />,
    FaBriefcase: <FaBriefcase />,
    FaGraduationCap: <FaGraduationCap />,
    FaLaptopCode: <FaLaptopCode />,
  };

  // Add icons to stepper steps
  const stepsWithIcons = stepperSteps.map(step => ({
    ...step,
    icon: iconMap[step.icon],
  }));

  return (
    <>
      <div className="min-h-screen">
        <CVBuilderHeader />
        
        <div className="mx-auto">
          <div className="container">
            <CVStepper step={step} steps={stepsWithIcons} />
          </div>

          <ATSBanner />

          <div className="container">
            <div className="flex justify-center gap-8 items-start mt-16">
              {/* Step Form */}
              <div className="w-full h-fit mb-8">
                <StepFormContainer
                  step={step}
                  cvData={cvData}
                  updatePersonalInfo={updatePersonalInfo}
                  countries={countries}
                  cities={allCities}
                  filteredCities={filteredCities}
                  onCountryChange={handleCountryChange}
                  onCityChange={handleCityChange}
                  onImageChange={handleImageChange}
                  onAddSocialLink={handleAddSocialLink}
                  onRemoveSocialLink={handleRemoveSocialLink}
                  onSocialLinkChange={handleSocialLinkChange}
                  onRemoveImage={handleRemoveImage}
                  addExperience={addExperience}
                  updateExperience={updateExperience}
                  removeExperience={removeExperience}
                  skills={cvData.skills}
                  addSkill={addSkill}
                  updateSkill={updateSkill}
                  removeSkill={removeSkill}
                  countryCityMap={countryCityMap}
                  addEducation={addEducation}
                  updateEducation={updateEducation}
                  removeEducation={removeEducation}
                  addLanguage={addLanguage}
                  updateLanguage={updateLanguage}
                  removeLanguage={removeLanguage}
                  addCertificate={addCertificate}
                  updateCertificate={updateCertificate}
                  removeCertificate={removeCertificate}
                />
                <StepNavigation
                  step={step}
                  onPrev={prevStep}
                  onNext={nextStep}
                  onCancel={getResetFunction()}
                  onSubmit={() => setShowSuccess(true)}
                  isLastStep={step === 4}
                  isFirstStep={step === 1}
                  isGenerating={isGenerating}
                  isFormValid={isFormValid(cvData)}
                />
              </div>

              {/* CV Preview */}
              <CVPreviewSection
                cvData={cvData}
                downloadPDF={downloadPDF}
                isGenerating={isGenerating}
                isFormValid={isFormValid(cvData)}
                cvRef={cvRef}
              />
            </div>
          </div>
        </div>
      </div>
      <SuccessDialog open={showSuccess} onClose={setShowSuccess} />
    </>
  );
};

export default BuildCV;
