import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";

import { paperTheme } from "./src/themes/theme";
import { RootStackNavigator } from "./src/navigation/RootStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "utils/navigation";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <PaperProvider theme={paperTheme}>
        <NavigationContainer ref={navigationRef}>
          <RootStackNavigator />
        </NavigationContainer>
      </PaperProvider>
      <Toast />
    </>
  );
};

export default App;
