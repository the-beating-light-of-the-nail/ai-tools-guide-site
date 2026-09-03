---
title: "Mesure de la valeur : des données d'usage à la décision recalculable"
description: Décider du maintien d'un flux avec échantillons à normes communes, ROI monétaire, capacité libérable et registres de qualité et de risque
status: community-practice
verifiedAt: 2026-08-01
sources: []
---

# Mesure de la valeur : des données d'usage à la décision recalculable

## Quand il faut lire ce chapitre

Si vous voulez seulement savoir si un brouillon est bon, acceptez d'abord la tâche, sans calculer tout de suite la valeur. Revenez à ce chapitre seulement pour décider de poursuivre l'investissement dans un rapport hebdomadaire, un reporting d'exploitation générés automatiquement ou un autre flux d'équipe, en comparant temps humain, qualité, risque, investissement monétaire et capacité libérable. Retenez une phrase simple : le volume d'usage n'est pas la valeur ; la valeur doit remonter aux tâches, acceptations, registres de risque et justificatifs de coût.

## Conclu en 30 secondes

<span id="claim-usage-not-value-01" data-claim-id="claim-usage-not-value-01"></span>DAU, nombre de conversations, tokens et nombre de produits ne montrent que l'usage ; ils ne prouvent pas seuls que l'AI d'entreprise a produit de la valeur métier.

<span id="claim-capacity-separate-01" data-claim-id="claim-capacity-separate-01"></span>Le ROI monétaire et la capacité libérable doivent être rapportés séparément ; qualité et risque aussi, et n'entrent dans le périmètre monétaire qu'en cas de perte ou de gain réel vérifiable.

- Verrouiller d'abord tâches, dénominateur, base de référence et coûts humains, avant de lire les résultats du pilote.
- Des heures économisées ne valent pas automatiquement un gain monétaire ; des produits supplémentaires ne valent pas automatiquement un revenu incrémental.
- Élargir, optimiser, rester en pilote ou arrêter : toujours revenir aux seuils et portes dures enregistrés avant le pilote.

## Pourquoi c'est important

Le volume d'usage s'obtient facilement et se lit mal. Une tâche peut générer plusieurs tours de conversation et plusieurs fichiers sans passer l'acceptation ; un temps de génération réduit peut déplacer la préparation des entrées, la revue et les reprises vers d'autres. Si l'équipe ne montre que des effectifs actifs ou des « heures économisées », impossible de dire si le coût a réellement baissé, si la qualité tient, si le risque monte.

La mesure de la valeur ne sert pas à trouver un chiffre plus grand pour l'AI, mais à aider le responsable métier à allouer des ressources. Un compte de valeur recalculable permet à quelqu'un d'extérieur au pilote de revoir la conclusion le long des échantillons de tâches, relevés de temps, résultats d'acceptation, incidents de risque et justificatifs de coût, et de voir la part non monétisable.

## Méthode ou modèle

### Verrouiller d'abord scénario, échantillons et base

L'unité de mesure est un scénario à frontières claires et à résultat acceptable — pas « l'IA utilisée par toute l'entreprise ». Avant le pilote, enregistrer :

- points de départ et d'arrivée des tâches, tâches éligibles et règles d'exclusion ;
- méthode de comparaison entre période de base, période de pilote, saisonnalité et difficulté des tâches ;
- dénominateur de tâches valides, et règles de traces des tâches en échec, interrompues ou exclues ;
- temps humains de préparation des entrées, exécution, attente, revue, reprises, communication et traitement des anomalies ;
- définitions du passage au premier coup, rejet, erreur critique, incident de risque et résultat métier ;
- justificatifs ou bases d'estimation : abonnements, crédits, mise en œuvre, formation, maintenance, gouvernance et pertes dues aux échecs.

Toutes les tâches lancées conservent leur résultat. Les tâches exclues gardent leur motif ; erreurs critiques et événements non autorisés ne disparaissent pas des registres de risque du fait de l'exclusion. Base et pilote utilisent les mêmes critères d'acceptation ; en cas de changement de norme, réétablir la base, sans assembler en moyenne des données non comparables.

### Enregistrer par couches, sans calculer d'abord un score global

