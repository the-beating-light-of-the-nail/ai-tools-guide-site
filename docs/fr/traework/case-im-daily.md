# Étude de cas : quatre usages quotidiens de l'IA dans la fenêtre de chat

> Adapté du test de l'assistant de bureau TraeWork par K Jie Yanjiushe ([« TraeWork lance son assistant de bureau »](https://zhuanlan.zhihu.com/p/2071317142574724109), août 2026). Pour la méthode de liaison, voir [Assistant de bureau](/fr/traework/05-bot-assistant) ; ce chapitre ne parle que de « l'usage quotidien une fois lié ».

## Thèse centrale

Ce qui coûte le plus d'énergie avec l'IA, ce n'est pas la génération, mais **le déplacement des documents de travail vers l'IA** — chercher, organiser, téléverser, expliquer le contexte. L'assistant de bureau inverse la logique : l'IA entre directement dans votre fenêtre de chat ; vous citez un document Feishu, transférez un e-mail, lancez un lien, et elle se met au travail sur place.

## Usage 1 : lecture rapide d'un document

Vous recevez un document dont vous ignorez le contenu (par exemple le « Récapitulatif hebdomadaire du stage » d'un stagiaire) : transférez-le simplement à l'assistant :

```text
Dis-moi l'essentiel de ce document.
```

En test, la sortie regroupe le contenu en quatre catégories — organisation de fichiers et de documents, traitement de tableaux de données, communication et tâches quotidiennes, apprentissage et retours d'expérience — pour juger d'abord s'il mérite une lecture attentive.

## Usage 2 : l'e-mail de relance (chinois puis anglais, en deux étapes)

```text
Rédige un e-mail au responsable Zhao de notre fournisseur, adresse koi@cakegrowth.com, contenu :
demander l'état de l'expédition du dernier lot d'équipements de bureau. La livraison était prévue le 10 août 2026,
mais aucune information de logistique n'est parvenue. Prier de répondre avant la fin de journée avec les dates
d'expédition et de livraison estimées.
Ton poli et précis, sans paraître autoritaire.
```

L'astuce : **valider d'abord la version chinoise, puis demander la version anglaise** — la démarche en deux étapes est bien plus fiable qu'une génération directe en langue étrangère.

## Usage 3 : la collaboration d'équipe dans le groupe

Ajoutez l'assistant de bureau au groupe projet. Pour l'instant, **dans un groupe, seul le créateur peut la solliciter avec @** (les autres membres voient l'historique), mais les usages courants fonctionnent déjà :

- Le créateur : `@TraeWork transforme les décisions ci-dessus en liste de tâches et écris-la dans Base` ;
- Les membres : consulter le résultat produit par l'IA et poser leurs questions en suivant le message d'origine (à faire relayer par le créateur).

## Usage 4 : le pilotage mobile sur le trajet

Une fois l'app mobile appairée (voir [Installation et synergie des trois plateformes](/fr/traework/02-install)) :

- Envoyez vos instructions depuis Feishu sur votre téléphone pendant le trajet ; si l'ordinateur à la maison est hors ligne, la tâche bascule automatiquement en exécution cloud ;
- Les tâches légères du type « résume le compte rendu de la réunion du jour et rappelle-moi les tâches à suivre demain 9 h » se gèrent entièrement depuis la poche.

## Tableau comparatif d'efficacité

| Tâche | Méthode traditionnelle | Méthode fenêtre de chat |
| --- | --- | --- |
| Lire un document de 10 pages | 20 minutes de lecture complète | Transfert + une phrase → synthèse en 1 minute |
| Rédiger le rapport hebdomadaire | Éplucher ses notes, chercher les mots | Citer ses notes + modèle → premier jet en 1 minute |
| E-mail de relance | Allers-retours chinois-anglais | Validation en chinois → version anglaise finale |
| Synthèse avant la réunion du matin | Copier-coller manuel | Tâche planifiée + notification dans le groupe |

## Points d'attention (encore une fois)

- La première liaison doit être initiée depuis la **version bureau** ;
- La mise en veille de l'ordinateur interrompt les messages ; activez « Garder l'ordinateur en éveil » ;
- Le commutateur « Accès complet » reste désactivé par défaut ;
- Prudence avec les documents sensibles : par défaut, les conversations peuvent servir à l'amélioration produit ; activez le [mode confidentialité](/fr/traework/08-computer-browser) si besoin.
