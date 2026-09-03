---
title: "Protocole de livraison des tâches : définir « terminé » d'abord"
description: "Faire tourner des tâches AI traçables avec une carte de tâche en cinq volets : objectif, entrées, contraintes, livraison, acceptation"
status: community-practice
verifiedAt: 2026-08-01
sources:
  - https://qwenwork.cn/docs/product-introduction
---

# Protocole de livraison des tâches : définir « terminé » d'abord

## Conclu en 30 secondes

<span id="claim-define-done-first-01" data-claim-id="claim-define-done-first-01"></span>Recommandation de ce livre : avant de lancer une tâche AI, définir d'abord « terminé », puis seulement décider des prompts, des outils et du mode d'automatisation.

<span id="claim-task-card-fields-01" data-claim-id="claim-task-card-fields-01"></span>Ce chapitre définit la norme unique de la carte de tâche en cinq champs : objectif, entrées, contraintes, livraison, acceptation. Les autres chapitres et annexes se réfèrent uniquement à cette définition et ne créent pas de système de champs synonymes.

## Scénario que vous pourrez rencontrer

Un collègue se contente d'écrire « fais-moi une analyse d'exploitation », sans dire pour qui, jusqu'à quelle date les données, si le CRM est utilisable, ni qui confirme. Vous pouvez rédiger les entrées par exemple ainsi : « liste des opportunités CRM de la semaine, version de la semaine passée, dictionnaire des étapes, données au 30 juin », transformant la demande floue en carte de tâche remplissable par un utilisateur ordinaire.

## Ce que vous obtiendrez au final

Le produit final est une carte de tâche à cinq champs :

1. Objectif : quelle tâche, pour qui, au service de quelle décision ;
2. Entrées : documents, systèmes, périodes, versions et périmètre d'autorisation ;
3. Contraintes : normes, formats, actions interdites et conditions d'arrêt ;
4. Livraison : type de fichier, structure, nommage, emplacement et exigence de modificabilité ;
5. Acceptation : vérificateur, méthode de contrôle, conditions de rejet et points de confirmation.

## Faites comme ceci

1. Réécrivez la demande en « lecteur — décision — échéance », et listez les entrées disponibles, manquantes et non autorisées.
2. Remplissez contraintes, livraison et acceptation ; précisez si l'envoi, l'écriture ou la publication sont autorisés.
3. **Point de contrôle intermédiaire :** faites reformuler les cinq champs par le responsable métier ; tant que l'objectif, les normes, la version ou le vérificateur restent flous, complétez d'abord la carte — ne laissez pas l'AI deviner.
4. Exécutez une fois avec la carte de tâche ; conservez les versions d'entrée, les produits, les modifications humaines et le relevé d'acceptation final.

## Cas de référence

Vous pouvez d'abord lire [Youkela : R&D produit et paie sur pointage](/fr/qwenwork/case-youkela) comme exercice de carte de tâche « entrées — traitement — produit — acceptation » ; les déclarations clients précises du cas doivent conserver leurs sources et leurs limites de revue humaine.

## Vérification après exécution

Vérifiez champ par champ que les cinq champs ont un contenu exécutable : par exemple, « acceptation » doit nommer le vérificateur concret et la condition de rejet, et pas seulement « envoyer si tout va bien ». Tant que les champs sont incomplets, la tâche reste au stade de la clarification.

## Points de vigilance

Si l'objectif change, que les versions d'entrée sont en conflit ou qu'une action à haut risque n'a pas de confirmateur, conservez la carte d'origine et les documents sources, suspendez l'exécution et revenez à la dernière version stable ; le responsable métier reconfirme les normes et, au besoin, on bascule en traitement manuel ou en analyse en lecture seule.

## Pour aller plus loin

