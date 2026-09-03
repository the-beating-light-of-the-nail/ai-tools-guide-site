---
title: Choix des scénarios et pilote 30/60/90 jours
description: Décider avec la notation unifiée, le registre de seuils et les portes de validation quand un scénario entre en usage d'équipe et à grande échelle
status: community-practice
verifiedAt: 2026-08-01
sources: []
---

# Choix des scénarios et pilote 30/60/90 jours

## Quand il faut lire ce chapitre

Si vous ne faites qu'organiser vos propres rapports hebdomadaires, comptes rendus ou autres brouillons à faible risque, vous pouvez sauter ce chapitre. Revenez-y seulement quand l'équipe doit utiliser en commun, traiter des documents sensibles, écrire ou envoyer automatiquement, fonctionner inter-systèmes, réutiliser à plusieurs, ou décider de poursuivre l'investissement et le déploiement. La « porte de validation » désigne ici le point de contrôle qui décide, à chaque étape, de la possibilité de continuer ; aucun prérequis de grille de notation ni de vocabulaire de gouvernance.

## Conclu en 30 secondes

<span id="claim-pilot-stage-gates-01" data-claim-id="claim-pilot-stage-gates-01"></span>Ce livre définit comme trois portes de validation uniques : candidat modèle personnel, publication de flux d'équipe et généralisation à grande échelle ; ni le temps calendaire, ni la note de scénario, ni le gain moyen d'efficacité ne les remplacent.

<span id="claim-critical-error-hard-gate-01" data-claim-id="claim-critical-error-hard-gate-01"></span>Erreurs critiques, droit, sécurité et actions non autorisées sont des portes dures non assouplissables ; efficacité, adoption et satisfaction sont des seuils expérimentaux ajustables.

- La note de scénario décide seulement qui vérifier en premier, pas qui peut contourner les portes dures.
- Chaque stade conserve échantillons, acceptations, anomalies et approbations.
- Un stade non validé ne monte pas automatiquement au 30e, 60e ou 90e jour.

## Pourquoi c'est important

L'ancienne pratique assimile souvent « fréquent et chronophage » à « digne d'être automatisé », et lit facilement 30/60/90 jours comme un élargissement au calendrier. Un scénario très noté mais aux permissions floues entre alors en production le premier, ou un succès de démonstration se retrouve écrit par erreur en capacité d'équipe réutilisable.

Avec une notation de scénario unifiée, des bases à normes communes et des portes de validation, le responsable AI ordonne les scénarios candidats, le responsable métier juge de la poursuite de l'investissement, et le responsable données/sécurité empêche que le risque soit masqué par l'efficacité moyenne. Les trois utilisent le même registre de seuils pour décider de façon traçable entre élargir, optimiser, rester en pilote et arrêter.

## Méthode ou modèle

### Compléter d'abord la carte de scénario et la base à normes communes

Les tâches candidates s'écrivent d'abord selon la [carte de scénario du chapitre 7](/fr/qwenwork/ch07-role-roadmaps) : problème métier, entrées, livrable, acceptation, actions interdites, indicateurs, risques et base de référence. Base et pilote doivent utiliser les mêmes points de départ et d'arrivée de tâche, règles d'échantillonnage et critères d'acceptation, en comptant dans la durée totale la préparation des entrées, la revue humaine, les reprises, la communication et le traitement des anomalies.

La base conserve au minimum un relevé par tâche, le type de tâche, la version des entrées, la durée totale, le résultat d'acceptation, les reprises et les incidents de risque. Les tâches fréquentes comparent en priorité médiane et distribution, pas le meilleur résultat isolé ; les tâches rares et complexes conservent la chronologie complète des cas et les conclusions de revue professionnelle, sans déguiser quelques cas en effet moyen.

Avant le pilote, la norme du dénominateur doit être enregistrée et verrouillée : éligibilité, règles d'exclusion, traitement des tâches interrompues ou en échec, et preuves de qualification de « tâche valide », « tâche éligible », « échantillon représentatif ». Base et pilote n'incluent ou n'excluent des tâches que selon cette norme ; si le périmètre métier ou la structure des tâches change, créer une nouvelle version et réétablir une base comparable, sans modifier le dénominateur a posteriori.

