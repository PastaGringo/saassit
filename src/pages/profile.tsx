import { useAuth } from '@/lib/hooks/use-auth'
import { useForm } from '@/lib/hooks/use-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/providers/toast-provider'
import { supabase } from '@/lib/supabase'
import { useAppStore } from '@/lib/store'

interface ProfileForm {
  name: string
  website: string
  bio: string
}

export default function ProfilePage() {
  const { user } = useAuth()
  const { showToast } = useToast()
  const { setIsLoading } = useAppStore()

  const { values, handleChange, handleSubmit } = useForm<ProfileForm>({
    initialValues: {
      name: '',
      website: '',
      bio: '',
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        const { error } = await supabase
          .from('profiles')
          .upsert({
            user_id: user.id,
            name: values.name,
            website: values.website,
            bio: values.bio,
            updated_at: new Date().toISOString(),
          })

        if (error) throw error
        showToast('Profile mis à jour avec succès !', 'success')
      } catch (error) {
        showToast(error.message, 'error')
      } finally {
        setIsLoading(false)
      }
    },
  })

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">
            Gérez vos informations personnelles et vos préférences
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Nom"
            name="name"
            value={values.name}
            onChange={handleChange}
            helperText="Comment souhaitez-vous être appelé ?"
          />

          <Input
            label="Site web"
            name="website"
            type="url"
            value={values.website}
            onChange={handleChange}
          />

          <Input
            label="Bio"
            name="bio"
            value={values.bio}
            onChange={handleChange}
            helperText="Parlez-nous un peu de vous"
          />

          <Button type="submit">
            Sauvegarder
          </Button>
        </form>

        <div className="rounded-lg border p-4">
          <h2 className="font-medium">Informations du compte</h2>
          <div className="mt-2 text-sm text-gray-600">
            <p>Email: {user?.email}</p>
            <p>ID: {user?.id}</p>
            <p>Créé le: {new Date(user?.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
