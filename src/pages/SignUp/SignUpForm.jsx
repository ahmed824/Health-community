import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
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
        label="Name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your name"
        error={errors.name}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email"
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter your password"
        error={errors.password}
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        error={errors.phone}
      />
      <Button type="submit" className="w-full">Sign Up</Button>
      {submitted && Object.keys(errors).length === 0 && (
        <div className="text-green-600 text-sm mt-2">Thank you for signing up!</div>
      )}
    </form>
  );
} 