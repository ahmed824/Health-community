import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { FaEnvelope } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Link from "next/link";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    // Handle login submission (API call, etc.)
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <Input
        label="Email address"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="yourname@email.com"
        error={errors.email}
        icon={<FaEnvelope />}
      />
      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="••••••••"
        error={errors.password}
        icon={<IoIosUnlock />}
        rightIcon={showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
        onRightIconClick={() => setShowPassword((prev) => !prev)}
      />
      <div className="flex flex-col sm:flex-row-reverse justify-between items-center my-5 gap-2">
        <Link
          href="/forgot-password"
          className="text-primary text-sm transition-all duration-200 hover:text-[#617A78]"
        >
          Forgot password?
        </Link>
        <div className="text-sm">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-primary transition-all duration-200 hover:text-[#617A78]"
          >
            Create one
          </Link>
        </div>
      </div>
      <Button
        type="submit"
        variant="outline"
        size="lg"
        className="bg-[#076A60] cursor-pointer text-white w-full capitalize transition hover:shadow-lg"
      >
        <p>Log in</p>
      </Button>
      {submitted && Object.keys(errors).length === 0 && (
        <div className="text-green-600 text-sm mt-2">Welcome back!</div>
      )}
    </form>
  );
}
