import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadButton = ({ onDownload, isFormValid, isGenerating }) => (
  <button
    onClick={onDownload}
    disabled={!isFormValid || isGenerating}
    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
      isFormValid && !isGenerating
        ? "bg-[#076A60] text-white hover:bg-[#05543e] shadow-md hover:shadow-lg"
        : "bg-[#B7D3D1] text-[#617A78] cursor-not-allowed"
    }`}
  >
    <FaDownload className="w-4 h-4" />
    {isGenerating ? "Generating..." : "Download PDF"}
  </button>
);

export default React.memo(DownloadButton); 