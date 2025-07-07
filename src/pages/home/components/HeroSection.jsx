"use client";

import dynamic from "next/dynamic";
import { 
  HeroMainContentLoader, 
  HeroBackgroundLoader, 
  HeroCornerCardsLoader, 
  HeroScrollIndicatorLoader 
} from "./HeroSkeleton";

const HeroMainContent = dynamic(
  () => import("../../../../components/home/hero-section/HeroMainContent"), 
  { 
    ssr: false,
    loading: () => <HeroMainContentLoader />
  }
);

const HeroBackgroundDecoration = dynamic(
  () => import("../../../../components/home/hero-section/HeroBackgroundDecoration"), 
  { 
    ssr: false,
    loading: () => <HeroBackgroundLoader />
  }
);

const HeroCornerCards = dynamic(
  () => import("../../../../components/home/hero-section/HeroCornerCards"), 
  { 
    ssr: false,
    loading: () => <HeroCornerCardsLoader />
  }
);

const HeroScrollIndicator = dynamic(
  () => import("../../../../components/home/hero-section/HeroScrollIndicator"), 
  { 
    ssr: false,
    loading: () => <HeroScrollIndicatorLoader />
  }
);

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroMainContent />
      </div>
      <HeroBackgroundDecoration />
      <HeroCornerCards />
      <HeroScrollIndicator />
    </section>
  );
}
