# Guide de Contribution

Merci de votre intérêt pour contribuer à Dowitt ! Ce document fournit des lignes directrices pour contribuer au projet.

## Code de Conduite

En participant à ce projet, vous acceptez de respecter notre Code de Conduite. Nous attendons de tous les contributeurs qu'ils :
- Soient respectueux et inclusifs
- Acceptent les critiques constructives
- Se concentrent sur ce qui est le mieux pour la communauté
- Fassent preuve d'empathie envers les autres membres

## Comment Contribuer

### Signaler des Bugs

1. Vérifiez d'abord que le bug n'a pas déjà été signalé
2. Créez une issue avec un titre clair et descriptif
3. Décrivez les étapes pour reproduire le bug
4. Incluez des captures d'écran si possible
5. Mentionnez votre environnement (OS, navigateur, version)

### Suggérer des Améliorations

1. Créez une issue avec le tag "enhancement"
2. Expliquez clairement votre suggestion
3. Incluez des exemples ou des maquettes si possible
4. Expliquez pourquoi cette amélioration serait utile

### Pull Requests

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Committez vos changements
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. Push sur votre branche
   ```bash
   git push origin feature/amazing-feature
   ```
5. Ouvrez une Pull Request

### Conventions de Code

- Utilisez TypeScript
- Suivez les règles ESLint et Prettier configurées
- Écrivez des tests pour les nouvelles fonctionnalités
- Commentez votre code quand nécessaire
- Suivez les conventions de nommage existantes

### Structure des Commits

Suivez la convention [Conventional Commits](https://www.conventionalcommits.org/) :

- `feat:` nouvelle fonctionnalité
- `fix:` correction de bug
- `docs:` changements dans la documentation
- `style:` changements de style (formatage, espaces, etc.)
- `refactor:` refactoring du code
- `test:` ajout ou modification de tests
- `chore:` autres changements

### Tests

- Écrivez des tests pour les nouvelles fonctionnalités
- Assurez-vous que tous les tests passent avant de soumettre une PR
- Utilisez les commandes :
  ```bash
  pnpm test        # Lance les tests
  pnpm test:watch  # Lance les tests en mode watch
  ```

## Setup du Projet

1. Fork et clone le projet
   ```bash
   git clone https://github.com/yourusername/dowitt.git
   ```

2. Installez les dépendances
   ```bash
   cd dowitt
   pnpm install
   ```

3. Créez un fichier .env
   ```bash
   cp .env.example .env
   ```

4. Lancez le projet
   ```bash
   pnpm dev
   ```

## Questions ?

Si vous avez des questions, n'hésitez pas à :
1. Consulter la documentation
2. Ouvrir une issue
3. Contacter les mainteneurs

Merci de contribuer à Dowitt ! 🎉
