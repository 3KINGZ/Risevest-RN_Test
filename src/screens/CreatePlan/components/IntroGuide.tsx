import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AIcon from "react-native-vector-icons/AntDesign";
import { COLORS, FONTS } from "themes";
import { wp } from "utils";
import { Spacer } from "components";

interface IIntroGuides {
  guide: {
    title: string;
    subtitle: string;
    icon: string;
  };
}

export const IntroGuide = ({ guide }: IIntroGuides) => {
  const { icon, title, subtitle } = guide;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AIcon name={icon} color={COLORS.primary} size={wp(20)} />
      </View>
      <View style={styles.guideContainer}>
        <Text style={styles.title}>{title}</Text>
        <Spacer space={3} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
  },
  iconContainer: {
    backgroundColor: COLORS.light_teal,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  guideContainer: {
    flex: 1,
  },
  title: {
    fontSize: wp(15),
    fontFamily: FONTS.DM_SANS.bold,
    color: COLORS.black_01,
  },
  subtitle: {
    fontSize: wp(13),
    fontFamily: FONTS.DM_SANS.regular,
    color: COLORS.grey_03,
  },
});
