import React from "react";
import Input from "../../../../components/ui/Input";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";

export default function PersonalInfoForm({ form, handleChange }) {
  return (
    <>
      <Input
        label="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        icon={<FaUser />}
        required
      />
      <Input
        label="Email Address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        icon={<FaEnvelope />}
        required
      />
      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        icon={<FaPhone />}
        required
      />
      <Input
        label="Date of Birth (optional)"
        name="dob"
        type="date"
        value={form.dob}
        onChange={handleChange}
        placeholder="Date of Birth"
        icon={<FaCalendarAlt />}
      />
    </>
  );
} 