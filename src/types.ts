export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'smart-tv' | 'air-conditioner' | 'refrigerator' | 'inverter-battery' | 'washing-machine' | 'appliances';
  price: number;
  originalPrice: number;
  starRating?: number;
  image: string;
  badge?: string;
  specs: string[];
  warranty: string;
  modelNumber: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface StoreInfo {
  name: string;
  gstin: string;
  phone: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  hours: string;
}
