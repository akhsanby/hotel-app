import React from "react";
import { Text, FlatList } from "react-native";

// components
import Layout from "../../components/Layout";
import MediumCard from "../../components/MediumCard";

// styles
import styles from "./styles";

export default function History() {
  const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Layout>
      <Text style={styles.heading}>Booking History</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={MediumCard}
        keyExtractor={(index) => index}
        style={styles.list_container}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <MediumCard key={index} />
        ))}
      </ScrollView> */}
    </Layout>
  );
}
