# Du screening à la valorisation : harmoniser les référentiels avant de comparer et de chiffrer

> Contexte : screening d'actions, comparaison entre pairs et valorisation sont souvent traités comme trois chantiers séparés ; en réalité, c'est une seule chaîne de données — les règles de screening décident quelles sociétés entrent dans l'échantillon, le référentiel entre pairs décide quels chiffres sont comparables, et le modèle de valorisation transforme les données en hypothèses de marché. **Le moindre relâchement en amont vide de sens le prix objectif final, si précis ait-il l'air.**

Ce chapitre commence par un screening conditionnel sur CSI 300, compare ensuite Zhongji Innolight, Eoptolink et T&S Communications, et termine par une valorisation inverse avec Midea. Les valeurs changent, la méthode se chaîne : chaque étape doit laisser **des preuves ligne à ligne, les éléments non comparables et des formules recalculables**.

## Étape 1 : transformer des conditions en langage naturel en règles de screening

Avec la capacité « Outil de sélection d'actions », la date de la composition de l'indice et la date des données sont figées. Le premier prompt exige **d'expliquer les règles avant d'exécuter le scan** :

```text
Convertis les conditions en langage naturel ci-dessous en règles de screening calculables sur
le CSI 300, et exécute-les à la date de données fixée.
1. Conditions : chiffre d'affaires en croissance sur les trois derniers exercices complets,
   flux de trésorerie d'exploitation net positif sur les trois derniers exercices complets,
   ROE du dernier exercice complet d'au moins 15 %, ratio d'endettement d'au plus 70 %,
   et aucun avertissement de risque de radiation à la date des données.
2. Définis pour chaque condition : champ, formule, période de rapport, devise, traitement des
   valeurs manquantes et critères d'exclusion. Indique-moi d'abord quelles conditions sont
   directement calculables et lesquelles soulèvent un débat de méthode. Précise le nombre réel
   d'actions scannées, la date de la liste de composition et le taux de couverture des données.
3. Produis pour chaque règle l'entonnoir de screening, les sociétés retenues avec leurs valeurs
   clés, les motifs d'exclusion, et une analyse de sensibilité à ±10 % sur les seuils.
Vérifie le biais de survivant, l'usage indu de données futures et les recompositions de
l'indice. Sans scan de l'échantillon complet, marque le résultat « démonstration sur échantillon »
et ne l'écris pas « screening complet du CSI 300 ».
```

La première réponse affirme avoir lu 300 valeurs composantes, obtenu des champs complets pour 295 et retenu 32 sociétés — mais la vérification révèle deux chiffres intermédiaires contradictoires dans l'entonnoir, seulement 14 valeurs réellement requises de façon indépendante, et plusieurs erreurs de ROE. **Des chiffres agrégés sans relevé de sortie action par action ne prouvent pas un screening complet.** Envoyez l'audit de couverture :

```text
Audite l'échantillon de screening précédent. Donne le nombre total d'actions réellement lues,
celles avec tous les champs obtenus, les champs manquants, l'effectif restant à chaque étape et
la liste finale. Si la composition complète du CSI 300 à la date des données n'est pas couverte,
rétrograde immédiatement titre et conclusions en « screening sur échantillon » et supprime
toute affirmation de couverture du marché entier.
```

Doubao Work rétrograde alors le titre en « screening sur échantillon (version partiellement revue de façon indépendante) ». **Face à des preuves insuffisantes : d'abord abaisser le niveau de conclusion, ensuite compléter.** Pour pousser la tâche jusqu'au fichier final, exigez une preuve ligne à ligne pour les 300 valeurs :

