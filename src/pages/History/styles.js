import { StyleSheet } from "react-native";

// utils
import { color, windowWidth, windowHeight } from "../../utils";

const styles = StyleSheet.create({
  heading: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomColor: color.lightGray,
    borderWidth: 1,
  },
  list_container: {
    marginVertical: windowHeight * 0.02,
  },
});

export default styles;
