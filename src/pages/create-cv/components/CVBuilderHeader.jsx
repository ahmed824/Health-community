"use client";
import React from "react";
import dynamic from "next/dynamic";

const BreadCramp = dynamic(
  () => import("../../../components/layout/BreadCramp"),
  { ssr: false }
);

const CVBuilderHeader = () => {
  return (
    <>
      <BreadCramp
        heading={"Resume Writing"}
        paragraph={
          "Fill in your details and let us craft a professional resume just for you"
        }
        image={"resume.png"}
        imageClass={"bottom-5 right-40"}
      />
      <div className="container">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Fill in this information to create your CV
        </h1>
      </div>
    </>
  );
};

export default CVBuilderHeader; 