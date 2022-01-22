import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// redux
import { fetchAllHotelData } from "../../redux/hotelSlice";
import { useDispatch } from "react-redux";

// components
import Gap from "../../components/Gap";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

// utils
import { color, windowWidth } from "../../utils";

export default function Splash({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllHotelData());
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FontAwesome5 name="hotel" size={windowWidth * 0.2} color={color.red} />
      <Gap height={10} />
      <Text style={styles.text}>Hotel Booking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
  },
});
