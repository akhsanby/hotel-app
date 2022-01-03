import React from "react";
import { View, Text, Image, Pressable } from "react-native";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function SmallCard({ navigation }) {
  const handleNavigateToDetail = () => {
    return navigation.navigate("Detail");
  };

  return (
    <Pressable onPress={handleNavigateToDetail}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: "https://raw.githubusercontent.com/akhsanby/nft-card/main/images/image-equilibrium.jpg",
          }}
        />
        <View style={styles.card_body}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text_name}>
            Lorem ipsum dolor sit.
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.text_location}
          >
            Lorem ipsum dolor sit amet.
          </Text>
          <View style={styles.star_icons}>
            {[1, 2, 3, 4, 5].map((index) => (
              <AntDesign
                key={index}
                name="star"
                size={windowWidth * 0.04}
                color={color.orange}
              />
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
}