```text
Le résultat précédent n'a revu de façon indépendante que 14 valeurs : cela ne prouve pas un
screening complet du CSI 300. Continue, sans plus remplacer les preuves action par action par
des quantités agrégées.

Fige la date de composition et la date des données. Obtiens et conserve d'abord la liste
vérifiable des composantes du CSI 300 à cette date (300 codes). Puis conserve pour chaque
valeur le chiffre d'affaires des trois derniers exercices complets, le flux de trésorerie
d'exploitation net, le ROE du dernier exercice complet, le ratio d'endettement et le statut
d'avertissement de radiation. Chaque ligne doit contenir : code, nom, période de rapport,
valeur de champ, unité, source, motif de donnée manquante et résultat passé / refusé aux cinq
règles.

Effectue le screening avec un script local réexécutable ; produis « CSI300-preuves-par-action.csv »,
« CSI300-script-de-screening.py », « CSI300-rapport-de-screening.md » et le journal d'exécution.
Recalcule l'entonnoir, la liste finale, les motifs d'exclusion, les statistiques de champs
manquants et la sensibilité aux seuils. Le ratio d'endettement des sociétés financières suit une
règle séparée : pas de comparaison forcée avec les non-financières.
Tire ensuite au moins 10 valeurs de la liste finale, des échantillons frontière et des exclus,
et révise-les de façon indépendante dans les rapports originaux ; en cas d'erreur, corrige
l'intégralité des données et relance.

Ne produis la liste finale que si la table de preuves contient exactement 300 codes distincts,
que le script est réexécutable et que les tirages passent ; sinon continue les calculs en
listant explicitement les manques. Pas de conseil d'achat ou de vente.
```

Une fois tout écrit sur disque, l'entonnoir donne 300→116→97→36→35→35 : 35 sociétés passent toutes les règles ; la sensibilité est recalculée valeur par valeur (seuil ROE assoupli de 10 % à 13,5 % : 42 sociétés ; durci à 16,5 % : 24). Les tirages ont aussi exposé un conflit de méthode sur le ROE (script : « moyenne pondérée prioritaire », rapport : « toujours en fin de période ») — la correction : **unifier la formule « ROE fin de période = résultat net attribuable ÷ capitaux propres attribuables en fin de période » et relancer les 300**, en signalant séparément les valeurs où pondérée et fin de période inversent le verdict, plutôt que de retoucher les 30 seules valeurs tirées.

> Un rapport qui écrit « 12 retenues sur 300 » ne prouve pas qu'il a scanné 300 valeurs. **« ROE élevé » n'est pas une règle ; « ROE pondéré supérieur à 15 % trois années de suite » en est une** ; corriger une règle, ce n'est pas changer un chiffre, c'est relancer tout l'échantillon.

## Étape 2 : avant de comparer entre pairs, harmoniser les référentiels

Dans le vivier de candidats, pas de classement immédiat. Avec la capacité « Comparaison multi-actions », périodes de rapport, unités, périmètres d'activité et définitions d'indicateurs s'unifient d'abord :

```text
À la même date limite de données, compare en transversal Zhongji Innolight 300308,
Eoptolink 300502 et T&S Communications 300394.

Compare à référentiel identique la position dans la chaîne, la structure produit, la concentration
client, la croissance du chiffre d'affaires et du résultat, la marge brute, le flux de trésorerie
d'exploitation, les dépenses d'investissement, l'effort de R&D, la valorisation et les risques
majeurs. Tous les chiffres à période, unité et niveau de source identiques.

Explique les différences entre les trois sociétés dans la chaîne des modules optiques, composants
optiques et CPO ; indique quels indicateurs se comparent directement et lesquels ne s'y prêtent
pas. Produis le tableau comparatif à référentiel commun, le meilleur atout et le point fragile
de chacune, les cinq variables qui décideront de la performance relative et les points de
vérification ultérieurs. Pas de simple premier de classe, pas de pondération de portefeuille.
```

Puis un audit colonne par colonne :

```text
Audite le tableau comparatif des trois actions. Vérifie colonne par colonne : période de rapport,
devise, unité, méthode comptable, et provenance d'une divulgation originale de la société.
Les éléments à période ou niveau de source différents sortent du tableau principal vers
« non comparable pour l'instant ». Recalcule les éléments comparables et dis ce que cela
change dans les conclusions.
```

