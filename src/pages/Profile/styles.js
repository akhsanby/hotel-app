import { StyleSheet } from "react-native";

// utils
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  heading: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomColor: color.lightGray,
    borderWidth: 1,
  },
  card: {
    borderColor: color.whiteSecondary,
    borderWidth: 1,
    padding: windowWidth * 0.03,
    marginVertical: windowHeight * 0.02,
    borderRadius: 10,
  },
  title_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: color.whitePrimary,
    borderWidth: 1,
    paddingBottom: windowHeight * 0.01,
  },
  card_title: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.045,
    fontWeight: "bold",
    paddingBottom: windowHeight * 0.01,
  },
  account_data: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: windowHeight * 0.02,
  },
  logout: (pressed) => ({
    paddingVertical: windowHeight * 0.02,
    borderWidth: 1,
    borderColor: pressed ? color.red : color.whitePrimary,
    borderRadius: 10,
  }),
  text_logout: (pressed) => ({
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    color: pressed ? color.red : color.whitePrimary,
  }),
  horizontal_line: {
    borderBottomColor: color.lightGray,
    borderBottomWidth: 1,
  },
  modal_edit: {
    backgroundColor: color.blackPrimary,
  },
});

export default styles;
