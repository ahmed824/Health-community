import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";
import FooterCopyright from "./FooterCopyright";
import NewsletterSection from "./NewsletterSection";
import SocialMediaSection from "./SocialMediaSection";
import { footerLinks } from "@/lib/constants";
import TopBanner from "./TopBanner";
import Image from "next/image";

export default function FooterCp() {
  return (
    <footer className="bg-primary relative overflow-visible mt-48 z-10 ">
      <div className="footer-bg-pattern ">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 pb-10 lg:grid-cols-4 ">
            <FooterBrand />
            <FooterSection
              className="flex flex-col items-center"
              title="pages"
              links={footerLinks.company}
            />
            <FooterSection
              className="flex flex-col items-start"
              title="Imp Links"
              links={footerLinks.resources}
            />
            <div className="space-y-8">
              <NewsletterSection />
              <SocialMediaSection />
            </div>
          </div>
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
