import Link from "next/link";
import Button from "../../ui/Button";

export default function FeaturesText({
  isButton,
  heading,
  subheading,
  description,
}) {
  return (
    <div className="text-center md:text-left mt-16 md:mt-0">
      <h2 className="text-[18px] capitalize text-primary font-bold mb-[30px] ">
        {heading}
      </h2>
      <h3 className="text-[52px] font-bold text-primary max-w-2xl md:mx-0 capitalize leading-[1.2] mb-4">
        {subheading}
      </h3>
      <p className="text-lg text-[#617A78] max-w-2xl mx-auto capitalize md:mx-0">
        {description}
      </p>
      {isButton && (
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-start">
          <Button variant="outline" asChild size="lg">
            <Link href="/about">explore community</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
