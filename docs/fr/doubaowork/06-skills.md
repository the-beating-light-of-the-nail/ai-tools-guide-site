# Comment choisir et utiliser un Skill

Doubao Work se charge lui-même de comprendre la tâche et d'organiser l'exécution ; un **Skill (compétence) est un ensemble réutilisable d'instructions, de scripts, de références et de ressources** qui indique à l'agent comment traiter une catégorie de tâches, quels outils mobiliser et sous quel format livrer. (Anthropic a lancé les Agent Skills en octobre 2025 et les a publiés comme standard ouvert en décembre.)

## À quoi ressemble un Skill standard

```text
my-skill/
├── SKILL.md          # le seul fichier obligatoire
├── scripts/
│   └── check.py
├── references/
│   └── guide.md
└── assets/
    └── template.pptx
```

Seul `SKILL.md` est indispensable ; son cœur est une instruction du type « voici comment traiter cette catégorie de tâches » :

```markdown
---
name: tech-article-writing
description: Pour rédiger des articles sur les produits AI, les tests de modèles et le secteur technologique
---

À la réception d'une tâche de rédaction :

1. Confirmer d'abord l'angle central de l'article
2. Rechercher des sources primaires
3. Recouper les faits clés
4. Rédiger le premier brouillon selon le style d'écriture de l'utilisateur
5. Vérifier les tournures interdites et les expressions trop « IA »
```

## Comment fonctionne un Skill : la divulgation progressive

Le design décisif d'un Skill n'est pas SKILL.md lui-même, mais la **Progressive Disclosure (divulgation progressive)**. Supposons que l'agent ait 100 Skills installés : il ne charge pas les 100 contenus complets dans son contexte — ce qui gaspillerait des tokens et noierait le modèle sous des instructions hors sujet. La pratique standard tient en trois niveaux :

1. **Au démarrage**, seuls les noms et les descriptions de tous les Skills sont chargés (quelques dizaines à une centaine de tokens chacun) ;
2. **Quand une tâche correspond**, le `SKILL.md` complet est chargé — si vous dites « aide-moi à écrire un article sur Doubao Work pour le Compte officiel WeChat », l'agent juge d'après la description que `tech-article-writing` est pertinent et ne lit alors que celui-ci ;
3. **Pendant l'exécution**, il ne lit `references/style.md` ou n'exécute `scripts/check-ai-phrases.py` que si des détails supplémentaires sont nécessaires.

OpenAI Codex utilise un mécanisme similaire. Le Skill résout ainsi un problème de longue date pour les agents : **comment donner à l'agent beaucoup de savoirs et de méthodes de travail, sans tout embarquer en permanence dans le prompt.**

## Les quatre apports des Skills

**1 · Compléter le savoir procédural.** Les grands modèles connaissent beaucoup de savoir générique, mais pas forcément votre entreprise : dans quelle table se trouve `canonical user_id`, que la table `subscriptions` est en append-only, qu'il faut exclure un statut donné pour les remboursements, quel est l'identifiant du dashboard Grafana. Chez Anthropic, des centaines de Skills internes se concentrent dans neuf familles de cas : usage des API et bibliothèques internes, validation produit, analyse de données, automatisation de processus métier, génération de scaffolding de code, revue de code, CI/CD, runbooks d'incidents et opérations.

**2 · Fixer les flux de travail complexes.** Un simple prompt « fais une étude approfondie de Doubao Work » oblige le modèle à réinventer à chaque fois : où chercher, quoi vérifier d'abord, comment valider, à quoi comparer, quelle structure de sortie. Le Skill fixe le déroulé : sites officiels → Compte officiel WeChat et conférences de lancement → documentation produit → test réel du produit → comparaison avec les concurrents → extraction des idées clés → vérification des faits. On parle de **Encoded Preference Skill** (organiser des capacités existantes selon votre façon de travailler) ; l'autre famille, les **Capability Uplift Skills**, apporte des capacités que le modèle gère mal ou de façon instable, comme le traitement de documents complexes, de PDF et de PPT.

**3 · Réduire les prompts répétitifs.** Vos consignes récurrentes — « ne fais pas trop IA, alterne phrases longues et courtes, ne pointe pas excessivement, reste sobre sur le technique, n'invente pas d'exemples » — se prêtent naturellement à un Skill `writing-style`. Ensuite, il suffit d'écrire « rédige un article sur Doubao Work » : habitudes de rédaction, exigences de sources et expressions interdites viennent du Skill.

**4 · Transformer l'expérience en actif.** Les prompts traditionnels sont dispersés dans des historiques de conversation, des documents et des têtes ; un Skill est un fichier : versionnable avec Git, restaurable, partageable en équipe, testable en A/B, évaluable automatiquement et mis à jour en continu.

## Trouver des Skills dans Doubao Work

Ouvrez « Skills · Connecteurs · Partenaires » à gauche : parcourez par catégorie — **finance, juridique, création pour nouveaux médias, collaboration bureautique, programmation, académique** — ou cherchez par nom ou besoin dans la barre de recherche en haut. Une fois trouvé, cliquez sur le « + » à droite pour l'ajouter ; certains Skills proposent « Essayer dans la conversation ». Les Skills ajoutés se gèrent dans « Mes Skills ».

Vous pouvez aussi **créer ou téléverser vos propres Skills** : cliquez sur « Créer » en haut à droite de la page, puis choisissez « Créer un Skill en dialoguant avec Doubao » ou « Téléverser un Skill ». Avant téléversement, vérifiez la provenance du paquet, ses scripts et son périmètre de permissions.

## Résoudre une tâche avec un Skill

Exemple : atténuer les traces d'IA dans un article — cherchez un Skill « retirer le goût IA » sur le marché des Skills, ajoutez-le, revenez dans la tâche de travail, tapez `/` dans la zone de saisie ou cliquez sur « Plus de Skills » pour le sélectionner, puis joignez l'article et vos exigences. Doubao Work décidera des étapes selon les instructions du Skill et affichera le déroulement et le résultat.

Une fois terminé, vérifiez surtout que les exigences du Skill sont réellement appliquées : les tournures visées ont-elles été supprimées, les faits et le ton sont-ils préservés, les noms propres n'ont-ils pas été altérés par erreur.

---

Prochaine étape : reste connecté même dehors — [Piloter son ordinateur depuis le mobile →](/fr/doubaowork/07-mobile-remote)
