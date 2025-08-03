"use client";
import React, { useEffect, useRef } from "react";
import HeroCornerCard from "./HeroCornerCard";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

export default function HeroCornerCards() {
  const { t, i18n } = useTranslation();
  const cardRefs = useRef([]);

  // Define cards with dynamic links using i18n.language
  const cards = [
    {
      imageSrc: "/images/cartoon/cartoon1.png",
      imageAlt: t("hero_cards.card1_alt"), // Translated alt text
      imageClassName: "absolute top-[105px] -left-[87px]",
      number: "01",
      link: `/${i18n.language}/hiring`, // Dynamic link with language
      linkText: t("hero_cards.medical"), // Translated text
      subText: t("hero_cards.hiring"), // Translated text
      positionClass:
        "top-16 left-16 rounded-tl-3xl border-l-8 skew-y-[-20deg] card-skew-fix-tl",
      cardClass: "",
      textClass:
        "skew-y-[20deg] w-full h-full flex flex-col items-end justify-center",
      reverse: false,
    },
    {
      imageSrc: "/images/cartoon/cartoon2.png",
      imageAlt: t("hero_cards.card2_alt"),
      imageClassName: "absolute top-[128px] -right-[87px]",
      number: "02",
      link: `/${i18n.language}/create-cv`,
      linkText: t("hero_cards.resume"),
      subText: t("hero_cards.writing"),
      positionClass:
        "top-16 right-16 rounded-tr-3xl border-r-8 skew-y-[20deg] card-skew-fix-tr",
      cardClass: "",
      textClass:
        "skew-y-[-20deg] w-full h-full flex flex-col items-center justify-center",
      reverse: false,
    },
    {
      imageSrc: "/images/cartoon/cartoon4.png",
      imageAlt: t("hero_cards.card3_alt"),
      imageClassName: "absolute bottom-[25px] -left-[87px]",
      number: "03",
      link: `/${i18n.language}/feature3`,
      linkText: t("hero_cards.development"),
      subText: t("hero_cards.training"),
      positionClass:
        "-bottom-16 left-16 rounded-bl-3xl border-l-8 skew-y-[20deg] card-skew-fix-bl",
      cardClass: "",
      textClass:
        "skew-y-[-20deg] w-full h-full flex flex-col items-center justify-center",
      reverse: true,
    },
    {
      imageSrc: "/images/cartoon/cartoon3.png",
      imageAlt: t("hero_cards.card4_alt"),
      imageClassName: "absolute bottom-[27px] -right-[78px]",
      number: "04",
      link: `/${i18n.language}/feature4`,
      linkText: t("hero_cards.manage"),
      subText: t("hero_cards.profile"),
      positionClass:
        "-bottom-16 right-16 rounded-br-3xl border-r-8 skew-y-[-20deg] card-skew-fix-br",
      cardClass: "",
      textClass:
        "skew-y-[20deg] w-full h-full flex flex-col items-center justify-center",
      reverse: true,
    },
  ];

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
          ref={(el) => (cardRefs.current[idx] = el)}
          className="absolute inset-0 hidden lg:block"
        >
          <HeroCornerCard {...card} />
        </div>
      ))}
    </div>
  );
}
