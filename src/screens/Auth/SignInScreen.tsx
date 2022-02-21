import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { FormTextInput, Spacer } from "components";
import { COLORS, FONTS } from "themes";
import { wp } from "utils";
import { routes } from "navigation/routes";
import { signIn } from "store/slices/auth.slice";
import { validateEmail } from "helpers";

export const SignInScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const { signingUp, loggingIn } = useSelector(state => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch(signIn({ email_address: email, password }));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Welcome back</Text>
        <Spacer />
        <Text style={styles.subtitle}>
          Let’s get you logged in to get back to building your
          dollar-denominated investment portfolio.
        </Text>
        <Spacer space={15} />
      </View>

      <View>
        <FormTextInput
          label="Email address"
          onChangeText={text => setEmail(text)}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Spacer space={7} />
        <FormTextInput
          label="Password"
          type="password"
          onChangeText={text => setPassword(text)}
          textContentType="password"
        />
        <Spacer space={7} />
        <Button
          onPress={
            email && password && !loggingIn && validateEmail(email)
              ? login
              : null
          }
          mode="contained"
          color={COLORS.onboard3_secondary}
          style={{ paddingVertical: 8 }}
          loading={loggingIn}
          labelStyle={{
            textTransform: "none",
            opacity: !email && !password ? 0.3 : 1,
            fontFamily: FONTS.DM_SANS.bold,
            fontSize: wp(15),
          }}>
          Sign In
        </Button>
        <Spacer space={15} />
        <Text style={styles.forgotPwText}>I forgot my password</Text>
      </View>

      <TouchableOpacity
        style={{ position: "absolute", bottom: 25, alignSelf: "center" }}
        onPress={() => navigation.navigate(routes.createAccount1)}>
        <Text style={styles.signUpText}>
          Don't have an account?{" "}
          <Text style={styles.forgotPwText}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 70,
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: wp(20),
    color: COLORS.black_01,
  },
  subtitle: {
    fontSize: wp(15),
    color: COLORS.blue_02,
    fontFamily: FONTS.DM_SANS.regular,
  },
  forgotPwText: {
    fontFamily: FONTS.DM_SANS.bold,
    fontSize: wp(15),
    color: COLORS.onboard3_secondary,
    textAlign: "center",
  },
  signUpText: {
    fontSize: wp(15),
    fontFamily: FONTS.DM_SANS.bold,
    textAlign: "center",
    width: "100%",
  },
});
