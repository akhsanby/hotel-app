import { StyleSheet } from "react-native";

// utils
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.05,
  },
  list_container: {
    marginVertical: windowHeight * 0.02,
  },
  text_not_login: {
    color: color.whitePrimary,
    fontFamily: "Outfit-Bold",
    fontSize: windowWidth * 0.05,
    textAlign: "center",
    marginTop: windowHeight * 0.05,
  },
});

export default styles;