En test, le tableau initial de 16 indicateurs n'en garde que 10 : 6 strictement comparables, 4 recalculés en TTM sur une même formule ; les 6 autres partent en « non comparable » — périodes différentes, méthode comptable non vérifiée, dette portant intérêt incomplète ou capitalisation de R&D sans justificatif. **En comparant deux fabricants de modules optiques et un fournisseur de composants en amont à leur vraie place dans la chaîne, on évite d'expliquer une marge brute élevée d'un maillon par une plus grande compétence opérationnelle.** Le fichier final ne garde que les indicateurs comparables en tableau principal, avec une annexe expliquant ce qui manque à chaque élément non comparable, sans aucun classement simpliste.

> Un même « chiffre d'affaires » peut être semestriel, annuel ou sur douze mois glissants : pas de rangement côte à côte direct. Le tableau principal compare, le tableau d'explication prévient les contresens ; l'un sans l'autre ne suffit pas.

## Étape 3 : utiliser la valorisation pour déduire ce que le markete parie

La valorisation vient en dernier. Avec la capacité « Modélisation de valorisation », entrées, formules et résultats restent séparés :

```text
Analyse, à la date de données fixée, quelles hypothèses d'exploitation la valorisation actuelle
de Midea 000333 intègre.

Extrais d'abord des rapports financiers officiels des trois derniers exercices : chiffre
d'affaires, résultat opérationnel, flux de trésorerie d'exploitation, dépenses d'investissement,
trésorerie nette et nombre total d'actions. Explique le choix entre DCF, flux de trésorerie
libres pour l'actionnaire ou comparables, et pourquoi les autres méthodes sont écartées.

Construis trois scénarios — base, optimiste, prudent — avec hypothèses de croissance, marges,
réinvestissement, taux d'actualisation et valeur terminale. Toute entrée précise source, date et
unité. Place séparément entrées, formules et résultats ; toutes les formules dans un tableau
local recalculable, sans tableur en ligne.

Déduis ensuite les trajectoires de croissance et de marge nécessaires pour justifier la
capitalisation actuelle, puis une sensibilité au taux d'actualisation et à la croissance à
perpétuité. Produis la table d'hypothèses, la fourchette de valorisation, le raisonnement inverse
et les trois variables les plus exposées à l'erreur. La fourchette ne s'écrit pas comme un prix
objectif garanti.
```

Si l'audit des formules échoue (#NAME?, références circulaires, valeurs codées en dur), **pas de rustine sur le fichier fautif : reconstruire depuis la version minimale calculable** — d'abord une table d'entrées uniquement vérifiables (période, unité, numéro de page pour chaque poste) ; puis un seul scénario de base, un seul chemin de flux de trésorerie libres, avec recalcul manuel de la valeur d'entreprise, de la valeur des fonds propres et du cours par action par un script indépendant ; seulement ensuite scénarios prudent/optimiste, valorisation inverse et table de sensibilité. Le script indépendant confronte les trois scénarios poste par poste : **écart maximal sur les résultats clés de 0,01 %** ; tant que l'audit échoue, on recalcule, sans livrer de fourchette.

> Ce que le prix de marché laisse déduire, ce n'est pas une réponse, ce sont des hypothèses. Le danger d'un modèle de valorisation n'est pas le nombre de paramètres, mais le mélange paramètres / formules / résultats — avec des données historiques fausses, le DCF qui suit se trompera plus élégamment. Une fourchette peut être large, mais chaque portion de largeur doit pouvoir s'expliquer par l'hypothèse qui la cause.

## Plus les chiffres sont précis, plus il faut pouvoir remonter à la première étape

Une fois screening, comparaison et valorisation chaînés, chaque résultat peut remonter d'un cran : pourquoi cette société est-elle dans l'échantillon — voir les preuves de screening ; pourquoi au-dessus ou en dessous des pairs — voir référentiel et non-comparables ; pourquoi la valorisation bouge — revenir aux entrées, formules et scénarios. Plus laborieux qu'un beau classement, mais plus fiable — **le vrai danger d'un modèle financier n'est pas la complexité des calculs, mais une méthode erronée qui se propage le long de toute la chaîne, habillée de certitude par ses décimales**.

---

Suivant : [Lire une société, mais aussi ses actionnaires, son management et sa gouvernance →](/fr/doubaowork/case-governance)
