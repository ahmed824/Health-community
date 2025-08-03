"use client";
import React from "react";
import { FaCode, FaDownload, FaSpinner } from "react-icons/fa";
import dynamic from "next/dynamic";
import { isFormValid } from "./cvUtils";

const CVPreview = dynamic(() => import("./CVPreview"), {
  ssr: false,
});

const CVPreviewSection = ({
  cvData,
  cvRef,
  downloadPDF,
  isGenerating,
}) => {
  return (
    <div className="bg-white rounded-xl w-full shadow-xl border border-gray-100 h-fit">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaCode className="w-6 h-6 text-primary" />
          CV Preview
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={downloadPDF}
            disabled={!isFormValid(cvData) || isGenerating}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? (
              <FaSpinner className="w-4 h-4 animate-spin" />
            ) : (
              <FaDownload className="w-4 h-4" />
            )}
            {isGenerating ? "Generating..." : "Download PDF"}
          </button>
        </div>
      </div>
      <div className="p-0">
        <div>
          <CVPreview
            cvData={cvData}
            isFormValid={isFormValid(cvData)}
            cvRef={cvRef}
          />
        </div>
      </div>
    </div>
  );
};

export default CVPreviewSection; 