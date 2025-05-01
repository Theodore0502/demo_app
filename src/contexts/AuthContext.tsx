import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

type User = {
    name: string;
    username: string;
    password: string;
};

type AuthContextType = {
    user: User | null;
    login: (username: string, password: string) => Promise<boolean>;
    signup: (name: string, username: string, password: string) => Promise<boolean>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const login = async (username: string, password: string) => {
        if (!username.trim() && !password.trim()) {
            Alert.alert("Notification", "Please fill all fields!");
            return false;
        }

        if (!username.trim()) {
            Alert.alert("Notification", "Email is not empty!");
            return false;
        }

        if (!password.trim()) {
            Alert.alert("Notification", "Password is not empty!");
            return false;
        }

        if (password.trim().length < 5) {
            Alert.alert("Notification", "Password is at least 5 characters!");
            return false;
        }

        if (!isValidEmail(username)) {
            Alert.alert("Notification", "Invalid email format!");
            return false;
        }

        // Simulating login by checking user from AsyncStorage
        const storedUser = await AsyncStorage.getItem(username);
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === password) {
                setUser(userData);
                return true;
            }
        }

        Alert.alert("Error", "Login failed! Invalid username or password!");
        return false;
    };

    const signup = async (name: string, username: string, password: string) => {
        if (!name.trim() && !username.trim() && !password.trim()) {
            Alert.alert("Notification", "Please fill all fields!");
            return false;
        }

        if (!name.trim()) {
            Alert.alert("Notification", "Name is not empty!");
            return false;
        }

        if (!username.trim()) {
            Alert.alert("Notification", "Email is not empty!");
            return false;
        }

        if (!password.trim()) {
            Alert.alert("Notification", "Password is not empty!");
            return false;
        }

        if (name.trim().length < 5) {
            Alert.alert("Notification", "Name is at least 5 characters!");
            return false;
        }

        if (password.trim().length < 5) {
            Alert.alert("Notification", "Password is at least 5 characters!");
            return false;
        }

        if (!isValidEmail(username)) {
            Alert.alert("Notification", "Invalid email format!");
            return false;
        }

        // Check if the username already exists in AsyncStorage
        const existingUser = await AsyncStorage.getItem(username);
        if (existingUser) {
            Alert.alert("Notification", "Email is already registered!");
            return false;
        }

        // Store the new user in AsyncStorage
        const newUser: User = { name, username, password };
        await AsyncStorage.setItem(username, JSON.stringify(newUser));

        setUser(newUser);
        return true;
    };

    const logout = () => {
        setUser(null);
        // Clear user data from AsyncStorage if needed
    };

    return (
        <AuthContext.Provider
            value={{ user, login, signup, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
