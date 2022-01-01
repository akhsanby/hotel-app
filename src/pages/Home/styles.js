import { StyleSheet } from "react-native";

// utils
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.blackPrimary,
    flex: 1,
    paddingHorizontal: 30,
  },
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
