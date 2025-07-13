import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const PersonalInfoStep = ({ personalInfo, updatePersonalInfo }) => (
  <div>
    <h3 className="text-xl font-medium mb-4 text-gray-700 flex items-center gap-2">
      <FaUserTie className="w-5 h-5 text-indigo-600" />
      Personal Information
    </h3>
    <div className="space-y-4">
      <div className="relative">
        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Full Name"
          value={personalInfo.fullName}
          onChange={e => updatePersonalInfo("fullName", e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
      <div className="relative">
        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="email"
          placeholder="Email Address"
          value={personalInfo.email}
          onChange={e => updatePersonalInfo("email", e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
      <div className="relative">
        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="tel"
          placeholder="Phone Number"
          value={personalInfo.phone}
          onChange={e => updatePersonalInfo("phone", e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
      <div className="relative">
        <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Location"
          value={personalInfo.location}
          onChange={e => updatePersonalInfo("location", e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
      <textarea
        placeholder="Professional Summary"
        value={personalInfo.summary}
        onChange={e => updatePersonalInfo("summary", e.target.value)}
        rows={4}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
      />
    </div>
  </div>
);

export default PersonalInfoStep; 