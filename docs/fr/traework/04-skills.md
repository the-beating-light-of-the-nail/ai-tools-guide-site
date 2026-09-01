# Les Skills : équiper l'IA d'un « mode d'emploi de compétences expertes »

Les Skills sont l'un des concepts les plus importants de l'écosystème TraeWork : chaque Skill regroupe instructions, scripts et ressources associées pour offrir à l'agent une **compétence experte réutilisable et dédiée à un scénario**. Pour une même instruction, avec ou sans le bon Skill, la qualité du résultat peut être radicalement différente.

> Documentation officielle : [docs.trae.cn/work_skills](https://docs.trae.cn/work_skills)

## Qu'est-ce qu'un Skill

Chaque Skill est simplement un dossier contenant un fichier `SKILL.md` :

```text
skill-name/
├── SKILL.md        # Obligatoire : en-tête YAML (name, description) + description/scénarios/instructions/exemples
├── examples/       # Optionnel : exemples
├── templates/      # Optionnel : modèles
└── resources/      # Optionnel : ressources
```

Son principe clé est le **chargement à la demande** : au démarrage, l'agent ne scanne que la brève description de chaque Skill ; la description complète n'est chargée que si la tâche y est fortement liée — ce qui réduit efficacement la consommation de tokens dans le contexte.

Trois notions voisines à ne pas confondre :

| | Rôle | Chargement |
| --- | --- | --- |
| Skill | Décrit la méthode « comment accomplir la tâche » | À la demande |
| Règle | Normes de style de code, de framework, etc. | Chargée en entier, occupe le contexte en continu |
| Serveur MCP | Fournit « des outils appelables » | Appelé à la connexion |

## Installer des Skills : deux sources

**Depuis la marketplace** (le plus courant) :

1. En haut de la barre de navigation de gauche, cliquez sur « Marketplace de plugins » ;
2. Ouvrez l'onglet « Skills » et cherchez le Skill voulu ;
3. Cliquez sur **+** à droite de la carte pour installer ; cliquez sur la carte pour voir les détails.

**Téléverser un paquet local** : si vous trouvez un bon paquet de Skills en ligne (fichier zip ou .skill), cliquez sur « Téléverser un Skill » en haut à droite de l'onglet « Skills » pour le charger. Prérequis : l'archive doit **contenir un SKILL.md à sa racine**, avec un nom et une description en YAML.

## Utiliser un Skill : trois façons

1. **Raccourci `/`** : tapez `/` dans la zone de dialogue et choisissez dans la liste ;
2. **Citation dans l'instruction** : par exemple « résume les modifications de cette branche avec le Skill codemap » ;
3. **Appel automatique par l'IA** : déclenché automatiquement quand la description de la tâche correspond aux « scénarios d'application » du Skill — d'où l'intérêt d'écrire la description du SKILL.md avec précision pour fiabiliser le déclenchement.

Gestion : curseur d'activation/désactivation sur la carte du Skill ; « Désinstaller » en bas à gauche de la fenêtre de détails.

## Portée et environnement d'exécution des Skills

| Dimension | Détail |
| --- | --- |
| Skill de projet | Créé dans un projet, disponible uniquement pour ce projet, stocké dans `.trae/skills/` du projet |
| Skill global | Créé dans le centre de paramètres, disponible pour tous les projets (macOS/Linux `~/.trae-cn/skills`, Windows `%userprofile%\.trae-cn\skills`) |
| Exécution locale | Tâches locales uniquement (version bureau seulement) |
| Exécution cloud | Tâches cloud et projets rapatriés depuis GitHub (versions web + bureau) |

## Quand vaut-il la peine de créer son propre Skill

Selon le positionnement officiel, les Skills répondent à trois familles de besoins :

- **Cohérence des sorties** : charte de design, cohérence de marque, conventions de format — dix tâches qui suivent la même voie éprouvée ;
- **Workflows répétitifs figés** : processus de rapport hebdomadaire, SOP de nettoyage de données, liste de contrôle de contenu ;
- **Capitalisation et partage** : empaqueter son expérience personnelle en fichiers, réutilisables entre projets et entre équipes.

Le critère est simple : **si vous avez écrit la même instruction de tâche pour la troisième fois, il est temps d'en faire un Skill.** Pour distiller un livre ou une méthodologie en Skill, voir l'approche proposée dans la section WorkBuddy, [Créer un Skill : distillation de connaissances](/fr/workbuddy/adv-build-skill/) — les spécifications du SKILL.md sont communes aux deux.

## Où trouver des Skills

- La marketplace de TraeWork (officielle, avec une liste de « Skills indispensables »)
- Collections communautaires : [awesome-agent-skills](https://github.com/libukai/awesome-agent-skills), [awesome-skills-cn](https://github.com/lingxuling/awesome-skills-cn) (7000+ Skills en chinois)
- Les posts de partage d'utilisateurs sur le forum officiel TraeWork [forum.trae.cn](https://forum.trae.cn)

---

Étape suivante : installez l'IA dans votre fenêtre de chat — [Assistant de bureau : Feishu et WeChat →](/fr/traework/05-bot-assistant)
