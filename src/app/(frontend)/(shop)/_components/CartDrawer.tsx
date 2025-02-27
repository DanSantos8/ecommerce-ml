'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from '@/components/ui/drawer'
import { Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/lib/store'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const router = useRouter()
  const { items, removeItem, increaseQuantity, decreaseQuantity, getSubtotal } = useCartStore()

  const handleCheckout = () => {
    router.push('/checkout')
    onClose() // Close the drawer when navigating
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="sm:max-w-md">
        <DrawerHeader className="border-b pb-4">
          <DrawerTitle className="text-xl font-medium">Your Cart</DrawerTitle>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 rounded-full cursor-pointer"
            >
              <X className="h-5 w-5" />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="py-4 overflow-y-auto max-h-[60vh]">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 pb-4 border-b">
                  <div className="relative h-24 w-20 overflow-hidden rounded">
                    <Image fill src={item.image} alt={item.name} className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground text-sm">${item.price}</p>
                    <div className="flex items-center mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full cursor-pointer"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-2 min-w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full cursor-pointer"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between py-2">
            <span className="font-medium">Subtotal</span>
            <span>${getSubtotal().toFixed(2)}</span>
          </div>
          <Button
            className="w-full mt-4 cursor-pointer"
            disabled={items.length === 0}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
          <Button variant="outline" className="w-full mt-2 cursor-pointer" onClick={onClose}>
            Continue Shopping
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer
