# Chapitre 10 : Tâches automatisées dans WorkBuddy

Ce qui épuise vraiment, ce n'est souvent pas la grande tâche créative, mais rouvrir chaque jour les mêmes pages, collecter des informations similaires, les mettre en forme et renvoyer le tout aux mêmes personnes. La valeur de l'automatisation WorkBuddy, c'est de transformer ces travaux « à horaire fixe, aux étapes semblables et au résultat vérifiable » en tâches d'Agent exécutables en boucle.

## Pourquoi WorkBuddy peut s'automatiser

L'automatisation traditionnelle exige d'écrire chaque étape en code : quel système ouvrir, quel bouton cliquer, quelle colonne lire, quelle branche prendre en cas d'anomalie.

L'originalité de WorkBuddy est de combiner « la planification horaire » avec les capacités de compréhension, d'appel d'outils et de traitement de fichiers de l'Agent. Vous n'avez pas à tout programmer dans le détail, mais vous devez formuler clairement l'objectif, les entrées, les limites et le résultat.

La configuration d'automatisation est enregistrée dans le client local : nom de la tâche, prompt, règles de planification, répertoire de travail et état d'exécution. À l'heure définie, WorkBuddy lance la tâche de l'Agent avec l'identité de connexion en cours, appelle le modèle, les Skills, MCP ou les connecteurs selon le prompt, et accomplit recherches, synthèses et traitements de fichiers dans le répertoire de travail indiqué.

Cinq éléments rendent réellement une tâche stable : un horaire de déclenchement précis, des sources d'entrée reproductibles, un prompt suffisamment spécifique, un répertoire de travail fixe et maîtrisé, et des critères d'acceptation capables de trancher succès ou échec.

## À quoi sert l'automatisation

L'usage le plus immédiat est de confier à WorkBuddy le travail répété chaque jour, chaque semaine, chaque mois. L'intérêt ne se limite pas à quelques clics économisés : la tâche n'est pas oubliée quand vous débordé, et la méthode d'exécution ne varie pas au gré des personnes.

| Scénario | Ce qui peut être automatisé | Livrables typiques |
|-|-|-|
| Veille et information | Recherche planifiée d'actualités sectorielles, de politiques et de mouvements concurrents, résumé après déduplication | Brief quotidien, alertes de risque, liste de sources |
| Rapports quotidiens et hebdomadaires | Agrégation des tâches, agendas, documents et évolutions de données, rapport à structure fixe | Rapport quotidien, rapport hebdomadaire, tableau d'avancement |
| Données et tableaux | Collecte de fichiers, fusion de tableaux, nettoyage de champs, contrôle des manquants et des anomalies | Tableau de rapprochement, liste d'anomalies, graphiques de tendance |
| Gestion de fichiers | Archivage par date et projet, renommage par lots, extraction de texte de PDF ou d'images | Répertoires d'archivage, index, journaux de traitement |
| Animation éditoriale | Collecte de sujets, génération de titres candidats, organisation des ressources, brouillons prêts à publier | Bibliothèque de sujets, brouillons, fiches besoins de couverture |
| Gestion des connaissances | Tri planifié des favoris, comptes rendus de réunion et idées, ajout de tags et de sources | Fiches de connaissance, révision hebdomadaire, liste à digérer |
| Produit et R&D | Inspection des journaux, synthèse des issues, contrôle des dépendances et des builds | Rapport d'inspection, résumé des défauts, recommandations de mise à jour |
| Vie personnelle | Génération de plans d'apprentissage, bilans d'étape, tâches de réservation ou de rappel | Listes d'apprentissage, rappels, journal d'exécution |



## Quelles tâches automatiser en premier

Six questions pour trancher. Plus la réponse est « oui », plus la tâche mérite de figurer dans votre première vague d'automatisations :

1. **Est-elle répétitive** : au moins une fois par semaine, et non un besoin ponctuel ;
2. **Les entrées sont-elles stables** : dossiers, pages web, tableaux ou connecteurs à sources relativement fixes ;
3. **Les étapes sont-elles semblables** : le contenu varie, mais le traitement reste fondamentalement le même ;
4. **Le résultat est-il vérifiable** : nombre d'entrées, champs, période, sources ou présence du fichier généré sont contrôlables ;
5. **Un échec est-il récupérable** : la tâche peut être relancée sans perte irréversible immédiate ;
6. **Les permissions sont-elles maîtrisables** : répertoire de travail, compte et outils autorisés peuvent être restreints.

Le meilleur point de départ n'est généralement pas « pilote toute ma société à ma place », mais « chaque jour à 8 h, collecte 10 actualités IA du secteur, déduplique, conserve les liens et génère un brief Markdown dans le répertoire indiqué ». Plus le périmètre est clair, plus il est facile de repérer les problèmes et d'améliorer progressivement.



## D'une idée en phrases à une tâche exécutable

