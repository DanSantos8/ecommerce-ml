'use client'
import { Button } from '@/components/ui/button'
import { logout } from '@/server/actions/auth'
import { Loader2, LogOut } from 'lucide-react'
import { useActionState, useEffect, startTransition } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
export const LogoutButton = () => {
  const router = useRouter()
  const [state, logoutAction, pending] = useActionState(logout, {
    errors: null,
    data: null,
  })

  useEffect(() => {
    if (state.errors) {
      toast.error(state.errors.message)
    }

    if (state.data?.success) {
      router.push('/')
    }
  }, [state.data?.success])

  const handleLogout = () => {
    startTransition(() => {
      logoutAction()
    })
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-full flex justify-start pl-1 hover:bg-transparent"
      onClick={handleLogout}
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Saindo...
        </>
      ) : (
        <>
          <LogOut className="w-4 h-4" />
          Sair
        </>
      )}
    </Button>
  )
}
