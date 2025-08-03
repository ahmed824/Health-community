"use client";
import { useState } from "react";

export const useCVData = () => {
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

  // Experience handlers
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

  // Education handlers
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

  // Skills handlers
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

  return {
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
  };
}; 