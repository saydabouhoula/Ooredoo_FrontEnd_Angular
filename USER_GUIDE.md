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
Lancez le serveur Spring Boot en exécutant :
```bash
mvn spring-boot:run
```
Lancez le serveur Angular : 
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
- Dans le champ Username, entrez : admin
- Dans le champ Password, entrez : admin
3. Cliquez sur le bouton Login. Vous serez redirigé vers la Dashboard de l’application.
## Charger un fichier Excel
1. Sur la Dashboard, vous trouverez un formulaire pour charger un fichier Excel.
2. Cliquez sur le bouton Parcourir et sélectionnez le fichier Excel à charger depuis votre ordinateur.
3. Une fois le fichier sélectionné, cliquez sur Charger pour envoyer les données vers la base de données.
4. Un message de confirmation s'affichera une fois que les données sont bien insérées dans la base de données.
## Télécharger un fichier au format XML
1. Après avoir chargé les données, un bouton Download XML apparaîtra.
2. Cliquez sur ce bouton pour télécharger un fichier au format XML contenant les données traitées.
3. Vous pouvez ouvrir ce fichier avec un éditeur de texte comme le Bloc-notes ou tout autre éditeur pour consulter les données en format XML.

Le fichier XML ressemblera à ceci :
```bash
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DeclarationsRS VersionSchema="1.0">
  <Declarant>
    <TypeIdentifiant>1</TypeIdentifiant>
    <Identifiant>0789012H</Identifiant>
    <CategorieContribuable>PM</CategorieContribuable>
  </Declarant>
  <ReferenceDeclaration>
    <ActeDepot>0</ActeDepot>
    <AnneeDepot>2024</AnneeDepot>
    <MoisDepot>06</MoisDepot>
  </ReferenceDeclaration>
  <AjouterCertificats>
    <Certificat>
      <Beneficiaire>
        <IdTaxpayer>
          <MatriculeFiscal>
            <TypeIdentifiant>1</TypeIdentifiant>
            <Identifiant>0042704H</Identifiant>
            <CategorieContribuable>PP</CategorieContribuable>
          </MatriculeFiscal>
        </IdTaxpayer>
        <Resident>1</Resident>
        <NometprenonOuRaisonsociale>CNTRE D'ETUDES-RECHE DE TELECOMMUNICATION</NometprenonOuRaisonsociale>
        <Adresse>000 POLE TECH GHAZALA RAOUED 2081</Adresse>
        <Activite>BUREAU D'ETUDES</Activite>
        <InfosContact>
          <AdresseMail>cert@cert.mincom.tn</AdresseMail>
          <NumTel>70835000</NumTel>
        </InfosContact>
      </Beneficiaire>
      <DatePayement>03/06/2024</DatePayement>
      <Ref_certif_chez_declarant>W-RCO-0337-24</Ref_certif_chez_declarant>
      <ListeOperations>
        <Operation IdTypeOperation="RS2_000002">
          <AnneeFacturation>2024</AnneeFacturation>
          <CNPC>0</CNPC>
          <P_Charge>0</P_Charge>
          <MontantHT>1576271</MontantHT>
          <TauxRS>3</TauxRS>
          <TauxTVA>19</TauxTVA>
          <MontantTVA>299491</MontantTVA>
          <MontantTTC>1875762</MontantTTC>
          <MontantRS>56272</MontantRS>
          <MontantNetServi>1819490</MontantNetServi>
        </Operation>
      </ListeOperations>
      <TotalPayement>
        <TotalMontantHT>1576271</TotalMontantHT>
        <TotalMontantTVA>299491</TotalMontantTVA>
        <TotalMontantTTC>1875762</TotalMontantTTC>
        <TotalMontantRS>56272</TotalMontantRS>
        <TotalMontantNetServi>1819490</TotalMontantNetServi>
      </TotalPayement>
    </Certificat>
  </AjouterCertificats>
</DeclarationsRS>
```