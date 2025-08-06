"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiLogOut, FiSettings } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { useTranslation } from "react-i18next";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/50 transition-all duration-200 hover:scale-105"
        aria-label="Profile menu"
      >
        <GoPerson className="w-5 h-5 text-primary" />
        <FiChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Profile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-background/95 backdrop-blur border-[#FFFFFF1A] rounded-lg shadow-lg py-2 z-100 animate-in slide-in-from-top-2 duration-200">
          <Link
            href={`/${i18n.language}/profile`}
            className="flex items-center space-x-3 px-4 py-2 text-sm text-primary hover:text-foreground hover:bg-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FiSettings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
          <button
            onClick={() => {
              // Handle logout logic here
              setIsOpen(false);
            }}
            className="flex items-center space-x-3 px-4 py-2 text-sm text-primary hover:text-foreground hover:bg-accent transition-colors w-full text-left"
          >
            <FiLogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
} 