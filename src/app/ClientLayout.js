"use client";

import { Suspense, useEffect, useState } from "react";
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
    Skeleton: dynamic(() => import("../../components/ui/DotsLoader").then((mod) => mod.Skeleton || mod.default), {
        ssr: false,
    }),
    Loader: dynamic(() => import("../../components/ui/PageLoader").then((mod) => mod.Loader || mod.default), {
        ssr: false,
    }),
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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setIsLoading(true);
        const handleComplete = () => setIsLoading(false);

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

        handleStart();
        const timeout = setTimeout(handleComplete, 500);
        return () => clearTimeout(timeout);
    }, [pathname, router]);

    return (
        <I18nextProvider i18n={i18n}>
            {isLoading && <DynamicComponents.Loader className="fixed" />}
            <DynamicComponents.Header />
            <Suspense fallback={<DynamicComponents.Loader className="fixed" />}>
                {children}
            </Suspense>
            <DynamicComponents.Footer />
        </I18nextProvider>
    );
}