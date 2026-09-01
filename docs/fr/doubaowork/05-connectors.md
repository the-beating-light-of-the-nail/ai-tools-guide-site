# Connecteurs : commencez par une petite tâche vérifiable

Le rôle d'un connecteur est simple : **permettre à Doubao Work de lire ou de piloter des outils externes**. Inutile d'apprendre par cœur MCP, JSON-RPC et tout le vocabulaire — regardez d'abord s'il ramène de vraies données.

## Comprendre MCP : l'USB-C du monde de l'AI

**MCP** (Model Context Protocol, protocole de contexte de modèle) est un standard ouvert lancé et ouvert par Anthropic fin 2024, aujourd'hui l'une des infrastructures les plus en vue du domaine. En clair, **MCP est le « port USB-C » du monde de l'AI**.

Pourquoi en avoir besoin ? Auparavant, pour connecter un assistant AI à des outils externes (GitHub, fichiers locaux, bases de données, Slack…), les développeurs devaient écrire du code d'intégration pour « chaque application AI × chaque outil » — 10 applications avec 10 outils, cela faisait 100 intégrations. Avec MCP, chaque éditeur d'outil développe un seul MCP Server (le périphérique USB-C), chaque application AI embarque un MCP Client (le port USB-C), et tout se branche à chaud : la complexité passe de N × M à N + M.

## Frontières de sécurité

Le chemin des données et les limites de sécurité d'un connecteur dépendent de son implémentation, de son mode d'authentification et de son fournisseur :

- Avant utilisation, vérifiez la **provenance du connecteur, le compte autorisé, le périmètre accessible et les droits d'écriture** ;
- Avec des données sensibles, suivez les exigences de sécurité de votre organisation et **ne présumez pas que tous les connecteurs traitent les données uniquement en local**.

## Charger et créer des connecteurs

Doubao Work propose aujourd'hui des connecteurs pour **WeChat Work, DingTalk, Tencent Meeting, Tencent Docs, Notion, Baidu Netdisk, les cartes et les données financières**, entre autres.

**Charger un connecteur existant** : dans la page « Skills · Connecteurs · Partenaires », cherchez (par ex. « Tencent Meeting »), cliquez sur le « + » à droite pour l'ajouter et suivez les indications pour l'autoriser.

**Créer un connecteur personnalisé** : sur la même page, cliquez sur « Créer » en haut à droite → « Créer un connecteur personnalisé », puis configurez l'adresse du service et le mode d'authentification selon l'assistant. Avant d'autoriser, vérifiez la provenance du service, le périmètre d'accès, la capacité d'écriture et la façon dont les identifiants sont conservés.

## Chercher, autoriser, tester

Une fois le connecteur trouvé, examinez sa provenance, son périmètre de permissions et les actions prises en charge. Trois règles : **lecture seule d'abord, pas d'écriture inutile ; données de test d'abord, pas de données réelles ; jamais d'identifiants collés dans un prompt.**

Une tâche de validation minimale — avec un outil de QR codes connecté, faire un cycle « génération + auto-contrôle » :

```text
Utilise l'outil de QR codes connecté pour générer un QR code à partir de l'URL publique que je fournis.
Après génération, décode-le toi-même pour vérifier que le résultat correspond exactement à l'URL d'origine, puis livre l'image et le résultat de la vérification ensemble.
Ne raccourcis, ne reformule et ne redirige pas l'URL.
```

Si vous devez interconnecter un système interne d'entreprise, commencez par une **version en environnement de test** du connecteur personnalisé : permissions au périmètre minimal, et confirmation humaine conservée pour les actions d'écriture et de suppression.

---

Prochaine étape : donnez-lui les « façons de faire standard » — [Comment choisir et utiliser un Skill →](/fr/doubaowork/06-skills)
