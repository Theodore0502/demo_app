export type TabParamList = {
  navigate(arg0: string): void;
  HomePage: undefined;
  Profile: undefined;
  Voucher: undefined;
  OrderHistory: undefined;
};

export type RootStackParamList = {
  navigate(arg0: string): void;
  Splash: undefined;
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
  Order: { voucher?: string };
  Detail?: { product: Product };
  Edit: undefined;
  About: undefined;
};

export interface Product {
  id: string;
  name: string;
  price: number; // Sửa từ string thành number để đồng bộ với các màn hình trước
  image: any;
  source: string;
  category: string;
  description: string;
  size?: { size: string }[];
}

export interface OrderItem {
  price: ReactNode;
  quantity: ReactNode;
  name: ReactNode;
  image: ImageSourcePropType;
  id: string;
  date: string;
  total: number;
  voucher?: string;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: ImageSourcePropType;
  }[];
}
