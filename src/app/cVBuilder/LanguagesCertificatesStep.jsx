import React from "react";
import { FaPlus, FaMinus, FaCertificate, FaLanguage, FaUser, FaLink } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Input from "../../../components/ui/Input";
import { Select } from "../../../components/ui/Select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaTrash } from "react-icons/fa";

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
    <div className="mb-8 pb-8 border-b border-[#B7D3D1] ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
          <FaLanguage className="w-5 h-5 text-primary" />
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
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 transition-colors"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 space-y-3">
              <Input
                type="text"
                placeholder="Language Name (e.g., English)"
                value={lang.name}
                onChange={e => updateLanguage(lang.id, "name", e.target.value)}
                name={`languageName-${lang.id}`}
                icon={<FaLanguage className="w-4 h-4 text-[#617A78]" />}
              />
              <Select
                value={lang.level}
                onValueChange={val => updateLanguage(lang.id, "level", val)}
                options={[
                  { value: "Basic", label: "Basic" },
                  { value: "Conversational", label: "Conversational" },
                  { value: "Fluent", label: "Fluent" },
                  { value: "Native", label: "Native" },
                ]}
                placeholder="Select Level"
                name={`languageLevel-${lang.id}`}
                icon={<FaUser className="w-4 h-4 text-[#617A78]" />}
              />
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
          <FaCertificate className="w-5 h-5 text-primary" />
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
          className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 transition-colors"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 space-y-3">
              <Input
                type="text"
                placeholder="Certificate Title"
                value={cert.title}
                onChange={e => updateCertificate(cert.id, "title", e.target.value)}
                name={`certificateTitle-${cert.id}`}
                icon={<FaCertificate className="w-4 h-4 text-[#617A78]" />}
              />
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="radio"
                    name={`certType-${cert.id}`}
                    checked={cert.type !== "file"}
                    onChange={() => updateCertificate(cert.id, "type", "link")}
                    className="accent-[#076A60] w-4 h-4 border-2 border-[#076A60] focus:ring-2 focus:ring-[#076A60]"
                  />
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${cert.type !== "file" ? 'bg-[#E6F0EF] text-[#076A60]' : 'bg-gray-100 text-gray-500'}`}>Link</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="radio"
                    name={`certType-${cert.id}`}
                    checked={cert.type === "file"}
                    onChange={() => updateCertificate(cert.id, "type", "file")}
                    className="accent-[#076A60] w-4 h-4 border-2 border-[#076A60] focus:ring-2 focus:ring-[#076A60]"
                  />
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${cert.type === "file" ? 'bg-[#E6F0EF] text-[#076A60]' : 'bg-gray-100 text-gray-500'}`}>File</span>
                </label>
              </div>
              {cert.type === "file" ? (
                <div className="w-full flex flex-col items-center mb-2">
                  <span className="text-[15px] text-primary text-start w-full my-1">Upload Certificate File</span>
                  <div
                    className="w-full rounded-xl bg-[#E6F0EF80] flex flex-col items-center justify-center p-6 cursor-pointer transition-all border border-dashed border-[#076A6099]"
                    onClick={() => document.getElementById(`certFileInput-${cert.id}`)?.click()}
                    tabIndex={0}
                    role="button"
                    aria-label="Upload certificate file"
                  >
                    <div className="flex flex-col items-center justify-center w-full h-full px-6 py-8 rounded-xl bg-[#E6F0EF80] relative mb-2">
                      {cert.filePreview ? (
                        <div className="relative flex flex-col items-center w-full">
                          <div className="flex items-center gap-2 w-full justify-center">
                            <IoDocumentText className="w-12 h-12 text-[#617A78] z-0 mb-2" />
                            <span className="text-sm font-medium text-[#076A60] truncate max-w-[120px]">{cert.file?.name || "File uploaded"}</span>
                            <button
                              type="button"
                              className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition-colors"
                              onClick={e => { e.stopPropagation(); updateCertificate(cert.id, "file", null); updateCertificate(cert.id, "filePreview", null); }}
                              aria-label="Remove file"
                            >
                              <FaTrash className="w-4 h-4" />
                            </button>
                          </div>
                          {cert.file && cert.file.type === "application/pdf" && (
                            <button
                              type="button"
                              className="text-xs text-blue-600 underline mt-2"
                              onClick={e => {
                                e.stopPropagation();
                                const pdfUrl = cert.filePreview || (cert.file ? URL.createObjectURL(cert.file) : undefined);
                                if (pdfUrl) {
                                  const win = window.open(pdfUrl, "_blank");
                                  setTimeout(() => {
                                    try { URL.revokeObjectURL(pdfUrl); } catch {}
                                  }, 5000);
                                }
                              }}
                            >
                              Preview PDF
                            </button>
                          )}
                          {cert.file && cert.file.type.startsWith("image/") && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button
                                  type="button"
                                  className="text-xs text-blue-600 underline mt-2"
                                  onClick={e => e.stopPropagation()}
                                >
                                  Preview Image
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-xl">
                                <img src={cert.filePreview} alt="Certificate Preview" className="w-full h-auto rounded" />
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                      ) : (
                        <>
                          <IoDocumentText className="w-14 h-14 text-[#617A78] z-0" />
                          <span className="text-sm text-[#617A78] font-medium mt-2">No file uploaded</span>
                        </>
                      )}
                      <input
                        id={`certFileInput-${cert.id}`}
                        type="file"
                        accept=".pdf,image/png,image/jpeg,image/jpg"
                        className="hidden"
                        onChange={async (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            let filePreview;
                            if (file.type === "application/pdf") {
                              filePreview = URL.createObjectURL(file);
                            } else {
                              const reader = new FileReader();
                              reader.onload = (ev) => {
                                updateCertificate(cert.id, "file", file);
                                updateCertificate(cert.id, "filePreview", ev.target.result);
                              };
                              reader.readAsDataURL(file);
                              return;
                            }
                            updateCertificate(cert.id, "file", file);
                            updateCertificate(cert.id, "filePreview", filePreview);
                          }
                        }}
                      />
                      <span className="text-sm text-[#617A78] font-medium mt-4">support pdf, png, jpg</span>
                    </div>
                  </div>
                </div>
              ) : (
                <Input
                  type="text"
                  placeholder="Certificate Link (optional)"
                  value={cert.link || ""}
                  onChange={e => updateCertificate(cert.id, "link", e.target.value)}
                  name={`certificateLink-${cert.id}`}
                  icon={<FaLink className="w-4 h-4 text-[#617A78]" />}
                />
              )}
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