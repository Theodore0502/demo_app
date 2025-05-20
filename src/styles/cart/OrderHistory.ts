import { StyleSheet } from "react-native";
import { Order } from "../../types/route";

// Simulated order history data based on "Coffee" category from HomeScreen
export const orderHistory: Order[] = [
  {
    id: "17",
    date: "Feb 25, 2023",
    total: 120.0,
    voucher: undefined,
    items: [
      {
        id: "1",
        name: "Espresso",
        quantity: 1,
        price: 120.0,
        image: require("../../../assets/espresso.png"),
      },
    ],
  },
  {
    id: "18",
    date: "Feb 23, 2023",
    total: 130.0,
    voucher: undefined,
    items: [
      {
        id: "2",
        name: "Latte",
        quantity: 2,
        price: 130.0,
        image: require("../../../assets/latte.png"),
      },
    ],
  },
  {
    id: "19",
    date: "Feb 22, 2023",
    total: 125.0,
    voucher: undefined,
    items: [
      {
        id: "3",
        name: "Cappuccino",
        quantity: 3,
        price: 125.0,
        image: require("../../../assets/cappuccino.png"),
      },
    ],
  },
  {
    id: "20",
    date: "Feb 20, 2023",
    total: 140.0,
    voucher: undefined,
    items: [
      {
        id: "4",
        name: "Mocha",
        quantity: 1,
        price: 140.0,
        image: require("../../../assets/mocha.png"),
      },
    ],
  },
];

// Styles for the OrderHistory screen
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEBED",
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
    height: 120,
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
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF8C42",
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  avatarSmall: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 5,
  },
  profileCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  topBar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    // backgroundColor: "black",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
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
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  searchContainer: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 45,
    width: "90%",
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: "#333",
  },
  orderedList: {
    top: 40,
    width: "90%",
    alignSelf: "center",
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    // backgroundColor: "blue",
    borderRadius: 15,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: "#EEEEEE",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemDate: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },

  itemPriceContainer: {
    flexDirection: "column",
    // alignItems: "right",
    justifyContent: "space-between",
    width: 100,
  },
  price: {
    fontSize: 14,
    color: "#CDCDCD",
    textAlign: "right",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F3AF4A",
    textAlign: "right",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  tabItem: {
    alignItems: "center",
  },
  tabIcon: {
    marginBottom: 5,
  },
  tabText: {
    fontSize: 12,
    color: "#888",
  },
  tabTextActive: {
    fontSize: 12,
    color: "#FF8C42",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});
