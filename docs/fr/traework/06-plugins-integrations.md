# Plugins et autorisation d'applications externes

Les plugins connectent à TraeWork des outils, services et sources de données externes ; l'autorisation d'applications externes laisse l'IA manipuler directement vos données dans Feishu ou GitHub. En combinant les deux, TraeWork s'installe vraiment dans votre flux de travail.

> Documentation officielle : [work_plugins](https://docs.trae.cn/work_plugins) ｜ [Les sept plugins populaires](https://docs.trae.cn/work_seven-popular-plugins-in-traework)

## Installer un plugin : trois étapes

1. En haut de la barre de navigation de gauche, cliquez sur « Marketplace de plugins » (onglet « Plugins » par défaut) ;
2. Trouvez le plugin voulu et cliquez sur l'icône « Installer le plugin » à droite de la carte (ou « Ajouter le plugin » en haut à droite de la page de détails) ;
3. Pour les plugins nécessitant un service externe, suivez les instructions pour compléter l'autorisation.

À l'usage : **avant de commencer la conversation**, sélectionnez les plugins disponibles en bas à gauche de la zone de saisie (plusieurs possibles). Les plugins doivent être choisis avant le début de la conversation ; en état désactivé, ils ne peuvent pas être utilisés en cours de dialogue.

## Les sept plugins populaires en bref

| Plugin | Ce qu'il permet | Point fort |
| --- | --- | --- |
| **Feishu** | Messages, Feishu Docs, Drive, Base, Calendar, tâches, approbations, réunions, Minutes, OKR | Le choix privilégié pour la bureautique ; exemple d'instruction « planifier le rendez-vous lundi prochain à 10 h » |
| **Tencent Docs** | Créer/lire/modifier Word, Excel, présentations, documents intelligents, feuilles intelligentes, cartes heuristiques, diagrammes de flux | Toute la collaboration documentaire en ligne |
| **WeChat Work** | Recherche dans l'annuaire et les messages ; gestion des réunions, agendas, tâches, documents et feuilles en ligne | Exemple : « ajouter une tâche due demain à 18 h » |
| **Remotion** | Produire des vidéos en écrivant du code React (mise en page, animations, sous-titres, audio) | Vidéo par code, idéal pour des formats courts programmatiques |
| **HyperFrames** | Produire des vidéos en HTML + CSS + GSAP | Rendu lavis d'encre, couleur de marque en exemple : #11C566 |
| **Tonghuashun iFinD** | Recherche de données financières et analyse d'investissement (clé API requise, données en version gratuite ou par abonnement) | À noter : les cotations obligataires en temps réel excluent le marché interbancaire |
| **TDX** | Cotations actions A / fonds / indices / actions hongkongaises, sélection d'actions selon critères (limite haute, faible PE, croisement MACD, etc.) | Ne prend pas en charge futures, options, obligations |

> Avertissement officiel : le contenu des plugins financiers sert uniquement à illustrer les capacités et ne constitue pas un conseil en investissement.

## Autorisation d'applications externes : Feishu

Une fois autorisée, l'application lit et écrit Feishu Docs, Base, Calendar, messages, messagerie, réunions, etc., sans configuration manuelle de serveur MCP :

1. « Marketplace de plugins » en haut du panneau de gauche → « Gérer » en haut à droite → onglet « Autorisation d'applications » ;
2. À droite de l'application Feishu, cliquez sur « Lier » ; vous êtes redirigé vers la page d'autorisation Feishu ;
3. Cochez les permissions → « Confirmer l'autorisation » → vérifiez compte et permissions sur la page de confirmation → cliquez sur « Autoriser ».

13 modules peuvent être autorisés (par granularité de capacité) : Base (environ 38 opérations, le plus riche), Feishu Docs (25), messagerie instantanée (18), base de connaissances (14), Calendar / tâches / réunions / messagerie électronique (10 chacun), espace cloud (8), présentations, approbations, annuaire, feuilles de calcul, obtention de l'identité utilisateur. Après autorisation, TraeWork installe automatiquement la CLI locale et les Skills associés.

Trois chaînes de scénarios données par l'officiel :

```text
① Piloté par cahier des charges : envoyer un document cloud → lire le contenu → travailler à partir du document → écrire l'avancement dans le document
② Piloté par Base : chercher des enregistrements → lire le détail des tâches → exécuter → créer/mettre à jour le statut des enregistrements
③ Synchronisation collaborative : créer un événement d'agenda → lire le compte rendu de réunion → modifier les documents cloud associés
```

## Autorisation d'applications externes : GitHub

Accès : avatar en bas à gauche → Paramètres → « Autorisation d'applications externes » → « Connecter » sur GitHub → connectez-vous et autorisez TRAE-AI CN. Une fois autorisé, vous pouvez :

- **PR créée par l'IA** : l'IA compare les deux branches et génère un résumé → création de la PR en un clic → ouvrez la fenêtre GitHub pour confirmer la fusion ;
- **PR manuelle** / **vérification de PR par l'IA** : laisser l'IA examiner d'abord les fichiers modifiés, puis passer à la revue git diff.

⚠️ L'application GitHub **n'est prise en charge qu'en mode Code** ; sur la version bureau, il faut ouvrir un projet rapatrié depuis GitHub et basculer en « cloud ».

## Limites des permissions

- L'agent n'appelle les services correspondants que **dans le périmètre autorisé** ;
- Les entrées des fonctions d'intégration sont réparties en deux endroits : Paramètres > Autorisation d'applications externes (niveau compte), Marketplace de plugins > Gérer > Autorisation d'applications (niveau plugin) ; en cas de doute, vérifiez les deux.

---

Étape suivante : [Tâches automatisées planifiées →](/fr/traework/07-automated-tasks)
