# Annexe A : Modèles d'instructions courants

Des modèles de tâches prêts à l'emploi. Remplacez le contenu entre crochets `【】` par vos données. Débutants : commencez par A.1 à A.4 ; les clés de rédaction sont dans le tableau des six éléments de [Réussir sa première tâche](/fr/workbuddy/04-first-task/).

## A.1 Tri de fichiers

```text
Organise les fichiers du dossier courant.
Classe-les par type et par thème, et génère une nouvelle arborescence.
Avant d'agir, soumets-moi d'abord un plan de rangement ; ne déplace aucun fichier sans mon accord.
```

## A.2 Analyse Excel

```text
Analyse ce fichier Excel.
Rends : indicateurs clés, données anormales, évolutions de tendance, causes possibles, actions recommandées.
Génère un rapport de synthèse et des graphiques.
```

## A.3 Génération de PPT

```text
Génère un plan de PPT à partir de ce document Word.
Exigences : environ 10 pages, chacune avec un titre, 3-4 points et un graphique suggéré.
Style formel, adapté à un reporting de direction.
```

## A.4 Compte rendu de réunion

```text
Mets en ordre le contenu de cette réunion.
Rends : conclusions, actions à mener, responsables, échéances, points de risque, questions ouvertes.
```

## A.5 Étude sectorielle

```text
Étudie 【secteur/société/produit】.
Rends : contexte de marché, acteurs principaux, comparaison concurrentielle, tendances, opportunités, risques.
Joins les liens des sources.
```

## A.6 Proposition commerciale

```text
Génère une proposition d'avant-vente à partir des informations client.
Inclure : contexte client, analyse des points de douleur, scénarios recommandés, chemin de déploiement, bénéfices attendus, déroulé de démonstration.
```

## A.7 Deuxième passe (décrire les différences, pas réécrire)

```text
Modifie la version précédente de 【nom du document】, sans régénérer l'ensemble.
Modifications demandées : 【liste des changements précis】
Livrer la v2 modifiée et consigner les changements dans changelog.md.
```

## A.8 Comparaison de documents (règlement / contrat / proposition)

```text
Compare 【fichier A】 et 【fichier B】.
Rends quatre catégories de différences — ajouts, suppressions, modifications, forme seule — avec chapitres et localisation dans le texte original.
Signale en priorité montants, dates, responsables, conditions d'approbation, exceptions et formulations négatives.
Génère une liste d'impacts et de questions à trancher, sans modifier les fichiers d'origine.
```

## A.9 Fusion multi-tableaux et rapprochement

```text
Fusionne les 【N】 tableaux de 【répertoire】.
Vérifie d'abord noms de colonnes, types, plages de dates et clés primaires ; en cas d'incohérence, arrête-toi et liste les écarts.
Avant agrégation, livre le total de lignes, les vides, aberrations et doublons.
Génère le fichier nettoyé, la liste des anomalies et la note de rapprochement.
Le total des montants doit se rapprocher avec la somme des tableaux sources ; si l'écart n'est pas nul, pas de conclusion de gestion.
```

## A.10 Recherche d'investissement : assise factuelle de la société

```text
Dresse un état des lieux systématique de 【nom de la société】, avec un résumé structuré :
1) Activités cœur et principales gammes de produits
2) Composition des revenus et des profits
3) Principaux clients et cas d'usage
4) Position dans la chaîne de valeur
5) Évolutions stratégiques majeures des dernières années
Exigences : uniquement des informations vérifiables ; 3 à 5 points par partie ;
aucun conseil d'investissement, uniquement une mise en ordre des faits.
```

> Pour la chaîne complète de prompts de recherche (angle sectoriel, décomposition d'activité, divergences haussier/baissier, tout-en-un niveau due diligence), voir [Faire de l'analyse d'investissement un rituel quotidien](/fr/workbuddy/case-investment/). Ce modèle ne sert qu'à la recherche et ne constitue aucun conseil d'investissement.

## A.11 Brief de tâche multi-agents

```text
Objectif : produire un 【type de livrable】 de 【durée】 pour 【produit/projet】.
Style : 【référence de style】.
Ressources : 【chemin de l'espace de ressources ou fichiers fournis】.
Rôles : 【directeur, rôle A, rôle B…】
Points de validation : 【quelles étapes exigent une validation utilisateur avant de poursuivre】.
Tout-automatique / semi-automatique : 【intervention humaine intermédiaire requise ou non】.
```

## A.12 Définition d'une tâche automatisée

```text
Nom de la tâche : 【nom】
Déclenchement : 【tous les jours 09:00 / chaque vendredi / le 1er du mois】
Prompt : 【instruction complète】
Sources : 【liste des @skills ou connecteurs】
Garde-fous qualité : 【éléments valables ≥ N ; sources disponibles ≥ N】
Format de sortie : 【liste structurée/fichier】
Destination : 【groupe Feishu / courriel / ajout à un document】
Idempotence : ID de lot = 【préfixe】-{date}, marqué après notification réussie, pas de renvoi
Relances : timeout de source, 1 relance ; échec de notification, 2 relances avec retrait ; autres échecs → humain
Responsable : 【nom】
Arrêt : page de gestion des automatisations WorkBuddy → suspendre
```
