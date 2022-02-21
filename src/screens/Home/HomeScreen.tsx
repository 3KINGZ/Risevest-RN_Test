import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  RefreshControl,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-paper";
import IIcon from "react-native-vector-icons/Ionicons";
import FIcon from "react-native-vector-icons/Feather";
import SIcon from "react-native-vector-icons/SimpleLineIcons";
import AIcon from "react-native-vector-icons/AntDesign";
import { useSelector, useDispatch } from "react-redux";

import { COLORS, FONTS } from "themes";
import { wp, hp } from "utils";
import { Spacer } from "components";
import { AddPlanButton, Plan, Quote } from "./components";
import { IMAGES } from "assets/images";
import { generateGreeting } from "helpers";
import { fetchPlans } from "store/slices/plans.slice";
import { updateUserDetail } from "store/slices/user.slice";
import { FlatList } from "react-native-gesture-handler";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { loading } = useSelector(state => state.user);
  const { fetchingPlans, plans } = useSelector(state => state.plans);

  console.log("pls", plans);

  const [balance, setBalance] = useState<string | number>(user.total_balance);
  const [refreshing, setRefreshing] = useState(false);

  const hideBalance = () => {
    if (String(balance).includes("*")) {
      setBalance(user.total_balance);
    } else {
      setBalance(
        String(balance)
          .split("")
          .map(balance => "*")
          .join(""),
      );
    }
  };

  useEffect(() => {
    dispatch(fetchPlans());
  }, []);

  console.log("usr", user);

  const refresh = () => {
    dispatch(updateUserDetail());
    dispatch(fetchPlans());
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl
          refreshing={loading || fetchingPlans}
          onRefresh={refresh}
        />
      }>
      <LinearGradient
        style={{ flex: 1, padding: 15 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#FFFFFF", "rgba(255, 255, 255, 0.0625)", "rgba(0, 0, 0, 0)"]}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.greetText}>{generateGreeting()}</Text>
            <Text style={styles.name}>{user?.first_name}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button
              mode="contained"
              color={COLORS.onboard3_secondary}
              style={{ borderRadius: 18, marginRight: 15 }}
              labelStyle={{
                textTransform: "none",
                fontFamily: FONTS.DM_SANS.regular,
                fontSize: wp(12),
              }}>
              Earn 3% bonus
            </Button>
            <IIcon name="notifications" size={wp(20)} color={COLORS.primary} />
          </View>
        </View>

        <LinearGradient
          style={styles.balanceContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]}>
          <View style={styles.tbHeaderContainer}>
            <Text style={styles.tbText}>Total Balance</Text>
            <TouchableOpacity onPress={hideBalance}>
              <IIcon
                name={String(balance).includes("*") ? "eye" : "eye-off"}
                size={wp(15)}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>

          <View style={{ width: "100%" }}>
            <View style={styles.balanceContainerMain}>
              <Text style={styles.balance}>${balance}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}>
              <Text style={[styles.tbText, { marginRight: 0 }]}>
                Total Gains
              </Text>
              <Spacer space={2} horizontal />
              <FIcon
                name="arrow-up-right"
                size={wp(15)}
                color={COLORS.green_01}
              />
              <Spacer space={2} horizontal />
              <Text style={styles.gainsValueText}>0.00%</Text>
              <Spacer space={2} horizontal />
              <SIcon name="arrow-right" size={wp(12)} color={COLORS.grey_03} />
            </View>
          </View>
        </LinearGradient>

        <Button
          mode="outlined"
          labelStyle={{
            textTransform: "none",
            fontFamily: FONTS.DM_SANS.bold,
            fontSize: wp(15),
          }}
          style={{
            borderColor: COLORS.grey_01,
            backgroundColor: "white",
            paddingVertical: 5,
          }}>
          + Add Money
        </Button>

        <Spacer space={15} />

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={styles.createPlanText}>Create a plan</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.viewPlansText}>View all plans</Text>
              <SIcon name="arrow-right" color={COLORS.grey_04} />
            </View>
          </View>

          <Spacer />

          <Text style={styles.plansSubtext}>
            Start your investment journey by creating a plan
          </Text>

          <Spacer space={15} />

          <FlatList
            horizontal
            ListHeaderComponent={<AddPlanButton />}
            data={plans}
            renderItem={({ item }) => <Plan plan={item} />}
          />
        </View>

        <Spacer space={15} />

        <View style={styles.contactContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.questionContainer}>
              <AIcon name="question" size={wp(15)} />
            </View>

            <Text style={styles.helpText}>Need help?</Text>
          </View>

          <Button
            mode="contained"
            style={{ borderRadius: 6 }}
            labelStyle={{
              textTransform: "none",
              fontFamily: FONTS.DM_SANS.regular,
              fontSize: wp(15),
            }}>
            Contact Us
          </Button>
        </View>

        <Spacer space={15} />

        <Quote />

        <Spacer space={10} />

        <Image source={IMAGES.riseLogo} style={styles.logo} />
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetText: {
    fontFamily: FONTS.DM_SANS.regular,
    fontSize: wp(15),
    fontWeight: "400",
    color: COLORS.black_04,
  },
  name: {
    fontFamily: FONTS.DM_SANS.regular,
    fontSize: wp(20),
    color: COLORS.black_04,
  },
  balanceContainer: {
    padding: 15,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  tbHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  tbText: {
    fontSize: wp(15),
    color: COLORS.blue_02,
    marginRight: 10,
  },
  balanceContainerMain: {
    borderBottomWidth: 1,
    borderColor: COLORS.light_teal,
    paddingBottom: 15,
    marginBottom: 15,
    width: "70%",
    alignSelf: "center",
  },
  balance: {
    fontSize: wp(32),
    color: COLORS.black_04,
    textAlign: "center",
  },
  gainsValueText: {
    color: COLORS.green_01,
    fontSize: wp(16),
  },
  planContainer: { flexDirection: "row", alignItems: "center" },
  createPlanText: {
    fontSize: wp(16),
    color: "black",
  },
  viewPlansText: {
    fontSize: wp(14),
    color: COLORS.grey_04,
    fontFamily: FONTS.DM_SANS.bold,
    marginRight: 5,
  },
  plansSubtext: {
    fontSize: wp(15),
    color: COLORS.blue_02,
  },
  contactContainer: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    justifyContent: "space-between",
    borderRadius: 12,
  },
  questionContainer: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.light_teal,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  helpText: {
    fontSize: wp(15),
    color: COLORS.black_05,
    fontFamily: FONTS.DM_SANS.regular,
  },
  logo: {
    width: wp(83),
    height: hp(26),
    marginVertical: 15,
    alignSelf: "center",
  },
});
