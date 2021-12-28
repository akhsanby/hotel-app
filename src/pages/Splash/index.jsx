import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To App</Text>
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
    color: "red",
  },
});
