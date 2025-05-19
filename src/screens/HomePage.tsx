import { useState } from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabParamList } from "../types/route";
import styles from "../styles/HomPage";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import categoriesData from "../data/categories.json";
import productsData from "../data/products.json";

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<TabParamList, "Home">>();
    const { user } = useAuth();
    const { cartItems, addToCart } = useCart();

    const imageMap = {
        "../../assets/apple.png": require("../../assets/apple.png"),
        "../../assets/burger.png": require("../../assets/burger.png"),
        "../../assets/yogurt.png": require("../../assets/yogurt.png"),
        "../../assets/ice-cream.png": require("../../assets/ice-cream.png"),
        "../../assets/coffee.png": require("../../assets/coffee.png"),
        "../../assets/kiwi-shake.png": require("../../assets/kiwi-shake.png"),
        "../../assets/blueberry-maze.png": require("../../assets/blueberry-maze.png"),
        "../../assets/mango-smoothie.png": require("../../assets/mango-smoothie.png"),
        "../../assets/apple-juice.png": require("../../assets/apple-juice.png"),
        "../../assets/pats-burger.png": require("../../assets/pats-burger.png"),
        "../../assets/cheese-burger.png": require("../../assets/cheese-burger.png"),
        "../../assets/chicken-burger.png": require("../../assets/chicken-burger.png"),
        "../../assets/veggie-burger.png": require("../../assets/veggie-burger.png"),
        "../../assets/berries-yogurt.png": require("../../assets/berries-yogurt.png"),
        "../../assets/strawberry-yogurt.png": require("../../assets/strawberry-yogurt.png"),
        "../../assets/plain-yogurt.png": require("../../assets/plain-yogurt.png"),
        "../../assets/mango-yogurt.png": require("../../assets/mango-yogurt.png"),
        "../../assets/vanilla-cream.png": require("../../assets/vanilla-cream.png"),
        "../../assets/chocolate-cream.png": require("../../assets/chocolate-cream.png"),
        "../../assets/strawberry-cream.png": require("../../assets/strawberry-cream.png"),
        "../../assets/caramel-cream.png": require("../../assets/caramel-cream.png"),
        "../../assets/espresso.png": require("../../assets/espresso.png"),
        "../../assets/latte.png": require("../../assets/latte.png"),
        "../../assets/cappuccino.png": require("../../assets/cappuccino.png"),
        "../../assets/mocha.png": require("../../assets/mocha.png"),
    };

    const categories = categoriesData.map((category) => ({
        ...category,
        image: imageMap[category.image],
    }));

    const allProducts = productsData.map((product) => ({
        ...product,
        image: imageMap[product.image],
    }));

    const [selectedCategory, setSelectedCategory] = useState("Fruit");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const filteredProducts = allProducts
        .filter((product) => product.category === selectedCategory)
        .slice(0, 4);

    const handleSearch = () => {
        if (searchQuery.trim() === "") {
            setIsSearching(false);
            setSearchResults([]);
            setSelectedCategory("Fruit");
            return;
        }

        const results = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(results);
        setIsSearching(true);
        setSelectedCategory("");
    };

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.categoryItem,
                selectedCategory === item.name && styles.categoryItemSelected,
            ]}
            onPress={() => {
                setSelectedCategory(item.name);
                setIsSearching(false);
                setSearchQuery("");
                setSearchResults([]);
            }}
        >
            <Image source={item.image} style={{ width: 30, height: 30 }} resizeMode="contain" />
            <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderProductItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate("Detail", { product: item })}
        >
            <Image source={item.image} style={styles.productImage} resizeMode="contain" />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 10, color: "#888" }}>{item.source} </Text>
                <Ionicons name="checkmark-circle-outline" size={10} color="#1A7E6C" />
            </View>
            <Text style={styles.productPrice}>₱{item.price.toFixed(2)}</Text>
            <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => {
                    const size = item.sizes && item.sizes.length > 0 ? item.sizes[0].size : undefined;
                    addToCart({
                        id: String(item.id),
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        size: size,
                        quantity: 1,
                    });
                }}
            >
                <Ionicons name="cart-outline" size={16} color="#fff" />
                <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <ImageBackground
            source={require("../../assets/half-background.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            Explore the taste{"\n"}of Asian Food
                        </Text>
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
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Main", { screen: "Profile" })}
                            >
                                <Image
                                    source={require("../../assets/user.png")}
                                    style={{ width: 30, height: 30 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
                        {/* Search bar */}
                        <View style={styles.searchContainer}>
                            <Ionicons
                                name="search-outline"
                                size={20}
                                color="#1A7E6C"
                                style={{ marginRight: 10 }}
                            />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Find food or restaurant..."
                                placeholderTextColor="#c8c8c8"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                onSubmitEditing={handleSearch}
                                returnKeyType="search"
                            />
                        </View>

                        {/* Promo banner */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingRight: 20 }}
                        >
                            {/* Banner 1 */}
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Main", { screen: "Voucher" })}
                            >
                                <ImageBackground
                                    source={require("../../assets/banner01-gradient.png")}
                                    style={styles.bannerContainer}
                                    imageStyle={{ borderRadius: 15 }}
                                >
                                    <View style={styles.bannerTextContainer}>
                                        <View style={{ flexDirection: "row", marginBottom: 6 }}>
                                            <Text style={styles.textHello}>Hello!</Text>
                                            <Text style={styles.textUser}>{user ? user.name : "Guest"}</Text>
                                        </View>
                                        <Text style={styles.bannerText}>
                                            Eat gelato{"\n"}like there's{"\n"}no tomorrow!
                                        </Text>
                                    </View>
                                    <Image
                                        source={require("../../assets/hold-ice-cream.png")}
                                        style={styles.bannerImage}
                                        resizeMode="cover"
                                    />
                                </ImageBackground>
                            </TouchableOpacity>

                            {/* Banner 2 */}
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Main", { screen: "Voucher" })}
                            >
                                <ImageBackground
                                    source={require("../../assets/banner02-gradient.png")}
                                    style={styles.bannerContainer}
                                    imageStyle={{ borderRadius: 15 }}
                                >
                                    <View style={styles.bannerTextContainer}>
                                        <Text style={styles.banner2Discount}>Discount 50</Text>
                                        <Text style={styles.banner2Title}>50%</Text>
                                        <Text style={styles.banner2Subtitle}>All Asian Foodie</Text>
                                    </View>
                                    <View style={styles.freeDeliveryBadge}>
                                        <Text style={styles.freeDeliveryText}>Free Delivery</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </ScrollView>

                        {/* Categories horizontal list */}
                        <FlatList
                            data={categories}
                            renderItem={renderCategoryItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.categoryList}
                            contentContainerStyle={{
                                paddingLeft: 20,
                                paddingRight: 12,
                            }}
                        />

                        {/* Recommendations section */}
                        <View style={styles.recommendationHeader}>
                            <Text style={styles.recommendationTitle}>Recommendation</Text>
                        </View>

                        {isSearching && searchResults.length === 0 ? (
                            <View style={{ alignItems: "center", marginTop: 120 }}>
                                <Text style={{ fontSize: 16, color: "#666" }}>
                                    No products found for keyword "{searchQuery}"
                                </Text>
                            </View>
                        ) : (
                            <FlatList
                                data={isSearching ? searchResults : filteredProducts}
                                renderItem={renderProductItem}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                scrollEnabled={false}
                                contentContainerStyle={styles.productList}
                            />
                        )}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;