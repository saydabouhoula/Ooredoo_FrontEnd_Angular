# Documentation Technique

## Introduction
Ce document explique le fonctionnement et l'architecture du projet de conversion de fichiers Excel en XML. Le projet utilise un backend développé avec Spring Boot, un frontend en Angular, et une base de données Oracle. L'application permet de charger un fichier Excel contenant des données, de les convertir en XML, et de déposer le fichier XML généré sur une plateforme gouvernementale.

## Architecture
### 1. Architecture Globale
Le projet est composé de trois principaux composants :
1. **Frontend (Angular)** : Fournit une interface utilisateur pour télécharger le fichier Excel et afficher les résultats.
2. **Backend (Spring Boot)** : Traite les fichiers Excel, effectue la conversion en XML et interagit avec la base de données.
3. **Base de Données (Oracle)** : Stocke les données nécessaires à la conversion et à l'application.


### 2. Description des Composants
- **Frontend (Angular)** : Application web accessible via `http://localhost:4200/` permettant de télécharger des fichiers Excel et de visualiser les résultats.
- **Backend (Spring Boot)** : Application serveur accessible via `http://localhost:8094` qui gère la logique métier, le traitement des fichiers Excel et la génération de fichiers XML.
- **Base de Données (Oracle)** : Contient les tables nécessaires pour stocker les données et est configurée avec l'URL de connexion suivante : `jdbc:oracle:thin:@localhost:1521:orcl`.

## Installation
### 1. Prérequis
- **Java JDK** : 17
- **Maven** :  3.9.2
- **Oracle Database** : 19c
- **SQL Developer** : 23.1.1.345

### 2. Environnement de Développement
- **IDE** : IntelliJ IDEA 2023.2.1
- **Java** : 17.0.8
- **Maven** : 3.9.2

### 3. Serveur d'Application
- **Serveur** : Tomcat (inclus avec Spring Boot)

### 4. Base de Données
- **Base de Données** : Oracle Database 19c
- **Driver JDBC** : Oracle JDBC ojdbc11

### 5. Frameworks et Bibliothèques
- **Spring Boot** : 3.1.4
- **Spring Data JPA** : 3.1.4
- **Hibernate** : 6.1.0.Final
- **Jackson Datatype JSR310** : 2.15.2
- **Apache POI** : 5.2.2

### 6. Frontend
- **Angular** : 14.0.0
- **TypeScript** : ~4.7.2
- **Bootstrap** : 5.3.3


### 7. Plugins Maven
- **Maven War Plugin** : 3.4.0
- **Maven Resources Plugin** : 3.3.1
- **Maven Dependency Plugin** : 3.5.0

### 8. Cloner le Référentiel
Clonez le projet depuis le dépôt Git :

**FrontEnd :**
```bash

git clone https://github.com/saydabouhoula/Ooredoo_FrontEnd_Angular.git
```
**BackEnd :**

```bash

git clone https://github.com/saydabouhoula/Ooredoo_backEndSpring.git
```

### 9.Configuration
Configurer le fichier application.properties :
```bash

spring.application.name=Ooredoo

## Configurations de la source de données
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:orcl
spring.datasource.username=system
spring.datasource.password=sayda
spring.datasource.driver-class-name=oracle.jdbc.OracleDriver

# Configuration du fuseau horaire pour Oracle
spring.datasource.hikari.connection-init-sql=ALTER SESSION SET TIME_ZONE='UTC'

# JPA (Java Persistence API) configurations
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.Oracle12cDialect
spring.jpa.properties.hibernate.id.new_generator_mappings=true

# Port du serveur
server.port=8094

# Activer le mode debug pour plus de détails sur les erreurs
debug=true

```
## 4. Construire le Projet

### Backend : Naviguez dans le répertoire du backend et exécutez :
```bash

 mvn clean instal
```
### Frontend : Naviguez dans le répertoire du frontend et exécutez :
```bash

 npm install
 ng serve
 ```

