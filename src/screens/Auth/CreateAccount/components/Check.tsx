import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CheckBox } from "components";
import { FONTS } from "themes";

interface ICheck {
  value: boolean;
  label: string;
}

export const Check = ({ value, label }: ICheck) => {
  return (
    <View style={styles.container}>
      <CheckBox checked={value} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontFamily: FONTS.DM_SANS.regular,
    marginLeft: 5,
    fontWeight: "400",
    color: "black",
  },
});