| Couche | Enregistrement minimal | Questions répondables | Ne prouve pas seul |
|---|---|---|---|
| Usage | Tâches éligibles, exécutions, utilisateurs, usages répétés, DAU, conversations, tokens, produits | Quelqu'un utilise-t-il, quelle charge | Qualité, gain monétaire ou résultat métier |
| Efficacité et capacité | Médianes de durée totale base/pilote, attente, étapes humaines, volume de tâches valides à normes communes | Où le temps change, quelle capacité libérable | Que la dépense a baissé |
| Qualité | Passage au premier coup, modifications humaines, reprises, erreurs critiques, résultats de revue professionnelle | La livraison atteint-elle le même standard | Que le risque est acceptable |
| Risque | Événements non autorisés, problèmes de confidentialité et de permissions, mauvais objets, pertes d'échec et résultats de reprise | Conditions d'arrêt ou portes dures déclenchées ? | Que la valeur métier compense le risque |
| Monétaire | Gains réalisés, coûts incrémentaux, justificatifs, attribution et sensibilité | Le résultat monétaire réalisé est-il recalculable | La valeur future de la capacité non monétisée |

### Utiliser l'unique norme monétaire et de capacité

<span id="claim-cash-roi-formula-01" data-claim-id="claim-cash-roi-formula-01"></span>Recommandation de ce livre : le ROI monétaire n'intègre que des gains monétaires déjà réalisés ou justifiables de façon vérifiable, et compte tous les coûts incrémentaux, de la préparation des entrées et de la revue humaine jusqu'à la gouvernance et aux pertes d'échec.

```text
Gain monétaire réalisé = dépenses réellement réduites
               + dépenses évitées avec base budgétaire prouvée
               + marge brute incrémentale attribuable

Coût incrémental total = abonnements et crédits + mise en œuvre + formation + préparation des entrées + revue humaine
           + reprises + maintenance + gouvernance + pertes d'échec réalisées

Gain monétaire net = gain monétaire réalisé − coût incrémental total
ROI monétaire = gain monétaire net ÷ coût incrémental total

Capacité libérable = (médiane de la durée totale par tâche de base − médiane du pilote)
             × volume de tâches valides à normes communes
```

Gains et coûts monétaires doivent utiliser la même période statistique, la même devise et les mêmes normes de prix. Coûts ponctuels et coûts récurrents figurent séparément ; pour une décision inter-cycles, divulguer la règle de traitement des coûts ponctuels, la période couverte, les coûts récurrents de chaque période et les postes non comptés, en se soumettant aux règles financières de l'organisation. Interdit de mêler revenu annuel et coût mensuel, ou de mettre dans un même ROI monétaire des revenus prévisionnels et des coûts d'une période réalisée.

Quand le coût incrémental total est inférieur ou égal à 0, ne pas calculer ni afficher de ROI monétaire ; rapporter le gain réalisé, le gain net, le coût incrémental, la raison de sa non-positivité, les preuves et les limites statistiques — jamais remplacer les montants absolus par un « ROI infini » ou autre résultat de division.

Durées et volumes utilisent des entrées non négatives, de mêmes unités et normes : les durées base/pilote partagent unité de temps, points de départ/arrivée et règles d'échantillonnage ; le volume de tâches valides partage la même définition et le même compteur. Si la médiane de base moins celle du pilote est négative, ne pas parler de « capacité libérable » négative : rapporter en mêmes unités une occupation de capacité supplémentaire ou une perte de capacité, avec explication, sans compensation par les gains monétaires.

La capacité libérable est un volume de temps, pas un revenu. Ce n'est que si l'organisation réduit réellement ses dépenses, évite des dépenses sur un budget existant ou forme une marge brute incrémentale attribuable que le montant correspondant entre dans le gain monétaire réalisé. Recrutement évité sans budget approuvé, réaffectation du temps des employés, fichiers ou conversations supplémentaires se divulguent dans les résultats non monétaires.

### Maîtriser attribution, annualisation et double comptage

Chaque rapport de valeur doit indiquer simultanément période statistique, règles d'échantillonnage, hypothèses d'attribution et intervalles de sensibilité bas/moyen/élevé. L'analyse de sensibilité ne fait varier que les hypothèses clés déjà divulguées — volume de tâches valides, coût humain, part attribuable — sans toucher portes dures et registres factuels.

