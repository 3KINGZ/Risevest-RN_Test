import { DefaultTheme } from "react-native-paper";

import { COLORS } from "./colors";
import { FONTS } from "./fonts";

export const paperTheme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    background: "transparent",
    placeholder: COLORS.black_02,
  },
  fonts: {
    regular: FONTS.DM_SANS.regular,
    medium: FONTS.DM_SANS.medium,
    light: FONTS.DM_SANS.regular,
    thin: FONTS.DM_SANS.medium,
  },
};
