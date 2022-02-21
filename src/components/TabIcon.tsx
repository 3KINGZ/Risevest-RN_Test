import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import EIcon from "react-native-vector-icons/Entypo";

import { IMAGES } from "assets/images";
import { COLORS, FONTS } from "themes";
import { hp, wp } from "utils";

interface ITabIcon {
  name: string;
  active: boolean;
}

export const TabIcon = ({ name, active }: ITabIcon) => {
  const getTintColor = (name: string, active: boolean) => {
    if (active && name.toLowerCase() !== "account") {
      return COLORS.onboard3_secondary;
    } else if (!active && name.toLowerCase() !== "account") {
      return COLORS.grey_04;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={IMAGES[name.toLowerCase()]}
        tintColor={getTintColor(name.toLowerCase(), active)}
      />
      <View style={{ marginTop: 5, height: hp(18) }}>
        {active ? (
          <EIcon
            name="dot-single"
            size={wp(20)}
            color={COLORS.onboard3_secondary}
          />
        ) : (
          <Text style={styles.label}>{name}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: wp(20),
    height: hp(20),
    resizeMode: "contain",
  },
  label: {
    color: COLORS.grey_04,
    fontSize: wp(12),
    fontFamily: FONTS.DM_SANS.regular,
  },
});
