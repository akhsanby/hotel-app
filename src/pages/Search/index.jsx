import React from "react";
import { View, ScrollView } from "react-native";

// components
import Layout from "../../components/Layout";
import SearchForm from "../../components/SearchForm";
import BigCard from "../../components/BigCard";

// styles
import styles from "./styles";

export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchForm />
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <BigCard key={index} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}
