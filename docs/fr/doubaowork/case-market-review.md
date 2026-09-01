# Après la clôture, transformer les mouvements du marché en liste de recherche pour demain

> Contexte : le debrief post-clôture et le rapport quotidien du portefeuille d'observation sont souvent traités comme deux tâches distinctes, alors qu'ils reposent sur la même chaîne d'information — le debrief répond à « ce qui s'est passé aujourd'hui », le rapport quotidien emporte les questions restées sans réponse vers demain. Quand les deux documents ne se raccordent pas, il faut tout reprendre à zéro le lendemain : cotations, communiqués et actualités.

Test réalisé : d'abord un debrief sur quatre valeurs (Kweichow Moutai, CATL, Foxconn Industrial Internet, Zijin Mining), puis l'ajout de Foxconn Industrial Internet, Zhongji Innolight, Eoptolink et Cambricon dans un portefeuille d'observation dédié à la puissance de calcul IA — même travail d'information post-clôture, mais **l'explication ponctuelle et le suivi continu s'écrivent de façon totalement différente**.

## Partie 1 : le debrief post-clôture

Outil : dans « Skill · Connecteur · Partenaire », rechercher « **Rapport quotidien sur valeurs individuelles** » pour charger la capacité. Attention : le nom de la capacité n'est pas la source des conclusions ; il organise le flux de travail, et chaque chiffre doit rester soumis à un audit de source et de méthode.

La date, les valeurs et les sources sont figées dès le départ — la date ne doit pas figurer seulement dans le titre, elle doit aussi borner la collecte des cotations, communiqués et actualités :

```text
Fais le debrief de la clôture de la Bourse chinoise du 28 août 2026 pour Kweichow Moutai 600519,
CATL 300750, Foxconn Industrial Internet 601138 et Zijin Mining 601899 : ce qui s'est passé
dans la journée.

Vérifie d'abord que ce jour était bien une séance de trading, puis vérifie pour les quatre valeurs
le cours de clôture, la variation, le montant des transactions, le taux de rotation, les communiqués
de société et les actualités publiques du jour. Tous les chiffres doivent préciser date, unité et
source d'origine. Pour les événements de société, reviens en priorité à la bourse, au site cninfo
ou aux communiqués officiels ; si l'original est inaccessible, indique la lacune, ne transforme pas
un résumé de recherche en fait établi.

Identifie les principaux événements de société, variables sectorielles et facteurs de marché ayant
influencé les quatre valeurs. Sépare les faits confirmés, les explications courantes du marché et
les hypothèses restant à vérifier : deux événements survenant le même jour ne peuvent pas être
présentés directement comme causalité.

Produis en fin de compte : un résumé de clôture d'une page, un tableau des quatre valeurs,
une chronologie des événements et cinq questions à vérifier la séance suivante.
Ne donne aucun point d'achat ou de vente, et ne transforme pas la variation d'un jour en tendance
de long terme.
```

Quatre exigences fermes : confirmer d'abord la séance de trading ; dater et unités sur chaque chiffre ; priorité à la divulgation officielle pour les événements de société ; faits et interprétations dans des colonnes séparées ; et des questions traçables en sortie. Elles restreignent la liberté de la réponse, mais donnent à la vérification ultérieure des objets précis.

### L'attribution n'est pas un récit, c'est un audit de preuves

Le tableau des quatre valeurs et la chronologie arrivent vite ; le problème se situe dans le « pourquoi ça a bougé » : une partie des montants et flux provient de médias financiers ou de pages agrégées, impossibles à rapprocher sans consulter la page d'origine ; la réponse place aussi communiqués, rumeurs de marché et performance de l'action dans des phrases voisines — sans employer « entraîné », le lecteur peut y voir une causalité confirmée. Ne la laisse pas ajouter des justifications : fais plutôt **un audit d'attribution dédié, dans la même conversation** :

```text
Audite ta réponse précédente. Repère phrase par phrase toutes les formulations attribuant une
variation ou établissant une causalité, et répartis-les en trois colonnes : « fait confirmé »,
« explication de marché », « hypothèse à vérifier ».
Pour chaque ligne, donne le lien de preuve et l'heure de publication. Les phrases aux preuves
insuffisantes sont simplement rétrogradées, sans rédiger de nouvelles justifications.
Termine par un résumé de moins de cinq cents mots, prêt à être inséré dans le debrief post-clôture.
```

Au second passage, elle identifie d'elle-même les attributions médiatiques, les déductions de séance et les sources de plateformes secondaires, et rétrograde les contenus mal étayés — le résumé conserve les cotations du jour et les événements de société, mais n'invente plus une cause pour chaque variation.

