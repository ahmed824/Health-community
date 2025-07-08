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
    <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 my-8">
      {/* Decorative Gradient Circle */}
      <DecorativeGradientCircle
        positionClass="absolute left-[-100px] top-1/2 -translate-y-1/2"
        size={240}
        innerSize={120}
      />
      <div className="container relative z-10">
        <div
          className="w-full bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-12 gap-8"
          style={{ boxShadow: "0px 0px 35px 0px #076A6012" }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center m-auto space-x-3 py-8">
              <DotsLoader size="large" speed="normal" />
              <span className="text-primary font-medium">Loading statistics...</span>
            </div>
          ) : (
            ANALYSIS.map((item, idx) => (
              <AnalysisItem
                key={item.main}
                item={item}
                numberRef={(el) => (numberRefs.current[idx] = el)}
              />
            ))
          )}
        </div>
      </div>
     
    </div>
  );
}
