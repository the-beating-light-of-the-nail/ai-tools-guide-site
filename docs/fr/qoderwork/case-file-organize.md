# Étude de cas : organisation de fichiers et gestion des photos

L'organisation de fichiers est la « première leçon » de QoderWork, et le scénario où l'on sent le plus directement que « l'IA fait vraiment le travail jusqu'au bout ». Ce chapitre regroupe scénarios officiels types, cas utilisateurs et tests communautaires.

> Sources communautaires : test de Chenmo Wang'er ([javabetter.cn](https://javabetter.cn/sidebar/itwanger/ai/qoderwork-review.html)) et bibliothèque officielle de cas utilisateurs. Prompts retravaillés par ce site.

## Scénario 1 : grand nettoyage de Downloads

**Nettoyage des doublons** (exemple officiel de prompt) :

```text
Scanne mon dossier Downloads, trouve tous les fichiers en double et conserve la version la plus récente.
```

Chiffres en test réel (Chenmo Wang'er, période bêta) : déplacement de 2444 fichiers de CV en **moins de 6 secondes** ; nettoyage d'un Downloads géant de dizaines de milliers de fichiers en environ 300 secondes, avec un rapport listant « doublon / supprimé / conservé ». L'IA identifie les doublons par MD5 et regroupe par date : deux ordres de grandeur plus rapide qu'à la main.

Conception sécurité : l'outil **ne supprime rien de sa propre initiative** ; il liste le plan et n'exécute qu'après votre accord ; les suppressions passent uniquement par la corbeille système (voir les trois règles de sécurité du [dossier de travail](/fr/qoderwork/04-files)).

**Classement et archivage** (scénario officiel type) :

```text
Organise [dossier] : les images vers assets/images/, les documents (.md/.txt/.pdf) vers docs/,
les fichiers de configuration (.json/.yaml/.toml) vers config/, le code dans des sous-dossiers de src/ par langage.
Donne-moi d'abord le plan, déplace après validation ; à la fin, produis un rapport d'organisation (statistiques + arborescence).
```

Version avancée avec règles de renommage :

```text
Organise le dossier de téléchargements, par type de fichier (documents/images/vidéos/archives),
renommés au format « type_date_nom-original », avec journal de classement.
```

## Scénario 2 : du mur de photos à l'archivage photo

Scénario officiel type (gestion des photos) :

```text
Organise le dossier ~/Pictures/2024 :
1. Lis la date de prise de vue EXIF de chaque photo
2. Crée des dossiers hiérarchiques par année-mois (2024-01/, 2024-02/…)
3. Déplace et renomme selon la date au format « date_numéro.jpg »
4. Génère un inventaire CSV (nom d'origine, nouveau chemin, date de prise de vue)
Donne-moi d'abord le plan ; je validerai avant tout déplacement.
```

## Scénario 3 : le bilan annuel d'une directrice administrative (cas utilisateur officiel)

Li Jie, directrice administrative d'une société tech de 300 personnes, doit chaque année consolider les bilans de 8 départements — plus de 50 Word/PDF sur le bureau, « au moins deux jours chaque année ». Méthode :

1. Créer le dossier « documents-bilan-2024 » et uniformiser le nom des 12 fichiers (département-année-type) ;
2. Le désigner comme [dossier de travail](/fr/qoderwork/04-files) ;
3. Une instruction structurée :

```text
En prenant bilan-2023.docx comme modèle de format, consolide les bilans des départements :
extraire les réalisations et les chiffres de chaque département, croiser avec les indicateurs financiers et d'exploitation,
organiser en quatre volets « vue d'ensemble / activités / équipe / perspectives »,
suivre le style rédactionnel des bilans des années passées, conserver la mise en page du modèle, sortie Word dans output/.
```

Résultat : **deux jours → 6 minutes**, données clés conservées à 100 %. Ensuite, déposez les nouveaux fichiers dans le même dossier et une phrase « j'ai ajouté des données, mets à jour le rapport » suffit pour une mise à jour incrémentale.

## Synthèse des méthodes

| Scénario | Structure du prompt | Contrainte clé |
| --- | --- | --- |
| Déduplication | Scanner → conserver le plus récent → produire la liste | Le plan avant l'exécution |
| Classement et archivage | Règles de tri + règles de nommage + rapport | Le plan avant le déplacement |
| Gestion des photos | EXIF → arborescence → renommage → inventaire | Le plan avant de toucher aux fichiers |
| Synthèse périodique | Fichier modèle + structure en volets + référence de style | Données toujours traçables |

Quatre lignes de sécurité :

1. Toujours « le plan d'abord, l'exécution ensuite » — validez la liste avant de donner le feu vert ;
2. Sauvegardez avant les opérations de masse (ou vérifiez que la corbeille fonctionne) ;
3. Autorisations minimales : ne donnez que les dossiers nécessaires ;
4. Contrôle par échantillonnage après exécution : conservation du nombre de fichiers (total initial = déplacés + conservés + à confirmer).

---

Chapitre suivant : [Analyse de données et rapports d'étude →](/fr/qoderwork/case-data-report)
