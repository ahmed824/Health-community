import { useState, useEffect } from "react";
import OrbitAnimation from "../../../../components/home/features/OrbitAnimation";
import FeaturesText from "../../../../components/home/features/FeaturesText";
import DecorativeGradientCircle from "../../../../components/ui/DecorativeGradientCircle";
import { DotsLoader, SkeletonLoader } from "../../../../components/ui";

export default function FeaturesSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for features
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 relative mt-72 overflow-hidden">
      <div className="container mx-auto pb-20 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-3 py-12">
              <DotsLoader size="large" speed="normal" />
              <span className="text-primary font-medium text-lg">Loading features...</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <SkeletonLoader type="avatar" height="xl" width="full" />
              </div>
              <div className="space-y-4">
                <SkeletonLoader type="text" lines={4} />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <OrbitAnimation />
            </div>
            <FeaturesText />
          </div>
        )}
      </div>
      <div className="w-full flex justify-center mt-8 pointer-events-none select-none">
        <span
          className="font-bold text-[150px] leading-[1] tracking-normal capitalize gradient-text whitespace-nowrap"
          aria-hidden="true"
        >
          why to choose us ?
        </span>
      </div>
      <DecorativeGradientCircle
        positionClass="absolute -right-16 -bottom-20 rotate-y-180"
        size={240}
        innerSize={120}
      />
    </section>
  );
}
