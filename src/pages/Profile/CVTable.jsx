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
import { VscEye } from "react-icons/vsc";
import { RiEditFill } from "react-icons/ri";

export default function CVTable({
  cvs,
  handleDownload,
  handleView,
  handleEdit,
  isCompact = false,
}) {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-[600px] text-left">
        <TableHeader>
          <TableRow className="text-xs sm:text-sm text-primary font-semibold border-b border-[#E9EDF5]">
            <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
              #
            </TableHead>
            <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
              {isCompact ? "CV Details" : "File Name"}
            </TableHead>
            {!isCompact && (
              <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
                Date Uploaded
              </TableHead>
            )}
            <TableHead
              scope="col"
              className="py-2 sm:py-3 md:pr-6 px-2 sm:px-3 text-right"
            >
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-gray-700 text-xs sm:text-sm">
          {cvs.map((cv, idx) => (
            <TableRow
              key={cv.id}
              className="hover:bg-gray-50/50 transition-colors"
            >
              <TableCell className="py-2 sm:py-3 px-2 sm:px-3 font-medium">
                {idx + 1}
              </TableCell>
              <TableCell className="py-2 sm:py-3 px-2 sm:px-3 whitespace-nowrap">
                {isCompact ? (
                  <div className="space-y-1">
                    <div className="font-medium">{cv.fileName}</div>
                    <div className="text-xs text-[#617A78]">
                      Uploaded: {cv.dateUploaded}
                    </div>
                  </div>
                ) : (
                  cv.fileName
                )}
              </TableCell>
              {!isCompact && (
                <TableCell className="py-2 sm:py-3 px-2 sm:px-3 whitespace-nowrap">
                  {cv.dateUploaded}
                </TableCell>
              )}
              <TableCell className="py-2 sm:py-3 px-2 sm:px-3">
                <div className="flex items-center gap-3 justify-end">
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
                    className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-primary hover:bg-primary/10 transition"
                    data-label="Edit"
                    aria-label={`Edit ${cv.fileName}`}
                  >
                    <RiEditFill className="text-base" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
