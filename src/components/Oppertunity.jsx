"use client"
import { OPPORTUNITIES_LIST } from "@/utils/helper";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Oppertunity = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const hasAnimated = useRef(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          gsap.fromTo(
            cardsRef.current,
            {
              opacity: 0,
              scale: 0.8,
              rotationY: 90,
            },
            {
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 2,
              stagger: 0.15,
              ease: "back.out(1.7)",
            }
          );
          hasAnimated.current = true;
          observer.unobserve(sectionRef.current)
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="flex items-center justify-center min-h-screen bg-[#191423] px-4"
      >
        <div className="max-xl:my-10">
          <h1 className="text-white text-[46px] max-md:text-3xl font-semibold mb-[36px] leading-[150%]">
            Opportunity Overview
          </h1>

          <div className="w-full flex-wrap max-w-[1143px] mx-auto flex items-center gap-4 max-sm:justify-center">
            {OPPORTUNITIES_LIST.map((obj, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="flex items-center flex-col justify-center rounded-lg bg-[#362B4F] w-full max-w-[273px] h-[270px]"
                style={{ transformPerspective: 1000 }}
              >
                <Image src={obj.iconImg} alt="img" width={62} height={62} />
                <h2 className="text-white text-base leading-[150%] font-semibold  mt-3">{obj.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Oppertunity;
