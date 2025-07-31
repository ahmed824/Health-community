import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Link from "next/link";

export default function HeroMainContent() {
  const { t, i18n } = useTranslation();

  return (
    <div className={`text-center max-w-4xl ${i18n.language === "ar" ? "mt-60" : ""}  mx-auto`}>
      <h1 className="text-[14px] md:text-[18px] font-semibold capitalize tracking-tight mb-6 text-primary">
        {t("hero_main.company_name")}
      </h1>
      <h2 className="text-primary text-[62px] font-[700] capitalize mb-8 max-w-2xl mx-auto">
        {t("hero_main.title")}
      </h2>
      <p className="font-normal text-[18px] leading-[28.8px] tracking-normal max-w-2xl mx-auto my-3 text-center capitalize text-[#617A78]">
        {t("hero_main.description")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" asChild size="lg">
          <Link href={`/${i18n.language}/hiring`}>{t("hero_main.explore_button")}</Link>
        </Button>
      </div>
    </div>
  );
}