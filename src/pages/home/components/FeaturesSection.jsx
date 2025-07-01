import OrbitAnimation from "../../../../components/home/features/OrbitAnimation";
import FeaturesText from "../../../../components/home/features/FeaturesText";

export default function FeaturesSection() {
  return (
    <section className="py-16  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <OrbitAnimation />
          </div>
          <FeaturesText />
        </div>
      </div>
      <div className="w-full flex justify-center mt-8 pointer-events-none select-none">
        <span
          className="font-bold text-[150px] leading-[1] tracking-normal capitalize gradient-text whitespace-nowrap"
          aria-hidden="true"
        >
          why to choose us ?
        </span>
      </div>
    </section>
  );
}
