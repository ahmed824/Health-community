export const countries = [
  { value: "", label: "Select Country" },
  { value: "egypt", label: "Egypt" },
  { value: "ksa", label: "Saudi Arabia" },
  { value: "uae", label: "UAE" },
  { value: "usa", label: "USA" },
];

export const allCities = [
  { value: "", label: "Select City" },
  { value: "cairo", label: "Cairo" },
  { value: "riyadh", label: "Riyadh" },
  { value: "dubai", label: "Dubai" },
  { value: "newyork", label: "New York" },
];

export const countryCityMap = {
  egypt: [{ value: "cairo", label: "Cairo" }],
  ksa: [{ value: "riyadh", label: "Riyadh" }],
  uae: [{ value: "dubai", label: "Dubai" }],
  usa: [{ value: "newyork", label: "New York" }],
};

export const stepperSteps = [
  {
    icon: "FaUserTie",
    label: "Personal Info",
    aria: "Personal Info",
    desc: "Your basic details",
  },
  {
    icon: "FaBriefcase",
    label: "Work Experience",
    aria: "Work Experience",
    desc: "Jobs & roles",
  },
  {
    icon: "FaGraduationCap",
    label: "Education",
    aria: "Education",
    desc: "School & degrees",
  },
  {
    icon: "FaLaptopCode",
    label: "Skills & More",
    aria: "Skills & More",
    desc: "Skills, awards, etc.",
  },
]; 