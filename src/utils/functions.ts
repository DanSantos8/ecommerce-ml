import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { passwordSchema } from './schemas'

interface FormatSlugProps {
  data?: {
    name?: string
  }
}

interface GenerateIdProps {
  data?: {
    id?: string
  }
}

export const formatSlug = ({ data }: FormatSlugProps) => {
  if (!data?.name) return null

  const { name } = data

  return name.replace(/ /g, '-').toLowerCase()
}

export const generateId = ({ data }: GenerateIdProps) => {
  if (!data?.id) {
    const customID = uuidv4()
    return { ...data, id: customID }
  }
  return data
}

export const validatePassword = (password: string, confirmPassword: string) => {
  try {
    const sanitizedPassword = password.trim()
    const sanitizedConfirmPassword = confirmPassword.trim()

    passwordSchema.parse({
      password: sanitizedPassword,
      confirmPassword: sanitizedConfirmPassword,
    })

    return {
      error: null,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: error.errors[0].message,
      }
    }

    return {
      error: 'Erro na validação da senha',
    }
  }
}
