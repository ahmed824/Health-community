"use client";

import Button from "../../../../components/ui/Button";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const scrollLineRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const el = scrollLineRef.current;
    if (!el) return;

    // Ensure the initial height is set to 169px
    gsap.set(el, { height: "169px", transformOrigin: "bottom" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // when the top of the line hits the bottom of the viewport
        end: "top top+=200", // adjust for how much you want it to shrink
        scrub: true,
      },
    });
    tl.to(el, { height: "30px", duration: 1, ease: "none" });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-[14px] md:text-[18px] font-semibold capitalize tracking-tight mb-6 text-primary">
            health community co.
          </h1>
          <h2 className="text-primary text-[62px] font-[700] capitalize mb-8 max-w-2xl mx-auto">
            connecting and empowering health community
          </h2>
          <p className="font-normal text-[18px] leading-[28.8px] tracking-normal max-w-2xl mx-auto my-3 text-center capitalize text-[#617A78]">
            It is a long established fact that a reader will be distracted the
            readable content of a page when looking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild size="lg">
              <Link href="/articles">explore community</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-102 h-102 bg-primary/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      {/* Four corner cards - optimized */}
      <div className="absolute container inset-0 pointer-events-none flex items-center justify-center">
        {/* Top Left Card */}
        <div className="pointer-events-auto absolute top-16 left-16 w-60 h-[344px] bg-primary rounded-tl-3xl flex flex-col items-center justify-center shadow-lg overflow-visible border-l-8 border-secondary skew-y-[-20deg] space-y-4 card-skew-fix-tl">
          <div className="skew-y-[20deg] w-full h-full flex flex-col items-center justify-center">
            <Image
              src="/images/cartoon/cartoon1.png"
              alt="Card 1"
              width={174}
              height={210}
              className="absolute top-[105px] -left-[87px]"
            />
            <div className="flex flex-col justify-start h-full gap-[35px] items-end -mr-10 -mt-20">
              <span className="text-muted-foreground text-[140px] font-bold w-full text-center mb-2">
                01
              </span>
              <Link
                href="/feature1"
                className="flex capitalize items-center gap-2 text-primary-foreground text-lg font-[700] underline"
              >
                Medical <br />
                Hiring
                <span className="inline-block text-2xl">
                  <IoMdArrowForward />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Top Right Card */}
        <div className="pointer-events-auto absolute top-16 right-16 w-60 h-[344px] bg-primary rounded-tr-3xl flex flex-col items-center justify-center shadow-lg overflow-visible border-r-8 border-secondary skew-y-[20deg] space-y-4 card-skew-fix-tr">
          <div className="skew-y-[-20deg] w-full h-full flex flex-col items-center justify-center">
            <Image
              src="/images/cartoon/cartoon2.png"
              alt="Card 2"
              width={174}
              height={210}
              className="absolute top-[128px] -right-[87px]"
            />
            <div className="flex flex-col items-start h-full gap-5 mt-[-56px] -ml-10">
              <span className="text-muted-foreground text-[140px] font-bold w-full text-center mb-2">
                02
              </span>
              <Link
                href="/feature2"
                className="flex capitalize items-center gap-2 text-primary-foreground text-lg font-[700] underline"
              >
                Resume <br />
                Writing
                <span className="inline-block text-2xl">
                  <IoMdArrowForward />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom Left Card */}
        <div className="pointer-events-auto absolute -bottom-16 left-16 w-60 h-[344px] bg-primary rounded-bl-3xl flex flex-col items-center justify-center shadow-lg overflow-visible border-l-8 border-secondary skew-y-[20deg] space-y-4 card-skew-fix-bl">
          <div className="skew-y-[-20deg] w-full h-full flex flex-col items-center justify-center">
            <Image
              src="/images/cartoon/cartoon4.png"
              alt="Card 3"
              width={174}
              height={210}
              className="absolute bottom-[25px] -left-[87px]"
            />
            <div className="flex flex-col-reverse justify-start h-full gap-[35px] items-end -mr-10 mt-28 ">
            <span className="text-muted-foreground text-[140px] font-bold w-full text-center  ">
                03
              </span>
              <Link
                href="/feature3"
                className="flex capitalize items-center gap-2 text-primary-foreground text-lg font-[700] underline"
              >
                Development <br />
                and training 
                <span className="inline-block text-2xl">
                  <IoMdArrowForward />
                </span>
              </Link>
              
            </div>
          </div>
        </div>
        {/* Bottom Right Card */}
        <div className="pointer-events-auto absolute -bottom-16 right-16 w-60 h-[344px] bg-primary rounded-br-3xl flex flex-col items-center justify-center shadow-lg overflow-visible border-r-8 border-secondary skew-y-[-20deg] space-y-4 card-skew-fix-br">
          <div className="skew-y-[20deg] w-full h-full flex flex-col items-center justify-center">
            <Image
              src="/images/cartoon/cartoon3.png"
              alt="Card 4"
              width={174}
              height={210}
              className="absolute bottom-[27px] -right-[78px]"
            />
            <div className="flex flex-col-reverse justify-start h-full gap-[35px] items-start -ml-10 mt-28">
              <span className="text-muted-foreground text-[140px] font-bold w-full text-center mb-2">
                04
              </span>
              <Link
                href="/feature4"
                className="flex capitalize items-center gap-2 text-primary-foreground text-lg font-[700] underline"
              >
                manage <br />
                profile
                <span className="inline-block text-2xl">
                  <IoMdArrowForward />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute left-1/2 max-h-96 -bottom-28 -translate-x-1/2 flex items-center z-20">
        <span className="text-primary mb-8 mr-[10px] text-lg font-semibold tracking-widest  writing-vertical-lr" style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>
          SCROLL DOWN
        </span>
        <div
          ref={scrollLineRef}
          className="bg-primary w-1 rounded-full transition-all duration-300" style={{ transformOrigin: 'bottom' }}
          id="scroll-down-line"
        ></div>
      </div>
    </section>
  );
}
