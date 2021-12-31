import React from "react";
import { Text, View, Image, Pressable } from "react-native";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color, windowHeight, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function BigCard({ navigation }) {
  const handleNavigateToDetail = () => {
    return navigation.navigate("Detail");
  };

  return (
    <Pressable onPress={handleNavigateToDetail}>
      <View style={styles.card}>
        <View style={{ position: "relative" }}>
          <Pressable style={styles.fav_icon}>
            <AntDesign
              name="heart"
              size={windowWidth * 0.07}
              color={color.red}
            />
          </Pressable>
          <Image style={styles.image} />
        </View>
        <View style={styles.card_body}>
          <View>
            <Text style={styles.card_title}>Lorem, ipsum.</Text>
            <View style={styles.icons}>
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
          <View>
            <Text style={styles.card_title}>$ 249</Text>
            <Text style={styles.card_subtitle}>/ night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
