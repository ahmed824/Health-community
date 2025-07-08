"use client";
import React from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import SignUpForm from "./components/SignUpForm";
import Link from "next/link";

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
      <div className="max-w-1/2 mx-auto my-10  p-6 ">
        <SignUpForm />

        <Link
          href="/login"
          className="text-primary text-sm block w-fit m-auto text-center mt-4 transition-all duration-200 ease hover:text-[#617A78] "
        >
          Already have an account?
        </Link>
      </div>
    </>
  );
}
