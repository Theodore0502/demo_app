import { useState } from "react";
import {
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabParamList, OrderItem } from "../../types/route";
import { orderHistory, styles } from "../../../src/styles/cart/OrderHistory";
import { useCart } from "../../contexts/CartContext"; // Import useCart

const OrderHistoryScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<TabParamList>>();
    const { cartItems } = useCart(); // Lấy cartItems từ CartContext
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<OrderItem[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    // Handle search functionality based on displayed orders
    const handleSearch = () => {
        if (searchQuery.trim() === "") {
            setIsSearching(false);
            setSearchResults([]);
            return;
        }

        const results = orderHistory.filter((order) =>
            order.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(results);
        setIsSearching(true);
    };

    // Handle clearing the search input
    const handleClearSearch = () => {
        setSearchQuery("");
        setIsSearching(false);
        setSearchResults([]);
    };

    // Render each order item
    const renderOrderItem = ({ item }: { item: OrderItem }) => (
        <View style={styles.orderedList}>
            <View style={styles.orderItem}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDate}>{item.date}</Text>
                </View>
                <View style={styles.itemPriceContainer}>
                    <Text style={styles.price}>Price</Text>
                    <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* --- Top bar: back + cart --- */}
                <View style={styles.topBar}>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Home" })}>
                            <Ionicons
                                name="arrow-back-outline"
                                size={20}
                                color="black"
                                style={styles.backButton}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Order History</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                        <TouchableOpacity
                            style={styles.cartIcon}
                            onPress={() => navigation.navigate("Order")}
                        >
                            <Ionicons name="cart-outline" size={21} color="#333" />
                            <View style={styles.cartBadge}>
                                <Text style={styles.cartBadgeText}>
                                    {cartItems.length} {/* Hiển thị số lượng sản phẩm */}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image
                                source={require("../../../assets/user.png")}
                                style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Search bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Find food or restaurant..."
                    placeholderTextColor="#c8c8c8"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                    returnKeyType="search"
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={handleClearSearch} style={{ marginLeft: 10 }}>
                        <Ionicons name="close-circle-outline" size={20} color="#888" />
                    </TouchableOpacity>
                )}
                <Ionicons
                    name="search-outline"
                    size={20}
                    color="#1A7E6C"
                    style={{ marginRight: 10 }}
                />
            </View>

            {/* Order List */}
            {isSearching && searchResults.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                        No orders found for keyword "{searchQuery}"
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={isSearching ? searchResults : orderHistory}
                    renderItem={renderOrderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </SafeAreaView>
    );
};

export default OrderHistoryScreen;