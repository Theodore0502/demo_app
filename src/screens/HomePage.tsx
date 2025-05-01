// import { useState } from "react";
// import {
//     FlatList,
//     Image,
//     ImageBackground,
//     ScrollView,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//     SafeAreaView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { NavigationProp, useNavigation } from "@react-navigation/native";
// import { TabParamList } from "../types/route";
// import styles from "../styles/HomPage";
// import { useAuth } from "../contexts/AuthContext";

// const HomeScreen = () => {
//     // Data for categories 
//     const categories = [
//         { id: "1", name: "Fruit", image: require("../../assets/apple.png") },
//         { id: "2", name: "Burger", image: require("../../assets/burger.png") },
//         { id: "3", name: "Yogurt", image: require("../../assets/yogurt.png") },
//         { id: "4", name: "Cream", image: require("../../assets/ice-cream.png") },
//         { id: "5", name: "Coffee", image: require("../../assets/coffee.png") },
//     ];

//     // Data for products with category
//     const allProducts = [
//         // Fruit
//         {
//             id: "1",
//             name: "Kiwi Shake II",
//             price: "₱98.00",
//             image: require("../../assets/kiwi-shake.png"),
//             source: "McDonald's",
//             category: "Fruit",
//             description: "Kiwi Shake II is a refreshing blend of kiwi and tropical fruits, perfect for a sunny day.",
//         },
//         {
//             id: "2",
//             name: "Blueberry Maze",
//             price: "₱98.00",
//             image: require("../../assets/blueberry-maze.png"),
//             source: "McDonald's",
//             category: "Fruit",
//             description: "Blueberry Maze is a sweet and tangy mix of blueberries and citrus, great for a quick refreshment.",
//         },
//         {
//             id: "5",
//             name: "Mango Smoothie",
//             price: "₱110.00",
//             image: require("../../assets/mango-smoothie.png"),
//             source: "Starbucks",
//             category: "Fruit",
//             description: "Mango Smoothie is a creamy blend of ripe mangoes and yogurt, ideal for a healthy treat.",
//         },
//         {
//             id: "6",
//             name: "Apple Juice",
//             price: "₱85.00",
//             image: require("../../assets/apple-juice.png"),
//             source: "Jollibee",
//             category: "Fruit",
//             description: "Apple Juice is a classic, crisp drink made from fresh apples, perfect for all ages.",
//         },
//         // Burger
//         {
//             id: "3",
//             name: "Pats Burger",
//             price: "₱134.00",
//             image: require("../../assets/pats-burger.png"),
//             source: "Jollibee",
//             category: "Burger",
//             description: "Pats Burger is a juicy beef patty with fresh lettuce, tomatoes, and a special sauce.",
//         },
//         {
//             id: "7",
//             name: "Cheese Burger",
//             price: "₱150.00",
//             image: require("../../assets/cheese-burger.png"),
//             source: "McDonald's",
//             category: "Burger",
//             description: "Cheese Burger is a classic with melted cheese, beef patty, and pickles on a soft bun.",
//         },
//         {
//             id: "8",
//             name: "Chicken Burger",
//             price: "₱140.00",
//             image: require("../../assets/chicken-burger.png"),
//             source: "KFC",
//             category: "Burger",
//             description: "Chicken Burger features a crispy chicken patty with lettuce and mayo, a tasty alternative.",
//         },
//         {
//             id: "9",
//             name: "Veggie Burger",
//             price: "₱120.00",
//             image: require("../../assets/veggie-burger.png"),
//             source: "Burger King",
//             category: "Burger",
//             description: "Veggie Burger is a healthy option with a plant-based patty, fresh veggies, and a light sauce.",
//         },
//         // Yogurt
//         {
//             id: "4",
//             name: "Berries Yogurt",
//             price: "₱98.00",
//             image: require("../../assets/berries-yogurt.png"),
//             source: "McDonald's",
//             category: "Yogurt",
//             description: "Berries Yogurt is a creamy yogurt with mixed berries, perfect for a light snack.",
//         },
//         {
//             id: "10",
//             name: "Strawberry Yogurt",
//             price: "₱95.00",
//             image: require("../../assets/strawberry-yogurt.png"),
//             source: "Starbucks",
//             category: "Yogurt",
//             description: "Strawberry Yogurt is a sweet and creamy treat with fresh strawberry chunks.",
//         },
//         {
//             id: "11",
//             name: "Plain Yogurt",
//             price: "₱80.00",
//             image: require("../../assets/plain-yogurt.png"),
//             source: "Jollibee",
//             category: "Yogurt",
//             description: "Plain Yogurt is a simple, unsweetened yogurt, great for pairing with fruits or granola.",
//         },
//         {
//             id: "12",
//             name: "Mango Yogurt",
//             price: "₱100.00",
//             image: require("../../assets/mango-yogurt.png"),
//             source: "KFC",
//             category: "Yogurt",
//             description: "Mango Yogurt combines creamy yogurt with the tropical sweetness of mangoes.",
//         },
//         // Cream
//         {
//             id: "13",
//             name: "Vanilla Cream",
//             price: "₱90.00",
//             image: require("../../assets/vanilla-cream.png"),
//             source: "McDonald's",
//             category: "Cream",
//             description: "Vanilla Cream is a rich and smooth dessert with a classic vanilla flavor.",
//         },
//         {
//             id: "14",
//             name: "Chocolate Cream",
//             price: "₱95.00",
//             image: require("../../assets/chocolate-cream.png"),
//             source: "Starbucks",
//             category: "Cream",
//             description: "Chocolate Cream is a decadent treat with a rich chocolate flavor, perfect for dessert.",
//         },
//         {
//             id: "15",
//             name: "Strawberry Cream",
//             price: "₱100.00",
//             image: require("../../assets/strawberry-cream.png"),
//             source: "Jollibee",
//             category: "Cream",
//             description: "Strawberry Cream is a light and fruity dessert with a creamy strawberry taste.",
//         },
//         {
//             id: "16",
//             name: "Caramel Cream",
//             price: "₱110.00",
//             image: require("../../assets/caramel-cream.png"),
//             source: "KFC",
//             category: "Cream",
//             description: "Caramel Cream is a sweet and sticky dessert with a rich caramel flavor.",
//         },
//         // Coffee
//         {
//             id: "17",
//             name: "Espresso",
//             price: "₱120.00",
//             image: require("../../assets/espresso.png"),
//             source: "Starbucks",
//             category: "Coffee",
//             description: "Espresso is a strong and bold coffee shot, perfect for a quick caffeine boost.",
//         },
//         {
//             id: "18",
//             name: "Latte",
//             price: "₱130.00",
//             image: require("../../assets/latte.png"),
//             source: "Starbucks",
//             category: "Coffee",
//             description: "Latte is a smooth blend of espresso and steamed milk, topped with a light foam.",
//         },
//         {
//             id: "19",
//             name: "Cappuccino",
//             price: "₱125.00",
//             image: require("../../assets/cappuccino.png"),
//             source: "McDonald's",
//             category: "Coffee",
//             description: "Cappuccino is a balanced mix of espresso, steamed milk, and frothy foam.",
//         },
//         {
//             id: "20",
//             name: "Mocha",
//             price: "₱140.00",
//             image: require("../../assets/mocha.png"),
//             source: "Jollibee",
//             category: "Coffee",
//             description: "Mocha is a delicious blend of espresso, chocolate, and steamed milk.",
//         },
//     ];

