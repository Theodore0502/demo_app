import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaView } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import { CartProvider } from './src/contexts/CartContext';

const App = () => {
    return (
        <AuthProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <CartProvider>
                    <NavigationContainer>
                        <RootNavigator />
                    </NavigationContainer>
                </CartProvider>
            </SafeAreaView>
        </AuthProvider>
    );
}

export default App;