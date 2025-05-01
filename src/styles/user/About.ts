import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  backButton: {
    marginRight: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  smallAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  logoContainer: {
    backgroundColor: "#FBAE3C",
    padding: 20,
    marginLeft: 15,
    marginRight: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  logoIcon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 5,
    backgroundColor: "#FBAE3C",
  },
  textMadeFork: {
    resizeMode: "contain",
    width: 90,
    marginBottom: 10,
  },
  versionText: {
    fontSize: 12,
    color: "black",
    marginTop: 5,
    fontWeight: "500",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 15,
  },
  description: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginLeft: 15, 
    marginRight: 10,
    marginBottom: 20,
  },
  infoButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 1,
    marginLeft: 15,
    marginRight: 12,
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "500",
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    color: "black",
    marginTop: 60,
  },
});

export default styles;
