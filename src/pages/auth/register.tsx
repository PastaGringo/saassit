import { Link } from 'react-router-dom'
import { useAuth } from '@/lib/hooks/use-auth'
import { useForm } from '@/lib/hooks/use-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface RegisterForm {
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterPage() {
  const { signUp } = useAuth()

  const { values, errors, handleChange, handleSubmit } = useForm<RegisterForm>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors: Partial<RegisterForm> = {}

      if (!values.email) {
        errors.email = 'Email requis'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email invalide'
      }

      if (!values.password) {
        errors.password = 'Mot de passe requis'
      } else if (values.password.length < 6) {
        errors.password = 'Le mot de passe doit contenir au moins 6 caractères'
      }

      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Les mots de passe ne correspondent pas'
      }

      return errors
    },
    onSubmit: async (values) => {
      await signUp(values.email, values.password)
    },
  })

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Créer un compte
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Ou{' '}
            <Link to="/auth/login" className="font-medium text-primary hover:text-primary/90">
              connectez-vous à votre compte
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
              error={errors.email}
            />

            <Input
              label="Mot de passe"
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              helperText="Au moins 6 caractères"
            />

            <Input
              label="Confirmer le mot de passe"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </div>

          <div>
            <Button type="submit" className="w-full">
              S'inscrire
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
