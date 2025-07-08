"use client";
import React, { useRef, useState } from "react";
import { FaUser, FaHistory, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import ProfileTab from "./ProfileTab";
import JobApplicationsHistoryTab from "./JobApplicationsHistoryTab";
import MyCVsTab from "./MyCVsTab";

const sidebarLinks = [
  { key: "profile", label: "Profile", icon: <FiUser /> },
  { key: "history", label: "Job Applications History", icon: <FaHistory /> },
  { key: "cvs", label: "My CVs", icon: <FaFileAlt /> },
  { key: "signout", label: "Sign Out", icon: <FaSignOutAlt /> },
];

export default function Profile() {
  const [active, setActive] = useState("profile");
  const [avatar, setAvatar] = useState("/images/cartoon/cartoon1.png");
  const [avatarFile, setAvatarFile] = useState(null);
  const fileInputRef = useRef();

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatar(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-[70vh] bg-[#F3F7F7] rounded-2xl shadow-lg overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-8 flex flex-col items-center border-r border-[#E5E7EB]">
        <div className="relative mb-6">
          <img
            src={avatar}
            alt="Profile Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow cursor-pointer hover:opacity-80 transition"
            onClick={handleAvatarClick}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleAvatarChange}
          />
          <div
            className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 text-xs cursor-pointer"
            onClick={handleAvatarClick}
            title="Change avatar"
          >
            Edit
          </div>
        </div>
        <div className="w-full mt-4">
          {sidebarLinks.map((link) => (
            <button
              key={link.key}
              className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg transition-colors text-left text-[#617A78] hover:bg-[#F3F7F7] hover:text-primary font-medium text-lg ${
                active === link.key ? "bg-[#F3F7F7] text-primary" : ""
              }`}
              onClick={() => {
                if (link.key === "signout") {
                  // Handle sign out logic here
                  return;
                }
                setActive(link.key);
              }}
            >
              <span className="mr-3 text-xl">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 flex flex-col items-center justify-center">
        {active === "profile" && <ProfileTab />}
        {active === "history" && <JobApplicationsHistoryTab />}
        {active === "cvs" && <MyCVsTab />}
      </main>
    </div>
  );
}
