import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import Gap from "../Gap";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function BigCard({ hotel }) {
  const navigation = useNavigation();

  const rating = () => {
    if (hotel?.starRating === 1) return [1];
    if (hotel?.starRating === 2) return [1, 2];
    if (hotel?.starRating === 3) return [1, 2, 3];
    if (hotel?.starRating === 4) return [1, 2, 3, 4];
    if (hotel?.starRating === 5) return [1, 2, 3, 4, 5];
  };

  const handleNavigateToDetail = () => {
    return navigation.navigate("Detail", { hotel });
  };

  return (
    <Pressable onPress={handleNavigateToDetail}>
      <View style={styles.card}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri:
                `${hotel?.images[0].url}` ||
                "https://raw.githubusercontent.com/akhsanby/nft-card/main/images/image-equilibrium.jpg",
            }}
          />
        </View>
        <View style={styles.card_body}>
          <View>
            <Gap height={5} />
            <Text style={styles.card_title}>{hotel?.name}</Text>
            <Gap height={10} />
            <View style={styles.icons}>
              {rating().map((index) => (
                <AntDesign
                  key={index}
                  name="star"
                  size={windowWidth * 0.05}
                  color={color.orange}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
