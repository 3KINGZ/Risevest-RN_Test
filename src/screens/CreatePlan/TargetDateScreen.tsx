import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch, useSelector } from "react-redux";

import { wp } from "utils";
import { COLORS, FONTS } from "themes";
import { DateInput, Header, Spacer } from "components";
import { Progress } from "./components";
import { setPlanField, _createPlan } from "store/slices/plans.slice";

export const TargetDateScreen = () => {
  const { newPlan, creatingPlan } = useSelector(state => state.plans);

  const dispatch = useDispatch();

  console.log("plan", newPlan);

  const _setPlanField = (key: string, value: string) =>
    dispatch(setPlanField({ key, value }));

  const createPlan = () => {
    dispatch(_createPlan(newPlan));
  };

  return (
    <>
      <Header />
      <Spinner visible={creatingPlan} textContent={"Creating plan..."} />
      <View style={styles.container}>
        <Progress progress={1} questionIndex={3} />

        <Spacer space={35} />

        <View>
          <Text style={styles.title}>When do you want to withdraw?</Text>
          <Spacer space={10} />
          <DateInput
            onChangeText={date => _setPlanField("maturity_date", date)}
            value={newPlan.maturity_date}
          />
          <Spacer space={17} />
          <Button
            mode="contained"
            color={COLORS.onboard3_secondary}
            onPress={!newPlan.maturity_date ? null : createPlan}
            style={{
              paddingVertical: 10,
              width: "100%",
              opacity: !newPlan.maturity_date ? 0.3 : 1,
            }}
            labelStyle={{
              textTransform: "none",
              fontFamily: FONTS.DM_SANS.bold,
              fontSize: wp(15),
            }}>
            Continue
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: wp(17),
    fontFamily: FONTS.DM_SANS.bold,
    color: COLORS.black_01,
  },
});