Toutes les tâches lancées conservent résultat et motif d'exclusion ; les tâches en échec, interrompues ou exclues restent dans le journal d'exécution. Erreurs critiques, événements non autorisés et autres échecs de portes dures sont enregistrés en totalité, sans être retirés du registre du fait de l'exclusion, ni cachés hors des dénominateurs d'efficacité, qualité, adoption ou satisfaction.

### Ordonner les scénarios candidats sur sept dimensions

Les sept dimensions se notent de 1 à 5. Sauf risque de données, plus la condition est forte, plus la note est haute ; le risque de données se note à l'envers — moins de risque, plus de points. Le 3 du tableau est l'ancre intermédiaire unifiée ; 2 signifie que la preuve dépasse 1 sans atteindre 3, 4 qu'elle dépasse 3 sans atteindre 5 ; en cas de doute, prendre la note inférieure adjacente. Sans preuve, noter 1 et inscrire à compléter — jamais masquer l'absence de preuve par un 2–4.

| Dimension | Signal à 1 | Signal à 3 | Signal à 5 | Justification minimale |
|---|---|---|---|---|
| Fréquence | Occasionnelle, échantillons répétés difficiles à former | Se produit à cycle fixe, mais volume ou quantité fluctuants | Se produit en continu avec échantillons stablement obtenables | Registre de tâches ou agenda |
| Chronophagie | Investissement total actuel très faible | Investissement humain net, mais total ou répétitivité moyens | Investissement total élevé et occupation répétitive du personnel | Durées par tâche incluant revue et reprises |
| Stabilité des entrées | Sources, champs ou versions souvent changeants | Entrées clés stables, quelques changements de champs ou de versions à traiter | Sources, champs, versions et autorisations stables | Liste des entrées, dictionnaire de champs et registre de versions |
| Clarté de l'acceptation | Jugement seulement au feeling | Partie des critères objectivement contrôlable, qualité clé encore humaine | Critères recalculables, traçables ou signables | Liste d'acceptation et échantillons de rejet |
| Réversibilité de l'échec | Erreurs difficiles à annuler et à impact externe | Récupérable par étapes humaines explicites, impact interne | Ne produit que des brouillons isolés et récupérables | Chemins de retour arrière et exercices d'échec |
| Risque de données | Données réglementées, secrètes d'organisation ou à permissions floues | Données internes à autorisation claire, usage et conservation à limiter | Données publiques ou faiblement sensibles et autorisées | Classification des données et registre d'autorisation |
| Impact métier | Aucun effet net sur cycle, qualité ou risque | Effet sur un indicateur de processus défini, mais preuves d'attribution limitées | Effet direct et mesurable sur un problème métier défini | Indicateurs métier, coût des erreurs ou registres d'attente |

```text
Score de classement candidat = fréquence + chronophagie + stabilité des entrées + clarté de l'acceptation
             + réversibilité de l'échec + risque de données (faible risque = note haute) + impact métier
```

Le score total ne sert qu'au classement des scénarios candidats d'un même tour. Un score élevé ne vaut pas faible risque et n'accorde aucune permission d'accès, d'écriture, d'envoi ou de publication ; tout scénario candidat doit passer séparément les portes dures.

### Établir l'unique registre de seuils

Chaque scénario ne maintient qu'un registre de seuils, avec les champs fixes suivants. Efficacité, adoption et satisfaction n'ont pas de chiffre uniforme inter-scénarios et doivent être enregistrées selon la base et les objectifs métier avant de voir les résultats du pilote ; les ajustements ne visent que les lots de vérification ultérieurs, sans rétro-modifier des jugements déjà rendus.

