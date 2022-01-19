import React, { useEffect } from "react";
import { Text, View, Pressable } from "react-native";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedIn } from "../../redux/userSlice";

// components
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const accountData = [
    { type: "Username", value: userData.userProfile?.fullname },
    { type: "Email", value: userData.userProfile?.email },
    { type: "Address", value: userData.userProfile?.address },
  ];

  const handleRedirectToEditProfilePage = () => {
    return navigation.navigate("EditProfile");
  };

  const handleRedirectToLoginPage = () => {
    return navigation.navigate("Login");
  };

  function handleLogout() {
    dispatch(setUserIsLoggedIn(false));
    return navigation.navigate("Splash");
  }

  return (
    <Layout>
      {userData.loggedIn ? (
        <>
          <View style={styles.title_container}>
            <Text style={styles.card_title}>My Account</Text>
            <Pressable onPress={handleRedirectToEditProfilePage}>
              {({ pressed }) => (
                <AntDesign
                  name="edit"
                  size={windowWidth * 0.07}
                  color={pressed ? color.red : color.whitePrimary}
                />
              )}
            </Pressable>
          </View>
          {accountData.map((item, index) => (
            <View key={index} style={styles.account_data}>
              <Text
                style={{
                  color: color.whitePrimary,
                  fontFamily: "Outfit-Regular",
                }}
              >
                {item.type}
              </Text>
              <Text
                style={{
                  color: color.whitePrimary,
                  fontFamily: "Outfit-Regular",
                }}
              >
                {item.value}
              </Text>
            </View>
          ))}
          <Pressable
            style={({ pressed }) => styles.logout(pressed)}
            onPress={handleLogout}
          >
            {({ pressed }) => (
              <Text style={styles.text_logout(pressed)}>Logout</Text>
            )}
          </Pressable>
        </>
      ) : (
        <Pressable
          style={({ pressed }) => styles.login(pressed)}
          onPress={handleRedirectToLoginPage}
        >
          {({ pressed }) => (
            <Text style={styles.text_login(pressed)}>Login</Text>
          )}
        </Pressable>
      )}
    </Layout>
  );
}
