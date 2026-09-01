# Modèles d'instructions courants pour TraeWork

Prêts à l'emploi. Remplacez ce qui est entre `【】` par vos contenus. Rappel des principes de rédaction : les six éléments (objectif/entrées/actions/contraintes/sortie/validation) dans [Première tâche](/fr/traework/03-first-task).

## Documents

**Lecture rapide d'un document**

```text
Dis-moi l'essentiel de [nom du document/pièce jointe], synthétisé par thème, en signalant les 3 points
sur lesquels je dois particulièrement m'attarder.
```

**Rapport hebdomadaire**

```text
Améliore [document de bilan] et rédige le rapport selon : conclusion de la semaine, avancées clés, programme de la semaine prochaine :
la conclusion résume en une phrase le résultat le plus digne d'être signalé ; les avancées clés en 3 à 5 points (ce qui a été fait, les résultats obtenus) ;
le programme en 2 à 3 points (les chantiers à avancer, le soutien nécessaire).
```

**Écriture dans Feishu et notification**

```text
Reporte le [rapport/compte rendu] ci-dessus dans un document Feishu et envoie-le dans [nom du groupe].
```

**Comparaison de deux versions d'un document**

```text
Compare [fichier A] et [fichier B], liste les différences en trois catégories : ajouts, suppressions, modifications ;
signale surtout les montants, dates, responsables et conditions d'approbation ; génère une liste de points à confirmer, sans modifier les fichiers d'origine.
```

## Données

**Analyse Excel**

```text
Lis [fichier-de-donnees.xlsx] sans modifier l'original.
Question métier : [la question à traiter, ex. la performance de chaque ligne de produit ce mois-ci].
Sortie : description des champs et contrôle des données sales, indicateurs clés par [dimension], graphiques,
et 3 conclusions directement exploitables pour le retour d'expérience.
Exigences : chiffres identiques au fichier source ; marquer « à vérifier » ce qui ne peut pas être confirmé.
```

**Tableau de bord de données**

```text
Fais un tableau de bord [période] : tout en haut, la vue d'ensemble de [indicateur clé],
en dessous, des graphiques de tendance, d'entonnoir et de comparaison par [dimension], avec graphiques interactifs.
```

## Reporting

**Bilan d'activité**

```text
À partir de mes notes de travail, rédige un bilan d'activité. Exigences :
1. Regrouper, fusionner, dédupliérer ; pas de journal chronologique
2. Extraire 3 à 5 réalisations clés, développées selon « contexte — action — résultat — valeur — contribution personnelle »
3. Prioriser les données et comparaisons avant/après ; distinguer résultats collectifs et contribution individuelle
4. Aucune information inventée
5. Sortie : synthèse du bilan, réalisations clés, compétences acquises, retour sur les problèmes, plan de la prochaine période
Poste : [poste] Période : [période] Notes de travail : [@document]
```

**Faire un PPT (version méthodologique, voir les études de cas)**

```text
Ne génère pas encore le PPT. Analyse d'abord [la matière], extrais les thèses centrales et l'armature argumentaire,
puis produis un memo et un slide plan d'une dizaine de pages, une seule thèse par diapositive.
Arrête-toi après la sortie et attends ma validation.
```

## Automatisation

**Veille planifiée**

```text
[9 h les jours ouvrés], collecte les articles publics des dernières 24 heures liés à [sujet],
classés par [axe de classement], avec lien de source ; si moins de 3 informations pertinentes, produis une explication ;
sortie Markdown enregistrée dans [dossier].
```

**Rapport hebdomadaire d'e-réputation**

```text
Chaque lundi à 9 h, synthétise les articles et discussions réseaux sociaux de la semaine passée liés à [entreprise/produit],
en un rapport en trois colonnes « presse / retours utilisateurs / actualités concurrents », avec tonalité et source.
```

## Contrôle de l'ordinateur

**Remplir un formulaire (version sûre)**

```text
Remplis le formulaire [nom/URL] avec les informations de [pièce jointe].
À la fin, reste sur la page de soumission en attendant ma confirmation ; ne clique pas sur Envoyer.
```

**Traitement par lots selon un modèle**

```text
Copie le fichier [modèle], remplace [champs] par les données de chaque enregistrement,
traite un par un et enregistre dans output/, puis produis la liste de traitement.
N'envoie ni ne publie aucun livrable.
```

## Processus

**Mode Plan (voir le plan d'abord)**

```text
/plan Organise les [N] fichiers du dossier [dossier] : donne-moi d'abord ton plan (combien d'étapes, quels fichiers touchés,
comment nommer), j'exécuterai après validation.
```

**Mode Goal (poursuite d'objectif)**

```text
/goal Convertis tous les fichiers [type] du dossier [dossier] au format [format cible],
contrôle 1 sur 10 à chaque lot de 10, arrête-toi quand tout est fait et que les contrôles passent.
```
