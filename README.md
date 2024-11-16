
# **Projet Ligward : StatUP**

## 1. **Description**  
Le projet Ligward est une application web ayant pour but de réunir tout l'esport de **League of Legends** en un seul endroit. Vous y trouverez des informations sur les Régions, Équipes, Joueurs et Tournois du monde entier.

## 2. **Technologies utilisées**  
- **Frontend :**  
  - Le framework frontend utilisé est **Angular**, car il facilite la liaison bidirectionnelle des données (*Two-way data binding*) et intègre l'utilisation de composants pour une meilleure évolutivité et un développement plus rapide. Le fait qu'il soit basé sur **TypeScript** permet également de réduire les erreurs à l'exécution.  
  - Le style a été réalisé en **SCSS** et nous avons utilisé **TypeScript** pour les ajustements précis.  

- **Backend :**  
  - Nous avons utilisé **Spring Boot** pour le backend.  
  - Notre base de données est une **PostgreSQL**.  

- **Déploiement :**  
  - Enfin, le déploiement a été effectué à l'aide de **Docker**.  

## 3. **Fonctionalités** 
- **Page d'accueil**: Visualiser les derniers articles sur la scène compétitive. 
- **Mini-jeu Yuumi**: Clicker-game en bas de la page d'accueil.
- **Navbar**: Celle-ci se trouve en haut de l'application et permet de naviguer entre les pages.
- **SearchBar**: En tapant simplement le nom d'une région ou d'une équipe on sera redirigés vers la page correspondante.
- **Page régions**: Possibilité de voir toutes les régions compétitives. En cliquant sur l'icone de la région on sera redirigés vers la page détails région. Si on clique simplement sur la carte, celle-ci révèle les équipes de la région. Enfin si on clique sur le logo d'une des équipe on sera redirigés vers la page détails équipe.
- **Page détails région**: On peut y voir les détails de la régions, les équipes qu'elle contient ainsi que les compétitions qui lui sont liées. 
- **Page détails équipe**: On peut y voir les détails de l'équipe, ainsi que les joueurs présents dans la structure. En cliquant sur un joueur on peut également avoir les détails du joueur, ses champions préférés, etc.
- **Page Admin**: Dans cette page il est possible de créer, effacer et modifier des joueurs, équipes, régions en remplissant des formulaires.

## 4. **Installation**
- **Prérequis** : Logiciels requis: IDE de votre choix Angular CLI.

- **Configuration du Backend** :
    - Cloner le dépôt.
    - Construire et exécuter le backend Spring Boot en utilisant Maven.
    - Mentionner toute donnée d'initialisation ou étape de configuration de la base de données.
- **Configuration du Frontend** :
    - Installer les dépendances avec npm install.
    - Lancer l'application Angular avec ng serve.
- **Accès** : 
    - URL d`accès en local: **http://localhost:4200**
    - URL en ligne: **http://46.101.181.73**
