'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import CartSidebar from './CartSidebar'

interface CartContextType {
  openCart: () => void
  closeCart: () => void
  isCartOpen: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <CartContext.Provider value={{ openCart, closeCart, isCartOpen }}>
      {children}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

