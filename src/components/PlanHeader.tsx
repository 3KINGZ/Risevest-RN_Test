import React, { useLayoutEffect } from "react";
import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FIcon from "react-native-vector-icons/Feather";
import { useHeaderHeight } from "@react-navigation/elements";

import { wp } from "utils";
import { COLORS } from "themes";
import { IMAGES } from "assets/images";

const HeaderButton = ({ icon }: { icon: string }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.headerButtonContainer}>
      <FIcon name={icon} color="white" size={wp(20)} />
    </TouchableOpacity>
  );
};

interface IHeader {
  onNext?: () => void;
  next?: boolean;
  showBackButton?: boolean;
  rightComponent?: Element;
  cancel?: boolean;
  title: string;
}

export const PlanHeader = ({
  onNext,
  next,
  showBackButton = true,
  rightComponent,
  cancel,
  title,
}: IHeader) => {
  const navigation = useNavigation();

  const height = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return cancel ? (
          <HeaderButton icon="x" />
        ) : (
          <HeaderButton icon="arrow-left" />
        );
      },
      headerBackground: () => (
        <Image
          source={IMAGES.business}
          blurRadius={10}
          style={{ height: height, width: "100%" }}
          resizeMode="cover"
        />
      ),
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <HeaderButton icon="more-vertical" />
        </View>
      ),
      headerTitle: () => (
        <Text
          style={{
            fontWeight: "bold",
            fontSize: wp(24),
            textAlign: "center",
            color: "white",
          }}>
          {title}
        </Text>
      ),
      headerTitleAlign: "center",
    });
  }, [navigation, next, cancel]);

  return null;
};

const styles = StyleSheet.create({
  headerButtonContainer: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: COLORS.lightGrey,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
