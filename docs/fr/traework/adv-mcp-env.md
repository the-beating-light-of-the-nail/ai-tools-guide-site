# Approfondissement : MCP et environnements d'exécution cloud

Pour les systèmes externes que les plugins ne couvrent pas, passez par MCP ; pour les tâches que l'environnement local ne peut pas porter, utilisez l'environnement d'exécution cloud.

> Documentation officielle : [work_mcp-overview](https://docs.trae.cn/work_mcp-overview) ｜ [work_set-up-the-remote-environment](https://docs.trae.cn/work_set-up-the-remote-environment)

## MCP : le port USB du monde de l'IA

MCP (Model Context Protocol, protocole de contexte de modèle) permet aux grands modèles d'accéder à des outils et services personnalisés. Dans TraeWork, l'agent agit comme **client MCP** et sollicite un serveur MCP pour utiliser ses outils.

Flux d'usage : ① ajouter vous-même un serveur MCP → ② l'ajouter à un agent personnalisé → ③ l'agent appelle ses outils.

**Trois types de transport** :

| Type | Emplacement | Détail |
| --- | --- | --- |
| stdio | Local | Lancement en ligne de commande locale |
| HTTP (SSE) | Local / distant | Méthode distante classique |
| Streamable HTTP | Local / distant | Évolution du SSE, recommandé |

Environnement d'exécution au choix : local (tâches locales uniquement, version bureau) ou cloud (tâches cloud et projets rapatriés depuis GitHub).

**Périmètre de responsabilité à connaître** : les serveurs MCP sont construits et maintenus par des tiers ; TraeWork ne les audite ni ne les cautionne, et n'est pas responsable de leur comportement, des échecs d'appel ni des données renvoyées. Avant d'en connecter un, vérifiez les permissions demandées — comme expliqué dans [le principe MCP de la section WorkBuddy](/fr/workbuddy/11-ai-work-system/) : **MCP règle le « comment se connecter » ; la sécurité une fois connecté relève de votre responsabilité**.

> Conseil aux utilisateurs bureautiques : privilégiez les connexions prêtes à l'emploi de la marketplace officielle (Feishu, Tencent Docs, etc.) ; ne montez un MCP maison qu'en cas de réel besoin d'un système privé.

## L'environnement d'exécution cloud

Il fournit aux agents cloud un environnement d'analyse, d'exécution et de débogage dans le cloud, avec un runtime et une gestion des dépendances unifiés — fini le « ça marche sur mon poste ». Adapté aux tâches qui doivent tourner en environnement isolé, gérer des dépendances de projet ou déboguer du complexe avec l'IA.

**Étapes de création** :

1. Avatar en bas à gauche > Paramètres → « Environnement d'exécution cloud » à gauche ;
2. « Créer » en haut à droite, renseignez les paramètres et confirmez.

**Paramètres clés** :

| Paramètre | Détail |
| --- | --- |
| Dépendances préinstallées | Image de base + versions de langage (Python 3.10–3.14, Node.js 18–24, Go, Rust, Java 11–25, Ruby, PHP, Swift) |
| Variables d'environnement | Ordinaires (en clair, 100 max) / sensibles (stockage chiffré KMS, 50 max) |
| Scripts d'exécution | install (≤10 Ko, bloquant), start (≤10 Ko, non bloquant), terminals (10 max) |
| Liste blanche réseau | Sources courantes : npm, pypi, maven, github, docker, etc. |

Accès : les tâches web sont toutes dans le cloud ; sur la version bureau, basculez sur « cloud » en bas à gauche de la zone de saisie puis choisissez l'environnement.

**Limites** : l'environnement cloud personnalisé **ne fonctionne qu'en mode Code** ; images de conteneurs et politiques réseau personnalisées ne sont pas encore prises en charge. Pour la plupart des usages bureautiques, l'environnement cloud par défaut suffit — inutile d'en construire un.

## Tâche locale ou tâche cloud : un tableau de décision

| Situation | Choix | Raison |
| --- | --- | --- |
| Manipuler des fichiers locaux | Local | Le cloud n'atteint pas votre disque |
| Données sensibles | Local (+ mode confidentialité) | Les données ne quittent pas la machine |
| Longue durée sans occuper le poste | Cloud | Exécution isolée dans le bac à sable cloud |
| Environnement de dépendances spécifique | Cloud (environnement dédié) | Runtime unifié |
| Lancement depuis la version web | Cloud obligatoire | La version web n'a pas d'environnement local |
| Tâche planifiée | Cloud plus fiable | Indépendant de votre ordinateur allumé |
