"use client";

import { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import i18n from "@/services/i18n";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { detectLangFromURL } from "@/utils/detectLangFromURL";

const DynamicComponents = {
    Header: dynamic(() => import("../../components/layout/Header"), {
        ssr: false,
    }),
    Footer: dynamic(() => import("../../components/layout/Footer"), {
        ssr: false,
    }),
};

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        router.prefetch(pathname);
        const lang = detectLangFromURL(pathname);
        if (!["en", "ar"].includes(lang)) {
            // Redirect to default language (en) if invalid
            router.replace(`/en${pathname}`);
            return;
        }

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        i18n.changeLanguage(lang);
    }, [pathname, router]);

    return (
        <I18nextProvider i18n={i18n}>
            <DynamicComponents.Header />
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <DynamicComponents.Footer />
        </I18nextProvider>
    );
}