# Modèles d'instructions courants pour QoderWork

Prêts à l'emploi. Remplacez ce qui est entre `【】`/`{}` par vos contenus. Les trois éléments du prompt (objectif/format/contraintes) dans [Première tâche](/fr/qoderwork/03-first-task).

## Organisation de fichiers

**Grand nettoyage de Downloads**

```text
Scanne [dossier], trouve tous les fichiers en double, conserve la version la plus récente,
et produis la liste ; n'exécute qu'après ma validation.
```

**Classement et archivage**

```text
Organise [dossier] : les images vers assets/images/, les documents (.md/.txt/.pdf) vers docs/,
les configurations (.json/.yaml/.toml) vers config/, le code dans src/ par langage.
Donne-moi d'abord le plan ; à la fin, produis un rapport d'organisation (statistiques + arborescence).
```

**Archivage photo**

```text
Organise [dossier photos] : lis la date EXIF, crée des dossiers par année-mois (2026-01/),
déplace et renomme au format « date_numero.jpg », et produis un inventaire CSV.
Donne-moi d'abord le plan ; ne touche aux fichiers qu'après validation.
```

**Archivage de tickets et reçus**

```text
Reconnais sur chaque photo de reçu du [dossier] la date, le montant, le marchand et le type (restauration/transport/hébergement/autre) :
renomme au format « date-type-montant-marchand.jpg », archive par type,
et produis un Excel récapitulatif de notes de frais. Affiche d'abord l'aperçu de reconnaissance ; je validerai avant le renommage.
```

## Analyse de données

**Analyse multidimensionnelle Excel**

```text
@[donnees.xlsx] analyse :
1. Explique la signification des champs, contrôle les valeurs manquantes et aberrantes
2. Calcule et classe [indicateur] par [dimension]
3. Tendances mensuelles/hebdomadaires
4. Génère une synthèse Excel + graphiques
Exigences : chiffres identiques au fichier source ; marquer « à vérifier » ce qui ne peut pas être confirmé.
```

**CSV de l'ordre de cent mille lignes**

```text
Analyse [frequentation/ventes.csv] :
groupe par [champ de regroupement] ; calcule les totaux et les parts (1 décimale) ;
produis un Excel + histogramme coloré ; enregistre dans [dossier de sortie].
```

**PPT d'étude (avec sources)**

```text
Étudie [sujet] et fais un PPT de [N] pages couvrant [liste des dimensions] ;
structure : [couverture → … → synthèse] ; courbes pour les tendances, secteurs pour les parts ;
toutes les données avec leur source ; marquer « à vérifier » l'introuvable.
```

## Traitement documentaire

**Tri de CV par lots**

```text
Parcours tous les CV du [dossier] et filtre selon l'annonce : [exigence 1/2/3] ;
archive les retenus dans le dossier « CV-retenus-[poste] » ;
produis un Excel : nom, coordonnées, [points clés], adéquation (1-10), motif de recommandation.
```

**Uniformisation de format par lots**

```text
Uniformise les 10 documents Word du [dossier] : titres en SimSun gras 18,
corps en SimSun 12, interligne 1,5, retrait de première ligne 2 caractères.
Montre-moi d'abord l'aperçu d'un document pour validation.
```

**Comparaison de documents**

```text
Compare [fichier A] et [fichier B] : liste les différences en trois catégories ajouts/suppressions/modifications,
signale surtout montants, dates, responsables, conditions d'approbation, et produis une liste de points à confirmer.
```

## Automatisation

**Journal quotidien planifié (avec notification)**

```text
(Planifié : 09:00 chaque jour ouvré) Lis les données de la veille dans data/ et génère le journal du matin :
synthèse des indicateurs clés (avec évolution) ; variations supérieures à ±20 % en jaune avec explication
(« à vérifier » si absente des données) ; sortie Markdown dans reports/,
et notification dans le DingTalk [nom du groupe].
```

**Planification en langage naturel**

```text
Toutes les 3 heures, vérifie [page/fichier] et, si mise à jour, envoie-moi un résumé.
```

## Ordinateur / navigateur

**Collecte web par lots**

```text
Depuis la page connectée du navigateur [chemin d'entrée], collecte les enregistrements des [N] pages,
et organise-les en Excel selon le modèle [template.xlsx] : date, titre, lien.
```

**Tâche d'opération (version sûre)**

```text
Remplis le [formulaire] sur [site] avec les informations de [pièce jointe].
À la fin, reste sur la page de soumission en attendant ma confirmation ; ne clique pas sur Envoyer.
```

## Processus

**Laisser l'IA proposer d'abord un plan**

```text
[description de la tâche]. Donne-moi d'abord ton plan (combien d'étapes, quels fichiers, quel nommage),
j'exécuterai après validation.
```

**Encapsuler en Skill**

```text
/create-skill Encapsule le [nom du flux] ci-dessus en Skill :
déclencheur : [une phrase] ; étapes : [étapes numérotées] ;
sortie : [format et emplacement] ; limites : [ce qui n'est pas fait].
```
