import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A7E6C",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  productImage: {
    width: 560,
    height: 560,
    position: "absolute",
    top: "25%",
  },
  text: {
    color: "#333",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 30,
    fontWeight: "600",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 25,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: 300,
    height: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
