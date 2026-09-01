# Doubao Work et Feishu : le duo le plus naturel

> Contexte : les documents, tableaux, comptes rendus de réunion et dossiers de projet de l'entreprise sont tous dans Feishu. Depuis l'intégration profonde de Doubao Work avec Feishu, il peut lire et écrire directement — vous ne fournissez que des liens, sans toucher un seul fichier.

## Un cas typique : la page de synthèse pour la direction

Vous avez deux documents Feishu : un rapport hebdomadaire de projet et un rapport de diagnostic des données, et vous voulez une « page de synthèse pour la direction » — le genre de compte rendu destiné aux responsables qui n'ont pas assisté aux réunions projet : où en est le projet, quels risques, quoi faire la semaine prochaine.

Envoyez les deux liens à Doubao Work, laissez-le lire, recouper, puis écrire le résultat dans un **nouveau document Feishu**. Vous n'aurez pas touché Feishu une seule fois (Doubao Work prend en charge la connexion par QR code Feishu).

> Le test incluait une question piège volontairement glissée dans les deux documents : une même anomalie datée « 25 août » dans l'un, « mercredi » dans l'autre — pour voir comment il gère le conflit.

## Pourquoi cela exige Feishu

N'importe quel grand modèle d'aujourd'hui sait rédiger un compte rendu ou lister des points clés. Ce qui manque vraiment, c'est le **contexte** :

- où sont les documents, lequel est la dernière version : il l'ignore ;
- quels chiffres sont sûrs, lesquels sont devinés : il ne les distingue pas ;
- où déposer le résultat pour que l'équipe enchaîne : il ne s'en occupe pas.

Or toutes ces informations sont dans Feishu : documents, tableaux, comptes rendus, dossiers, qui a accès à quoi — le patrimoine d'une entreprise s'entasse là. Doubao Work peut travailler directement avec ces ressources et supprime toute la corvée de téléchargement, téléversement, édition et explication du contexte.

> Attention aux limites de droits : **les documents que vous ne pouvez pas voir, Doubao Work ne peut pas les voir non plus** — il ne contournera pas vos droits. En entreprise, c'est une bonne chose, et cette limite doit rester.

## Étape 1 : liens et exigences, dits une fois pour toutes

Le prompt se découpe en trois blocs : **matériaux d'entrée** (les deux liens Feishu), **livrable** (une page de synthèse), **limites de sécurité** (ne pas modifier les documents sources, pas de message, pas de création de tâches).

```text
Lis directement les deux documents cloud Feishu ci-dessous, sans me demander de
télécharger ou de copier le contenu :

1. « Rapport de diagnostic des données de la base de connaissances » 【lien du document en ligne】
2. « Rapport hebdomadaire du projet de base de connaissances du service client IA »
   【lien du document en ligne】

Recoupe les deux documents et génère un document cloud Feishu
« Base de connaissances du service client IA | Page de synthèse direction ».

Le document doit répondre :
1. Où en est le projet ;
2. Quels sont les trois faits majeurs de la semaine ;
3. Que s'est-il vraiment passé lors de l'anomalie du 25 août — quels faits, quelles
   simples inférences ;
4. Quels sont les trois risques majeurs actuels ;
5. Les trois chantiers à prioriser la semaine prochaine ;
6. Quelles informations manquent dans les deux documents et exigent une confirmation
   humaine.

Exigences rédactionnelles :
- Destinataires : des responsables n'ayant pas assisté aux réunions projet ; environ
  une page ;
- Tout chiffre doit être traçable jusqu'aux deux documents sources ;
- En cas de divergence entre les documents, l'isoler sans en choisir une arbitrairement ;
- Ne pas inventer responsables, dates, budgets ni statuts d'avancement ;
- Ajouter en fin de document une « table de vérification des sources » indiquant
  d'où vient chaque conclusion clé ;
- Créer le document cloud Feishu et renvoyer un lien accessible.

Limites de sécurité : ne pas modifier les deux documents sources, pas de message de
groupe, pas de @collègue, pas de création de tâches ni de rappels.
```

