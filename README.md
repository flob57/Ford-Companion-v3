# Ford Companion v3

Application web installable sur iPhone, conçue pour la Ford Fiesta 2016. Elle fonctionne immédiatement sans adaptateur OBD.

## Nouveautés de la version 3

- suppression complète de la section « Prochain rendez-vous » ;
- nouveau compteur de vitesse GPS, plus lisible et plus proche d’un cadran automobile ;
- conservation des raccourcis Navigation, LBC, Musique, Podcasts et Téléphone ;
- conservation des données Road Trip : kilométrage, consommation, pleins et entretien.

## Déploiement GitHub + Cloudflare Pages

1. Décompresser le ZIP.
2. Déposer **le contenu du dossier** à la racine du dépôt GitHub.
3. Dans Cloudflare Pages :
   - Framework : `None`
   - Build command : laisser vide
   - Build output directory : `/`
4. Ouvrir l’adresse Cloudflare dans Safari sur l’iPhone.
5. Choisir **Partager → Sur l’écran d’accueil**.

## Données Road Trip

Les sauvegardes Fiesta sont incluses dans `data/`. L’application affiche le kilométrage, la consommation, les pleins et l’entretien déjà importés.

## LBC

Le bouton utilise le logo LBC et ouvre l’adresse configurée dans Réglages. L’URL par défaut est la page d’écoute de LBC.

## Vitesse GPS

Au premier lancement, autoriser la localisation précise. La vitesse dépend du signal GPS de l’iPhone et ne remplace pas le compteur homologué du véhicule.
