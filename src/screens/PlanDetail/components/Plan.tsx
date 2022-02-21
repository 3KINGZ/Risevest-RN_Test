import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import AICon from "react-native-vector-icons/AntDesign";

import { mapPlanToImage } from "helpers";
import { wp, hp } from "utils";
import { FONTS } from "themes";

export const Plan = ({ plan }) => {
  const image = mapPlanToImage(plan.plan_name);

  return (
    <ImageBackground
      resizeMode="cover"
      source={image}
      style={styles.container}
      imageStyle={{ borderRadius: 15 }}>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.planName}>{plan.plan_name}</Text>
          <Text style={styles.amount}>{plan.target_amount}</Text>
        </View>
        <AICon name="arrowright" size={wp(14)} color="white" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(243),
    width: Dimensions.get("window").width / 2 - 20,
    padding: 15,
    margin: 5,
  },
  textContainer: {
    position: "absolute",
    bottom: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    left: 15,
    width: "100%",
  },
  planName: {
    fontSize: wp(15),
    fontFamily: FONTS.DM_SANS.regular,
    color: "white",
  },
  amount: {
    fontSize: wp(18),
    fontFamily: FONTS.DM_SANS.regular,
    color: "white",
  },
});
