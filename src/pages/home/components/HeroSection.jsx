"use client";

import dynamic from "next/dynamic";

const HeroMainContent = dynamic(() => import("../../../../components/home/hero-section/HeroMainContent"), { ssr: false });
const HeroBackgroundDecoration = dynamic(() => import("../../../../components/home/hero-section/HeroBackgroundDecoration"), { ssr: false });
const HeroCornerCards = dynamic(() => import("../../../../components/home/hero-section/HeroCornerCards"), { ssr: false });
const HeroScrollIndicator = dynamic(() => import("../../../../components/home/hero-section/HeroScrollIndicator"), { ssr: false });

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
