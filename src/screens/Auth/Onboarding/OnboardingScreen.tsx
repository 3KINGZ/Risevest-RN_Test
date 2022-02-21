import React, { useRef } from "react";
import Swiper from "react-native-swiper";

import { Onboarding } from "./components";
import { IMAGES } from "assets/images";
import { COLORS } from "themes";
import { useState } from "react";

const onboardings = [
  {
    index: 0,
    title: "Quality assets",
    subtitle:
      "Rise invests your money into the best dollar investments around the world",
    image: IMAGES.onboard1,
    primaryColor: COLORS.onboard1_primary,
    secondaryColor: COLORS.onboard1_secondary,
  },
  {
    index: 1,
    title: "Superior Selection",
    subtitle:
      "Our expert team and intelligent algorithms select assets that beats the markets",
    image: IMAGES.onboard2,
    primaryColor: COLORS.onboard2_primary,
    secondaryColor: COLORS.onboard2_secondary,
  },
  {
    index: 2,
    title: "Better Performance",
    subtitle:
      "You earn more returns, achieve more of your financial goals and protect your money from devaluation.",
    image: IMAGES.onboard3,
    primaryColor: COLORS.onboard3_primary,
    secondaryColor: COLORS.onboard3_secondary,
  },
];

export const OnboardingScreen = () => {
  const [paginationIndex, setPaginationIndex] = useState(0);

  const swiperRef = useRef(null);

  const next = () => swiperRef?.current?.scrollBy(1, true);

  return (
    <Swiper
      loop={false}
      onIndexChanged={index => setPaginationIndex(index)}
      activeDotColor={onboardings[paginationIndex].secondaryColor}>
      {onboardings.map(onboarding => (
        <Onboarding
          key={onboarding.index}
          onboardData={onboarding}
          next={next}
        />
      ))}
    </Swiper>
  );
};