//     const { user } = useAuth(); // Get the current user from AuthContext
//     const navigation = useNavigation<NavigationProp<TabParamList, "Home">>();

//     // State cho danh muc và tìm kiếm
//     const [selectedCategory, setSelectedCategory] = useState("Fruit");
//     const [searchQuery, setSearchQuery] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const [isSearching, setIsSearching] = useState(false);

//     // Lọc sản phẩm theo danh mục khi không tìm kiếm
//     const filteredProducts = allProducts
//         .filter((product) => product.category === selectedCategory)
//         .slice(0, 4);

//     // Hàm xử lý tìm kiếm
//     const handleSearch = () => {
//         if (searchQuery.trim() === "") {
//             setIsSearching(false);
//             setSearchResults([]);
//             setSelectedCategory("Fruit"); // Reset về category mặc định
//             return;
//         }

//         const results = allProducts.filter((product) =>
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );

//         setSearchResults(results);
//         setIsSearching(true);
//         setSelectedCategory(""); // Bỏ active category khi tìm kiếm
//     };

//     // Render category item
//     const renderCategoryItem = ({ item }) => (
//         <TouchableOpacity
//             style={[
//                 styles.categoryItem,
//                 selectedCategory === item.name && styles.categoryItemSelected,
//             ]}
//             onPress={() => {
//                 setSelectedCategory(item.name);
//                 setIsSearching(false);
//                 setSearchQuery("");
//                 setSearchResults([]);
//             }}
//         >
//             <Image source={item.image} style={{ width: 30, height: 30 }} resizeMode="contain" />
//             <Text style={styles.categoryText}>{item.name}</Text>
//         </TouchableOpacity>
//     );

