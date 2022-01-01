import { StyleSheet } from "react-native";

// utils
import { color } from "../../utils";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  icon: (pressed) => ({
    position: "absolute",
    zIndex: 1,
    backgroundColor: pressed ? color.red : color.whitePrimary,
    borderRadius: 50,
    padding: 10,
    marginTop: 1.5,
    marginLeft: 2,
  }),
  input: {
    width: "100%",
    backgroundColor: color.whitePrimary,
    paddingVertical: 10,
    paddingLeft: 50,
    // paddingHorizontal: 15,
    borderRadius: 50,
    fontFamily: "Outfit-Regular",
  },
});

export default styles;
