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
- 🚢 **Production ready**

## 🛠 Stack Technique

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

## 📦 Installation

1. Clonez le repository
```bash
git clone https://github.com/yourusername/saassit.git
cd saassit
```

2. Installez les dépendances
```bash
pnpm install
```

3. Configurez les variables d'environnement
```bash
cp .env.example .env
```

4. Mettez à jour les variables d'environnement dans le fichier .env avec vos identifiants Supabase

5. Démarrez le serveur de développement
```bash
pnpm dev
```

## 🚀 Démarrer un nouveau projet

### Avec le CLI (Recommandé)

```bash
# 1. Créez un nouveau projet avec degit
npx degit yourusername/saassit mon-projet

# 2. Accédez au répertoire
cd mon-projet

# 3. Installez les dépendances
pnpm install

# 4. Configurez votre projet Supabase
cp .env.example .env

# 5. Démarrez le serveur de développement
pnpm dev
```

### Manuellement

1. Cliquez sur le bouton "Use this template" sur GitHub
2. Ou clonez le repository et supprimez le dossier .git :
```bash
# 1. Clonez le repository
git clone https://github.com/yourusername/saassit.git mon-projet

# 2. Accédez au répertoire
cd mon-projet

# 3. Supprimez le dossier .git
rm -rf .git

# 4. Initialisez un nouveau repository
git init

# 5. Installez les dépendances
pnpm install

# 6. Configurez votre projet Supabase
cp .env.example .env

# 7. Démarrez le serveur de développement
pnpm dev
```

### Configuration de Supabase

