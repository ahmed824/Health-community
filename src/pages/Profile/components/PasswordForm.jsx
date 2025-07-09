import React from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import { IoIosUnlock } from "react-icons/io";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

export default function PasswordForm({
  form,
  errors,
  handleChange,
  handlePasswordSubmit,
  handleCancel,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  submitted,
}) {
  return (
    <form onSubmit={handlePasswordSubmit} className="space-y-4 w-full ">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full">
          <Input
            label="current password"
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
        </div>
        <div className="w-full">
          <Input
            label="New password"
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
        </div>
      </div>
      <div className="flex gap-4 justify-end mt-6">
        <Button
          type="button"
          variant="ghost"
          size="lg"
          className="w-40 capitalize border-none border-[#B7D3D1] text-primary bg-white hover:bg-[#F3F7F7]"
          onClick={handleCancel}
        >
          <p>Cancel</p>
        </Button>
        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="bg-[#076A60] text-white w-40 capitalize "
        >
          <p>update</p>
        </Button>
      </div>
      {submitted &&
        !errors.password &&
        !errors.confirmPassword &&
        form.password &&
        form.confirmPassword && (
          <div className="text-green-600 text-sm mt-2">
            Password updated successfully!
          </div>
        )}
    </form>
  );
}
