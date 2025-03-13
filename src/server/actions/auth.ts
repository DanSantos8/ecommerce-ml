'use server'

import { saveToken, getToken, deleteToken } from '@/app/actions'
import { validatePassword } from '@/utils/functions'
export const signup = async (_: unknown, formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')

  const formValues = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    firstName: firstName,
    lastName: lastName,
  }

  if (!formValues.password || !formValues.confirmPassword) {
    return {
      error: 'As senhas não podem ser vazias',
    }
  }

  const { error } = validatePassword(
    JSON.stringify(formValues.password),
    JSON.stringify(formValues.confirmPassword),
  )

  if (error) return { error: error }

  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: formValues.email,
      password: formValues.password,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
    })

  return {
    errors: null,
    data: {
      ...response,
      message: 'Usuário criado com sucesso',
      success: true,
    },
  }
}

export const login = async (_: unknown, formData: FormData) => {
  'use server'
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    const res = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const response = await res.json()

    if (response.errors) {
      return {
        errors: response.errors,
        data: null,
      }
    }

    await saveToken(response.token)

    return {
      errors: null,
      data: {
        ...response,
        message: 'Usuário logado com sucesso',
        success: true,
      },
    }
  } catch (err) {
    return {
      errors: {
        message: 'Erro ao fazer login',
      },
      data: null,
    }
  }
}

export const getMe = async () => {
  'use server'
  const token = await getToken()

  // Se não houver token, retorne imediatamente
  if (!token) {
    return {
      authenticated: false,
      user: null,
    }
  }

  try {
    const response = await fetch('http://localhost:3000/api/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      // Se o status for 401 (não autorizado), limpe o token
      if (response.status === 401) {
        await saveToken('')
      }
      throw new Error(`Erro no servidor: ${response.status}`)
    }

    const res = await response.json()
    console.log('getMe response--->', res)
    return res
  } catch (err) {
    console.error('Erro ao obter dados do usuário:', err)
    return {
      authenticated: false,
      error: 'Falha ao obter dados do usuário',
      user: null,
    }
  }
}
export const logout = async () => {
  try {
    const token = await getToken()
    const response = await fetch('http://localhost:3000/api/users/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        //'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const res = await response.json()

    await deleteToken()

    return {
      errors: null,
      data: {
        ...res,
        message: 'Usuário deslogado com sucesso',
        success: true,
      },
    }
  } catch (err) {
    return {
      errors: {
        message: 'Erro ao fazer logout',
      },
      data: null,
    }
  }
}
