"use client";
import React from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <>
      <BreadCramp
        heading={"Sign Up"}
        paragraph={
          "Fill in your details and let us craft a professional resume just for you"
        }
        image={"login.png"}
      />
      <div className="max-w-1/2 mx-auto my-10 pb-28 p-6 ">
        <SignUpForm />
      </div>
    </>
  );
}
