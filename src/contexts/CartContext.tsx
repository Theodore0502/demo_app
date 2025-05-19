import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export type OrderItem = {
    id: string;
    name: string;
    image: any;
    price: number;
    quantity: number;
    size?: string;
    date?: string;
};

type CartContextType = {
    cartItems: OrderItem[];
    orderHistory: OrderItem[];
    addToCart: (item: OrderItem) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    removeItem: (id: string) => void;
    checkout: () => void;
    clearOrderHistory: () => void;
    clearCart: () => void;
};

const CART_STORAGE_KEY = "@cart_items";
const ORDER_STORAGE_KEY = "@order_history";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<OrderItem[]>([]);
    const [orderHistory, setOrderHistory] = useState<OrderItem[]>([]);

    // Load cart and orders from AsyncStorage on mount
    useEffect(() => {
        (async () => {
            try {
                const storedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
                const storedOrders = await AsyncStorage.getItem(ORDER_STORAGE_KEY);
                if (storedCart) setCartItems(JSON.parse(storedCart));
                if (storedOrders) setOrderHistory(JSON.parse(storedOrders));
            } catch (error) {
                console.error("Failed to load cart or orders from storage", error);
            }
        })();
    }, []);

    // Save cartItems when changed
    useEffect(() => {
        AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems)).catch(err =>
            console.error("Error saving cart items", err)
        );
    }, [cartItems]);

    // Save orderHistory when changed
    useEffect(() => {
        AsyncStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orderHistory)).catch(err =>
            console.error("Error saving order history", err)
        );
    }, [orderHistory]);

    const addToCart = (item: OrderItem) => {
        setCartItems(prev => {
            const index = prev.findIndex(i => i.id === item.id);
            if (index !== -1) {
                const updated = [...prev];
                updated[index].quantity += item.quantity;
                return updated;
            }
            return [...prev, item];
        });
    };

    const increaseQuantity = (id: string) => {
        setCartItems(prev =>
            prev.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        );
    };

    const decreaseQuantity = (id: string) => {
        setCartItems(prev =>
            prev
                .map(item => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
                .filter(item => item.quantity > 0)
        );
    };

    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const checkout = () => {
        if (cartItems.length === 0) {
            Alert.alert("Cart Empty", "Your cart is empty. Add items before checkout.");
            return;
        }
        const now = new Date().toLocaleString();
        const ordersWithDate = cartItems.map(item => ({ ...item, date: now }));
        setOrderHistory(prev => [...ordersWithDate, ...prev]);
        setCartItems([]);
        Alert.alert("Success", "Order placed successfully!");
    };

    const clearOrderHistory = () => {
        setOrderHistory([]);
        AsyncStorage.removeItem(ORDER_STORAGE_KEY).catch(err =>
            console.error("Error clearing order history", err)
        );
    };

    const clearCart = () => {
        setCartItems([]);
        AsyncStorage.removeItem(CART_STORAGE_KEY).catch(err =>
            console.error("Error clearing cart items", err)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                orderHistory,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                checkout,
                clearOrderHistory,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};
