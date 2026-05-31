/**
 * types.ts
 * Type definitions for Premium Coffee Shop Prototype
 */

export interface MenuItem {
  id: number;
  name: string;
  category: 'coffee' | 'cold-brew' | 'latte-art' | 'non-coffee';
  price: number;
  priceFormatted: string;
  description: string;
  image: string;
  badge?: string;
  rating: number;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}
