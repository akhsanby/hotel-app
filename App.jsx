import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Router from "./src/router";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// redux
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

// utils
import { color } from "./src/utils";

let customFonts = {
  "Outfit-Regular": require("./src/assets/fonts/Outfit-Regular.ttf"),
  "Outfit-Bold": require("./src/assets/fonts/Outfit-Bold.ttf"),
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: color.blackPrimary,
  },
};

export default function App() {
  const [loaded] = useFonts(customFonts);

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Router />
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}
