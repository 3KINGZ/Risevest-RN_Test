import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";

import { COLORS } from "themes";
import { wp } from "utils";

export const CheckBox = ({ checked }: { checked: boolean }) => {
  return (
    <View
      style={
        checked
          ? [styles.container, { backgroundColor: COLORS.onboard3_secondary }]
          : styles.container
      }>
      {checked ? <AIcon name="check" color="white" size={wp(8)} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.onboard3_secondary,
    borderWidth: 1,
  },
});
