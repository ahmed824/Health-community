import React from "react";
import Image from "next/image";
import { MdCircle } from "react-icons/md";

const orbitImages = [
  [MdCircle, MdCircle], // MdCircle as first item in the last (outermost) orbit
  ["/images/medicine.png", "/images/ambulance.png"],
  ["/images/capsule.png", "/images/heart.png"],
];

// Generate 6 random dot positions (top/left in percent)
const dotPositions = [
  { top: "28%", left: "32%" },
  { top: "72%", left: "68%" },
  { top: "38%", left: "24%" },
  { top: "78%", left: "56%" },
  { top: "30%", left: "78%" },
  { top: "68%", left: "28%" },
];

export default function OrbitAnimation() {
  return (
    <div className="orbit relative w-full h-full float-left">
      {/* Decorative dots - hidden on mobile for cleaner look */}
      {dotPositions.map((pos, i) => (
        <div
          key={i}
          className="orbit-dot absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#076A60] z-10 hidden sm:block"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}
      <ul className="orbit-wrap">
        <li className="orbit-center">
          <span className="orbit-center__img">
            <Image
              src="/images/logo.png"
              alt="center"
              width={166}
              height={166}
              className="w-full h-full rounded-full"
              priority
            />
          </span>
        </li>
        {orbitImages.map((pair, i) => (
          <li key={`ring-${i}`}>
            <ul className={`ring-${i}`}>
              {pair.map((Item, j) => (
                <li key={j}>
                  <span className="orbit-img flex items-center justify-center bg-white rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] overflow-hidden shadow-sm">
                    {typeof Item === "string" ? (
                      <Image
                        src={Item}
                        alt={`orbit-${i}-img-${j}`}
                        width={50}
                        height={50}
                        className="w-auto h-auto object-cover object-center rounded-full"
                      />
                    ) : (
                      <Item
                        className="text-[#EEF5F4] w-full h-full rounded-full"
                      />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
