import React, { useEffect } from "react";
import { View, ScrollView, Text } from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import SearchForm from "../../components/SearchForm";
import BigCard from "../../components/BigCard";
import Gap from "../../components/Gap";

// styles
import styles from "./styles";

export default function Search({ navigation }) {
  const searchResult = useSelector((state) => state.hotel.searchResult);

  return (
    <View style={styles.container}>
      <Gap height={40} />
      <SearchForm />
      <Gap height={10} />
      {searchResult.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {searchResult?.map((searchResult, index) => (
            <BigCard key={index} navigation={navigation} hotel={searchResult} />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.text_notfound}>
          Hotel is not found! try other keyword
        </Text>
      )}
    </View>
  );
}
