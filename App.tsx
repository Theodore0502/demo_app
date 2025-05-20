import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaView } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';
import { OrderHistoryProvider } from './src/contexts/OrderHistoryContext';

const App = () => {
    return (
        <AuthProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <OrderHistoryProvider>
                    <CartProvider>
                        <NavigationContainer>
                            <RootNavigator />
                        </NavigationContainer>
                    </CartProvider>
                </OrderHistoryProvider>
            </SafeAreaView>
        </AuthProvider>
    );
}

export default App;