# Chapitre 4 : Réussir rapidement sa première tâche WorkBuddy

## Créer rapidement une tâche WorkBuddy

1. Cliquez sur « Nouvelle tâche » ;

![](/workbuddy/04-first-task/assets/001_image_C4q3bdNKso.png)

2. Choisissez ou créez un répertoire de travail dédié ;

*NB : WorkBuddy repose sur des autorisations au niveau des dossiers et sur un blocage des commandes à risque. Pour vos premiers pas, travaillez dans un répertoire d'entraînement, surveillez l'étendue des autorisations et confirmez avec prudence avant de traiter de vraies données métier.*

![](/workbuddy/04-first-task/assets/002_image_GeeybIFZLo.png)

3. Déterminez le mode à utiliser ; Craft est le mode par défaut, mais vous pouvez aussi choisir Ask ou Plan ;

![](/workbuddy/04-first-task/assets/003_image_DZ55bxbCvo.png)

4. Choisissez le modèle : vous pouvez désigner celui que vous souhaitez, chaque modèle consommant un nombre de crédits différent.

![](/workbuddy/04-first-task/assets/004_image_JiigbkdTKo.png)

5. Saisissez la description de la tâche : « Analyse les données de "Données_de_vente_e-commerce.xlsx" et génère un PPT de reporting. »

![](/workbuddy/04-first-task/assets/005_image_ReDxbwNkYo.png)

6. Si besoin, spécifiez un Skill, un expert, un connecteur ou une bibliothèque de documents ; ignorons cela pour l'instant

![](/workbuddy/04-first-task/assets/006_image_INLGb7TDQo.png)

7. Après l'envoi, suivez le plan, les appels d'outils et les modifications de fichiers ;

![](/workbuddy/04-first-task/assets/007_image_BD1FbDdcEo.png)

8. Prévisualisez le livrable dans la zone de résultats et validez-le.

Le fichier peut être ouvert localement, mis en ligne sur le cloud ou partagé. Avant tout partage, vérifiez que le livrable ne contient pas d'informations sensibles ou confidentielles, et choisissez le périmètre de diffusion conformément aux règles de votre entreprise.

![](/workbuddy/04-first-task/assets/008_image_TzOAb2lxIo.png)





## Comment rédiger une description de tâche

| Élément | Question à trancher |
|-|-|
| Objectif | Quel problème faut-il résoudre au final |
| Entrées | Quels fichiers, répertoires ou liens utiliser |
| Actions | Analyser, organiser, transformer ou générer |
| Contraintes | Ce qui ne doit pas changer, quelles normes suivre |
| Sortie | Quel livrable fournir, où le placer |
| Validation | Quel critère juge le résultat conforme |

### Tâche de départ A : organiser des fichiers

```text
Objectif : organiser les fichiers d'exercice du répertoire input pour faciliter la recherche par type.
Entrées : ne traiter que le répertoire input de l'espace de travail courant.
Actions : identifier les types de fichiers, proposer un plan de classement et de renommage.
Contraintes : ne ni supprimer ni écraser les fichiers d'origine ; en cas d'homonymie, conserver les deux exemplaires et ajouter un numéro.
Sortie : générer d'abord inventory.xlsx et proposed-actions.md.
Validation : le nombre de fichiers de l'inventaire correspond au nombre réel de fichiers dans input, chaque action est traçable.
Ne déplacer aucun fichier avant ma validation de proposed-actions.md.
```

### Tâche de départ B : générer un compte rendu de réunion

```text
Transforme input/meeting.txt en compte rendu de réunion structuré.
Doit comporter : conclusions de la réunion, actions à mener, responsables, échéances, questions à trancher.
Les responsables ou dates non confirmés dans le texte original seront notés « à confirmer », sans complétion de ta part.
Sortie : output/compte-rendu.md et output/liste-actions.xlsx.
Validation : chaque conclusion est étayée dans le texte original ; aucune action ne manque de responsable ni d'échéance.
```

### Tâche de départ C : de Word à PPT

```text
Convertis input/rapport-projet.docx en un PPT de reporting interne de 10 pages maximum.
Audience : responsables de département ; durée de la présentation : 8 minutes.
Conserver les faits et chiffres du texte original, sans ajouter de données non vérifiées.
Structure : contexte, état des lieux, problèmes, solution, plan, décisions attendues.
Appliquer les couleurs et polices de reference/brand-guide.pdf.
Sortie : output/rapport-projet_v1.pptx, accompagné d'une liste du contenu page par page.
Validation : une seule idée clé par page, chiffres identiques à l'original, texte lisible en projection.
```
