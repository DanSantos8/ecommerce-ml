import { v4 as uuidv4 } from 'uuid'

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
