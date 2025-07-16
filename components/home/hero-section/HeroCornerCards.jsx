import React, { useEffect, useRef } from "react";
import HeroCornerCard from "./HeroCornerCard";
import gsap from "gsap";

const cards = [
  {
    imageSrc: "/images/cartoon/cartoon1.png",
    imageAlt: "Card 1",
    imageClassName: "absolute top-[105px] -left-[87px]",
    number: "01",
    link: "/hiring",
    linkText: "Medical",
    subText: "Hiring",
    positionClass: "top-16 left-16 rounded-tl-3xl border-l-8 skew-y-[-20deg]  card-skew-fix-tl",
    cardClass: "",
    textClass: "skew-y-[20deg] w-full h-full flex flex-col items-end justify-center",
    reverse: false,
  },
  {
    imageSrc: "/images/cartoon/cartoon2.png",
    imageAlt: "Card 2",
    imageClassName: "absolute top-[128px] -right-[87px]",
    number: "02",
    link: "/feature2",
    linkText: "Resume",
    subText: "Writing",
    positionClass: "top-16 right-16 rounded-tr-3xl border-r-8 skew-y-[20deg] card-skew-fix-tr",
    cardClass: "",
    textClass: "skew-y-[-20deg] w-full h-full flex flex-col items-center justify-center",
    reverse: false,
  },
  {
    imageSrc: "/images/cartoon/cartoon4.png",
    imageAlt: "Card 3",
    imageClassName: "absolute bottom-[25px] -left-[87px]",
    number: "03",
    link: "/feature3",
    linkText: "Development",
    subText: "and training",
    positionClass: "-bottom-16 left-16 rounded-bl-3xl border-l-8 skew-y-[20deg] card-skew-fix-bl",
    cardClass: "",
    textClass: "skew-y-[-20deg] w-full h-full flex flex-col items-center justify-center",
    reverse: true,
  },
  {
    imageSrc: "/images/cartoon/cartoon3.png",
    imageAlt: "Card 4",
    imageClassName: "absolute bottom-[27px] -right-[78px]",
    number: "04",
    link: "/feature4",
    linkText: "manage",
    subText: "profile",
    positionClass: "-bottom-16 right-16 rounded-br-3xl border-r-8 skew-y-[-20deg] card-skew-fix-br",
    cardClass: "",
    textClass: "skew-y-[20deg] w-full h-full flex flex-col items-center justify-center",
    reverse: true,
  },
];

export default function HeroCornerCards() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      // Animate each card from further out in its direction
      let fromVars = {};
      if (cards[idx].positionClass.includes("left")) {
        fromVars.x = -200;
      } else if (cards[idx].positionClass.includes("right")) {
        fromVars.x = 200;
      }
      if (cards[idx].positionClass.includes("top")) {
        fromVars.y = -200;
      } else if (cards[idx].positionClass.includes("bottom")) {
        fromVars.y = 200;
      }
      gsap.fromTo(
        el,
        { opacity: 0, ...fromVars },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: idx * 0.15,
        }
      );
    });
  }, []);

  return (
    <div className="absolute container inset-0 pointer-events-none flex items-center justify-center">
      {cards.map((card, idx) => (
        <div
          key={idx}
          ref={el => (cardRefs.current[idx] = el)}
          style={{ position: "absolute", inset: 0 }}
        >
          <HeroCornerCard {...card} />
        </div>
      ))}
    </div>
  );
}