import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

import Login from "./src/screens/login";
import Settings from "./src/screens/settings";
import "./src/localization/i18n";

export type MainStackTypeParamList = {
  LOGIN_SCREEN: undefined;
  SETTINGS_SCREEN: undefined;
};

export default function App() {
  const Stack = createStackNavigator<MainStackTypeParamList>();

  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true, // If you want to swipe back like iOS on Android
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen
          name="LOGIN_SCREEN"
          component={Login}
          options={{ title: t("navigate:login") }}
        />
        <Stack.Screen
          name="SETTINGS_SCREEN"
          component={Settings}
          options={{ title: t("navigate:settings") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
