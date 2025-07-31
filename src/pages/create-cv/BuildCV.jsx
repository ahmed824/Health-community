"use client";
import React, { useState, useRef } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaUserTie,
  FaLaptopCode,
  FaDownload,
  FaSpinner,
  FaCertificate,
  FaCheck,
} from "react-icons/fa";
import dynamic from "next/dynamic";

const PersonalInfoStep = dynamic(
  () => import("./components/PersonalInfoStep"),
  { ssr: false }
);
const EducationStep = dynamic(() => import("./components/EducationStep"), {
  ssr: false,
});
const ExperienceSkillsStep = dynamic(
  () => import("./components/ExperienceSkillsStep"),
  { ssr: false }
);
const LanguagesCertificatesStep = dynamic(
  () => import("./components/LanguagesCertificatesStep"),
  { ssr: false }
);

const BreadCramp = dynamic(
  () => import("../../../components/layout/BreadCramp"),
  { ssr: false }
);
const CVStepper = dynamic(() => import("./components/CVStepper"), {
  ssr: false,
});
const StepNavigation = dynamic(() => import("./components/StepNavigation"), {
  ssr: false,
});
const CVPreview = dynamic(() => import("./components/CVPreview"), {
  ssr: false,
});
const SuccessDialog = dynamic(() => import("./components/SuccessDialog"), {
  ssr: false,
});

import {
  formatExperienceDuration,
  formatEducationDuration,
  isFormValid,
} from "./components/cvUtils";

const countries = [
  { value: "", label: "Select Country" },
  { value: "egypt", label: "Egypt" },
  { value: "ksa", label: "Saudi Arabia" },
  { value: "uae", label: "UAE" },
  { value: "usa", label: "USA" },
];

const allCities = [
  { value: "", label: "Select City" },
  { value: "cairo", label: "Cairo" },
  { value: "riyadh", label: "Riyadh" },
  { value: "dubai", label: "Dubai" },
  { value: "newyork", label: "New York" },
];

const countryCityMap = {
  egypt: [{ value: "cairo", label: "Cairo" }],
  ksa: [{ value: "riyadh", label: "Riyadh" }],
  uae: [{ value: "dubai", label: "Dubai" }],
  usa: [{ value: "newyork", label: "New York" }],
};

