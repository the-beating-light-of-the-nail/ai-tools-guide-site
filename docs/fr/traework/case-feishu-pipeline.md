# Étude de cas : pipeline automatisé Compte officiel WeChat → base de connaissances Feishu

> Adapté du post de terrain de HancksLiu (chef de produit), utilisateur du forum officiel TRAE : [« J'ai construit avec TraeWork un pipeline automatisé "articles de Compte officiel WeChat → base de connaissances Feishu" »](https://forum.trae.cn/t/topic/172002) (juillet 2026). Les Skills associés sont open source : [yucai0302/wechat-to-feishu-kb](https://github.com/yucai0302/wechat-to-feishu-kb).

## Trois douleurs

1. **Écosystème WeChat fermé** : les crawlers génériques ne récupèrent des articles de Compte officiel WeChat que des pages vides ou un message « à ouvrir dans le client WeChat » ; les moteurs de recherche IA ne traversent pas la protection CDN de WeChat, et les outils type « mise de côté en un clic » sont globalement inefficaces sur les Comptes officiels ;
2. **Lecture et capitalisation disjointes** : les articles mis de côté ne sont jamais rouverts et n'entrent jamais dans une base de connaissances personnelle ou d'équipe pour recherche et réutilisation ;
3. **Le classement manuel coûte trop cher** : 15 à 20 minutes par article de 5000 caractères, 10 à 15 articles par semaine, soit 3 à 4 heures de seul archivage.

## Architecture : deux Skills + double mode

```text
Skill 1  wechat-article-saver     récupérer l'article du Compte officiel → Markdown local
Skill 2  wechat-to-feishu-kb      Markdown local → base de connaissances Feishu
─────────────────────────────────────────────
Mode immédiat : lien de l'article envoyé dans le chat → déclenchement automatique du Skill : récupération + écriture
Mode lot      : liens collés ligne par ligne dans pending.txt → tâche planifiée chaque soir à 22 h
```

### Récupération : stratégie de repli à quatre niveaux

L'anti-crawl des Comptes officiels WeChat est la difficulté centrale ; le Skill intègre quatre niveaux de repli, dès qu'un niveau réussit, on continue :

1. Playwright + Chromium en navigateur headless ;
2. HTTP fetch avec en-têtes anti-crawl (User-Agent, Accept-Language, etc.) ;
3. Outil WebFetch intégré à TraeWork ;
4. Repli : collage manuel du texte original.

Le corps est extrait par Mozilla Readability et converti en Markdown par Turndown, environ 30 secondes par article.

### Capitalisation : la brique Feishu

Côté Feishu, seules deux capacités de lark-cli sont utilisées : `wiki + node-create` (créer un nœud de base de connaissances) et `docs + update` (écrire le contenu). Une double sauvegarde Markdown reste en local, indexable directement par Obsidian / Notion / Logseq.

## Résultats

| Indicateur | Avant | Après |
| --- | --- | --- |
| Traitement d'un article | 15-20 minutes | 5 s (immédiat) / 0 s (planifié) |
| Économie hebdomadaire | — | 3-4 heures |
| Économie mensuelle | — | environ 15 heures |
| Connaissances recherchables | prennent la poussière dans les favoris | 100 % (questions-réponses IA Feishu + recherche plein texte locale) |
| Réutilisation d'équipe | aucune | base de connaissances accessible à tous |

## La leçon principale : le prompt d'une tâche planifiée

À la première configuration, l'auteur n'avait écrit que « récupérer les articles et les stocker dans la base de connaissances » — **échec** : manquaient space_id, méthode d'authentification, chemins de fichiers. La leçon retenue :

> **Une tâche planifiée est fondamentalement une « conversation sans surveillance » : plus le prompt est détaillé, plus c'est stable.**

Une fois les étapes complètes, les paramètres et la logique de gestion d'erreurs écrits dans l'instruction, tout passe du premier coup. Voir la liste de rédaction dans [Tâches automatisées planifiées](/fr/traework/07-automated-tasks).

## Adapter à votre cas

Le squelette de ce pipeline est générique :

```text
Source (liens/e-mails/rapports) → Skill de récupération (repli multi-niveaux) → format intermédiaire normalisé
→ Skill de capitalisation (Feishu/Notion/base locale) → double mode planification + conversation immédiate
```

Sources remplaçables : pages de veille sectorielle, changelogs concurrents, avis sur les app stores, e-mails de rapports d'équipe. L'auteur reconnaît aussi la limite actuelle — la collecte via le pending.txt local « n'est pas encore assez intelligente » ; la recommandation automatique idéale bute sur la fermeture de l'écosystème WeChat.

## Rappel de sécurité

- Si le flux de récupération implique des identifiants de connexion, évitez les appareils publics ;
- Respectez les droits d'auteur : archiver pour soi et redistribuer sont deux choses différentes ; dans une base d'équipe, attention au périmètre d'autorisation.
