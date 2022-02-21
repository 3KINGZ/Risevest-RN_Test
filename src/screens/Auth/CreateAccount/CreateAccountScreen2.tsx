import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import { wp } from "utils";
import { FONTS, COLORS } from "themes";
import { DateInput, FormTextInput, Spacer } from "components";
import { routes } from "navigation/routes";
import { setAccountField, signUp } from "store/slices/auth.slice";

export const CreateAccountScreen2 = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { account, signingUp } = useSelector(state => state.auth);

  const { first_name, last_name, date_of_birth, username, phonenumber } =
    account;

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(first_name && last_name && date_of_birth ? false : true);
  }, [first_name, last_name, date_of_birth]);

  const _onChangeAccount = (key: string, value: string) => {
    dispatch(setAccountField({ key, value }));
  };

  const register = () => {
    dispatch(signUp(account));
  };

  console.log("acc", account);
  console.log("sig", signingUp);

  return (
    <>
      <Spinner visible={signingUp} textContent={"Creating account..."} />
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headerText}>Tell Us More About You</Text>
          <Text style={styles.subtitle}>
            Please use your name as it appears on your ID.
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <FormTextInput
            value={first_name}
            label="Legal First Name"
            textContentType="name"
            onChangeText={text => _onChangeAccount("first_name", text)}
          />
          <Spacer />
          <FormTextInput
            value={last_name}
            label="Legal Last Name"
            textContentType="middleName"
            onChangeText={text => _onChangeAccount("last_name", text)}
          />
          <Spacer />
          <FormTextInput
            value={username}
            label="Nick name"
            textContentType="username"
            onChangeText={text => _onChangeAccount("username", text)}
          />
          <Spacer />
          <FormTextInput
            value={phonenumber}
            label="Phone Number"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            onChangeText={text => _onChangeAccount("phonenumber", text)}
          />
          <Spacer />
          <DateInput
            value={account.date_of_birth}
            onChangeText={text => _onChangeAccount("date_of_birth", text)}
          />
        </View>

        <Button
          // onPress={() => navigation.navigate(routes.createAccountSuccess)}
          onPress={register}
          mode="contained"
          color={COLORS.onboard3_secondary}
          style={{
            marginTop: 10,
            opacity: disabled ? 0.3 : 1,
            paddingVertical: 5,
          }}
          labelStyle={{
            textTransform: "none",
            fontFamily: FONTS.DM_SANS.bold,
            fontSize: wp(15),
          }}>
          Sign Up
        </Button>

        <Text style={styles.termsText}>
          By cicking Continue, you agree to our{" "}
          <Text style={styles.link}>Terms of Service</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </ScrollView>
    </>
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
  termsText: {
    width: "70%",
    textAlign: "center",
    fontSize: wp(12),
    fontFamily: FONTS.DM_SANS.medium,
    alignSelf: "center",
    marginTop: 20,
    color: COLORS.black_03,
  },
  link: {
    color: COLORS.onboard3_secondary,
  },
});
