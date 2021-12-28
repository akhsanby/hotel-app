import { StyleSheet } from "react-native";

// utils
import { color } from "../../utils";

const styles = StyleSheet.create({
  container: (props) => ({
    position: "relative",
    marginTop: props.marginTop ?? 50,
    marginBottom: props.marginBottom ?? 20,
  }),
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
    paddingHorizontal: 15,
    borderRadius: 50,
  },
});

export default styles;
