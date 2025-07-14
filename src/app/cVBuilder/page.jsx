"use client";
import React, { useState, useRef } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaDownload,
  FaUserTie,
  FaLaptopCode,
  FaExternalLinkAlt,
} from "react-icons/fa";
import PersonalInfoStep from "./PersonalInfoStep";
import EducationStep from "./EducationStep";
import ExperienceSkillsStep from "./ExperienceSkillsStep";
import LanguagesCertificatesStep from "./LanguagesCertificatesStep";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import BreadCramp from "../../../components/layout/BreadCramp";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CVStepper from "./CVStepper";
import StepNavigation from "./StepNavigation";
import CVPreview from "./CVPreview";
import DownloadButton from "./DownloadButton";
import SuccessDialog from "./SuccessDialog";
import {
  formatExperienceDuration,
  formatEducationDuration,
  isFormValid,
} from "./cvUtils";

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

const CVBuilder = () => {
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

  const downloadPDF = async () => {
    if (!cvRef.current) return;
    setIsGenerating(true);
    try {
      // Add a temporary class for PDF export
      cvRef.current.classList.add("pdf-exporting");
      // Load html2pdf.js dynamically
      const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      };
      // Load html2pdf.js (which includes html2canvas and jsPDF)
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
      );
      // Set file name
      const fileName = cvData.personalInfo.fullName
        ? `${cvData.personalInfo.fullName.replace(/\s+/g, "_")}_CV.pdf`
        : "My_CV.pdf";
      // Use html2pdf for high-fidelity export
      await window
        .html2pdf()
        .set({
          margin: 0,
          filename: fileName,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            letterRendering: true,
            logging: false,
            allowTaint: true,
            foreignObjectRendering: false,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
            compress: true,
          },
        })
        .from(cvRef.current)
        .save()
        .catch((error) => {
          console.error("Error generating PDF:", error);
          alert("Error generating PDF. Please try again.");
        });
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      // Remove the temporary class after export
      if (cvRef.current) cvRef.current.classList.remove("pdf-exporting");
      setIsGenerating(false);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cv-preview, .cv-preview * {
              color: #000 !important;
              background: #fff !important;
              border-color: #000 !important;
              font-family: Arial, sans-serif !important;
              box-shadow: none !important;
            }
            .cv-preview h1, .cv-preview h2, .cv-preview h3 {
              color: #000 !important;
              font-weight: bold !important;
            }
            .cv-preview .text-primary { color: #076A60 !important; }
            .cv-preview .bg-white { background: #fff !important; }
            .cv-preview .bg-gray-100 { background: #f3f4f6 !important; }
            .cv-preview .bg-gray-200 { background: #e5e7eb !important; }
            .cv-preview .bg-red-500 { background: #ef4444 !important; }
            .cv-preview .bg-yellow-500 { background: #eab308 !important; }
            .cv-preview .bg-green-500 { background: #22c55e !important; }
            .cv-preview .bg-blue-500 { background: #2563eb !important; }
            .cv-preview .bg-gray-500 { background: #6b7280 !important; }
            .cv-preview .border-blue-600 { border-color: #2563eb !important; }
            .cv-preview .border-gray-300 { border-color: #d1d5db !important; }
            .cv-preview .border-gray-200 { border-color: #e5e7eb !important; }
            .cv-preview .rounded-xl, .cv-preview .rounded-lg, .cv-preview .rounded-full {
              border-radius: 12px !important;
            }
            .cv-preview .shadow-xl, .cv-preview .shadow-md, .cv-preview .shadow-lg {
              box-shadow: none !important;
            }
            .cv-preview .font-bold { font-weight: bold !important; }
            .cv-preview .font-semibold { font-weight: 600 !important; }
            .cv-preview .font-medium { font-weight: 500 !important; }
            .cv-preview .text-xs { font-size: 12px !important; }
            .cv-preview .text-sm { font-size: 14px !important; }
            .cv-preview .text-base { font-size: 16px !important; }
            .cv-preview .text-lg { font-size: 18px !important; }
            .cv-preview .text-2xl { font-size: 24px !important; }
            .cv-preview .text-3xl { font-size: 30px !important; }
            .cv-preview .p-4 { padding: 16px !important; }
            .cv-preview .mb-1 { margin-bottom: 4px !important; }
            .cv-preview .mb-2 { margin-bottom: 8px !important; }
            .cv-preview .mb-3 { margin-bottom: 12px !important; }
            .cv-preview .mb-4 { margin-bottom: 16px !important; }
            .cv-preview .pb-1 { padding-bottom: 4px !important; }
            .cv-preview .pb-2 { padding-bottom: 8px !important; }
            .cv-preview .pt-2 { padding-top: 8px !important; }
            .cv-preview .px-2 { padding-left: 8px !important; padding-right: 8px !important; }
            .cv-preview .py-0\\.5 { padding-top: 2px !important; padding-bottom: 2px !important; }
            .cv-preview .rounded-full { border-radius: 9999px !important; }
            .cv-preview .flex { display: flex !important; }
            .cv-preview .items-center { align-items: center !important; }
            .cv-preview .justify-between { justify-content: space-between !important; }
            .cv-preview .gap-2 { gap: 8px !important; }
            .cv-preview .gap-1 { gap: 4px !important; }
            .cv-preview .min-w-\\[100px\\] { min-width: 100px !important; }
            .cv-preview .min-w-\\[60px\\] { min-width: 60px !important; }
            .cv-preview .h-2 { height: 8px !important; }
            .cv-preview .overflow-hidden { overflow: hidden !important; }
            .cv-preview .transition-all { transition: none !important; }
            .cv-preview .duration-500 { transition-duration: 0ms !important; }
            .cv-preview .text-center { text-align: center !important; }
            .cv-preview .text-justify { text-align: justify !important; }
            .cv-preview .border-b { border-bottom: 1px solid #323332 !important; }
            .cv-preview .border-b-2 { border-bottom: 2px solid #323332 !important; }
            .cv-preview .border { border: 1px solid #e5e7eb !important; }
            .cv-preview .print\\:border-0 { border: 0 !important; }
            .cv-preview .print\\:shadow-none { box-shadow: none !important; }
            .cv-preview .w-full { width: 100% !important; }
            .cv-preview .w-1\/4 { width: 25% !important; }
            .cv-preview .w-1\/2 { width: 50% !important; }
            .cv-preview .w-3\/4 { width: 75% !important; }
            .cv-preview .w-6 { width: 24px !important; }
            .cv-preview .h-6 { height: 24px !important; }
            .cv-preview .min-h-\\[800px\\] { min-height: 800px !important; }
            /* PDF-specific tweaks */
            .cv-preview.pdf-exporting, .cv-preview.pdf-exporting * {
              color: #000 !important;
              background: #fff !important;
              border-color: #000 !important;
              font-family: Arial, sans-serif !important;
              box-shadow: none !important;
            }
          `,
        }}
      />
      <div className="min-h-screen   p-4">
        <BreadCramp
          heading={"Resume Writing"}
          paragraph={
            "Fill in your details and let us craft a professional resume just for you"
          }
          image={"resume.png"}
          imageClass={"bottom-5 right-40"}
        />
        <div className="max-w-7xl  mx-auto">
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

            {/* CV Preview and Download */}
            <div className="bg-white rounded-xl w-full shadow-xl border border-gray-100 h-fit">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <FaCode className="w-6 h-6 text-primary" />
                  CV Preview
                </h2>
                <DownloadButton
                  onDownload={downloadPDF}
                  isFormValid={isFormValid(cvData)}
                  isGenerating={isGenerating}
                />
              </div>
              <div className="p-0">
                <div ref={cvRef}>
                  <CVPreview
                    cvData={cvData}
                    formatExperienceDuration={formatExperienceDuration}
                    formatEducationDuration={formatEducationDuration}
                    isFormValid={isFormValid(cvData)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessDialog
        open={showSuccess}
        onClose={setShowSuccess}
        onDownload={downloadPDF}
      />
    </>
  );
};

export default CVBuilder;
