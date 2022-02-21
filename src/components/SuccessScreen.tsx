import React from "react";
import { Spacer } from "components";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import FIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS } from "themes";
import { wp } from "utils";

interface ISuccessScreen {
  title: string;
  subtitle: string;
  onPress?: () => void;
  buttonLabel?: string;
}

export const SuccessScreen = ({
  title,
  subtitle,
  onPress,
  buttonLabel,
}: ISuccessScreen) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.check}>
          <FIcon name="check" size={54} color={COLORS.onboard3_secondary} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>{title}</Text>
          <Spacer />
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <Button
        onPress={onPress}
        mode="contained"
        color={COLORS.onboard3_secondary}
        style={{
          marginTop: 10,
          paddingVertical: 10,
          width: "100%",
          position: "absolute",
          bottom: 50,
        }}
        labelStyle={{
          textTransform: "none",
          fontFamily: FONTS.DM_SANS.bold,
          fontSize: wp(15),
        }}>
        {buttonLabel || "Okay"}
      </Button>
    </View>
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
