# L'expérience des anciens ne doit pas dormir : transformer une base de connaissances Feishu en Skill réutilisable

> Contexte : une base de connaissances pleine de l'expérience opérationnelle accumulée par d'anciens collègues, que personne ne consulte. Transformez ces documents en Skill réutilisable : moins de remise en forme répétée, et un Agent qui mobilise directement le savoir dans les vraies tâches.

> Prérequis : le compte connecté à Doubao est bien celui de la base de connaissances Feishu visée.

## Une intégration de la base en toute fluidité

Dans Doubao Work, on peut **référencer par @** un document Feishu, mais aussi un contact, un fichier du drive ou une conversation, pour charger le contexte utile. Bonus pratique — après avoir référencé un contact et le document de préparation, une phrase suffit pour convoquer une réunion :

```text
Convoque-moi une réunion dans Feishu avec lui @contact,
et envoie-lui le document de préparation @interne : expérience opérationnelle Xiaohongshu.
```

Vraiment, cela se fait à la voix.

## Construire un Skill d'expérience, en pratique

**Première étape : la question à l'aveugle**, pour vérifier que Doubao Work lit bien la base visée :

> Tu peux vérifier : la base de connaissances « opération Xiaohongshu » est-elle visible pour toi ?

Une fois confirmé, sans schéma de structure prédéfini, demandez-lui d'abord des suggestions à partir du contenu :

```text
Organise cette base de connaissances d'opération Xiaohongshu en un « Skill d'opération
Xiaohongshu », en intégrant les connaissances qu'elle contient : comment écrirais-tu ce skill ?
```

Sa suggestion de positionnement est décisive : il existe déjà `doubao-newmedia-writing` (chargé de la **création de contenu** posts/vidéos Xiaohongshu) ; le nouveau Skill doit éviter le doublon et se positionner en **méthodologie et SOP de bout en bout de l'opération** — déclenché quand l'utilisateur demande « comment faire » : lancer un compte, positionnement, choix de sujets, titre et couverture, croissance d'audience, monétisation, acquisition de trafic, boutique, publicité, recours en cas d'infraction — et produire des méthodes structurées issues de la base.

## Structure du répertoire du Skill

Le périmètre clarifié, Doubao Work découpe le Skill en un fichier principal `SKILL.md` (détection de déclenchement + routage + flux de travail) et un répertoire `references` classé en six thèmes :

```text
xiaohongshu-operation/
├── SKILL.md                        # déclenchement + routage + flux de travail
└── references/
    ├── 01-lancement-et-positionnement/     # choix de créneau, positionnement, comptes de référence et IP, aménagement de la page
    ├── 02-mecanismes-plateforme/     # algorithme et trafic, indexation et recherche, bridage et règles
    ├── 03-creation-contenu/     # méthode de sujets, formules de titres, rédaction, couverture, tournage et retouche, montage vidéo
    ├── 04-croissance-operation/     # maturation du compte, publication et maintenance, données et bilans, techniques de croissance
    ├── 05-monetisation/   # modes de monétisation, boutique et sélection, missions et partenariats, publicité payante
    └── 06-trafic-et-conformite/   # SOP d'acquisition, exploitation du privé, conformité et qualifications
```

Chaque fichier de référence indique sa source (quel cours ou document de la base), pour un savoir traçable. Le Skill terminé, testez-le sur un vrai problème opérationnel : il répond selon la méthodologie inscrite — l'expérience des anciens ne dort plus, elle devient la « façon standard » mobilisable à chaque tâche.

---

Suivant : [Ne plus épuiser la base documentaire : trouver la procédure en une phrase, sources incluses →](/fr/doubaowork/case-policy-search)
