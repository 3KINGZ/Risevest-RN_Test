import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Share } from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

import { COLORS, FONTS } from "themes";
import { wp } from "utils";

export const Quote = () => {
  const { quote } = useSelector(state => state.quote);

  const shareQuote = async () => {
    try {
      const result = await Share.share({
        message: `${quote?.quote}`,
      });
    } catch (error) {
      //err
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TODAY'S QUOTE</Text>

      <View style={styles.seperator} />

      <Text style={styles.quote}>{quote?.quote}</Text>

      <View style={styles.shareContainer}>
        <Text style={styles.author}>{quote?.author}</Text>
        <TouchableOpacity
          style={styles.shareMainContainer}
          onPress={shareQuote}>
          <MIcon name="share-variant-outline" size={wp(20)} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
  },
  headerText: {
    fontFamily: FONTS.DM_SANS.bold,
    fontSize: wp(14),
    color: "white",
  },
  seperator: {
    borderBottomWidth: 2,
    borderColor: "white",
    width: wp(28),
    marginVertical: 15,
  },
  quote: {
    fontFamily: FONTS.DM_SANS.regular,
    fontSize: wp(15),
    color: "white",
    lineHeight: 22,
  },
  shareContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    fontFamily: FONTS.DM_SANS.bold,
    fontSize: wp(15),
    color: "white",
  },
  shareMainContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.light_teal3,
    alignItems: "center",
    justifyContent: "center",
  },
});
