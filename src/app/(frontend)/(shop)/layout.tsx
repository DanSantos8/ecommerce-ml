'use client'

import React from 'react'
import '../global.css'
import NavHeader from './_components/NavHeader'
import { Playfair_Display, Inter } from 'next/font/google'
import Providers from '../providers'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Providers>
          <NavHeader />
          <main className="container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
