# Guide de l'Utilisateur 
## Introduction 
Bienvenue dans le guide d’utilisation de notre application Angular et Spring Boot. Ce guide vous aidera à naviguer et utiliser efficacement l’application, notamment pour charger des fichiers Excel et récupérer les données sous forme de fichier XML.
## Installation 
Instructions détaillées pour installer le logiciel :

Assurez-vous d'avoir installé Node.js pour le front-end Angular.
Installez Java et Maven pour le back-end Spring Boot.
Clonez le projet depuis le dépôt.
Exécutez 
```bash
 npm install 
```
pour installer les dépendances Angular.
Exécutez 
```bash
mvn clean install
```
pour le projet Spring Boot.
Lancez le serveur Spring Boot en exécutant
```bash
mvn spring-boot:run
```
Lancez le serveur Angular avec 
```bash
ng serve
```
## Configuration 
Avant de commencer, voici les étapes pour configurer l'application :

Assurez-vous que la base de données est bien configurée avec les bonnes tables.
Modifiez les paramètres de connexion à la base de données dans le fichier de configuration application.properties pour Spring Boot.
Vérifiez que l'URL de l'API est bien configurée dans les services Angular pour la communication avec le back-end.
## Utilisation 
Une fois l'installation et la configuration effectuées, vous pouvez utiliser l'application de la manière suivante :

Connexion à l'application
1. Démarrez votre navigateur et accédez à l'adresse suivante : 
```bash
http://localhost:4200/login
```
2. Un formulaire de connexion s’affiche.
- Dans le champ Username, entrez admin
- Dans le champ Password, entrez admin
3. Cliquez sur le bouton Login. Vous serez redirigé vers la Dashboard de l’application.
## D�pannage  Solutions aux probl�mes courants.  
## FAQ  R�ponses aux questions fr�quentes. 
