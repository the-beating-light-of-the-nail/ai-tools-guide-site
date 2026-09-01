# Étude de cas : reporting dynamique — tableaux de bord, rapports hebdomadaires et bilans

L'ère du rapport hebdomadaire en captures d'écran statiques peut prendre fin. Ce chapitre présente, à travers trois scénarios réels, l'approche des « livrables dynamiques » de TraeWork : tableau de bord de données, rapport hebdomadaire, bilan d'activité.

> Les scénarios sont adaptés de Yunying Yanjiushe [« Cette mise à jour de TRAE Work fait bouger vos reports »](https://zhuanlan.zhihu.com/p/2064037124559606413) (juillet 2026) et du test de l'assistant de bureau de K Jie Yanjiushe ([août 2026](https://zhuanlan.zhihu.com/p/2071317142574724109)).

## Scénario 1 : tableau de bord de données

**Problème** : le temps du reporting trimestriel part dans la « mise en forme » plutôt que dans le fond — export PDF, compression des captures, allers-retours de fichiers, et tout est à refaire à chaque mise à jour des données.

**Méthode** :

1. Regroupez et téléversez les fichiers CSV ;
2. Décrivez la structure en langage simple :

```text
Fais un tableau de bord trimestriel : tout en haut, le classement général de la marque,
en dessous, des graphiques de tendance, d'entonnoir et de comparaison pour les différents indicateurs.
```

Le résultat est une **page web dynamique et interactive** : un clic sur un graphique affiche les valeurs exactes ; quand les données changent, on régénère — le lien de partage reste identique et le contenu se met à jour tout seul. TraeWork extrait aussi automatiquement des conclusions, par exemple :

> Telle marque se classe 5e en volume de recherche mais 4e en nombre d'acheteurs : la conversion recherche → achat est efficace, et l'avantage de fidélité des fans de l'IP est net.

Trois façons d'ajuster les détails : encercler une zone de la page et laisser un commentaire (ex. « ajouter une touche de mignon sur la couverture »), déplacer manuellement la mise en page et les textes, ou cliquer un élément dans l'aperçu pour changer ses propriétés — voir [Première tâche](/fr/traework/03-first-task).

**Même recette** : le « programme » de la fête de fin d'année (regrouper répartition des rôles / déroulé / fichiers d'organisation → une phrase génère une page illustrée) ; le jeu communautaire —

```text
Fais un « jeu de quiz d'anecdotes » : 20 questions au total, chaque niveau tire au hasard une question à choix unique ;
une bonne réponse fait passer au niveau suivant, une mauvaise affiche la bonne réponse avant de continuer ;
à la fin, affiche le score, le classement et le pourcentage de joueurs dépassés.
```

Cela génère un HTML avec une logique interactive complète, à partager en un clic dans un groupe et jouable à l'ouverture.

## Scénario 2 : le rapport hebdomadaire en une minute (avec l'assistant de bureau)

Une fois l'[assistant de bureau](/fr/traework/05-bot-assistant) lié, envoyez directement dans Feishu :

```text
Améliore mon bilan de la semaine et rédige le rapport selon : conclusion de la semaine, avancées clés, programme de la semaine prochaine :
- la conclusion résume en une phrase le résultat le plus digne d'être signalé
- les avancées clés en 3 à 5 points, précisant ce qui a été fait et les résultats obtenus
- le programme de la semaine prochaine en 2 à 3 points, clairs sur les chantiers et le soutien nécessaire
```

Puis enchaînez simplement :

```text
Reporte ce rapport hebdomadaire dans un document Feishu et envoie-le dans le groupe de reporting.
```

Une minute suffit en test réel. L'astuce : **laisser d'abord l'IA synthétiser vos notes brutes** (« dis-moi l'essentiel de ce document »), valider le regroupement, puis appliquer la structure du rapport.

## Scénario 3 : le bilan d'activité (modèle structuré complet)

```text
À partir de mes notes de travail, rédige un bilan d'activité logique et centré sur l'essentiel. Exigences :
1. Regrouper, fusionner et dédupliquer les activités pour éviter un journal chronologique
2. Extraire 3 à 5 réalisations clés, développées selon « contexte — actions décisives — résultats — valeur business — contribution personnelle »
3. Prioriser les données et comparaisons avant/après, distinguer les résultats collectifs de la contribution individuelle
4. Aucune information inventée
5. La sortie comprend : synthèse du bilan, réalisations clés, compétences acquises, retour sur les problèmes, plan de la prochaine période
6. Langage professionnel, concis et assuré ; conclusions d'abord, processus ensuite ; éviter les formules vagues

Poste : [stagiaire en gestion de contenus médias sociaux]
Période du bilan : [2e trimestre 2026]
Document de notes de travail : @« Récapitulatif hebdomadaire du stage »
```

« Aucune information inventée » est la contrainte clé de ce type de document sensible. Vous pouvez aussi autoriser l'accès à l'agenda, aux comptes rendus de réunion et à l'historique de chat pour enrichir la matière du bilan.

## Synthèse méthodologique

Les trois scénarios suivent la même chaîne : **notes brutes → synthèse par l'IA → modèle structuré → réécriture dans l'outil collaboratif**.

| Scénario | Entrée | Cœur du modèle | Sortie |
| --- | --- | --- | --- |
| Tableau de bord | Données CSV | Description de structure + types de graphiques | Page web interactive (lien durable) |
| Rapport hebdomadaire | Document de bilan | Structure en trois volets conclusion/avancées/programme | Document Feishu + message de groupe |
| Bilan d'activité | Notes de travail + données autorisées | Modèle structuré à six exigences | Rapport de bilan en cinq volets |

Pour transformer « la synthèse manuelle de chaque semaine » en exécution planifiée automatique, branchez les [tâches automatisées planifiées](/fr/traework/07-automated-tasks).
