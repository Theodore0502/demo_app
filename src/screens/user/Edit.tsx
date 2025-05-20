import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from '../../types/route';
import styles from '../../styles/user/Edit';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { useState } from 'react';
import PopUp from '../../components/modal/Modal';
import { useAuth } from '../../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useCart } from '../../contexts/CartContext';

const EditScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "Edit">>();
    const [modalVisible, setModalVisible] = useState(false);
    const { user, setUser } = useAuth();
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.username || '');
    const [password, setPassword] = useState(user?.password ?? '');
    const [address, setAddress] = useState(user?.address || '');
    const [avatar, setAvatar] = useState(user?.avatar || null);
    const { cartItems } = useCart();

    const handleUpdateProfile = async () => {
        if (!user) return;  // không làm gì nếu chưa đăng nhập

        // Tạo object mới (mở rộng nếu có thêm phone/gender)
        const updatedUser = {
            ...user,
            name,
            username: email,
            password,
            avatar,
            address,
        };

        try {
            // Nếu email (username) thay đổi, xoá thông tin cũ từ AsyncStorage
            if (email !== user.username) {
                await AsyncStorage.removeItem(user.username); // Xoá dữ liệu cũ theo username cũ
            }

            // Lưu đối tượng người dùng mới vào AsyncStorage với username mới
            await AsyncStorage.setItem(updatedUser.username, JSON.stringify(updatedUser));

            // Cập nhật state trong context (để Profile tự động render lại)
            setUser(updatedUser);

            setModalVisible(true);

        } catch (error) {
            console.error("Error updating user", error);
            Alert.alert("Error", "Failed to update profile. Please try again.");
        }
    };
    const pickImage = async () => {
        // Xin quyền truy cập ảnh
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to change your profile picture!');
            return;
        }

        // Chọn ảnh từ thư viện
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const selectedAsset = result.assets[0];
            setAvatar(selectedAsset.uri);  // Cập nhật ảnh đại diện
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Profile" })}>
                        <Ionicons
                            name="arrow-back-outline"
                            size={20}
                            color="black"
                            style={styles.backButton}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Profile</Text>
                </View>
                <View style={styles.headerIcons}>
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
                            source={avatar ? { uri: avatar } : require("../../../assets/user.png")}
                            style={{ width: 30, height: 30, borderRadius: 5 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Avatar */}
            <View style={styles.avatarWrapper}>
                <Image
                    source={avatar ? { uri: avatar } : require('../../../assets/avatar.png')}  // Nếu có ảnh mới thì dùng, nếu không dùng ảnh mặc định
                    style={styles.avatar}
                />
                <TouchableOpacity style={styles.addPhotoBtn} onPress={pickImage}>
                    <Feather name="plus" size={16} color="#fff" />
                </TouchableOpacity>
            </View>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                {/* Form */}
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        placeholder="e.g. Joe black"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        placeholder="Fill your address"
                        style={styles.input}
                        value={address}
                        onChangeText={setAddress}
                    />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        placeholder="e.g. joeblack@domain.com"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Enter new password"
                        secureTextEntry
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity
                        onPress={handleUpdateProfile}
                        style={styles.updateButton}
                    >
                        <Text style={styles.updateButtonText}>Update Profile</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>

            {/* PopUp */}
            <PopUp
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </SafeAreaView>
    );
};


export default EditScreen;