---
title: "Limites de l'automatisation : rendre le système arrêtable, reprenable et récupérable"
description: Distinguer vérification machine, revue humaine, acceptation et confirmation d'action, et bâtir la chaîne de reprise en cas de défaillance
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/desktop/scheduled-tasks
  - https://qwenwork.cn/docs/desktop/computer-use
  - https://qwenwork.cn/docs/desktop/im-channels
---

# Limites de l'automatisation : rendre le système arrêtable, reprenable et récupérable

## Conclu en 30 secondes

<span id="claim-automation-human-handoff-01" data-claim-id="claim-automation-human-handoff-01"></span>Thèse de ce livre : une automatisation ne remplit les conditions de base pour entrer dans l'exploitation de l'entreprise que si, en cas d'anomalie, elle peut arrêter l'exécution, protéger les originaux, notifier les responsables, basculer en traitement humain et ne reprendre qu'après nouvelle vérification.

- Vérification automatique, revue humaine, acceptation de livraison et confirmation d'action sont quatre points de contrôle distincts.
- Désactivation, reprise humaine, retour arrière, annulation et rétablissement traitent des états différents et ne sont pas interchangeables.
- Les actions à haut risque — écriture, envoi, publication — doivent obéir aux niveaux de gouvernance et à une autorisation explicite.

## Scénario que vous pourrez rencontrer

Vous voulez que le système organise chaque semaine automatiquement le rapport ou le compte rendu : lire les fichiers de la semaine, générer la synthèse, lister les actions, puis envoyer dans le groupe. Exemple d'entrées : « comptes rendus avant le vendredi 17h00, rapport de la semaine passée et cible de conversation de groupe confirmée ». Écrivez d'abord l'arrêt, la reprise humaine, le retour arrière et le rétablissement dans la tâche, au lieu de régler un simple minuteur.

## Ce que vous obtiendrez au final

Le produit final est une carte d'exploitation de l'automatisation, structurée ainsi :

1. Conditions de déclenchement, versions des entrées et traitement des données vides ;
2. Quatre points de contrôle : vérification automatique, revue humaine, acceptation de livraison, confirmation d'action ;
3. Interrupteur de désactivation, repreneur, processus de secours, contenu de notification et périmètre d'impact ;
4. Dernière version stable, échantillons de reverification, moyen d'annulation et registre d'approbation du rétablissement.

## Faites comme ceci

1. Exécutez d'abord un flux en brouillon avec le rapport ou le compte rendu, en précisant quelles étapes sont en lecture seule et lesquelles écrivent, envoient ou publient.
2. Programmez des contrôles machine pour dates, nombres de lignes, totaux, exécutions répétées et changements de permissions, et désignez relecteur de contenu et responsable d'action.
3. **Point de contrôle intermédiaire :** entraînez volontairement l'arrêt avec un fichier manquant, un champ modifié ou un objet indéterminé ; confirmez que le système conserve les originaux, isole les brouillons et notifie le repreneur.
4. Reverifiez avec des échantillons normal, aux limites et en échec ; ne rétablissez la planification automatique qu'après traitement de l'impact approuvé par le responsable métier.

## Cas de référence

Vous pouvez d'abord lire [Youkela : R&D produit et paie sur pointage](/fr/qwenwork/case-youkela) et traiter ses vérifications de documents et ses confirmations humaines à fortes conséquences comme exercice de frontières d'exploitation ; les déclarations du cas ne valent ni effet garanti de votre automatisation ni promesse de fonctionnement sans surveillance.

## Vérification après exécution

Menez un exercice de défaillance : rendez les versions d'entrée incompatibles et confirmez que la nouvelle tâche s'arrête, que les originaux sont intacts, que le responsable est notifié, que le produit courant est marqué brouillon et que la livraison peut être achevée par le processus de secours ; sinon, pas de mise en ligne.

## Points de vigilance

En cas d'échec de vérification, d'exécution répétée, de changement de permissions ou d'objet indéterminé, désactivez immédiatement et suspendez toute diffusion externe, conservez originaux, état des lieux et journaux, et faites reprendre la tâche courante par un humain ; si la nouvelle version échoue, revenez à la dernière version stable et ne reprenez qu'après réparation et nouvelle confirmation du responsable métier.

## Pour aller plus loin

