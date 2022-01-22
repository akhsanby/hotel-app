import { StyleSheet } from "react-native";

// utils
import { color, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  heading: {
    color: color.whitePrimary,
    marginBottom: 30,
    textAlign: "center",
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
  },
  subheading: {
    color: color.whitePrimary,
    fontFamily: "Outfit-Bold",
    fontSize: windowWidth * 0.05,
    paddingBottom: 6,
  },
});

export default styles;
