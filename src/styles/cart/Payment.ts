import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    // paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  header: {
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#FBAE3C",
    justifyContent: "space-between",
    borderBottomStartRadius: 45,
    borderBottomEndRadius: 45,
    paddingBottom: 140,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  cartIcon: {
    marginRight: 8,
    alignItems: "center",
    backgroundColor: "#F8CF92",
    borderRadius: 8,
    width: 30,
    height: 30,
    paddingTop: 4,
  },
  avatarSmall: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 5,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: "#F8CF92",
    borderRadius: 8,
    paddingTop: 5,
    paddingLeft: 5,
    marginRight: 10,
  },
  topBar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor: "black",
  },
  
  userRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    // backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingRight: 20,
    paddingLeft: 0,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  addBtnSmall: {
    backgroundColor: "#eee",
    padding: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  bannerContainer: {
    marginLeft: 20,
    flexDirection: "column",
    // alignItems: "center",
    paddingLeft: 30,
    marginVertical: 10,
    position: "relative",
    overflow: "hidden",
    width: 300,
    height: 180,
    padding: 20,
    borderRadius: 15,
    justifyContent: "space-between",
  },

  cardDecoration: {
    
  },
  circle1: {
    position: "absolute",
    top: -50,
    left: -50,
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: "#363E3E",
  },
  circle2: {
    position: "absolute",
    bottom: -190,
    right: -40,
    width: 120,
    height: 120,
    borderRadius: 70,
    backgroundColor: "#363E3E",
    alignItems: "center",
    justifyContent: "center",
  },
  circle3: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#0A090A",
  },
  circle4: {
    position: "absolute",
    top: 15,
    right: 15,
    borderRadius: 35,
    width: 15,
    height: 15,
    backgroundColor: "#363E3E",
  },

  cardDecoration2: {
    
  },
  circle2_1: {
    position: "absolute",
    top: -50,
    left: -50,
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: "#42908B",
  },
  circle2_2: {
    position: "absolute",
    bottom: -190,
    right: -40,
    width: 120,
    height: 120,
    borderRadius: 70,
    backgroundColor: "#338080",
    alignItems: "center",
    justifyContent: "center",
  },
  circle2_3: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#489791",
  },
  circle2_4: {
    position: "absolute",
    top: 15,
    right: 15,
    borderRadius: 35,
    width: 15,
    height: 15,
    backgroundColor: "#338080",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  
  visa: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  
  cardNumberContainer: {
    alignItems: "center", // căn giữa ngang
    marginTop: 10,
  },
  
  cardNumber: {
    color: "white",
    fontSize: 18,
    letterSpacing: 2,
  },
  
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  namec: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 18,
  },
  
  exp: {
    color: "white",
    fontSize: 12,
    textAlign: "right",
    lineHeight: 18,
  },
  card: {
    position: "absolute",
    top: 130, // đè xuống một chút để lấn vào màu vàng
    paddingVertical: 0,
    zIndex: 10,
  },
  otherOptionsContainer: {
    marginTop: 60,
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  
  otherTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  
  paymentOptionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  optionIcon: {
    width: 70,
    height: 40,
    resizeMode: 'contain',

    // borderColor: "green",
    // borderWidth: 1,
  },
  iconWithBalance: {
    alignItems: 'flex-start',  // icon + chữ căn lề trái
    paddingLeft: 10,           // sát trái nhưng vẫn có tí padding
  },
  optionBalance: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
  },
  radioOuter: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FBB040', // màu cam viền ngoài
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#FBB040', // màu cam vòng tròn bên trong
  },
  
 
  
});

export default styles;
