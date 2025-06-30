"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import AnalysisItem from "./AnalysisItem";

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

  useEffect(() => {
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
  }, []);

  return (
    <div className="relative mt-80 mx-auto px-4 sm:px-6 lg:px-8 my-8">
      {/* Decorative Gradient Circle */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '240px',
          height: '240px',
          zIndex: 0,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'conic-gradient(from 230.73deg, rgba(7, 106, 96, 0.07) 15.34%, rgba(7, 106, 96, 0) 75.05%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'white',
            }}
          />
        </div>
      </div>
      <div className="container relative z-10">
        <div
          className="w-full bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-12 gap-8"
          style={{ boxShadow: "0px 0px 35px 0px #076A6012" }}
        >
          {ANALYSIS.map((item, idx) => (
            <AnalysisItem
              key={item.main}
              item={item}
              numberRef={el => (numberRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 