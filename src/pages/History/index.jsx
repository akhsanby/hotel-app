import React from "react";
import { View, ScrollView, Text } from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import Layout from "../../components/Layout";
import SmallCard from "../../components/SmallCard";

// styles
import styles from "./styles";

export default function History({ navigation }) {
  const userData = useSelector((state) => state.user.userData);
  const userDataHistory = useSelector((state) => state.user.userData.history);

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userData.loggedIn ? (
          userDataHistory.map((hotel, index) => (
            <SmallCard key={index} navigation={navigation} hotel={hotel} />
          ))
        ) : (
          <Text style={styles.text_not_login}>You must login first!</Text>
        )}
      </ScrollView>
    </Layout>
  );
}
