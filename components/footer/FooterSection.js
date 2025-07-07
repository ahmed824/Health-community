import Link from "next/link";

export default function FooterSection({ title, links ,className }) {
  return (
    <div className={` ${className} text-left mr-5 space-y-4`}>
      <h3 className="font-semibold text-xl text-white mb-6 pb-2">
        {title}
      </h3>
      <div className="space-y-3 capitalize">
        {links.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[#B7D3D1] hover:text-white transition-all duration-200 hover:translate-x-1 transform inline-block"
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 