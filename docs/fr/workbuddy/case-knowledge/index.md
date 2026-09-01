# Chapitre 16 : Des favoris à la gestion des connaissances — l'essentiel est de s'en resservir

## Tous les outils sont installés, mais le savoir reste éparpillé

Si vous utilisez simultanément WPS, ima, Obsidian, les favoris WeChat, les comptes rendus de réunion et des fichiers locaux, comment répartir les rôles pour éviter « une copie partout, mais aucune de confiance » ?

## Définir d'abord la version maîtresse, puis connecter les outils

Un système de connaissances personnel robuste peut avoir plusieurs points d'entrée, mais une seule version maîtresse clairement identifiée :

| Système | Rôle recommandé | À ne pas lui confier |
| --- | --- | --- |
| WPS / Kdocs | Documents de travail, tableaux, notes collaboratives et savoir d'équipe | Unique sauvegarde de tous vos documents personnels bruts |
| ima | Collecte dans l'écosystème WeChat, Q&R mobile et recherche en base de connaissances | Conservation de conclusions de seconde main sans source |
| Obsidian | Markdown local, liens bidirectionnels, Wiki thématique et migration à long terme | Déplacements ou renommages massifs par automatisation sans sauvegarde |
| Favoris WeChat / outils d'idées | Entrée à faible friction et boîte de réception temporaire | Archivage définitif et recherche structurée |
| Feishu / Tencent Docs | Collaboration d'équipe, commentaires et copies publiées | Élargir par défaut la visibilité des documents privés |

## Scénario 1 : l'idée surgit, on ne note qu'une phrase

Les idées craignent deux traitements : ne pas avoir été notées à temps, ou voir l'IA transformer aussitôt une phrase en article apparemment complet mais détourné de l'intention d'origine.

Skills utiles : [Inspiration Hunter](https://skillhub.cn/skills/inspiration-hunter-skill) (classement automatique et écriture dans une boîte de réception Markdown), [ima-skills](https://skillhub.cn/skills/ima-skills) (prise de notes mobile, lecture/écriture et recherche en base de connaissances) ; si un répertoire local Obsidian sert de version maîtresse durable, branchez un Skill de type Wiki.

```text
Consigne dans la « boîte à idées » le contenu suivant, en gardant mes mots exacts, sans amplification ni jugement :
« Le véritable seuil des outils IA, ce n'est pas le prompt, c'est la validation du résultat. »
```

![](/workbuddy/case-knowledge/assets/001_image_M29JbJQ3po.png)

## Scénario 2 : plein de favoris WeChat, introuvables au moment d'écrire

Skills utiles : [Base de connaissances des favoris WeChat](https://skillhub.cn/skills/wechat-favorite) (export, classement, vers ima / Obsidian / Notion), [URL to Obsidian](https://skillhub.cn/skills/url-to-obsidian) (capture de pages web, résumé et enregistrement dans le Vault), [Extraction de contenus de Comptes officiels WeChat](https://skillhub.cn/skills/wxpublic-fetch) (articles de Compte officiel WeChat sauvegardés en Markdown local).

```text
Traite les favoris WeChat de la semaine, en lecture seule, sans supprimer les favoris d'origine.
```

![](/workbuddy/case-knowledge/assets/002_byKl8HZ2_TtombzmOwo.jpg)

## Scénario 3 : ima comme passerelle mobile vers le savoir

La force d'ima n'est pas « des réponses plus futées », mais la collecte mobile, la lecture/écriture en base de connaissances et la continuité avec le contexte WeChat. Avec [ima-skills](https://skillhub.cn/skills/ima-skills), précisez d'abord la base cible et les règles d'écriture.

```text
Place les 3 fichiers que je viens de sélectionner dans la boîte de réception de la base « Cas WorkBuddy » d'ima.
```

![](/workbuddy/case-knowledge/assets/003_image_D0c8blIsEo.png)

## Scénario 4 : Obsidian n'est pas un dossier, mais un Wiki maintenable

Skills utiles : [Organisation de notes Obsidian](https://skillhub.cn/skills/obsidian-core-notes) (maintenance des notes centrales, synthèses thématiques et liens de sommaire), [mémoire long terme agent + Obsidian](https://skillhub.cn/skills/obsidian-memory) (lecture/écriture de mémoire long terme avec un périmètre projet explicite).

```text
Donne un article de Compte officiel WeChat à WorkBuddy pour l'analyser, puis demande à le placer dans le répertoire de ressources Obsidian indiqué.
```

WorkBuddy reconnaît le corps de l'article et son auteur, puis génère une entrée Markdown.

![](/workbuddy/case-knowledge/assets/004_test_SSsAbxS8po.jpg)

---

> Pour aller plus loin sur « sur quoi l'IA se fonde » (différences entre base de connaissances, RAG et mémoire), voir [Pour aller plus loin : comprendre le système de travail IA](/fr/workbuddy/11-ai-work-system/).
