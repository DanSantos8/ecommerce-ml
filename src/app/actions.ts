'use server'

import { cookies } from 'next/headers'

export const saveToken = async (token: string) => {
  const cookieStore = await cookies()
  cookieStore.set('token', token)
}

export const getToken = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  return token?.value
}

export const deleteToken = async () => {
  const cookieStore = await cookies()
  cookieStore.delete('token')
}
