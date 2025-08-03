import React, { Suspense, lazy } from "react";
import { DotsLoader } from "../../../components/ui";
import { CounterSkeleton } from "./components/HeroSkeleton";

const HeroSection = lazy(() => import("./components/HeroSection"));
const CounterCp = lazy(() => import("./components/Counter"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const CTASection = lazy(() => import("./components/CTASection"));
const OurCoursesSection = lazy(() => import("./components/OurCoursesSection"));
const Blogs = lazy(() => import("./components/Blogs.jsx"));

// Custom loading component for sections
const SectionLoader = ({ sectionName }) => (
  <div className="py-20 flex flex-col items-center justify-center space-y-4">
    <DotsLoader size="large" speed="normal" />
    <div className="text-center space-y-2">
      <p className="text-primary font-medium">Loading {sectionName}...</p>
      <p className="text-sm text-muted-foreground">
        Preparing your health resources
      </p>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />

      <Suspense fallback={<SectionLoader sectionName="Features" />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader sectionName="Courses" />}>
        <OurCoursesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader sectionName="Call to Action" />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<SectionLoader sectionName="Blogs" />}>
        <Blogs />
      </Suspense>

      <Suspense fallback={<CounterSkeleton />}>
        <CounterCp />
      </Suspense>
    </main>
  );
}
