import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase'

export function AuthPage() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['github']}
          redirectTo={`${window.location.origin}/dashboard`}
        />
      </div>
    </div>
  )
}
