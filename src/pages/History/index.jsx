import React from "react";
import { View, ScrollView } from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import Layout from "../../components/Layout";
import SmallCard from "../../components/SmallCard";

// styles
import styles from "./styles";

export default function History({ navigation }) {
  const userDataHistory = useSelector((state) => state.user.userData.history);

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userDataHistory.map((hotel, index) => (
          <SmallCard key={index} navigation={navigation} hotel={hotel} />
        ))}
      </ScrollView>
    </Layout>
  );
}
