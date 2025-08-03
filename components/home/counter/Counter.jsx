"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AnalysisItem from "./AnalysisItem";
import DecorativeGradientCircle from "../../ui/DecorativeGradientCircle";
import { DotsLoader } from "../../ui";

const ANALYSIS = [
  {
    number: 1200,
    main: "Active Users",
    desc: "People engaging with our platform every day.",
  },
  {
    number: 400,
    main: "Training Courses",
    desc: "Curated articles to boost your well-being.",
  },
  {
    number: 98,
    main: "Expert Contributors",
    desc: "Professionals sharing their knowledge.",
  },
];

export default function Counter() {
  const numberRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for statistics
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      numberRefs.current.forEach((el, idx) => {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: ANALYSIS[idx].number,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
              el.innerText = `+${Math.floor(el.innerText)}`;
            },
          }
        );
      });
    }
  }, [isLoading]);

  return (
    <section className="relative w-full mx-auto px-4 sm:px-6 lg:px-6 xl:px-12 py-8 sm:py-12 lg:py-16">
      {/* Decorative Gradient Circle - Hidden on mobile, visible on larger screens */}
      <DecorativeGradientCircle
        positionClass="absolute left-[-100px] top-1/2 -translate-y-1/2 hidden lg:block"
        size={240}
        innerSize={120}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="w-full bg-white rounded-xl sm:rounded-2xl flex flex-col lg:flex-row justify-between items-center py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-0 xl:px-12 gap-6 sm:gap-8 lg:gap-12"
          style={{ boxShadow: "0px 0px 35px 0px #076A6012" }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center w-full py-8 sm:py-12">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3">
                <DotsLoader size="large" speed="normal" />
                <span className="text-primary font-medium text-sm sm:text-base">
                  Loading statistics...
                </span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0 sm:gap-8 w-full">
              {ANALYSIS.map((item, idx) => (
                <AnalysisItem
                  key={item.main}
                  item={item}
                  numberRef={(el) => (numberRefs.current[idx] = el)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
