import React, { useState } from "react";
import { TextInputProps, View } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { hp, wp } from "utils";

import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "themes";

const checked = require("assets/images/Icons/Checked.png");

interface IFormTextInput {
  name: string;
  label?: string;
  type?: "password" | undefined;
  value?: any;
}

export const FormTextInput = ({
  name,
  label,
  type,
  ...otherProps
}: IFormTextInput) => {
  const [showPassword, setShowPassword] = useState(true);

  const Eye = () => (
    <>
      {type === "password" ? (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            size={25}
            color={COLORS.onboard3_secondary}
          />
        </TouchableOpacity>
      ) : null}
    </>
  );

  const Icons = () => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        width: 100,
      }}>
      {type === "password" ? <Eye /> : null}
    </View>
  );

  const Right = (
    <TextInput.Icon
      style={{
        width: 100,
        marginRight: 60,
        zIndex: 1,
      }}
      name={() => <Icons />}
    />
  );

  return (
    <>
      <TextInput
        mode="outlined"
        style={{
          // height: hp(60),
          fontSize: wp(15),
          fontFamily: FONTS.DM_SANS.bold,
          color: COLORS.black_02,
        }}
        outlineColor={COLORS.grey_02}
        label={label}
        secureTextEntry={type === "password" ? showPassword : false}
        right={Right}
        {...otherProps}
      />
    </>
  );
};