Conseil pratique : **ne pas écrire seulement « fais-moi un résumé »** — « un résumé » est flou pour un humain, plus encore pour une IA. Précisez d'un coup lecteur, questions, format de livrable, limites factuelles et actions interdites ; un prompt plus long ne coûte rien, moins de reprises fait gagner du vrai temps.

## Étape 2 : il lit et écrit tout seul

Une fois la tâche soumise, Doubao Work identifie une tâche de documents en ligne, puis lit les sources une par une. Cette étape paraît banale, c'est pourtant la clé : avant, c'était « télécharger → retrouver le fichier → le téléverser à l'IA → attendre l'analyse → expliquer le contexte » ; maintenant, « donner le lien → il lit → il travaille ». Les ressources restent dans Feishu : mises à jour des sources, ajustements de droits, reprise d'édition par un collègue — plus votre problème.

La recoupement fait, il crée directement le nouveau document cloud Feishu — **l'entrée vient de Feishu, la sortie retourne dans Feishu**. La réponse dans le chat n'est visible que de celui qui a lancé la tâche ; mise en document Feishu, elle peut rejoindre l'espace projet, partir en commentaire aux collègues, être complétée, ou servir telle quelle en réunion.

Voilà ce qu'il a fait sur cette page : statuer que le projet est toujours en déploiement progressif ; extraire les chiffres clés — trafic, taux de résolution, taux de transfert, avancement du nettoyage FAQ ; ventiler l'anomalie du 25 août en deux colonnes « faits confirmés » et « hypothèses non vérifiées » ; **repérer que « mercredi » et « 25 août » ne concordent pas, et l'isoler pour décision humaine sans en choisir un** ; lister les trois priorités de la semaine suivante et les points à confirmer ; sourcer chaque conclusion clé, avec même une courbe de tendance hebdomadaire.

## Étape 3 : un bon résultat doit résister à la vérification

Là où l'IA endort la vigilance, c'est la fluidité de tout ce qu'elle dit. En entreprise, c'est précisément la peur : une date, un responsable, un budget inventé par inadvertance, et tout le monde hérite de l'erreur. D'où deux clauses dédiées dans le prompt : **lister explicitement les informations introuvables pour confirmation humaine ; préciser la source de chaque conclusion clé**. En test, il a bien laissé en confirmation manuelle le nouveau planning de fonctionnalités, la cause de l'anomalie et la date d'effet du pilote — il vous a préparé « l'entrée de contrôle ».

## Un modèle à copier tel quel

Proposition client, bilan de projet, fusion d'hebdomadaires, supports de réunion, veille concurrente : tous prennent cette ossature :

```text
Lis directement les documents Feishu suivants, sans me demander de télécharger
ou de copier le contenu :

【Document 1】nom + lien Feishu
【Document 2】nom + lien Feishu

À partir de ces documents, crée un document cloud Feishu « 【nom du livrable】 ».

Destiné à 【lecteur cible】, il doit répondre :
1. 【question centrale 1】
2. 【question centrale 2】
3. 【question centrale 3】

Exigences rédactionnelles :
- Conclusion d'abord, preuves ensuite ;
- Tout chiffre et tout fait traçables jusqu'aux sources ;
- Faits, inférences et informations manquantes écrits séparément ;
- Conflits entre documents isolés, sans en choisir un arbitrairement ;
- Ne pas inventer responsables, dates, budgets ni statuts d'avancement ;
- Ajouter en fin de document une table de vérification des sources ;
- Créer le document cloud Feishu et renvoyer le lien.

Limites de sécurité : ne pas modifier les sources, pas d'envoi de message, pas de @,
pas de création de tâches ni de rappels.
```

Avec beaucoup de documents, ajoutez : **« liste d'abord les documents que tu as réellement réussi à lire ; signale séparément ceux inaccessibles, sans faire semblant de les avoir lus. »** — on voit d'un coup d'œil ce qu'il a vraiment lu.

## D'autres cas Feishu testés

Dans les limites des autorisations, Doubao Work peut lire les groupes de discussion Feishu, documents, disque cloud, bases de connaissances, comptes rendus de réunion et tableaux multidimensionnels, et écrire dans les documents, to-dos, agendas et groupes.

