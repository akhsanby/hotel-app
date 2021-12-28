import React from "react";
import { StyleSheet, View } from "react-native";

// utils
import { windowWidth } from "../../utils";

export default function Layout(props) {
  return <View style={styles.container(props)}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: (props) => ({
    width: windowWidth,
    paddingHorizontal: props.paddingHorizontal ?? 30,
    paddingTop: props.paddingTop ?? 30,
    paddingBottom: props.paddingBottom ?? 30,
  }),
});
