import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PlanInput, Progress } from "./components";
import { Header, Spacer } from "components";
import { routes } from "navigation/routes";
import { setPlanField } from "store/slices/plans.slice";

export const TargetAmountScreen = ({ navigation }: any) => {
  const { newPlan } = useSelector(state => state.plans);

  const dispatch = useDispatch();

  console.log("plan", newPlan);

  const _setPlanField = (key: string, value: number) =>
    dispatch(setPlanField({ key, value }));

  return (
    <View style={styles.container}>
      <Header />

      <Progress progress={0.65} questionIndex={1} />

      <Spacer space={25} />

      <PlanInput
        title="How much do you need?"
        placeholder="Target amount"
        disabled={!newPlan.target_amount ? true : false}
        onPress={() => navigation.navigate(routes.createPlanTargetDate)}
        keyboardType="number-pad"
        onChangeText={text => _setPlanField("target_amount", Number(text))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "white",
  },
});
