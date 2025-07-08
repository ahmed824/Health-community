import React, { useState } from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
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
    if (!form.phone) newErrors.phone = "Phone is required";
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
    // Handle form submission (API call, etc.)
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <Input
        label="Full name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Demo name"
        error={errors.name}
        icon={<FaUser />}
      />
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
      <Input
        label="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="••••••••"
        error={errors.confirmPassword}
        icon={<IoIosUnlock />}
        rightIcon={showConfirmPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
        onRightIconClick={() => setShowConfirmPassword((prev) => !prev)}
      />
      <Button
        type="submit"
        variant="outline"
        size="lg"
        className="bg-[#076A60] cursor-pointer text-white w-full capitalize transition hover:shadow-lg"
      >
        <p>sign up </p>
      </Button>
      {submitted && Object.keys(errors).length === 0 && (
        <div className="text-green-600 text-sm mt-2">
          Thank you for signing up!
        </div>
      )}
    </form>
  );
}
