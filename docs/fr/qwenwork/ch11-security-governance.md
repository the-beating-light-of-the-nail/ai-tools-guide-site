---
title: "Gouvernance de sécurité : actions, données, conséquences et responsabilités humain-machine"
description: Encadrer les flux AI d'entreprise avec G0–G3, la sensibilité des données, les conséquences professionnelles et l'autorisation continue
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/getting-started/privacy-security
---

# Gouvernance de sécurité : actions, données, conséquences et responsabilités humain-machine

## Quand il faut lire ce chapitre

Si vous ne faites que lire des documents que vous avez le droit de consulter et organiser un brouillon sans portée sur autrui, vous pouvez sauter ce chapitre. Dès que la tâche touche partage d'équipe, documents personnels ou clients, écriture automatique dans un registre ou des tâches, connexion inter-systèmes, envoi externe, paiement, suppression, approbation, ou que la sortie peut influencer des décisions juridiques, financières ou RH, revenez ici confirmer qui peut agir, qui doit confirmer, et comment s'arrêter en cas d'échec. Pas besoin de mémoriser G0–G3 : regardez d'abord l'action réelle, la sensibilité des données et les conséquences possibles, puis enregistrez selon ce chapitre.

## Conclu en 30 secondes

<span id="claim-g0-g3-controls-01" data-claim-id="claim-g0-g3-controls-01"></span>G0–G3 n'exprime que le niveau de risque de l'action ; sensibilité des données et conséquences professionnelles se jugent indépendamment, avec le contrôle le plus strict des trois.

<span id="claim-g2-continuous-authorization-01" data-claim-id="claim-g2-continuous-authorization-01"></span>G2 ne peut passer d'une confirmation préalable lot par lot à un fonctionnement dans le périmètre approuvé avec sondages que si le flux est officiellement publié, à frontières explicites et doté d'une autorisation continue conjointement approuvée ; G3 exige toujours une confirmation préalable à chaque fois.

<span id="claim-human-responsibility-01" data-claim-id="claim-human-responsibility-01"></span>Le responsable métier répond en dernier ressort du résultat métier final et ne peut transférer cette responsabilité à l'AI ou au mainteneur de processus ; l'exécutant G3 et l'approbateur d'action ne peuvent être la même personne.

## Pourquoi c'est important

Juger le risque seulement selon « lecture » ou « écriture » omet deux familles de problèmes : lire des informations de candidats ne change pas l'état du système mais touche des données personnelles ; générer un jugement juridique, financier ou RH, même limité à un brouillon, peut influencer des décisions à fortes conséquences. Inversement, un nouveau fichier réversible sur des données internes ordinaires et l'écrasement d'originaux, la diffusion externe ou la suppression ne peuvent suivre la même règle de confirmation.

Une fois action, données et conséquences professionnelles dissociés, le responsable métier voit qui assume le résultat, le mainteneur de processus met en place les confirmations et retours arrière corrects, et le responsable données/sécurité fixe un plancher de contrôle selon le périmètre d'autorisation. Le niveau n'est ni une maturité d'automatisation, ni une étiquette d'« exécution permise » ; il n'est qu'une dimension décidant de l'intensité minimale de contrôle.

## Méthode ou modèle

### Juger d'abord indépendamment le niveau d'action G0–G3

| Niveau | Définition fixe | Contrôle par défaut |
|---|---|---|
| G0 Lecture seule | Ne modifie ni objet métier, ni permissions, ni état externe | Exécution automatique possible dans le périmètre de données autorisé, en conservant sources et journaux d'accès |
| G1 Écriture de brouillon réversible | Crée seulement un brouillon isolé ou un nouveau fichier ; objet identifiable, supprimable ou récupérable, sans destinataire externe ni écrasement d'originaux | Exécution puis notification ; originaux et chemin de récupération obligatoirement conservés |
| G2 Écriture d'état métier | Crée ou met à jour des objets métier : tâches internes, registres, journaux, CRM, etc. | Par défaut, avant chaque lot : montrer objets, champs et impact et obtenir confirmation explicite ; seuls les flux bornés officiellement publiés et dotés d'une autorisation continue peuvent fonctionner dans le périmètre approuvé avec sondages |
| G3 Action à fortes conséquences | Envoi externe, publication publique, paiement, approbation, suppression, modification de référentiel ou autre action difficilement réversible | Confirmation obligatoire avant chaque exécution avec registre d'audit ; le sondage ne remplace pas l'approbation préalable |

