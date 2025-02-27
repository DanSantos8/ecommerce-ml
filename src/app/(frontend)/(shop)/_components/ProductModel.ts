export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
}

// Mock products data
export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Leather Purse',
    price: 60,
    description:
      'A beautiful handcrafted leather purse with multiple compartments and a stylish design. Perfect for everyday use or special occasions.',
    image: '/hero/hero-slide-1.jpg',
    category: 'Accessories',
    rating: 4.5,
    reviews: 12,
    inStock: true,
  },
  {
    id: 2,
    name: 'Casual Shirt',
    price: 45,
    description:
      'A comfortable casual shirt made from 100% cotton. Features a modern fit and is available in multiple colors.',
    image: '/hero/hero-slide-1.jpg',
    category: 'Clothing',
    rating: 4.2,
    reviews: 8,
    inStock: true,
  },
  {
    id: 3,
    name: 'Designer Sunglasses',
    price: 120,
    description:
      'Premium designer sunglasses with UV protection. The perfect accessory for sunny days with a sleek, modern design.',
    image: '/hero/hero-slide-1.jpg',
    category: 'Accessories',
    rating: 4.8,
    reviews: 20,
    inStock: true,
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 75,
    description:
      'A light and flowy summer dress perfect for warm days. Made from breathable fabric with a flattering silhouette.',
    image: '/hero/hero-slide-1.jpg',
    category: 'Clothing',
    rating: 4.6,
    reviews: 15,
    inStock: true,
  },
  {
    id: 5,
    name: 'Leather Wallet',
    price: 35,
    description:
      'A slim leather wallet with multiple card slots and a coin pocket. Crafted from genuine leather for durability.',
    image: '/hero/hero-slide-1.jpg',
    category: 'Accessories',
    rating: 4.3,
    reviews: 9,
    inStock: true,
  },
  {
    id: 6,
    name: 'Denim Jacket',
    price: 85,
    description:
      'A classic denim jacket that never goes out of style. Features a comfortable fit and durable construction.',
    image: '/hero/hero-slide-1.jpg',
    category: 'Clothing',
    rating: 4.7,
    reviews: 18,
    inStock: true,
  },
  {
    id: 7,
    name: 'Silk Scarf',
    price: 40,
    description:
      'A luxurious silk scarf with a beautiful print. Adds elegance to any outfit and can be styled in multiple ways.',
    image: '/hero/hero-slide-1.jpg',
    category: 'Accessories',
    rating: 4.4,
    reviews: 11,
    inStock: true,
  },
  {
    id: 8,
    name: 'Casual Sneakers',
    price: 65,
    description:
      'Comfortable casual sneakers perfect for everyday wear. Features cushioned insoles and durable outsoles.',
    image: '/hero/hero-slide-1.jpg',
    category: 'Footwear',
    rating: 4.5,
    reviews: 14,
    inStock: true,
  },
]