Continuez avec la [méthode ou le modèle](#méthode-ou-modèle), les [cas et preuves](#cas-et-preuves) et les [frontières et la suite](#frontières-et-suite) de cette page, et consultez les [sources des tâches planifiées](/fr/qwenwork/appendix-sources#r5), [du pilotage informatique](/fr/qwenwork/appendix-sources#r6) et [des canaux IM](/fr/qwenwork/appendix-sources#r7).

## Pourquoi c'est important

L'automatisation élargit le périmètre d'impact d'une erreur ponctuelle. Un champ modifié peut faire errer le quotidien pendant plusieurs jours, une connexion expirée créer des données manquantes silencieuses, une planification répétée envoyer plusieurs fois, un changement d'interface faire cliquer le pilotage informatique sur le mauvais objet. Un simple « bouton off » ne rattrape pas les actions déjà exécutées et ne dit pas qui achève les tâches restantes.

Le responsable AI de l'entreprise doit concevoir le traitement des défaillances comme une partie du fonctionnement normal. Le responsable métier doit savoir si, après l'anomalie, les originaux sont sains, si la livraison prend du retard, qui reprend la main et quand la remise en ligne est autorisée.

## Méthode ou modèle

Les quatre points de contrôle répondent à des questions distinctes :

| Point de contrôle | Définition fixe | Preuves typiques | Rôle responsable |
|---|---|---|---|
| Vérification automatique | Contrôle des conditions de format, de plage, d'intégrité et de cohérence décidables par machine | Résultats de schéma, nombres de lignes, empreintes, rapprochements et contrôles de doublons | Owner du flux de travail |
| Revue humaine | Juge la justesse des faits, de la sémantique, de la qualité professionnelle et du risque | Relevés de sondage, listes de modifications, avis professionnel | Relecteur de contenu ou Owner professionnel |
| Acceptation de livraison | Décide si le produit satisfait la carte de tâche et peut passer à l'étape suivante | Registre de passage, de rejet ou de passage conditionnel | Responsable métier |
| Confirmation d'action | Autorise l'envoi, l'écriture, la publication, la suppression ou toute autre action externe réelle | Confirmateur, objet, périmètre, heure et liste des changements | Responsable d'action |

Les cinq termes d'exploitation ne se substituent pas non plus l'un à l'autre :

| Terme | Signification | Moment d'application |
|---|---|---|
| Désactivation | Empêche de nouvelles exécutions automatiques de démarrer | Risque systémique détecté ou maintenance nécessaire |
| Reprise humaine | Un responsable prend en charge la tâche inachevée en cours | La livraison courante doit encore être achevée à temps |
| Retour arrière | Bascule vers la version, les règles ou le processus manuel stable précédent | La nouvelle version échoue alors qu'un chemin existant reste utilisable |
| Annulation | Défait une action déjà exécutée quand le système le permet et le risque est maîtrisé | Après une écriture, un envoi ou une publication erronés |
| Rétablissement | Réouvre l'exécution automatique après réparation, reverification et approbation | Cause racine traitée et conditions de rétablissement satisfaites |

La chaîne minimale de reprise et de rétablissement est fixée ainsi :

1. **Condition de déclenchement** : échec de vérification automatique, anomalie d'entrée, changement de permissions, exécution répétée ou signalement humain.
2. **Arrêt de l'exécution** : bloquer les nouvelles tâches et les actions à haut risque restantes, ne pas tenter d'étapes inconnues.
3. **Protection des originaux** : conserver entrées, état des lieux, journaux et fichiers originaux non modifiés, isoler les produits erronés.
4. **Notification du responsable** : indiquer le périmètre d'impact, l'état courant, l'échéance et la décision requise.
5. **Achèvement humain** : le repreneur désigné achève les livraisons nécessaires selon le processus de secours et consigne les changements manuels.
6. **Localisation de l'échec** : distinguer les causes d'entrée, de permissions, d'outil, de règles, de modèle et d'environnement.
7. **Version corrigée** : créer une nouvelle version, sans écraser la version défaillante ni les preuves.
8. **Nouvelle vérification** : rejouer vérification automatique et revue humaine avec des échantillons normal, aux limites et en échec.
9. **Approbation du rétablissement** : le responsable métier confirme l'impact traité, l'Owner du flux réouvre la planification.

Les règles de confirmation précises des actions G2/G3 ont le chapitre 11 pour seule source normative ; ce chapitre exige seulement que l'automatisation puisse appeler les mécanismes de confirmation et de reprise correspondants.

## Cas et preuves

Le centre d'aide officiel décrit séparément les tâches planifiées du client bureau, le pilotage informatique et les canaux IM. [R5](/fr/qwenwork/appendix-sources#r5) [R6](/fr/qwenwork/appendix-sources#r6) [R7](/fr/qwenwork/appendix-sources#r7) Les points d'entrée et la disponibilité des capacités peuvent changer ; à éprouver avec le compte, la version du système et les autorisations organisationnelles courants.

Prenons le quotidien d'exploitation du lundi : avant la planification, vérifier le répertoire d'entrée et la date ; après génération, rapprocher automatiquement les totaux ; le relecteur de contenu vérifie les explications d'anomalies ; le responsable métier accepte ; avant l'envoi dans le groupe, le responsable d'action confirme. Si un champ modifié fait échouer le rapprochement, le système s'arrête en état de brouillon, conserve le tableau original et notifie le repreneur ; il ne doit pas continuer à envoyer des conclusions selon les anciennes normes.

## Actions pour l'entreprise

Compléter la carte d'exploitation d'une automatisation existante :

| Élément obligatoire | Contenu minimal |
|---|---|
| Déclenchement et entrées | Règle de planification, emplacement des entrées, plage de dates, traitement des données vides |
| Quatre points de contrôle | Conditions, responsables, preuves et traitement des dépassements de délai pour chacun |
| Traitement des défaillances | Interrupteur de désactivation, repreneur, processus de secours, notification d'impact |
| Rétablissement de version | Dernière version stable, échantillons de reverification, approbateur du rétablissement |
| Actions déjà exécutées | Annulables ou non, responsable de l'annulation, remédiation si irréversibles |

Signaux imposant désactivation et reprise immédiates : vérification machine en échec alors qu'un envoi externe se prépare ; changement soudain du périmètre d'entrée ou des permissions de compte ; exécution répétée d'une même tâche ; risque d'écrasement des originaux ; action courante sans objet ni impact confirmables ; aucun responsable joignable ni processus de secours.

## Frontières et suite

Toutes les tâches ne se prêtent pas à la planification ni au fonctionnement sans surveillance. Les tâches aux sources instables, à l'acceptation dépendante d'un jugement professionnel, à l'échec irréversible ou à impact sur des objets externes doivent garder l'humain dans la boucle ; les lectures à faible risque et la génération de brouillons exigent elles aussi alertes d'échec et registres d'exécution.

Ce chapitre définit les contrôles d'exploitation, pas les niveaux de gouvernance organisationnelle. Le chapitre de gouvernance précisera uniformément la sensibilité des données, les responsabilités humain-machine et les seuils des actions à haut risque.

[Chapitre suivant : choix des scénarios et pilote](/fr/qwenwork/ch10-pilot-roadmap)
