import React, { Fragment } from "react";
import { Text, ScrollView } from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import Layout from "../../components/Layout";
import SearchForm from "../../components/SearchForm";
import MediumCard from "../../components/MediumCard";
import Gap from "../../components/Gap";

// style
import styles from "./styles";

export default function Home({ navigation }) {
  const getDataHotel = useSelector((state) => state.hotel?.data);

  return (
    <Layout flex={1}>
      <Gap height={40} />
      <SearchForm navigation={navigation} />
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
          Find Your Favourite Place And Visit With Us
        </Text>
        <Text style={styles.subheading}>Top Destination</Text>
        <ScrollView horizontal={true}>
          {getDataHotel?.slice(1, 5).map((hotel) => (
            <Fragment key={hotel.hotelId}>
              <MediumCard navigation={navigation} hotel={hotel} />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
        <Text style={styles.subheading}>Popular Destination</Text>
        <ScrollView horizontal={true}>
          {getDataHotel?.slice(5, 10).map((hotel) => (
            <Fragment key={hotel.hotelId}>
              <MediumCard navigation={navigation} hotel={hotel} />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
      </ScrollView>
    </Layout>
  );
}
