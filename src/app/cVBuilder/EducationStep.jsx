import React from "react";
import { FaGraduationCap, FaPlus, FaMinus } from "react-icons/fa";

const EducationStep = ({ education, addEducation, updateEducation, removeEducation }) => (
  <div>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
        <FaGraduationCap className="w-5 h-5 text-green-600" />
        Education
      </h3>
      <button
        type="button"
        onClick={addEducation}
        className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#076A60] text-white hover:bg-[#05543e] transition-all duration-200"
      >
        <FaPlus className="w-4 h-4" />
        Add Education
      </button>
    </div>
    {education.map((edu) => (
      <div
        key={edu.id}
        className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 space-y-3">
            <input
              type="text"
              placeholder="Degree (e.g., Bachelor of Science)"
              value={edu.degree}
              onChange={e => updateEducation(edu.id, "degree", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Institution Name"
              value={edu.institution}
              onChange={e => updateEducation(edu.id, "institution", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Year (e.g., 2020-2024)"
              value={edu.year}
              onChange={e => updateEducation(edu.id, "year", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="GPA (optional)"
              value={edu.gpa}
              onChange={e => updateEducation(edu.id, "gpa", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => removeEducation(edu.id)}
            className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
          >
            <FaMinus className="w-4 h-4" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default EducationStep; 