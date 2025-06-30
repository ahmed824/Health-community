"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroScrollIndicator() {
  const scrollLineRef = useRef(null);
  const scrollTextRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const el = scrollLineRef.current;
    const textEl = scrollTextRef.current;
    if (!el || !textEl) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top-=100 top",
        end: "+=200",
        scrub: true,
      },
    });
    tl.to(el, {
      height: "32px",
      duration: 1,
      ease: "none",
    }, 0)
      .to(textEl, {
        y: 178,
        opacity: 0,
        duration: 1,
        ease: "none",
      }, 0);
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      className="absolute left-1/2 -bottom-48 -translate-x-1/2 flex flex-col items-center z-20 overflow-hidden"
      style={{ height: "210px", width: "auto" }}
    >
      <span
        ref={scrollTextRef}
        className="text-primary mb-[10px] mr-[50px] text-lg font-semibold tracking-widest  writing-vertical-lr"
        style={{ writingMode: "vertical-lr", textOrientation: "mixed", letterSpacing: "5px" }}
      >
        SCROLL DOWN
      </span>
      <div
        ref={scrollLineRef}
        className="bg-primary w-1 h-[210px] rounded-full transition-all duration-300 absolute bottom-0"
        id="scroll-down-line"
      ></div>
    </div>
  );
} 