//     // Render product item
//     const renderProductItem = ({ item }) => (
//         <TouchableOpacity
//             style={styles.productItem}
//             onPress={() => navigation.navigate("Detail", { product: item })}
//         >
//             <Image source={item.image} style={styles.productImage} resizeMode="contain" />
//             <Text style={styles.productName}>{item.name}</Text>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <Text style={{ fontSize: 10, color: "#888" }}>{item.source} </Text>
//                 <Ionicons name="checkmark-circle-outline" size={10} color="#1A7E6C" />
//             </View>
//             <Text style={styles.productPrice}>{item.price}</Text>
//             <TouchableOpacity style={styles.addToCartButton}>
//                 <Ionicons name="cart-outline" size={16} color="#fff" />
//                 <Text style={styles.addToCartText}>Add to cart</Text>
//             </TouchableOpacity>
//         </TouchableOpacity>
//     );

//     return (
//         <ImageBackground
//             source={require("../../assets/half-background.png")}
//             style={styles.background}
//             resizeMode="cover"
//         >
//             <SafeAreaView style={{ flex: 1 }}>
//                 <View style={styles.container}>
//                     <View style={styles.header}>
//                         <Text style={styles.headerText}>
//                             Explore the taste{"\n"}of Asian Food
//                         </Text>
//                         <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
//                             <TouchableOpacity
//                                 style={styles.cartIcon}
//                                 onPress={() => navigation.navigate("Order")}
//                             >
//                                 <Ionicons name="cart-outline" size={21} color="#333" />
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//                                 <Image
//                                     source={require("../../assets/user.png")}
//                                     style={{ width: 30, height: 30 }}
//                                 />
//                             </TouchableOpacity>
//                         </View>
//                     </View>

//                     <ScrollView
//                         showsVerticalScrollIndicator={false}
//                         keyboardShouldPersistTaps="handled"
//                     >
//                         {/* Search bar */}
//                         <View style={styles.searchContainer}>
//                             <Ionicons
//                                 name="search-outline"
//                                 size={20}
//                                 color="#1A7E6C"
//                                 style={{ marginRight: 10 }}
//                             />
//                             <TextInput
//                                 style={styles.searchInput}
//                                 placeholder="Find food or restaurant..."
//                                 placeholderTextColor="#c8c8c8"
//                                 value={searchQuery}
//                                 onChangeText={setSearchQuery}
//                                 onSubmitEditing={handleSearch}
//                                 returnKeyType="search"
//                             />
//                         </View>

