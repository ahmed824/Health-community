"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { RiMailSendLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import {
  PiPhoneCallLight,
  PiTiktokLogoLight,
  PiWhatsappLogo,
} from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { LiaSnapchatGhost } from "react-icons/lia";
import { SlSocialFacebook } from "react-icons/sl";

const Button = dynamic(() => import("../../../../components/ui/Button"), {
  loading: () => <div>Loading...</div>,
});

export default function ContactInformation() {
  return (
    <div className="flex-1 bg-[#EEF5F4] rounded-md h-fit px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12 flex flex-col gap-3 sm:gap-4">
      <h3 className="text-lg sm:text-xl font-bold capitalize text-primary mb-1 sm:mb-2">
        contact information
      </h3>
      <p className="text-[#617A78] capitalize text-sm sm:text-base md:text-lg">
        You can contact Bidaya through the following information:
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-xs sm:text-sm text-[#617A78] gap-2 sm:gap-0">
        <p>
          <CiGlobe className="inline mr-1 text-base sm:text-lg" />
          www.healthcommunity.com
        </p>
        <p>
          <RiMailSendLine className="inline mr-1 text-base sm:text-lg" />
          healthcommunity@gmail.com
        </p>
      </div>
      <div className="flex flex-row gap-2 sm:gap-4 my-3 sm:my-4">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 font-bold text-xs sm:text-sm md:text-base"
          asChild
        >
          <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <PiWhatsappLogo className="inline mr-1 text-base sm:text-lg" />
            whatsapp
          </Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 font-bold text-xs sm:text-sm md:text-base"
          asChild
        >
          <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <PiPhoneCallLight className="inline mr-1 text-base sm:text-lg" />
            call
          </Link>
        </Button>
      </div>
      <div className="flex justify-center gap-2 sm:gap-4">
        <Link
          href="https://instagram.com/company/healthcommunity"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 sm:p-3 border-primary border text-primary rounded-full overflow-hidden transition-all duration-300 ease-out"
        >
          <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-full"></div>
          <FaInstagram className="text-base sm:text-xl relative z-10 group-hover:text-white transition-colors duration-300" />
        </Link>
        <Link
          href="https://facebook.com/healthcommunity"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 sm:p-3 border-primary border text-primary rounded-full overflow-hidden transition-all duration-300 ease-out"
        >
          <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-full"></div>
          <SlSocialFacebook className="text-base sm:text-xl relative z-10 group-hover:text-white transition-colors duration-300" />
        </Link>
        <Link
          href="https://snapchat.com/healthcommunity"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 sm:p-3 border-primary border text-primary rounded-full overflow-hidden transition-all duration-300 ease-out"
        >
          <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-full"></div>
          <LiaSnapchatGhost className="text-base sm:text-xl relative z-10 group-hover:text-white transition-colors duration-300" />
        </Link>
        <Link
          href="https://tiktok.com/healthcommunity"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 sm:p-3 border-primary border text-primary rounded-full overflow-hidden transition-all duration-300 ease-out"
        >
          <div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-full"></div>
          <PiTiktokLogoLight className="text-base sm:text-xl relative z-10 group-hover:text-white transition-colors duration-300" />
        </Link>
      </div>
    </div>
  );
}
