import React from "react";
import { View, ScrollView } from "react-native";

// components
import Layout from "../../components/Layout";
import SmallCard from "../../components/SmallCard";

// styles
import styles from "./styles";

export default function History({ navigation }) {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <SmallCard key={index} navigation={navigation} />
        ))}
      </ScrollView>
    </Layout>
  );
}
