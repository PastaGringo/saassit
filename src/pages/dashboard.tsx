import { useAuth } from '@/lib/hooks/use-auth'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Bienvenue, {user?.email}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Statistiques */}
          <div className="rounded-lg border p-6">
            <h3 className="font-medium">Projets</h3>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-medium">Tâches</h3>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-medium">Messages</h3>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>
        </div>

        {/* Activité récente */}
        <div className="rounded-lg border p-6">
          <h2 className="font-medium">Activité récente</h2>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Aucune activité récente</p>
          </div>
        </div>
      </div>
    </div>
  )
}
