import React, { useState } from "react";
import { Pressable, TextInput, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue, fetchHotelByKeyword } from "../../redux/hotelSlice";

// icons
import { AntDesign } from "@expo/vector-icons";

// utils
import { color } from "../../utils";

// styles
import styles from "./styles";

export default function SearchForm() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.hotel.searchTextValue);

  const showAlert = () => Alert.alert("Field cannot empty!");

  const handleRedirectToSearchResult = () => {
    if (searchValue !== "") {
      dispatch(fetchHotelByKeyword(searchValue));
      return navigation.navigate("Search");
    } else {
      return showAlert();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => styles.icon(pressed)}
        onPress={handleRedirectToSearchResult}
      >
        {({ pressed }) => (
          <AntDesign
            name="search1"
            size={24}
            color={pressed ? color.whitePrimary : color.red}
          />
        )}
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Search name of hotel"
        onChangeText={(text) => dispatch(setSearchValue(text))}
        value={searchValue}
      />
    </View>
  );
}
