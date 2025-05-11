export interface StickerService {
  name: string;
  price: number;
  description: string;
  emailInstructions: string;
}

export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  description?: string;
}

export interface CartItem {
  id: string;
  type: 'sticker' | 'artwork';
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  emailInstructions: string;
} 