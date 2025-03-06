import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  remember: z.boolean().optional(),
})

export type LoginFormValues = z.infer<typeof loginSchema>
