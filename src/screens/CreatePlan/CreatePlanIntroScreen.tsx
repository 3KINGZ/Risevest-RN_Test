import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";

import { COLORS, FONTS } from "themes";
import { wp, hp } from "utils";
import { guides } from "constants";
import { IMAGES } from "assets/images";
import { Header, Spacer } from "components";
import { IntroGuide } from "./components";
import { routes } from "navigation/routes";

export const CreatePlanIntroScreen = ({ navigation }: any) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Header cancel />
      <View>
        <Text style={styles.headerText}>Reach your goals faster</Text>
        <Spacer space={40} />
        <Image source={IMAGES.planIntro} style={styles.image} />
      </View>

      <View style={{ width: "100%" }}>
        {guides.map((guide: any) => (
          <IntroGuide key={guide.title} guide={guide} />
        ))}
      </View>

      <Button
        onPress={() => navigation.navigate(routes.createPlanGoalName)}
        mode="contained"
        color={COLORS.onboard3_secondary}
        style={{ paddingVertical: 10, width: "100%" }}
        labelStyle={{
          textTransform: "none",
          fontFamily: FONTS.DM_SANS.bold,
          fontSize: wp(15),
        }}>
        Continue
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  headerText: {
    fontSize: wp(15),
    textAlign: "center",
    fontFamily: FONTS.DM_SANS.regular,
    color: COLORS.grey_03,
  },
  image: {
    width: wp(105),
    height: hp(105),
    resizeMode: "contain",
    alignSelf: "center",
  },
});