Un pilote court ne s'annualise pas sans condition. Pour un scénario budgétaire, lister séparément cycle métier, saisonnalité, plafond de volume de tâches, coûts de maintenance et taux d'échec hypothétiques, en précisant qu'il s'agit d'une prévision, non d'un gain réalisé. Accélération de livraison, montants d'évitement de perte de qualité et coût humain ne se comptent pas deux fois ; un même résultat n'entre que dans un poste monétaire, avec le chemin de calcul conservé.

Qualité et risque se rapportent par défaut séparément. Seules les dépenses de reprise, indemnisations, pertes ou gains déjà survenus, à montant vérifiable et attribution claire, entrent dans le compte monétaire selon les mêmes règles de justificatifs. Ni l'efficacité moyenne ni le gain net ne compensent erreurs critiques, actions non autorisées et autres échecs de portes dures.

### Décider avec les seuils enregistrés

Le rapport de valeur ne fixe pas de seuils après-coup. La décision cite le [registre de seuils du chapitre 10](/fr/qwenwork/ch10-pilot-roadmap) :

- **Élargir** : toutes portes dures applicables passées, indicateurs cibles aux seuils enregistrés, preuves à l'appui du périmètre élargi de tâches et de permissions.
- **Optimiser** : portes dures non échouées, mais entrées, point d'entrée, porte de qualité ou étapes humaines avec des points d'amélioration vérifiables ; retester après modification.
- **Rester en pilote** : direction de valeur encore incertaine, échantillons ou cycle métier insuffisants ; continuer à collecter des preuves à périmètre limité.
- **Arrêter** : porte dure déclenchée, résultat acceptable impossible, coût incrémental inacceptable, ou valeur de la poursuite des preuves insuffisante.

### Exemple d'action bureautique : faut-il continuer à investir dans un rapport ou reporting généré automatiquement

La décision ne regarde pas combien de personnes ont ouvert le flux, mais sépare cinq choses sur le même lot de tâches. Consigner d'abord version des entrées, modifications humaines, anomalies, acceptation et résultat final, puis confronter à la base, aux seuils et aux portes dures enregistrés avant le pilote.

