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
    <section className="py-8 sm:py-12 lg:py-16 relative mt-46 sm:mt-32 lg:mt-72 overflow-hidden">
      <div className="container mx-auto pb-8 sm:pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center justify-center space-x-3 py-8 sm:py-12">
              <DotsLoader size="large" speed="normal" />
              <span className="text-primary font-medium text-base sm:text-lg">Loading features...</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="flex justify-center">
                <SkeletonLoader type="avatar" height="xl" width="full" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <SkeletonLoader type="text" lines={4} />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-8 lg:gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <OrbitAnimation />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <FeaturesText
                isButton
                heading="health community co."
                subheading="connecting and empowering health community"
                description="It is a long established fact that a reader will be distracted the readable content of a page when looking."
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Responsive background text */}
      <div className="w-full flex justify-center mt-4 sm:mt-6 lg:mt-8 pointer-events-none select-none overflow-hidden">
        <span
          className="font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[150px] leading-[1] tracking-normal capitalize gradient-text whitespace-nowrap px-4"
          aria-hidden="true"
        >
          why to choose us ?
        </span>
      </div>
      
      {/* Responsive decorative circle */}
      <DecorativeGradientCircle
        positionClass="absolute -right-8 sm:-right-12 lg:-right-16 -bottom-8 sm:-bottom-12 lg:-bottom-20 rotate-y-180 opacity-50 sm:opacity-75 lg:opacity-100"
        size={120}
        innerSize={60}
        className="sm:hidden"
      />
      <DecorativeGradientCircle
        positionClass="absolute -right-8 sm:-right-12 lg:-right-16 -bottom-8 sm:-bottom-12 lg:-bottom-20 rotate-y-180"
        size={180}
        innerSize={90}
        className="hidden sm:block lg:hidden"
      />
      <DecorativeGradientCircle
        positionClass="absolute -right-8 sm:-right-12 lg:-right-16 -bottom-8 sm:-bottom-12 lg:-bottom-20 rotate-y-180"
        size={240}
        innerSize={120}
        className="hidden lg:block"
      />
    </section>
  );
}
