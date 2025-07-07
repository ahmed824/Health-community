import Link from "next/link";
import Image from "next/image";

const Logo = "/images/footer-logo.svg";

export default function FooterBrand() {
  return (
    <div className="space-y-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={Logo}
          alt="Health Community Logo"
          width={369}
          height={84}
        />
      </Link>
      <p className="text-[14px] capitalize text-[#B7D3D1] max-w-xs ml-[78px] w-full px-[22px] ">
        It is a long established fact that a read will be distracted  the readable content of a page when looking.
      </p>

    </div>
  );
} 