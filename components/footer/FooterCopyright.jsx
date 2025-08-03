import { siteConfig } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function FooterCopyright() {
  return (
    <div className="border-t border-[#FFFFFF1A] mt-6 sm:mt-8 pt-6 sm:pt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-[clamp(11px,2.5vw,14px)] text-[#B7D3D1] text-center sm:text-left">
          all copy rights reserved for <span className="text-[#fff] font-bold">{siteConfig.name}</span> - {new Date().getFullYear()} ©
        </p>
        <div className="flex items-center justify-center sm:justify-end space-x-4 sm:space-x-6">
          <Link 
            href="https://puiux.com/" 
            title="PUIUX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/images/PUIUX.svg"
              alt="PUIUX Logo"
              width={83}
              height={34}
              className="w-16 sm:w-20 lg:w-[83px] h-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
} 