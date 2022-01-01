import React from "react";
import { Text, View, Image, Pressable } from "react-native";

// styles
import styles from "./styles";

export default function MediumCard({ navigation }) {
  const handleNavigateToDetail = () => {
    return navigation.navigate("Detail");
  };

  return (
    <Pressable onPress={handleNavigateToDetail}>
      {({ pressed }) => (
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://raw.githubusercontent.com/akhsanby/nft-card/main/images/image-equilibrium.jpg",
            }}
          />
          <View style={styles.card_body}>
            <Text style={styles.card_title} numberOfLines={2}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}
