import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/components/providers/toast-provider'
import { useAppStore } from '@/lib/store'

export function useAuth() {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const { setIsLoading } = useAppStore()
  const [user, setUser] = useState(supabase.auth.getUser())

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      showToast('Connexion réussie !', 'success')
      navigate('/dashboard')
    } catch (error) {
      showToast(error.message, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      showToast('Vérifiez votre email pour confirmer votre inscription', 'success')
    } catch (error) {
      showToast(error.message, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      showToast('Déconnexion réussie', 'success')
      navigate('/')
    } catch (error) {
      showToast(error.message, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    user,
    signIn,
    signUp,
    signOut,
  }
}
