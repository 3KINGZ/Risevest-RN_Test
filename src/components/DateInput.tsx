import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AIcon from "react-native-vector-icons/AntDesign";

import { hp, wp } from "utils";
import { getMonthDate } from "helpers";
import { COLORS } from "themes";

interface IFormTextInput {
  name: string;
  label?: string;
  type?: "password" | undefined;
  value?: any;
  onChangeText: (date: string) => void;
}

export const DateInput = ({
  name,
  label,
  type,
  value,
  onChangeText,
  ...otherProps
}: IFormTextInput) => {
  const [openDate, setOpenDate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const _setDate = (event: any, selectedDate: any) => {
    setOpenDate(false);
    const currentDate = selectedDate;
    console.log("curr", currentDate);
    onChangeText(currentDate);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={{
            flex: 1,
            height: "100%",
            color: COLORS.black_02,
            fontWeight: "bold",
            paddingLeft: 15,
          }}
          onFocus={() => setOpenDate(true)}
          value={getMonthDate(value)}
          {...otherProps}
        />
        <TouchableWithoutFeedback onPress={() => setOpenDate(true)}>
          <View style={{ width: wp(50), alignItems: "center" }}>
            <AIcon name="calendar" color={COLORS.primary} size={wp(20)} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      {openDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value || new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={_setDate}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(55),
    flexDirection: "row",
    borderColor: COLORS.grey_02,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 5,
  },
});
