'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useCartStore } from '@/lib/store'

export default function OrderConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const router = useRouter()
  const { clearCart } = useCartStore()

  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)

    // Ensure cart is cleared when reaching confirmation page
    clearCart()
  }, [clearCart])

  return (
    <div className="container max-w-2xl py-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-muted-foreground">
          Your order has been received and is being processed.
        </p>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-4">
              <span className="font-medium">Order Number:</span>
              <span className="font-mono">{orderNumber}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="font-medium">Order Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="font-medium">Payment Method:</span>
              <span>Credit Card</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Shipping Method:</span>
              <span>Standard Shipping</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-y-4">
        <p>We've sent a confirmation email with order details and tracking information.</p>
        <Button onClick={() => router.push('/')}>Continue Shopping</Button>
      </div>
    </div>
  )
}
