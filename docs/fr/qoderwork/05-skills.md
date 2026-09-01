# Skills et kits d'experts

Un Skill est « un guide de travail rédigé à l'avance » ; un kit d'experts (Expert Kit) empaquette tout le savoir-faire, le workflow et les critères de jugement d'un métier. Ils sont les deux marches de l'écosystème QoderWork pour passer de « je sais utiliser » à « niveau expert ».

> Documentation officielle : [skills](https://docs.qoder.com/zh/qoderwork/skills) ｜ [expert-kits](https://docs.qoder.com/zh/qoderwork/expert-kits)

## Le Skill : le « mode d'emploi de compétences expertes » de l'IA

Chaque Skill est en substance un dossier contenant un fichier SKILL.md, stocké dans `~/.qoderwork/skills/`. Le SKILL.md s'écrit en langage naturel, sans code ; il précise « les étapes, le format de sortie et les points d'attention à suivre face à un type de tâche ».

Quatre valeurs : dire adieu aux explications répétées, garantir la cohérence des sorties, transformer l'expérience personnelle en actif réutilisable, faire passer l'IA de « généraliste » à « spécialiste ».

**Quatre canaux d'acquisition** :

1. **Recherche et installation en conversation** : dites simplement « trouve-moi un Skill pour XX » ; le find-skills intégré cherche, recommande et installe en un clic ;
2. **Parcours de la place des Skills** : Extensions → Skills, choisissez dans la marketplace ;
3. **Depuis la communauté open source** : envoyez un lien de dépôt GitHub ; clonage, placement et chargement automatiques ;
4. **Téléversement manuel** : dans la page des Skills, « Installer un Skill » et téléversez le fichier SKILL.md.

**Quatre façons de l'utiliser** : déclenchement automatique (mise en correspondance avec la description du besoin), raccourci `/`, contexte par `@` (attention : @ complète le contexte, il n'appelle pas), citation dans la conversation (« utilise le Skill xxx pour générer la série d'images »).

**9 Skills intégrés** : docx / pdf / pptx / xlsx (déclenchés automatiquement à la mention du type de fichier), find-skills, create-skill, plugin-creator, install-skill-dependency, vm-error-recovery.

**Partage** : dans la page des Skills, icône de partage à côté d'un Skill personnel → copier le lien → l'autre installe en un clic. À noter : **le lien de partage expire en environ 24 heures** et seuls vos propres Skills peuvent être partagés.

## Le kit d'experts : empaqueter le « métier » pour l'équipe

Positionnement officiel : « transformer l'IA en un professionnel qui connaît vraiment le métier ». Kit = Skill + connexion de données + workflow + normes de sortie — la question n'est plus « comment l'IA fait telle chose », mais « **comment faire travailler toute l'équipe avec la même solution IA** » : une personne configure, tout le monde réutilise.

**12 kits intégrés** : gestion de produit, design produit, juridique d'entreprise, finance-fiscalité d'entreprise, gestion des contrats, livrables de conseil, marketing, analyse d'investissement, banque d'affaires, capital-investissement, gestion de patrimoine, assistant services technologiques.

**Usage** :

1. Extensions → Kits d'experts, cliquez sur + à droite de la carte pour installer (les Skills se chargent automatiquement) ;
2. Créez une tâche, tapez `/` et choisissez le nom du kit (ex. `/examiner-contrat`), puis décrivez le besoin.

**Installer un kit tiers** : « + Ajouter » en haut à droite → « Téléverser un kit », avec un paquet .zip (doit contenir `.qoder-plugin/plugin.json`, et plugin.json doit inclure le champ name).

## Un cas réel : 20 ans d'expérience d'avocat transformés en actif

La page de cas officiels documente l'usage d'un associé de cabinet (défense dans un procès en contrefaçon de droit d'auteur) :

- Création de Skills au fil du dossier : organisation des preuves (règles de classement + système de numérotation), recherche de jurisprudence (après des premiers résultats décevants, **resserrer le motif du litige**), construction du système de défense (réorganisation des niveaux d'argumentation à la troisième version), rédaction des conclusions ;
- Résultat : **l'ensemble des actes de défense produits seul en quatre jours** — conclusions, observations sur les preuves, liste des pièces, plaidoirie, dossier de preuves de 356 pages ;
- Après clôture, les dix Skills sont consolidés en un kit juridique distribué à l'équipe : les nouveaux le déclenchent en un clic, l'associé révise.

Quatre étapes pour construire un kit : ① dérouler un workflow avec un Skill (point de départ : une tâche répétée au moins deux fois dans la semaine écoulée) → ② compléter les Skills pour couvrir tout le processus → ③ consolider en kit d'experts → ④ partager à l'équipe.

Trois erreurs fréquentes : la sortie d'un kit est un **premier jet** de qualité, pas une version finale ; pas d'encapsulation une fois pour toutes (il faut itérer) ; un kit n'est pas mieux plus gros (ciblez « revue de contrats » plutôt que « tout le juridique »).

## Créer son Skill : /create-skill

Tapez `/create-skill` en conversation, décrivez « phrase de déclenchement + étapes + format de sortie », et QoderWork génère le SKILL.md pour vous. Approche détaillée dans [Créer des Skills en conversation](/fr/qoderwork/adv-skill-create).

> Envie de distiller tout un livre en collection de Skills ? Voir l'approche de la section WorkBuddy, [Créer un Skill : distillation de connaissances](/fr/workbuddy/adv-build-skill/) — les spécifications du SKILL.md sont communes aux deux.

---

Étape suivante : [Connecteurs et MCP →](/fr/qoderwork/06-connectors)
