"use client";
import React, { useState, useRef } from "react";
import {
  FaPlus,
  FaMinus,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaCode,
  FaDownload,
  FaUserTie,
  FaLaptopCode,
  FaLanguage,
  FaCertificate,
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

const CVBuilder = () => {
  const cvRef = useRef();
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState(1);
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
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

  const addExperience = () => {
    setCvData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          jobTitle: "",
          company: "",
          duration: "",
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
          institution: "",
          year: "",
          gpa: "",
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

  const addAchievement = () => {
    setCvData((prev) => ({
      ...prev,
      achievements: [
        ...prev.achievements,
        { id: Date.now(), title: "", description: "" },
      ],
    }));
  };

  const updateAchievement = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      achievements: prev.achievements.map((achievement) =>
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      ),
    }));
  };

  const removeAchievement = (id) => {
    setCvData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter(
        (achievement) => achievement.id !== id
      ),
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
        { id: Date.now(), title: "", issuer: "", year: "" },
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
        location: "",
        summary: "",
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
      window
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
        })
        .finally(() => setIsGenerating(false));
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
      setIsGenerating(false);
    }
  };

  const getSkillBarWidth = (level) => {
    switch (level) {
      case "Beginner":
        return "w-1/4";
      case "Intermediate":
        return "w-1/2";
      case "Advanced":
        return "w-3/4";
      case "Expert":
        return "w-full";
      default:
        return "w-1/4";
    }
  };

  const getSkillColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-red-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-blue-500";
      case "Expert":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const isFormValid = () => {
    return (
      cvData.personalInfo.fullName.trim() !== "" ||
      cvData.personalInfo.email.trim() !== "" ||
      cvData.experience.length > 0 ||
      cvData.education.length > 0 ||
      cvData.skills.length > 0
    );
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Complete CSS reset for PDF compatibility - override ALL potential oklch colors */
          .cv-preview, .cv-preview * {
            color: #000000 !important;
            background-color: transparent !important;
            border-color: #000000 !important;
          }
          
          /* Specific overrides for each color class */
          .cv-preview .text-blue-600 { color: #2563eb !important; }
          .cv-preview .text-gray-800 { color: #1f2937 !important; }
          .cv-preview .text-gray-700 { color: #374151 !important; }
          .cv-preview .text-gray-600 { color: #4b5563 !important; }
          .cv-preview .text-gray-500 { color: #6b7280 !important; }
          .cv-preview .text-gray-400 { color: #9ca3af !important; }
          
          .cv-preview .bg-white { background-color: #ffffff !important; }
          .cv-preview .bg-blue-600 { background-color: #2563eb !important; }
          .cv-preview .bg-gray-100 { background-color: #f3f4f6 !important; }
          .cv-preview .bg-gray-200 { background-color: #e5e7eb !important; }
          .cv-preview .bg-red-500 { background-color: #ef4444 !important; }
          .cv-preview .bg-yellow-500 { background-color: #eab308 !important; }
          .cv-preview .bg-green-500 { background-color: #22c55e !important; }
          .cv-preview .bg-gray-500 { background-color: #6b7280 !important; }
          
          .cv-preview .border-blue-600 { border-color: #2563eb !important; }
          .cv-preview .border-gray-300 { border-color: #d1d5db !important; }
          .cv-preview .border-gray-200 { border-color: #e5e7eb !important; }
          
          /* Force root element colors */
          .cv-preview {
            background-color: #ffffff !important;
            color: #000000 !important;
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
          <div className="flex justify-between items-center mb-8">
            {[
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
            ].map((stepObj, idx) => (
              <div
                key={stepObj.label}
                className="flex-1 flex flex-row items-center justify-center"
              >
                <span
                  aria-label={stepObj.aria}
                  className={`rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200`}
                  style={{
                    width: 40,
                    height: 40,
                    color: step === idx + 1 ? "#076A60" : "#A3BBB9",
                    backgroundColor: "#F3F7F7",
                  }}
                >
                  {stepObj.icon}
                </span>
                <div className="flex flex-col items-start justify-center mt-2">
                  <span
                    className="mt-2 text-xs font-medium ml-2"
                    style={{ color: step === idx + 1 ? "#076A60" : "#A3BBB9" }}
                  >
                    {stepObj.label}
                  </span>
                  <span
                    className="text-[10px] mt-1 ml-2"
                    style={{ color: "#A3BBB9" }}
                  >
                    {stepObj.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 items-start mb-8">
            {/* Step Form */}
            <div className="bg-white rounded-xl w-full shadow-xl p-6 h-fit border border-gray-100 mb-8">
              {step === 1 && (
                <>
                  <PersonalInfoStep
                    personalInfo={cvData.personalInfo}
                    updatePersonalInfo={updatePersonalInfo}
                  />
                </>
              )}
              {step === 2 && (
                <>
                  {/* Work Experience only */}
                  <ExperienceSkillsStep
                    experience={cvData.experience}
                    addExperience={addExperience}
                    updateExperience={updateExperience}
                    removeExperience={removeExperience}
                    skills={[]}
                    addSkill={() => {}}
                    updateSkill={() => {}}
                    removeSkill={() => {}}
                    only="experience"
                  />
                </>
              )}
              {step === 3 && (
                <>
                  <EducationStep
                    education={cvData.education}
                    addEducation={addEducation}
                    updateEducation={updateEducation}
                    removeEducation={removeEducation}
                  />
                </>
              )}
              {step === 4 && (
                <>
                  {/* Skills, Achievements, Languages, Certificates */}
                  <ExperienceSkillsStep
                    experience={[]}
                    addExperience={() => {}}
                    updateExperience={() => {}}
                    removeExperience={() => {}}
                    skills={cvData.skills}
                    addSkill={addSkill}
                    updateSkill={updateSkill}
                    removeSkill={removeSkill}
                    only="skills"
                  />
                  {/* Achievements, Languages, Certificates */}
                  {/* Achievements */}
                  {cvData.achievements.length > 0 && (
                    <section className="mb-3">
                      <h2
                        className="text-lg font-bold mb-1 border-b pb-1"
                        style={{ color: "#000", borderColor: "#323332" }}
                      >
                        <span>Achievements & Awards</span>
                      </h2>
                      <ul>
                        {cvData.achievements.map((achievement, index) => (
                          <li
                            key={achievement.id}
                            className={`mb-2 ${
                              index < cvData.achievements.length - 1
                                ? "pb-2 border-b"
                                : ""
                            }`}
                            style={
                              index < cvData.achievements.length - 1
                                ? { borderColor: "#323332" }
                                : {}
                            }
                          >
                            <h3
                              className="text-base font-bold mb-1"
                              style={{ color: "#000" }}
                            >
                              {achievement.title || "Achievement Title"}
                            </h3>
                            {achievement.description && (
                              <p
                                className="leading-tight text-justify text-xs"
                                style={{ color: "#323332" }}
                              >
                                {achievement.description}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {/* Languages & Certificates */}
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
                </>
              )}
              <div className="flex justify-between mt-8 items-center">
                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    step === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#076A60] text-white hover:bg-[#05543e]"
                  }`}
                >
                  Back
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={
                      step === 1
                        ? resetPersonalInfo
                        : step === 2
                        ? resetExperience
                        : step === 3
                        ? resetEducation
                        : resetSkillsAndMore
                    }
                    className="px-0 py-2 font-bold text-primary mr-8 hover:underline bg-transparent border-none shadow-none focus:outline-none"
                    style={{ background: "none" }}
                  >
                    Cancel
                  </button>
                  {step < 4 ? (
                    <button
                      onClick={nextStep}
                      disabled={step === 4}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                        step === 4
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-[#076A60] text-white hover:bg-[#05543e]"
                      }`}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowSuccess(true)}
                      className="px-6 py-2 rounded-full font-medium transition-all duration-200 bg-[#076A60] text-white hover:bg-[#05543e]"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* CV Preview and Download */}
            <div className="bg-white rounded-xl w-full shadow-xl border border-gray-100 h-fit">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <FaCode className="w-6 h-6 text-primary" />
                  CV Preview
                </h2>
                <button
                  onClick={downloadPDF}
                  disabled={!isFormValid() || isGenerating}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isFormValid() && !isGenerating
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-md hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <FaDownload className="w-4 h-4" />
                  {isGenerating ? "Generating..." : "Download PDF"}
                </button>
              </div>
              <div className="p-0">
                <div
                  ref={cvRef}
                  className="cv-preview bg-white p-4 rounded-lg min-h-[800px] print:border-0 print:shadow-none"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    backgroundColor: "#fff",
                    color: "#000",
                    "--tw-gradient-from": "#000",
                    "--tw-gradient-to": "#323332",
                    "--tw-gradient-stops":
                      "var(--tw-gradient-from), var(--tw-gradient-to)",
                  }}
                >
                  {/* Header */}
                  <header
                    className="text-left mb-4 pb-2 border-b-2"
                    style={{ borderColor: "#323332" }}
                  >
                    <h1
                      className="text-3xl font-bold mb-1"
                      style={{ color: "#000" }}
                    >
                      {cvData.personalInfo.fullName || "Your Name"}
                    </h1>
                    <div
                      className="flex flex-wrap justify-start gap-2 text-xs"
                      style={{ color: "#323332" }}
                    >
                      {cvData.personalInfo.email && (
                        <span>{cvData.personalInfo.email} </span>
                      )}
                      {cvData.personalInfo.email && <span>|</span>}
                      {cvData.personalInfo.phone && (
                        <span>{cvData.personalInfo.phone} </span>
                      )}
                      {cvData.personalInfo.phone && <span>|</span>}
                      {cvData.personalInfo.location && (
                        <span>{cvData.personalInfo.location} </span>
                      )}
                    </div>
                    {cvData.personalInfo.summary && (
                      <div className="mt-1">
                        <p
                          className="leading-tight text-justify text-xs"
                          style={{ color: "#323332" }}
                        >
                          {cvData.personalInfo.summary}
                        </p>
                      </div>
                    )}
                  </header>

                  {/* Work Experience */}
                  {cvData.experience.length > 0 && (
                    <section className="mb-3">
                      <h2
                        className="text-lg font-bold mb-1 border-b pb-1"
                        style={{ color: "#000", borderColor: "#323332" }}
                      >
                        <span>Work Experience </span>
                      </h2>
                      <ul>
                        {cvData.experience.map((exp, index) => (
                          <li
                            key={exp.id}
                            className={`mb-2 ${
                              index < cvData.experience.length - 1
                                ? "pb-2 border-b"
                                : ""
                            }`}
                            style={
                              index < cvData.experience.length - 1
                                ? { borderColor: "#323332" }
                                : {}
                            }
                          >
                            <div className="flex justify-between items-start mb-1">
                              <div>
                                <h3
                                  className="text-base font-bold"
                                  style={{ color: "#000" }}
                                >
                                  {exp.jobTitle || "Job Title"}
                                </h3>
                                <p
                                  className="text-sm font-semibold"
                                  style={{ color: "#323332" }}
                                >
                                  {exp.company || "Company Name"}
                                </p>
                              </div>
                              <span
                                className="text-xs font-medium bg-white px-2 py-0.5 rounded-full"
                                style={{
                                  color: "#323332",
                                  border: "1px solid #323332",
                                }}
                              >
                                {exp.duration || "Duration"}
                              </span>
                            </div>
                            {exp.description && (
                              <p
                                className="leading-tight text-justify text-xs"
                                style={{ color: "#323332" }}
                              >
                                {exp.description}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Education */}
                  {cvData.education.length > 0 && (
                    <section className="mb-3">
                      <h2
                        className="text-lg font-bold mb-1 border-b pb-1"
                        style={{ color: "#000", borderColor: "#323332" }}
                      >
                        <span>Education</span>
                      </h2>
                      <ul>
                        {cvData.education.map((edu, index) => (
                          <li
                            key={edu.id}
                            className={`mb-2 ${
                              index < cvData.education.length - 1
                                ? "pb-2 border-b"
                                : ""
                            }`}
                            style={
                              index < cvData.education.length - 1
                                ? { borderColor: "#323332" }
                                : {}
                            }
                          >
                            <div className="flex justify-between items-start mb-1">
                              <div>
                                <h3
                                  className="text-base font-bold"
                                  style={{ color: "#000" }}
                                >
                                  {edu.degree || "Degree"}
                                </h3>
                                <p
                                  className="text-sm font-semibold"
                                  style={{ color: "#323332" }}
                                >
                                  {edu.institution || "Institution"}
                                </p>
                              </div>
                              <span
                                className="text-xs font-medium bg-white px-2 py-0.5 rounded-full"
                                style={{
                                  color: "#323332",
                                  border: "1px solid #323332",
                                }}
                              >
                                {edu.year || "Year"}
                              </span>
                            </div>
                            {edu.gpa && (
                              <p
                                className="text-xs"
                                style={{ color: "#323332" }}
                              >
                                <strong>GPA:</strong> {edu.gpa}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Skills */}
                  {cvData.skills.length > 0 && (
                    <section className="mb-3">
                      <h2
                        className="text-lg font-bold mb-1 border-b pb-1"
                        style={{ color: "#000", borderColor: "#323332" }}
                      >
                        <span>Technical Skills</span>
                      </h2>
                      <ul className="grid grid-cols-1 gap-1">
                        {cvData.skills.map((skill) => (
                          <li
                            key={skill.id}
                            className="flex items-center gap-2"
                          >
                            <span
                              className="font-semibold min-w-[100px] text-xs"
                              style={{ color: "#000" }}
                            >
                              {skill.name || "Skill Name"}
                            </span>
                            <div className="flex-1 bg-[#323332] rounded-full h-2 overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  backgroundColor: "#000",
                                  width:
                                    skill.level === "Beginner"
                                      ? "25%"
                                      : skill.level === "Intermediate"
                                      ? "50%"
                                      : skill.level === "Advanced"
                                      ? "75%"
                                      : "100%",
                                }}
                              ></div>
                            </div>
                            <span
                              className="text-xs font-medium min-w-[60px] text-right"
                              style={{ color: "#323332" }}
                            >
                              {skill.level}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Achievements */}
                  {cvData.achievements.length > 0 && (
                    <section className="mb-3">
                      <h2
                        className="text-lg font-bold mb-1 border-b pb-1"
                        style={{ color: "#000", borderColor: "#323332" }}
                      >
                        <span>Achievements & Awards</span>
                      </h2>
                      <ul>
                        {cvData.achievements.map((achievement, index) => (
                          <li
                            key={achievement.id}
                            className={`mb-2 ${
                              index < cvData.achievements.length - 1
                                ? "pb-2 border-b"
                                : ""
                            }`}
                            style={
                              index < cvData.achievements.length - 1
                                ? { borderColor: "#323332" }
                                : {}
                            }
                          >
                            <h3
                              className="text-base font-bold mb-1"
                              style={{ color: "#000" }}
                            >
                              {achievement.title || "Achievement Title"}
                            </h3>
                            {achievement.description && (
                              <p
                                className="leading-tight text-justify text-xs"
                                style={{ color: "#323332" }}
                              >
                                {achievement.description}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Languages */}
                  {cvData.languages.length > 0 && (
                    <section className="mb-3">
                      <h2
                        className="text-lg font-bold mb-1 border-b pb-1"
                        style={{ color: "#000", borderColor: "#323332" }}
                      >
                        <span>Languages</span>
                      </h2>
                      <ul className="grid grid-cols-1 gap-1">
                        {cvData.languages.map((lang) => (
                          <li key={lang.id} className="flex items-center gap-2">
                            <span
                              className="font-semibold min-w-[100px] text-xs"
                              style={{ color: "#000" }}
                            >
                              {lang.name || "Language Name"}
                            </span>
                            <div className="flex-1 bg-[#323332] rounded-full h-2 overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  backgroundColor: "#000",
                                  width:
                                    lang.level === "Native"
                                      ? "100%"
                                      : lang.level === "Fluent"
                                      ? "75%"
                                      : lang.level === "Conversational"
                                      ? "50%"
                                      : "25%",
                                }}
                              ></div>
                            </div>
                            <span
                              className="text-xs font-medium min-w-[60px] text-right"
                              style={{ color: "#323332" }}
                            >
                              {lang.level}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Certificates */}
                  {cvData.certificates.length > 0 && (
                    <section className="mb-3">
                      <h2
                        className="text-lg font-bold mb-1 border-b pb-1"
                        style={{ color: "#000", borderColor: "#323332" }}
                      >
                        <span>Certificates</span>
                      </h2>
                      <ul className="grid grid-cols-1 gap-1">
                        {cvData.certificates.map((cert) => (
                          <li key={cert.id} className="flex items-center gap-2">
                            <span
                              className="font-semibold min-w-[100px] text-xs"
                              style={{ color: "#000" }}
                            >
                              {cert.title || "Certificate Title"}
                            </span>
                            <span
                              className="text-xs font-medium min-w-[60px] text-right"
                              style={{ color: "#323332" }}
                            >
                              {cert.year || "Year"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Empty State */}
                  {!isFormValid() && (
                    <section className="text-center py-10">
                      <div className="mb-2">
                        <h3
                          className="text-base font-medium mb-1"
                          style={{ color: "#323332" }}
                        >
                          Start Building Your CV
                        </h3>
                        <p className="text-xs" style={{ color: "#323332" }}>
                          Fill in your information on the left to see your CV
                          preview here
                        </p>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>CV Created Successfully!</DialogTitle>
            <DialogDescription>
              Your CV has been created. You can now download it as a PDF.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              className="px-6 py-2 rounded-lg font-medium bg-[#076A60] text-white hover:bg-[#05543e]"
              onClick={() => {
                downloadPDF();
                setShowSuccess(false);
              }}
            >
              Download Your CV
            </button>
            <DialogClose asChild>
              <button className="px-6 py-2 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CVBuilder;
