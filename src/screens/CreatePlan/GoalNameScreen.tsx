import React from "react";
import { View, StyleSheet } from "react-native";

import { PlanInput, Progress } from "./components";
import { Header, Spacer } from "components";
import { routes } from "navigation/routes";
import { useDispatch, useSelector } from "react-redux";
import { setPlanField } from "store/slices/plans.slice";

export const GoalNameScreen = ({ navigation }: any) => {
  const { newPlan } = useSelector(state => state.plans);

  const dispatch = useDispatch();

  console.log("plan", newPlan);

  const _setPlanField = (key: string, value: string) =>
    dispatch(setPlanField({ key, value }));

  return (
    <>
      <View style={styles.container}>
        <Header />
        <Progress progress={0.33} questionIndex={1} />

        <Spacer space={25} />

        <PlanInput
          title="What are you saving for"
          placeholder="Goal Name"
          disabled={!newPlan.plan_name ? true : false}
          onPress={() => navigation.navigate(routes.createPlanTargetAmount)}
          onChangeText={text => _setPlanField("plan_name", text)}
        />
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
});
