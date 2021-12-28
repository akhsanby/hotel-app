import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// pages screens
import SplashScreen from "../pages/Splash";
import HomeScreen from "../pages/Home";
import DetailScreen from "../pages/Detail";
import SearchScreen from "../pages/Search";
import FavouriteScreen from "../pages/Favourite";
import HistoryScreen from "../pages/History";
import ProfileScreen from "../pages/Profile";

// components
import BottomNav from "../components/BottomNav";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = [
  { name: "Home", component: HomeScreen, options: { headerShown: false } },
  {
    name: "Favourite",
    component: FavouriteScreen,
    options: { headerShown: false },
  },
  {
    name: "History",
    component: HistoryScreen,
    options: { headerShown: false },
  },
  {
    name: "Profile",
    component: ProfileScreen,
    options: { headerShown: false },
  },
];

const StackScreen = [
  {
    name: "Splash",
    component: SplashScreen,
    options: { headerShown: false },
  },
  {
    name: "Search",
    component: SearchScreen,
    options: { headerShown: false },
  },
  {
    name: "Detail",
    component: DetailScreen,
    options: { headerShown: false },
  },
  {
    name: "MainApp",
    component: MainApp,
    options: { headerShown: false },
  },
];

function MainApp() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNav {...props} />}
      barStyle={{ backgroundColor: "black" }}
    >
      {TabScreens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      {StackScreen.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
}
