# Next.js Boilerplate

Un boilerplate moderne pour démarrer rapidement des projets Next.js avec TypeScript et TailwindCSS.

## Fonctionnalités

- ⚡️ [Next.js 15](https://nextjs.org/) - Le framework React pour la production
- 🔥 [App Router](https://nextjs.org/docs/app) - Nouvelle architecture de routage de Next.js
- 🎨 [TailwindCSS 4](https://tailwindcss.com/) - Framework CSS utilitaire
- 📦 [TypeScript](https://www.typescriptlang.org/) - Typage statique pour JavaScript
- 📱 Design responsive
- 🧩 Composants UI réutilisables
- 🔍 ESLint - Linting pour JavaScript/TypeScript
- 🌓 Mode sombre/clair
- 📁 Structure de projet organisée

## Structure du projet

```
├── public/              # Fichiers statiques
├── src/
│   ├── app/             # App Router de Next.js
│   ├── components/       # Composants React
│   │   ├── layout/      # Composants de mise en page
│   │   └── ui/          # Composants d'interface utilisateur
│   ├── hooks/           # Hooks React personnalisés
│   ├── lib/             # Fonctions utilitaires
│   ├── styles/          # Styles globaux
│   └── types/           # Types TypeScript
├── .env.example         # Variables d'environnement d'exemple
├── next.config.ts       # Configuration Next.js
├── package.json         # Dépendances et scripts
└── tsconfig.json        # Configuration TypeScript
```

## Démarrage rapide

1. Clonez ce dépôt ou utilisez-le comme template

```bash
git clone https://github.com/NecaTech/boilerplate.git mon-nouveau-projet
cd mon-nouveau-projet
```
2. Installez les dépendances :

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Copiez le fichier `.env.example` en `.env.local` et ajustez les variables si nécessaire

```bash
cp .env.example .env.local
```

4. Démarrez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Composants disponibles

Ce boilerplate inclut plusieurs composants UI réutilisables :

- `Button` - Bouton personnalisable avec différentes variantes et tailles
- `Card` - Carte avec en-tête, contenu et pied de page
- `Container` - Conteneur pour une mise en page cohérente
- `DefaultLayout` - Mise en page par défaut avec en-tête et pied de page

## Hooks personnalisés

- `useLocalStorage` - Hook pour utiliser localStorage avec l'état React
- `useMediaQuery` - Hook pour vérifier si une media query correspond

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Démarre l'application en mode production
- `npm run lint` - Exécute ESLint pour vérifier le code

## Déploiement

Ce projet peut être facilement déployé sur [Vercel](https://vercel.com) ou toute autre plateforme supportant Next.js.

## Licence

MIT
