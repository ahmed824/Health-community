"use client";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { siteConfig } from "@/lib/constants";
import { FaSnapchat } from "react-icons/fa6";
import Link from "next/link";

// Icon mapping object
const iconMap = {
  FaSnapchat,
  PiTiktokLogoLight,
  FiFacebook,
  FiInstagram,
  FiYoutube,
};

export default function SocialMediaSection() {
  return (
    <div className="flex items-center justify-center space-x-3 sm:space-x-4">
      {siteConfig.links.social.map((social) => {
        const IconComponent = iconMap[social.icon];
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0E6E65] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white group"
            aria-label={`Follow us on ${social.name}`}
            title={social.name}
          >
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-primary transition-all duration-200" />
          </Link>
        );
      })}
    </div>
  );
} 