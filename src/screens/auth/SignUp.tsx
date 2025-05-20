import {
    Alert,
    Image,
    Keyboard,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "../../styles/auth/SignUp";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

const SignUpScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, "SignUp">>();
    const { signup } = useAuth();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSignUp = async () => {
        const success = await signup(name, username, password);
        if (success) {
            Alert.alert("Notification", "Create account successfully!", [
                {
                    text: "OK",
                    onPress: () => navigation.navigate("Login"),
                },
            ]);
        }
    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="black" barStyle="light-content" />

                    {/* Logo image */}
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={styles.logo}
                        />
                    </View>

                    {/* Create Text */}
                    <Text style={styles.createText}>Create Account</Text>

                    {/* Input Fields */}
                    <View style={styles.inputContainer}>
                        <View style={styles.inputWrapper}>
                            <Icon name="person" size={20} color="#888" style={styles.icon} />
                            <TextInput
                                value={name}
                                style={styles.input}
                                placeholder="Name"
                                placeholderTextColor="#888"
                                onChangeText={setName}
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Icon name="person" size={20} color="#888" style={styles.icon} />
                            <TextInput
                                value={username}
                                style={styles.input}
                                placeholder="Username"
                                placeholderTextColor="#888"
                                onChangeText={setUsername}
                            />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Icon name="lock" size={20} color="#888" style={styles.icon} />
                            <TextInput
                                value={password}
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#888"
                                secureTextEntry={!isPasswordVisible}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={handlePasswordVisibility}>
                                <Icon
                                    name={isPasswordVisible ? "visibility" : "visibility-off"}
                                    size={20}
                                    color="#888"
                                    style={styles.eyeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Create Button */}
                    <TouchableOpacity
                        style={styles.createButton}
                        onPress={handleSignUp}
                    >
                        <Text style={styles.createButtonText}>Create Account</Text>
                    </TouchableOpacity>

                    {/* Login Link */}
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Don't have Account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.loginLink}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default SignUpScreen;