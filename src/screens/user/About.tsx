import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types/route';
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import styles from '../../styles/user/About';

const AboutScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "About">>();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Main", { screen: "Profile" })}
                    >
                        <Ionicons name="chevron-back-outline" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>About Us</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Profile" })}>
                    <Image
                        source={require("../../../assets/user.png")}
                        style={{ width: 30, height: 30, marginRight: 25, }}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {/* Logo + Version */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../../assets/dark-logo.png')} // Thay bằng logo phù hợp nếu có
                        style={styles.logoIcon}
                    />
                    <Image
                        source={require('../../../assets/made-fork.png')}
                        style={styles.textMadeFork}
                    />
                    <Text style={styles.versionText}>Version 1.0.0 - Copyright</Text>
                </View>

                {/* About Text */}
                <Text style={styles.sectionTitle}>About Us</Text>
                <Text style={styles.description}>
                    Our restaurant app is designed to make it easy for customers to
                    discover and order from their favorite restaurants. With our
                    user-friendly interface, customers can browse menus, place orders,
                    and track delivery in real-time. Our app also provides restaurant
                    owners with powerful tools to manage their online presence, track
                    sales, and optimize their menus for maximum profitability.
                </Text>

                {/* Info Buttons */}
                {['What’s New?', 'Terms Of Uses', 'Privacy'].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.infoButton}>
                        <Text style={styles.infoText}>{item}</Text>
                        <Ionicons name="chevron-forward" size={18} color="black" />
                    </TouchableOpacity>
                ))}

                {/* Footer */}
                <Text style={styles.footer}>Copyright © ericsnde.co 2023</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutScreen;