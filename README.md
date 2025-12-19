# Well Steven - Site Web Comptable Professionnel

## 📋 À propos du projet

**Well Steven** est une plateforme web moderne dédiée aux experts comptables spécialisés dans le suivi et l'accompagnement des PME en croissance. Le site présente les services, formations et expertise de l'équipe comptable.

### Stack Technologique

-   **Framework** : [Next.js 16](https://nextjs.org) - React framework moderne avec App Router
-   **Langage** : TypeScript
-   **Styling** : Tailwind CSS + Shadcn/ui
-   **Animations** : Motion (Framer Motion alternative)
-   **Formulaires** : React Hook Form + Zod
-   **Package Manager** : pnpm
-   **ESLint** : Linting moderne

## 🚀 Démarrage Rapide

### Prérequis

-   Node.js 18+
-   pnpm (recommandé)

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd well-steven

# Installer les dépendances
pnpm install
```

### Lancer le serveur de développement

```bash
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000) et se met à jour automatiquement lors de vos modifications.

## 📁 Architecture du Projet

```
well-steven/
├── src/
│   ├── app/                 # Pages et layouts (Next.js App Router)
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Page d'accueil
│   │   └── globals.css      # Styles globaux
│   └── components/
│       ├── sections/        # Composants de page
│       │   ├── Header.tsx   # Entête navigation
│       │   └── Hero.tsx     # Section héro
│       └── ui/              # Composants réutilisables (Shadcn/ui)
│           ├── button.tsx
│           ├── card.tsx
│           ├── dialog.tsx
│           └── ...
├── public/                  # Fichiers statiques et images
│   ├── images/
│   └── [roles]/            # Ressources par rôle utilisateur
├── package.json            # Dépendances du projet
└── tsconfig.json          # Configuration TypeScript
```

## 🔨 Scripts Disponibles

| Commande     | Description                                 |
| ------------ | ------------------------------------------- |
| `pnpm dev`   | Lance le serveur de développement           |
| `pnpm build` | Crée une build optimisée pour la production |
| `pnpm start` | Lance le serveur de production              |
| `pnpm lint`  | Exécute ESLint pour vérifier le code        |

## 📝 Conventions de Code

### Structure des Composants

```tsx
// ✅ Bon
export default function ComponentName() {
    return <div>Content</div>;
}

// Toujours exporter par défaut pour les composants React
```

### Fichiers et Dossiers

-   **Composants** : PascalCase (`Header.tsx`, `HeroSection.tsx`)
-   **Fichiers utilitaires** : camelCase (`utils.ts`, `constants.ts`)
-   **Dossiers** : minuscule ou kebab-case (`ui/`, `sections/`, `lib/`)

### TypeScript

-   Utiliser les types explicites pour les props
-   Préférer les interfaces aux types pour les objets
-   Typer les callbacks et événements

### Tailwind CSS

-   Utiliser les classes Tailwind plutôt que du CSS custom
-   Respecter les couleurs définies dans la configuration
-   Limiter l'usage de `!important`

## 🎨 Composants UI

Le projet utilise **Shadcn/ui** pour les composants réutilisables. Tous les composants sont situés dans `src/components/ui/`.

**Composants disponibles** :

-   Buttons, Cards, Dialogs
-   Forms, Inputs, Textareas
-   Accordions, Dropdowns, Menus
-   Avatars, Badges, Alerts
-   Et bien d'autres...

## 🌍 Navigation et Pages

Navigation principale (dans `Header.tsx`) :

-   Accueil (`/`)
-   À propos (`/a-propos`)
-   Services (`/services`)
-   Formations (`/formations`)
-   Contact (`/contact`)

## 🌟 Bibliothèques de Composants Premium

Le projet intègre trois sources majeures de composants modernes et animés :

### 🎨 Aceternity UI