| Partie à examiner | Comment juger avec des actions bureautiques ordinaires | Conclusion possible |
|---|---|---|
| Temps | Compter préparation des entrées, exécution, attente, revue, reprises, communication et anomalies ; comparer les médianes de durée totale par tâche base/pilote. | Montre si le temps change et quel volume de temps est libérable ; ne dit pas que du cash est déjà économisé. |
| Qualité | Consigner passage au premier coup, modifications humaines, rejets, recalculs, revue professionnelle et erreurs critiques — pas seulement les rapports finalement adoptés. | Montre si la livraison atteint encore le même standard ; ni le passage de stade ni l'efficacité moyenne ne masquent une erreur critique. |
| Risque | Enregistrer en totalité accès non autorisés, diffusions, écritures, mauvais objets, problèmes de confidentialité, reprise et vérification du rétablissement. | Montre si une condition d'arrêt est déclenchée ; les statistiques de valeur ne compensent pas un échec de porte dure. |
| ROI monétaire (rendement de l'investissement en numéraire) | Ne compter en gains que les dépenses réellement réduites, les évitements fondés sur un budget ou la marge brute incrémentale attribuable, en déduisant abonnement, mise en œuvre, formation, revue, reprises, maintenance, gouvernance et pertes réalisées. | Montre si le résultat monétaire réalisé se recalcule ; heures économisées, fichiers ou conversations supplémentaires ne s'écrivent pas directement en gains monétaires. |
| Capacité libérable | Calculer par la formule l'écart des médianes de durée multiplié par le volume de tâches valides à normes communes ; rapporter séparément vers quoi les personnes peuvent se tourner, sans le traiter en revenu. | Montre si un volume de temps est libéré ; seule une récision réelle des dépenses, un évitement budgétaire approuvé ou une marge attribuable entre dans le gain monétaire. |

Par exemple, un rapport hebdomadaire généré plus vite mais avec plus de revue humaine et de reprises : le temps ne s'améliore pas nécessairement, la qualité s'explique séparément, et le ROI monétaire ne se comble pas avec des économies de salaire imaginaires. Autre cas : un reporting plus utilisé, mais une erreur critique de norme change le jugement métier — arrêter d'abord, protéger l'original, reprise humaine et vérification du rétablissement, puis mettre à jour le compte de valeur ; ni un usage élevé ni une génération à l'heure ne justifient de poursuivre l'investissement. Ce n'est qu'avec toutes portes dures passées, seuils enregistrés atteints et preuves du nouveau périmètre que l'on « élargit » ; seulement avec des portes dures non échouées mais un processus encore à améliorer, on « optimise » ; échantillons ou cycle insuffisants : « rester en pilote » ; porte dure déclenchée ou acceptation impossible : « arrêter ».

On peut s'entraîner avec une forme de rapport ou de reporting choisie dans l'[atlas des cas publics du chapitre 9 (32 indices de scénarios à vérifier)](/fr/qwenwork/ch09-public-case-atlas). L'atlas aide seulement à comprendre le scénario, sans fournir votre base, vos coûts ni vos résultats de valeur ; le relevé ordinaire contient au minimum version des entrées, modifications humaines, anomalies, acceptation et résultat.

## Cas et preuves

Prenons le « rapport d'exploitation mensuel ». L'équipe consigne d'abord, dans le processus manuel, préparation des données, rapprochements, explications, relecture et reprises, puis enregistre le pilote avec les mêmes limites de tâche. Si le rapport est généré plus vite mais que les financiers passent plus de temps à recalculer et corriger, la durée totale peut ne pas baisser ; si le rapport arrive plus tôt sans réduction de dépense réalisée ni marge attribuable, l'avance se rapporte comme résultat métier ou capacité libérable, pas comme gain monétaire direct. En liant version des entrées, modifications humaines, anomalies, acceptation et résultat à la même tâche, on n'écrit pas par erreur « utilisé » pour « valeur produite ».

De même, si pendant le pilote une erreur de norme change le jugement d'exploitation, même avec une durée moyenne en baisse, il faut l'enregistrer dans les couches qualité et risque et la traiter selon les portes de validation. Supprimer les échantillons d'échec avant de calculer le taux de passage au premier coup, ou ne compter que les rapports adoptés, fausse le dénominateur.

Les formules et classifications par défaut de ce chapitre relèvent de la norme de pratique communautaire, sans valeur de norme comptable, d'avis d'évaluation ni de référence sectorielle validée. L'entreprise doit faire confirmer conjointement justificatifs, attribution et normes applicables par les responsables finance, métier et données.

## Actions pour l'entreprise

Établir un compte de valeur de scénario pour un flux sur le point d'être examiné :

1. Le responsable métier verrouille scénario, éligibilité des tâches, dénominateur, périodes de base et de pilote.
2. L'utilisateur relève par tâche préparation des entrées, exécution, attente, revue, reprises et anomalies.
3. Le relecteur de contenu consigne avec les mêmes critères d'acceptation passage au premier coup, modifications et erreurs critiques.
4. Le responsable données/sécurité enregistre en totalité les événements non autorisés, de confidentialité, de permissions et de reprise.
5. La finance ou le responsable correspondant vérifie gains monétaires, coûts incrémentaux, justificatifs et hypothèses d'attribution.
6. Calculer séparément résultat monétaire et capacité libérable, avec qualité, risque et intervalles de sensibilité en colonnes distinctes.
7. Décider selon les seuils d'avant-pilote d'élargir, optimiser, rester en pilote ou arrêter, en consignant approbateurs et périmètre suivant.

Signaux d'arrêt : normes différentes entre base et pilote ; tâches en échec disparues du dénominateur ; revue ou reprises humaines non chronométrées ; heures économisées multipliées directement par des salaires pour faire un gain ; même résultat compté dans plusieurs postes ; résultats courts annualisés sans condition ; erreurs critiques compensées par des chiffres de gain ; calcul impossible à rattacher aux tâches et justificatifs.

## Frontières et suite

Recalculable ne veut pas dire causalité prouvée par une expérimentation stricte. La comparaison avant/après peut subir effet d'apprentissage, saisonnalité et difficulté des tâches ; les tâches rares et complexes se prêtent mieux à la divulgation de cas complets, de revues professionnelles et de limites qu'à une moyenne stable déguisée. Le résultat monétaire reste soumis aux règles financières de l'organisation et aux exigences comptables applicables.

La mesure de la valeur décide si le flux mérite un investissement continu, pas de la feuille de route officielle du produit. Les recommandations produit, partenaires et écosystème doivent distinguer faits publics, combinaisons testées, inférences plausibles et hypothèses à vérifier, pour éviter d'écrire des recommandations comme des promesses.

[Chapitre suivant : recommandations produit et écosystème](/fr/qwenwork/conclusion)
