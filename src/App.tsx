import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { BaseLayout } from '@/components/layout/base-layout'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { ToastProvider } from '@/components/providers/toast-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'

import HomePage from '@/pages/home'
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'
import DashboardPage from '@/pages/dashboard'
import ProfilePage from '@/pages/profile'

export default function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="app-theme">
        <ToastProvider>
          <BaseLayout>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />

              {/* Protected routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BaseLayout>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  )
}
