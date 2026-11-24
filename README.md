# WebCraft Solutions - React

Migration du portail WebCraft Solutions (projets clients et formations) vers React.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur http://localhost:5173.

| Commande         | Rôle                                            |
| ---------------- | ----------------------------------------------- |
| `npm run dev`    | Serveur de développement                        |
| `npm run build`  | Version de production dans `dist/`              |
| `npm run lint`   | Vérification du code avec ESLint                |
| `npm run format` | Mise en forme du code avec Prettier (2 espaces) |

## Technologies

- React 18 et React Router 6
- Vite
- Bootstrap 5.3 (CSS uniquement) et Bootstrap Icons
- prop-types pour typer les props des composants
- ESLint, Prettier et EditorConfig pour un code formaté de la même façon partout

## Pages et routes

| Route                     | Page              | Contenu                                                                       |
| ------------------------- | ----------------- | ----------------------------------------------------------------------------- |
| `/`                       | `Home`            | Hero, section Projets, section Formations                                     |
| `/projets`                | `ProjectsPage`    | Section Projets seule                                                         |
| `/formations`             | `CoursesPage`     | Section Formations seule                                                      |
| `/inscription/:courseId?` | `InscriptionPage` | Formulaire, avec la formation présélectionnée si l'identifiant est dans l'URL |
| `*`                       | `NotFoundPage`    | Page 404                                                                      |

## Architecture

```
src/
├── App.jsx                 Routes de l'application
├── App.css                 Styles globaux
├── main.jsx                Point d'entrée (BrowserRouter, Bootstrap)
├── config/
│   ├── api.js              URL des API
│   └── constants.js        Niveaux, délai de recherche, longueur minimale
├── pages/                  Une page par route
├── components/
│   ├── Header, Footer, Hero
│   ├── CatalogSection      Section générique : recherche, filtres, grille, modal
│   ├── ProjectsSection     CatalogSection branchée sur l'API projets
│   ├── CoursesSection      CatalogSection branchée sur l'API formations
│   ├── SearchBar, FilterBar, Modal, Loader, ErrorMessage
│   ├── ProjectCard, CourseCard, ProjectDetails, CourseDetails
│   ├── TechList, Rating, CourseBadges, SubscribeButton
│   └── InscriptionForm, CourseFields, FormField, CharCounter, SignupSuccess
├── hooks/
│   ├── useFetch.jsx        Chargement d'une API avec cache (données, chargement, erreur)
│   ├── useSearch.jsx       Recherche en temps réel avec debounce
│   ├── useFilter.jsx       Filtres combinés
│   ├── useForm.jsx         État, validation et focus du formulaire
│   ├── useSignup.jsx       Envoi de l'inscription (envoi, erreur, confirmation)
│   └── useScrollToTop.jsx  Retour en haut à chaque changement de page
└── utils/
    ├── validation.js       Règles de validation du formulaire
    └── signup.js           Envoi de l'inscription
```

## Choix techniques

- **Pas de code dupliqué entre Projets et Formations** : les deux sections utilisent le même composant `CatalogSection`. Chaque section lui passe seulement ses données, ses filtres et la façon d'afficher une carte et ses détails.
- **Logique séparée de l'affichage** : le chargement, la recherche, les filtres, le formulaire et l'envoi sont dans des hooks personnalisés, la validation dans `utils/validation.js`.
- **Pas de prop drilling** : chaque section charge ses propres données avec `useFetch`, et les composants ne reçoivent que ce qu'ils affichent.
- **Cache des API** : `useFetch` garde les réponses en mémoire, la liste des formations n'est donc chargée qu'une fois entre l'accueil et l'inscription.
- **Gestion des erreurs** : chaque appel API affiche un loader pendant le chargement et un message d'erreur en cas d'échec.
- **Accessibilité** : lien d'évitement, labels sur tous les champs, `aria-invalid` et messages d'erreur liés aux champs, modal fermable avec Échap et focus géré.

## Utilisation de l'IA
Une IA (Claude) a été utilisée comme assistant pendant la réalisation de ce projet, notamment pour :

- proposer des améliorations de code et simplifier certaines fonctions ;
- améliorer le CSS ;
- déboguer certaines erreurs.
