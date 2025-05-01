import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/cart/Payment';
import { RootStackParamList } from '../../types/route';
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useState } from 'react';

const PaymentScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "Payment">>();
    const [selected, setSelected] = useState("PayPal");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* Header and cart icons */}
                <View style={styles.header}>
                    {/* --- Top bar: back + cart --- */}
                    <View style={styles.topBar}>
                        <View style={styles.headerIcons}>
                            <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Profile" })}>
                                <Ionicons
                                    name="arrow-back-outline"
                                    size={20}
                                    color="black"
                                    style={styles.backButton}
                                />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>Payment</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                            <TouchableOpacity
                                style={styles.cartIcon}
                                onPress={() => navigation.navigate("Order")}
                            >
                                <Ionicons name="cart-outline" size={21} color="#333" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Profile" })}>
                                <Image
                                    source={require("../../../assets/user.png")}
                                    style={{ width: 30, height: 30 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.userRow}>
                        <Text style={styles.name}>Credit Cards</Text>
                        <TouchableOpacity
                            style={styles.addBtnSmall}

                        >
                            <Feather name="plus" size={14} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingRight: 20 }}
                    style={styles.card}
                >
                    {/* Banner 1 */}
                    <ImageBackground
                        source={require("../../../assets/credit-card.png")}
                        style={styles.bannerContainer}
                        imageStyle={{ borderRadius: 15 }}
                    >
                        <View style={styles.cardDecoration}>
                            <View style={styles.circle1} />
                            <View style={styles.circle2}>
                                <View style={styles.circle3}>
                                    <View style={styles.circle4} />
                                </View>
                            </View>
                        </View>
                        {/* VISA góc trái trên */}
                        <View style={styles.topRow}>
                            <Text style={styles.visa}>VISA</Text>
                        </View>

                        {/* Card number ở giữa */}
                        <View style={styles.cardNumberContainer}>
                            <Text style={styles.cardNumber}>7741 6588 2123 6644</Text>
                        </View>

                        {/* Bottom info: tên trái, ngày phải */}
                        <View style={styles.bottomRow}>
                            <Text style={styles.namec}>JORDAN{"\n"}WATSON</Text>
                            <Text style={styles.exp}>EXP. END{"\n"}12/25</Text>
                        </View>
                    </ImageBackground>
                    {/* Banner 2 */}
                    <ImageBackground
                        source={require("../../../assets/banner01-gradient.png")}
                        style={styles.bannerContainer}
                        imageStyle={{ borderRadius: 15 }}
                    >
                        <View style={styles.cardDecoration2}>
                            <View style={styles.circle2_1} />
                            <View style={styles.circle2_2}>
                                <View style={styles.circle2_3}>
                                    <View style={styles.circle2_4} />
                                </View>
                            </View>
                        </View>
                        {/* VISA góc trái trên */}
                        <View style={styles.topRow}>
                            <Text style={styles.visa}>VISA</Text>
                        </View>

                        {/* Card number ở giữa */}
                        <View style={styles.cardNumberContainer}>
                            <Text style={styles.cardNumber}>7741 6588 2123 6644</Text>
                        </View>

                        {/* Bottom info: tên trái, ngày phải */}
                        <View style={styles.bottomRow}>
                            <Text style={styles.namec}>JORDAN{"\n"}WATSON</Text>
                            <Text style={styles.exp}>EXP. END{"\n"}12/25</Text>
                        </View>

                    </ImageBackground>

                </ScrollView>
                <View style={styles.otherOptionsContainer}>
                    <Text style={styles.otherTitle}>Other option</Text>

                    {["Apple Pay", "PayPal", "GCash"].map((option, index) => (
                        <TouchableOpacity
                            key={option}
                            style={styles.paymentOptionCard}
                            onPress={() => setSelected(option)}
                        >
                            <View style={styles.optionLeft}>
                                <View style={styles.iconWithBalance}>
                                    <Image
                                        source={
                                            option === "Apple Pay"
                                                ? require("../../../assets/appay.png")
                                                : option === "PayPal"
                                                    ? require("../../../assets/paypal.png")
                                                    : require("../../../assets/gcash.png")
                                        }
                                        style={[styles.optionIcon, { marginBottom: 4 }]}
                                    />
                                    <Text style={styles.optionBalance}>
                                        Balance: ${option === "Apple Pay" ? "1,340" : "3,340"}
                                    </Text>

                                </View>
                            </View>

                            <View style={[
                                styles.radioOuter,
                                { borderColor: selected === option ? '#FBB040' : '#ccc' }
                            ]}>
                                {selected === option && <View style={styles.radioInner} />}
                            </View>


                        </TouchableOpacity>
                    ))}
                </View>

            </View>
        </SafeAreaView>
    );
};

export default PaymentScreen;