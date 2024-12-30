import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Github } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center py-32">
        <div className="container flex flex-col items-center text-center">
          <div className="mx-auto max-w-[800px] space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              🚀 Bienvenue sur Saassit
            </div>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Le template SaaS moderne pour vos projets
            </h1>
            <p className="text-xl text-muted-foreground">
              Démarrez rapidement avec un boilerplate complet incluant authentification, 
              thème sombre, composants UI modernes et plus encore.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/auth/register">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/yourusername/saassit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-slate-50/50 py-20 dark:bg-slate-900/50">
        <div className="container">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Fonctionnalités principales
            </h2>
            <p className="text-muted-foreground">
              Tout ce dont vous avez besoin pour construire votre prochain projet SaaS.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-lg border bg-background p-8 transition-all hover:shadow-lg"
              >
                <feature.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="border-t py-20 bg-background">
        <div className="container">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Technologies modernes
            </h2>
            <p className="text-muted-foreground">
              Construit avec les meilleures technologies du marché.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              <TechItem
                name="React"
                description="Bibliothèque UI"
                icon="⚛️"
              />
              <TechItem
                name="TypeScript"
                description="Typage statique"
                icon="📘"
              />
              <TechItem
                name="Tailwind"
                description="Styles modernes"
                icon="🎨"
              />
              <TechItem
                name="Supabase"
                description="Backend as a Service"
                icon="⚡"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="border-t py-20">
        <div className="container">
          <div className="mx-auto max-w-[800px] space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              100% Open Source
            </h2>
            <p className="text-muted-foreground">
              Saassit est open source et gratuit. Utilisez-le pour vos projets personnels ou commerciaux.
            </p>
            <div className="pt-4">
              <Button asChild>
                <a
                  href="https://github.com/yourusername/saassit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Voir sur GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TechItem({ name, description, icon }: { name: string; description: string; icon: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <div className="text-4xl">{icon}</div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

const features = [
  {
    title: 'Authentification',
    description: 'Système complet avec login, inscription et gestion du profil. Support email/password et OAuth.',
    icon: LockIcon,
  },
  {
    title: 'Thème sombre',
    description: 'Support natif du mode sombre avec transition fluide et persistance des préférences.',
    icon: MoonIcon,
  },
  {
    title: 'Composants UI',
    description: 'Collection de composants modernes et accessibles avec shadcn/ui et Tailwind CSS.',
    icon: LayoutIcon,
  },
  {
    title: 'Navigation',
    description: 'Système de routing avec React Router, incluant des routes protégées et publiques.',
    icon: NavigationIcon,
  },
  {
    title: 'Base de données',
    description: 'PostgreSQL avec Supabase, incluant migrations et types générés automatiquement.',
    icon: DatabaseIcon,
  },
  {
    title: 'Notifications',
    description: 'Système de toast pour les notifications avec gestion des états de succès et d\'erreur.',
    icon: BellIcon,
  },
] as const

// Icons
function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

function LayoutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  )
}

function NavigationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
    </svg>
  )
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