Les sources se répartissent sur trois niveaux, **le suivant ne peut pas écraser le précédent** : bourse et communiqués de société confirment les faits de société → une source de cotation stable fournit prix et volumes → médias et commentaires de marché n'apportent que des explications à vérifier. En cas de conflit entre média et communiqué, le texte conserve le communiqué et inscrit le conflit dans la liste de questions de la séance suivante. Les définitions du montant des transactions, du taux de rotation et des flux ne coïncident pas forcément d'une source à l'autre : des décimales ne suffisent pas à les ranger dans le même tableau ; l'heure des communiqués doit aussi être lue selon la séance (divulgation pré-ouverture, fuite en séance, publication post-clôture n'ont pas le même poids dans le debrief du jour).

### Un livrable réutilisable dès le lendemain

Le dernier tour ne cherche plus de nouvelles explications, il resserre sources, date limite et niveau de causalité :

```text
À partir de l'audit d'attribution déjà réalisé, produis la version finale livrable de ce chapitre.
La date du debrief reste le 28 août 2026, les valeurs restent les quatre actions.

Revérifie pour chaque élément (cours de clôture, variation, montant des transactions, taux de
rotation, communiqués, actualités du jour) la date, l'unité, le lien d'origine et l'heure réelle de
publication. Les données de flux sans source originale stable sont supprimées, sans les remplacer
par des valeurs agrégées de méthode floue. Toutes les causes de variation restent réparties en
« faits confirmés », « explications courantes de marché », « hypothèses à vérifier » ; seuls les
éléments dont la preuve précède le mouvement de prix et étaye une relation d'influence peuvent
figurer comme facteur explicatif.

Produis le fichier « Debrief-quatre-valeurs-2026-08-28.md » avec le tableau des quatre valeurs,
la chronologie, le tableau de revue des sources, un résumé de clôture de moins de cinq cents mots,
cinq questions de vérification pour la séance suivante et une liste de contrôle point par point.
Enregistre sous un nouveau fichier en conservant la version précédente pour comparaison.
Liste explicitement les chiffres et attributions supprimés ou rétrogradés. Ne donne aucun conseil
d'achat ou de vente.
```

Le lendemain, en ouvrant le fichier, regarde d'abord la date de la tâche et le tableau des quatre valeurs (pour confirmer « quel jour, quelles actions »), puis suis la chronologie pour vérifier méthodes de calcul et ordre des événements — **une nouvelle parue après le mouvement de prix ne peut pas expliquer rétroactivement la séance**.

## Partie 2 : transformer un debrief ponctuel en observation continue

Un portefeuille d'observation gère la continuité : chaque question laissée hier doit avoir demain un statut « confirmée, invalidée ou en attente ». L'outil devient la capacité « **Analyse des tendances du marché** » :

```text
Génère un rapport quotidien post-clôture du 28 août 2026 pour le portefeuille d'observation
« puissance de calcul IA », avec Foxconn Industrial Internet 601138, Zhongji Innolight 300308,
Eoptolink 300502 et Cambricon 688256.

Vérifie les cotations, transactions, flux, communiqués de société, actualités publiques et
mouvements sectoriels du jour. Sépare faits de société, événements sectoriels, explications de
marché et informations non confirmées ; tous les chiffres précisent date, unité et source d'origine.
Deux événements le même jour ne s'écrivent pas directement comme cause de variation.

Produis le tableau des quatre valeurs, les trois choses les plus importantes du jour,
l'explication des variations anormales, les signaux à vérifier la séance suivante et les lacunes
de données. Si une donnée manque, écris-le clairement, ne la reconstitue pas.
Cette fois, génère le rapport une seule fois : ne crée pas de tâche planifiée et ne donne ni point
d'achat/vente ni conseil de position.
```

Un détail utile : quand Doubao Work produit des données boursières en temps réel, il appelle `seed_finance_search` (base issue de Tonghuashun), ce qui garantit la fiabilité de la source.

### Audit de sources et audit de dates : deux exercices séparés

Ne mélange pas les deux questions dans un seul « vérifie » :

```text
Audite les cotations, flux, communiqués et actualités du rapport précédent. Liste séparément les
sources de données réelles et les horodatages, et supprime les données non traçables. Réécris toutes
les explications de variations anormales en trois colonnes : preuve, explication courante, question
à vérifier. Produis enfin un rapport condensé directement copiable dans le registre du portefeuille
d'observation.

Vérifie à nouveau la date limite fixée des données. Supprime toute information — actions
américaines, actualités, informations de marché — survenue ou divulguée après le 29 août 2026,
heure de Pékin ; ne conserve que les matériels disponibles au plus tard le 28 août 2026 à 23 h 59,
heure de Pékin. Liste une à une les conclusions à réécrire du fait de ces suppressions, puis
produis le rapport révisé du portefeuille d'observation.
```

Le premier tour a révélé en test réel 4 erreurs de dates de communiqués, plusieurs liens médias morts, et des conflits de sources sur le montant des transactions et les flux de Cambricon — corrigé en un montant de trois marchés de 2 117,7 milliards de yuans (en repli de 23,2 milliards par rapport à la veille) ; pour Cambricon, seul le flux net entrant de 696 millions de yuans selon Tonghuashun a été conservé, l'autre série conflictuelle supprimée. Le second tour a retiré les variations de Nvidia, Marvell et de l'indice Philadelphie des semi-conducteurs après la clôture américaine du 28 août (heure de l'Est) et les rapports de suivi divulgués le 29 août, ainsi que toutes les déductions associées : alertes sur les marchés étrangers, signaux pour le lendemain, explications de société.

**La valeur historique d'un rapport quotidien tient à ses versions** : la première version, la version auditée des sources et la version révisée après date limite doivent toutes être conservées. En y revenant le lendemain, on sait quels chiffres ont changé et quelles conclusions ont disparu avec le retrait de matériels. Le portefeuille d'observation doit aussi maintenir l'état des questions : à chaque nouveau rapport, lire d'abord la liste de questions de la version précédente avant de mettre à jour les statuts, pour construire une recherche continue. Si rien d'important n'a changé dans la journée, écris explicitement « aucun fait clé nouveau identifié » — inutile de fabriquer une explication de marché pour remplir le quotidien.

### Le fichier final

```text
Après les deux tours d'audit (dates et sources), génère la version finale livrable du rapport
du portefeuille d'observation « puissance de calcul IA ».

La date limite reste le 28 août 2026 à 23 h 59, heure de Pékin. Revérifie les sources réelles et
horodatages des cotations, transactions, flux, communiqués, actualités et événements sectoriels.
Les données de flux de source instable ou de méthode floue sont supprimées ; les informations
survenues ou divulguées le 29 août heure de Pékin ne peuvent figurer que dans le registre des
retraits ; les reprises de médias financiers qui ne remontent pas à la société, à la bourse ou au
matériau d'origine deviennent des pistes, sans entrer dans les faits confirmés.

Produis le fichier « Rapport-portefeuille-IA-20260828.md » avec le tableau des quatre valeurs,
les trois choses du jour, les trois colonnes preuve / explication courante / question à vérifier,
les signaux de vérification pour la séance suivante, les lacunes de données, le registre des
retraits, le tableau de revue des sources et la liste de contrôle point par point. Enregistre sous
un nouveau fichier en conservant le rapport précédent et les deux relevés de vérification.
Réponds enfin explicitement : des informations postérieures à la date limite subsistent-elles dans
les conclusions officielles ? Ne donne ni point d'achat/vente ni conseil de position.
```

## En faire une tâche planifiée

Tout le flux peut être enregistré comme **tâche planifiée** : à partir de votre propre portefeuille, un rapport quotidien envoyé automatiquement chaque jour à heure fixe. Pour le réutiliser, remplacez au moins six variables : [valeurs ou périmètre de l'échantillon], [date limite figée], [période du rapport], [champs et formules], [priorité des sources], [nom du fichier final] ; figez date et échantillon avant de lancer la recherche ; le premier prompt couvre le problème, le second ne vérifie que sources, unités, formules et date limite ; les résultats vont dans des fichiers et une liste de questions, pas dans un résumé de conversation ; relisez le fichier final pour confirmer que chaque chiffre clé est traçable.

> Ce que ce chapitre produit : une page de relevé post-clôture, une chronologie et une liste de questions pour la séance suivante — **c'est un document de travail de recherche, pas une garantie d'achat, de position, d'objectif de cours ou de rendement**.

Après la clôture, générez d'abord le relevé factuel du jour, puis inscrivez dans le portefeuille d'observation uniquement ce qui change vraiment votre jugement ; le lendemain, continuez uniquement sur les points inachevés. Le rapport quotidien n'a pas besoin de produire chaque jour une opinion : il doit seulement vous dire **ce que vous avez appris aujourd'hui, et ce qui reste à éclaircir.**

---

Suivant : [Résultats publiés : d'abord la croissance, puis la qualité de la croissance →](/fr/doubaowork/case-earnings-quality)
