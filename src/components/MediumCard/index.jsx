import React from "react";
import { Text, View, Image } from "react-native";

// styles
import styles from "./styles";

export default function MediumCard({ img, text }) {

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={img} />
      <View style={styles.card_body}>
        <Text style={styles.card_title} numberOfLines={2}>
          {text}
        </Text>
      </View>
    </View>
  );
}
