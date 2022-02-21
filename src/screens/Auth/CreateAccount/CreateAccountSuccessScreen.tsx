import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { Spacer, SuccessScreen } from "components";
import { COLORS, FONTS } from "themes";
import { wp } from "utils";
import { routes } from "navigation/routes";

export const CreateAccountSuccessScreen = ({ navigation }: any) => {
  return (
    <SuccessScreen
      title="You just created your Rise account"
      subtitle="Welcome to Rise, let’s take you home"
      onPress={() => navigation.navigate(routes.signin)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    flex: 1,
    paddingTop: 70,
    backgroundColor: "white",
  },
  check: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.disabled,
    alignSelf: "center",
  },
  title: {
    fontSize: wp(20),
    textAlign: "center",
    color: COLORS.black_01,
    width: "80%",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: wp(15),
    textAlign: "center",
    color: COLORS.blue_02,
    width: "70%",
    alignSelf: "center",
    fontFamily: FONTS.DM_SANS.regular,
  },
});
