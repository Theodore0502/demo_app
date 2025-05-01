import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEBED",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: "#E8F8F5",
    borderRadius: 8,
    paddingTop: 5,
    paddingLeft: 5,
  },
  headerText: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -45 }],
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cartIcon: {
    marginRight: 8,
    alignItems: "center",
    backgroundColor: "#E8F8F5",
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
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemSource: {
    color: "#888",
    fontSize: 12,
  },
  itemSize: {
    color: "#888",
    fontSize: 12,
    marginTop: 2,
  },
  itemPrice: {
    color: "#FF8C42",
    fontWeight: "bold",
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityText: {
    marginHorizontal: 10,
  },
  deleteButton: {
    marginLeft: 10,
    backgroundColor: "#E57373",
    padding: 6,
    borderRadius: 8,
  },
  PromoSummaryContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#EAEBED",
    // borderTopWidth: 1,
    // borderTopColor: "#ddd",
  },
  promoContainer: {
    marginBottom: 15,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  sectionTitleArrow: {
    top: -1,
    marginLeft: 5,
    fontSize: 24,
  },
  promoInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  promoText: {
    fontSize: 16,
    marginRight: 8,
  },
  checkIcon: {
    marginLeft: "auto",
  },
  summaryContainer: {
    marginTop: 10,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 16,
  },
  summaryText2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  summaryText3: {
    fontSize: 16,
    fontWeight: "bold",
  },
  line: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  checkoutContainer: {
    padding: 20,
    backgroundColor: "#EAEBED",
  },
  checkoutButton: {
    backgroundColor: "#20726D",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 20,
    // fontWeight: "bold",
  },
});

export default styles;
