"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { doctors } from "@/lib/jobsData";
import JobPage from "../../../pages/Jobs/JobPage";

export default function JobPageContainer() {
  const params = useParams();
  const [doctor, setDoctor] = useState(null);
  const [otherJobs, setOtherJobs] = useState([]);

  useEffect(() => {
    const foundDoctor = doctors.find(
      (d) => d.link.split("/").pop() === params.slug
    );
    setDoctor(foundDoctor || null);
    setOtherJobs(
      doctors.filter((d) => foundDoctor && d.link !== foundDoctor.link).slice(0, 10)
    );
  }, [params.slug]);

  return <JobPage doctor={doctor} otherJobs={otherJobs} />;
}
