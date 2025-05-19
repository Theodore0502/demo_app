import { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/item/ProductDetail";
import { NavigationProp, useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";

const DetailScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "Detail">>();
    const route = useRoute<RouteProp<RootStackParamList, "Detail">>();
    const { product } = route.params;
    const { addToCart } = useCart();
    const { cartItems } = useCart(); // Lấy cartItems từ CartContext
    const { user } = useAuth();

    // SubImages chỉ sử dụng product.image, giả lập thành 3 hình giống nhau
    const subImages = [product.image, product.image, product.image];

    // Khởi tạo selectedSize với giá trị mặc định
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Đảm bảo selectedSize có giá trị hợp lệ khi product.sizes thay đổi
    useEffect(() => {
        if (product.sizes && product.sizes.length > 0) {
            setSelectedSize(product.sizes[0].size);
        }
    }, [product.sizes]);

    return (
        <ImageBackground
            source={require("../../../assets/item01-gradient.png")}
            style={styles.container}
        >
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={20}
                        color="black"
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Main")}
                    />
                    <Text style={styles.itemName}>{product.name}</Text>
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
                    <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Profile" })}>
                        <Image
                            source={user?.avatar ? { uri: user.avatar } : require('../../../assets/user.png')}
                            style={{ width: 30, height: 30, borderRadius: 5 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Nội dung có thể scroll */}
            <ScrollView
                style={{ flex: 1 }} // Chiếm toàn bộ không gian còn lại
                contentContainerStyle={{ flexGrow: 1 }} // Nội dung bên trong kéo dài
            >
                {/* Hình ảnh chính + số lượng */}
                <View style={styles.illustration}>
                    <View style={styles.mainImage_Quantity}>
                        <View style={styles.mainImageContainer}>
                            <Image
                                source={subImages[selectedImageIndex]}
                                style={styles.mainImage}
                            />
                        </View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.quantityButton} activeOpacity={1}>
                                <TouchableOpacity onPress={decreaseQuantity}>
                                    <Ionicons name="remove" size={22} color="white" />
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{quantity}</Text>
                                <TouchableOpacity onPress={increaseQuantity}>
                                    <Ionicons name="add" size={22} color="white" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Danh sách subImages */}
                    <View style={styles.subImageList}>
                        {subImages.map((img, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setSelectedImageIndex(index)}
                                activeOpacity={0.8}
                            >
                                <View style={styles.subImageContainer}>
                                    <Image source={img} style={styles.subImage} />
                                    {selectedImageIndex === index && <View style={styles.overlay} />}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Thông tin sản phẩm */}
                <View style={styles.infoContainerWrapper}>
                    <View style={styles.infoContainer}>
                        <View style={styles.titleRow}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>₱{product.price.toFixed(2)}</Text>
                        </View>

                        <View style={styles.sourceRow}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={styles.sourceText}>{product.source} </Text>
                                <Ionicons
                                    name="checkmark-circle-outline"
                                    size={10}
                                    color="#1A7E6C"
                                    style={{ paddingBottom: 6 }}
                                />
                            </View>
                            <View style={styles.ratingContainer}>
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Ionicons name="star-half" size={16} color="#FFD700" />
                                <Text style={styles.ratingText}>4.2</Text>
                            </View>
                        </View>

                        {/* Size Selector */}
                        <View style={styles.sizeContainer}>
                            <Text style={styles.sectionTitle}>Size</Text>
                            <View style={styles.sizeOptions}>
                                {product.sizes && product.sizes.length > 0 ? (
                                    product.sizes.map((item, index) => {
                                        const isSelected = selectedSize === item.size;
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => setSelectedSize(item.size)}
                                                style={styles.sizeOption}
                                            >
                                                {isSelected ? (
                                                    <View style={styles.selectedSizeContainer}>
                                                        <View style={styles.circle1} />
                                                        <View style={styles.circle2} />
                                                        <Text style={styles.selectedSizeText}>
                                                            {item.size}
                                                        </Text>
                                                        <Text style={styles.selectedSizeText}>
                                                            OZ
                                                        </Text>
                                                    </View>
                                                ) : (
                                                    <>
                                                        <View style={styles.sizeOverlay} />
                                                        <Text style={styles.sizeText}>
                                                            {item.size}
                                                        </Text>
                                                        <Text style={styles.unitText}>
                                                            OZ
                                                        </Text>
                                                    </>
                                                )}
                                            </TouchableOpacity>
                                        );
                                    })
                                ) : (
                                    <Text>Không có kích thước nào khả dụng</Text>
                                )}
                            </View>
                        </View>

                        {/* Mô tả */}
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.sectionTitle}>Description</Text>
                            <Text style={styles.descriptionText}>{product.description}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Nút Add to cart cố định dưới cùng */}
            <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => {
                    addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        source: product.source,
                        size: selectedSize,
                        quantity: quantity,
                    });
                    navigation.navigate("Order");
                }}
            >
                <Ionicons name="cart-outline" size={20} color="#fff" style={{ marginRight: 5 }} />
                <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default DetailScreen;