# Saassit

Un template moderne et complet pour créer des applications SaaS avec React, Supabase et shadcn/ui.

## 🚀 Caractéristiques

- ⚡️ **React 18** avec Vite
- 🔐 **Authentification** complète avec Supabase Auth
- 🌙 **Mode sombre** avec persistance des préférences
- 📱 **Navigation responsive** avec menu mobile
- 🎨 **UI Components** modernes avec shadcn/ui
- 📦 **Base de données** PostgreSQL avec Supabase
- 🔒 **Routes protégées** pour le contenu privé
- 🔔 **Notifications** avec système de toast
- 🔍 **TypeScript** pour un code robuste
- 📝 **ESLint & Prettier** configurés
- ⚠️ **Configuration Warnings** pour Supabase
- 🚢 **Production ready**

## 🛠 Stack Technique

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Yarn](https://yarnpkg.com/) (gestionnaire de paquets)

## 📦 Installation

1. Clonez le repository
```bash
git clone https://github.com/yourusername/saassit.git
cd saassit
```

2. Installez les dépendances
```bash
yarn install
```

3. Configurez les variables d'environnement
```bash
cp .env.example .env
```

4. Mettez à jour les variables d'environnement dans le fichier .env avec vos identifiants Supabase:
```env
VITE_SUPABASE_URL=votre-url-supabase
VITE_SUPABASE_ANON_KEY=votre-clé-anon-supabase
```

5. Démarrez le serveur de développement
```bash
yarn dev
```

## 🚀 Production

Pour construire l'application pour la production :

```bash
yarn build
```

Les fichiers de production seront générés dans le dossier `dist`. Pour tester la version de production localement :

```bash
yarn preview
```

### Variables d'environnement requises pour la production

Assurez-vous d'avoir configuré ces variables d'environnement dans votre environnement de production :

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Sans ces variables, l'application affichera un avertissement et certaines fonctionnalités ne seront pas disponibles.

## 📁 Structure du Projet

```
saassit/
├── public/          # Fichiers statiques
├── src/
│   ├── components/  # Composants React réutilisables
│   ├── lib/        # Utilitaires et configurations
│   ├── pages/      # Pages de l'application
│   └── styles/     # Styles globaux
└── ...
```

## 🎨 Personnalisation

Le projet utilise [shadcn/ui](https://ui.shadcn.com/) pour les composants UI. La configuration se trouve dans :

- `tailwind.config.js` pour les styles Tailwind
- `components.json` pour la configuration shadcn/ui

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
