'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import LoginForm from './login-form'
import useLoginStore from '@/store/login-slice'
import { useEffect, useState } from 'react'
import { FORM_TYPES, FormType } from '@/utils/constants'
import RegisterForm from './register-form'

export const Authentication = () => {
  const { modalOpen, onModalClose } = useLoginStore()
  const [currentForm, setCurrentForm] = useState<FormType>(FORM_TYPES.LOGIN)

  const setForm = (formType: FormType) => {
    setCurrentForm(formType)
  }

  const FORMS = {
    [FORM_TYPES.LOGIN]: <LoginForm setForm={setForm} />,
    [FORM_TYPES.REGISTER]: <RegisterForm setForm={setForm} />,
  }

  const formHeading = {
    title: {
      [FORM_TYPES.LOGIN]: 'Login',
      [FORM_TYPES.REGISTER]: 'Register',
    },
    description: {
      [FORM_TYPES.LOGIN]: 'Enter your email below to login to your account',
      [FORM_TYPES.REGISTER]: 'Enter your email below to register to your account',
    },
  }

  const formDescription = {
    [FORM_TYPES.LOGIN]: 'Enter your email below to login to your account',
    [FORM_TYPES.REGISTER]: 'Enter your email below to register to your account',
  }

  useEffect(() => {
    if (modalOpen) {
      setCurrentForm(FORM_TYPES.LOGIN)
    }
  }, [modalOpen])

  return (
    <Dialog open={modalOpen} onOpenChange={onModalClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-geist">{formHeading.title[currentForm]}</DialogTitle>
          <DialogDescription className="font-geist">
            {formDescription[currentForm]}
          </DialogDescription>
        </DialogHeader>
        {FORMS[currentForm]}
      </DialogContent>
    </Dialog>
  )
}

export default Authentication
