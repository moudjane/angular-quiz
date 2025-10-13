# Plan de Migration Angular 16 vers 19

## Notes
- Projet actuel : Angular 16.1.0 avec TypeScript 5.8.2
- Utilise Tailwind CSS et SCSS
- Configuration de base avec routing
- Pas de dépendances complexes identifiées (pas d'Angular Material, pas de ngUpgrade)
- Application de complexité basique à moyenne
- **PROBLÈME DÉTECTÉ** : Node.js v20.18.1 n'est pas compatible avec Angular 17+
- Angular CLI nécessite Node.js v20.19+ ou v22.12+

## Task List
- [x] Mettre à jour Angular CLI globalement
- [x] **PRIORITÉ** : Mettre à jour Node.js vers v20.19+ ou v22.12+
- [ ] Mettre à jour les dépendances Angular core (16 → 17)
- [ ] Mettre à jour les dépendances Angular core (17 → 18)
- [ ] Mettre à jour les dépendances Angular core (18 → 19)
- [ ] Mettre à jour TypeScript vers la version compatible
- [ ] Mettre à jour RxJS vers la version compatible
- [ ] Mettre à jour Zone.js vers la version compatible
- [ ] Vérifier et mettre à jour la configuration angular.json
- [ ] Tester la compilation et l'exécution
- [ ] Mettre à jour le README.md

## Current Goal
Commencer la migration Angular 16 → 17 maintenant que Node.js v20.19.0 est activé.
