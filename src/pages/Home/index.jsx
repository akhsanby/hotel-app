import React, { Fragment } from "react";
import { SafeAreaView, Text, ScrollView } from "react-native";

// components
import SearchForm from "../../components/SearchForm";
import Card from "../../components/Card";
import Gap from "../../components/Gap";

// style
import styles from "./styles";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchForm />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
          Find Your Favourite Place And Visit With Us
        </Text>
        <Text style={styles.subheading}>Top Destination</Text>
        <ScrollView horizontal={true}>
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <Fragment key={index}>
              <Card />
              <Gap width={20} />
            </Fragment>
          ))}
        </ScrollView>
        <Text style={styles.subheading}>Popular Destination</Text>
        <ScrollView horizontal={true}>
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <Fragment key={index}>
              <Card />
              <Gap width={20} />
            </Fragment>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
