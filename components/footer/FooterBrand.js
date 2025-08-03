import Link from "next/link";
import Image from "next/image";

const Logo = "/images/footer-logo.svg";

export default function FooterBrand() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Link href="/" className="flex items-center justify-center sm:justify-start">
        <Image
          src={Logo}
          alt="Health Community Logo"
          width={369}
          height={84}
          className="w-[280px] sm:w-[320px] lg:w-[369px] h-auto"
        />
      </Link>
      <p className="text-[clamp(12px,2.5vw,14px)] md:ml-0 lg:ml-[78px] capitalize text-[#B7D3D1] max-w-full sm:max-w-xs text-center sm:text-left leading-relaxed px-4 sm:px-0 sm:ml-[78px]">
        It is a long established fact that a read will be distracted by the readable content of a page when looking.
      </p>
    </div>
  );
} 