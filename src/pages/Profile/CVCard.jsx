import React from "react";
import { FiDownload } from "react-icons/fi";
import { VscEye } from "react-icons/vsc";
import { RiEditFill } from "react-icons/ri";

export default function CVCard({
  cv,
  index,
  handleDownload,
  handleView,
  handleEdit,
}) {
  return (
    <div className="bg-white border border-[#E9EDF5] rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className="bg-gray-100 text-gray-600 text-sm font-medium px-2 py-1 rounded-full">
          #{index + 1}
        </span>
      </div>
      <div className="space-y-3">
        <div>
          <p className="font-medium text-gray-900">{cv.fileName}</p>
          <p className="text-sm text-[#617A78]">Uploaded: {cv.dateUploaded}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDownload(cv.url, cv.fileName)}
            className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-primary hover:bg-primary/10 transition"
            data-label="Download"
            aria-label={`Download ${cv.fileName}`}
          >
            <FiDownload className="text-base" />
          </button>
          <button
            onClick={() => handleView(cv.url)}
            className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-primary hover:bg-primary/10 transition"
            data-label="View"
            aria-label={`View ${cv.fileName}`}
          >
            <VscEye className="text-base" />
          </button>
          <button
            onClick={() => handleEdit(cv.id)}
            className="inline-flex -scale-x-100 items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-primary hover:bg-primary/10 transition"
            data-label="Edit"
            aria-label={`Edit ${cv.fileName}`}
          >
            <RiEditFill className="text-base" />
          </button>
        </div>
      </div>
    </div>
  );
}
