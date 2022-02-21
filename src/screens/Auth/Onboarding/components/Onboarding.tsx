import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import AIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS } from "themes";
import { hp, wp } from "utils";
import { routes } from "navigation/routes";

interface IOnboarding {
  onboardData: {
    index: number;
    title: string;
    subtitle: string;
    image: any;
    primaryColor: string;
    secondaryColor: string;
  };
  next: () => void;
}

export const Onboarding = ({ onboardData, next }: IOnboarding) => {
  const navigation = useNavigation();

  const { index, title, subtitle, image, primaryColor, secondaryColor } =
    onboardData;

  return (
    <View style={[styles.container, { backgroundColor: primaryColor }]}>
      <Image source={image} style={styles.image} />

      <View style={{ width: "100%" }}>
        <Text style={[styles.title, { color: secondaryColor }]}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {index === 2 ? (
        <View style={{ width: "100%" }}>
          <Button
            mode="contained"
            style={{
              elevation: 0,
              paddingVertical: 5,
              borderRadius: 5,
            }}
            labelStyle={{
              fontFamily: FONTS.DM_SANS.bold,
              textTransform: "none",
              fontSize: wp(15),
            }}
            onPress={() => navigation.navigate(routes.createAccount1)}>
            Sign Up
          </Button>
          <View style={{ marginVertical: 5 }} />
          <Button
            onPress={() => navigation.navigate(routes.signin)}
            mode="contained"
            color={COLORS.light_teal}
            style={{
              borderColor: COLORS.light_teal,
              elevation: 0,
              paddingVertical: 5,
              borderRadius: 5,
            }}
            contentStyle={{ borderColor: COLORS.light_teal }}
            labelStyle={{
              fontFamily: FONTS.DM_SANS.bold,
              textTransform: "none",
              color: COLORS.onboard3_secondary,
              fontSize: wp(15),
            }}>
            Sign In
          </Button>
        </View>
      ) : (
        <View style={styles.navBtnsContainer}>
          <TouchableOpacity
            style={styles.backBtnContainer}
            disabled={index === 0}>
            <AIcon
              name="arrowleft"
              size={wp(18)}
              color={index === 0 ? COLORS.grey_01 : secondaryColor}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextBtnContainer} onPress={next}>
            <Text style={[styles.nextText, { color: secondaryColor }]}>
              Next
            </Text>
            <AIcon name="arrowright" size={wp(18)} color={secondaryColor} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: wp(300),
    height: hp(300),
  },
  title: {
    fontSize: wp(20),
    marginBottom: 10,
  },
  subtitle: {
    fontSize: wp(15),
    color: COLORS.black_01,
    fontFamily: FONTS.DM_SANS.regular,
    lineHeight: 22,
  },
  navBtnsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: hp(70),
  },
  backBtnContainer: {
    width: wp(43),
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.grey_01,
    borderRadius: 5,
  },
  nextBtnContainer: {
    width: wp(103),
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.grey_01,
    borderRadius: 5,
  },
  nextText: {
    fontSize: wp(15),
    fontFamily: FONTS.DM_SANS.bold,
  },
});
