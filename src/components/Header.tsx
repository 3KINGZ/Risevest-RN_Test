import React, { useLayoutEffect } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FIcon from "react-native-vector-icons/Feather";

import { wp } from "utils";
import { COLORS } from "themes";

const HeaderButton = ({ icon }: { icon: string }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.headerButtonContainer}>
      <FIcon name={icon} color={COLORS.primary} size={wp(20)} />
    </TouchableOpacity>
  );
};

interface IHeader {
  onNext?: () => void;
  next?: boolean;
  showBackButton?: boolean;
  rightComponent?: Element;
  cancel?: boolean;
}

export const Header = ({
  onNext,
  next,
  showBackButton = true,
  rightComponent,
  cancel,
}: IHeader) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return cancel ? (
          <HeaderButton icon="x" />
        ) : (
          <HeaderButton icon="arrow-left" />
        );
      },
    });
  }, [navigation, next, cancel]);

  return null;
};

const styles = StyleSheet.create({
  headerButtonContainer: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: COLORS.light_teal,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
