import React from "react";
import { Text, View, Pressable } from "react-native";

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
  const [accountData, setAccountData] = React.useState([
    { type: "First Name", value: "Akhsan" },
    { type: "Last Name", value: "Bayu" },
    { type: "Email", value: "loram@gmail.com" },
    { type: "Address", value: "Lorem" },
    { type: "Gender", value: "Male" },
  ]);

  const handleRedirectToEditProfilePage = () => {
    return navigation.navigate("EditProfile");
  };

  const handleRedirectToLoginPage = () => {
    return navigation.navigate("Login");
  };

  const handleRedirectToRegisterPage = () => {
    return navigation.navigate("Register");
  };

  return (
    <Layout>
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
            style={{ color: color.whitePrimary, fontFamily: "Outfit-Regular" }}
          >
            {item.type}
          </Text>
          <Text
            style={{ color: color.whitePrimary, fontFamily: "Outfit-Regular" }}
          >
            {item.value}
          </Text>
        </View>
      ))}
      {/* show logout button if user is logged */}
      <Pressable style={({ pressed }) => styles.logout(pressed)}>
        {({ pressed }) => (
          <Text style={styles.text_logout(pressed)}>Logout</Text>
        )}
      </Pressable>

      {/* show button login & register if user is not logged*/}
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={({ pressed }) => styles.login(pressed)}
          onPress={handleRedirectToLoginPage}
        >
          {({ pressed }) => (
            <Text style={styles.text_login(pressed)}>Login</Text>
          )}
        </Pressable>
        <Gap width={10} />
        <Pressable
          style={({ pressed }) => styles.register(pressed)}
          onPress={handleRedirectToRegisterPage}
        >
          {({ pressed }) => (
            <Text style={styles.text_register(pressed)}>Register</Text>
          )}
        </Pressable>
      </View>
    </Layout>
  );
}
