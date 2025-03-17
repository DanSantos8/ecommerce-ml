import NavHeader from './NavHeader'
import { getMe } from '@/server/actions/auth'

const fetchCategories = async () => {
  'use server'
  const response = await fetch('http://localhost:3000/api/categories?depth=2')

  return response.json()
}
export async function NavHeaderWrapper() {
  const me = await getMe()
  const categories = await fetchCategories()

  return <NavHeader me={me} categories={categories} />
}

export default NavHeaderWrapper
