# Tableau des scénarios QoderWork

Index de type dictionnaire, organisé autour du « je veux faire quoi ».

## Localisation des fonctions

| Je veux faire quoi | Qu'utiliser | Voir |
| --- | --- | --- |
| Découvrir les capacités rapidement et gratuitement | Nouvelle tâche + nettoyage du bureau et autres tâches de débutant | [Première tâche](/fr/qoderwork/03-first-task) |
| Laisser l'IA lire et écrire les fichiers locaux | Dossier de travail | [Le dossier de travail](/fr/qoderwork/04-files) |
| Équiper l'IA de « façons de faire de référence » | Skill | [Skills et kits d'experts](/fr/qoderwork/05-skills) |
| Figer un flux répétitif en une phrase | /create-skill | [Créer des Skills en conversation](/fr/qoderwork/adv-skill-create) |
| Laisser l'IA piloter le web (avec session) | Connecteur navigateur | [Connecteurs et MCP](/fr/qoderwork/06-connectors) |
| Pilotage à distance via DingTalk/Feishu/WeChat | Canaux IM | [Canaux IM](/fr/qoderwork/07-im-channels) |
| Exécution planifiée automatique | Tâches planifiées | [Tâches planifiées](/fr/qoderwork/08-automation) |
| Laisser l'IA piloter les logiciels de bureau | Contrôle de l'ordinateur | [Contrôle de l'ordinateur et saisie vocale](/fr/qoderwork/adv-computer-use) |
| Donner des tâches à la voix | Maintenir Fn, saisie vocale | [Contrôle de l'ordinateur et saisie vocale](/fr/qoderwork/adv-computer-use) |
| Affiches/pages d'atterrissage/prototypes UI | Atelier design | [Les trois ateliers](/fr/qoderwork/adv-workbenches) |
| Faire un PPT | Atelier présentations (outline validé d'abord) | [Les trois ateliers](/fr/qoderwork/adv-workbenches) |
| Rédiger textes longs/rapports | Atelier rédaction (versions traçables) | [Les trois ateliers](/fr/qoderwork/adv-workbenches) |
| Faire en sorte que l'IA retienne mes préférences | Mode mémoire | [Mémoire, coûts et environnement sécurisé](/fr/qoderwork/adv-memory-cost) |
| Connecter un système privé | MCP (import JSON) | [Connecteurs et MCP](/fr/qoderwork/06-connectors) |
| Tâches sensibles en environnement isolé | Environnement de travail sécurisé | [Mémoire, coûts et environnement sécurisé](/fr/qoderwork/adv-memory-cost) |

## Par profil

| Vous êtes | Point d'entrée recommandé | Pour aller plus loin |
| --- | --- | --- |
| Grand débutant | [Première tâche](/fr/qoderwork/03-first-task) | [Le dossier de travail](/fr/qoderwork/04-files) |
| Administration/secrétariat | [Étude de cas organisation de fichiers](/fr/qoderwork/case-file-organize) | [Tâches planifiées](/fr/qoderwork/08-automation) |
| Finance | Modèle d'archivage de tickets ([Traitement documentaire par lots](/fr/qoderwork/case-office-docs)) | Planifier la synthèse de notes de frais |
| Opérations/e-commerce | [Étude de cas automatisation navigateur](/fr/qoderwork/case-browser) | Journal planifié + notification IM |
| Analyse de données | [Étude de cas analyse de données](/fr/qoderwork/case-data-report) | Maîtriser les coûts par paliers de modèles |
| RH | Modèle de tri de CV ([Traitement documentaire par lots](/fr/qoderwork/case-office-docs)) | Figer les règles d'adéquation en Skill |
| Juridique/fiscalité | Kits d'experts intégrés (juridique/finance-fiscalité) | [Créer des Skills en conversation](/fr/qoderwork/adv-skill-create) |
| Créateur de contenu | [Les trois ateliers](/fr/qoderwork/adv-workbenches) | [Écosystème de Skills](/fr/qoderwork/05-skills) |
| Grand utilisateur DingTalk | [DingTalk MCP](/fr/qoderwork/06-connectors) + [Canaux IM](/fr/qoderwork/07-im-channels) | — |

## Les cinq erreurs de prompt (documentation officielle)

| ❌ Erreur | ✅ Bonne pratique |
| --- | --- |
| Tout résumer en une phrase | Préciser : objectif + format + contraintes |
| Continuer sans vérifier les résultats | Les erreurs s'amplifient ensuite ; contrôler chaque étape |
| Mélanger plusieurs sujets dans une tâche | Une tâche, un sujet ; nouvelle tâche pour l'hors-sujet |
| N'utiliser aucune pièce jointe | « @fichier + une exigence » vaut mieux qu'une longue description |
| Ne pas dire l'usage | Préciser « pour qui, pour quoi » oriente mieux la sortie |

## Mémo des limites strictes

- Une tâche ne peut être liée qu'à **un seul** dossier de travail ;
- Après activation d'un connecteur, une **nouvelle conversation** est nécessaire ;
- Les tâches planifiées sont pilotées par le **client local** : mise en veille/extinction = pas de déclenchement, pas de rattrapage automatique (« Exécuter maintenant » manuel possible) ;
- CAPTCHA, codes SMS, reconnaissance faciale exigent une intervention humaine ;
- Le connecteur navigateur ne prend en charge que le moteur Chromium ;
- L'historique des tâches est local, sans synchro entre appareils ;
- Les liens de partage de Skills expirent en environ 24 heures.

## Choisir parmi les trois outils

| Besoin | Recommandation | Raison |
| --- | --- | --- |
| Automatisation navigateur (avec session) | QoderWork | Le connecteur réutilise le vrai navigateur |
| Écosystème DingTalk | QoderWork | Canaux IM + marketplace DingTalk MCP |
| Automatisation de logiciels de bureau | QoderWork | Computer Use pris en charge sur les deux plateformes |
| Collaboration Feishu/Tencent Docs approfondie | TraeWork | Autorisation d'applications externes sur 13 modules Feishu |
| Synchro trois plateformes, tâches mobiles | TraeWork | Web/bureau/mobile synchronisés en temps réel |
| Traitement approfondi de la suite bureautique | WorkBuddy | Écosystème de Skills documents/tableurs/PPT mature |
| Tout vouloir | Installez les trois | Comptes indépendants, sans conflit |
