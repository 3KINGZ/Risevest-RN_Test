import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";

import { IMAGES } from "assets/images";
import { COLORS } from "themes";
import { getValue, hp, wp } from "utils";
import { routes } from "navigation/routes";

export const SplashScreen = ({ navigation }: any) => {
  //   const checkAuth = async () => {
  //     const user = await getValue("@user");
  //     console.log("usr", JSON.parse(user));
  //     if (!user) {
  //       navigation.navigate(routes.auth);
  //     } else {
  //       navigation.navigate(routes.app);
  //     }
  //   };

  //   useEffect(() => {
  //     checkAuth();
  //   }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.container}>
        <View>
          <Image source={IMAGES.riseLogo2} style={styles.logo} />
          <View style={{ marginTop: 40 }}>
            <Text style={styles.subtitle}>Dollar investments that</Text>
            <Text style={styles.subtitle}>help you grow</Text>
          </View>
        </View>

        <View style={{ position: "absolute", bottom: 25 }}>
          <Text style={styles.right}>All rights reserved</Text>
          <Text style={styles.right}>(c) 2021</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.primary,
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  logo: {
    width: wp(123),
    height: hp(38),
    resizeMode: "contain",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: wp(18),
    color: "white",
    textAlign: "center",
  },
  right: {
    fontSize: wp(12),
    color: "white",
    textAlign: "center",
  },
});