La « réversibilité » doit être prouvée par un chemin de récupération réel. Écrire seulement « supprimable » sans pouvoir identifier l'objet, retrouver l'original ou vérifier la récupération ne satisfait pas G1 ; écraser un original n'appartient pas non plus à G1. La « confirmation explicite » de G2 doit montrer à l'approbateur les objets, champs et impact du lot courant ; une fenêtre générique ou un consentement passé ne suffit pas.

### Juger ensuite la sensibilité des données

| Catégorie de données | Périmètre typique | Exigence minimale de traitement |
|---|---|---|
| Publique | Informations légalement publiées et autorisées pour l'usage courant | Conserver sources, dates et limites d'usage |
| Interne | Informations générales d'exploitation et de collaboration réservées à l'organisation | Membres, systèmes et usages limités ; journal d'accès conservé |
| Confidentiel / informations personnelles ou clients | Secrets commerciaux, données personnelles, documents clients et données ré-identifiantes | Autorisation minimale, usage et conservation limités ; contrôle au moins G2 |
| Réglementé ou secret d'organisation | Données soumises à des réglementations dédiées, contrats ou règles de sensibilité maximale | Contrôle G3, soumis aux règles et exigences professionnelles applicables |

### Juger indépendamment les conséquences professionnelles

| Conséquence professionnelle | Question de jugement | Points de contrôle typiques |
|---|---|---|
| Assistance informationnelle | La sortie aide-t-elle seulement à chercher, organiser ou comprendre, sans changer directement la décision métier | Sources, exactitude et périmètre d'application |
| Exploitation courante | La sortie influence-t-elle l'affectation de tâches, l'état des registres, le suivi client ou l'exploitation interne | Objets, champs, permissions, revue et retour arrière |
| Jugements à fortes conséquences (juridique/finance/RH, etc.) | La sortie peut-elle influencer droits et obligations, fonds, recrutement ou élimination, rémunération ou autre décision majeure | Revue professionnelle indépendante par une personne responsable ou qualifiée, et approbation explicite |

Le niveau d'action reste jugé indépendamment : données confidentielles ou jugements à fortes conséquences impliquent un contrôle au moins G2 ; données réglementées, secrets d'organisation ou actions G3 se contrôlent en G3 ; en cas de politique organisationnelle plus stricte, elle prévaut. Élever le contrôle ne change pas l'étiquette de l'action : lire des données personnelles reste une action G0, mais l'autorisation, le journal d'accès et la revue doivent être limités avec au moins l'intensité G2.

### Fixer les six rôles de responsabilité

| Rôle | Responsabilité fixe |
|---|---|
| Responsable métier | Définit objectif, périmètre, acceptation et conditions d'arrêt ; approuve la mise en ligne métier et répond du résultat final |
| Mainteneur de processus | Maintient versions du flux, frontières, tests, supervision, désactivation et chemins de rétablissement |
| Responsable données/sécurité | Confirme classification des données, autorisation minimale, journaux, conservation, traitement des incidents et limites de l'autorisation continue |
| Utilisateur | Fournit les entrées dans le périmètre autorisé, exécute les tâches, vérifie les anomalies visibles et soumet les relevés d'acceptation |
| Relecteur de contenu | Vérifie faits, chiffres, sources, formulation et conclusions professionnelles requises ; consigne passage ou rejet |
| Approbateur d'action | Avant l'action, vérifie objet, périmètre et impact ; approuve ou refuse les actions G2/G3 |

Une petite équipe peut cumuler les rôles, mais l'exécutant G3 et l'approbateur d'action ne peuvent être la même personne. Le mainteneur de processus répond de la qualité d'exécution, le relecteur de contenu de ses relectures signées, l'approbateur d'action de l'autorisation des actions précises ; aucune de ces divisions ne décharge le responsable métier du résultat métier final.

