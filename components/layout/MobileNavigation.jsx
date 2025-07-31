"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const Logo = "/images/footer-logo.svg";
const Globe = "/globe.svg";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "courses", href: "/courses" },
  { key: "jobs", href: "/jobs" },
  { key: "blogs", href: "/blogs" },
  { key: "contact", href: "/contact" },
];

export default function MobileNavigation({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang) => {
    const newLang = lang === "en" ? "ar" : "en";
    // Get the current path without the language segment
    const currentPath = pathname.split("/").slice(2).join("/") || "";
    // Construct the new URL with the new language
    const newPath = `/${newLang}/${currentPath}`;
    i18n.changeLanguage(newLang);
    router.push(newPath);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="p-0 bg-primary w-screen h-screen border-none max-w-none gap-0 flex flex-col justify-center items-center overflow-hidden"
        onInteractOutside={onClose}
        onEscapeKeyDown={onClose}
        showCloseButton={false}
      >
        <div className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[600px] h-[600px] rounded-full border-[18px] border-[#076A6005] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
        <DialogClose
          asChild
          className="absolute top-10 border border-white right-12 z-50 cursor-pointer bg-transparent p-4 rounded-full hover:bg-white/10 focus:outline-none"
        >
          <button onClick={onClose} aria-label={t("close_menu")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_141_1121)">
                <path
                  d="M1.8959 19.8747C1.40558 19.9032 0.923348 19.7402 0.550889 19.4201C-0.18363 18.6812 -0.18363 17.4878 0.550889 16.7489L16.6344 0.665336C17.3984 -0.0495315 18.5972 -0.0097924 19.3121 0.754172C19.9585 1.44502 19.9962 2.50687 19.4003 3.24177L3.22196 19.4201C2.85434 19.7356 2.3798 19.8983 1.8959 19.8747Z"
                  fill="white"
                />
                <path
                  d="M17.9605 19.8747C17.4635 19.8726 16.9872 19.6753 16.6343 19.3254L0.550736 3.2417C-0.129757 2.44704 -0.0372407 1.25113 0.757417 0.57057C1.46667 -0.0368085 2.51267 -0.0368085 3.22186 0.57057L19.4002 16.6542C20.1639 17.3692 20.2034 18.5681 19.4884 19.3319C19.4599 19.3622 19.4306 19.3916 19.4002 19.4201C19.2042 19.5905 18.9752 19.7188 18.7276 19.797C18.4799 19.8752 18.2188 19.9017 17.9605 19.8747Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_141_1121">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </DialogClose>
        <DialogTitle className="sr-only">{t("mobile_nav_menu")}</DialogTitle>
        <nav className="flex flex-col items-center space-y-6 flex-1 justify-center w-full font-bold">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={`/${i18n.language}${item.href}`}
              className="text-[#FFFFFFB2] w-fit text-[62px] font-bold mb-0 transition-colors text-center hover:text-white"
              onClick={onClose}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <Link
            href={`/${i18n.language}/create-cv`}
            className="mt-8 px-60 py-1 rounded-full flex justify-center bg-white text-primary whitespace-nowrap text-[62px] font-bold shadow transition hover:bg-gray-100 w-full max-w-xs text-center"
            onClick={onClose}
          >
            {t("create_cv")}
          </Link>
          <div className="flex items-center space-x-2 mt-8">
            <Image src={Globe} alt={t("language")} width={24} height={24} />
            <button
              onClick={() => handleLanguageChange(i18n.language)}
              className="text-lg text-[62px] cursor-pointer text-[#FFFFFFB2] font-normal"
            >
              {i18n.language === "en" ? t("arabic") : t("english")}
            </button>
          </div>
        </nav>
      </DialogContent>
    </Dialog>
  );
}