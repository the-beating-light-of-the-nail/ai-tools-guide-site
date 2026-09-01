# Approfondissement : les workflows Plan, Spec, Goal et les commandes personnalisées

TraeWork intègre trois workflows de tâches (Plan / Spec / Goal) et un mécanisme de commandes personnalisées. Avec le bon workflow, la fiabilité des longues tâches s'améliore nettement.

> Documentation officielle : [work_spec-and-plan](https://docs.trae.cn/work_spec-and-plan) ｜ [work_commands](https://docs.trae.cn/work_commands)

## Choisir parmi les trois workflows

| Workflow | Adapté à | Livrables | Modes disponibles |
| --- | --- | --- | --- |
| **Plan** | Tâches au périmètre clair nécessitant validation des étapes avant exécution (fonctionnalités moyennes, refactoring au niveau module, corrections) | plan.md dans `.trae/documents/` | Work / Code / Design |
| **Spec** | Tâches complexes de grande ampleur exigeant d'aligner d'abord solution et critères d'acceptation (tâches système, refactoring massif, travail multi-personnes) | Outline + tasks.md + liste d'acceptation dans `.trae/specs/` | Code uniquement |
| **Goal** | Longues tâches à objectif clair exigeant une poursuite continue par l'agent (corrections en chaîne de tests, migrations par lots, investigations continues) | Exécution multi-tours orientée objectif | Work / Code |

Accès commun : tapez `/` dans la zone de dialogue et choisissez dans la liste, ou saisissez directement `/Plan`, `/Spec`, `/goal` puis Entrée.

## Plan : le plan d'abord, l'action ensuite

L'IA analyse le besoin et planifie → génère un document de plan dans `.trae/documents/` → n'exécute point par point qu'**après votre validation**. Si le plan ne convient pas, modifiez le document à la main ou demandez à l'IA d'ajuster en langage naturel.

Exemple bureautique : organiser une série de rapports, migrer une arborescence documentaire — voir d'abord en combien d'étapes l'IA compte procéder et quels fichiers elle touchera, puis donner le feu vert.

## Spec : écrire les critères d'acceptation dans le document

L'IA génère un ensemble documentaire en trois volets (outline, liste de tâches, liste d'acceptation), stocké dans `.trae/specs/` groupé par tâche. **À la première création, l'IA se met en pause pour votre validation** ; ensuite, les statuts de la liste de tâches et de la liste d'acceptation se mettent à jour automatiquement avec l'avancement. Pendant l'attente, éditez les documents directement ou laissez l'IA les modifier ; ils peuvent passer en gestion de versions comme actifs de connaissance du projet.

Cette idée « aligner les critères d'acceptation avant d'exécuter » rejoint le [développement piloté par Spec](/fr/qoderwork/03-first-task) de la section QoderWork — des outils différents, une méthodologie commune.

## Goal : exécution multi-tours orientée objectif

Vous définissez en langage naturel les **conditions d'achèvement** ; à chaque tour, l'agent évalue automatiquement si l'objectif est atteint : tant que non, il continue ; atteint, il s'arrête. Un « pupitre de commande » dédié permet de consulter, modifier, suspendre ou supprimer les objectifs à tout moment.

Adapté aux tâches par lots à fin claire, du type « convertir ces 50 fichiers dans un format unifié et réussir le contrôle par échantillonnage ».

## Commandes personnalisées : encapsuler les instructions fréquentes en `/xxx`

Les commandes transforment un prompt récurrent en raccourci : réutiliser des instructions fréquentes (résumer des changements, organiser des comptes rendus), normaliser les formats de sortie (messages de commit, modèles de description de PR), figer des procédures courantes (revue de code, contrôle de sécurité).

**Étapes de création** (version bureau) :

1. Avatar en bas à gauche > Paramètres > « Commandes » à gauche (ou icône de commande en bas à gauche de la zone de dialogue → « Gérer les Skills et commandes » en bas du menu) ;
2. Dans le panneau « Commandes », cliquez sur « Créer » ;
3. Renseignez les champs :
   - **Nom de commande** : identifiant unique, par ex. `summarize-pr-info`, uniquement minuscules, chiffres et tirets ;
   - **Description** : quand l'utiliser ;
   - **Instructions** : ce que l'IA fait une fois déclenchée — précisez les étapes, les sources de contexte et le contenu de sortie ;
4. Cliquez sur « Confirmer ». Environnement d'exécution au choix : local (version bureau uniquement) ou cloud.

**Commandes intégrées** : `/plan`, `/spec`, `/browser_use` (utilise le navigateur intégré pour du contexte, en appui de la vérification des fonctionnalités).

Usage : tapez `/` dans la zone de dialogue ou cliquez sur l'icône de commande, choisissez, puis précisez les exigences du cas.

## Répartition commandes, Skills, règles

| | Ce qui est encapsulé | Déclenchement | Adapté à |
| --- | --- | --- | --- |
| Commande | Un modèle d'instruction figé | Appel manuel `/` | Instructions courtes fréquentes |
| [Skill](/fr/traework/04-skills) | Une méthode complète (avec scripts/ressources) | Manuel ou automatique par l'IA | Méthodes de travail complètes |
| Règle | Une norme impérative | Résidente en permanence | Style de code, conventions de langage |
