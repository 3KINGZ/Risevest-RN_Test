import { PlanHeader, Spacer } from "components";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SIcon from "react-native-vector-icons/SimpleLineIcons";

import { Button } from "react-native-paper";
import { COLORS, FONTS } from "themes";
import { wp } from "utils";

import { TableData, Transaction } from "./components";
import { FlatList } from "react-native-gesture-handler";

const transactions = [
  {
    transaction: "Received from Bank Account (BOSUN TONY ADEMOSU)",
    date: "Jul 6, 2021",
    type: "incoming",
    amount: "$320.90",
  },
  {
    transaction: "Sent to Bank Account (ADEBAYO MUSILIU JAGUN)",
    date: "Jul 6, 2021",
    type: "outgoing",
    amount: "$2,942.55",
  },
  {
    transaction:
      "Sent to Service (PAYSTACK 001WA00948 - AMARDA VENTURES LIMITED)",
    date: "Jul 6, 2021",
    type: "outgoing",
    amount: "$500.12",
  },
  {
    transaction: "Received from Bank Account (TITUS CLEOPATRA MEDINA)",
    date: "Jul 6, 2021",
    type: "incoming",
    amount: "$1,840.69",
  },
  {
    transaction: "Received from Rise Plan (SAVE FOR SCHOOL)",
    date: "Jul 6, 2021",
    type: "incoming",
    amount: "$528.04",
  },
];

export const PlanDetailScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}>
      <PlanHeader title="Build wealth" />
      <Text>PlanDetailScreen</Text>
      <View>
        <Text style={styles.planBalance}>Plan Balance</Text>
        <Text style={styles.balance}>$0.00</Text>
        <Spacer space={10} />
        <View>
          <Text style={styles.gains}>Gains</Text>
          <Text style={styles.gainsValue}>+$5,000.43 +12.4%</Text>
        </View>
      </View>

      <Spacer space={10} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Results are updated monthly</Text>
      </View>

      <Spacer space={10} />

      <Button
        mode="contained"
        style={{
          backgroundColor: COLORS.light_teal,
          width: "100%",
          padding: 8,
          elevation: 0,
        }}
        labelStyle={{
          textTransform: "none",
          color: COLORS.primary,
          fontSize: wp(15),
          fontFamily: FONTS.DM_SANS.bold,
        }}>
        + Fund plan
      </Button>

      <Spacer space={10} />

      <View style={{ width: "100%" }}>
        <TableData label="Total earnings" value="$12,000.09" />
        <TableData label="Current earnings" value="$12,000.09" />
        <TableData label="Deposit value" value="$12,000.09" />
        <TableData label="Balance in Naira" value="$12,000.09" />
        <TableData label="Plan created on" value="23rd July 2019" />
        <TableData label="Maturity date" value="24th July 2022" last />
      </View>

      <Spacer space={10} />

      <View style={{ width: "100%" }}>
        <View style={styles.transactionHeaderContainer}>
          <Text style={styles.transactionText}>Recent transactions</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: FONTS.DM_SANS.bold,
                fontSize: wp(14),
                color: COLORS.primary,
                marginRight: 5,
              }}>
              View all
            </Text>
            <SIcon
              name="arrow-right"
              color={COLORS.primary}
              style={{ fontWeight: "bold" }}
            />
          </View>
        </View>

        <Spacer />

        <FlatList
          data={transactions}
          renderItem={({ item }) => <Transaction transaction={item} />}
          ItemSeparatorComponent={() => <Spacer />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    flex: 1,
  },
  planBalance: {
    fontSize: wp(15),
    color: COLORS.blue_02,
    fontFamily: FONTS.DM_SANS.regular,
    textAlign: "center",
  },
  balance: {
    fontSize: wp(15),
    color: COLORS.black_01,
    fontFamily: FONTS.DM_SANS.bold,
    textAlign: "center",
  },
  gains: {
    fontSize: wp(15),
    color: COLORS.black_03,
    fontFamily: FONTS.DM_SANS.regular,
    textAlign: "center",
  },
  gainsValue: {
    fontSize: wp(16),
    color: COLORS.green_01,
    fontFamily: FONTS.DM_SANS.regular,
    textAlign: "center",
  },
  infoContainer: {
    paddingVertical: 5,
    backgroundColor: COLORS.light_teal,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  infoText: {
    fontSize: wp(13),
    color: COLORS.grey_03,
    fontFamily: FONTS.DM_SANS.regular,
    textAlign: "center",
  },
  transactionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  transactionText: {
    fontSize: wp(18),
    letterSpacing: -0.02,
    color: "black",
  },
});
