import Image from "next/image";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { GoPerson, GoSignOut } from "react-icons/go";
import { RiEdit2Fill } from "react-icons/ri";
import BagIcon from "../../../components/ui/BagIcon";

const sidebarLinks = [
  { key: "profile", label: "Profile", icon: <GoPerson /> },
  {
    key: "history",
    label: "Job Applications History",
    icon: <BagIcon />,
  },
  { key: "cvs", label: "My CVs", icon: <FaFileAlt /> },
  { key: "signout", label: "Sign Out", icon: <GoSignOut /> },
];

export default function Sidebar({
  active,
  setActive,
  avatar,
  name,
  fileInputRef,
  handleAvatarClick,
  handleAvatarChange,
}) {
  return (
    <aside className="w-78 pt-30 bg-[#EEF5F4]  flex flex-col items-center  ">
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
          className="absolute bottom-0 left-0 bg-white text-primary rounded-full p-2  cursor-pointer"
          onClick={handleAvatarClick}
          title="Change avatar"
        >
          <RiEdit2Fill className="text-primary" />
        </div>
      </div>
      <span className="text-primary font-medium text-lg capitalize ">
        welcome {name}!
      </span>
      <div className="w-full mt-10">
        {sidebarLinks.map((link) => (
          <button
            key={link.key}
            className={`flex items-center w-full tab-sidebar px-8 py-4 whitespace-nowrap transition-colors text-left text-[#617A78]  cursor-pointer font-medium text-lg ${
              active === link.key
                ? "bg-[#fff] active text-primary w-[120%]"
                : ""
            }`}
            onClick={() => {
              if (link.key === "signout") {
                // Handle sign out logic here
                return;
              }
              setActive(link.key);
            }}
          >
            <span className="mr-3 text-xl ">{link.icon}</span>
            {link.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
