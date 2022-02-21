import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { wp } from "utils";
import { COLORS, FONTS } from "themes";
import { FormTextInput, Spacer } from "components";

interface IPlanInput {
  title: string;
  onPress: () => void;
  label?: string;
  onChangeText: (text: string) => string;
  disabled: boolean;
  placeholder: string;
  textContentType?: string;
  keyboardType?: string;
}

export const PlanInput = ({
  title,
  onPress,
  label,
  onChangeText,
  disabled,
  placeholder,
  textContentType,
  keyboardType,
}: IPlanInput) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Spacer space={10} />
      <FormTextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        textContentType={textContentType}
        keyboardType={keyboardType}
      />
      <Spacer space={17} />
      <Button
        onPress={disabled ? null : onPress}
        mode="contained"
        color={COLORS.onboard3_secondary}
        style={{
          paddingVertical: 10,
          width: "100%",
          opacity: disabled ? 0.3 : 1,
        }}
        labelStyle={{
          textTransform: "none",
          fontFamily: FONTS.DM_SANS.bold,
          fontSize: wp(15),
        }}>
        Continue
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: wp(17),
    fontFamily: FONTS.DM_SANS.bold,
    color: COLORS.black_01,
  },
});
