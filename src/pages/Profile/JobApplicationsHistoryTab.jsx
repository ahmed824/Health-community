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
  },
  {
    id: 2,
    location: "Saudiarabia, Al Riyadh",
    organization: "Al Noor Hospital",
    dateApplied: "28 Jun 2025",
    specialty: "Pharmacist Assistant",
  },
  {
    id: 3,
    location: "Saudiarabia, Al Riyadh",
    organization: "Al Noor Hospital",
    dateApplied: "28 Jun 2025",
    specialty: "Pharmacist Assistant",
  },
];

export default function JobApplicationsHistoryTab() {
  const JobCard = ({ job, index }) => (
    <div className="bg-white border border-[#E9EDF5] rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className="bg-gray-100 text-gray-600 text-sm font-medium px-2 py-1 rounded-full">
          #{index + 1}
        </span>
      </div>
      <div className="space-y-3">
        <div>
          <p className="font-medium text-gray-900">{job.organization}</p>
          <p className="text-sm text-[#617A78]">{job.specialty}</p>
        </div>
        <p className="text-sm text-gray-700">{job.location}</p>
        <p className="text-sm text-gray-700">Applied: {job.dateApplied}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <div className="flex items-center gap-3">
          <BagIcon />
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            Job Applications History
          </h2>
        </div>
      </div>
      <div className="bg-white border border-[#B7D3D1] rounded-xl p-4 sm:p-6 pb-8 sm:pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <p className="text-[#617A78] font-medium text-sm sm:text-base">
            {jobs.length} jobs
          </p>
          <button
            className="flex items-center justify-center gap-2 bg-primary text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition hover:bg-primary/90 shadow-[0px_2px_5px_0px_#2264E51F,0px_0px_0px_1px_#2264E5,0px_1px_1px_0px_#00000024,0px_1px_0px_0px_#4B85FA_inset] text-sm sm:text-base"
            aria-label="Apply for a new job"
          >
            <span className="text-lg sm:text-xl">+</span>
            <span className="inline">Apply new job</span>
            {/* <span className="xs:hidden">Apply</span> */}
          </button>
        </div>
        <div className="hidden lg:block overflow-x-auto">
          <Table className="min-w-[600px] text-left">
            <TableHeader>
              <TableRow className="text-xs sm:text-sm md:text-base text-primary font-semibold border-b border-[#E9EDF5]">
                <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
                  #
                </TableHead>
                <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
                  Location
                </TableHead>
                <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
                  Organization
                </TableHead>
                <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
                  Date Applied
                </TableHead>
                <TableHead scope="col" className="py-2 text-right sm:py-3 px-2 sm:px-3">
                  Medical Speciality
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700 text-xs sm:text-sm">
              {jobs.map((job, idx) => (
                <TableRow key={job.id} className="hover:bg-gray-50/50 transition-colors">
                  <TableCell className="py-2 sm:py-3 px-2 sm:px-3 font-medium">
                    {idx + 1}
                  </TableCell>
                  <TableCell className="py-2 sm:py-3 px-2 sm:px-3 whitespace-nowrap">
                    {job.location}
                  </TableCell>
                  <TableCell className="py-2 sm:py-3 px-2 sm:px-3 whitespace-nowrap">
                    {job.organization}
                  </TableCell>
                  <TableCell className="py-2 sm:py-3 px-2 sm:px-3 whitespace-nowrap">
                    {job.dateApplied}
                  </TableCell>
                  <TableCell className="py-2 text-right sm:py-3 px-2 sm:px-3 whitespace-nowrap">
                    {job.specialty}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="hidden md:block lg:hidden overflow-x-auto">
          <Table className="min-w-[600px] text-left">
            <TableHeader>
              <TableRow className="text-xs sm:text-sm text-primary font-semibold border-b border-[#E9EDF5]">
                <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
                  #
                </TableHead>
                <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
                  Job Details
                </TableHead>
                <TableHead scope="col" className="py-2 sm:py-3 px-2 sm:px-3">
                  Date Applied
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-700 text-xs sm:text-sm">
              {jobs.map((job, idx) => (
                <TableRow key={job.id} className="hover:bg-gray-50/50 transition-colors">
                  <TableCell className="py-2 sm:py-3 px-2 sm:px-3 font-medium">
                    {idx + 1}
                  </TableCell>
                  <TableCell className="py-2 sm:py-3 px-2 sm:px-3">
                    <div className="space-y-1">
                      <div className="font-medium">{job.organization}</div>
                      <div className="text-xs text-[#617A78]">{job.specialty}</div>
                      <div className="text-xs text-[#617A78]">{job.location}</div>
                    </div>
                  </TableCell>
                  <TableCell className="py-2 sm:py-3 px-2 sm:px-3 whitespace-nowrap">
                    {job.dateApplied}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="md:hidden space-y-4">
          {jobs.map((job, idx) => (
            <JobCard key={job.id} job={job} index={idx} />
          ))}
        </div>
        {jobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BagIcon className="mx-auto text-4xl" />
            </div>
            <p className="text-gray-500 mb-2">No job applications found</p>
            <p className="text-sm text-gray-400">
              Start applying for jobs to see them here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}