'use client'
import { Button } from '@/components/ui/button'
import useLoginStore from '@/store/login-slice'
import { LogIn } from 'lucide-react'

export const SignInButton = () => {
  const { onModalOpen } = useLoginStore()
  return (
    <Button variant="ghost" size="icon" className="rounded-full" onClick={onModalOpen}>
      <LogIn />
    </Button>
  )
}

export default SignInButton
