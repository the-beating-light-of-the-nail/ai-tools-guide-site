# Chapitre 5 : Charger un Skill vraiment utile dans WorkBuddy

## Qu'est-ce qu'un Skill ?

WorkBuddy se charge de comprendre la tâche et d'organiser son exécution ; un Skill est un ensemble réutilisable d'instructions, de scripts, de documents de référence et de ressources, qui indique à l'Agent comment réaliser un type de tâche, quels outils appeler et sous quel format livrer.

Un Skill tout à fait standard ressemble à ceci :

```text
my-skill/
├── SKILL.md
├── scripts/
│   └── check.py
├── references/
│   └── guide.md
└── assets/
    └── template.pptx
```

Seul `SKILL.md` est obligatoire ; ses deux premières lignes précisent le nom et l'usage :

```markdown
---
name: tech-article-writing
description: Pour rédiger des articles sur les produits IA, les tests de modèles et le secteur technologique
---

À la réception d'une mission de rédaction :

1. Confirmer d'abord l'angle central de l'article
2. Rechercher des sources de première main
3. Recouper les faits clés
4. Rédiger le brouillon selon le style d'écriture de l'utilisateur
5. Vérifier les tournures interdites et les expressions « trop IA »
```

## Comment fonctionne un Skill

Le élément clé d'un Skill n'est pas SKILL.md, mais la **divulgation progressive (Progressive Disclosure)**. Supposez que votre Agent ait 100 Skills installés : il ne charge pas tout d'un coup dans le contexte, mais procède par trois niveaux, à la demande :

1. **Au démarrage** : il ne lit que le nom et la description de chaque Skill (quelques dizaines à centaines de tokens) ;
2. **Lorsqu'une tâche correspond** : vous dites « écris un article sur WorkBuddy pour le Compte officiel WeChat », l'Agent déduit de la description que `tech-article-writing` est pertinent, et c'est seulement à ce moment qu'il charge le SKILL.md complet ;
3. **Pendant l'exécution** : ce n'est que pour imiter le style d'écriture qu'il lit `references/style.md`, et que pour traquer les tournures « trop IA » qu'il exécute `scripts/check-ai-phrases.py`.

Un Skill résout ainsi un problème qui a longtemps pénalisé les Agents : **comment leur transmettre beaucoup de connaissances et de méthodes de travail, sans tout entasser en permanence dans le prompt.**

## Quelle différence entre Skill et prompt ?

| Dimension | Prompt | Skill |
| --- | --- | --- |
| Rôle central | Décrit la tâche en cours | Définit comment réaliser un type de tâches |
| Cycle de vie | Généralement lié à une requête | Réutilisation à long terme |
| Déclenchement | Saisi par l'utilisateur | Choisi automatiquement par l'Agent ou appelé explicitement |
| Support | Essentiellement du texte | Un dossier |
| Contenu | Instructions, contexte, exemples | Instructions, scripts, références, modèles, ressources |
| Emploi du contexte | Généralement chargé en entier | Chargé à la demande |
| Réutilisation | Souvent par copier-coller | Réutilisable et partageable par conception |

La lecture la plus simple : **Prompt = la tâche, Skill = la méthode.** Ce que vous répétez sans cesse en conversation — « pas trop IA, alterne phrases longues et courtes, n'invente pas d'exemples » — se prête naturellement à un Skill `writing-style` : désormais, le prompt n'a plus qu'à dire « écris un article sur WorkBuddy », et toutes vos habitudes de rédaction viennent du Skill.

Un Skill apporte deux valeurs qu'un prompt ne peut offrir : d'une part **figer des workflows complexes** (fixer les sept étapes d'une étude sectorielle au lieu de laisser le modèle tout réinventer) ; d'autre part **transformer l'expérience personnelle en actif** — un Skill est un fichier, versionnable avec Git, restaurable, partageable en équipe.

## Trouver le bon Skill dans WorkBuddy

Ouvrez « Experts · Skills · Connecteurs » à gauche : vous pouvez chercher dans le marché de Skills ou décrire votre besoin via « Rechercher un Skill ».

![](/workbuddy/05-skills/assets/001_image_TdcLblfvIo.png)

Vous pouvez aussi trouver le Skill qu'il vous faut dans le marché SkillHub :

![](/workbuddy/05-skills/assets/002_image_V3E5bsVZGo.png)

Au-delà de l'installation depuis la liste de recommandations, vous pouvez **importer vos propres Skills téléchargés** : si vous repérez sur Internet un pack de Skills utile, il se présente sous forme d'une archive zip ; cliquez sur « Charger un Skill » pour importer le fichier zip.

![](/workbuddy/05-skills/assets/003_image_Oag3bNQHOo.png)

![](/workbuddy/05-skills/assets/004_image_GgOebNBh3o.png)

## Résoudre une tâche à l'aide d'un Skill

Supposons que l'IA ait rédigé un article pour vous et qu'il faille en ôter le « goût IA ». Trouvez le Skill « Outil anti style IA pour articles », installez-le, puis invoquez-le simplement en tapant `/`.

![](/workbuddy/05-skills/assets/005_20260708200848_NN3hbPsKAo.gif)

Il vous suffit d'appeler le Skill et de fournir l'article :

![](/workbuddy/05-skills/assets/006_image_Xom2btXVZo.png)

WorkBuddy charge d'abord le contenu du Skill :

![](/workbuddy/05-skills/assets/007_image_AmOVb1oGEo.png)

Puis il applique les règles du Skill, par exemple supprimer les tournures « non pas… mais… », les guillemets superflus, etc. :

![](/workbuddy/05-skills/assets/008_image_FbpQbmSswo.png)

Une fois les modifications faites, le résultat est là — le « goût IA » a bien disparu.

![](/workbuddy/05-skills/assets/009_image_RhBKbRhgIo.png)

## Désactiver et désinstaller un Skill

Dans la liste de tous les Skills, cliquez sur « Mes installations » :

![](/workbuddy/05-skills/assets/010_image_NGsdbBcjso.png)

Désactivez le bouton (le Skill est alors désactivé) :

![](/workbuddy/05-skills/assets/011_image_DABBb41fGo.png)

Cliquez sur « ··· » pour supprimer ou modifier le Skill :

![](/workbuddy/05-skills/assets/012_image_Uya3bNC9io.png)

---

> Envie de distiller un livre ou une formation en votre propre Skill ? Voir la section perfectionnement [Créer un Skill : distiller la connaissance en capacités exécutables](/fr/workbuddy/adv-build-skill/).
