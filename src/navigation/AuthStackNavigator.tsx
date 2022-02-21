import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import {
  CreateAccountScreen1,
  CreateAccountScreen2,
  CreateAccountSuccessScreen,
  OnboardingScreen,
  SignInScreen,
} from "../screens";

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      <Stack.Screen name={routes.onboarding} component={OnboardingScreen} />
      <Stack.Screen
        name={routes.createAccount1}
        component={CreateAccountScreen1}
      />
      <Stack.Screen
        name={routes.createAccount2}
        component={CreateAccountScreen2}
      />
      <Stack.Screen
        name={routes.createAccountSuccess}
        component={CreateAccountSuccessScreen}
      />
      <Stack.Screen name={routes.signin} component={SignInScreen} />
    </Stack.Navigator>
  );
};
