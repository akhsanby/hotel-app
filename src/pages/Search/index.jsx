import React from "react";
import { FlatList } from "react-native";

// components
import Layout from "../../components/Layout";
import SearchForm from "../../components/SearchForm";
import BigCard from "../../components/BigCard";

// styles
import styles from "./styles";

export default function Search() {
  return (
    <Layout paddingBottom={50}>
      <SearchForm marginTop={20} marginBottom={0} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={BigCard}
        keyExtractor={(index) => index}
        style={{ marginVertical: 20 }}
      />
    </Layout>
  );
}
