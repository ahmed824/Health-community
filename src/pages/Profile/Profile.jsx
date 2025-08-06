"use client";
import React, { useRef, useState, useEffect } from "react";
import ProfileTab from "./ProfileTab";
import JobApplicationsHistoryTab from "./JobApplicationsHistoryTab";
import MyCVsTab from "./MyCVsTab";
import BreadCramp from "../../../components/layout/BreadCramp";
import Sidebar from "./Sidebar";
import { IoSettingsSharp } from "react-icons/io5";

export default function Profile() {
  const [active, setActive] = useState("profile");
  const [avatar, setAvatar] = useState("/images/avatar.jpg");
  const [name, setName] = useState("mohamed");
  const [avatarFile, setAvatarFile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        !event.target.closest(".sidebar-container") &&
        !event.target.closest(".sidebar-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Close sidebar when tab changes on mobile
  const handleTabChange = (tab) => {
    setActive(tab);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <BreadCramp
        heading="My Profile"
        paragraph="Manage your profile, job applications, and CVs."
        image="login.png"
        imageClass=""
      />
      <div className="flex min-h-[100vh] -mt-[150px]  rounded-2xl -mb-48 overflow-hidden">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className="sidebar-container">
          <Sidebar
            active={active}
            setActive={handleTabChange}
            avatar={avatar}
            name={name}
            fileInputRef={fileInputRef}
            handleAvatarClick={handleAvatarClick}
            handleAvatarChange={handleAvatarChange}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-10 py-20 sm:py-32 lg:py-44 flex flex-col items-center justify-center relative">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="sidebar-toggle lg:hidden fixed top-1/2 left-0 z-30 bg-primary text-white p-3 rounded-r-full shadow-lg hover:bg-primary/90 transition"
            aria-label="Open menu"
          >
           <IoSettingsSharp className="icon-spin"  />
          </button>

          {/* Tab Content */}
          <div className="w-full max-w-4xl">
            {active === "profile" && <ProfileTab />}
            {active === "history" && <JobApplicationsHistoryTab />}
            {active === "cvs" && <MyCVsTab />}
          </div>
        </main>
      </div>
    </>
  );
}
