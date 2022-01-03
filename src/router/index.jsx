import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// utils
import { color } from "../utils";

// pages screens
import SplashScreen from "../pages/Splash";
import HomeScreen from "../pages/Home";
import DetailScreen from "../pages/Detail";
import SearchScreen from "../pages/Search";
import LoginScreen from "../pages/Login";
import RegisterScreen from "../pages/Register";
import BookingScreen from "../pages/Booking";
import FavouriteScreen from "../pages/Favourite";
import HistoryScreen from "../pages/History";
import ProfileScreen from "../pages/Profile";
import EditProfileScreen from "../pages/Profile/edit";

// components
import BottomNav from "../components/BottomNav";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = [
  { name: "Home", component: HomeScreen, options: { headerShown: false } },
  {
    name: "Favourite",
    component: FavouriteScreen,
    options: {
      title: "My Favourite",
      headerStyle: {
        backgroundColor: color.blackSecondary,
      },
      headerTitleStyle: {
        fontFamily: "Outfit-Bold",
      },
      headerTintColor: color.whitePrimary,
    },
  },
  {
    name: "History",
    component: HistoryScreen,
    options: {
      title: "History Booking",
      headerStyle: {
        backgroundColor: color.blackSecondary,
      },
      headerTitleStyle: {
        fontFamily: "Outfit-Bold",
      },
      headerTintColor: color.whitePrimary,
    },
  },
  {
    name: "Profile",
    component: ProfileScreen,
    options: {
      headerStyle: {
        backgroundColor: color.blackSecondary,
      },
      headerTitleStyle: {
        fontFamily: "Outfit-Bold",
      },
      headerTintColor: color.whitePrimary,
    },
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
    options: {
      title: "Detail Hotel",
      headerStyle: {
        backgroundColor: color.blackSecondary,
      },
      headerTitleStyle: {
        fontFamily: "Outfit-Bold",
      },
      headerTintColor: color.whitePrimary,
    },
  },
  {
    name: "Login",
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: "Register",
    component: RegisterScreen,
    options: { headerShown: false },
  },
  {
    name: "EditProfile",
    component: EditProfileScreen,
    options: {
      title: "Edit Profile",
      headerStyle: {
        backgroundColor: color.blackSecondary,
      },
      headerTitleStyle: {
        fontFamily: "Outfit-Bold",
      },
      headerTintColor: color.whitePrimary,
    },
  },
  {
    name: "Booking",
    component: BookingScreen,
    options: {
      title: "Booking Now",
      headerStyle: {
        backgroundColor: color.blackSecondary,
      },
      headerTitleStyle: {
        fontFamily: "Outfit-Bold",
      },
      headerTintColor: color.whitePrimary,
    },
  },
  {
    name: "MainApp",
    component: MainApp,
    options: { headerShown: false },
  },
];

function MainApp() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
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
