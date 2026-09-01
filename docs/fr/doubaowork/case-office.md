# Un seul matériau, pour produire ensemble Word, Excel et PPT

> Contexte : bilan mensuel / report de projet / retour d'événement. Une source de données brute, trois livrables d'un coup, et des chiffres qui se recoupent.

L'idée de départ était un simple bilan des ventes ; dans une seule tâche, Doubao Work a livré un Excel, un Word et un PPT — les chiffres clés des trois fichiers concordent, et il a repéré de lui-même lors de son autocontrôle une référence de formule erronée, corrigée avant livraison.

Beaucoup d'actifs rejouent ce scénario chaque mois : calculer dans Excel, rédiger les conclusions dans Word, puis synthétiser en PPT. Le flux ci-dessous a été reproduit en conditions réelles.

## Préparer les matériels

Trois fichiers locaux :

- **Détail des ventes** : 8 enregistrements, avec ville, canal, produit, chiffre d'affaires, remboursements, nombre de commandes ;
- **Contexte du bilan** : mois, objectifs et contexte métier ;
- **Exigences du management** : ce que le Word, l'Excel et le PPT doivent contenir chacun.

Cette étape compte : l'IA calcule, structure et fabrique les fichiers, mais **les faits bruts doivent venir de vous** — chiffre d'affaires, remboursements, objectifs doivent tous avoir une source.

## Un seul prompt pour cadrer les trois livrables

Les trois fichiers partagent les mêmes données de référence et sont produits dans une même tâche, ce qui facilite le recoupement. Après copie, remplacez les chemins de fichiers et les noms de sortie par les vôtres :

```text
Lis les 3 fichiers locaux suivants et produis un jeu de supports « bilan des ventes d'août 2026 » :

1. 【chemin du fichier ventes-detail.csv】
2. 【chemin du fichier contexte-bilan.md】
3. 【chemin du fichier exigences-direction.md】

Vérifie d'abord les fichiers et les champs avant de calculer. Tous les chiffres font foi du CSV :
n'en invente aucun.

Livrables : 3 fichiers téléchargeables
- Bilan-ventes-2026-08_analyse.xlsx : conserver le détail brut, ajouter une feuille de synthèse
  et une feuille de graphiques ; calculer au minimum chiffre d'affaires, chiffre net, taux de
  remboursement et nombre de commandes, avec ventilation par ville, canal et produit.
- Bilan-ventes-2026-08_rapport.docx : 1200 caractères maximum, avec conclusions clés, preuves
  chiffrées, problèmes et actions pour septembre.
- Bilan-ventes-2026-08_presentation.pptx : 8 diapositives maximum, une seule idée par page,
  les chiffres clés devant être identiques à l'Excel.

Consignes d'exécution :
1. liste d'abord les règles de calcul et la structure de livraison prévues ;
2. génère ensuite les trois fichiers et fais un recoupement croisé ;
3. donne enfin un tableau de validation précisant fichier, pages ou feuilles, chiffres clés
   et concordance ;
4. marque « à confirmer » toute information incertaine ;
5. génère uniquement de nouveaux fichiers en local : ne modifie pas les fichiers d'entrée,
   ne téléverse rien, ne publie rien.
```

Ce prompt précise volontairement cinq choses : **où sont les matériels, quelle donnée fait foi, le rôle de chaque fichier, comment vérifier avant livraison, et quels gestes sont interdits**. Avec un simple « fais-moi un bilan des ventes », il produirait quand même quelque chose — mais probablement hors cahier des charges, surtout pour les indicateurs Excel, la longueur du Word et le nombre de diapositives : mieux vaut tout fixer dès le premier tour.

## Il mobilise lui-même les compétences bureautiques

La tâche lancée, Doubao Work lit le CSV et les deux notes, puis calcule selon chiffre d'affaires, chiffre net, taux de remboursement et nombre de commandes. Aucun partenaire de travail installé en plus, aucun MCP désigné à la main : pendant l'exécution, il a appelé de lui-même les capacités tableur, document et présentation.

Sur les données de test : chiffre d'affaires de 775 000 yuans, remboursements de 36 000 yuans, chiffre net de 739 000 yuans, taux de remboursement de 4,65 %, 266 commandes — soit environ 3,3 % au-dessus de l'objectif de 750 000 yuans. Il a aussi ventilé par ville, canal et produit (par exemple 13,64 % de remboursements à Pékin, 8,33 % sur le canal WeChat entreprise) — autant de chiffres destinés au Word et au PPT : fixer d'abord les règles de calcul fait gagner beaucoup de temps de vérification ensuite.

## Trois fichiers, réellement générés, réellement ouvrables

Livré en test : Excel avec 3 feuilles (détail brut + synthèse + graphiques) ; Word de 3 pages, corps limité à 1200 caractères ; PPT de 8 diapositives, une conclusion par page ; chiffres clés identiques dans les trois fichiers.

Un incident en cours de route : lors de l'autocontrôle de l'Excel, Doubao Work a repéré que la cellule « taux de remboursement conforme ? » référençait une mauvaise cellule, a corrigé la formule et recalculé avant de livrer. Précieuse vigilance — un fichier qui s'ouvre prouve seulement qu'il s'ouvre : **l'exactitude des formules et des chiffres se vérifie à part**.

## Transposer à d'autres travaux

Avec des matériaux bruts fiables en main, changez de sujet et réutilisez :

| Scénario | Excel | Word | PPT |
| --- | --- | --- | --- |
| Bilan d'exploitation mensuel | Calculer les indicateurs | Rédiger l'analyse | Présenter au management |
| Retour de projet | Tenir les actions | Garder la trace complète | Vue pour la direction |
| Bilan d'événement marketing | Agréger leads et coûts | Capitaliser l'expérience | Montrer les résultats |
| Restitution d'étude utilisateurs | Structurer l'échantillon | Rédiger les enseignements | Synthétiser l'essentiel |

Deux habitudes à garder : **désigner une source de données unique** (« tous les chiffres font foi du CSV », pour éviter que les fichiers se contredisent) ; **exiger un recoupement croisé** (un tableau de validation listant fichiers, pages, chiffres clés et concordance, plutôt qu'un simple « terminé »).

Dans ce triptyque, ce qui coûte vraiment du temps, c'est le même contenu rebaladé : les chiffres copiés du tableur au rapport, du rapport à la présentation, et une seule retouche qui oblige à tout reprendre. Doubao Work place lecture, calcul, rédaction, tableur, présentation et autocontrôle dans une même tâche ; vous gardez les objectifs, les règles et les critères de jugement, il enchaîne les étapes répétitives — c'est cela, gagner du temps.

---

Scénario similaire : [Le terrain où Doubao Work est le plus pertinent : Feishu →](/fr/doubaowork/case-feishu)
