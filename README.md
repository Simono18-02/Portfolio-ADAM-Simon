# Portfolio de Simon Adam

Ce projet est un site web de portfolio responsive pour Simon Adam, un étudiant ingénieur en génie mécanique à Centrale Lyon ENISE.

## Fonctionnalités

- Design moderne et responsive avec effets visuels et animations
- Support multilingue (Français, Anglais, Espagnol, Allemand, Italien)
- Fond animé interactif en 3D avec Three.js
- Présentation des projets, compétences et expériences
- Adaptabilité pour mobile, tablette et ordinateur

## Structure du projet

```
.
├── index.html         # Structure HTML principale
├── style.css          # Styles CSS 
├── script.js          # Scripts JavaScript
├── documents/         # CV et autres documents à télécharger
│   ├── cv_fr.pdf
│   ├── cv_en.pdf
│   ├── cv_es.pdf
│   ├── cv_de.pdf
│   └── cv_it.pdf
└── images/            # Images utilisées dans le site
    ├── profil.png
    ├── rousselet.png
    └── favicon.ico
```

## Technologies utilisées

- HTML5 / CSS3
- JavaScript (ES6+)
- Three.js - Pour l'animation du fond 3D
- Font Awesome - Pour les icônes
- IntersectionObserver API - Pour les animations au défilement

## Installation et utilisation locale

1. Clonez ce dépôt
   ```
   git clone https://github.com/SimonAdam/portfolio.git
   ```

2. Ouvrez le fichier `index.html` dans votre navigateur
   
3. Ou utilisez un serveur local comme Live Server dans VS Code

## Fonctionnalités de l'interface

- **Navigation multilingue** : Sélecteur de langues en haut à droite
- **Indicateur de défilement** : Flèche animée indiquant de faire défiler vers le bas
- **Barre de progression** : Indique la progression du défilement dans la page
- **Animation de particules** : Fond 3D réactif aux mouvements de la souris
- **Téléchargement de CV** : Bouton fixe en bas à droite
- **Découverte de l'école** : Lien vers le site de l'école en bas à gauche

## Adaptation aux appareils mobiles

- Menu hamburger pour les écrans plus petits
- Réorganisation des sections pour une lisibilité optimale sur mobile
- Ajustement des animations et effets pour les performances mobiles

## Maintenance

- **Mise à jour du CV** : Remplacez les fichiers dans le dossier `documents/`
- **Ajout de projets** : Ajoutez de nouvelles cartes dans la section "Projets" de `index.html`
- **Modification des informations** : Mettez à jour les textes directement dans `index.html` ou dans les traductions dans `script.js`

## Améliorations futures possibles

- Ajout d'une galerie de photos pour chaque projet
- Implémentation d'un formulaire de contact
- Intégration d'une section blog
- Optimisation des performances avec lazy loading
- Mise en place d'un CMS pour faciliter les mises à jour

## Licence

Tous droits réservés © Simon Adam