**Synthèse de groupes de discussion** : messages de la semaine → document Feishu en quatre rubriques (décisions, to-dos attribués, informations clés, risques) ; les documents et liens clés évoqués dans le groupe sont replacés sous la discussion correspondante. Passer des dizaines de groupes en revue passe aussi, avec écriture des to-dos dans Feishu To-dos et, pour ce qui a une échéance, dans l'agenda (rappel 15 minutes avant) — les to-dos **conservent leur source et leur contexte** : un clic suffit pour savoir de quel groupe vient l'action et pourquoi la traiter.

> Organise les messages de mon groupe Feishu 【nom】 de la dernière semaine et classe-les
> dans un document Feishu par décisions, to-dos attribués, informations clés, risques.
>
> Passe en revue les messages importants de tous mes groupes Feishu de la semaine ;
> ce qui exige mon action va dans Feishu To-dos, ce qui a une échéance claire dans
> mon agenda Feishu, avec un rappel 15 minutes avant.

**Carte de mise à jour en une phrase** : dites simplement sur mobile « mets en forme les dernières mises à jour de WeSight et envoie la carte dans le groupe d'échanges » — il retrouve les fichiers concernés dans Feishu, met en forme, poste dans le groupe : aucun document téléversé, aucun chemin indiqué, **le contenu déjà accumulé dans Feishu est le contexte de sa mission**.

**Cartographie des actifs de contenu** : demandez-lui de passer au peigne fin les sujets, brouillons, cas et bilans du Compte officiel WeChat accumulés dans Feishu, pour produire orientations éditoriales, thèmes récurrents, cas réutilisables, angles manquants et suggestions de sujets ; il peut aussi organiser les sujets actionnables en tableau (champs : titre du sujet, lecteur cible, douleur centrale, logique narrative, cas mobilisables, sources de preuve, priorité, date de publication conseillée), voire générer une page web interactive de base de connaissances. Les vieux documents se recâblent entre eux et **font pousser de nouveaux sujets** — la connaissance accumulée est elle-même une mine.

**Capitaliser les fichiers du PC dans Feishu** : les rapports et PDF entassés dans le répertoire de téléchargement WeChat, à classer par contenu avec génération d'index, mais en conservant tous les fichiers originaux :

```text
Prends le contrôle de mon ordinateur et entre dans D:\Documents\xwechat_files.
Organise les PDF, PPT et Word liés à l'IA : lis noms de fichiers et résumés de contenu,
classe par catégorie, crée sous D:\Documents un dossier « Bibliothèque IA » avec un
sous-dossier par catégorie. Copie les documents pertinents vers les répertoires
correspondants en conservant tous les originaux : interdiction de supprimer ou déplacer.
Génère enfin un index Excel : nom de fichier, type, catégorie, résumé du contenu.
Tout fichier indécidable va seul dans « à confirmer », sans classification au jugé.
```

Les rapports sectoriels ainsi triés rejoignent en une phrase la base de connaissances sectorielle Feishu et deviennent le contexte des futures tâches. Les processus répétitifs fixes peuvent même s'exécuter sur un **PC cloud** (suite Office intégrée, plus de 200 extensions de Skills et connecteurs d'applications) — par exemple capturer chaque jour les 10 vidéos les plus likées sur Douyin sous les mots-clés « bureautique IA, agents IA, tech IA » et les écrire dans un tableau multidimensionnel Feishu ; une fois programmé, cela tourne même PC local éteint.

## Pourquoi c'est là que se creuse l'écart

Les fonctions des agents finiront par se ressembler ; ce qui ne se ressemble pas, c'est le **contexte de travail** accumulé par chaque personne, chaque équipe. Le meilleur agent de productivité exige le meilleur contexte — et Feishu contient précisément la part la plus complète du nôtre. Doubao Work qui travaille dans cet environnement, c'est le « vieux » collègue fraîchement recruté mais dont le poste et les droits d'accès sont déjà configurés : il démarre avec le contexte complet.

---

Scénario similaire :[Ranger le bureau : voir le plan avant de toucher aux fichiers →](/fr/doubaowork/case-desktop)
