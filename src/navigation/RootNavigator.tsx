import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/Login";
import SignUpScreen from "../screens/auth/SignUp";
import SplashScreen from "../screens/initial/Splash";
import OnBoardingScreen from "../screens/initial/OnBoarding";
import AboutScreen from "../screens/user/About";
import TabNavigator from "./TabNavigator";
import OrderScreen from "../screens/cart/Order";
import DetailScreen from "../screens/item/ProductDetail";
import EditScreen from "../screens/user/Edit";
import PaymentScreen from "../screens/cart/Payment";

const RootNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
        >
            {/* Initial Screens */}
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            {/* Auth Screens */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            {/* Main App Screens with Tab Navigator */}
            <Stack.Screen name="Main" component={TabNavigator} />
            {/* Main App Screens with Stack Navigator */}
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            {/* Main screens */}
        </Stack.Navigator>
    );
};

export default RootNavigator;