const BuildCV = () => {
  const cvRef = useRef();
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState(1);
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      jobTitle: "",
      country: "",
      city: "",
      nationality: "",
      dob: "",
      photo: null,
      photoPreview: "",
      socialLinks: [], // {type: '', url: ''}
    },
    experience: [],
    education: [],
    skills: [],
    achievements: [],
    languages: [],
    certificates: [],
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const updatePersonalInfo = (field, value) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  // Image upload handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new window.FileReader();
      reader.onload = (ev) => {
        setCvData((prev) => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            photo: file,
            photoPreview: ev.target.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove uploaded image handler
  const handleRemoveImage = () => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        photo: null,
        photoPreview: "",
      },
    }));
  };

  // Country/City logic
  const handleCountryChange = (val) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        country: val,
        city: "",
      },
    }));
  };
  const handleCityChange = (val) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        city: val,
      },
    }));
  };
  const filteredCities = cvData.personalInfo.country
    ? [allCities[0], ...(countryCityMap[cvData.personalInfo.country] || [])]
    : allCities;

  // Social links logic
  const handleAddSocialLink = () => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        socialLinks: [
          ...(prev.personalInfo.socialLinks || []),
          { type: "", url: "" },
        ],
      },
    }));
  };
  const handleRemoveSocialLink = (idx) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        socialLinks: prev.personalInfo.socialLinks.filter((_, i) => i !== idx),
      },
    }));
  };
  const handleSocialLinkChange = (idx, field, value) => {
    setCvData((prev) => {
      const updatedLinks = prev.personalInfo.socialLinks.map((link, i) =>
        i === idx ? { ...link, [field]: value } : link
      );
      return {
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          socialLinks: updatedLinks,
        },
      };
    });
  };

  const addExperience = () => {
    setCvData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          jobTitle: "",
          company: "",
          country: "",
          city: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          description: "",
        },
      ],
    }));
  };

  const updateExperience = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addEducation = () => {
    setCvData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          degree: "",
          university: "",
          country: "",
          city: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          description: "",
        },
      ],
    }));
  };

  const updateEducation = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const removeEducation = (id) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const addSkill = () => {
    setCvData((prev) => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now(), name: "", level: "Beginner" }],
    }));
  };

  const updateSkill = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    }));
  };

  const removeSkill = (id) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }));
  };

  // Languages handlers
  const addLanguage = () => {
    setCvData((prev) => ({
      ...prev,
      languages: [
        ...prev.languages,
        { id: Date.now(), name: "", level: "Basic" },
      ],
    }));
  };
  const updateLanguage = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      languages: prev.languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    }));
  };
  const removeLanguage = (id) => {
    setCvData((prev) => ({
      ...prev,
      languages: prev.languages.filter((lang) => lang.id !== id),
    }));
  };

  // Certificates handlers
  const addCertificate = () => {
    setCvData((prev) => ({
      ...prev,
      certificates: [
        ...prev.certificates,
        {
          id: Date.now(),
          title: "",
          issuer: "",
          year: "",
          type: "link",
          link: "",
          file: null,
          filePreview: "",
        },
      ],
    }));
  };
  const updateCertificate = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      certificates: prev.certificates.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      ),
    }));
  };
  const removeCertificate = (id) => {
    setCvData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((cert) => cert.id !== id),
    }));
  };

  // Step navigation
  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // Reset functions for each step
  const resetPersonalInfo = () => {
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        fullName: "",
        email: "",
        phone: "",
        jobTitle: "",
        country: "",
        city: "",
        nationality: "",
        dob: "",
        photo: null,
        photoPreview: "",
        socialLinks: [],
      },
    }));
  };
  const resetExperience = () => {
    setCvData((prev) => ({
      ...prev,
      experience: [],
    }));
  };
  const resetEducation = () => {
    setCvData((prev) => ({
      ...prev,
      education: [],
    }));
  };
  const resetSkillsAndMore = () => {
    setCvData((prev) => ({
      ...prev,
      skills: [],
      achievements: [],
      languages: [],
      certificates: [],
    }));
  };

  // PDF Download functionality (lifted from CVPreview)
  const downloadPDF = async () => {
    if (!cvRef.current) return;
    setIsGenerating(true);
    cvRef.current.classList.add("pdf-exporting");
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = cvRef.current;
      const opt = {
        margin: 0.2,
        filename: `${cvData.personalInfo.fullName || "CV"}_Resume.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 1,
          useCORS: true,
          letterRendering: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      };
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      cvRef.current.classList.remove("pdf-exporting");
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className="min-h-screen ">
        <BreadCramp
          heading={"Resume Writing"}
          paragraph={
            "Fill in your details and let us craft a professional resume just for you"
          }
          image={"resume.png"}
          imageClass={"bottom-5 right-40"}
        />
        <div className="  mx-auto">
          <div className="container">
            <h1 className="text-4xl  font-bold text-primary mb-2">
              Fill in this information to create your CV
            </h1>

            {/* Stepper UI */}
            <CVStepper
              step={step}
              steps={[
                {
                  icon: <FaUserTie />,
                  label: "Personal Info",
                  aria: "Personal Info",
                  desc: "Your basic details",
                },
                {
                  icon: <FaBriefcase />,
                  label: "Work Experience",
                  aria: "Work Experience",
                  desc: "Jobs & roles",
                },
                {
                  icon: <FaGraduationCap />,
                  label: "Education",
                  aria: "Education",
                  desc: "School & degrees",
                },
                {
                  icon: <FaLaptopCode />,
                  label: "Skills & More",
                  aria: "Skills & More",
                  desc: "Skills, awards, etc.",
                },
              ]}
            />
          </div>

          <div className="flex justify-center bg-[#F2F7F7] items-center gap-3 text-primary py-4">
            <span className="relative inline-block p-4 rounded-full w-[30px] h-[30px] bg-[#076A6012]">
              <FaCertificate className="text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary" />
              <FaCheck className="text-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
            </span>
            <h2 className="m-0 font-[500]">
              Optimized for Applicant Tracking Systems
            </h2>
          </div>

          <div className="container">
            <div className="flex justify-center gap-8 items-start mt-16">
              {/* Step Form */}
              <div className="w-full h-fit mb-8">
                {step === 1 && (
                  <PersonalInfoStep
                    personalInfo={cvData.personalInfo}
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
                  />
                )}
                {step === 2 && (
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
                    cities={allCities}
                    filteredCities={filteredCities}
                    countryCityMap={countryCityMap}
                  />
                )}
                {step === 3 && (
                  <EducationStep
                    education={cvData.education}
                    addEducation={addEducation}
                    updateEducation={updateEducation}
                    removeEducation={removeEducation}
                    countries={countries}
                    cities={allCities}
                  />
                )}
                {step === 4 && (
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
                )}
                <StepNavigation
                  step={step}
                  onPrev={prevStep}
                  onNext={nextStep}
                  onCancel={
                    step === 1
                      ? resetPersonalInfo
                      : step === 2
                      ? resetExperience
                      : step === 3
                      ? resetEducation
                      : resetSkillsAndMore
                  }
                  onSubmit={() => setShowSuccess(true)}
                  isLastStep={step === 4}
                  isFirstStep={step === 1}
                  isGenerating={isGenerating}
                  isFormValid={isFormValid(cvData)}
                />
              </div>

              {/* CV Preview  */}
              <div className="bg-white rounded-xl w-full shadow-xl border border-gray-100 h-fit">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <FaCode className="w-6 h-6 text-primary" />
                    CV Preview
                  </h3>
                  {/* Action Buttons moved here */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={downloadPDF}
                      disabled={!isFormValid(cvData) || isGenerating}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isGenerating ? (
                        <FaSpinner className="w-4 h-4 animate-spin" />
                      ) : (
                        <FaDownload className="w-4 h-4" />
                      )}
                      {isGenerating ? "Generating..." : "Download PDF"}
                    </button>
                  </div>
                </div>
                <div className="p-0">
                  <div>
                    <CVPreview
                      cvData={cvData}
                      formatExperienceDuration={formatExperienceDuration}
                      formatEducationDuration={formatEducationDuration}
                      isFormValid={isFormValid(cvData)}
                      cvRef={cvRef}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessDialog open={showSuccess} onClose={setShowSuccess} />
    </>
  );
};

export default BuildCV;
