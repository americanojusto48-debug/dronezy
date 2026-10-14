import { create } from "zustand";
import { ShopifyProductVariant } from "@/types/shopify";

export interface CartItem {
  id: string; // variant or bundle id
  title: string;
  variantTitle?: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image?: string;
  isBundle?: boolean;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  isCODOpen: boolean;
  selectedBundleId: string;
  selectedColor: string;
  
  // Actions
  openCart: () => void;
  closeCart: () => void;
  openCOD: () => void;
  closeCOD: () => void;
  setSelectedBundleId: (id: string) => void;
  setSelectedColor: (color: string) => void;
  
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  
  // Computations
  getTotalCount: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [
    {
      id: "bundle-1",
      title: "1x Dronezy™ Falcon 2108 Antigolpes",
      variantTitle: "Color: Azul Eléctrico",
      price: 129000,
      originalPrice: 199000,
      quantity: 1,
      image: "/images/products/drone-blue.jpg",
      isBundle: false,
    },
  ],
  isOpen: false,
  isCODOpen: false,
  selectedBundleId: "bundle-1",
  selectedColor: "Azul Eléctrico",

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  openCOD: () => set({ isCODOpen: true }),
  closeCOD: () => set({ isCODOpen: false }),
  
  setSelectedBundleId: (id: string) => set({ selectedBundleId: id }),
  setSelectedColor: (color: string) => set({ selectedColor: color }),

  addItem: (newItem) => {
    set((state) => {
      const existingIndex = state.items.findIndex((i) => i.id === newItem.id);
      if (existingIndex > -1) {
        const updated = [...state.items];
        updated[existingIndex].quantity += newItem.quantity;
        return { items: updated, isOpen: true };
      }
      return { items: [...state.items, newItem], isOpen: true };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  updateQuantity: (id, delta) => {
    set((state) => {
      const updated = state.items
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
      return { items: updated };
    });
  },

  clearCart: () => set({ items: [] }),

  getTotalCount: () => {
    return get().items.reduce((acc, curr) => acc + curr.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  },
}));
