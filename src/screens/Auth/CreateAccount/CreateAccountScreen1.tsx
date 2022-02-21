import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { wp } from "utils";
import { COLORS, FONTS } from "themes";
import { Check } from "./components";
import { FormTextInput, Spacer } from "components";
import { routes } from "navigation/routes";
import { useDispatch, useSelector } from "react-redux";
import { setAccountField } from "store/slices/auth.slice";
import { validateEmail } from "helpers";

export const CreateAccountScreen1 = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { account } = useSelector(state => state.auth);

  const { email_address, password } = account;

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(
      email_address &&
        password.length > 8 &&
        password.match(/^(?=.*[A-Z]).*$/) &&
        password.match(/\W+/) &&
        validateEmail(email_address)
        ? false
        : true,
    );
  }, [email_address, password]);

  console.log("jsss", account);

  const _onChangeAccount = (key: string, value: string) => {
    dispatch(setAccountField({ key, value }));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Create an account</Text>
        <Text style={styles.subtitle}>
          Start building your dollar-denominated investment portfolio
        </Text>
      </View>

      <View style={styles.inputsContainer}>
        <FormTextInput
          value={email_address}
          label="Email address"
          onChangeText={(text: string) =>
            _onChangeAccount("email_address", text)
          }
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Spacer />
        <FormTextInput
          value={password}
          label="Password"
          type="password"
          textContentType="newPassword"
          onChangeText={(text: string) => _onChangeAccount("password", text)}
        />
      </View>

      <View>
        <Check value={password.length >= 8} label="Minimum of 8 characters" />
        <Check
          value={password.match(/^(?=.*[A-Z]).*$/) ? true : false}
          label="One UPPERCASE character"
        />
        <Check
          value={password.match(/\W+/) ? true : false}
          label="One unique character (e.g: !@#$%^&*?)"
        />
      </View>

      <Button
        mode="contained"
        color={COLORS.onboard3_secondary}
        style={{
          marginTop: 10,
          opacity: disabled ? 0.3 : 1,
          paddingVertical: 5,
        }}
        onPress={
          disabled ? null : () => navigation.navigate(routes.createAccount2)
        }
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
  container: {
    paddingHorizontal: 15,
    paddingTop: 50,
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: wp(20),
    color: COLORS.black_01,
    marginBottom: 10,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: wp(15),
    color: COLORS.blue_02,
    fontFamily: FONTS.DM_SANS.regular,
    lineHeight: 22,
  },
  inputsContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});
