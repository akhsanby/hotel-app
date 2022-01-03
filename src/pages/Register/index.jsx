import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

// components
import Gap from "../../components/Gap";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color, windowWidth, windowHeight } from "../../utils";

// styles
import styles from "./styles";

export default function Register() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRedirectToLoginPage = () => {
    return navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: color.red, height: 100 }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 90 }}
        >
          <Path
            fill={color.red}
            d="M0,96L48,112C96,128,192,160,288,186.7C384
            ,213,480,235,576,213.3C672,192,768,128,864,
            128C960,128,1056,192,1152,208C1248,224,1344,192,
            1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
            1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
            384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
      <View style={styles.card}>
        <Text style={styles.card_title}>Register</Text>
        <TextInput
          onChangeText={(username) => setUsername(username)}
          style={styles.input_username}
          placeholder="Your Username"
          placeholderTextColor={color.whiteSecondary}
        />
        <Gap height={10} />
        <TextInput
          onChangeText={(email) => setEmail(email)}
          style={styles.input_email}
          placeholder="Your Email"
          placeholderTextColor={color.whiteSecondary}
        />
        <Gap height={10} />
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(password) => setPassword(password)}
            style={styles.input_password}
            placeholder="Password"
            placeholderTextColor={color.whiteSecondary}
            secureTextEntry={true}
          />
          <TextInput
            // onChangeText={(password) => setPassword(password)}
            style={styles.input_password}
            placeholder="Confirm Password"
            placeholderTextColor={color.whiteSecondary}
            secureTextEntry={true}
          />
        </View>
        <Gap height={10} />
        <Pressable style={({ pressed }) => styles.btn_register(pressed)}>
          <AntDesign
            name="adduser"
            size={windowWidth * 0.06}
            color={color.whitePrimary}
          />
          <Gap width={10} />
          <Text style={styles.text_btn_register}>Register</Text>
        </Pressable>
        <Gap height={5} />
        <Text
          onPress={handleRedirectToLoginPage}
          style={{ color: color.whitePrimary, textAlign: "center" }}
        >
          Click here to Login
        </Text>
      </View>
    </View>
  );
}