1. Créez un compte sur [Supabase](https://supabase.com)
2. Créez un nouveau projet
3. Dans les paramètres du projet, trouvez :
   - Project URL (`VITE_SUPABASE_URL`)
   - Project API Key (`VITE_SUPABASE_ANON_KEY`)
4. Copiez ces valeurs dans votre fichier `.env`
5. Exécutez les migrations SQL :
   ```bash
   # Installez le CLI Supabase si nécessaire
   pnpm add -g supabase-cli

   # Appliquez les migrations
   supabase link --project-ref votre-ref-projet
   supabase db push
   ```

### Personnalisation

1. Mettez à jour les informations du projet dans :
   - `package.json`
   - `index.html`
   - `src/components/layout/footer.tsx`
   - `src/pages/home.tsx`

2. Modifiez les variables d'environnement dans `.env` :
   ```env
   VITE_SITE_URL=http://localhost:5173
   VITE_SUPABASE_URL=votre-url-supabase
   VITE_SUPABASE_ANON_KEY=votre-clé-anon-supabase
   ```

3. Personnalisez le thème dans `tailwind.config.js`

4. Commencez à construire votre application !

## 🗂 Structure du Projet

```
saassit/
├── src/
│   ├── components/     # Composants réutilisables
│   │   ├── auth/      # Composants d'authentification
│   │   ├── layout/    # Composants de mise en page
│   │   ├── providers/ # Providers React
│   │   └── ui/        # Composants UI réutilisables
│   ├── lib/           # Utilitaires et configurations
│   ├── pages/         # Pages de l'application
│   └── styles/        # Styles globaux
├── public/            # Assets statiques
└── supabase/         # Migrations et types Supabase
```

## 🔧 Scripts

- `pnpm dev` - Lance le serveur de développement
- `pnpm build` - Crée une version de production
- `pnpm preview` - Prévisualise la version de production
- `pnpm lint` - Vérifie le code avec ESLint
- `pnpm format` - Formate le code avec Prettier

## 📝 Configuration

### Supabase

1. Créez un projet sur [Supabase](https://supabase.com/)
2. Copiez l'URL et la clé anon dans votre fichier .env
3. Utilisez les migrations SQL fournies pour configurer votre base de données

### Authentification

L'authentification est configurée pour :
- Email/Mot de passe
- Protection des routes privées
- Gestion de session
- Déconnexion

Pour ajouter des providers OAuth :
1. Activez-les dans votre projet Supabase
2. Configurez les callbacks dans `src/lib/supabase.ts`

## 🎨 Personnalisation

### Thème

Le thème peut être personnalisé via :
- `tailwind.config.js` pour les couleurs et le style global
- `src/styles/globals.css` pour les variables CSS
- `components.json` pour la configuration shadcn/ui

### Composants

Tous les composants sont construits avec shadcn/ui et peuvent être personnalisés :
- Modifiez les styles dans `src/components/ui`
- Ajoutez de nouveaux composants avec la CLI shadcn/ui
- Personnalisez les variants dans les fichiers de composants

## 📱 Captures d'écran

<table>
  <tr>
    <td><img src="public/screenshots/light-home.png" alt="Page d'accueil - Mode clair" /></td>
    <td><img src="public/screenshots/dark-home.png" alt="Page d'accueil - Mode sombre" /></td>
  </tr>
  <tr>
    <td><img src="public/screenshots/light-auth.png" alt="Page de connexion - Mode clair" /></td>
    <td><img src="public/screenshots/dark-auth.png" alt="Page de connexion - Mode sombre" /></td>
  </tr>
</table>

## 📘 Guides

### Ajouter une nouvelle page

1. Créez votre composant dans `src/pages` :
```tsx
export default function MaNouvellePage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Ma Nouvelle Page</h1>
    </div>
  )
}
```

2. Ajoutez la route dans `App.tsx` :
```tsx
<Route path="/ma-page" element={<MaNouvellePage />} />
```

### Ajouter un nouveau composant UI

Utilisez la CLI shadcn/ui :
```bash
pnpm dlx shadcn-ui@latest add button
```

### Déploiement

#### Vercel (Recommandé)
```bash
# 1. Installez Vercel CLI
pnpm add -g vercel

# 2. Déployez
vercel
```

#### Netlify
1. Importez votre repository sur Netlify
2. Configurez les variables d'environnement
3. Utilisez les paramètres de build suivants :
   - Build command: `pnpm build`
   - Publish directory: `dist`

### Bonnes pratiques

1. **TypeScript**
   - Utilisez des types stricts
   - Évitez `any`
   - Créez des types réutilisables dans `src/types`

2. **État**
   - Utilisez les hooks React pour l'état local
   - Utilisez Zustand pour l'état global
   - Évitez les props drilling

3. **Performance**
   - Utilisez `React.memo()` pour les composants coûteux
   - Optimisez les images avec `next/image`
   - Lazy-loadez les routes avec `React.lazy()`

4. **Sécurité**
   - Validez les entrées utilisateur
   - Utilisez les Row Level Security de Supabase
   - Ne stockez jamais de secrets dans le code

## 🔍 Dépannage

### Problèmes courants

1. **Les variables d'environnement ne fonctionnent pas**
   ```bash
   # Vérifiez que le fichier .env est bien à la racine
   # Les variables doivent commencer par VITE_
   VITE_MA_VARIABLE=valeur
   ```

2. **Erreurs TypeScript**
   ```bash
   # Nettoyez le cache TypeScript
   rm -rf node_modules/.cache/typescript/
   ```

3. **Problèmes de build**
   ```bash
   # Nettoyez le cache et les modules
   rm -rf node_modules
   rm -rf dist
   pnpm install
   ```

### Support

- 🐛 [Signaler un bug](https://github.com/yourusername/saassit/issues)
- 💡 [Proposer une fonctionnalité](https://github.com/yourusername/saassit/issues)
- 💬 [Discussions](https://github.com/yourusername/saassit/discussions)
- 📖 [Wiki](https://github.com/yourusername/saassit/wiki)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit vos changements (`git commit -m 'feat: add amazing feature'`)
4. Push sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- [shadcn/ui](https://ui.shadcn.com/) pour les composants UI
- [Supabase](https://supabase.com/) pour l'infrastructure backend
- [Tailwind CSS](https://tailwindcss.com/) pour les styles
- [Vite](https://vitejs.dev/) pour le bundling
