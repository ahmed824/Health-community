"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getFooterLinks } from "@/lib/constants";
import Dock from "./Dock";
import FooterBrand from "./FooterBrand";
import FooterCopyright from "./FooterCopyright";
import FooterSection from "./FooterSection";
import NewsletterSection from "./NewsletterSection";
import SocialMediaSection from "./SocialMediaSection";
import Image from "next/image";
import { 
  FiHome, 
  FiInfo, 
  FiBookOpen, 
  FiBriefcase, 
  FiFileText
} from "react-icons/fi";

export default function MobileFooter() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const footerLinks = getFooterLinks(i18n.language);
  const [showNewsletter, setShowNewsletter] = useState(false);

  // Create dock items for main navigation only
  const mainDockItems = [
    {
      icon: <FiHome className="w-6 h-6 text-white" />,
      label: "Home",
      onClick: () => router.push(`/${i18n.language}/`),
    },
    {
      icon: <FiInfo className="w-6 h-6 text-white" />,
      label: "About Us",
      onClick: () => router.push(`/${i18n.language}/about`),
    },
    {
      icon: <FiBookOpen className="w-6 h-6 text-white" />,
      label: "Courses",
      onClick: () => router.push(`/${i18n.language}/courses`),
    },
    {
      icon: <FiBriefcase className="w-6 h-6 text-white" />,
      label: "Jobs",
      onClick: () => router.push(`/${i18n.language}/jobs`),
    },
    {
      icon: <FiFileText className="w-6 h-6 text-white" />,
      label: "Blogs",
      onClick: () => router.push(`/${i18n.language}/blogs`),
    },
  ];

  return (
    <footer className="bg-primary relative overflow-visible mt-48 z-10">
      <div className="footer-bg-pattern">
        {/* Decorative Gradient Circle - Left Bottom */}
        <Image
          src="/images/white-decor.png"
          alt="Decorative Circle"
          width={300}
          height={300}
          priority
          className="w-auto absolute bottom-0 left-0 pointer-events-none z-10 opacity-50"
        />

        <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
          {/* Main Footer Content */}
          <div className="space-y-8">
            {/* Brand Section */}
            <div className="text-center">
              <FooterBrand />
            </div>

            {/* Important Links Section */}
            <div className="text-center">
              <FooterSection
                className="flex flex-col items-center"
                title="Imp Links"
                links={footerLinks.resources}
              />
            </div>

            {/* Newsletter Section - Collapsible */}
            {showNewsletter && (
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <NewsletterSection />
              </div>
            )}

            {/* Social Media Section */}
            <div className="flex justify-center">
              <SocialMediaSection />
            </div>

            {/* Copyright */}
            <FooterCopyright />
          </div>
        </div>

        {/* Single Mobile Dock Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
          <Dock 
            items={mainDockItems}
            className="mb-4"
            magnification={60}
            baseItemSize={45}
            panelHeight={60}
          />
        </div>
      </div>
    </footer>
  );
} 