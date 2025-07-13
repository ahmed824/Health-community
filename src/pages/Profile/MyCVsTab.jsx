import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../components/ui/table";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { IoDocumentTextSharp } from "react-icons/io5";

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
  return (
    <div className="w-full mx-auto">
      <div className="flex items-center text-primary gap-3 mb-4">
        <IoDocumentTextSharp />
        <h2 className="text-2xl font-semibold ">My CVs</h2>
      </div>
      <div className="bg-white border border-[#B7D3D1] rounded-xl p-6 pb-12">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[#617A78] font-medium">{cvs.length} CVs</p>
          <button
            className={`
              flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full
              transition hover:bg-primary/90
              shadow-[0px_2px_5px_0px_#2264E51F,0px_0px_0px_1px_#2264E5,0px_1px_1px_0px_#00000024,0px_1px_0px_0px_#4B85FA_inset]
            `}
          >
            <p><span className="text-xl">+</span> Create new CV</p>
          </button>
        </div>
        <div className="overflow-x-auto">
          <Table className="min-w-full text-left">
            <TableHeader>
              <TableRow className="text-sm text-primary font-semibold border-b border-[#E9EDF5]">
                <TableHead className="py-2 px-3">#</TableHead>
                <TableHead className="py-2 px-3">File Name</TableHead>
                <TableHead className="py-2 px-3">Date Uploaded</TableHead>
                <TableHead className="py-2 px-3">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700 text-sm">
              {cvs.map((cv, idx) => (
                <TableRow key={cv.id}>
                  <TableCell className="py-3 px-3">{idx + 1}</TableCell>
                  <TableCell className="py-3 px-3 whitespace-nowrap">
                    <p>{cv.fileName}</p>
                  </TableCell>
                  <TableCell className="py-3 px-3 whitespace-nowrap">
                    <p>{cv.dateUploaded}</p>
                  </TableCell>
                  <TableCell className="py-3 px-3">
                    <Link
                      href={cv.url}
                      download
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium  text-primary transition"
                    >
                      <FiDownload className="text-base" />
                      <span>Download</span>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
} 