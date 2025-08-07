import Link from "next/link";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";

export default function HeroCornerCard({
  imageSrc,
  imageAlt,
  imageClassName,
  number,
  link,
  linkText,
  subText,
  positionClass,
  cardClass,
  textClass,
  reverse,
}) {
  return (
    <div className={`pointer-events-auto absolute ${positionClass} w-60 h-[344px] bg-primary  flex flex-col justify-center shadow-lg overflow-visible border-secondary space-y-4`}>
      <div className={textClass}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={174}
          height={210}
          className={imageClassName}
        />
        <div className={`flex ${reverse ? 'flex-col-reverse' : 'flex-col'}  justify-start h-full gap-[35px] items-${reverse ? 'end' : ''} ${reverse ? '-mr-8 mt-28' : '-ml-10 mt-[-90px]'} ${cardClass}`}>
          <span className="text-muted-foreground text-[140px] font-bold w-full text-center mb-2">
            {number}
          </span>
          <Link
            href={link}
            className="flex capitalize justify-center items-center gap-2 text-primary-foreground text-lg font-[700] underline"
          >
            {linkText} <br />
            {subText}
            <span className="inline-block text-2xl">
              <IoMdArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 