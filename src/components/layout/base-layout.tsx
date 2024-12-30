import { ReactNode } from 'react'
import { useAppStore } from '@/lib/store'
import { Footer } from './footer'
import { Navbar } from './navbar'

interface BaseLayoutProps {
  children: ReactNode
}

export function BaseLayout({ children }: BaseLayoutProps) {
  const { isLoading, error } = useAppStore()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}

      {/* Error Toast */}
      {error && (
        <div className="fixed top-4 right-4 z-50 rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg">
          {error}
        </div>
      )}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
