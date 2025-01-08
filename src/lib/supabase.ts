import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a dummy client if environment variables are not set
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('http://dummy-url.com', 'dummy-key', {
      auth: {
        // Prevent actual API calls
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      }
    })
