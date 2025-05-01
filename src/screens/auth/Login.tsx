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
import styles from "../../styles/auth/Login";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, "Login">>();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
      Alert.alert("Notification", "Login successfully!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Main"),
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
          {/* #1A3C34 */}

          {/* Logo image */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/logo.png')}
              style={styles.logo}
            />
          </View>

          {/* Welcome Text */}
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.loginText}>Login with your account to continue.</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
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

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have Account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.registerLink}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default LoginScreen;