| Formule d'indicateur | Stade d'application | Valeur par défaut | Fondement | Échantillon minimal | Période d'observation | Ajustable par | Motif d'exception | Condition d'arrêt | Approbateur |
|---|---|---|---|---|---|---|---|---|---|
| Nombre d'erreurs critiques = nombre de tâches ou d'événements jugés erreurs critiques | Tous stades | 0 | Porte dure non assouplissable | Tous les échantillons du stade | Durée totale du stade | Ne peut être abaissé ; le responsable métier peut ajouter des catégories ou de la couverture | Interdit | Toute erreur critique : arrêt immédiat | Tous les approbateurs du stade |
| Nombre de données ou actions non autorisées = nombre d'événements d'accès, diffusion, écriture, suppression ou publication non autorisés | Tous stades | 0 | Porte dure juridique et sécurité | Tous les échantillons du stade | Durée totale du stade | Non ajustable | Interdit | Tout événement : arrêt immédiat | Responsable métier, responsable données/sécurité |
| Nombre d'éléments non passés juridique et sécurité = nombre d'éléments contrôlés non passés | Tous stades | 0 | Politiques organisationnelles et exigences applicables | Tous les éléments de contrôle applicables | Durée totale du stade | Ne peut être abaissé ; l'organisation peut relever | Interdit | Toute porte dure échouée : arrêt immédiat | Responsable métier, responsable données/sécurité et responsables professionnels requis |
| Taux de passage au premier coup = tâches valides passées à la première acceptation / tâches valides | Publication de flux d'équipe | Non inférieur à la base à normes communes | Porte de validation du stade de publication d'équipe | Au moins 10 échantillons représentatifs couvrant les limites prescrites | Phase de vérification 31–60 jours | Le responsable métier ne peut que relever | Interdit en dessous de la base à normes communes | Sous la base : pas de publication | Responsable métier, mainteneur de processus, responsable données/sécurité |
| Taux d'amélioration d'efficacité = (médiane de la durée totale par tâche de base − médiane du pilote) / médiane de la durée totale par tâche de base | Généralisation ou stade expérimental enregistré | Enregistré avant pilote, sans valeur uniforme inter-scénarios | Base à normes communes et objectifs métier | Exigences d'échantillons du stade de généralisation | Au moins 1 stade correspondant ou cycle métier complet | Responsable métier | Changement de structure de tâches, saisonnalité ou processus ; preuves à consigner | Non atteint : pas de généralisation ; porte dure échouée : arrêt immédiat | Approbateurs du stade |
| Taux de conformité qualité du scénario = tâches valides atteignant le standard qualité / tâches valides | Généralisation ou stade expérimental enregistré | Enregistré avant pilote ; non abaisable dans le stade | Acceptation de la carte de scénario et standards professionnels | Exigences d'échantillons du stade de généralisation | Au moins 1 stade correspondant ou cycle métier complet | Le responsable métier peut enregistrer ou relever avant le début du stade | Tout changement de norme exige une nouvelle base, sans relâchement a posteriori | Non atteint sans autre objectif atteint : pas de généralisation | Approbateurs du stade et relecteurs professionnels requis |
| Taux d'adoption = tâches valides achevées selon le processus enregistré / tâches éligibles | Stade expérimental enregistré | Enregistré avant pilote, sans valeur uniforme inter-scénarios | Vivier de tâches disponibles et journal d'exécution | Exigences d'échantillons du stade | Durée totale du stade | Responsable métier | Changement d'entrée, de population ou de vivier ; motifs à consigner | Sous le seuil : optimiser puis retester, ou arrêter | Approbateurs du stade |
| Satisfaction = somme des notes valides / nombre de notes valides | Stade expérimental enregistré | Enregistré avant pilote, sans valeur uniforme inter-scénarios | Échelle unifiée et retour anonyme | Exigences d'échantillons du stade | Durée totale du stade | Responsable métier | Changement d'échelle ou de population ; motifs à consigner | Sous le seuil : optimiser puis retester, ou arrêter | Approbateurs du stade |

