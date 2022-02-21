import React from "react";
import { View, StyleSheet } from "react-native";

import { COLORS } from "themes";

const Dot = ({ active, color }: { active: Boolean; color: string }) => (
  <View
    style={active ? [styles.dot, { backgroundColor: color }] : styles.dot}
  />
);

interface IPagination {
  activeIndex: number;
  color: string;
}

const dots = [0, 1, 2];

export const Pagination = ({ activeIndex, color }: IPagination) => {
  return (
    <View>
      {dots.map(dot => (
        <Dot key={dot} active={activeIndex === dot} color={color} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.grey_01,
  },
  dotActive: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
