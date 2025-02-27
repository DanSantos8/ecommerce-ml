import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/app/(frontend)/(shop)/_components/ProductModel'

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
  isCartOpen: boolean
  addItem: (product: Product, quantity: number) => void
  removeItem: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  getItemsCount: () => number
  getSubtotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (product, quantity) => {
        const { items } = get()
        const existingItem = items.find((item) => item.id === product.id)

        if (existingItem) {
          // Update quantity if item already exists
          set({
            items: items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
            ),
          })
        } else {
          // Add new item
          set({
            items: [
              ...items,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity,
                image: product.image,
              },
            ],
          })
        }
      },

      removeItem: (id) => {
        const { items } = get()
        set({ items: items.filter((item) => item.id !== id) })
      },

      increaseQuantity: (id) => {
        const { items } = get()
        set({
          items: items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })
      },

      decreaseQuantity: (id) => {
        const { items } = get()
        set({
          items: items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item,
          ),
        })
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isCartOpen: true }),

      closeCart: () => set({ isCartOpen: false }),

      getItemsCount: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.quantity, 0)
      },

      getSubtotal: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    }),
    {
      name: 'cart-storage', // unique name for localStorage
    },
  ),
)
