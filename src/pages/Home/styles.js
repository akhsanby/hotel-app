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
    color: color.lightGray,
    marginBottom: 30,
    textAlign: "center",
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },
  subheading: {
    color: color.lightGray,
    fontSize: windowWidth * 0.045,
    paddingBottom: 6,
  },
});

export default styles;
