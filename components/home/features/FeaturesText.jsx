import Link from "next/link";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

export default function FeaturesText({
  isButton,
  heading,
  subheading,
  description,
}) {
  const { i18n } = useTranslation();

  return (
    <div className="text-center lg:text-left mt-8 lg:mt-0 px-4 sm:px-0">
      <h2 className="text-[16px] sm:text-[18px] capitalize text-primary font-bold mb-4 sm:mb-[30px]">
        {heading}
      </h2>
      <h3 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary max-w-2xl lg:mx-0 mx-auto capitalize leading-[1.1] sm:leading-[1.2] mb-3 sm:mb-4">
        {subheading}
      </h3>
      <p className="text-base sm:text-lg text-[#617A78] max-w-2xl mx-auto lg:mx-0 capitalize leading-relaxed">
        {description}
      </p>
      {isButton && (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
          <Button variant="outline" asChild size="lg" className="bg-white w-full sm:w-auto">
            <Link href={`/${i18n.language}/about`}>explore community</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
