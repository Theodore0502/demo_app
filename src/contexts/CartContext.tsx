import React, { createContext, useContext, useState, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho sản phẩm
interface CartItem {
    id: number;
    name: string;
    source?: string;
    price: number;
    quantity: number;
    image: any; // Kiểu của hình ảnh trong React Native
    size?: string; // Thêm thuộc tính size cho sản phẩm từ DetailScreen
}

// Định nghĩa kiểu dữ liệu cho CartContext
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Dữ liệu ban đầu (tương tự orderData trong OrderScreen)
const initialCartItems: CartItem[] = [
    {
        id: 1,
        name: "Kiwi Shake II",
        source: "McDonald's",
        price: 98.0,
        quantity: 1,
        image: require("../../assets/kiwi-shake.png"),
    },
    {
        id: 2,
        name: "Blueberry Maze",
        price: 98.0,
        quantity: 1,
        image: require("../../assets/blueberry-maze.png"),
    },
    {
        id: 3,
        name: "Apple Juice",
        price: 85.0,
        quantity: 1,
        image: require("../../assets/apple-juice.png"),
    },
    {
        id: 4,
        name: "Pats Burger",
        price: 134.0,
        quantity: 1,
        image: require("../../assets/pats-burger.png"),
    },
    {
        id: 5,
        name: "Cheese Burger",
        price: 150.0,
        quantity: 1,
        image: require("../../assets/cheese-burger.png"),
    },
    {
        id: 6,
        name: "Chicken Burger",
        price: 140.0,
        quantity: 1,
        image: require("../../assets/chicken-burger.png"),
    },
];

// Provider để bao bọc ứng dụng
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa (dựa trên id và size)
            const existingItem = prevItems.find(
                (cartItem) => cartItem.id === item.id && cartItem.size === item.size
            );
            if (existingItem) {
                // Nếu đã có, tăng số lượng
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id && cartItem.size === item.size
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            // Nếu chưa có, thêm mới vào danh sách
            return [...prevItems, item];
        });
    };

    const increaseQuantity = (id: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Hook để sử dụng CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};