Droit, sécurité, actions non autorisées et erreurs critiques sont des portes dures non assouplissables. Efficacité, adoption et satisfaction sont des seuils expérimentaux ajustables ; l'ajusteur doit consigner dans « motif d'exception » la raison, les preuves et le lot d'entrée en vigueur, avec une nouvelle approbation de l'« approbateur ».

### Définition fixe de l'erreur critique

Une « erreur critique » inclut au minimum :

1. Une erreur de chiffre ou de norme qui change l'orientation d'une décision métier.
2. Une source centrale fabriquée ou intraçable.
3. Une erreur de personne, d'objet, de date, de montant ou de destinataire.
4. Une conclusion à fortes conséquences sans la revue professionnelle requise.
5. Un accès, une diffusion, une écriture, une suppression ou une publication de données non autorisés.
6. Un défaut rendant le livrable impossible à ouvrir, recalculer ou récupérer.

Ces catégories minimales, ainsi que droit, sécurité et actions non autorisées, ne peuvent être rétrogradées. Avant chaque pilote de scénario, le responsable métier et le responsable données/sécurité complètent conjointement la liste des erreurs critiques propres au scénario et leurs preuves de qualification. Seulement pour les problèmes de qualité ambiguës des catégories complémentaires, les deux responsables peuvent consigner conjointement dans le registre le motif de non-classement en erreur critique ; cette note ne réécrit pas les catégories minimales ci-dessus.

### Exécuter les trois portes de validation par défaut

Les normes suivantes sont les portes de validation par défaut :

> Candidat modèle personnel : 5 échantillons représentatifs normaux + 2 échantillons aux limites ; 0 erreur critique ; 0 donnée ou action non autorisée ; un relevé d'acceptation à chaque fois ; approbateurs : utilisateur et responsable métier.

> Publication de flux d'équipe : au moins 10 échantillons représentatifs, couvrant données vides, changements de champs, doublons, permissions expirées, conflits de chiffres clés et exécutions répétées ; 0 erreur critique ; taux de passage au premier coup non inférieur à la base à normes communes ; toutes portes dures passées ; approbateurs : responsable métier, mainteneur de processus, responsable données/sécurité.

> Généralisation : par défaut au moins 20 tâches valides couvrant 1 cycle métier complet ; pour les tâches rares complexes, au moins 3 cas complets, 2 relecteurs professionnels indépendants et des conclusions concordantes ; 0 erreur critique ; indicateurs cibles d'efficacité ou de qualité aux seuils enregistrés ; aucun problème de permissions non résolu ; approbateurs : responsable métier et responsable données/sécurité.

Candidat modèle personnel, publication de flux d'équipe et généralisation doivent passer toutes les portes dures applicables. Même de petit périmètre et à actions à faible risque, le candidat modèle personnel ne contourne pas les portes dures applicables de droit, sécurité, autorisation de données ou actions non autorisées.

Les approbateurs ci-dessus ne sont que l'ensemble minimal d'approbation métier de chaque stade. Si le registre de seuils, les portes données/sécurité, juridiques ou professionnelles exigent d'autres approbateurs, l'approbateur final est l'union des « approbateurs minimaux du stade » et des « approbateurs de toutes les portes dures applicables » ; aucune des deux parties ne peut être omise.

Le responsable métier peut relever les standards ; abaisser un seuil expérimental exige un motif dans le registre ; les portes dures ne s'abaissent pas. L'approbation doit pointer vers une version précise du flux, une liste d'échantillons, des preuves d'acceptation et les problèmes non résolus — pas un simple « d'accord pour généraliser ».

### Mapping fixe 30/60/90 jours et règles d'arrêt

Les jours 0–30 achèvent la vérification du candidat modèle personnel ; les jours 31–60 celle de la publication de flux d'équipe, seule condition pour publier en Skill d'équipe ; les jours 61–90 celle de la généralisation, seule condition pour composer des kits d'experts de poste. Le temps calendaire ne remplace pas les portes de validation ; un stade non validé ne monte pas automatiquement à l'échéance.

