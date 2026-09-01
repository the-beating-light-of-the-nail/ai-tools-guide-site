# Comment auditer la présence GEO de son IP personnelle

> Contexte : juger si une IP est visible se résumait à taper son nom, compter ses abonnés ; s'y ajoute désormais une nouvelle porte d'entrée — **de plus en plus de gens demandent directement à l'IA**. L'IA saura-t-elle relier votre nom chinois et votre compte anglais ? Vous attribuera-t-elle un projet homonyme ? Citera-t-elle votre page d'accueil, ou un article agrégé repris trois fois ?

Ces questions ne se testent pas avec un « tu connais tel nom ? » lancé au hasard — question variable, moment variable, critère variable. Un processus fixe a été testé de bout en bout : **préparer d'abord une carte de faits publics de référence et 5 questions fixes → recherche publique question par question, vérification des sources, notation → génération d'un tableau de suivi et de recommandations**. Résultat : 29/30 — aucune question totalement inconnue ou franchement erronée, mais 1 risque de confusion d'identité et 1 problème de qualité de source.

## Poser d'abord les limites : c'est de la recherche documentaire

Le processus ne fait que trois choses : lire les faits que vous confirmez publiers, contrôler des pages publiques, générer des rapports locaux. Il ne modifie pas automatiquement vos pages, ne publie pas de déclaration pour vous, et ne garantit pas qu'un changement de bio fasse changer tous les modèles d'IA d'avis du jour au lendemain — les résultats de recherche évoluent, les versions de modèles aussi. Le résultat vaut donc pour « une mesure un jour donné, sur un assistant donné, en chinois simplifié ». Autre précision : **les chiffres mouvants — abonnés, stars, classements — sont des instantanés du jour, pas des faits d'identité permanents**.

Outils, combo minimal : Skill « étude VOC et veille des opinions » (recherche publique multi-sources, classement de l'information, remontée des sources) + recherche publique intégrée. Ni connecteur de recherche supplémentaire, ni comparaison entre plusieurs assistants IA (trop de variables).

## Préparer deux documents d'entrée

**La carte de faits publics de référence** — uniquement des faits stables que vous pouvez confirmer et acceptez de publier : nom public principal et compte anglais usuel ; identité extérieure et thématiques de partage de long terme ; page d'accueil publique personnelle ; projets représentatifs vérifiables ; et **ce qui en est explicitement exclu** (nom réel, coordonnées, nombre d'abonnés évolutif, titres non confirmés).

