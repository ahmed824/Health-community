import React, { useRef, useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { FaUser } from 'react-icons/fa';

export default function ProfileTab() {
  const [form, setForm] = useState({
    name: '',
    email: '',
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
    // Handle profile update logic here
  };



  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow p-8 flex flex-col items-center">
     
      <h2 className="text-2xl font-bold mb-6 text-primary">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <Input
          label="Full Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          error={errors.name}
          icon={<FaUser />}
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          error={errors.email}
          icon={<FaUser />}
        />
        <Input
          label="Phone Number"
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          error={errors.phone}
          icon={<FaUser />}
        />
        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="bg-[#076A60] text-white w-full capitalize mt-4"
        >
          Save Changes
        </Button>
        {submitted && Object.keys(errors).length === 0 && (
          <div className="text-green-600 text-sm mt-2">Profile updated successfully!</div>
        )}
      </form>
    </div>
  );
} 