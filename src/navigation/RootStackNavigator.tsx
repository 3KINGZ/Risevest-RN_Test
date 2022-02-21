import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";

import { AuthStackNavigator } from "./AuthStackNavigator";
import { routes } from "./routes";
import { AppTabNavigator } from "./AppTabNavigator";
import { AppStackNavigator } from "./AppStackNavigator";
import { SplashScreen } from "screens";
import { getValue } from "utils";
import { syncAuthData } from "store/slices/auth.slice";

const Stack = createStackNavigator();

export const RootStackNavigator = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    const user = await getValue("@user");
    if (user) {
      dispatch(syncAuthData(JSON.parse(user)));
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      {loading ? (
        <Stack.Screen name={routes.splash} component={SplashScreen} />
      ) : !loading && user ? (
        <>
          <Stack.Screen name={routes.app} component={AppTabNavigator} />
          <Stack.Screen name={routes.app2} component={AppStackNavigator} />
        </>
      ) : (
        <Stack.Screen name={routes.auth} component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};
