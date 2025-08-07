import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import CVTable from "./CVTable";
import CVCard from "./CVCard";

const cvs = [
  {
    id: 1,
    fileName: "Pharmacist_CV.pdf",
    dateUploaded: "15 May 2025",
    url: "/cvs/Pharmacist_CV.pdf",
  },
  {
    id: 2,
    fileName: "Assistant_CV.pdf",
    dateUploaded: "10 Apr 2025",
    url: "/cvs/Assistant_CV.pdf",
  },
  {
    id: 3,
    fileName: "Researcher_CV.pdf",
    dateUploaded: "22 Feb 2025",
    url: "/cvs/Researcher_CV.pdf",
  },
];

export default function MyCVsTab() {
  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (url) => {
    window.open(url, "_blank");
  };

  const handleEdit = (id) => {
    console.log(`Edit CV with id: ${id}`);
    // Example: router.push(`/edit-cv/${id}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex items-center text-primary gap-3 mb-4">
        <IoDocumentTextSharp className="text-2xl sm:text-3xl" />
        <h2 className="text-xl sm:text-2xl font-semibold">My CVs</h2>
      </div>
      <div className="bg-white border border-[#B7D3D1] rounded-xl p-4 sm:p-6 pb-8 sm:pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <p className="text-[#617A78] font-medium text-sm sm:text-base">
            {cvs.length} CVs
          </p>
          <button
            className="flex items-center cursor-pointer justify-center gap-2 bg-primary text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition hover:bg-primary/90 shadow-[0px_2px_5px_0px_#2264E51F,0px_0px_0px_1px_#2264E5,0px_1px_1px_0px_#00000024,0px_1px_0px_0px_#4B85FA_inset] text-sm sm:text-base"
            aria-label="Create a new CV"
          >
            <span className="text-lg sm:text-xl">+</span>
            <span className="inline">Create new CV</span>
          </button>
        </div>
        <div className="hidden md:block">
          <CVTable cvs={cvs} handleDownload={handleDownload} handleView={handleView} handleEdit={handleEdit} />
        </div>
        <div className="md:hidden space-y-4">
          {cvs.map((cv, idx) => (
            <CVCard
              key={cv.id}
              cv={cv}
              index={idx}
              handleDownload={handleDownload}
              handleView={handleView}
              handleEdit={handleEdit}
            />
          ))}
        </div>
        {cvs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <IoDocumentTextSharp className="mx-auto text-4xl" />
            </div>
            <p className="text-gray-500 mb-2">No CVs found</p>
            <p className="text-sm text-gray-400">
              Start creating CVs to see them here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}