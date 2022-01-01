import React from "react";
import { View, ScrollView } from "react-native";

// components
import Layout from "../../components/Layout";
import BigCard from "../../components/BigCard";

// styles
import styles from "./styles";

export default function Favourite({ navigation }) {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <BigCard key={index} navigation={navigation} />
        ))}
      </ScrollView>
    </Layout>
  );
}
