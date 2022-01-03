import React, { Fragment } from "react";
import { Text, ScrollView } from "react-native";

// components
import Layout from "../../components/Layout";
import SearchForm from "../../components/SearchForm";
import MediumCard from "../../components/MediumCard";
import Gap from "../../components/Gap";

// style
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <Layout flex={1}>
      <Gap height={40} />
      <SearchForm />
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
          Find Your Favourite Place And Visit With Us
        </Text>
        <Text style={styles.subheading}>Top Destination</Text>
        <ScrollView horizontal={true}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Fragment key={index}>
              <MediumCard navigation={navigation} />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
        <Text style={styles.subheading}>Popular Destination</Text>
        <ScrollView horizontal={true}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Fragment key={index}>
              <MediumCard navigation={navigation} />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
      </ScrollView>
    </Layout>
  );
}
