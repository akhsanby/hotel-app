import React, { useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  setUserProfileFullname,
  setUserProfileEmail,
  setUserProfileAddress,
} from "../../redux/userSlice";

// components
import Layout from "../../components/Layout";
import Gap from "../../components/Gap";

// utils
import { color, windowWidth } from "../../utils";

// styles
import styles from "./styles";

export default function EditProfile({ navigation }) {
  const dispatch = useDispatch();
  const getUserProfileFromState = useSelector(
    (state) => state.user.userData.userProfile
  );

  return (
    <Layout>
      <Text style={styles.label}>Fullname</Text>
      <TextInput
        style={styles.input}
        placeholder="Your fullname"
        placeholderTextColor={color.whiteSecondary}
        onChangeText={(text) => dispatch(setUserProfileFullname(text))}
        value={getUserProfileFromState.fullname}
      />
      <Gap height={10} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        placeholderTextColor={color.whiteSecondary}
        onChangeText={(text) => dispatch(setUserProfileEmail(text))}
        value={getUserProfileFromState.email}
      />
      <Gap height={10} />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Somewhere"
        placeholderTextColor={color.whiteSecondary}
        onChangeText={(text) => dispatch(setUserProfileAddress(text))}
        value={getUserProfileFromState.address}
      />
    </Layout>
  );
}