//                         {/* Promo banner */}
//                         <ScrollView
//                             horizontal
//                             showsHorizontalScrollIndicator={false}
//                             contentContainerStyle={{ paddingRight: 20 }} 
//                         >
//                             {/* Banner 1 */}
//                             <ImageBackground
//                                 source={require("../../assets/banner01-gradient.png")}
//                                 style={styles.bannerContainer}
//                                 imageStyle={{ borderRadius: 15 }}
//                             >
//                                 <View style={styles.bannerTextContainer}>
//                                     <View style={{ flexDirection: "row", marginBottom: 6 }}>
//                                         <Text style={styles.textHello}>Hello!</Text>
//                                         <Text style={styles.textUser}>{user ? user.name : "Guest"}</Text>
//                                     </View>
//                                     <Text style={styles.bannerText}>
//                                         Eat gelato{"\n"}like there's{"\n"}no tomorrow!
//                                     </Text>
//                                 </View>
//                                 <Image
//                                     source={require("../../assets/hold-ice-cream.png")}
//                                     style={styles.bannerImage}
//                                     resizeMode="cover"
//                                 />
//                             </ImageBackground>

//                             {/* Banner 2 */}
//                             <ImageBackground
//                                 source={require("../../assets/banner02-gradient.png")} 
//                                 style={styles.bannerContainer} 
//                                 imageStyle={{ borderRadius: 15 }}
//                             >
//                                 <View style={styles.bannerTextContainer}>
//                                     <Text style={styles.banner2Discount}>Discount 50</Text>
//                                     <Text style={styles.banner2Title}>50%</Text>
//                                     <Text style={styles.banner2Subtitle}>All Asian Foodie</Text>
//                                 </View>
//                                 <View style={styles.freeDeliveryBadge}>
//                                     <Text style={styles.freeDeliveryText}>Free Delivery</Text>
//                                 </View>
//                             </ImageBackground>
//                         </ScrollView>

//                         {/* Categories horizontal list */}
//                         <FlatList
//                             data={categories}
//                             renderItem={renderCategoryItem}
//                             keyExtractor={(item) => item.id}
//                             horizontal
//                             showsHorizontalScrollIndicator={false}
//                             style={styles.categoryList}
//                             contentContainerStyle={{
//                                 paddingLeft: 20,
//                                 paddingRight: 12,
//                             }}
//                         />

//                         {/* Recommendations section */}
//                         <View style={styles.recommendationHeader}>
//                             <Text style={styles.recommendationTitle}>Recommendation</Text>
//                         </View>

//                         {isSearching && searchResults.length === 0 ? (
//                             <View style={{ alignItems: "center", marginTop: 120 }}>
//                                 <Text style={{ fontSize: 16, color: "#666" }}>
//                                     Không tìm thấy sản phẩm với từ khóa "{searchQuery}"
//                                 </Text>
//                             </View>
//                         ) : (
//                             <FlatList
//                                 data={isSearching ? searchResults : filteredProducts}
//                                 renderItem={renderProductItem}
//                                 keyExtractor={(item) => item.id}
//                                 numColumns={2}
//                                 scrollEnabled={false}
//                                 contentContainerStyle={styles.productList}
//                             />
//                         )}
//                     </ScrollView>
//                 </View>
//             </SafeAreaView>
//         </ImageBackground>
//     );
// };

