import React from "react";
import { FaBriefcase, FaPlus, FaMinus, FaLaptopCode } from "react-icons/fa";

const ExperienceSkillsStep = ({
  experience,
  addExperience,
  updateExperience,
  removeExperience,
  skills,
  addSkill,
  updateSkill,
  removeSkill,
  only, // <-- add only prop
}) => (
  <div>
    {/* Experience Section */}
    {only !== "skills" && (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
            <FaBriefcase className="w-5 h-5 text-blue-600" />
            Work Experience
          </h3>
          <button
            onClick={addExperience}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#076A60] text-white hover:bg-[#05543e] transition-all duration-200"
          >
            <FaPlus className="w-4 h-4" />
            Add Experience
          </button>
        </div>
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 space-y-3">
                <input
                  type="text"
                  placeholder="Job Title"
                  value={exp.jobTitle}
                  onChange={e => updateExperience(exp.id, "jobTitle", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={exp.company}
                  onChange={e => updateExperience(exp.id, "company", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., Jan 2020 - Present)"
                  value={exp.duration}
                  onChange={e => updateExperience(exp.id, "duration", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Job Description & Achievements"
                  value={exp.description}
                  onChange={e => updateExperience(exp.id, "description", e.target.value)}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                onClick={() => removeExperience(exp.id)}
                className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <FaMinus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
    {/* Skills Section */}
    {only !== "experience" && (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
            <FaLaptopCode className="w-5 h-5 text-purple-600" />
            Skills
          </h3>
          <button
            onClick={addSkill}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#076A60] text-white hover:bg-[#05543e] transition-all duration-200"
          >
            <FaPlus className="w-4 h-4" />
            Add Skill
          </button>
        </div>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 space-y-3">
                <input
                  type="text"
                  placeholder="Skill Name (e.g., JavaScript, Python)"
                  value={skill.name}
                  onChange={e => updateSkill(skill.id, "name", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  value={skill.level}
                  onChange={e => updateSkill(skill.id, "level", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              <button
                onClick={() => removeSkill(skill.id)}
                className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <FaMinus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default ExperienceSkillsStep; 