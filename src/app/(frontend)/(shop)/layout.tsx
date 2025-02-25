import React from 'react'
import '../global.css'
import NavHeader from './_components/NavHeader'
import { Playfair_Display, Inter } from 'next/font/google'

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

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <NavHeader />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  )
}
