import React, { createContext, useContext, useState } from 'react';

type Order = {
  id: string;
  items: any[];
  total: number;
  voucher: string;
  date: string;
};

type OrderHistoryContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
};

const OrderHistoryContext = createContext<OrderHistoryContextType | undefined>(undefined);

export const OrderHistoryProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders(prevOrders => [...prevOrders, order]);
  };

  return (
    <OrderHistoryContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};

export const useOrderHistory = () => {
  const context = useContext(OrderHistoryContext);
  if (!context) {
    throw new Error("useOrderHistory must be used within an OrderHistoryProvider");
  }
  return context;
};
