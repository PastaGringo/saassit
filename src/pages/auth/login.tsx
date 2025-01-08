import { Link } from 'react-router-dom'
import { useAuth } from '@/lib/hooks/use-auth'
import { useForm } from '@/lib/hooks/use-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface LoginForm {
  email: string
  password: string
}

export default function LoginPage() {
  const { signIn } = useAuth()

  const { values, handleChange, handleSubmit } = useForm<LoginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await signIn(values.email, values.password)
    },
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Connexion
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Ou{' '}
            <Link to="/auth/register" className="font-medium text-primary hover:text-primary/90">
              créez un compte
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md">
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={handleChange}
            />

            <Input
              label="Mot de passe"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <Link to="/auth/forgot-password" className="text-sm text-muted-foreground hover:text-muted-foreground/90">
            Mot de passe oublié ?
          </Link>
        </div>
      </div>
    </div>
  )
}
