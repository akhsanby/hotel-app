import { StyleSheet } from "react-native";

// utils
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 8,
  },
  fav_icon: {
    position: "absolute",
    zIndex: 2,
    top: windowWidth * 0.04,
    right: windowWidth * 0.04,
  },
  image: {
    width: "100%",
    height: windowHeight * 0.27,
    backgroundColor: color.whitePrimary,
    borderRadius: 15,
  },
  icons: {
    flexDirection: "row",
  },
  card_body: {
    paddingVertical: 5,
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  card_title: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.04,
    fontFamily: "Outfit-Bold",
  },
  card_subtitle: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.03,
    fontFamily: "Outfit-Regular",
    textAlign: "center",
  },
});

export default styles;
