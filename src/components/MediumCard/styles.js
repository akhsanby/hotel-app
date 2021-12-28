import { StyleSheet } from "react-native";

// utils
import { color, windowWidth, windowHeight } from "../../utils";

const styles = StyleSheet.create({
  card: {
    marginBottom: windowHeight * 0.02,
    flexDirection: "row",
  },
  image: {
    backgroundColor: color.whitePrimary,
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: 10,
  },
  card_body: {
    paddingLeft: 10,
    flex: 1,
  },
  text_name: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.04,
    fontWeight: "bold",
  },
  text_location: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.03,
  },
  star_icons: {
    flexDirection: "row",
    marginTop: windowHeight * 0.02,
  },
});

export default styles;
