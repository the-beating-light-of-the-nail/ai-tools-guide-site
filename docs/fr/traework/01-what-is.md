# Qu'est-ce que TraeWork

**TraeWork** est un espace de travail natif IA lancé par ByteDance (slogan officiel « laissez TRAE travailler pour vous »), officiellement publié en juin 2026. Vous décrivez votre objectif en une phrase en langage naturel ; il décompose lui-même les étapes, mobilise les Skills et les outils, puis livre des résultats concrets — documents, rapports de données, présentations, pages web — au lieu de simplement « répondre à des questions ».

> Page produit officielle : [trae.cn/work](https://www.trae.cn/work) ｜ Documentation officielle : [docs.trae.cn](https://docs.trae.cn/work_what-is-trae-work)

## Quel lien avec TraeCode (Trae IDE)

La famille TRAE compte plusieurs gammes de produits, et voici les deux plus faciles à confondre :

| | TraeCode | TraeWork |
| --- | --- | --- |
| Positionnement | IDE natif IA (programmation) | Espace de travail natif IA (bureautique) |
| Public | Ingénieurs développeurs | Chefs de produit, opérations, analystes de données et autres profils non développeurs |
| Tâches types | Écrire du code, déboguer, gérer des bases de code | Documents, données, présentations, recherche, automatisation |

À retenir : TraeWork est né des capacités du mode SOLO de TraeCode, mais c'est une **application bureau indépendante, qui ne dépend pas de TraeCode pour fonctionner**. Les deux appartiennent au même système de compte TRAE ; les règles de partage des crédits sont détaillées dans [Modèles et crédits : éviter les pièges](/fr/traework/adv-models-credits).

Note sur la section homonyme de ce site : nous nous concentrons sur les usages bureautiques, donc sur TraeWork ; le TraeCode destiné aux développeurs ne fait pas partie du périmètre de ce site.

## Les trois modes

Dans TraeWork, le coin supérieur gauche de l'interface permet de basculer entre trois modes :

| Mode | Pour qui | Pour quoi faire |
| --- | --- | --- |
| **Work** | Utilisateurs non développeurs (produit, opérations, analystes de données) | Documents, traitement de données, présentations — le fil principal de ce tutoriel |
| **Code** | Ingénieurs développeurs | Codage, débogage, gestion de base de code, flux Git |
| **Design** | Utilisateurs avec des besoins de design | L'IA gère de bout en bout création, modifications et livraison finale |

## Les trois plateformes

- **Version web** : [work.trae.cn](https://work.trae.cn/), environnement cloud sans installation, prêt à l'emploi, qui ne consomme pas de ressources locales. Idéale pour les besoins ponctuels, en déplacement ou pour valider rapidement une idée.
- **Version bureau** : à récupérer depuis le centre de téléchargement de [trae.cn](https://www.trae.cn/) (macOS / Windows), prend en charge deux environnements d'exécution, local et cloud ; adaptée à un usage durable et aux projets complexes.
- **Application mobile** : cherchez « TRAE » dans l'app store, son rôle est d'être le « centre de lancement de tâches multi-appareils » — lancer des tâches, suivre l'avancement et recevoir les résultats pendant les trajets. À noter : la version mobile ne propose que les modes Work et Code (pas de Design).

Les trois plateformes **partagent le même système de compte et les mêmes données de tâches**, synchronisées en temps réel. Répartition typique : lancement de la tâche depuis le mobile → exécution dans le bac à sable cloud ou sur un ordinateur appairé → renvoi du résultat.

## Panorama des capacités clés

- **Exécution automatique des tâches** : vous fixez l'objectif, l'IA décompose les étapes, mobilise Skills et outils, et vous validez
- **Assistant de bureau** : lié à Feishu / WeChat, donnez des tâches directement dans la fenêtre de chat (voir [Assistant de bureau](/fr/traework/05-bot-assistant))
- **Autorisation d'applications externes** : une fois autorisée, l'IA manipule directement Feishu Docs / Base / Calendar, GitHub, etc.
- **Marketplace de plugins** : Feishu, Tencent Docs, Tonghuashun iFinD, TDX, vidéos Remotion et autres plugins populaires
- **Tâches automatisées** : exécution planifiée de veilles d'actualités, rapports hebdomadaires, surveillance concurrentielle, etc.
- **Les Skills** : équiper l'IA d'un « mode d'emploi de compétences expertes », chargé à la demande (voir [Skills](/fr/traework/04-skills))
- **Contrôle de l'ordinateur / du navigateur** : une fois autorisée, l'IA pilote les interfaces, remplit les formulaires, extrait les données
- **Discussion vocale** : clarifiez les besoins en discussion vocale multi-tours ; après la réunion, transcription et nettoyage automatiques en compte rendu structuré

## Lien avec les autres outils de ce site

- **WorkBuddy** (Tencent) : espace de travail d'agents IA bureautiques, le concurrent le plus direct de TraeWork
- **TraeWork** (ByteDance) : espace de travail natif IA, avec pour points forts la synergie des trois plateformes et l'écosystème de plugins
- **QoderWork** (Alibaba) : assistant de travail intelligent sur ordinateur, fort en automatisation du navigateur et canaux IM

Les trois suivent une approche similaire (délégation de tâches + Skills + planification + IM), avec des arbitrages différents dans le détail. Pour un usage bureautique, installez-les tous et choisissez selon vos sensations ; de nombreux chapitres se lisent en regard.

---

Étape suivante : [Installation, connexion et synergie des trois plateformes →](/fr/traework/02-install)
