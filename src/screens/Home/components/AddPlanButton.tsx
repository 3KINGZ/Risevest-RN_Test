import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS } from "themes";
import { hp, wp } from "utils";
import { routes } from "navigation/routes";

export const AddPlanButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(routes.app2, { screen: routes.planDetail })
      }>
      <View style={styles.addContainer}>
        <AIcon name="plus" color={COLORS.teal_01} size={wp(20)} />
      </View>
      <Text style={styles.btnText}>Create an investment plan</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(243),
    width: wp(188),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: COLORS.light_teal,
  },
  addContainer: {
    backgroundColor: COLORS.light_teal2,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    marginTop: 10,
    width: "70%",
    textAlign: "center",
    lineHeight: 20,
    fontFamily: FONTS.DM_SANS.bold,
    color: COLORS.black_04,
  },
});
