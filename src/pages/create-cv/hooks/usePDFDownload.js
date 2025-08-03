"use client";
import { useState } from "react";

export const usePDFDownload = (cvRef, cvData) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    if (!cvRef.current) return;
    setIsGenerating(true);
    cvRef.current.classList.add("pdf-exporting");
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = cvRef.current;
      const opt = {
        margin: 0.2,
        filename: `${cvData.personalInfo.fullName || "CV"}_Resume.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 1,
          useCORS: true,
          letterRendering: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      };
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      cvRef.current.classList.remove("pdf-exporting");
      setIsGenerating(false);
    }
  };

  return {
    isGenerating,
    downloadPDF,
  };
}; 