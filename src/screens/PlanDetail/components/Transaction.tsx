import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FIcon from "react-native-vector-icons/Feather";

import { COLORS, FONTS } from "themes";
import { wp } from "utils";

interface ITransaction {
  transaction: {
    transaction: string;
    date: string;
    type: "outgoing" | "incoming";
    amount: string;
  };
}

export const Transaction = ({ transaction }: ITransaction) => {
  const { transaction: transName, date, type, amount } = transaction;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              type === "outgoing" ? COLORS.lightRed : COLORS.lightGreen,
          },
        ]}>
        <FIcon
          size={wp(14)}
          name={type === "outgoing" ? "arrow-up-right" : "arrow-down-left"}
          color={type === "outgoing" ? COLORS.red : COLORS.green_01}
        />
      </View>
      <View style={styles.transDetailContainer}>
        <Text style={styles.trans}>{transName}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.amount}>{`${
        type === "outgoing" ? "-" : "+"
      }${amount}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
  transDetailContainer: {
    // flex: 1,
    width: "50%",
  },
  trans: {
    fontSize: wp(15),
    fontFamily: FONTS.DM_SANS.regular,
    color: COLORS.black_04,
    lineHeight: 22,
  },
  date: {
    fontSize: wp(13),
    fontFamily: FONTS.DM_SANS.regular,
    color: COLORS.grey_03,
    lineHeight: 19,
  },
  amount: {
    fontSize: wp(15),
    fontFamily: FONTS.DM_SANS.medium,
    color: COLORS.black_04,
    lineHeight: 20,
  },
});
