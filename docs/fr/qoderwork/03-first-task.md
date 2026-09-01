# Première tâche : de la description au livrable

Le cycle d'usage de QoderWork tient en trois étapes : **décrire la tâche → surveiller l'exécution → récupérer le livrable**. Ce chapitre détaille chaque étape et les bonnes pratiques officielles.

## Créer une tâche en cinq étapes

1. **Décrire la tâche** : le prompt doit être « orienté résultat » — dites directement « ce qu'il faut obtenir », pas « quelles étapes suivre » ;
2. **Choisir l'atelier** : en bas à gauche de la zone de saisie, « Général » par défaut (trois ateliers dédiés design/présentations/rédaction existent, voir [Les trois ateliers](/fr/qoderwork/adv-workbenches)) ;
3. **Choisir le modèle** : sélecteur en bas à droite (section suivante) ;
4. **Choisir le dossier de travail** (optionnel) : laisser l'IA lire et écrire directement un dossier local, voir [Le dossier de travail](/fr/qoderwork/04-files) ;
5. Envoyez.

Une tâche adaptée à une première exécution :

```text
Analyse le fichier donnees-ventes.csv que j'ai téléversé : explique la signification des champs,
calcule et classe le chiffre d'affaires par catégorie,
et produis un tableau récapitulatif Excel plus 3 conclusions.
Exigences : chiffres identiques au fichier source ; marquer « à vérifier » ce qui ne peut pas être confirmé.
```

## Trois entrées pour enrichir le contexte

| Entrée | Usage | Adapté à |
| --- | --- | --- |
| **Bouton +** | Ajouter depuis le menu : kits d'experts, Skills, connecteurs, fichiers | Téléverser des pièces jointes, brancher des capacités |
| **Référence @** | Taper @ pour citer un objet existant : kit, tâche passée, tâche planifiée, fichier | Relier du contenu existant |
| **Appel /** | Taper / pour invoquer Skills et commandes (xlsx, pptx, pdf, find-skills, etc.) | Désigner précisément |

La meilleure pratique officielle, mot pour mot : « **Une tâche avec les bonnes références et pièces jointes réussit presque toujours mieux qu'une longue description textuelle.** »

## Quel modèle choisir

| Palier | Adapté à | Consommation |
| --- | --- | --- |
| Phare | Raisonnement complexe, rapports clairs à faible tolérance d'erreur, analyses multi-fichiers | Maximale |
| Avancé | Projets importants demandant puissance et équilibre | Élevée |
| Standard | Tâches courantes, équilibre vitesse/qualité — **suffit dans la grande majorité des cas** | Moyenne |
| Qwen3.7-Max / Plus | Série Tongyi Qianwen : Max pour le raisonnement avancé, Plus rapide et économe au quotidien | Variable |

Deux mécanismes clés :

- **Bascule à tout moment, effet immédiat** : le modèle peut être changé en cours de tâche sans perdre le contexte. Exemple officiel de rythme : collecte au palier standard → analyse approfondie au palier phare → mise en forme de sortie au palier standard ;
- En cas de solde insuffisant : acheter des Credits, ou basculer sur les paliers avancé/standard pour réduire la consommation.

## Observer l'exécution : le panneau de surveillance de tâche

La surveillance de tâche est à droite de l'espace de travail, avec trois sous-panneaux :

- **Plan à faire** : les étapes décomposées par l'IA, cochées au fil de l'avancement ;
- **Livrables** : cartes des fichiers produits ; un clic les ouvre dans le système ;
- **Skills & MCP** : les Skills et connecteurs mobilisés dans ce tour — transparent de bout en bout.

**Instructions en cours de route** : les messages envoyés pendant l'exécution passent en file d'attente et s'exécutent après la fin du tour en cours (contexte complet conservé) ; après la fin de la tâche, effet immédiat. Si le résultat ne convient pas, dites-le simplement : « classe par prix croissant », « sur quoi repose la conclusion du point 3 ».

## Le périmètre d'une tâche

- Une tâche = une session de travail IA indépendante, avec sa conversation, son contexte, sa surveillance et ses livrables ; **deux tâches ne partagent pas leurs données** ;
- Les itérations liées (premier jet → retouches → version finale) restent dans la même tâche ; pour un sujet sans rapport, ouvrez une nouvelle tâche — contexte propre, et pas de Credits gaspillés à rejouer l'ancienne conversation ;
- Toutes les tâches (brouillons non envoyés compris) sont sauvegardées automatiquement ; la liste est triée par « récent », avec recherche, regroupement, épinglage, export Markdown et archivage (l'archivage est réversible : archiver plutôt que supprimer).

## Les trois éléments du prompt

Squelette officiel du prompt, à passer en revue avant chaque tâche :

| Élément | À quelle question il répond | Exemple |
| --- | --- | --- |
| Objectif | Quel est le livrable | « un tableau récapitulatif Excel » |
| Format | Sous quelle forme la sortie | « en .xlsx, avec graphiques » |
| Contraintes | Ce qui doit être inclus/évité | « n'invente pas de données ; montants à deux décimales » |

Plus de modèles dans [Modèles d'instructions courants](/fr/qoderwork/ref-templates) ; la méthodologie complète des prompts (six techniques avancées + cinq erreurs fréquentes) est référencée dans [Tableau des scénarios](/fr/qoderwork/ref-scenarios).

---

Étape suivante : [Le dossier de travail : laisser l'IA lire et écrire directement vos fichiers →](/fr/qoderwork/04-files)
