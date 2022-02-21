import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import {
  CreatePlanIntroScreen,
  CreatePlanSuccessScreen,
  GoalNameScreen,
  PlanDetailScreen,
  PlansScreen,
  ReviewScreen,
  TargetAmountScreen,
  TargetDateScreen,
} from "screens";

const Stack = createStackNavigator();

const screens = [
  {
    name: routes.createPlanIntro,
    screen: CreatePlanIntroScreen,
  },
  {
    name: routes.createPlanGoalName,
    screen: GoalNameScreen,
  },
  {
    name: routes.createPlanTargetAmount,
    screen: TargetAmountScreen,
  },
  {
    name: routes.createPlanTargetDate,
    screen: TargetDateScreen,
  },
  {
    name: routes.review,
    screen: ReviewScreen,
  },
  {
    name: routes.createPlanSuccess,
    screen: CreatePlanSuccessScreen,
  },
  {
    name: routes.planDetail,
    screen: PlanDetailScreen,
  },
  {
    name: routes.plans,
    screen: PlansScreen,
  },
];

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.screen}
        />
      ))}
    </Stack.Navigator>
  );
};
