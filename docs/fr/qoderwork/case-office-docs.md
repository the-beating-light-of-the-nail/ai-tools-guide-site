# Étude de cas : traitement documentaire par lots et multimédia

Tri de CV, documents de commerce extérieur, archivage de tickets, traitement audio/vidéo — ces tâches documentaires « à règles claires, gros volume, erreurs faciles » sont le terrain de jeu de l'IA bureautique.

> Sources : guide pratique CSDN, bibliothèque officielle de cas utilisateurs, tests communautaires (indiqués dans le texte).

## Scénario 1 : tri par lots de 115 CV (test CSDN)

```text
Parcours les 115 CV Word du [dossier de CV] et filtre selon cette annonce :
- Anglais CET-6 ou IELTS 6.0 minimum
- Expérience d'animation de comptes Xiaohongshu ou Instagram
- Bonne connaissance des algorithmes des réseaux sociaux internationaux
Archive les candidats retenus dans le dossier « CV-retenus-ops-international » ;
produis un Excel : nom, coordonnées, niveau d'anglais, expérience d'animation, adéquation (1-10), motif de recommandation.
```

Environ **1,5 minutes** en test réel ; exemple de sortie : « adéquation 8, IELTS 6,5, 3 mois d'animation d'un compte Instagram ». Attention : le score d'adéquation est indicatif ; la relecture avant l'entretien final reste indispensable.

## Scénario 2 : structuration de Tech Packs de commerce extérieur (cas utilisateur officiel)

Un suivi de production textile traite par commande plus de 20 pages de PDF en anglais, 30+ points de mesure (POM), des tableaux de tolérances et des valeurs fractionnaires (1/2", 3/4") pour 7 tailles. Manuellement 2-3 heures par commande — une confusion de demi-pouce avait déjà coûté plus de 200 000 yuans de reprises. Méthode : un dossier par commande « commande-2024SS-client-ABC », désigné dossier de travail :

```text
Extrais un par un les points de mesure du Tech Pack et traduis-les en chinois :
structure en colonnes : zone mesurée | nom anglais | nom chinois | tolérance (+/-) ;
une ligne par taille ; les valeurs fractionnaires gardent leur précision d'origine (1/2", 3/4").
Sois particulièrement attentif à l'exactitude des unités fractionnaires : la qualité de production en dépend directement.
```

Résultat : **2-3 heures par commande → 10 minutes pour 3, précision 100 %**. La réutilisation tient en une phrase : « deux nouveaux Tech Packs de Styles viennent d'arriver, traite-les au format précédent. » — c'est la puissance de la réutilisation continue du [dossier de travail](/fr/qoderwork/04-files).

## Scénario 3 : archivage de photos de notes de frais (cas utilisateur officiel)

Problème : des noms de fichiers en chaînes aléatoires. Instruction en quatre points :

```text
Reconnais sur chaque photo du [dossier de tickets] la date, le montant, le marchand et le type (restauration/transport/hébergement/autre) :
1. Renomme au format « date-type-montant-marchand.jpg » (ex. 20260301-restauration-128yuan-restaurantX.jpg)
2. Archive dans des sous-dossiers par type
3. Génère un Excel récapitulatif de notes de frais (date/type/montant/marchand/remarque)
Affiche d'abord un aperçu de la reconnaissance ; je validerai avant le renommage.
```

Reconnaissance OCR + classement + renommage en une fois.

## Scénario 4 : le triptyque multimédia

**Audio vers sous-titres bilingues** (CSDN) : téléversez le MP3 →

```text
Génère des sous-titres SRT avec une précision de timeline à la seconde, et produis aussi un Word à trois colonnes « temps + chinois + anglais »,
enregistré dans le dossier « comptes-rendus-reunions ».
```

Le SRT s'importe directement dans CapCut.

**Conversion vidéo en GIF par lots** (test de Chenmo Wang'er) :

```text
Convertis toutes les vidéos du dossier en GIF de moins de 10 Mo, vitesse doublée,
et annote clairement durée de la vidéo, date de génération et contexte d'usage.
```

Tous conformes à la limite de 10 Mo et annotés — en remplacement d'une demi-heure de « capture → montage → export → réglages de fréquence en boucle ».

**PPT vers vidéo** (test de Xu Jingfeng) :

```text
@ [presentation.pptx] ouvre et parcours chaque diapositive, et fais-en une vidéo courte, la plus brève possible.
```

Enregistrement du défilement, sous-titres et voix off assemblés automatiquement.

## Synthèse des méthodes

| Point commun | Éléments de conception |
| --- | --- |
| Règles claires (champs/formats fixes) | Écrire la liste des champs et le format dans l'instruction |
| Gros volume | Traitement par dossier + fichier modèle |
| Erreurs faciles (unités/précision/nommage) | Insister séparément sur les contraintes critiques (« l'unité fractionnaire conditionne la qualité ») |
| Réutilisation nécessaire | Figer en Skill une fois validé, déclenchement en une phrase |

Dernière règle de validation générale : **avant de remettre un livrable à quelqu'un, passez-le vous-même en entier** — contrôlez trois fichiers champ par champ, ouvrez les GIF pour voir s'ils se lisent, vérifiez les formules Excel.
