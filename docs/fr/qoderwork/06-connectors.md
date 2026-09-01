# Connecteurs et MCP

Les connecteurs sont les ponts entre QoderWork et les systèmes externes — une fois activés, l'IA peut, comme vous, piloter le navigateur, lire et écrire l'agenda et les e-mails du système, se brancher à Microsoft 365 et DingTalk. MCP est le protocole ouvert pour connecter davantage d'outils externes.

> Documentation officielle : [connectors](https://docs.qoder.com/zh/qoderwork/connectors) ｜ [pratique DingTalk MCP](https://docs.qoder.com/zh/qoderwork/mcp-walkthrough)

## Panorama des connecteurs

Accès commun : navigation de gauche → Extensions → Connecteurs (onglets « Marketplace » / « Installés »). **Tous désactivés par défaut** ; QoderWork n'obtient l'accès correspondant qu'après votre autorisation et configuration explicites.

| Catégorie | Connecteurs |
| --- | --- |
| Intégrés | **Navigateur** (opérations web, extraction de données, formulaires), **apps macOS** (Rappels, Calendrier, Notes, Mail, Contacts), **Microsoft 365** (Outlook/Calendrier/Contacts/To Do/OneNote/OneDrive) |
| Marketplace d'intégrations | DingTalk, Feishu, Notion, Linear, Todoist, Canva, Supabase, Vercel, Neon, Slack, Figma, Google Agenda, Google Maps, LINE, Qichacha, etc. |

## Étapes de connexion (trois cas fréquents)

**Connecteur navigateur** (la capacité signature de QoderWork) : dans la page des connecteurs, « Navigateur » → + → « Installer dans le Chrome Web Store » → le statut passe à « Extension connectée ». Il réutilise vos vraies sessions de navigateur — extractions depuis les back-office et remplissage de formulaires sans nouvelle connexion.

**Microsoft 365** : « Connecter un compte Microsoft » → connexion dans la fenêtre du navigateur → confirmez l'autorisation.

**DingTalk** : onglet « Marketplace » → carte DingTalk → « Se connecter à DingTalk » pour autoriser.

⚠️ Limite clé : **après activation d'un connecteur, il faut créer une nouvelle tâche de conversation pour que cela prenne effet** ; ne demandez pas dans l'ancienne conversation pourquoi rien ne réagit.

## MCP : le port USB du monde de l'IA

MCP (Model Context Protocol) est un protocole ouvert qui standardise la connexion entre applications IA et outils externes. Ajout : « + Ajouter » en haut à droite de la page des connecteurs, deux façons :

1. **Coller une configuration JSON** pour importer (recommandé) ;
2. Saisie manuelle.

Deux types de serveurs : **Streamable HTTP / SSE** (hébergé à distance, accès par URL, le premier recommandé) ; **STDIO** (lancement en ligne de commande locale, nécessite Node.js/Python). Exemple de structure JSON :

```json
{
  "mcpServers": {
    "DingTalk Docs": {
      "type": "streamable-http",
      "url": "https://mcp-gw.dingtalk.com/mserver/...key=..."
    }
  }
}
```

## En pratique : connecter DingTalk MCP (quatre étapes)

DingTalk a sa propre marketplace MCP, adaptée aux équipes déjà sur DingTalk :

1. Ouvrez [mcp.dingtalk.com](https://mcp.dingtalk.com) et connectez-vous ; cherchez par mot-clé (le badge « sélection de la plateforme » marque les recommandations officielles) ;
2. Sur la page de détails du MCP, dans la zone « Utiliser MCP » à droite, copiez le JSON Config ;
3. Page des connecteurs QoderWork « + Ajouter » → collez le JSON → « Importer via JSON » (les MCP DingTalk ne demandent généralement pas de Headers supplémentaires : laissez vide) ;
4. Vérification : **un point vert à gauche du nom du service signifie connexion réussie** ; testez ensuite directement en conversation :

```text
Trouve le document intitulé « Plan marketing T3 2026 »
Donne-moi la météo à Pékin (MCP Amap)
Crée un rendez-vous demain à 10 h (MCP DingTalk Calendrier)
```

MCP DingTalk courants : DingTalk Docs, DingTalk Calendrier, DingTalk Annuaire, DingTalk Tâches, DingTalk Groupes, Amap, DingTalk AI Sheets.

## Points d'attention et dépannage

- Le connecteur navigateur ne prend en charge que le **moteur Chromium** (Safari / Firefox non pris en charge pour l'instant) ; pendant l'exécution d'une tâche, évitez de manipuler manuellement les onglets pilotés ;
- Au premier démarrage, les apps macOS demandent des permissions système ; en cas de refus par erreur, autorisez manuellement dans Réglages système → Confidentialité et sécurité ;
- CAPTCHA, validation par SMS et connexion par QR code demandent une reprise en main humaine ;
- Si un MCP ne se connecte pas, vérifiez dans l'ordre : intégrité du JSON/URL → réseau → exigences d'autorisation supplémentaires → suppression et réajout.

**Meilleures pratiques** : donnez directement l'URL dans le prompt ; combinez connecteurs et lecture/écriture de fichiers locaux ; déroulez d'abord un flux complexe à la main, puis figez-le en Skill ou en tâche planifiée.

> Le principe général et les limites de sécurité du MCP (son rapport aux API, le « comment se connecter » et la « sécurité une fois connecté ») : voir [Comprendre le système de travail IA](/fr/workbuddy/11-ai-work-system/) de la section WorkBuddy.

---

Étape suivante : [Canaux IM : pilotage à distance depuis le chat →](/fr/qoderwork/07-im-channels)
