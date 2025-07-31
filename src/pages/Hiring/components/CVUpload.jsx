import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

export default function CVUpload({ cvFileName, fileInputRef, handleChange, handleRemoveCV }) {
  return (
    <div className="md:col-span-2">
      <label className="block text-[16px] font-medium mb-1 text-[#617A78]">
        Upload your CV (pdf, png, jpg)
      </label>
      <div className="w-full rounded-xl bg-[#E6F0EF80] flex flex-col items-center justify-center p-8 transition-all">
        <div
          onClick={() => fileInputRef.current?.click()}
          tabIndex={0}
          role="button"
          aria-label="Upload your CV"
          className="flex flex-col items-center justify-center w-full h-full px-10 py-12 rounded-xl cursor-pointer border border-dashed border-[#076A6099] bg-[#E6F0EF80] relative "
        >
          {cvFileName ? (
            <div className="relative flex flex-col items-center">
              <IoDocumentText className="w-14 h-14 text-[#617A78] z-0" />
              <span className="text-sm text-[#617A78] font-medium mt-4">
                {cvFileName}
              </span>
              <button
                type="button"
                className="absolute top-0 right-0 bg-white rounded-full p-1 shadow hover:bg-red-100 transition"
                onClick={handleRemoveCV}
                aria-label="Remove CV"
              >
                <FaTrash className="text-red-500 w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <IoDocumentText className="w-14 h-14 text-[#617A78] z-0" />
              <span className="text-sm text-[#617A78] font-medium mt-6">
                support pdf, png, jpg
              </span>
            </>
          )}
          <input
            ref={fileInputRef}
            type="file"
            name="cv"
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            onChange={handleChange}
          />
        </div>
        <span className="mt-5 text-[16px] text-[#617A78]">
          No CV? No problem — we’ll help you create one.{' '}
          <Link
            href="/create-cv"
            className="text-primary hover:underline font-bold"
          >
            Start now
          </Link>
        </span>
      </div>
    </div>
  );
} 