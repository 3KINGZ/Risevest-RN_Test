import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { COLORS, FONTS } from "themes";
import { wp } from "utils";

export const PlaceholderScreen = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: wp(20),
    fontFamily: FONTS.DM_SANS.bold,
    textTransform: "capitalize",
    color: COLORS.black_02,
  },
});
