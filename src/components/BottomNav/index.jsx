import React from "react";
import { View, StyleSheet } from "react-native";
import TabItem from "../TabItem";

// redux
import { useSelector } from "react-redux";

// utils
import { color } from "../../utils";

export default function BottomNav({ state, descriptors, navigation }) {
  const userData = useSelector((state) => state.user.userData);

  return (
    <View style={styles.container(userData)}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (userData) => ({
    flexDirection: "row",
    backgroundColor: color.blackSecondary,
    justifyContent: userData.loggedIn ? "space-between" : "space-evenly",
    paddingHorizontal: 30,
    paddingVertical: 10,
  }),
});
