import React from "react";
import { Pressable, TextInput, View } from "react-native";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color } from "../../utils";

// styles
import styles from "./styles";

export default function SearchForm() {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => styles.icon(pressed)}>
        {({ pressed }) => (
          <AntDesign
            name="search1"
            size={24}
            color={pressed ? color.whitePrimary : color.red}
          />
        )}
      </Pressable>
      <TextInput style={styles.input} placeholder="Jakarta, Bangkok, etc" />
    </View>
  );
}
