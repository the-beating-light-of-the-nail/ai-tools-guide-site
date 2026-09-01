# Première tâche : d'une phrase au livrable

Une fois installé, parcourez un flux de tâche complet : lancer → observer → valider → partager. Le mode Work sert de fil conducteur.

## Lancer une tâche

1. Dans la zone de dialogue de l'interface principale, **choisissez un projet** (sur la version web, vous pouvez aussi envoyer l'instruction sans en choisir ; le système crée alors automatiquement un projet nommé d'après les mots-clés de l'instruction) ;
2. Saisissez l'instruction de tâche — au clavier ou à la voix ;
3. Envoyez.

La zone de saisie permet aussi d'ajouter du contexte : pièces jointes (.pptx, .xlsx, etc.), images, commandes slash (`/`), Skills.

Exemple de tâche adaptée à une première exécution :

```text
Lis le fichier donnees-ventes.xlsx que j'ai téléversé, calcule et classe le chiffre d'affaires
et la marge brute du mois par ligne de produit, et produis un tableau récapitulatif Excel
plus un résumé de conclusion de 200 mots.
Exigences : les chiffres doivent être identiques au fichier source, ne pas spéculer sur les causes,
marquer « à vérifier » ce qui ne peut pas être confirmé.
```

## Observer l'exécution : le panneau d'outils

Le bouton « Développer le panneau d'outils » en haut à droite de l'interface est l'endroit où observer l'IA au travail, avec des onglets différents selon le mode :

| Onglet | Modes disponibles | Usage |
| --- | --- | --- |
| Résumé de tâche | Work / Design : à faire, livrables, informations de référence ; Code : à faire, contexte | Voir les étapes décomposées et les livrables |
| Navigateur | Tous les modes | Prévisualiser les productions de l'IA, vérifier le rendu visuel et les interactions |
| Terminal | Code | Exécuter des commandes terminal |
| Canevas | Design | Prévisualiser/organiser les productions, exporter les fichiers de design |

## Valider et modifier les livrables

Pour les productions de type application web, un onglet d'aperçu s'ouvre automatiquement une fois le développement terminé. Trois façons de modifier :

1. **Modification directe** : cliquez sur « Sélectionner un élément » en haut à droite → sélectionnez l'élément → changez ses propriétés dans le panneau « Design » ou « CSS » (l'édition manuelle ne concerne que les éléments textuels : taille de police, gras, alignement) ;
2. **Commentaire vers le dialogue** : remplissez la demande de modification et envoyez-la à l'IA avec l'élément sélectionné ;
3. **Modification par capture** : capturez un élément ou une zone → annotez avec rectangles/flèches → remplissez la demande de modification → envoyez à l'IA (ou ajoutez à la liste de commentaires pour un envoi groupé).

Les productions HTML (cahier des charges, prototypes produit, rapports d'analyse) prennent en charge la **liaison prototype-document** : après modification d'une partie du prototype, le contenu correspondant du document PRD se met à jour automatiquement.

## Gérer les tâches et les livrables

- **Gestion des tâches** : survolez « Plus d'actions » dans la barre de tâches de gauche (ou à côté du nom de tâche en haut du panneau de dialogue) → épingler, voir les fichiers de la tâche (liste/arborescence), créer / renommer / supprimer ;
- **Recherche globale** : icône de recherche en haut à gauche de l'interface, trouve des tâches ou des requêtes quel que soit le mode ;
- **Espace de livrables** : « Mes fichiers » dans la navigation de gauche, gère centralisément les livrables locaux, cloud et Feishu Docs. Le menu « ··· » des cartes permet d'épingler, « Ouvrir dans une tâche » (poursuit l'édition avec le contexte de la conversation d'origine), partager (génère un lien public qui montre toujours la dernière version après mise à jour), télécharger (livrables cloud uniquement), supprimer (**supprime aussi la tâche d'origine associée, irrécupérable**).

## Partager une conversation

Pour montrer un bon résultat à un collègue : survolez une requête/réponse dans le fil et cliquez sur l'icône « Partager » (ou clic droit sur la tâche dans la liste de gauche et « Partager ») → cochez le contenu à partager → deux formats :

- **Image générée** : à copier ou télécharger, idéale pour un groupe ou un document ;
- **Lien de partage** : génère un lien et un QR code.

## Comment rédiger l'instruction de tâche

Comme pour toute IA à tâches, la qualité du résultat de TraeWork dépend de l'instruction. Six éléments :

| Élément | Question à laquelle répondre |
| --- | --- |
| Objectif | Quel problème faut-il finalement résoudre |
| Entrées | Quels fichiers, dossiers ou liens utiliser |
| Actions | Analyser, organiser, transformer ou générer |
| Contraintes | Ce qui ne doit pas changer, quelles normes respecter |
| Sortie | Quel fichier livrer, où le déposer |
| Validation | Selon quels critères juger la conformité |

Pas encore à l'aise pour une première fois ? En haut de la navigation de gauche, la **bibliothèque de modèles** propose, par scénario, des modèles avec instruction, étapes d'exécution et exigences de livraison prédéfinis ; touchez « Faire pareil », complétez le contexte et lancez directement.

---

Étape suivante : équipez l'IA des « façons de faire de référence » — [les Skills →](/fr/traework/04-skills)
