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
    <div className="flex items-center space-x-4">
      {siteConfig.links.social.map((social) => {
        const IconComponent = iconMap[social.icon];
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0E6E65] flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white group"
            aria-label={`Follow us on ${social.name}`}
            title={social.name}
          >
            <IconComponent className="w-5 h-5 text-white group-hover:text-primary transition-all duration-200" />
          </Link>
        );
      })}
    </div>
  );
} 