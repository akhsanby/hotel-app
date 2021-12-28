import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// utils
import { color, windowHeight, windowWidth } from "../../utils";

export default function Card() {
  return (
    <View style={styles.card}>
      <Image style={styles.image} />
      <View style={styles.card_body}>
        <Text style={styles.card_title}>Lorem, ipsum.</Text>
        <Text style={styles.card_subtitle}>Lorem ipsum dolor sit.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.4,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: windowHeight * 0.22,
    backgroundColor: color.whitePrimary,
    borderRadius: 15,
  },
  card_body: {
    paddingVertical: 5,
  },
  card_title: {
    color: color.lightGray,
    fontSize: windowWidth * 0.045,
    fontWeight: "bold",
    textAlign: "center",
  },
  card_subtitle: {
    color: color.lightGray,
    fontSize: windowWidth * 0.03,
    textAlign: "center",
  },
});
