import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/lib/hooks/use-auth'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // Redirect to login but save the attempted url
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
