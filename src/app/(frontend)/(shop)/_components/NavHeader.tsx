import Image from 'next/image'
import Link from 'next/link'

export const NavHeader = () => {
  return (
    <header className="w-full h-24 bg-background content-center">
      <div className="flex justify-between container mx-auto items-center">
        <picture>
          <Image src="/logo-dark-img.png" alt="Santine Logo" width={164} height={41} />
        </picture>
        <ul className="flex">
          <li className="flex ">
            <Link href="/" className="px-6">
              HOME
            </Link>
          </li>
          <li className="flex">
            <Link href="/" className="px-6">
              SHOP
            </Link>
          </li>
          <li className="flex">
            <Link href="/" className="px-6">
              BLOG
            </Link>
          </li>
        </ul>
        <div></div>
      </div>
    </header>
  )
}

export default NavHeader
