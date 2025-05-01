import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import styles from '../../styles/user/Profile';
import { TabParamList } from '../../types/route';
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from '../../contexts/AuthContext';

const ProfileScreen = () => {
    const navigation = useNavigation<NavigationProp<TabParamList, "Profile">>();
    const { user } = useAuth();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* Header and cart icons */}
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
                            <Text style={styles.headerTitle}>Profile</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                            <TouchableOpacity
                                style={styles.cartIcon}
                                onPress={() => navigation.navigate("Order")}
                            >
                                <Ionicons name="cart-outline" size={21} color="#333" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                <Image
                                    source={require("../../../assets/user.png")}
                                    style={{ width: 30, height: 30 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* --- User Info Row --- */}
                    <View style={styles.userRow}>
                        <View style={styles.headerIcons}>
                            <Image
                                source={require('../../../assets/user.png')}
                                style={styles.avatarSmall}
                            />
                            <View style={{ marginLeft: 10, marginBottom: 15 }}>
                                <Text style={styles.name}>{user ? user.name : "Guest"}</Text>
                                <Text style={styles.location}>Maple Ave, New York</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.editBtnSmall}
                            onPress={() => navigation.navigate('Edit')}
                        >
                            <Feather name="edit-2" size={14} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Menu List */}
                <ScrollView style={styles.menu}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("OrderHistory")}
                        style={styles.menuItem}
                    >
                        <Feather name="clock" size={20} style={styles.menuIcon} />
                        <Text style={styles.menuLabel}>Order History</Text>
                        <Feather name="chevron-right" size={20} color="black" style={styles.menuArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.navigate('About')}
                    >
                        <Feather name="info" size={20} style={styles.menuIcon} />
                        <Text style={styles.menuLabel}>About Us</Text>
                        <Feather name="chevron-right" size={20} color="black" style={styles.menuArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <MaterialIcons name="logout" size={20} color="red" style={styles.menuIcon} />
                        <Text style={[styles.menuLabel, { color: 'red' }]}>Sign Out</Text>
                        <Feather name="chevron-right" size={20} color="black" style={styles.menuArrow} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;