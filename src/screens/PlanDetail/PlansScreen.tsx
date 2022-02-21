import React from "react";
import { PlaceholderScreen } from "components";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Plan } from "./components";

export const PlansScreen = () => {
  const { plans } = useSelector(state => state.plans);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={plans}
        renderItem={({ item }) => <Plan plan={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