À l'apparition d'une diffusion externe, d'une suppression, d'un paiement, d'une modification de référentiel, d'un grave problème de confidentialité ou d'une erreur métier critique non autorisés : arrêt immédiat, reprise humaine et retour d'expérience de l'incident ; nul gain moyen d'efficacité ne compense un échec de porte dure. Reprise, protection des originaux, correction et rétablissement suivent la [chaîne de reprise de l'automatisation](/fr/qwenwork/ch05-automation-boundaries).

### Exemple d'action bureautique : comment un rapport ou compte rendu parcourt les 30/60/90 jours

Voici l'action bureautique « organiser les notes de réunion en brouillon de rapport hebdomadaire », sans nouveau seuil — seulement la traduction des portes existantes en qui confirme quoi et quand. Chaque exécution conserve d'abord la version des entrées, puis consigne modifications humaines, anomalies, acceptation et résultat final ; le passage d'un stade n'accorde pas automatiquement de permissions, chaque action reste à juger selon le chapitre 11.

| Fenêtre de vérification | Actions et confirmations réelles | Comment s'arrêter et revenir en arrière en cas d'échec |
|---|---|---|
| Jours 0–30 : candidat modèle personnel | L'utilisateur organise son rapport ou compte rendu avec 5 échantillons représentatifs normaux et 2 aux limites. L'utilisateur confirme provenance et version des entrées, actions interdites et modificabilité du brouillon ; le responsable métier confirme normes métier, acceptation et conditions d'arrêt ; le responsable données/sécurité et les autres responsables de portes dures confirment les autorisations selon le périmètre applicable. | Si un chiffre clé est non recalculable, un fait sans source, un échantillon aux limites en erreur ou une porte dure échoue : arrêt immédiat de la montée en gamme ; protéger les enregistrements originaux, reprise humaine, consigner modifications et anomalies, puis nouvelle acceptation après correction. Un brouillon dont la récupération n'est pas prouvée ne passe pas au stade suivant. |
| Jours 31–60 : publication de flux d'équipe | La version validée personnellement est confiée à des membres restreints, en couvrant données vides, changements de champs, doublons, permissions expirées, conflits de chiffres clés et exécutions répétées. Le responsable métier confirme les limites des tâches d'équipe et l'exigence de passage au premier coup ; le mainteneur de processus confirme version, tests, journaux et retour arrière ; le responsable données/sécurité confirme permissions, durées d'autorisation et capacité de désactivation ; le relecteur de contenu confirme faits et chiffres. | Si les échantillons d'équipe échouent, que la version ou les permissions dérivent, que les journaux ne localisent pas les objets, ou qu'une porte dure échoue : suspendre la publication d'équipe et les écritures ; revenir à la dernière version identifiable ou au processus manuel, protéger les originaux, corriger puis retester le périmètre touché. Le passage de la porte ne vaut pas non plus obtention des permissions G2 ou G3. |
| Jours 61–90 : généralisation | Élargir au périmètre organisationnel approuvé sur un cycle métier complet, en confirmant seuils d'efficacité ou de qualité, couverture d'échantillons, limites de permissions, journaux d'exécution et reprise humaine. Le responsable métier confirme l'opportunité d'élargir ; le responsable données/sécurité confirme l'absence de problèmes non résolus sur données et permissions ; les relecteurs professionnels requis confirment les contenus à fortes conséquences ; le mainteneur de processus confirme les capacités d'exécution et de rétablissement. | Si les seuils cibles ne sont pas atteints, ou en cas de problème de permissions, d'erreur critique ou d'irrécupérabilité : arrêter la généralisation, annuler ou réduire le périmètre ajouté, désactiver la planification et reprendre en manuel ; retour au flux d'équipe ou au processus manuel. Après correction, reverifier le rétablissement ; ni efficacité moyenne, ni adoption, ni satisfaction ne compensent un échec de porte dure. |

Le « relevé » de cet exemple n'exige pas d'abord un reporting complexe : il doit au minimum remonter à la version des entrées utilisée, aux modifications humaines de l'utilisateur, aux anomalies, à qui a accepté selon quel standard, et au résultat final — passage, rejet, maintien en pilote ou arrêt. On peut prendre l'[atlas des cas publics du chapitre 9 (32 indices de scénarios à vérifier)](/fr/qwenwork/ch09-public-case-atlas) comme vivier de sujets et convertir ses formes de produits en cartes de scénario ; les indices de l'atlas ne sont ni la base ni les résultats de stade de votre organisation.

## Cas et preuves

Prenons le « brouillon de rapport d'exploitation hebdomadaire » : l'équipe peut le classer en tête des scénarios candidats pour sa fréquence, son coût humain et la stabilité de ses champs, mais doit d'abord confirmer que les chiffres clés remontent au détail original, que données vides et changements de champs ne génèrent pas silencieusement de conclusions erronées, et que le brouillon n'est pas diffusé sans approbation. Dès qu'un chiffre clé est non recalculable ou qu'une diffusion non autorisée survient, même un temps moyen de préparation nettement réduit impose l'arrêt, pas la montée en gamme. Pour le relevé, le lecteur ordinaire n'a qu'à réunir version des entrées, modifications humaines, anomalies, acceptateur et résultat dans un même registre d'exécution, pour disposer ensuite de preuves de décision.

Les scénarios de poste, démonstrations publiques et produits d'exemple aident seulement à former des hypothèses de pilote. Les pages de cas publics prouvent la forme de livraison, mais ne fournissent ni la base de votre organisation, ni preuve de permissions, ni résultats de portes ; les frontières de preuve correspondantes sont au [chapitre 8](/fr/qwenwork/ch08-research-evidence-chain). Les seuils de ce chapitre relèvent de la norme de pratique communautaire, sans engagement officiel du produit ni preuve qu'un scénario produira nécessairement un gain d'efficacité ou métier.

## Actions pour l'entreprise

Constituer pour un tour de pilote un dossier de scénario auditable :

1. Responsable métier et utilisateur complètent la carte de scénario : livrable, acceptation, actions interdites et base à normes communes.
2. Le responsable données/sécurité confirme classification des données, périmètre d'autorisation, niveaux d'action et portes dures organisationnelles.
3. Les scénarios candidats sont notés sur sept dimensions, seulement pour l'ordre de vérification.
4. Les deux responsables complètent erreurs critiques propres au scénario et preuves de qualification.
5. Remplir l'unique registre de seuils avant de voir les résultats du pilote, en verrouillant formules, échantillons, périodes et approbateurs.
6. Exécuter au stade courant tous les échantillons normal, aux limites et en échec, en conservant à chaque fois acceptations et anomalies.
7. Décider selon les portes : élargir, optimiser puis retester, rester en pilote ou arrêter, sans sauter de stade.
8. Après tout changement de version, permissions, champs ou processus, réévaluer un éventuel retour au stade précédent.

La revue lit d'abord les portes dures, puis les seuils expérimentaux et les moyennes. Tout échec de porte dure clôt directement la discussion « faut-il monter en gamme » et bascule vers reprise humaine et retour d'expérience.

## Frontières et suite

Ce chapitre définit l'ordonnancement du pilote, le registre de seuils et les seuils de déploiement ; il ne remplace pas les standards professionnels juridiques, confidentialité, finance, RH ou sectoriels. Les quantités d'échantillons sont une couverture minimale de vérification, pas une promesse de significativité statistique ; en cas de changement de distribution des tâches, divulguer les limites et réétablir une base comparable.

Avant d'entrer dans un stade, il faut encore juger indépendamment selon la gouvernance de sécurité du chapitre 11 les niveaux d'action, la sensibilité des données, les conséquences professionnelles et la responsabilité humaine. Le passage des portes d'un scénario n'accorde pas automatiquement de nouvelles permissions système ni d'autorisation d'actions à fortes conséquences.

[Chapitre suivant : sécurité, permissions et responsabilités](/fr/qwenwork/ch11-security-governance)
