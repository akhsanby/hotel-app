import { StyleSheet } from "react-native";

// utils
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  image: {
    backgroundColor: color.lightGray,
    width: windowWidth,
    height: windowHeight * 0.35,
  },
  title: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },
  subtitle: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.045,
    borderTopColor: color.lightGray,
    borderWidth: 2,
    paddingTop: 8,
  },
  description: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.035,
  },
  icon_star_wrapper: {
    flexDirection: "row",
  },
  icon_facility_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_price: {
    backgroundColor: color.red,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    color: color.whitePrimary,
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },
  btn_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  btn_back: (pressed) => ({
    borderColor: pressed ? color.red : color.whitePrimary,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  btn_booking: (pressed) => ({
    borderColor: pressed ? color.red : color.whitePrimary,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text_back: (pressed) => ({
    color: pressed ? color.red : color.whitePrimary,
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  }),
  text_booking: (pressed) => ({
    color: pressed ? color.red : color.whitePrimary,
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  }),
  text_facility: {
    color: color.whitePrimary,
  },
});

export default styles;
