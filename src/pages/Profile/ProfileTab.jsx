"use client";
import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCity,
} from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import BagIcon from "../../../components/ui/BagIcon";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import ProfileForm from "./components/ProfileForm";
import PasswordForm from "./components/PasswordForm";

const countries = [
  { value: "", label: "Select Country" },
  { value: "egypt", label: "Egypt" },
  { value: "ksa", label: "Saudi Arabia" },
  { value: "uae", label: "UAE" },
  { value: "usa", label: "USA" },
  // Add more as needed
];

const cities = [
  { value: "", label: "Select City" },
  { value: "cairo", label: "Cairo" },
  { value: "riyadh", label: "Riyadh" },
  { value: "dubai", label: "Dubai" },
  { value: "newyork", label: "New York" },
  // Add more as needed
];

export default function ProfileTab() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    city: "",
    jobTitle: "",
    nationality: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [createCVLoading, setCreateCVLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.country) newErrors.country = "Country is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.jobTitle) newErrors.jobTitle = "Job title is required";
    // dob and nationality are optional
    return newErrors;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!form.password) newErrors.password = "Password is required";
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    if (
      form.password &&
      form.confirmPassword &&
      form.password !== form.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    // Handle profile update logic here
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePassword();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Handle password update logic here
    setSubmitted(true);
  };

  const handleCancel = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      dob: "",
      country: "",
      city: "",
      jobTitle: "",
      nationality: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  const handleCreateCV = async (e) => {
    e.preventDefault();
    setCreateCVLoading(true);
    // Simulate async action
    await new Promise((res) => setTimeout(res, 1500));
    setCreateCVLoading(false);
    alert("Create CV clicked!");
  };

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <h2 className="text-2xl text-left w-full font-bold mb-6 text-primary">
        <GoPerson className="mr-2 inline-block" /> personal Information
      </h2>
      <ProfileForm
        form={form}
        errors={errors}
        handleChange={handleChange}
        handleCreateCV={handleCreateCV}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
        createCVLoading={createCVLoading}
        countries={countries}
        cities={cities}
        submitted={submitted}
      />
      <div className="w-full border-t my-10 border-[#B7D3D1]"></div>
      <h3 className="text-xl text-left w-full font-semibold mb-4 text-primary">
        Change Password
      </h3>
      <PasswordForm
        form={form}
        errors={errors}
        handleChange={handleChange}
        handlePasswordSubmit={handlePasswordSubmit}
        handleCancel={handleCancel}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
        submitted={submitted}
      />
    </div>
  );
}
