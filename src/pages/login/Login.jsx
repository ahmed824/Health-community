"use client";
import React from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import LoginForm from "./LoginForm.jsx";
 
export default function Login() {
  return (
    <>
      <BreadCramp
        heading={"Login"}
        paragraph={
          "Fill in your details and let us craft a professional resume just for you"
        }
        image={"login.png"}
      />
      <div className="lg:max-w-1/2 w-full mx-auto my-10  p-6 ">
        <LoginForm />

       
      </div>
    </>
  );
}
