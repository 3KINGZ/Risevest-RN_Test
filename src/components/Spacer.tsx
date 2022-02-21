import React from "react";
import { View } from "react-native";

export const Spacer = ({
  space,
  horizontal,
}: {
  space?: number;
  horizontal?: boolean;
}) => (
  <View
    style={{
      marginVertical: !horizontal && space ? space : !horizontal ? 5 : 0,
      marginHorizontal: horizontal && space ? space : horizontal ? 5 : 0,
    }}
  />
);
