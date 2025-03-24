"use client";
import { PIE_LIST } from "@/utils/helper";
import React, { useEffect, useRef } from "react";
import CustomHero from "./common/CustomHero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Check if screen size is below 'lg' breakpoint (assuming lg is 1024px)
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

    if (isLargeScreen) {
      const sections = heroRef.current?.querySelectorAll(".hero-section");
      gsap.set(sections[0], { opacity: 1, y: 0 });
      gsap.set(sections, { opacity: 0, y: 50 });
      gsap.set(sections[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: () => `+=${(sections.length - 1) * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      sections.forEach((section, index) => {
        if (index > 0) {
          tl.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    } else {
      // For screens below 'lg', ensure all sections are visible without animation
      const sections = heroRef.current?.querySelectorAll(".hero-section");
      gsap.set(sections, { opacity: 1, y: 0 });
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex items-center justify-center  min-h-screen max-lg:h-full max-lg:min-h-full w-full"
    >
      <div className="flex flex-col items-center w-full max-w-[1140px] mx-auto">
        {PIE_LIST.map((item, index) => (
          <div className="hero-section relative w-full max-lg:my-5" key={index}>
            <CustomHero
              idClass={item.id}
              bgClass={`${
                index === 1
                  ? "bg-[#6621E9]"
                  : index === 2
                  ? "bg-[#FFABC7]"
                  : index === 3
                  ? "bg-[#026070]"
                  : "bg-[#6FFFA8]"
              }`}
              headingText={item.heading}
              headingStyle={`${
                index === 3
                  ? "text-white"
                  : index === 1
                  ? "text-white"
                  : "text-black"
              }`}
              descriptionOneStyle={`${
                index === 3
                  ? "text-white"
                  : index === 1
                  ? "text-white"
                  : "text-black"
              }`}
              descriptionOneText={item.descriptionOne}
              descriptionTwoText={item.descriptionTwo}
              descriptionThreeText={item.descriptionThree}
              descriptionFourText={item.descriptionFour}
              headingTextTwo={item.headingTwo}
              descriptionFiveText={item.descriptionFive}
              Img={item.mobileImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
