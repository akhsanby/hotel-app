import React from "react";
import { View, Text, Pressable, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedIn } from "../../redux/userSlice";

// components
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color, windowWidth, windowHeight } from "../../utils";

// styles
import styles from "./styles";

export default function Login() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const showAlert = () => Alert.alert("Wrong email or password!");

  function handleLogin() {
    if (userData.email === email && userData.password === password) {
      dispatch(setUserIsLoggedIn(true));
      return navigation.goBack();
    } else {
      showAlert();
    }
  }

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
        <Text style={styles.card_title}>Login</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input_email}
          placeholder="Your Email"
          placeholderTextColor={color.whiteSecondary}
        />
        <Gap height={10} />
        <TextInput
          type="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.input_password}
          placeholder="Password"
          placeholderTextColor={color.whiteSecondary}
          secureTextEntry={true}
        />
        <Gap height={10} />
        <Pressable
          style={({ pressed }) => styles.btn_login(pressed)}
          onPress={handleLogin}
        >
          <AntDesign
            name="login"
            size={windowWidth * 0.06}
            color={color.whitePrimary}
          />
          <Gap width={10} />
          <Text style={styles.text_btn_login}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
