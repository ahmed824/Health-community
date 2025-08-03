"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getFooterLinks } from "@/lib/constants";
import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";
import FooterCopyright from "./FooterCopyright";
import NewsletterSection from "./NewsletterSection";
import SocialMediaSection from "./SocialMediaSection";
import TopBanner from "./TopBanner";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function TabletFooter() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const footerLinks = getFooterLinks(i18n.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <footer className="bg-primary relative overflow-visible mt-48 z-10">
      <div className="footer-bg-pattern">
        {/* Top Banner Card */}
        <TopBanner />

        {/* Decorative Gradient Circle - Left Bottom */}
        <Image
          src="/images/white-decor.png"
          alt="Decorative Circle"
          width={400}
          height={400}
          priority
          className="w-auto absolute bottom-0 left-0 pointer-events-none z-10 opacity-70"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-8 lg:pb-10">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <FooterBrand />
            </div>

            {/* Newsletter Section */}
            <div className="md:col-span-1">
              <NewsletterSection />
            </div>

            {/* Navigation Sections */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-8">
                <FooterSection
                  className="flex flex-col items-center md:items-start"
                  title="pages"
                  links={footerLinks.company}
                />
                <FooterSection
                  className="flex flex-col items-center md:items-start"
                  title="Imp Links"
                  links={footerLinks.resources}
                />
              </div>
            </div>

            {/* Social Media Section */}
            <div className="md:col-span-2 flex justify-center">
              <SocialMediaSection />
            </div>
          </div>
          
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
} 