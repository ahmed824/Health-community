import Link from "next/link";

export default function FooterSection({ title, links, className }) {
  return (
    <div className={`${className} text-center sm:text-left space-y-4 sm:space-y-6`}>
      <h3 className="font-semibold text-[clamp(16px,3vw,20px)] text-white mb-4 sm:mb-6 pb-2 capitalize">
        {title}
      </h3>
      <div className="space-y-2 sm:space-y-3 capitalize">
        {links.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className="text-[clamp(12px,2.5vw,14px)] text-[#B7D3D1] hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block"
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 