import React from 'react'
import '../global.css'
import NavHeaderWrapper from './_components/NavHeaderWrapper'
import { Cormorant_SC, Geist } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
  weight: ['300', '400', '500', '600', '700'],
})

export const cormorant = Cormorant_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${geist.variable} ${cormorant.variable}`}>
        <NavHeaderWrapper />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
