import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, FONTS } from "themes";
import { wp } from "utils";

interface ITableData {
  label: string;
  value: string;
  last?: boolean;
}

export const TableData = ({ label, value, last }: ITableData) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomWidth: !last ? 1 : 0,
        },
      ]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.data}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: COLORS.light_teal,
    paddingVertical: 10,
  },
  label: {
    fontSize: wp(15),
    color: COLORS.blue_02,
    fontFamily: FONTS.DM_SANS.regular,
  },
  data: {
    fontSize: wp(15),
    color: COLORS.black_01,
    fontFamily: FONTS.DM_SANS.regular,
  },
});
