import React from "react";
import { FaPlus, FaMinus, FaCertificate, FaLanguage } from "react-icons/fa";

const LanguagesCertificatesStep = ({
  languages,
  addLanguage,
  updateLanguage,
  removeLanguage,
  certificates,
  addCertificate,
  updateCertificate,
  removeCertificate,
}) => (
  <div>
    {/* Languages Section */}
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
          <FaLanguage className="w-5 h-5 text-blue-600" />
          Languages
        </h3>
        <button
          onClick={addLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#076A60] text-white hover:bg-[#05543e] transition-all duration-200"
        >
          <FaPlus className="w-4 h-4" />
          Add Language
        </button>
      </div>
      {languages.map((lang) => (
        <div
          key={lang.id}
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 space-y-3">
              <input
                type="text"
                placeholder="Language Name (e.g., English)"
                value={lang.name}
                onChange={e => updateLanguage(lang.id, "name", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select
                value={lang.level}
                onChange={e => updateLanguage(lang.id, "level", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Basic">Basic</option>
                <option value="Conversational">Conversational</option>
                <option value="Fluent">Fluent</option>
                <option value="Native">Native</option>
              </select>
            </div>
            <button
              onClick={() => removeLanguage(lang.id)}
              className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
            >
              <FaMinus className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
    {/* Certificates Section */}
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
          <FaCertificate className="w-5 h-5 text-yellow-600" />
          Certificates
        </h3>
        <button
          onClick={addCertificate}
          className="flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#076A60] text-white hover:bg-[#05543e] transition-all duration-200"
        >
          <FaPlus className="w-4 h-4" />
          Add Certificate
        </button>
      </div>
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 space-y-3">
              <input
                type="text"
                placeholder="Certificate Title"
                value={cert.title}
                onChange={e => updateCertificate(cert.id, "title", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Issuer (optional)"
                value={cert.issuer}
                onChange={e => updateCertificate(cert.id, "issuer", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Year (optional)"
                value={cert.year}
                onChange={e => updateCertificate(cert.id, "year", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => removeCertificate(cert.id)}
              className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
            >
              <FaMinus className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LanguagesCertificatesStep; 