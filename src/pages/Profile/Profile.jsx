"use client";
import React, { useRef, useState } from "react";
import ProfileTab from "./ProfileTab";
import JobApplicationsHistoryTab from "./JobApplicationsHistoryTab";
import MyCVsTab from "./MyCVsTab";
import BreadCramp from "../../../components/layout/BreadCramp";
import Sidebar from "./Sidebar";


export default function Profile() {
  const [active, setActive] = useState("profile");
  const [avatar, setAvatar] = useState("/images/avatar.jpg");
  const [name, setName] = useState("mohamed");
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
    <>
      <BreadCramp
        heading="My Profile"
        paragraph="Manage your profile, job applications, and CVs."
        image="login.png"
        imageClass=""
      />
      <div className="flex min-h-[100vh] -mt-[150px]  rounded-2xl -mb-48 overflow-hidden">
        <Sidebar
          active={active}
          setActive={setActive}
          avatar={avatar}
          name={name}
          fileInputRef={fileInputRef}
          handleAvatarClick={handleAvatarClick}
          handleAvatarChange={handleAvatarChange}
        />
        <main className="flex-1 p-10 py-44 flex flex-col items-center justify-center">
          {active === "profile" && <ProfileTab />}
          {active === "history" && <JobApplicationsHistoryTab />}
          {active === "cvs" && <MyCVsTab />}
        </main>
      </div>
    </>
  );
}
