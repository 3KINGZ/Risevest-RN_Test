/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeScreen,
  PlansScreen,
  WalletScreen,
  FeedScreen,
  AccountScreen,
} from "screens";
import { routes } from "./routes";
import { TabIcon } from "components";
import { hp } from "utils";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: routes.home,
    screen: HomeScreen,
  },
  {
    name: routes.plans,
    screen: PlansScreen,
  },
  {
    name: routes.wallet,
    screen: WalletScreen,
  },
  {
    name: routes.feed,
    screen: FeedScreen,
  },
  {
    name: routes.account,
    screen: AccountScreen,
  },
];

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.screen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: hp(70),
            },
            tabBarIcon: ({ focused }) => (
              <TabIcon name={tab.name} active={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