Avant de créer l'automatisation, reformulez le besoin oral en une petite note de tâche. Un prompt fiable répond au minimum à : quand exécuter, quoi lire, comment traiter, où écrire, quand c'est terminé, quoi faire en cas d'échec, quelles actions sont interdites.

```text
Nom de la tâche : Brief quotidien IA
Déclenchement : tous les jours à 08:00, fuseau Asia/Shanghai
Répertoire de travail : automation/ai-daily

Entrées :
- Rechercher les actualités IA (produits, modèles, secteur) des dernières 24 heures
- N'utiliser que des sources publiques accessibles conservant les liens

Règles de traitement :
1. Fusionner les événements en double, classer en trois catégories : produit, technique, business
2. Chaque entrée comporte un titre, un résumé de 100 caractères, la source, la date de publication et le lien
3. Les contenus sans date ou source confirmées vont dans « à vérifier », sans invention

Sortie :
- Enregistrer sous YYYY-MM-DD-ai-daily.md
- 10 entrées maximum dans le corps, liste des sources en fin de fichier
```

## Créer une tâche automatisée

Ouvrez la page « Automatisation » dans WorkBuddy pour consulter les tâches planifiées et l'historique d'exécution. Après un clic sur « Ajouter », configurez le nom de la tâche, l'espace de travail, le prompt, le modèle et les Skills, la règle de planification, et l'éventuelle notification du résultat vers le Mini-programme WorkBuddy.

| Paramètre | Rôle | Conseil de saisie |
|-|-|-|
| Nom | Distinguer les automatisations | Préciser l'objet et la fréquence, ex. « Brief IA quotidien » |
| Espace de travail | Délimiter le répertoire d'exécution et l'emplacement des fichiers | Un répertoire dédié par automatisation, pour éviter les écrasements |
| Prompt | Décrire objectif, étapes, sorties et limites | Utiliser le gabarit ci-dessus, pas un simple slogan |
| Modèle et Skills | Déterminer les capacités disponibles | Ne choisir que les Skills et connecteurs réellement nécessaires |
| Règle de planification | Définir fréquence et dates d'effet | Commencer à basse fréquence, puis augmenter |
| Notification Mini-programme | Consulter le résultat sur mobile | Avant d'activer, vérifier quels résultats remontent dans le cloud via un canal sécurisé |

Cliquez sur « Automatisation »,

![](/workbuddy/10-automation/assets/001_image_RklAba93No.png)

« Ajouter une automatisation », et vous pouvez personnaliser votre tâche

![](/workbuddy/10-automation/assets/002_image_MhojbPRsOo.png)

Par exemple, la diffusion quotidienne des actualités IA, envoi planifié à 8 h

![](/workbuddy/10-automation/assets/003_image_Ff6fbYuGoo.png)



## Pas envie d'écrire un prompt de zéro ? Commencez par un modèle

Les modèles officiels couvrent des scénarios courants : diffusion d'actualités, génération de rapports hebdomadaires, prise de rendez-vous médical, plans d'apprentissage. Leur valeur est de fournir les champs de base et la structure de tâche — ce ne sont pas des réponses définitives. Après sélection, adaptez quand même les sources de données, la période, l'emplacement de sortie, les critères d'acceptation et les actions interdites.

![](/workbuddy/10-automation/assets/004_%E8%87%AA%E5%8A%A8%E5%8C%96-%E4%BB%BB%E5%8A%A1%E6%A8%A1%E6%9D%BF_FYNwbDWqbo.png)



## D'autres scénarios d'automatisation à essayer

| Tâche | Déclenchement | Contrôle humain recommandé |
|-|-|-|
| Synthèse hebdomadaire | Chaque vendredi, lecture des tâches, agendas et livrables de la semaine | Valider formulations d'avancement et de risques avant envoi |
| Rapport quotidien des ventes | Chaque jour, agrégation des nouveaux clients et suivis depuis le CRM ou des tableaux | Vérifier montants, statuts clients et responsables |
| Tri des frais et factures | Chaque mois, lecture des justificatifs et notes de frais d'un répertoire donné | Contrôler TVA, doublons et imputation avant transmission à la finance |
| Radar de sujets pour créateurs | Chaque jour, collecte des tendances, sujets sectoriels et questions en commentaires | Jugement humain sur la position de marque et l'opportunité de surfer sur une vague |
| Révision hebdo de la base de connaissances | Chaque semaine, tri des nouvelles notes, favoris et comptes rendus | Confirmer classement, sources et intérêt à long terme |
| Inspection des risques projet | Chaque jour, contrôle des tâches en retard, builds et journaux d'erreur | Alertes majeures confiées au responsable pour décision |
| Veille des prix concurrents | Lecture planifiée de pages publiques ou d'API autorisées | Suspendre et réparer les règles d'analyse si la page change de structure |
| Bilan du plan d'apprentissage | Rappel quotidien, synthèse le week-end | Ajuster le plan de la semaine selon l'énergie réelle |
