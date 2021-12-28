import React from "react";
import { FlatList, Text } from "react-native";

// components
import Layout from "../../components/Layout";
import BigCard from "../../components/BigCard";

// styles
import styles from "./styles";

export default function Favourite() {
  return (
    <Layout>
      <Text style={styles.heading}>Favourite List</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={BigCard}
        keyExtractor={(index) => index}
        style={styles.list_container}
      />
    </Layout>
  );
}
