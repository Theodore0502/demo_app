import React, { useState, useCallback } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/cart/Order";
import { NavigationProp, useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";
import { useCart } from "../../contexts/CartContext"; // Import useCart
import { useFocusEffect } from "@react-navigation/native";
import { useOrderHistory } from "../../contexts/OrderHistoryContext"; // Import useOrderHistory

const OrderScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "Order">>();
    const { cartItems, increaseQuantity, decreaseQuantity, removeItem, clearCart } = useCart(); // Lấy dữ liệu từ context

    useFocusEffect(
        useCallback(() => {
            if (route.params?.voucherTitle) {
                setSelectedVoucher(route.params.voucherTitle);
                setDiscountValue(route.params.discountValue || 0);

                // Xóa params đi để tránh re-run vô tận
                navigation.setParams({ voucherTitle: undefined, discountValue: undefined });
            }
        }, [route.params])
    );

    // Nhận voucherTitle và discountValue từ route.params
    const [selectedVoucher, setSelectedVoucher] = useState(route.params?.voucherTitle || "");
    const [discountValue, setDiscountValue] = useState(route.params?.discountValue || 0);
    const [modalVisible, setModalVisible] = useState(false);

    // Tính Subtotal (tổng tiền trước giảm giá)
    const calculateSubtotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    // Tính số tiền giảm giá
    const calculateDiscountAmount = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const discount = (subtotal * discountValue) / 100;
        return discount.toFixed(2);
    };

    // Tính Total (tổng tiền sau giảm giá)
    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const discount = (subtotal * discountValue) / 100;
        const total = subtotal - discount;
        return total.toFixed(2);
    };

    const calculateItemTotal = (price: number, quantity: number) => {
        return (price * quantity).toFixed(2);
    };

    const handleApplyPromocode = () => {
        console.log("Apply promocode pressed, navigating to Voucher tab");
        navigation.navigate("Main", { screen: "Voucher" });
    };

    const { addOrder } = useOrderHistory(); // lấy từ context

    const handleCheckout = () => {
        const total = parseFloat(calculateTotal());
        const date = new Date().toLocaleString();

        // Add order trước khi clear cart
        addOrder({
            id: Date.now().toString(),
            items: [...cartItems],
            total,
            voucher: selectedVoucher,
            date
        });

        setModalVisible(true);

        setTimeout(() => {
            setModalVisible(false);
            clearCart();
            setSelectedVoucher("");
            setDiscountValue(0);

            navigation.reset({
                index: 0,
                routes: [{ name: 'Main', params: { screen: 'OrderHistory' } }],
            });
        }, 1500);
    };


    const handleCloseModal = () => {
        setModalVisible(false);
        clearCart();
        setSelectedVoucher("");
        setDiscountValue(0);
    };

    const handleBackPress = () => {
        // Nếu có thể goBack thì làm, nếu không thì navigate home
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.navigate("Main", { screen: "Home" });
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Order</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={styles.cartIcon}>
                        <Ionicons name="cart-outline" size={21} color="#333" />
                        <View style={styles.cartBadge}>
                            <Text style={styles.cartBadgeText}>
                                {cartItems.reduce((total, item) => total + item.quantity, 0)}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Main", { screen: "Profile" })}
                    >
                        <Image
                            source={require("../../../assets/user.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Order Items */}
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {cartItems.map((item) => (
                    <View key={item.id} style={styles.orderItem}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            {item.size ? (
                                <Text style={styles.itemSize}>Size: {item.size} OZ</Text>
                            ) : (
                                <Text style={styles.itemSize}>Size: N/A</Text>
                            )}
                            <Text style={styles.itemPrice}>
                                ₱{calculateItemTotal(item.price, item.quantity)}
                            </Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                                    <Ionicons name="remove" size={20} color="#333" />
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                                    <Ionicons name="add" size={20} color="#333" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => removeItem(item.id)}
                            style={styles.deleteButton}
                        >
                            <Ionicons name="trash-outline" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Promo Code + Summary */}
            <View style={styles.PromoSummaryContainer}>
                <View style={styles.promoContainer}>
                    <TouchableOpacity onPress={handleApplyPromocode}>
                        <View style={styles.sectionTitleContainer}>
                            <Text
                                style={[
                                    styles.sectionTitle,
                                    {
                                        color: selectedVoucher ? "#808080" : "#FF8C42",
                                    },
                                ]}
                            >
                                Apply promocode
                            </Text>
                            <Text
                                style={[
                                    styles.sectionTitleArrow,
                                    {
                                        color: selectedVoucher ? "#808080" : "#FF8C42",
                                    },
                                ]}
                            >
                                ›
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {selectedVoucher ? (
                        <View style={styles.promoInputContainer}>
                            <Text style={[styles.promoText, { color: "#116953" }]}>
                                {String(selectedVoucher)}
                            </Text>
                            <Ionicons
                                name="checkmark-circle"
                                size={20}
                                color="#1A7E6C"
                                style={styles.checkIcon}
                            />
                        </View>
                    ) : null}
                </View>

                {/* Summary */}
                <View style={styles.summaryContainer}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryText}>Subtotal</Text>
                        <Text style={styles.summaryText3}>₱{calculateSubtotal()}</Text>
                    </View>
                    {discountValue > 0 && ( // Hiển thị số tiền giảm giá nếu có voucher
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryText}>Discount ({discountValue}%)</Text>
                            <Text style={[styles.summaryText3, { color: "#FF8C42" }]}>
                                -₱{calculateDiscountAmount()}
                            </Text>
                        </View>
                    )}
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryText}>Delivery</Text>
                        <Text style={[styles.summaryText3, { color: "#1A7E6C" }]}>Free</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.summaryRow}>
                        <Text style={[styles.summaryText2]}>Total</Text>
                        <Text style={[styles.summaryText2]}>₱{calculateTotal()}</Text>
                    </View>
                </View>
            </View>

            {/* Checkout Button */}
            <View style={styles.checkoutContainer}>
                <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={handleCheckout}
                >
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>

            {/* Modal Thông báo */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Image
                            source={require('../../../assets/check.png')}
                            style={styles.modalIcon}
                        />
                        <Text style={styles.modalTitle}>Congratulations!!</Text>
                        <Text style={styles.modalSubtitle}>Your order has been placed successfully!</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

// --- JSON helper functions (thao tác dữ liệu JSON) ---
export const parseJSON = (jsonString: string) => {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        return null;
    }
};

export const stringifyJSON = (data: any) => {
    try {
        return JSON.stringify(data, null, 2); // format đẹp
    } catch (error) {
        console.error("Failed to stringify JSON:", error);
        return "";
    }
};

export const addItemToCart = (cartItems: any[], newItem: any) => {
    return [...cartItems, newItem];
};

export const updateItemQuantity = (cartItems: any[], itemId: string, newQuantity: number) => {
    return cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
};

export default OrderScreen;
