import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from '../../types/route';
import styles from '../../styles/user/Edit';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { useState } from 'react';
import PopUp from '../../components/modal/Modal';

const EditScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "Edit">>();
    const [modalVisible, setModalVisible] = useState(false);

    const handleUpdateProfile = () => {

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
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Profile" })}>
                        <Image
                            source={require("../../../assets/user.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Avatar */}
            <View style={styles.avatarWrapper}>
                <Image source={require('../../../assets/avatar.png')} style={styles.avatar} />
                <TouchableOpacity style={styles.addPhotoBtn}>
                    <Feather name="plus" size={16} color="#fff" />
                </TouchableOpacity>
            </View>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                {/* Form */}
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput placeholder="e.g. Joe black" style={styles.input} />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput placeholder="e.g. joeblack@domain.com" style={styles.input} />

                    <Text style={styles.label}>Mobile Phone</Text>
                    <TextInput placeholder="(63) 923 123 21312" style={styles.input} />

                    <Text style={styles.label}>Gender</Text>
                    <TextInput placeholder="(63) 923 123 21312" style={styles.input} />

                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
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