Continuez avec la [méthode ou le modèle](#méthode-ou-modèle), les [cas et preuves](#cas-et-preuves) et les [frontières et la suite](#frontières-et-suite) de cette page, et utilisez le [modèle de livraison et de validation des tâches](/fr/qwenwork/appendix-templates#modèle-de-livraison-et-de-validation-des-tâches) pour vérifier la définition des cinq champs.

## Pourquoi c'est important

« Fais-moi une analyse d'exploitation » ne dit pas qui doit décider sur cette base, jusqu'à quel jour vont les données, quelles normes appliquer, quel fichier livrer au final, ni qui vérifie. Même si l'AI génère un rapport complet, elle peut répondre avec une grande qualité à une mauvaise question.

La carte de tâche transforme un besoin flou en protocole observable. Le responsable métier peut confirmer la direction avant l'exécution, l'utilisateur peut repérer les entrées manquantes, le relecteur de contenu peut rejeter selon le même standard, et l'équipe peut comparer le taux d'achèvement réel de différents outils ou versions.

## Méthode ou modèle

La carte de tâche en cinq volets est le contrat d'entrée commun aux flux de travail ultérieurs du livre :

| Champ | Question à laquelle il faut répondre | Rédaction acceptable | Rédaction irrecevable |
|---|---|---|---|
| Objectif | Quelle tâche, pour qui, au service de quelle décision | Servir le comité d'exploitation du lundi pour décider d'un budget complémentaire Chine de l'Est | Pour la direction |
| Entrées | Quels documents, systèmes, périodes et versions sont autorisés | Utiliser le détail de l'annexe A, données au 30 juin | Voir la pièce jointe |
| Contraintes | Quelles normes, quels interdits, quand s'arrêter | Comparaison à l'an dernier ; ne pas inventer les valeurs manquantes | Le plus professionnel possible |
| Livraison | Format, structure, emplacement, nommage et exigence de modificabilité | 1 page de synthèse, tableau modifiable, note de vérification | Un rapport |
| Acceptation | Qui vérifie quoi et quand, dans quel cas rejeter | Rapprochement des totaux par la finance, publication après confirmation du responsable métier | Envoyer si tout va bien |

Pour convertir la carte de tâche en tâche exécutable, procéder en six étapes :

1. **Clarifier l'objectif** : reformuler lecteur, décision et échéance ; ne pas entrer dans le traitement en cas de désalignement.
2. **Vérifier les entrées** : lister les documents obtenus, manquants, non autorisés ou de crédibilité douteuse ; confirmer versions, dates et clés primaires.
3. **Verrouiller les contraintes** : consigner normes statistiques, formats, interdits, limites de permissions et traitement des anomalies.
4. **Définir les produits** : décomposer le résultat final en produits intermédiaires vérifiables et en livraison finale, et convenir de l'emplacement de sauvegarde.
5. **Rédiger l'acceptation** : désigner le vérificateur, la méthode de sondage, les conditions de rejet et les points de confirmation avant envoi, écriture ou publication.
6. **Exécuter et faire le retour d'expérience** : conserver carte de tâche, versions d'entrée, versions générées, modifications humaines, anomalies et confirmateur final.

Si la tâche a des champs manquants, complétez-les d'abord ; l'AI n'est pas autorisée à deviner les normes métier. Pour tout ce qui touche paiements, suppressions, décisions relatives au personnel, écritures système ou publication externe, inscrivez l'aperçu, la confirmation explicite et le moyen de retour arrière dans « contraintes » et « acceptation ».

## Cas et preuves

La carte de tâche rapide d'un rapport d'exploitation hebdomadaire peut se rédiger ainsi :

| Champ | Exemple |
|---|---|
| Objectif | Constituer le support du point hebdomadaire du responsable des ventes, pour juger si les régions ont besoin de soutien en ressources |
| Entrées | Liste des opportunités CRM de la semaine, version de la semaine passée, dictionnaire des étapes confirmé |
| Contraintes | Ne compter que les étapes définies ; unités monétaires unifiées ; responsable manquant marqué en rouge, jamais inventé |
| Livraison | 1 page de synthèse, détail par région, liste des anomalies et note de vérification, enregistrée comme nouvelle version |
| Acceptation | Rapprochement synthèse/détail ; anomalies traçables jusqu'aux identifiants d'enregistrements ; confirmation du responsable métier avant envoi dans le groupe |

À l'exécution, produire d'abord le dictionnaire de champs et les règles d'anomalies, nettoyer après confirmation, générer ensuite la synthèse et vérifier les totaux, enfin organiser le résumé en « observation — cause possible — décision requise ». Ainsi, même si les recommandations sont modifiées, la base de données et le chemin de revue restent réutilisables.

Ceci est un exemple de pratique communautaire, sans valeur de norme statistique pour un métier particulier. Une carte de tâche vierge copiable se trouve dans l'[annexe des prompts](/fr/qwenwork/appendix-templates#modèle-de-livraison-et-de-validation-des-tâches) ; l'annexe ne doit pas modifier la signification des cinq champs de ce chapitre.

## Actions pour l'entreprise

| Rôle responsable | Responsabilité | Preuve d'acceptation |
|---|---|---|
| Responsable métier | Approuver objectif, normes métier et actions à haut risque ; décider de continuer ou d'arrêter | Carte de tâche confirmée, registre des portes, décision d'arrêt |
| Utilisateur | Préparer les entrées, exécuter selon la carte, enregistrer versions, anomalies et modifications humaines | Liste des entrées, journal d'exécution, versions des produits, relevé des modifications |
| Relecteur de contenu | Vérifier faits, chiffres, qualité professionnelle et utilisabilité pour le lecteur | Tableau de rapprochement, sondage des sources, remarques de relecture, conclusion d'acceptation |

Pour une première mise en œuvre, extraire 5 échantillons réels d'une tâche fréquente, à entrées stables et à échec réversible. N'ajuster à chaque fois qu'un champ ou une règle, et comparer les motifs de reprise ; ce n'est qu'après 3 acceptations consécutives dans les mêmes limites que l'on envisage de figer en modèle, Skill ou tâche planifiée.

Interrompre l'exécution en cours dans les cas suivants : l'objectif ou le lecteur change ; une entrée clé manque ou les versions sont en conflit ; les normes ne peuvent pas être confirmées par le responsable ; le produit ne peut pas être livré au format convenu ; une action à haut risque n'a ni confirmation explicite ni moyen de retour arrière.

## Frontières et suite

La carte de tâche ne remplace pas le jugement professionnel et ne transforme pas l'inconnu en fait. Pour une tâche exploratoire, l'objectif peut se rédiger « produire une liste de questions ou valider une hypothèse », mais les limites des entrées, les interdits et la livraison du tour doivent rester explicites.

Ce chapitre définit seulement le protocole de tâche. La façon dont les outils connectent fichiers, navigateur et systèmes collaboratifs, et la responsabilité des différents environnements d'exécution, seront définies par les chapitres d'architecture suivants.

[Chapitre suivant : environnement de travail et architecture des capacités](/fr/qwenwork/ch03-work-environment)
