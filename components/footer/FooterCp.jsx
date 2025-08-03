import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";
import FooterCopyright from "./FooterCopyright";
import NewsletterSection from "./NewsletterSection";
import SocialMediaSection from "./SocialMediaSection";
import MobileFooter from "./MobileFooter";
import TabletFooter from "./TabletFooter";
import { getFooterLinks } from "@/lib/constants";
import TopBanner from "./TopBanner";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function FooterCp() {
  const { i18n } = useTranslation();
  const footerLinks = getFooterLinks(i18n.language);

  return (
    <>
      {/* Mobile Footer (0px - 768px) */}
      <div className="block md:hidden">
        <MobileFooter />
      </div>

      {/* Tablet Footer (768px - 1024px) */}
      <div className="hidden md:block lg:hidden">
        <TabletFooter />
      </div>

      {/* Desktop Footer (1024px+) */}
      <footer className="bg-primary relative overflow-visible mt-48 z-10 hidden lg:block">
        <div className="footer-bg-pattern">
          {/* Top Banner Card */}
          <TopBanner />

          {/* Decorative Gradient Circle - Left Bottom */}
          <Image
            src="/images/white-decor.png"
            alt="Decorative Circle"
            width={550}
            height={550}
            priority
            className="w-auto absolute bottom-0 left-0 pointer-events-none z-10"
          />

          <div className="container mx-auto   lg:px-4   py-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 xl:gap-12 pb-10">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <FooterBrand />
              </div>

              {/* Pages Section */}
              <div className="lg:col-span-1">
                <FooterSection
                  className="flex flex-col items-center lg:pl-24 lg:items-start"
                  title="pages"
                  links={footerLinks.company}
                />
              </div>

              {/* Important Links Section */}
              <div className="lg:col-span-1">
                <FooterSection
                  className="flex flex-col items-center lg:items-start"
                  title="Imp Links"
                  links={footerLinks.resources}
                />
              </div>

              {/* Newsletter & Social Media Section */}
              <div className="lg:col-span-1 space-y-8">
                <NewsletterSection />
                <SocialMediaSection />
              </div>
            </div>
            
            <FooterCopyright />
          </div>
        </div>
      </footer>
    </>
  );
}
