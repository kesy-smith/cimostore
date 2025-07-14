"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { CartItem, Phone } from '@/lib/types';
import { useToast } from "@/hooks/use-toast"

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Phone) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast()

  const addToCart = (item: Phone) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    toast({
      title: "Ajouté au panier",
      description: `${item.name} a été ajouté à votre panier.`,
    })
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    toast({
      title: "Retiré du panier",
      description: `L'article a été retiré de votre panier.`,
      variant: 'destructive'
    })
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };
  
  const clearCart = () => {
    setCart([]);
  }

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
