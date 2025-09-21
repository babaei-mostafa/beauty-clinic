import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  _id: string
  name: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set({ items: [...get().items, item] }),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'cart-storage' }
  )
)
