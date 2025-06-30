import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("./components/HeroSection"));
const CounterCp = lazy(() => import("./components/Counter"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const CTASection = lazy(() => import("./components/CTASection"));

export default function HomePage() {
  return (
    <main className="flex-1">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <CounterCp />
        <FeaturesSection />
        <CTASection />
      </Suspense>
    </main>
  );
} 