### Régler un registre borné pour l'autorisation continue G2

G2 exige par défaut une confirmation préalable lot par lot. Seuls les flux ayant passé la [porte de validation de publication du flux d'équipe](/fr/qwenwork/ch10-pilot-roadmap), au périmètre énumérable et immédiatement désactivables, peuvent demander une autorisation continue. Le responsable métier et le responsable données/sécurité doivent approuver conjointement et consigner tous les champs suivants :

| Champ du registre | Contenu obligatoire |
|---|---|
| Objets métier autorisés | Types d'objets créables ou actualisables, systèmes et périmètre identifiable |
| Champs | Liste blanche des champs lisibles et écrivables, champs explicitement interdits |
| Plafond par lot | Nombre maximal d'objets, montants ou autres plafonds métier par exécution |
| Fréquence d'exécution | Fréquence de planification ou de déclenchement manuel, et plages interdites |
| Validité | Dates de début et de fin ; par défaut 90 jours au plus |
| Emplacement des journaux | Emplacement d'audit accessible, interrogeable et exportable par les responsables |
| Fréquence de sondage | Par défaut au moins hebdomadaire, avec règles de sélection des échantillons |
| Révocateur | Rôle ou personne habilité à désactiver immédiatement l'autorisation continue |
| Conditions de révocation | Règles de déclenchement sur changement de permissions, champs, destinataires, taux d'erreur ou autre frontière |
| Version du flux liée | Numéro de version unique ou identifiant de version immuable, avec tests et registre de publication correspondants |
| Compte d'exécution / identité de service | Compte ou identité de service réellement utilisé et son périmètre de permissions minimales |
| Environnement d'exécution | Systèmes, locataires, espaces et environnements de production ou de test approuvés |
| Usage approuvé | Fins métier autorisées, et usages secondaires explicitement interdits |

Une ancienne autorisation n'est valable que pour la version du flux, le compte d'exécution/identité de service, l'environnement et l'usage enregistrés ; elle ne se transpose ni à d'autres versions, exécutants, environnements ou usages. Tout changement de permissions, champs, destinataires ou taux d'erreur invalide immédiatement et sans condition l'autorisation continue. Tout changement de logique ou de règles du flux, de version, de modèle, de connecteur, d'exécutant ou d'environnement l'invalide aussi. Le flux doit d'abord être désactivé et revenir à la confirmation lot par lot, puis être réactivé après révision, reverification et approbation conjointe. L'expiration de la validité par défaut invalide également, sans renouvellement silencieux.

Pendant l'autorisation continue, les journaux doivent couvrir 100 % des exécutions, avec au moins un sondage hebdomadaire. Les journaux consignent au minimum identifiant d'exécution, version du flux, exécutant, objets, valeurs avant/après des champs clés, résultats et anomalies ; pour les informations personnelles, clients ou autres contenus sensibles, ne consigner que les valeurs nécessaires, références protégées ou résumés de contenu selon la politique de journalisation approuvée, avec les contrôles d'accès et de durée de conservation correspondants. « Conservation à 100 % » signifie que chaque exécution a un relevé auditable, pas une copie illimitée ni une conservation permanente des valeurs sensibles originales.

G3 n'admet aucune exemption de confirmation unitaire par autorisation continue. Avant chaque exécution, l'approbateur doit voir destinataire ou objet, action précise, contenu ou champs clés, périmètre d'impact et conséquences irréversibles ; chaque approbation se lie à une version d'action immuable ou à un résumé de contenu, un identifiant d'exécution unique et une validité enregistrée. Tout changement de destinataire ou d'objet, d'action, de contenu clé, de champs ou d'impact, l'expiration de la validité, une exécution répétée, ou une préparation de nouvelle tentative après échec exigent une nouvelle présentation et approbation ; le sondage ne remplace pas l'approbation préalable.

Le registre d'audit G3 conserve simultanément l'identifiant de l'instantané d'approbation et le destinataire ou objet réellement exécuté, l'action, le contenu ou les valeurs de champs clés, le résultat et les anomalies, pour comparer contenu approuvé et résultat réel. Le contenu sensible ne laisse de traces que dans le périmètre autorisé, via références protégées ou résumés ; l'audit ne justifie pas d'élargir copie, accès ou conservation.

### Exemple d'action bureautique : quatre actions sur un même compte rendu

Comprendre d'abord les niveaux avec des actions ordinaires, puis lire les règles du tableau. La « confirmation » ci-dessous porte sur objets, contenus et impacts précis — un clic n'autorise pas durablement ; le passage d'un stade n'accorde pas automatiquement de permissions.

| Action | Exemple réel | Qui confirme quoi | Comment s'arrêter en cas d'échec |
|---|---|---|---|
| G0 Lecture seule | Lire les notes de réunion autorisées, en extraire conclusions, tâches et sources, sans modifier d'objet métier ni d'état externe. | L'utilisateur confirme le périmètre de la tâche ; le responsable données/sécurité confirme sources et périmètre d'accès ; le relecteur de contenu confirme que les faits remontent à l'enregistrement original. | Si les permissions expirent, la version source est indéterminée ou des données personnelles excèdent l'usage : arrêter immédiatement lecture et génération, conserver les originaux autorisés, basculer en vérification humaine, sans changer pour un compte non autorisé. |
| G1 Brouillon isolé | Créer à partir des entrées du rapport un brouillon de compte rendu isolé ou un nouveau fichier, sans écraser l'original ni toucher de destinataire. | L'utilisateur confirme l'emplacement du brouillon et la version des entrées ; le relecteur de contenu confirme modificabilité et vérifiabilité ; le mainteneur de processus confirme l'identification de l'objet, la protection de l'original et le chemin de récupération. | Si le brouillon tombe au mauvais endroit, l'objet est inidentifiable, l'original écrasé ou l'exercice de récupération échoue : désactiver immédiatement, protéger l'original, reprise humaine ; après correction, vérifier la récupération — « supprimable » seul ne suffit pas. |
| G2 Écriture dans registre/tâches internes | Écrire les actions de réunion confirmées dans le registre ou les tâches internes, en affichant objets, champs et impact, sans envoi externe. | L'approbateur d'action confirme champs, quantités, impact et retour arrière pour les objets réels du lot ; le responsable métier confirme le périmètre métier ; le responsable données/sécurité confirme l'autorisation. Seuls les flux officiellement publiés, à frontières énumérables et conjointement approuvés peuvent demander une autorisation continue G2. | Si objets ou champs divergent, écritures répétées, anomalies de permissions ou résultat invérifiable : suspendre le lot et la planification suivante, invalider d'abord l'autorisation continue, protéger le registre original, vérifier humainement et rétablir ; reverifier après révision, sans réutiliser l'ancienne approbation. |
| G3 Envoi externe, paiement ou suppression | Envoyer le compte rendu à un client, exécuter un paiement, supprimer un enregistrement ou toute autre action externe difficilement réversible. | L'approbateur d'action confirme à chaque fois destinataire ou objet, action précise, contenu ou champs clés, impact et conséquences irréversibles ; exécutant et approbateur séparés. Le responsable métier répond du résultat métier final. | Au moindre changement de contenu, d'objet, de version ou d'impact, échec ou préparation de nouvelle tentative : arrêter et bloquer la tentative, protéger l'original, reprise humaine, vérifier impact réel et instantané d'approbation ; après rétablissement, les confirmations restent unitaires. |

Le relevé minimal du lecteur ordinaire : version des entrées, modifications humaines, anomalies, qui a accepté quoi, résultat final. On peut s'exercer avec l'[atlas des cas publics du chapitre 9 (32 indices de scénarios à vérifier)](/fr/qwenwork/ch09-public-case-atlas) sur des scénarios de comptes rendus ou de suivi ; l'atlas aide seulement à comprendre actions et formes de produits, sans remplacer autorisations, relectures professionnelles ou approbations de votre organisation.

## Cas et preuves

Un même flux de « suivi de visite client » peut cumuler les niveaux : lire les registres CRM autorisés est G0 ; enregistrer ailleurs un brouillon d'e-mail sans toucher le client en conservant l'original est G1 ; actualiser l'état de suivi dans le CRM interne est G2 ; envoyer l'e-mail au client est G3. Même avec une autorisation continue pour la mise à jour G2, l'envoi externe final exige une confirmation unitaire. En conservant traces des versions d'entrée, modifications humaines, anomalies, acceptations et résultats, on peut localiser après un échec si le problème vient des permissions, du contenu ou de la confirmation d'action.

Autre exemple, l'organisation de l'état des candidats : l'action peut n'être que lecture et synthèse G0, mais les entrées contiennent des données personnelles, donc contrôle au moins G2 ; si la sortie alimente des jugements à fortes conséquences — recrutement, élimination, rémunération —, la revue d'un responsable professionnel correspondant s'impose. Élever l'intensité de contrôle n'autorise pas pour autant des décisions RH automatiques.

Le centre d'aide officiel de Qwen Work fournit des notices de confidentialité et sécurité. [R9](/fr/qwenwork/appendix-sources#r9) Les capacités produit réelles, le traitement des données et la configuration organisationnelle font foi selon la page et le contrat au moment de l'usage ; les niveaux G0–G3, la répartition des rôles et les durées d'autorisation continue de ce chapitre relèvent de recommandations de gouvernance communautaire, sans valeur de notation officielle de risque ni d'avis juridique.

## Actions pour l'entreprise

Compléter une carte de gouvernance pour chaque flux en pilote ou en exploitation :

1. Marquer G0–G3 action par action, sans retenir un niveau moyen flou pour tout le processus.
2. Marquer séparément sensibilité des données et conséquences professionnelles, et appliquer le contrôle le plus strict des trois.
3. Désigner les six rôles ; vérifier la séparation entre exécutant G3 et approbateur d'action.
4. Vérifier pour G1 l'original, l'identification de l'objet et le chemin de récupération, avec un exercice réel de récupération.
5. Configurer pour G2 l'aperçu lot par lot et la confirmation explicite ; en cas d'autorisation continue vraiment nécessaire, remplir tous les champs du registre et approuver conjointement.
6. Configurer pour G3 la confirmation unitaire, le registre d'audit et la reprise humaine après échec, sans exemption par sondage.
7. Rattacher actions non autorisées, graves problèmes de confidentialité et erreurs métier critiques aux règles d'arrêt du chapitre 10.
8. Vérifier au moins chaque semaine journaux et anomalies G2 ; en cas de changement de frontière, invalider d'abord l'autorisation, puis enquêter.

Les preuves minimales de mise en ligne : version courante du flux, registre d'autorisation, liste des rôles, interface ou relevés de confirmation, emplacement des journaux, résultats de sondage, interrupteur de désactivation et exercice de rétablissement. S'il manque un contrôle nécessaire, réduire le périmètre ou rester en exécution manuelle.

## Frontières et suite

Ce chapitre fournit un modèle de gouvernance général, qui ne remplace ni les règles organisationnelles, ni les obligations contractuelles, ni les exigences réglementaires, ni les jugements professionnels juridiques, financiers ou RH. Les catégories de données doivent être confirmées par quelqu'un qui connaît les données de l'organisation et les règles applicables ; en cas de conséquence professionnelle incertaine, contrôler au niveau supérieur et demander une revue professionnelle.

Le niveau de gouvernance ne prouve pas l'efficacité d'un flux, et la porte de validation n'accorde pas automatiquement de permissions. L'organisation doit combiner les portes de pilote du chapitre 10 et la chaîne de reprise de l'automatisation, pour que le flux passe à la fois la validation de qualité et de valeur, et puisse s'arrêter, être repris et rétabli quand permissions, entrées ou taux d'erreur changent.

[Chapitre suivant : exploitation des flux d'équipe](/fr/qwenwork/ch12-workflow-operations)