// export default HomeScreen;

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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabParamList } from "../types/route";
import styles from "../styles/HomPage";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<TabParamList, "Home">>();
    const { user } = useAuth();
    const { cartItems, addToCart } = useCart(); // Lấy cartItems và addToCart từ CartContext

    // Data for categories with images
    const categories = [
        { id: "1", name: "Fruit", image: require("../../assets/apple.png") },
        { id: "2", name: "Burger", image: require("../../assets/burger.png") },
        { id: "3", name: "Yogurt", image: require("../../assets/yogurt.png") },
        { id: "4", name: "Cream", image: require("../../assets/ice-cream.png") },
        { id: "5", name: "Coffee", image: require("../../assets/coffee.png") },
    ];

    // Dummy data for products with category
    const allProducts = [
        // Fruit
        {
            id: "1",
            name: "Kiwi Shake II",
            price: 98.00,
            image: require("../../assets/kiwi-shake.png"),
            source: "McDonald's",
            category: "Fruit",
            description: "Kiwi Shake II is a vibrant and refreshing beverage that blends the tangy, tropical flavors of ripe kiwi with a medley of exotic fruits. Perfect for a sunny day, this shake offers a burst of invigorating sweetness with every sip, leaving you feeling refreshed and revitalized. Whether you're lounging by the pool, enjoying a picnic, or simply need a quick hydration break during a busy day, the Kiwi Shake II is your go-to drink for a delightful and energizing experience.",
            sizes: [
                { size: "32" },
                { size: "48" },
                { size: "59" },
                { size: "64" },
                { size: "96" },
            ],
        },
        {
            id: "2",
            name: "Blueberry Maze",
            price: 98.00,
            image: require("../../assets/blueberry-maze.png"),
            source: "McDonald's",
            category: "Fruit",
            description: "Blueberry Maze is a delightful beverage that combines the sweet, juicy essence of ripe blueberries with the zesty, invigorating tang of fresh citrus fruits. This refreshing mix is perfect for a quick pick-me-up on a hot day, offering a burst of natural flavors that awaken your senses. Each sip brings a harmonious balance of fruity sweetness and a subtle tartness, making it an ideal choice for those who crave a light, revitalizing beverage. Whether you're relaxing at home, on a picnic, or need a refreshing break during a busy day, Blueberry Maze delivers a vibrant and satisfying experience with every gulp.",
            sizes: [
                { size: "32" },
                { size: "48" },
                { size: "59" },
                { size: "64" },
                { size: "96" },
            ],
        },
        {
            id: "5",
            name: "Mango Smoothie",
            price: 110.00,
            image: require("../../assets/mango-smoothie.png"),
            source: "Starbucks",
            category: "Fruit",
            description: "Mango Smoothie is a creamy and luscious blend of ripe, sun-kissed mangoes and smooth yogurt, creating a wholesome treat that’s perfect for any time of the day. This smoothie delivers a rich, tropical flavor with a velvety texture that melts in your mouth, offering a satisfying balance of sweetness and a hint of tanginess. Packed with nutrients, it’s an ideal choice for a healthy breakfast, a post-workout refreshment, or a guilt-free dessert. Enjoy it on a warm afternoon or as a quick snack to fuel your day with natural goodness and tropical vibes.",
            sizes: [
                { size: "32" },
                { size: "48" },
                { size: "59" },
                { size: "64" },
                { size: "96" },
            ],
        },
        {
            id: "6",
            name: "Apple Juice",
            price: 85.00,
            image: require("../../assets/apple-juice.png"),
            source: "Jollibee",
            category: "Fruit",
            description: "Apple Juice is a timeless and crisp beverage crafted from the freshest apples, delivering a pure and natural taste that’s loved by all ages. With its light, refreshing sweetness and a subtle hint of tartness, this juice is perfect for sipping on its own or pairing with your favorite meal. It’s a wholesome choice for kids during playtime, a hydrating drink for adults on the go, or a nostalgic treat that brings back childhood memories. Enjoy the crisp, clean flavor of apples in every sip, making any moment a little brighter.",
            sizes: [
                { size: "32" },
                { size: "48" },
                { size: "59" },
                { size: "64" },
                { size: "96" },
            ],
        },
        // Burger
        {
            id: "3",
            name: "Pats Burger",
            price: 134.00,
            image: require("../../assets/pats-burger.png"),
            source: "Jollibee",
            category: "Burger",
            description: "Pats Burger is a mouthwatering creation featuring a juicy, perfectly grilled beef patty nestled between soft, toasted buns. Layered with crisp, fresh lettuce, ripe tomatoes, and a signature tangy sauce, this burger offers a delightful balance of savory and fresh flavors in every bite. Ideal for a hearty lunch or a quick dinner, Pats Burger is a classic choice for burger lovers who crave a satisfying meal that’s both comforting and delicious. Pair it with fries and a drink for the ultimate fast-food experience.",
        },
        {
            id: "7",
            name: "Cheese Burger",
            price: 150.00,
            image: require("../../assets/cheese-burger.png"),
            source: "McDonald's",
            category: "Burger",
            description: "Cheese Burger is a timeless classic that brings together a succulent beef patty, melted cheddar cheese, and crunchy pickles, all sandwiched between a soft, fluffy bun. The rich, gooey cheese perfectly complements the savory beef, while the pickles add a zesty kick that elevates the flavor profile. This burger is a go-to option for a quick, satisfying meal, whether you’re grabbing a bite during a lunch break or enjoying a casual dinner with friends. It’s a comforting, crowd-pleasing favorite that never fails to hit the spot.",
        },
        {
            id: "8",
            name: "Chicken Burger",
            price: 140.00,
            image: require("../../assets/chicken-burger.png"),
            source: "KFC",
            category: "Burger",
            description: "Chicken Burger is a delicious alternative to traditional beef burgers, featuring a crispy, golden-fried chicken patty that’s tender and juicy on the inside. Topped with fresh, crunchy lettuce and a creamy mayo sauce, this burger is served on a soft bun that ties all the flavors together. It’s the perfect choice for those who love the taste of fried chicken in a convenient, handheld form, making it ideal for a quick lunch, a casual dinner, or a tasty snack on the go. Enjoy a burst of savory goodness with every bite.",
        },
        {
            id: "9",
            name: "Veggie Burger",
            price: 120.00,
            image: require("../../assets/veggie-burger.png"),
            source: "Burger King",
            category: "Burger",
            description: "Veggie Burger is a wholesome and flavorful option for those seeking a plant-based meal, featuring a hearty patty made from a blend of fresh vegetables and savory spices. Topped with crisp lettuce, ripe tomatoes, and a light, tangy sauce, this burger is served on a soft bun that enhances its earthy flavors. Perfect for vegetarians or anyone looking to enjoy a lighter, healthier burger, it’s a great choice for lunch, dinner, or a guilt-free snack. Savor the natural goodness of veggies in every delicious bite.",
        },
        // Yogurt
        {
            id: "4",
            name: "Berries Yogurt",
            price: 98.00,
            image: require("../../assets/berries-yogurt.png"),
            source: "McDonald's",
            category: "Yogurt",
            description: "Berries Yogurt is a creamy and delightful treat that combines smooth, velvety yogurt with a medley of mixed berries, including strawberries, blueberries, and raspberries. Each spoonful offers a perfect balance of tangy yogurt and the natural sweetness of ripe berries, making it an ideal choice for a light breakfast, a mid-day snack, or a refreshing dessert. Packed with probiotics and bursting with fruity flavors, this yogurt is a healthy and satisfying option for those looking to indulge without the guilt. Enjoy it on its own or with a sprinkle of granola for added crunch.",
        },
        {
            id: "10",
            name: "Strawberry Yogurt",
            price: 95.00,
            image: require("../../assets/strawberry-yogurt.png"),
            source: "Starbucks",
            category: "Yogurt",
            description: "Strawberry Yogurt is a sweet and creamy delight that features rich, smooth yogurt blended with chunks of fresh, juicy strawberries. The natural sweetness of the strawberries pairs beautifully with the subtle tang of the yogurt, creating a harmonious flavor profile that’s both indulgent and refreshing. Perfect for a quick breakfast on the go, a healthy afternoon snack, or a light dessert after dinner, this yogurt offers a satisfying treat that’s as nutritious as it is delicious. Enjoy the burst of strawberry goodness in every creamy spoonful.",
        },
        {
            id: "11",
            name: "Plain Yogurt",
            price: 80.00,
            image: require("../../assets/plain-yogurt.png"),
            source: "Jollibee",
            category: "Yogurt",
            description: "Plain Yogurt is a simple yet versatile option, offering a pure, unsweetened yogurt with a smooth and creamy texture that’s perfect for customizing to your taste. With its mild, tangy flavor, this yogurt serves as a fantastic base for adding your favorite toppings, such as fresh fruits, honey, or granola, making it a great choice for a healthy breakfast or snack. It’s also ideal for those who prefer a minimalist, no-sugar-added option that’s packed with probiotics and nutrients. Enjoy the wholesome simplicity of this classic yogurt anytime.",
        },
        {
            id: "12",
            name: "Mango Yogurt",
            price: 100.00,
            image: require("../../assets/mango-yogurt.png"),
            source: "KFC",
            category: "Yogurt",
            description: "Mango Yogurt is a tropical delight that blends creamy, smooth yogurt with the vibrant, sunny sweetness of ripe mangoes. Each bite offers a perfect harmony of tangy yogurt and the juicy, exotic flavor of mango, creating a refreshing and satisfying treat that transports you to a tropical paradise. Ideal for a light breakfast, a healthy snack, or a refreshing dessert, this yogurt is a great way to enjoy the benefits of probiotics while indulging in a burst of fruity goodness. Treat yourself to a taste of the tropics with every spoonful.",
        },
        // Cream
        {
            id: "13",
            name: "Vanilla Cream",
            price: 90.00,
            image: require("../../assets/vanilla-cream.png"),
            source: "McDonald's",
            category: "Cream",
            description: "Vanilla Cream is a rich and velvety dessert that captures the timeless essence of classic vanilla in every bite. Made with premium ingredients, this creamy treat offers a smooth, melt-in-your-mouth texture with a delicate sweetness that’s both comforting and indulgent. Perfect for satisfying your sweet tooth after a meal, as a midday treat, or as a special dessert to share with loved ones, Vanilla Cream brings a touch of elegance to any occasion. Enjoy the pure, nostalgic flavor of vanilla in this delightful creamy dessert.",
        },
        {
            id: "14",
            name: "Chocolate Cream",
            price: 95.00,
            image: require("../../assets/chocolate-cream.png"),
            source: "Starbucks",
            category: "Cream",
            description: "Chocolate Cream is a decadent and luxurious dessert that combines the rich, intense flavor of premium chocolate with a smooth, creamy texture that melts in your mouth. Each spoonful delivers a deep, velvety chocolate experience with just the right amount of sweetness, making it the ultimate treat for chocolate lovers. Whether you’re unwinding after a long day, treating yourself to a special dessert, or sharing with friends during a cozy gathering, Chocolate Cream is sure to satisfy your cravings and leave you wanting more.",
        },
        {
            id: "15",
            name: "Strawberry Cream",
            price: 100.00,
            image: require("../../assets/strawberry-cream.png"),
            source: "Jollibee",
            category: "Cream",
            description: "Strawberry Cream is a light and fruity dessert that blends the delicate sweetness of ripe strawberries with a rich, creamy base, creating a perfectly balanced treat that’s both refreshing and indulgent. The vibrant strawberry flavor shines through in every bite, complemented by the smooth, velvety texture of the cream, making it an ideal dessert for warm days or a sweet pick-me-up anytime. Whether enjoyed on its own or paired with a cup of tea, Strawberry Cream offers a delightful burst of fruity goodness that’s sure to please.",
        },
        {
            id: "16",
            name: "Caramel Cream",
            price: 110.00,
            image: require("../../assets/caramel-cream.png"),
            source: "KFC",
            category: "Cream",
            description: "Caramel Cream is a sweet and luxurious dessert that features the rich, buttery flavor of caramel in a smooth, creamy form that melts in your mouth. With its deep, golden sweetness and a hint of toffee-like richness, this treat offers a truly indulgent experience that’s perfect for satisfying your dessert cravings. Ideal for enjoying after dinner, as a special treat during a cozy evening, or as a delightful addition to a gathering with friends, Caramel Cream brings a touch of sweetness and warmth to any moment.",
        },
        // Coffee
        {
            id: "17",
            name: "Espresso",
            price: 120.00,
            image: require("../../assets/espresso.png"),
            source: "Starbucks",
            category: "Coffee",
            description: "Espresso is a bold and robust coffee experience, crafted from the finest coffee beans to deliver a strong, concentrated shot that’s perfect for a quick caffeine boost. With its rich, deep flavor and a smooth, velvety crema on top, this espresso offers an intense yet balanced taste that awakens your senses. Ideal for starting your morning, powering through a busy afternoon, or enjoying as a post-dinner pick-me-up, this classic coffee drink is a must-have for coffee enthusiasts who appreciate the pure essence of espresso.",
        },
        {
            id: "18",
            name: "Latte",
            price: 130.00,
            image: require("../../assets/latte.png"),
            source: "Starbucks",
            category: "Coffee",
            description: "Latte is a smooth and creamy coffee beverage that combines a rich shot of espresso with perfectly steamed milk, topped with a delicate layer of frothy foam. The result is a harmonious balance of bold coffee flavor and velvety milk, creating a comforting drink that’s both satisfying and indulgent. Perfect for sipping slowly during a relaxing morning, enjoying with a pastry for a mid-day break, or sharing with friends at a café, this latte offers a classic coffee experience that’s loved by many.",
        },
        {
            id: "19",
            name: "Cappuccino",
            price: 125.00,
            image: require("../../assets/cappuccino.png"),
            source: "McDonald's",
            category: "Coffee",
            description: "Cappuccino is a perfectly balanced coffee drink that blends a rich shot of espresso with equal parts steamed milk and frothy foam, creating a light yet flavorful beverage that’s a delight to sip. The bold espresso shines through, complemented by the creamy milk and airy foam, making it a classic choice for coffee lovers. Whether you’re starting your day, taking a break in the afternoon, or winding down in the evening, this cappuccino offers a refined and satisfying coffee experience that’s perfect for any time of day.",
        },
        {
            id: "20",
            name: "Mocha",
            price: 140.00,
            image: require("../../assets/mocha.png"),
            source: "Jollibee",
            category: "Coffee",
            description: "Mocha is a decadent and flavorful coffee drink that combines the boldness of espresso with the rich, indulgent taste of chocolate and the creaminess of steamed milk. Topped with a light layer of foam, this mocha offers a perfect balance of coffee and cocoa flavors, creating a warm and comforting beverage that’s both energizing and satisfying. Ideal for a cozy morning treat, a mid-day indulgence, or a sweet pick-me-up in the evening, this mocha is a delightful choice for those who love the combination of coffee and chocolate.",
        },
    ];

    // State cho danh mục và tìm kiếm
    const [selectedCategory, setSelectedCategory] = useState("Fruit");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    // Lọc sản phẩm theo danh mục khi không tìm kiếm
    const filteredProducts = allProducts
        .filter((product) => product.category === selectedCategory)
        .slice(0, 4);

    // Hàm xử lý tìm kiếm
    const handleSearch = () => {
        if (searchQuery.trim() === "") {
            setIsSearching(false);
            setSearchResults([]);
            setSelectedCategory("Fruit"); // Reset về category mặc định
            return;
        }

        const results = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(results);
        setIsSearching(true);
        setSelectedCategory(""); // Bỏ active category khi tìm kiếm
    };

    // Render category item
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

    // Render product item
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
                    // Thêm sản phẩm vào giỏ hàng với kích thước mặc định (nếu có)
                    const size = item.sizes && item.sizes.length > 0 ? item.sizes[0].size : undefined;
                    addToCart({
                        id: Number(item.id),
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        source: item.source,
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