import React from "react";
import BagIcon from "../../../components/ui/BagIcon";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../components/ui/table";

const jobs = [
  {
    id: 1,
    location: "Saudiarabia, Al Riyadh",
    organization: "Al Noor Hospital",
    dateApplied: "28 Jun 2025",
    specialty: "Pharmacist Assistant",
    status: "Under Review",
  },
  {
    id: 2,
    location: "Saudiarabia, Al Riyadh",
    organization: "Al Noor Hospital",
    dateApplied: "28 Jun 2025",
    specialty: "Pharmacist Assistant",
    status: "Accepted",
  },
  {
    id: 3,
    location: "Saudiarabia, Al Riyadh",
    organization: "Al Noor Hospital",
    dateApplied: "28 Jun 2025",
    specialty: "Pharmacist Assistant",
    status: "Rejected",
  },
];

const statusStyles = {
  "Under Review": "bg-[#F0F1FA] text-[#4F5AED]",
  Accepted: "bg-[#E1FCEF] text-[#14804A]",
  Rejected: "bg-[#FFF6F3] text-[#C93232]",
};

export default function JobApplicationsHistoryTab() {
  return (
    <div className="w-full mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <BagIcon />
        <h2 className="text-2xl font-semibold text-primary">
          Job Applications History
        </h2>
      </div>
      <div className="bg-white border border-[#B7D3D1] rounded-xl p-6 pb-12">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[#617A78] font-medium">{jobs.length} jobs</p>
          <button
            className={`
              flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full
              transition hover:bg-primary/90
              shadow-[0px_2px_5px_0px_#2264E51F,0px_0px_0px_1px_#2264E5,0px_1px_1px_0px_#00000024,0px_1px_0px_0px_#4B85FA_inset]
            `}
          >
            <p><span className="text-xl">+</span> Apply new job</p>
          </button>
        </div>
        <div className="overflow-x-auto">
          <Table className="min-w-full text-left">
            <TableHeader>
              <TableRow className="text-sm text-primary font-semibold border-b border-[#E9EDF5]">
                <TableHead className="py-2 px-3">#</TableHead>
                <TableHead className="py-2 px-3">Location</TableHead>
                <TableHead className="py-2 px-3">Organization</TableHead>
                <TableHead className="py-2 px-3">Date Applied</TableHead>
                <TableHead className="py-2 px-3">Medical Speciality</TableHead>
                <TableHead className="py-2 px-3">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700 text-sm">
              {jobs.map((job, idx) => (
                <TableRow key={job.id}>
                  <TableCell className="py-3 px-3">{idx + 1}</TableCell>
                  <TableCell className="py-3 px-3 whitespace-nowrap">
                    <p>{job.location}</p>
                  </TableCell>
                  <TableCell className="py-3 px-3 whitespace-nowrap">
                    <p>{job.organization}</p>
                  </TableCell>
                  <TableCell className="py-3 px-3 whitespace-nowrap">
                    <p>{job.dateApplied}</p>
                  </TableCell>
                  <TableCell className="py-3 px-3 whitespace-nowrap">
                    <p>{job.specialty}</p>
                  </TableCell>
                  <TableCell className="py-3 px-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        statusStyles[job.status]
                      }`}
                    >
                      <p>{job.status}</p>
                    </span>
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
