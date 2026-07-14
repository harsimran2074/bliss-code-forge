import { useSyncExternalStore } from "react";
import type { Product } from "@/data/products";

// Tiny external store so cart state is shared across pages without a provider.
// Later, replace the localStorage read/write with API calls to your backend.

export interface CartItem extends Product {
  quantity: number;
}

let cart: CartItem[] = [];
const listeners = new Set<() => void>();

// Hydrate from localStorage on the client only.
if (typeof window !== "undefined") {
  try {
    const stored = window.localStorage.getItem("cart");
    if (stored) cart = JSON.parse(stored);
  } catch {}
}

function emit() {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }
  listeners.forEach((l) => l());
}

export const cartStore = {
  add(product: Product) {
    const existing = cart.find((i) => i.id === product.id);
    cart = existing
      ? cart.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
      : [...cart, { ...product, quantity: 1 }];
    emit();
  },
  remove(id: string) {
    cart = cart.filter((i) => i.id !== id);
    emit();
  },
  setQuantity(id: string, quantity: number) {
    cart = quantity <= 0
      ? cart.filter((i) => i.id !== id)
      : cart.map((i) => (i.id === id ? { ...i, quantity } : i));
    emit();
  },
  clear() {
    cart = [];
    emit();
  },
};

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useCart() {
  return useSyncExternalStore(
    subscribe,
    () => cart,
    () => [] as CartItem[], // SSR snapshot
  );
}
