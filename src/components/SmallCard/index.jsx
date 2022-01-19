import React from "react";
import { View, Text, Image } from "react-native";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function SmallCard({ hotel }) {
  const rating = () => {
    if (hotel?.starRating === 1) return [1];
    if (hotel?.starRating === 2) return [1, 2];
    if (hotel?.starRating === 3) return [1, 2, 3];
    if (hotel?.starRating === 4) return [1, 2, 3, 4];
    if (hotel?.starRating === 5) return [1, 2, 3, 4, 5];
  };

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri:
            `${hotel.images}` ||
            "https://raw.githubusercontent.com/akhsanby/nft-card/main/images/image-equilibrium.jpg",
        }}
      />
      <View style={styles.card_body}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text_name}>
          {hotel.hotelName}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={styles.text_location}
        >
          {hotel.hotelAddress.city + "," + hotel.hotelAddress.countryName}
        </Text>
        <View style={styles.star_icons}>
          {rating().map((index) => (
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
  );
}
