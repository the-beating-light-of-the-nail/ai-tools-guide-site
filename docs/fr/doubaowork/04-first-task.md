# Première tâche en cinq minutes

Une fois installé, bouclez le processus avec une petite tâche : créer la tâche → ajouter la matière → régler les permissions → valider.

## Créer la tâche

1. Cliquez sur « Nouvelle tâche de travail » à gauche ;
2. Cliquez sur le « + » à gauche de la zone de saisie ou utilisez « @ Ajouter des sources » pour joindre les fichiers, dossiers ou autres sources nécessaires — Doubao Work prend particulièrement en charge les **données du disque cloud Feishu**, et vous pouvez aussi @ un contact Feishu ;
3. Vérifiez que « Tâche de travail » est sélectionné en bas, indiquez éventuellement le projet de rattachement, puis choisissez le mode de permission : **Toujours demander / Confirmer au besoin / Tout autoriser** (pour une première tâche, préférez « Confirmer au besoin ») ;
4. Gardez le modèle sur Auto, ou choisissez Turbo / Pro et l'intensité de raisonnement selon la complexité.

## Un prompt utilisable tel quel

```text
Lis les trois relevés de travail que j'ai ajoutés et rassemble-les en un rapport hebdomadaire d'une page.
Structure : réalisé cette semaine, chiffres clés, problèmes et risques, plan de la semaine prochaine.
N'utilise que les informations explicitement présentes dans les sources ; ce qui ne peut pas être confirmé va dans « à confirmer », sans compléments inventés.
Sortie en Markdown, en conservant pour chaque conclusion clé le nom de la source correspondante.
```

Après l'envoi, observez s'il **lit d'abord les sources avant de générer le résultat**. S'il se lance directement dans le rapport, ajoutez au prompt une phrase du type « commence par lister les sources et la période couverte ».

## La validation se joue sur quatre points

1. Les faits sont-ils exacts ;
2. Les chiffres se recoupent-ils ;
3. Les éléments « à confirmer » ont-ils été conservés ;
4. Le format reste-t-il modifiable.

Une fois cette première tâche bouclée, ajoutez progressivement Skills et connecteurs. Les livrables peuvent être retouchés, téléchargés ou partagés au besoin ; avant tout partage, vérifiez l'absence d'informations sensibles ou confidentielles et choisissez la portée de diffusion conformément aux règles de votre entreprise.

## Trois tâches pour débuter

**A · Ranger des fichiers**

```text
Objectif : ranger les fichiers d'exercice du dossier input pour pouvoir rechercher par type.
```

**B · Compte rendu de réunion**

```text
Transforme input/meeting.txt en compte rendu de réunion structuré.
```

**C · Word vers PowerPoint**

```text
Convertis input/rapport-projet.docx en PPT de présentation interne de 10 diapositives maximum.
```

---

Prochaine étape : branchez des outils externes — [Connecteurs : commencez par une petite tâche vérifiable →](/fr/doubaowork/05-connectors)
