import { siteConfig } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function FooterCopyright() {
  return (
    <div className="border-t border-[#FFFFFF1A] mt-8 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-[#B7D3D1]">
          all copy rights reserved for  <span className="text-[#fff] font-bold">{siteConfig.name} </span>  - {new Date().getFullYear()}  ©  
        </p>
        <div className="flex items-center space-x-6 text-xs text-[#B7D3D1]/70">
          <Link href="https://puiux.com/" title="PUIUX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <Image
              src="/images/PUIUX.svg"
              alt="PUIUX Logo"
              width={83}
              height={34}
              priority
            />
          </Link>

        </div>
      </div>
    </div>
  );
} 