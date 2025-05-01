import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useKeyboard } from "@react-native-community/hooks";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomePage';
import ProfileScreen from '../screens/user/Profile';
import OrderHistoryScreen from '../screens/cart/OrderHistory';
import VoucherScreen from '../screens/cart/Voucher';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    const keyboard = useKeyboard();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: [
                    styles.tabBar,
                    { display: keyboard.keyboardShown ? "none" : "flex" }, // Hide when keyboard is shown
                ],
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarActiveTintColor: '#FF9800',
                tabBarInactiveTintColor: '#888',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={[styles.tabBarLabel, { color }]}>Home</Text>
                    ),
                }}
            />

            <Tab.Screen
                name="OrderHistory"
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'file-tray-stacked' : 'file-tray-stacked-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={[styles.tabBarLabel, { color }]}>Order</Text>
                    ),
                }}
            />

            <Tab.Screen
                name="Voucher"
                component={VoucherScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'pricetag' : 'pricetag-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={[styles.tabBarLabel, { color }]}>Voucher</Text>
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={[styles.tabBarLabel, { color }]}>Profile</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        // borderTopWidth: 0,
        height: 65,
        width: "100%",
        paddingBottom: 8,
        paddingTop: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderStartStartRadius: 30,
        borderEndStartRadius: 30,
        // marginBottom: 20,
        // marginHorizontal: 18,
        position: 'absolute', // Đặt tab bar nổi lên trên nội dung
        bottom: 0,
        left: 0,
        right: 0,
    },
    tabBarLabel: {
        fontSize: 10,
        fontWeight: '500',
        marginBottom: 2,
    },
});

export default TabNavigator;