[Aceternity UI](https://ui.aceternity.com) fournit des composants React beautifully conçus avec des animations fluides.

**Composants utilisés** :

-   **BlurFade** (`blur-fade.tsx`) - Animation d'apparition avec effet de flou progressif
-   **TextReveal** (`text-reveal.tsx`) - Révélation progressive de texte avec effets visuels
-   **ImagesSlider** (`images-slider.tsx`) - Carousel d'images avec transitions élégantes

**Utilisation** :

```tsx
import { BlurFade } from "@/components/ui/blur-fade";
import { TextReveal } from "@/components/ui/text-reveal";
import { ImagesSlider } from "@/components/ui/images-slider";
```

**Documentation** : https://ui.aceternity.com

### ✨ Magic UI

[Magic UI](https://magicui.design) offre des composants modernes avec des animations interactives et des effets visuels captivants.

**Composants utilisés** :

-   **InteractiveHoverButton** (`interactive-hover-button.tsx`) - Bouton avec effets hover interactifs et animations smooth

**Utilisation** :

```tsx
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Example() {
    return (
        <InteractiveHoverButton className="bg-primary">
            Cliquez-moi
        </InteractiveHoverButton>
    );
}
```

**Documentation** : https://magicui.design

### 🔧 React Bits

[React Bits](https://react-bits.dev) fournit des snippets et composants réutilisables pour React.

**Composants disponibles** :

-   Composants d'interface
-   Hooks personnalisés
-   Patterns React avancés

**Configuration** : Les registries sont configurées dans `components.json` pour faciliter l'installation de nouveaux composants.

### 📦 Installation de Nouveaux Composants

Pour ajouter des composants depuis ces registries :

```bash
# Depuis Aceternity UI
npx shadcn-cli@latest add -r "@aceternity" blur-fade

# Depuis Magic UI
npx shadcn-cli@latest add -r "@magicui" interactive-hover-button

# Depuis Shadcn/ui standard
npx shadcn-cli@latest add button
```

### Configuration dans `components.json`

```json
{
    "registries": {
        "@magicui": "https://magicui.design/r/{name}.json",
        "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
    }
}
```

## 🤝 Guide de Collaboration

### Avant de commencer

1. Créer une branche depuis `main` :

    ```bash
    git checkout -b feature/nom-de-la-feature
    ```

2. Utiliser des noms descriptifs : `feature/`, `fix/`, `docs/`, `refactor/`

### Développement

1. Respecter les conventions de code (voir section ci-dessus)
2. Tester vos modifications localement
3. Vérifier le linting : `pnpm lint`

### Commit et Push

```bash
git add .
git commit -m "feat: description claire de la modification"
git push origin feature/nom-de-la-feature
```

### Pull Request

1. Créer une PR avec une description claire
2. Expliquer les changements et le contexte
3. Demander une review si nécessaire
4. Fusionner après approbation

### Bonnes Pratiques

✅ **À faire** :

-   Commits atomiques et bien nommés
-   Messages descriptifs en français ou anglais
-   Tester avant de pusher
-   Documenter les modifications importantes
-   Respecter le linting

❌ **À éviter** :

-   Commits vagues comme `git commit -m "fix"`
-   Pusher du code non testé
-   Mélanger plusieurs features dans une PR
-   Négliger les avertissements ESLint

## 📦 Dépendances Principales

| Package           | Usage                   |
| ----------------- | ----------------------- |
| `next`            | Framework React         |
| `react-hook-form` | Gestion des formulaires |
| `zod`             | Validation de schémas   |
| `@radix-ui/`      | Composants accessibles  |
| `tailwindcss`     | Styling utilitaire      |
| `motion`          | Animations fluides      |
| `lucide-react`    | Icônes SVG              |

## 🔐 Variables d'Environnement

Créer un fichier `.env.local` :

```env
# Ajouter les variables nécessaires ici
```

## 🐛 Dépannage Courant

### Port 3000 déjà utilisé

```bash
# Utiliser un port différent
pnpm dev -p 3001
```

### Cache Next.js problématique

```bash
rm -rf .next
pnpm dev
```

### Dépendances cassées

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 📚 Documentation Utile

-   [Documentation Next.js 16](https://nextjs.org/docs)
-   [Tailwind CSS](https://tailwindcss.com)
-   [Shadcn/ui](https://ui.shadcn.com)
-   [React Hook Form](https://react-hook-form.com)
-   [Zod - TypeScript-first schema validation](https://zod.dev)

## 🚀 Déploiement

Le projet est optimisé pour le déploiement sur [Vercel](https://vercel.com) :

1. Connecter le repository GitHub à Vercel
2. Vercel détecte automatiquement Next.js
3. Les variables d'environnement se configurent dans le dashboard
4. Chaque push sur `main` redéploie automatiquement

### Déploiement Manuel

```bash
pnpm build
pnpm start
```

## 📞 Contact et Support

Pour toute question concernant le projet, consultez le reste de l'équipe ou référez-vous à la documentation officielle des technologies utilisées.

---

**Dernière mise à jour** : Décembre 2025