**Les questions fixes de suivi** (ici 5, testant respectivement : reconnaissance de l'entité, attribution des comptes, découverte du contenu représentatif, appariement nom chinois/anglais, risque de confusion avec un projet homonyme) :

1. Qui est 【nom】 ? Quel contenu public partage-t-il principalement ?
2. Quels comptes publics et projets représentatifs de 【nom】 peut-on confirmer lui appartenir ?
3. Si je veux apprendre 【votre thématique】, quels documents publics de 【nom】 consulter ?
4. « 【nom chinois】 » et « 【compte anglais】 » sont-ils le même créateur ? Donnez des sources publiques vérifiables.
5. 【nom】 a-t-il partagé publiquement des choses sur 【sous-thématique】 ? Si oui, lesquels et quels projets ?

## Le prompt testé

Périmètre, notation, priorité des sources et limites de sécurité, écrits d'un seul tenant :

```text
Je maintiens les informations publiques de l'IP personnelle « 【nom public / compte
anglais】 ». Utilise la capacité « étude VOC et veille des opinions » pour mener un
contrôle reproductible de la visibilité dans les réponses IA.

Documents d'entrée :
1. Carte de faits publics de référence : 【chemin de ip-baseline.md】
2. Questions fixes de suivi : 【chemin de audit-questions.md】

Périmètre du contrôle :
- Assistant : la conversation Doubao Work en cours
- Date : 【date du test】
- Langue : chinois simplifié
- Contrôler uniquement des pages publiques ; ne lire aucune donnée de compte privé ;
  ne pas rechercher ni inférer coordonnées, adresse, revenus ou autres informations
  personnelles.

Procède ainsi :
1. Lis d'abord les deux fichiers et confirme que faits de référence et questions fixes
   sont complets.
2. Pour chaque question, mène une recherche publique indépendante, et réponds comme
   si tu rencontrais ce nom pour la première fois — sans recopier la carte de référence.
3. Consigne pour chaque question : question d'origine, résumé de réponse, identification
   correcte ou non du nom public, appariement ou non avec le compte anglais, erreurs ou
   manques factuels, URLs citées, type de source, accessibilité et horodatage de recherche.
4. Regroupe les résultats par question en quatre catégories : absent, description
   erronée, confusion d'identité, source de mauvaise qualité ; même sans cas, écris
   explicitement « rien à signaler ».
5. Priorité des sources : « page ou projet personnel public > reportage public signé >
   page agrégée ou reprise ». Une page tierce ne prouve pas seule l'attribution d'un compte.
6. Note chaque question de 0 à 2 sur trois axes : présence de l'entité, exactitude de
   l'identité, fiabilité de la source ; conserve le motif rédigé, pas seulement le total.
7. Synthétise quelles informations publiques sont déjà vues de façon stable, et lesquelles
   manquent d'une page publique cohérente et citable. Les recommandations doivent viser
   des pages et des champs précis — par exemple comment harmoniser bio de la page
   d'accueil, README du projet, page auteur ; ne promets pas qu'une modification
   influencera forcément les réponses ou le classement des modèles.
8. Auto-contrôle : chaque conclusion remonte-t-elle à une URL ; a-t-on généralisé une
   mesure à tous les assistants IA ; une information tierce a-t-elle été écrite comme
   fait confirmé par la personne.

Livrables attendus, deux fichiers :
- IP-personnelle_suivi-visibilite-IA.md : périmètre, résultats par question, notation,
  sources et limites.
- recommandations-correction-documents-publics.md : priorisé P0 / P1 / P2, précisant
  la page à corriger, le problème actuel, l'action conseillée et la méthode de retest.

Dans la conversation, synthétise seulement : score total, occurrences par catégorie,
et les 3 points d'information à corriger en premier.

Limites de sécurité : contrôle en lecture seule et fichiers locaux uniquement ; ne modifie
aucune page ou projet publics, ne publie rien, n'envoie aucun message, et ne promets pas
de pouvoir influencer les réponses des modèles.
```

À l'exécution, surveillez trois choses : a-t-il **réellement ouvert les pages publiques** au lieu de se fier à sa mémoire de modèle ; l'attribution des comptes s'appuie-t-elle sur une **page ou un projet personnel** ; une reprise tierce n'a-t-elle pas été écrite comme « fait confirmé par la personne ». Ainsi, « une page tierce dit que ce compte appartient à un tel » ne suffit pas — la chaîne la plus solide : votre projet GitHub renvoie vers X, et la page X renvoie vers GitHub, deux pages publiques qui se valident mutuellement.

## Résultat du test : 29/30, et un score non maximal est plus utile

| Question | Entité présente | Identité exacte | Source fiable | Sous-total |
| --- | --- | --- | --- | --- |
| Q1 Qui, et quoi | 2 | 2 | 2 | 6/6 |
| Q2 Comptes et projets | 2 | 2 | 1 | 5/6 |
| Q3 Supports d'apprentissage | 2 | 2 | 2 | 6/6 |
| Q4 Même personne ? | 2 | 2 | 2 | 6/6 |
| Q5 Sous-thématique | 2 | 2 | 2 | 6/6 |
| **Total** | **10/10** | **10/10** | **9/10** | **29/30** |

Répartition : absent 0, description erronée 0, confusion d'identité 1, source faible 1. Les vrais points à traiter sont 3 correctifs P0 :

1. **La bio de la page GitHub est vide** — le compte se trouve, mais la page n'indique ni nom chinois ni identité ; l'IA doit passer par le README du dépôt pour établir le lien ;
2. **Le compte X n'a pas de lien retour GitHub indépendamment vérifiable** — seule existe la déclaration à sens unique GitHub vers X, sans lien inverse constaté ;
3. **Un projet quasi homonyme existe** — le dépôt d'un autre auteur ne diffère que d'une lettre, avec risque que l'IA cite le mauvais dépôt.

Le tableau de suivi a bien détecté le compte X, le compte GitHub et les projets open source représentatifs, avec un positionnement personnel quasi sans dérive ; les recommandations ont pointé ce qui manquait — corrigé aussitôt après lecture.

> Le score n'est pas le point. La vraie valeur : **chaque point perdu remonte à une page publique, chaque recommandation vise un champ précis, et l'on peut retester à l'identique une ou deux semaines plus tard avec les mêmes questions.**

## Pour auditer votre propre IP, suivez cette liste

1. Rédiger d'abord la carte de faits publics, sans y mêler vie privée ni chiffres mouvants ;
2. Fixer assistant, date, langue et 5—10 questions ;
3. Une recherche indépendante par question, sans laisser l'IA recopier la référence ;
4. Noter séparément présence de l'entité, exactitude de l'identité, fiabilité de la source ;
5. Page ou projet personnel d'abord ; les reprises tierces ne valent que preuve accessoire ;
6. Séparer « absent, erroné, confondu, source trop faible » ;
7. Des recommandations qui visent pages, champs et méthode de retest ;
8. Pas de modification automatique de page, pas de publication automatique, aucune promesse d'influencer les modèles ;
9. Conserver les résultats : c'est en retestant à périmètre identique qu'on voit l'évolution.

Avant, on pilotait une IP personnelle sur la notoriété ; il faut désormais ajouter une question : **quand quelqu'un demande à l'IA de me présenter, ce qui sort est-il assez exact ?** En fixant les questions, en bouclant les chaînes de preuves et en écartant les chiffres instables, un vague « je vais chercher » devient un audit reproductible de vos informations publiques.

---

Suivant :[Transformer un article à succès du Compte officiel WeChat en vidéo courte →](/fr/doubaowork/case-viral-to-video)
