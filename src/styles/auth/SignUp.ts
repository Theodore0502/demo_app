import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A7E6C", // Teal green background
    alignItems: "center",
    paddingTop: 120,
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 45,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    // tintColor: "#FFB84D",
  },
  createText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 50,
  },
  icon: {
    marginRight: 10,
    color: "#888",
  },
  input: {
    flex: 1,
    height: 50,
    color: "#333",
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  // forgotPassword: {
  //   alignSelf: "flex-end",
  //   color: "white",
  //   fontSize: 14,
  //   marginTop: 5,
  // },
  createButton: {
    backgroundColor: "#FFB84D",
    borderRadius: 25,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
  },
  createButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontSize: 14,
  },
  loginLink: {
    color: "#FFB84D",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "none",
  },
});

export default styles;
