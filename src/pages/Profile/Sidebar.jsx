import Image from "next/image";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { GoPerson, GoSignOut } from "react-icons/go";
import { RiEdit2Fill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import BagIcon from "../../../components/ui/BagIcon";

export default function Sidebar({
  active,
  setActive,
  avatar,
  name,
  fileInputRef,
  handleAvatarClick,
  handleAvatarChange,
  isSidebarOpen = false,
  setIsSidebarOpen,
}) {
  const handleLinkClick = (linkKey) => {
    if (linkKey === "signout") {
      // Handle sign out logic here
      return;
    }
    setActive(linkKey);
  };

  const sidebarLinks = [
    { key: "profile", label: "Profile", icon: <GoPerson /> },
    {
      key: "history",
      label: "Job Applications History",
      icon: (
        <BagIcon
          active={active === "history"}
          inactive={active !== "history"}
        />
      ),
    },
    { key: "cvs", label: "My CVs", icon: <FaFileAlt /> },
    { key: "signout", label: "Sign Out", icon: <GoSignOut /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-78 pt-30 bg-[#EEF5F4] flex-col items-center h-full">
        <div className="relative mb-6">
          <div
            className="w-20 h-20 relative rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition"
            onClick={handleAvatarClick}
          >
            <Image
              src={avatar}
              alt="Profile Avatar"
              fill
              sizes="112px"
              className="object-cover object-top"
              priority
            />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleAvatarChange}
          />
          <div
            className="absolute bottom-0 left-0 bg-white text-primary rounded-full p-2 cursor-pointer"
            onClick={handleAvatarClick}
            title="Change avatar"
          >
            <RiEdit2Fill className="text-primary" />
          </div>
        </div>
        <span className="text-primary font-medium text-lg capitalize">
          welcome {name}!
        </span>
        <div className="w-full mt-10">
          {sidebarLinks.map((link) => (
            <button
              key={link.key}
              className={`flex items-center w-full tab-sidebar px-8 py-4 whitespace-nowrap transition-colors text-left text-[#617A78] cursor-pointer font-medium text-lg ${
                active === link.key
                  ? "bg-[#fff] active text-primary w-[120%]"
                  : "hover:bg-white/50"
              }`}
              onClick={() => handleLinkClick(link.key)}
            >
              <span className="mr-3  text-xl">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-[#EEF5F4] flex flex-col items-center pt-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition"
          aria-label="Close menu"
        >
          <HiX className="w-6 h-6" />
        </button>

        {/* Profile Section */}
        <div className="relative mb-6 mt-8">
          <div
            className="w-20 h-20 relative rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition"
            onClick={handleAvatarClick}
          >
            <Image
              src={avatar}
              alt="Profile Avatar"
              fill
              sizes="112px"
              className="object-cover object-top"
              priority
            />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleAvatarChange}
          />
          <div
            className="absolute bottom-0 left-0 bg-white text-primary rounded-full p-2 cursor-pointer"
            onClick={handleAvatarClick}
            title="Change avatar"
          >
            <RiEdit2Fill className="text-primary" />
          </div>
        </div>

        <span className="text-primary font-medium text-lg capitalize px-4 text-center">
          welcome {name}!
        </span>

        {/* Navigation Links */}
        <div className="w-full mt-10 px-4">
          {sidebarLinks.map((link) => (
            <button
              key={link.key}
              className={`flex items-center w-full px-6 py-4 mb-2 rounded-xl transition-all text-left text-[#617A78] cursor-pointer font-medium text-base ${
                active === link.key
                  ? "bg-white text-primary shadow-sm"
                  : "hover:bg-white/50 hover:text-primary"
              }`}
              onClick={() => handleLinkClick(link.key)}
            >
              <span className="mr-4 text-xl">{link.icon}</span>
              <span className="truncate">{link.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Footer */}
        <div className="mt-auto pb-8 px-4 text-center">
          <p className="text-sm text-gray-500">Tap outside to close</p>
        </div>
      </aside>

      {/* Tablet Sidebar - Slide from left but smaller */}
      <aside
        className={`hidden md:flex lg:hidden fixed top-0 left-0 h-full w-72 bg-[#EEF5F4] flex-col items-center pt-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition"
          aria-label="Close menu"
        >
          <HiX className="w-6 h-6" />
        </button>

        {/* Profile Section */}
        <div className="relative mb-6 mt-8">
          <div
            className="w-20 h-20 relative rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition"
            onClick={handleAvatarClick}
          >
            <Image
              src={avatar}
              alt="Profile Avatar"
              fill
              sizes="112px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div
            className="absolute bottom-0 left-0 bg-white text-primary rounded-full p-2 cursor-pointer"
            onClick={handleAvatarClick}
            title="Change avatar"
          >
            <RiEdit2Fill className="text-primary" />
          </div>
        </div>

        <span className="text-primary font-medium text-lg capitalize px-4 text-center">
          welcome {name}!
        </span>

        {/* Navigation Links */}
        <div className="w-full mt-10">
          {sidebarLinks.map((link) => (
            <button
              key={link.key}
              className={`flex items-center w-full px-6 py-4 transition-colors text-left text-[#617A78] cursor-pointer font-medium text-lg ${
                active === link.key
                  ? "bg-white text-primary"
                  : "hover:bg-white/50"
              }`}
              onClick={() => handleLinkClick(link.key)}
            >
              <span className="mr-3 text-xl">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
