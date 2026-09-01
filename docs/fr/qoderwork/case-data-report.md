# Étude de cas : analyse de données et rapports d'étude

Du « tableau de cent mille lignes » au « PPT d'étude avec sources », ce chapitre couvre l'approche données de QoderWork.

> Sources communautaires : CSDN [« Guide pratique le plus récent d'Alibaba QoderWork »](https://blog.csdn.net/weixin_43107715/article/details/157585560) (janv.-fév. 2026, 29 000 lectures) et bibliothèque officielle de cas utilisateurs.

## Scénario 1 : un CSV de cent mille lignes en quatre points

Test CSDN : téléversement d'un CSV de 10634 lignes (un autre scénario atteint la centaine de milliers), analyse multidimensionnelle en une seule instruction :

```text
Analyse ce CSV de fréquentation touristique :
1. Groupe par « type de site » (musées/villages d'eau) ;
2. Calcule l'effectif total, les effectifs homme/femme et le ratio (1 décimale) ;
3. Produis une synthèse Excel + un histogramme coloré par sexe ;
4. Enregistre dans le dossier « rapports-donnees/202601 ».
```

Le panneau de surveillance décompose automatiquement en quatre étapes : lecture → calcul groupé → génération des graphiques → enregistrement. En test réel, un jeu de l'ordre de cent mille lignes passe de **2 heures à la main à environ 30 secondes**.

Le modèle officiel d'analyse en quatre dimensions pour un scénario analogue (journal des ventes de 10634 lignes) :

```text
@journal-ventes.xlsx : analyse selon trois axes « commercial » (clients/types de dossiers/CA total/CA par tête),
« mois » (tendance/évolution), « client » (Top 20 contribution/concentration),
produis un rapport (tableaux+graphiques), puis traduis-le en japonais et en anglais.
```

La valeur n'est pas dans la « vitesse », mais dans le **changement de dimension à volonté** — un reporting classique exige de tout refaire quand l'angle change ; ici, une phrase suffit.

## Scénario 2 : le PPT d'étude avec sources

```text
Étudie le marché du [vêtement outdoor] et fais un PPT de 12 pages :
- Dimensions : revenus 2025 et prévisions 2026, parts des 5 premières marques (Patagonia, The North Face, etc.),
  part des produits durables, croissance des canaux en ligne
- Structure : couverture → sommaire → taille de marché → analyse des marques → tendances → synthèse
- Graphiques : courbes pour les tendances, secteurs pour les parts, barres pour les comparaisons
- Toutes les données avec leur source (Statista / IBISWorld) ; marquer « à vérifier » ce qui est introuvable
```

Tout est dans le dernier point : **chaque donnée avec sa source**. Les chiffres de marché générés par l'IA doivent être traçables, sinon une seule question en réunion fait tout s'écrouler. Après génération, la conversation permet d'ajuster couleurs et mise en page.

## Scénario 3 : le pipeline de rapport sur des données de ventes à dix mille lignes

Les quatre étapes standard du cas officiel type :

```text
@sales_data.csv :
1. Décrit le nombre de lignes/colonnes et les types de champs
2. Calcule par catégorie le chiffre d'affaires et le prix moyen, et liste le Top 10 des produits
3. Analyse la tendance mensuelle
4. Génère un rapport HTML interactif (tracés Python appelés automatiquement)
```

## Méthodologie : cinq habitudes pour les tâches de données

1. **Laisser d'abord l'IA décrire les données** (signification des champs, données sales, valeurs manquantes) ; ne lancer l'analyse qu'une fois la compréhension alignée ;
2. **Écrire les définitions d'indicateurs dans l'instruction** (« marge brute = marge/CA »), ne laissez pas l'IA deviner ;
3. **Lister les valeurs aberrantes séparément**, sans les noyer dans une moyenne ;
4. **Choisir vous-même les types de graphiques** (courbes pour les tendances, secteurs pour les parts, barres pour les comparaisons) : le choix par défaut de l'IA ne convient pas toujours au contexte du reporting ;
5. **Contrôler trois chiffres** à la main contre le fichier source — le risque d'erreur de calcul de l'IA est faible mais réel, et le coût d'un échec en réunion est élevé.

## Note sur les coûts

Les tâches de données consomment beaucoup de tokens en lecture de gros fichiers. Pour maîtriser les coûts : déroulez le flux avec un [modèle standard](/fr/qoderwork/03-first-task), validez les résultats intermédiaires, puis ne basculez sur le palier phare qu'à la dernière étape du rapport. Voir [Mémoire, coûts et environnement sécurisé](/fr/qoderwork/adv-memory-cost).

---

Chapitre suivant : [Automatisation du navigateur : 230 articles de Comptes officiels organisés →](/fr/qoderwork/case-browser)
