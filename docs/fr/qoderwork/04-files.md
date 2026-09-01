# Le dossier de travail : laisser l'IA lire et écrire directement vos fichiers

Le dossier de travail est la ligne de partage majeure entre QoderWork et les « IA de chat » : une fois un dossier local autorisé, l'IA **lit et écrit directement les fichiers de votre ordinateur**, sans téléversement ni téléchargement manuels. L'officiel le dit tel quel : « organiser correctement ses dossiers et les désigner comme dossier de travail est l'opération clé pour tirer la valeur maximale de QoderWork ».

## Configuration

1. Cliquez sur + pour créer une tâche ;
2. Sous la zone de saisie, cliquez sur « Travailler dans un dossier » (selon les versions : « Choisir un dossier de travail ») ;
3. Sélectionnez le dossier cible dans le sélecteur de fichiers système ;
4. Saisissez directement votre besoin ; l'IA lit le contenu du dossier automatiquement.

**Limite stricte : une tâche ne peut être liée qu'à un seul dossier de travail** ; pour traiter des dossiers différents, créez des tâches séparées.

## Quand utiliser un dossier

| Scénario | Recommandation |
| --- | --- |
| Traiter un seul fichier | Glissez-le directement dans la conversation |
| Plusieurs fichiers liés | Dossier de travail |
| Les fichiers s'accumulent en continu | Dossier de travail (l'IA perçoit immédiatement les nouveaux fichiers) |
| Les livrables doivent aller à un endroit précis | Dossier de travail |

## Trois règles de sécurité des fichiers

1. **Accès limité aux dossiers que vous avez explicitement autorisés** — pour tout autre emplacement indispensable, votre accord est demandé au préalable ;
2. **Aucune suppression définitive** — les suppressions passent uniquement par la corbeille système ;
3. **Pas de stockage permanent du contenu** — envoyé au modèle IA au moment du traitement, mais jamais conservé durablement dans le cloud.

Conseil : n'autorisez que vos dossiers de travail habituels ; évitez de désigner tout votre dossier utilisateur comme dossier de travail.

## Formats pris en charge

| | Formats |
| --- | --- |
| Lecture | PDF, Word (.docx), Markdown, texte brut, RTF, Excel (.xlsx/.xls), CSV, TSV, PNG/JPG/SVG/GIF (OCR pris en charge), tous les fichiers de code source, PowerPoint (.pptx), JSON/YAML/XML/SQL |
| Sortie | Word, PDF, Markdown, HTML, Excel, CSV, PPTX, PNG, SVG, rapports HTML interactifs, code dans n'importe quel langage, JSON/XML |

Couverture quasi totale de la bureautique ; seule absence notable : les vieux formats binaires .doc / .ppt — convertissez-les d'abord en docx/pptx.

## Usage durable : configurez une fois, réutilisez longtemps

La vraie puissance du dossier de travail est dans « l'accumulation continue ». Métaphore officielle : **« le dossier est le "silo de matières premières", le prompt est le "plan de chantier". »**

Cycle typique :

```text
Semaine 1 : placez les 12 rapports annuels des départements dans le dossier « Bilan-2024 », désignez-le comme dossier de travail,
            laissez l'IA générer le bilan annuel → livrable en 6 minutes
Semaine 2 : ajoutez 3 jeux de données, ouvrez QoderWork (le dossier de travail n'a pas changé, inutile de le rechoisir),
            une phrase « j'ai ajouté des données, mets à jour le rapport » → mise à jour en moins de 5 minutes
```

Quatre astuces pour organiser les dossiers :

1. **Nommage daté ou numéroté** : `2024-03-notes-examen.xlsx`, le tri par l'IA reste propre ;
2. **Un dossier, un sujet** : ne mélangez pas vie privée et trois projets dans un même répertoire ;
3. **Formats uniformes** : mêmes modèles et mêmes noms de colonnes permettent l'alignement et la fusion automatiques ;
4. **Exploitez les sous-dossiers** : lecture récursive prise en charge ; structurez en `matières-premières/sorties/references`.

## Sept rôles typiques

| Rôle | Usage du dossier |
| --- | --- |
| Enseignant | Résultats des examens successifs → rapport d'analyse de la classe mis à jour en continu |
| Commercial | Rapports mensuels → tendances et alertes d'anomalies |
| Finance | Justificatifs de frais → registre récapitulatif |
| Avocat | Dossier de dossier judiciaire (assignations/contrats/pièces) → rapport d'analyse du dossier |
| Opérations | Données par canal → rapport hebdomadaire de ROI |
| Commerce international | Tech Packs de commandes → table d'extraction structurée |
| Chercheur | PDF de littérature → revue de littérature |

Étude de cas complète dans [Organisation de fichiers et photos](/fr/qoderwork/case-file-organize).

---

Étape suivante : [Skills et kits d'experts →](/fr/qoderwork/05-skills)
