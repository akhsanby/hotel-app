import React from "react";
import { Text, View, Image, Pressable } from "react-native";

// styles
import styles from "./styles";

export default function MediumCard({ navigation, hotel }) {
  const handleNavigateToDetail = () => {
    return navigation.navigate("Detail", { hotel });
  };

  return (
    <Pressable onPress={handleNavigateToDetail}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri:
              `${hotel?.images[0]?.url}` ||
              "https://raw.githubusercontent.com/akhsanby/nft-card/main/images/image-equilibrium.jpg",
          }}
        />
        <View style={styles.card_body}>
          <Text style={styles.card_title} numberOfLines={2}>
            {hotel?.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
