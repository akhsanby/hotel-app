import { StyleSheet } from "react-native";

// utils
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.02,
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
    fontFamily: "Outfit-Bold",
    paddingBottom: windowHeight * 0.01,
  },
  account_data: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: windowHeight * 0.02,
  },
  logout: (pressed) => ({
    paddingVertical: windowHeight * 0.02,
    borderWidth: 2,
    borderColor: pressed ? color.red : color.whitePrimary,
    borderRadius: 10,
  }),
  text_logout: (pressed) => ({
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    alignItems: "center",
    color: pressed ? color.red : color.whitePrimary,
  }),
  login: (pressed) => ({
    paddingVertical: windowHeight * 0.02,
    borderWidth: 2,
    borderColor: pressed ? color.red : color.whitePrimary,
    borderRadius: 10,
  }),
  text_login: (pressed) => ({
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    alignItems: "center",
    color: pressed ? color.red : color.whitePrimary,
  }),
  register: (pressed) => ({
    flex: 1,
    paddingVertical: windowHeight * 0.02,
    borderWidth: 2,
    borderColor: pressed ? color.red : color.whitePrimary,
    borderRadius: 10,
  }),
  text_register: (pressed) => ({
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    alignItems: "center",
    color: pressed ? color.red : color.whitePrimary,
  }),

  // edit page
  label: {
    color: color.whitePrimary,
    fontSize: windowWidth * 0.04,
    fontFamily: "Outfit-Bold",
  },
  input: {
    borderBottomColor: color.whitePrimary,
    borderWidth: 1,
    padding: 10,
    color: color.whitePrimary,
    fontFamily: "Outfit-Regular",
  },
  btn_gender_male: (gender) => ({
    borderColor: gender === "Male" ? color.red : color.whitePrimary,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  }),
  btn_gender_female: (gender) => ({
    borderColor: gender === "Female" ? color.red : color.whitePrimary,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  }),
  btn_save: (pressed) => ({
    borderWidth: 2,
    borderColor: pressed ? color.red : color.whitePrimary,
    borderRadius: 10,
  }),
  label_save: (pressed) => ({
    color: pressed ? color.red : color.whitePrimary,
    padding: 10,
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
  }),
});

export default styles;
