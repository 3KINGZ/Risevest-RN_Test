import { IMAGES } from "assets/images";
import { ImageSourcePropType } from "react-native";

export const getMonthDate = (date: any) => {
  if (!date) {
    return;
  }

  date = new Date(date);

  const month = date.getMonth();
  const _date = date.getDate();
  const year = date.getFullYear();

  return `${_date}/${month + 1}/${year}`;
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const generateGreeting = () => {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 17) {
    return "Good evening";
  } else if (hour >= 12 && hour <= 17) {
    return "Good afternoon";
  } else {
    return "Good morning";
  }
};

export const mapPlanToImage = (planName: string) => {
  planName = planName.toLowerCase();

  if (
    planName.includes("family") ||
    planName.includes("wedding") ||
    planName.includes("marriage")
  ) {
    return IMAGES.union;
  } else if (planName.includes("home") || planName.includes("housing")) {
    return IMAGES.housing;
  } else if (
    planName.includes("education") ||
    planName.includes("school") ||
    planName.includes("schooling") ||
    planName.includes("university")
  ) {
    return IMAGES.education;
  } else if (planName.includes("saving") || planName.includes("save")) {
    return IMAGES.savings;
  } else if (
    planName.includes("travel") ||
    planName.includes("travelling") ||
    planName.includes("ticket")
  ) {
    return IMAGES.travel;
  } else if (planName.includes("business") || planName.includes("start up")) {
    return IMAGES.business;
  } else {
    return IMAGES.wealth;
  }
};
