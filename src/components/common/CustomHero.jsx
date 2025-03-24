import React from 'react'
import Image from 'next/image'
const CustomHero = ({
  bgClass,
  headingText,
  headingStyle,
  descriptionOneText,
  descriptionOneStyle,
  headingTextTwo,
  descriptionFourText,
  descriptionThreeText,
  descriptionTwoText,
  descriptionFiveText,
  Img,
  mainClass,
  idClass,
}) => {
  return (
    <>
      <div
        id={idClass}
        className={`flex max-lg:flex-wrap px-4 absolute max-lg:relative max-lg:top-0 max-lg:left-0 max-lg:translate-x-0 max-lg:translate-y-0 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] items-center gap-4 w-full max-w-[1140px] mx-auto ${mainClass}`}
      >
        <div
          className={`${bgClass} w-full max-w-[525px] rounded-[16px] max-lg:max-w-full  h-[675px] max-xl:h-[600px]  max-lg:h-full p-5`}
        >
          <h1
            className={`${headingStyle} font-semibold  text-[26px] leading-[130%]`}
          >
            {headingText}
          </h1>
          <p
            className={`${descriptionOneStyle} font-normal mt-[26px] text-[16px]   leading-[150%]`}
          >
            {descriptionOneText}
          </p>
          <p
            className={`${descriptionOneStyle} font-normal text-[16px] mt-2   leading-[150%]`}
          >
            {descriptionTwoText}
          </p>
          <p
            className={`${descriptionOneStyle} font-normal mt-2 text-[16px]   leading-[150%]`}
          >
            {descriptionThreeText}
          </p>
          <p
            className={`${descriptionOneStyle} font-normal mt-2 text-[16px]   leading-[150%]`}
          >
            {descriptionFourText}
          </p>
          <h2
            className={`${headingStyle} font-semibold text-[26px] mt-[26px]   leading-[130%] `}
          >
            {headingTextTwo}
          </h2>
          <p
            className={`font-normal   mt-[26px] max-md:mt-2 text-[16px] leading-[150%] ${descriptionOneStyle}`}
          >
            {descriptionFiveText}
          </p>
        </div>
        <div className={`w-full`}>
          <Image
            src={Img}
            alt="img"
            width={604}
            height={675}
            className="w-full max-w-[604px] h-[675px] max-xl:h-full"
          />
        </div>
      </div>
    </>
  );
};

export default CustomHero