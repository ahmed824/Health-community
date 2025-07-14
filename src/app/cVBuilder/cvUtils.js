export function formatExperienceDuration(exp) {
  if (!exp.startMonth && !exp.startYear && !exp.endMonth && !exp.endYear)
    return "";
  const start = [exp.startMonth, exp.startYear].filter(Boolean).join("/");
  const end =
    [exp.endMonth, exp.endYear].filter(Boolean).join("/") || "Present";
  return `${start} - ${end}`;
}

export function formatEducationDuration(edu) {
  if (!edu.startMonth && !edu.startYear && !edu.endMonth && !edu.endYear)
    return "";
  const start = [edu.startMonth, edu.startYear].filter(Boolean).join("/");
  const end =
    [edu.endMonth, edu.endYear].filter(Boolean).join("/") || "Present";
  return `${start} - ${end}`;
}

export function isFormValid(cvData) {
  return (
    cvData.personalInfo.fullName.trim() !== "" ||
    cvData.personalInfo.email.trim() !== "" ||
    cvData.experience.length > 0 ||
    cvData.education.length > 0 ||
    cvData.skills.length > 0
  );
} 