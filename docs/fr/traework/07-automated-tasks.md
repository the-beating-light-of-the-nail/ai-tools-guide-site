# Tâches automatisées planifiées

Exécution automatique à l'heure de tâches prédéfinies et génération des résultats, sans aucune intervention humaine — c'est la fonction qui fait passer TraeWork de « il agit quand vous lui demandez » à « il travaille tout seul à l'heure prévue ».

> Documentation officielle : [docs.trae.cn/work_automated-tasks](https://docs.trae.cn/work_automated-tasks)

## Accès et modes de création

Accès : bouton « Automatisation » en haut du panneau de gauche → panneau de gestion des tâches planifiées (trois onglets : modèles de tâches, configurées, historique d'exécution ; bouton de création en haut à droite).

Trois modes de création, à choisir selon votre aisance :

**Mode 1 : créer dans une conversation** (recommandé, horaires en langage naturel pris en charge)

1. Cliquez sur « Créer dans une conversation » en haut à droite ;
2. Saisissez le contenu de la tâche et l'horaire d'exécution (par ex. « 9 h les jours ouvrés ») ;
3. En bas à gauche de la zone de saisie, choisissez l'environnement d'exécution et l'emplacement de stockage des sorties ;
4. Envoyez → l'IA interprète et, au besoin, confirme les détails ;
5. Vérifiez les informations de tâche produites par l'IA et ajustez.

**Mode 2 : création manuelle** — « Création manuelle » en haut à droite → renseignez chaque champ dans la fenêtre → « Créer ».

**Mode 3 : créer depuis un modèle** — onglet « Modèles de tâches », choisissez un modèle (configuration prédéfinie) → modifiez au besoin → « Créer ».

## Paramètres clés

| Paramètre | Valeurs possibles |
| --- | --- |
| Mode d'exécution | Work / Code (attention : non modifiable après création) |
| Environnement d'exécution | Cloud / local (non modifiable après création) |
| Déclenchement | Horaires fixes (quotidien/hebdomadaire/mensuel), par intervalle (minutes/heures/jours), personnalisé (langage naturel, uniquement en création conversationnelle) |
| Contenu de la tâche | Instruction de tâche complète |
| Emplacement de sortie | Dossier où déposer les livrables (non modifiable après création) |

## Les quatre familles de scénarios recommandées par l'officiel

| Scénario | Exemples de tâches |
| --- | --- |
| Maintenance régulière de dépôts | Scan de sécurité, chasse aux bugs, ajout de cas de test, journal quotidien des changements (mode Code) |
| Recherche et synthèse d'informations | Veille sectorielle, actualités concurrents, résumé des avis sur les app stores, alertes de mises à jour réglementaires |
| Réputation de marque | Rapport hebdomadaire d'e-réputation, suivi des discussions communautaires, collecte des retours utilisateurs |
| Reporting périodique | Flash sectoriel, journal des opérations, suivi d'indicateurs clés |

Une tâche d'e-réputation hebdomadaire prête à copier :

```text
Chaque matin à 9 h, collecter les articles publics et discussions réseaux sociaux des dernières 24 heures
liés à [nom de mon entreprise/produit], les classer en « presse / retours utilisateurs / actualités concurrents »,
avec source et lien ;
si moins de 3 informations pertinentes, produire une explication plutôt que du remplissage ;
livrer un brouillon de rapport Markdown hebdomadaire dans le dossier output/.
```

## Limites à retenir absolument

1. En création conversationnelle, le mode d'exécution est celui en cours et **ne peut pas être changé** ;
2. **Une fois la tâche créée, impossible de modifier le mode d'exécution, l'environnement d'exécution et l'emplacement de sortie** — pour changer, supprimez et recréez ;
3. Pour consulter l'historique d'exécution, le mode de TraeWork en cours doit correspondre au mode de la tâche ;
4. Les tâches cloud consomment les crédits du compte ; pour les longues tâches, surveillez la [consommation de crédits](/fr/traework/adv-models-credits).

## Rédigez des prompts plus détaillés pour les tâches planifiées

Une tâche planifiée est fondamentalement une **conversation sans surveillance** : personne pour ajouter une précision pendant l'exécution. Leçon typique issue de tests communautaires — une première tentative limitée à « récupérer les articles et les stocker dans la base de connaissances » échoue faute de paramètres précis (où stocker, comment s'authentifier, quoi faire en cas d'échec) ; une fois les étapes complètes, les paramètres et le traitement d'erreurs écrits dans l'instruction, tout passe du premier coup.

Liste de rédaction :

- [ ] Sources de données explicites (quel site / quel document / quelle feuille)
- [ ] Format de sortie et chemin de stockage explicites
- [ ] Traitement des anomalies explicite (que faire si les données sont vides, si une source échoue)
- [ ] Valider d'abord une conversation manuelle avant de figer en tâche planifiée

Une combinaison planification + notification complète : une tâche planifiée qui génère le journal quotidien + l'[assistant de bureau](/fr/traework/05-bot-assistant) lié à un groupe Feishu = un pipeline « journal quotidien automatique dans le groupe à 9 h ». Étude de cas complète dans [Pipeline Compte officiel WeChat → base de connaissances Feishu](/fr/traework/case-feishu-pipeline).

---

Étape suivante : [Contrôle de l'ordinateur et du navigateur →](/fr/traework/08-computer-browser)
