"use client";
import React from "react";
import BreadCramp from "../../../components/layout/BreadCramp";
import OrbitAnimation from "../../../components/home/features/OrbitAnimation";
import FeaturesText from "../../../components/home/features/FeaturesText";
import Heading from "./components/Heading";
import CounterCp from "../home/components/Counter";
import MissionVision from "./components/MissionVision";
import vision from "../../../public/images/vision.png";
import mission from "../../../public/images/mission.png";

export default function About() {
  return (
    <>
      <BreadCramp
        heading={"about us"}
        paragraph={
          "Fill in your details and let us craft a professional resume just for you"
        }
        image={"clipboard.png"}
      />
      <div className="mx-auto container my-10 p-6">
        <Heading
          heading={"About Health Community"}
          description={
            "we believe that quality healthcare starts with placing the right professionals in the right roles. We are a specialized medical job platform dedicated to connecting qualified healthcare talent with top hospitals and medical centers across the region."
          }
          subheading={
            <>
              connecting <br /> and empowering health community
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-30 mb-20">
          <div className="flex justify-center">
            <OrbitAnimation />
          </div>
          <FeaturesText
            isButton={false}
            heading="About Health Community"
            subheading="Empowering you with trusted health resources"
            description="Welcome to Health Community! We are dedicated to providing a platform that connects people with trusted health resources, expert advice, and a supportive community. Our mission is to empower individuals to make informed health decisions and foster a culture of wellness."
          />
        </div>
      </div>

      <CounterCp />

      <div className="mx-auto container my-10 p-6">
        <MissionVision
          heading={"Our Mission"}
          description={
            "To deliver a professional, seamless recruitment experience that empowers the healthcare sector by connecting skilled professionals with the institutions that need them."
          }
          subheading={"Building Stronger Healthcare Teams"}
          direction="left"
          img={mission}
        />
        <MissionVision
          heading={"Our Vision"}
          description={
            "To deliver a professional, seamless recruitment experience that empowers the healthcare sector by connecting skilled professionals with the institutions that need them."
          }
          subheading={"Building Stronger Healthcare Teams"}
          direction="right"
          img={vision}
        />
      </div>
    </>
  );
}
