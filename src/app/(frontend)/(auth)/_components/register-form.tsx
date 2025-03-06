import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FORM_TYPES, FormType } from '@/utils/constants'
import { useEffect } from 'react'

interface RegisterFormProps {
  setForm: (formType: FormType) => void
}

const RegisterForm = ({ setForm }: RegisterFormProps) => {
  return (
    <div className="w-full max-w-md space-y-6">
      <form
        //action={formAction}
        className="space-y-4"
        //ref={formRef}
        /*  onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(() => {
            startTransition(() => formAction(new FormData(formRef.current!)))
          })(e)
        }} */
      >
        <div className="space-y-2">
          <Label htmlFor="email">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome"
            //{...register('email')}
            //aria-invalid={!!errors.email}
          />
          {/* {errors.   && <p className="text-sm text-destructive">{errors.email.message}</p>} */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Sobrenome</Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Seu sobrenome"
            //{...register('lastName')}
            //aria-invalid={!!errors.lastName}
          />
          {/* {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>} */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            //{...register('email')}
            //aria-invalid={!!errors.email}
          />
          {/* {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>} */}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            //{...register('password')}
            //aria-invalid={!!errors.password}
          />
          {/* {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>} */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar senha</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            //{...register('confirmPassword')}
            //aria-invalid={!!errors.confirmPassword}
          />
          {/* {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>} */}
        </div>
        <Button type="submit" className="w-full" disabled={false}>
          {false ? (
            <>
              <svg
                className="mr-2 h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Entrando...
            </>
          ) : (
            <>
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Registrar
            </>
          )}
        </Button>

        <div className="flex items-center justify-between">
          <span className="text-xs text-primary hover:underline">Já tem uma conta?</span>
          <Button
            variant="ghost"
            className="text-xs text-primary hover:underline"
            onClick={() => setForm(FORM_TYPES.LOGIN)}
          >
            Criar uma conta
          </Button>
        </div>
      </form>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <span className="relative bg-card px-2 text-xs text-muted-foreground">
          Ou registre-se com
        </span>
      </div>

      <Button variant="outline" className="w-full" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="24"
          height="24"
          className="mr-2 h-5 w-5"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          />
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          />
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          />
        </svg>
        Entrar com Google
      </Button>
    </div>
  )
}

export default RegisterForm
