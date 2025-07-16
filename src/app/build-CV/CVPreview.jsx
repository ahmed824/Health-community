import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import ImagePreviewModal from "./ImagePreviewModal";

const CVPreview = ({
  cvData,
  formatExperienceDuration,
  formatEducationDuration,
  isFormValid,
  cvRef,
}) => {
  return (
    <div className="relative">
      {/* CV Content */}
      <div
        ref={cvRef}
        className="bg-white p-4 rounded-lg min-h-[800px] print:border-0 print:shadow-none font-sans text-black"
        style={{
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Empty State */}
        {!isFormValid && (
          <section className="text-center py-10">
            <div className="mb-2">
              <h3 className="text-base font-medium mb-1 text-[#323332]">
                Start Building Your CV
              </h3>
              <p className="text-xs text-[#323332]">
                Fill in your information on the left to see your CV preview here
              </p>
            </div>
          </section>
        )}
        {/* Header */}
        {isFormValid && (
          <>
            <header className="flex cv-header flex-col sm:flex-row items-start sm:items-center mb-4 pb-2 border-b-2 gap-4 border-[#323332]">
              {/* Profile Photo */}
              {cvData.personalInfo.photoPreview && (
                <Image
                  src={cvData.personalInfo.photoPreview}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover w-24 h-24 rounded-full border-2 border-gray-300 shadow mr-4 mb-2 sm:mb-0 bg-white"
                  unoptimized
                />
              )}
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-1 text-black">
                  {cvData.personalInfo.fullName || "Your Name"}
                </h1>
                {cvData.personalInfo.jobTitle && (
                  <div className="text-lg font-semibold text-[#323332] mb-1">
                    {cvData.personalInfo.jobTitle}
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-2 text-xs mb-1 text-[#323332]">
                  {cvData.personalInfo.email && (
                    <span>{cvData.personalInfo.email}</span>
                  )}
                  {cvData.personalInfo.email && cvData.personalInfo.phone && (
                    <span>|</span>
                  )}
                  {cvData.personalInfo.phone && (
                    <span>{cvData.personalInfo.phone}</span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs mb-1 text-[#323332]">
                  {/* Country, City, Nationality, DOB */}
                  {cvData.personalInfo.country && (
                    <span>
                      {cvData.personalInfo.country.charAt(0).toUpperCase() +
                        cvData.personalInfo.country.slice(1)}
                    </span>
                  )}
                  {cvData.personalInfo.city && (
                    <span>
                      {cvData.personalInfo.city.charAt(0).toUpperCase() +
                        cvData.personalInfo.city.slice(1)}
                    </span>
                  )}
                  {cvData.personalInfo.nationality && (
                    <span>Nationality: {cvData.personalInfo.nationality}</span>
                  )}
                  {cvData.personalInfo.dob && (
                    <span>DOB: {cvData.personalInfo.dob}</span>
                  )}
                </div>
                {/* Social Links */}
                {cvData.personalInfo.socialLinks &&
                  cvData.personalInfo.socialLinks.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      {cvData.personalInfo.socialLinks
                        .filter((link) => link.type && link.url)
                        .map((link, idx) => {
                          let icon = null;
                          switch (link.type) {
                            case "linkedin":
                              icon = (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="#0A66C2"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
                                </svg>
                              );
                              break;
                            case "github":
                              icon = (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="#000"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.587 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                              );
                              break;
                            case "facebook":
                              icon = (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="#1877F3"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.322-.593 1.322-1.326v-21.349c0-.733-.592-1.325-1.325-1.325z" />
                                </svg>
                              );
                              break;
                            case "twitter":
                              icon = (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="#1DA1F2"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 4.188 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-2.07 1.623-4.678 2.348-7.29 2.034 2.179 1.397 4.768 2.212 7.557 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.689 1.797-1.56 2.457-2.549z" />
                                </svg>
                              );
                              break;
                            case "instagram":
                              icon = (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="#E4405F"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.28.058 1.688.07 4.947.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>
                              );
                              break;
                            case "website":
                              icon = (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="#617A78"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" />
                                </svg>
                              );
                              break;
                            default:
                              icon = (
                                <svg
                                  width="18"
                                  height="18"
                                  fill="#617A78"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                </svg>
                              );
                          }
                          return (
                            <Link
                              key={link.type + idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 hover:underline text-xs text-[#076A60]"
                            >
                              {icon}
                              <span className="sr-only">{link.type}</span>
                            </Link>
                          );
                        })}
                    </div>
                  )}
              </div>
            </header>

            {/* Work Experience */}
            {cvData.experience && cvData.experience.length > 0 && (
              <section className="mb-3">
                <h2 className="text-lg font-bold mb-1 border-b pb-1 text-black border-[#323332]">
                  <span>Work Experience </span>
                </h2>
                <ul>
                  {cvData.experience.map((exp, index) => (
                    <li
                      key={exp.id}
                      className={`mb-2 ${
                        index < cvData.experience.length - 1
                          ? "pb-2 border-b border-[#323332]"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h3 className="text-base font-bold text-black">
                            {exp.jobTitle || "Job Title"}
                          </h3>
                          <p className="text-sm font-semibold text-[#323332]">
                            {exp.company || "Company Name"}
                            {(exp.country || exp.city) && (
                              <span className="ml-2 text-xs font-normal text-[#323332]">
                                {exp.country &&
                                  exp.country.charAt(0).toUpperCase() +
                                    exp.country.slice(1)}
                                {exp.country && exp.city ? ", " : ""}
                                {exp.city &&
                                  exp.city.charAt(0).toUpperCase() +
                                    exp.city.slice(1)}
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="text-xs font-medium bg-white px-2 py-0.5 rounded-full text-[#323332] border border-[#323332]">
                          {formatExperienceDuration(exp) || "Duration"}
                        </div>
                      </div>
                      {exp.description && (
                        <p className="leading-tight text-justify text-xs text-[#323332]">
                          {exp.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Education */}
            {cvData.education && cvData.education.length > 0 && (
              <section className="mb-3">
                <h2 className="text-lg font-bold mb-1 border-b pb-1 text-black border-[#323332]">
                  <span>Education</span>
                </h2>
                <ul>
                  {cvData.education.map((edu, index) => (
                    <li
                      key={edu.id}
                      className={`mb-2 ${
                        index < cvData.education.length - 1
                          ? "pb-2 border-b border-[#323332]"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h3 className="text-base font-bold text-black">
                            {edu.degree || "Degree"}
                          </h3>
                          <p className="text-sm font-semibold text-[#323332]">
                            {edu.university || "University"}
                            {(edu.country || edu.city) && (
                              <span className="ml-2 text-xs font-normal text-[#323332]">
                                {edu.country &&
                                  edu.country.charAt(0).toUpperCase() +
                                    edu.country.slice(1)}
                                {edu.country && edu.city ? ", " : ""}
                                {edu.city &&
                                  edu.city.charAt(0).toUpperCase() +
                                    edu.city.slice(1)}
                              </span>
                            )}
                          </p>
                        </div>
                        <span className="text-xs font-medium bg-white px-2 py-0.5 rounded-full text-[#323332] border border-[#323332]">
                          {formatEducationDuration(edu) || "Duration"}
                        </span>
                      </div>
                      {edu.description && (
                        <p className="leading-tight text-justify text-xs text-[#323332]">
                          {edu.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Skills */}
            {cvData.skills && cvData.skills.length > 0 && (
              <section className="mb-3">
                <h2 className="text-lg font-bold mb-1 border-b pb-1 text-black border-[#323332]">
                  <span>Technical Skills</span>
                </h2>
                <ul className="grid grid-cols-1 gap-1">
                  {cvData.skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="font-semibold min-w-[100px] text-xs text-black">
                        {skill.name || "Skill Name"}
                      </span>

                      <span className="text-xs font-medium min-w-[60px] text-right text-[#323332]">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Languages */}
            {cvData.languages && cvData.languages.length > 0 && (
              <section className="mb-3">
                <h2 className="text-lg font-bold mb-1 border-b pb-1 text-black border-[#323332]">
                  <span>Languages</span>
                </h2>
                <ul className="grid grid-cols-1 gap-1">
                  {cvData.languages.map((lang) => (
                    <li
                      key={lang.id}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="font-semibold min-w-[100px] text-xs text-black">
                        {lang.name || "Language Name"}
                      </span>

                      <span className="text-xs font-medium min-w-[60px] text-right text-[#323332]">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Certificates */}
            {cvData.certificates && cvData.certificates.length > 0 && (
              <section className="mb-3">
                <h2 className="text-lg font-bold mb-1 border-b pb-1 text-black border-[#323332]">
                  <span>Certificates</span>
                </h2>
                <ul className="grid grid-cols-1 gap-1">
                  {cvData.certificates.map((cert, idx) => (
                    <li key={cert.id} className="flex items-center gap-2">
                      <span className="font-semibold min-w-[100px] text-xs text-black">
                        {cert.title || "Certificate Title"}
                      </span>
                      {/* Link type */}
                      {cert.type !== "file" && cert.link && (
                        <Link
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 underline ml-2 flex items-center gap-1"
                        >
                          <FaExternalLinkAlt className="inline w-3 h-3" />
                        </Link>
                      )}
                      {/* File type */}
                      {cert.type === "file" &&
                        cert.filePreview &&
                        (cert.file && cert.file.type === "application/pdf" ? (
                          <Link
                            href={cert.filePreview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 underline ml-2 flex items-center gap-1"
                          >
                            PDF Preview
                          </Link>
                        ) : cert.file && cert.file.type.startsWith("image/") ? (
                          <ImagePreviewModal filePreview={cert.filePreview} />
                        ) : null)}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(CVPreview);
