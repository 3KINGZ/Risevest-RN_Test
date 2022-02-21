import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { ProgressBar } from "react-native-paper";

import { hp, wp } from "utils";
import { COLORS, FONTS } from "themes";
import { Spacer } from "components";

export const Progress = ({
  progress,
  questionIndex,
}: {
  progress: number;
  questionIndex: number;
}) => {
  return (
    <View>
      <Text style={styles.question}>{`Question ${questionIndex} of 3`}</Text>
      <Spacer space={10} />
      <ProgressBar progress={progress} style={styles.progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(10),
    width: "100%",
    borderRadius: 5,
  },
  question: {
    fontFamily: FONTS.DM_SANS.regular,
    fontSize: wp(15),
    color: COLORS.grey_03,
  },
  progress: {
    height: hp(10),
    borderRadius: 5,
    backgroundColor: COLORS.light_teal,
  },
});
