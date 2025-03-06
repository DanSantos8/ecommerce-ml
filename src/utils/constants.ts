export const FORM_TYPES = {
  LOGIN: 'login',
  REGISTER: 'register',
} as const

export type FormType = (typeof FORM_TYPES)[keyof typeof FORM_TYPES]
