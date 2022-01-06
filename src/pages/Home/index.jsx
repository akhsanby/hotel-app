import React, { Fragment } from "react";
import { Text, ScrollView } from "react-native";

// components
import Layout from "../../components/Layout";
import SearchForm from "../../components/SearchForm";
import MediumCard from "../../components/MediumCard";
import Gap from "../../components/Gap";

// style
import styles from "./styles";

// assets
import aceh from "../../assets/cities-in-indonesia/aceh.jpg";
import bali from "../../assets/cities-in-indonesia/bali.jpg";
import bukittinggi from "../../assets/cities-in-indonesia/bukittinggi.jpg";
import magelang from "../../assets/cities-in-indonesia/magelang.jpg";
import semarang from "../../assets/cities-in-indonesia/semarang.jpg";
import surabaya from "../../assets/cities-in-indonesia/surabaya.jpg";
import yogyakarta from "../../assets/cities-in-indonesia/yogyakarta.jpg";

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
        <Text style={styles.subheading}>Kota - Kota Di Indonesia</Text>
        <ScrollView horizontal={true}>
          {citiesInIndonesia.map((el, i) => (
            <Fragment key={i}>
              <MediumCard navigation={navigation} img={el.img} text={el.text} />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
        <Text style={styles.subheading}>Popular Destination</Text>
        <ScrollView horizontal={true}>
          {bestTour.map((el, i) => (
            <Fragment key={i}>
              <MediumCard navigation={navigation} img={el.img} text={el.text} />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
      </ScrollView>
    </Layout>
  );
}

const citiesInIndonesia = [
  {
    img: require("../../assets/cities-in-indonesia/aceh.jpg"),
    text: "Aceh",
  },
  {
    img: require("../../assets/cities-in-indonesia/bali.jpg"),
    text: "Bali",
  },
  {
    img: require("../../assets/cities-in-indonesia/bukittinggi.jpg"),
    text: "Bukittinggi",
  },
  {
    img: require("../../assets/cities-in-indonesia/magelang.jpg"),
    text: "Magelang",
  },
  {
    img: require("../../assets/cities-in-indonesia/semarang.jpg"),
    text: "Semarang",
  },
  {
    img: require("../../assets/cities-in-indonesia/surabaya.jpg"),
    text: "Surabaya",
  },
  {
    img: require("../../assets/cities-in-indonesia/yogyakarta.jpg"),
    text: "Yogyakarta",
  },
];

const bestTour = [
  {
    img: require("../../assets/best-tour/colosseum.jpg"),
    text: "Colosseum",
  },
  {
    img: require("../../assets/best-tour/eiffel.jpg"),
    text: "Eiffel",
  },
  {
    img: require("../../assets/best-tour/kakbah.jpg"),
    text: "kakbah",
  },
  {
    img: require("../../assets/best-tour/machu-picchu.jpg"),
    text: "Machu Picchu",
  },
  {
    img: require("../../assets/best-tour/palace-of-versailles.jpg"),
    text: "Palace Of Versailles",
  },
  {
    img: require("../../assets/best-tour/pyramid.jpg"),
    text: "Pyramid",
  },
];
