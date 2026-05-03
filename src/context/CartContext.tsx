"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  options?: Record<string, string>;
};

export type Coupon = {
  code: string;
  type: 'percent' | 'flat';
  value: number;
  minOrder?: number;
  description: string;
};

const AVAILABLE_COUPONS: Record<string, Coupon> = {
  WAFFCHA10: { code: 'WAFFCHA10', type: 'percent', value: 10, description: '10% off your order' },
  SWEET20: { code: 'SWEET20', type: 'percent', value: 20, minOrder: 500, description: '20% off above ₹500' },
  SOFTY50: { code: 'SOFTY50', type: 'flat', value: 50, minOrder: 299, description: '₹50 off above ₹299' },
  FIRSTORDER: { code: 'FIRSTORDER', type: 'percent', value: 15, description: '15% off your first order' },
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  subtotal: number;
  discountAmount: number;
  finalTotal: number;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  availableCoupons: Coupon[];
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Auto-remove coupon if subtotal drops below minOrder
  useEffect(() => {
    if (appliedCoupon?.minOrder && subtotal < appliedCoupon.minOrder) {
      setAppliedCoupon(null);
    }
  }, [subtotal, appliedCoupon]);

  const addToCart = (item: CartItem) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (i) => i.id === item.id && JSON.stringify(i.options) === JSON.stringify(item.options)
      );

      if (existingItemIndex >= 0) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += item.quantity;
        return newItems;
      }

      return [...currentItems, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const applyCoupon = (code: string) => {
    const couponCode = code.trim().toUpperCase();
    const coupon = AVAILABLE_COUPONS[couponCode];
    
    if (!coupon) {
      return { success: false, message: "Invalid coupon code." };
    }
    
    if (coupon.minOrder && subtotal < coupon.minOrder) {
      return { success: false, message: `Minimum order of ₹${coupon.minOrder} required.` };
    }

    setAppliedCoupon(coupon);
    return { success: true, message: `Coupon applied: ${coupon.description}` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') {
      discountAmount = subtotal * (appliedCoupon.value / 100);
    } else if (appliedCoupon.type === 'flat') {
      discountAmount = Math.min(appliedCoupon.value, subtotal);
    }
  }

  const finalTotal = subtotal - discountAmount;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        discountAmount,
        finalTotal,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        availableCoupons: Object.values(AVAILABLE_COUPONS),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
