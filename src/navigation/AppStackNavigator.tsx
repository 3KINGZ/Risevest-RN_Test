import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FIcon from "react-native-vector-icons/Feather";

import { routes } from "./routes";
import {
  CreatePlanIntroScreen,
  CreatePlanSuccessScreen,
  GoalNameScreen,
  PlanDetailScreen,
  PlanGraphScreen,
  ReviewScreen,
  TargetAmountScreen,
  TargetDateScreen,
} from "screens";
import { COLORS } from "themes";
import { wp } from "utils";

const Stack = createStackNavigator();

const HeaderButton = ({ icon }: { icon: string }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        backgroundColor: COLORS.light_teal,
        marginLeft: 20,
      }}>
      <FIcon name={icon} color={COLORS.primary} size={wp(20)} />
    </TouchableOpacity>
  );
};

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
