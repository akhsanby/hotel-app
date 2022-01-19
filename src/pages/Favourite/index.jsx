import React from "react";
import { View, ScrollView } from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import Layout from "../../components/Layout";
import BigCard from "../../components/BigCard";

// styles
import styles from "./styles";

export default function Favourite({ navigation }) {
  const userDataFavourite = useSelector(
    (state) => state.user.userData.favourite
  );

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userDataFavourite.map((hotel, index) => (
          <BigCard key={index} navigation={navigation} hotel={hotel.hotel} />
        ))}
      </ScrollView>
    </Layout>
  );
}
