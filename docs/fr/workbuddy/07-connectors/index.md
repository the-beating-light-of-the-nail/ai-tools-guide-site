# Chapitre 7 : Utiliser les connecteurs dans WorkBuddy



**MCP** désigne le **Model Context Protocol (protocole de contexte de modèle)**, un protocole ouvert lancé et open-sourcé par Anthropic fin 2024, aujourd'hui devenu l'une des infrastructures les en vogue du monde de l'IA.

Pour filer une métaphore parlante : **MCP est le « port USB-C » du monde de l'IA.**



## Pourquoi MCP ?

Autrefois, pour connecter un assistant IA (Agent) à des outils externes (GitHub, système de fichiers local, base PostgreSQL, Slack, etc.), les développeurs devaient écrire du code d'intégration dédié pour « chaque application IA » et « chaque outil ». Avec 10 applications IA et 10 outils, il fallait écrire 100 interfaces — le cauchemar d'intégration en N × M.



Avec MCP, le développeur d'un outil n'écrit qu'un seul « MCP Server » conforme au standard (l'équivalent d'un périphérique USB-C), et toute application IA compatible MCP (Cursor, les frameworks d'Agents, etc.) n'a qu'à embarquer un « MCP Client » (l'équivalent du port USB-C) pour un fonctionnement **plug-and-play**. La complexité en N × M se réduit à N + M.



## Caractéristiques clés de MCP

- Un protocole standardisé et unifié (fini les roulements répétés)

MCP fournit une spécification commune (fondée sur JSON-RPC). Lire des fichiers locaux, interroger une base de données ou appeler une API SaaS tierce : l'IA comprend et appelle tout via la même logique de protocole. Cela abaisse fortement la barrière de l'intégration d'outils dans le développement d'Agents, et laisse les développeurs se concentrer sur la logique cœur de l'Agent plutôt que sur du code d'interfaçage fastidieux.

- Trois capacités fondamentales

MCP permet à l'IA de non seulement « agir », mais aussi de « consulter des données » et de « suivre la méthode éprouvée », en standardisant trois primitives :

- **Tools (outils)** : permettre à l'IA d'exécuter des opérations. Par exemple : lancer un script, créer un ticket dans Jira, écrire dans une base de données.
- **Resources (ressources/contexte)** : permettre à l'IA de lire des données externes. Par exemple : récupérer la liste des fichiers d'un dépôt Git, chercher des extraits dans une base vectorielle, pour nourrir le contexte de la réponse.
- **Prompts (modèles de prompts)** : fournir des modèles d'interaction prédéfinis, pour déclencher de façon standardisée des workflows complexes.

- Architecture client-serveur et découplage poussé ; MCP adopte une architecture Client-Server :

  - **MCP Host** : l'application hôte IA que vous utilisez (IDE, plateforme d'Agents).
  - **MCP Client** : le composant du Host qui maintient une connexion 1:1 avec un Server.
  - **MCP Server** : un programme autonome léger, chargé d'exposer des outils ou des données spécifiques.

Ce découplage signifie que vous pouvez changer le grand modèle sous-jacent ou ajouter de nouvelles sources de données à tout moment, sans reconstruire tout le système d'Agents.

- Priorité au local et sécurité (respect de la vie privée)

MCP communique via les entrées/sorties standard locales (stdio) ou en HTTP local. Votre MCP Server peut donc tourner entièrement sur votre ordinateur. Les données sensibles (code local, contenu de bases privées, données d'un back-office e-commerce) n'ont pas besoin d'être envoyées à des serveurs tiers dans le cloud ; le modèle IA n'accède au contexte nécessaire qu'au moment de l'inférence, ce qui renforce considérablement la sécurité des données en contexte d'entreprise.



## Charger un connecteur

**Les connecteurs déjà pris en charge incluent QQ Mail, Tencent Docs, Tencent Lexiang, Tencent Meeting, TAPD, etc.**

![](/workbuddy/07-connectors/assets/001_image_IZzfbK38Ao.png)

Chargeons par exemple le connecteur Tencent Meeting,

![](/workbuddy/07-connectors/assets/002_image_WF3ab0WSbo.png)

![](/workbuddy/07-connectors/assets/003_image_ZssEbuMsdo.png)



## Créer une tâche

« Crée-moi une réunion demain à 15 h »,

![](/workbuddy/07-connectors/assets/004_image_KVIJbpUZdo.png)

Sujet « Discussion projet », durée 1 h

![](/workbuddy/07-connectors/assets/005_image_FPy1bGJJZo.png)

Création réussie

![](/workbuddy/07-connectors/assets/006_image_WQ6Zb1Rero.png)



## Créer un nouveau connecteur

Dans le coin supérieur droit de la page de gestion des connecteurs, cliquez sur « Connecteur personnalisé » et suivez l'assistant pour configurer le MCP (adresse du service, mode d'authentification). Notez que le périmètre d'accès d'un connecteur personnalisé est défini par l'utilisateur.

![](/workbuddy/07-connectors/assets/007_image_M2itbQUceo.png)
