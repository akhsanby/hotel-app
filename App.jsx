import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Router from "./src/router";

// utils
import { color } from "./src/utils";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.blackPrimary,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
