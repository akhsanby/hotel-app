import React from "react";
import { StyleSheet, View } from "react-native";

// utils
import { windowWidth, windowHeight } from "../../utils";

export default function Layout({ flex, children }) {
  return <View style={styles.container(flex)}>{children}</View>;
}

const styles = StyleSheet.create({
  container: (flex) => ({
    flex: flex ? flex : null,
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.02,
  }),
});
