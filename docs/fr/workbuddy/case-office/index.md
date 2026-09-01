# Chapitre 11 : La trilogie bureautique : Word, Excel, PPT

C'est souvent avec la trilogie bureautique que l'on ressent pour la première fois la valeur de WorkBuddy. Ce chapitre se concentre sur les trois livrables de bureau les plus courants : documents Word, tableaux Excel et présentations PPT.

## Workflow commun : ramener la tâche à cinq questions

Quel que soit le type de document, beaucoup de tâches bureautiques « mal exécutées par l'IA » ne relèvent pas de l'incapacité du modèle à écrire, mais du fait que les critères de livraison n'ont pas été explicités.

| Question | Ce qu'il faut préciser | Exemple |
| --- | --- | --- |
| Objectif | Quelle décision ce document doit-il éclairer, et pour qui | Pour le responsable de département, afin de juger s'il faut poursuivre le projet |
| Audience | Qui lit, et connaît-il le contexte | La direction lit les conclusions ; l'équipe projet veut le déroulé et les responsables |
| Matériaux | Quels fichiers font foi, lesquels ne sont que références | `data.xlsx` est la seule source de données ; l'ancien PPT ne sert que de structure |
| Format | Word, Excel, PPT, ou les trois combinés | Un bilan Word, un registre des risques Excel, un PPT de 8 pages |
| Validation | Comment juger le résultat utilisable | Chiffres traçables jusqu'aux fichiers sources, formules recalculables, PPT lisible en projection |

## Bien choisir ses Skills : combinaisons recommandées pour les tâches bureautiques

| Skill | Usage adapté | Points d'attention |
| --- | --- | --- |
| Word / DOCX | Créer, vérifier, éditer des DOCX : titres, numérotation, tableaux, révisions | Adapté aux fichiers docx locaux |
| Excel / XLSX | Lire, nettoyer, écrire des classeurs ; formules, dates, modèles conservés | Confirmer d'abord le périmètre des données |
| Powerpoint / PPTX | Créer, éditer, vérifier des PPTX : gabarits, espaces réservés, graphiques | Pour les cas exigeant un PPTX modifiable |
| Office Document Specialist Suite | Traitement combiné Word / Excel / PPT et interaction multi-fichiers | Pour les tâches complexes, valider étape par étape |
| wps / kdocs skill | Trilogie WPS et documents cloud Kingsoft | Nécessite généralement une clé API |
| Tencent Docs | Création et édition de Word, Excel et présentations en ligne | Nécessite généralement une autorisation |
| Markdown Converter | Convertir PDF, Word, PPT, Excel en Markdown | Pour lire des documents, pas pour la mise en page finale |
| PPT Generator / PPT Workflow | Générer une présentation à partir d'un thème, d'un script ou de documents | Relecture humaine indispensable après génération |
| Génération de formules Excel | Du langage naturel vers des formules Excel/WPS/Google Sheets | Valider les formules sur des données d'exemple |
| Tencent Meeting | Réserver des réunions, obtenir transcription et compte rendu IA | Nécessite l'autorisation de la plateforme |

Combinaisons pratiques : fichiers locaux en priorité avec **Word / DOCX, Excel / XLSX, Powerpoint / PPTX** ; collaboration en ligne avec **Tencent Docs** ou **kdocs** ;face à de volumineux documents, commencez par extraire la structure avec **Markdown Converter** ; ajoutez **Tencent Meeting** pour les workflows liés aux réunions.

## Word : de la page blanche au document officiel

Les vraies difficultés de Word sont au nombre de quatre : ne pas savoir quelle structure adopter, un ton pas assez formel, une numérotation des titres chaotique, des propos sans source. WorkBuddy ne remplace pas votre réflexion : il **transforme vos matériaux en un brouillon structuré, au ton homogène et modifiable**.

Tâches à confier à Word : propositions formelles (événement, projet, marketing, formation), documents de gestion (règlements, notes, comptes rendus, bilans, rapports périodiques), documents produit (PRD, spécifications, analyses concurrentielles).

### Déroulé recommandé

| Étape | Ce que fait WorkBuddy | Ce que l'humain valide |
| --- | --- | --- |
| 1 | Lit les documents, liste les informations disponibles et manquantes | Quels documents font foi, lesquels ne sont que références |
| 2 | Génère le plan du document et la ligne éditoriale | Qui est le lecteur ; le document sert à rendre compte, faire valider ou exécuter |
| 3 | Génère le brouillon Word selon le plan | Niveaux de titres, ordre des chapitres, complétude des informations clés |
| 4 | Peaufine, complète, supprime selon les retours | Ce qui peut être figé, ce qui doit rester « à confirmer » |
| 5 | Livre un docx modifiable et une note de modifications | Utilisable tel quel pour relecture par un collègue |

### Exemple : générer une proposition de séminaire d'équipe

```text
Génère le squelette d'un document Word pour une proposition de séminaire d'entreprise.
Environ 80 personnes ; à inclure : objectifs, suggestions de thème, déroulé général (avec horaires),
propositions de groupes et de jeux, ventilation du budget, répartition des rôles, plan de secours et points d'attention.
Langage concis et pratique, sans excès de détail ; l'essentiel est de clarifier le cadre d'ensemble et les décisions clés,
pour valider directement l'orientation avec la direction.
```

![](/workbuddy/case-office/assets/001_image_PhFMbu3kTo.png)

![](/workbuddy/case-office/assets/002_image_UVm5bKLrZo.png)

### Deuxième passe : ne pas réécrire, mais décrire les différences

```text
Modifie la version précédente de la proposition de séminaire Word, sans régénérer tout le document.
Modifications demandées :
Compresser les objectifs en 3 points de 50 caractères maximum chacun ;
Mettre le déroulé sous forme de tableau avec les colonnes : heure, séquence, contenu, responsable, matériel requis ;
Dans les suggestions d'animations, ajouter des activités adaptées à une entreprise de 100 personnes et supprimer les scénarios trop difficiles à exécuter ;
Détailer la ventilation du budget avec : poste, montant estimé, quantité, prix unitaire, remarques, plus le budget total ;
Ajouter un plan de secours couvrant retards, pannes matérielles, dépassements d'animations et problèmes de sécurité ;
Rendre l'ensemble plus formel et concis, prêt pour approbation par la direction.
Livrer le document Word v2 modifié et lister les changements dans changelog.md.
```

![](/workbuddy/case-office/assets/003_image_IoOLbfEcvo.png)

![](/workbuddy/case-office/assets/004_image_V1RpbVGuno.png)

### Pour aller plus loin : comparer deux versions d'un règlement, contrat ou projet

```text
Compare policy-v3.docx et policy-v4.docx.
Livre quatre catégories de différences — ajouts, suppressions, modifications, changements de forme seule — avec chapitres et localisation dans le texte original.
Signale en priorité montants, dates, responsables, conditions d'approbation, exceptions et formulations négatives.
Génère une liste d'impacts et de questions à trancher ; pas de conclusion juridique ; ne modifie pas les fichiers d'origine.
```

![](/workbuddy/case-office/assets/011_image_HqbtbVTw3o.png)

![](/workbuddy/case-office/assets/012_image_MhArbb6Woo.png)

La comparaison de documents sert à repérer les changements ; elle ne remplace pas le jugement final des responsables juridiques, financiers ou du règlement.

## Excel : transformer un tableau en analyse qui répond à des questions

La difficulté d'Excel ne réside généralement pas dans « savoir faire un graphique », mais dans « à quelle question ce tableau répond-il ». Confier à l'IA un tableau truffé de cellules vides, de fusions et de définitions multiples donne facilement un graphique d'allure professionnelle mais sans valeur métier. L'ordre compte : **définir d'abord la question métier, puis choisir le graphique**.

Tâches à confier à Excel : nettoyage de données (déduplication, remplissage, harmonisation des formats, fusion multi-tableaux), analyse d'activité (chiffre d'affaires, marges, conversion, rotation des stocks), génération de rapports (rapports périodiques, exécution budgétaire, recap présence), assistance aux formules (générer, expliquer, diagnostiquer `#N/A`), visualisation (graphiques, tableaux croisés, tableaux de bord).

### Déroulé recommandé

| Étape | Accent du prompt | Sortie |
| --- | --- | --- |
| Lecture du tableau | Décrire d'abord structure du classeur, sens des champs, données sales évidentes | Dictionnaire de données, liste de problèmes |
| Définition des indicateurs | Énoncer la question métier, pas « analyse un peu » | Tableau de définition des indicateurs |
| Nettoyage | Préciser le traitement des vides, doublons et valeurs aberrantes | xlsx / csv nettoyé |
| Calcul | Générer formules et tableaux croisés en conservant la recalculabilité | Tableaux de synthèse, note sur les formules |
| Visualisation | Choisir les graphiques selon la question métier, sans empilement | Graphiques, conclusions d'analyse |

### Exemple : analyse de données de vente

```text
Lis Données_de_vente_e-commerce.xlsx sans modifier le fichier d'origine.
Question métier : analyser ce mois-ci les performances et la rentabilité de chaque gamme de produits,
identifier les gammes à forte contribution et celles dont la marge est faible,
et repérer les fluctuations anormales du mois.
Rends :
l'explication des champs et le contrôle des valeurs manquantes, doublons, aberrations et formats ;
par gamme : chiffre d'affaires, marge brute, taux de marge, part du CA et contribution à la marge, avec classement ;
par jour : CA et taux de marge agrégés, analyse de l'évolution quotidienne ;
un histogramre comparant CA et marge par gamme, et une courbe du CA quotidien du mois ;
les dates ou enregistrements manifestement anormaux (CA, marge, montant par commande), expliqués par les données, sans conjecture métier ;
une synthèse des meilleures gammes, de celles à surveiller, et 3 conclusions directement exploitables en bilan métier.
Sorties : output/sales-analysis.xlsx et output/summary.md.
Exigences : données d'origine conservées, calculs et formules traçables ; les causes non confirmées sont notées « à vérifier », sans invention.
```

![](/workbuddy/case-office/assets/005_image_I118b7wyUo.png)

![](/workbuddy/case-office/assets/006_image_BWkRb60JPo.png)

![](/workbuddy/case-office/assets/007_image_XtfQbkCqio.png)

### Pour aller plus loin : fusion multi-tableaux, rapprochement et liste d'anomalies

Le plus utile au quotidien n'est pas « faire un graphique », mais d'exposer les définitions de données et les anomalies :

```text
Fusionne les 6 tableaux de ventes hebdomadaires de input/sales.
Vérifie d'abord noms de colonnes, types, plages de dates, devises et clés primaires ; en cas d'incohérence, arrête-toi et liste les écarts.
Déduplique par numéro de commande en conservant la trace des doublons ; avant agrégation, livre le total de lignes, les vides, aberrations et doublons.
Génère clean-sales.xlsx, exception-list.xlsx et reconciliation.md.
Le total des montants doit se rapprocher avec la somme des tableaux sources ; si l'écart n'est pas nul, ne génère pas de conclusions de gestion.
```

![](/workbuddy/case-office/assets/009_image_UNEqbRnJfo.png)

![](/workbuddy/case-office/assets/010_image_L25tbHIUeo.png)

**Validation** : volume entrant, variations du nettoyage et volume sortant s'équilibrent ; formules recalculables ; aucune anomalie supprimée en silence ; les champs utilisés par les graphiques correspondent au tableau de synthèse.

## PPT : pas un gabarit, mais une narration construite depuis vos documents

« Fais-moi un PPT haut de gamme » laisse l'IA deviner le style et produit de belles banalités. Un PPT vraiment utilisable répond d'abord à trois questions : **pour qui** est la présentation, **quelle décision** l'auditoire doit-il prendre, et de quel temps disposez-vous. Le Skill PPT génère les pages, mais la trame doit être validée avant — plus les pages sont jolies, plus elles masquent les problèmes de logique.

Tâches à confier à PPT : comptes rendus de projet, rapports d'activité, supports de formation, présentation de propositions.

### Déroulé recommandé

| Étape | Ce que fait WorkBuddy | Ce que l'humain valide |
| --- | --- | --- |
| 1 | Convertit Word, Excel, anciens PPT en résumés de matériaux | Ce qui doit rester, ce qui peut sauter |
| 2 | Génère une trame de 6 à 10 pages et les titres | Public, durée, objectif de décision |
| 3 | Produit le PPT selon le plan validé | Une seule idée clé par page |
| 4 | Ajoute graphiques, notes, correspondance des sources et exports | Les chiffres clés viennent-ils bien d'Excel |
| 5 | Contrôle de gabarit : débordements de texte, images manquantes, corps de police | Lisibilité en projection, adéquation à la présentation en direct |

### Exemple : un PPT de présentation à partir d'un dossier de documents

```text
Prépare à partir des documents de l'espace de travail courant un PPT de partage sur les Agents IA, 8 pages maximum.
Audience : managers et métiers connaissant l'IA de base mais pas les Agents. Durée : 10 minutes.
Objectif : faire comprendre ce qu'est un Agent IA, ce qui le distingue des outils conversationnels classiques,
quels problèmes il résout, et comment une entreprise juge la pertinence d'un déploiement.
Matériaux : AI术语全景手册.md est la source principale ; n'ajoute aucun fait ni donnée hors des documents de l'espace.
8 pages maximum, une seule conclusion clé par page ;
cas, données et jugements clés doivent citer leur source ; ne complète pas ce qui ne peut être confirmé ;
les titres expriment directement une idée ; bannir les titres génériques du type « Présentation des Agents IA » ;
sortie : output/ai-agent.pptx ; après génération, vérifier débordements, blancs, cohérence des graphiques, images manquantes,
uniformité des polices et numérotation.
Style : professionnel, sobre, tech, sans excès de dégradés, lueurs et ornements.
```

![](/workbuddy/case-office/assets/008_image_ABXObcQeeo.png)

## Les trois combinés : un livrable complet automatique après la réunion

Beaucoup de tâches ne se limitent pas à un fichier : « après la réunion, il faut des livrables » — d'abord le compte rendu, puis le PRD, puis le tableau de tâches, enfin le PPT. La valeur de WorkBuddy est d'enchaîner ces livrables sur **une même chaîne de faits**.

Prenons une revue de produit ; combinaison de Skills :

| Étape | Skill recommandé | Rôle |
| --- | --- | --- |
| Obtenir le contenu de la réunion | Tencent Meeting / type compte rendu intelligent | Transcription, compte rendu IA, décisions, actions |
| Générer le PRD | Word / DOCX, Tencent Docs | Réécrire la réunion en document d'exigences produit |
| Générer le tableau de tâches | Excel / XLSX | Responsables, échéances, priorités, critères d'acceptation |
| Générer le rapport | Powerpoint / PPTX | Convertir PRD et avancement en présentation pour la direction |

```text
Lis la transcription et le compte rendu IA de la revue de produit, puis génère un livrable bureautique complet.
Objectif : convertir la réunion en documents exploitables par la R&D.
Rends :
1. Word : output/feature-prd.docx avec contexte, utilisateurs cibles, problèmes clés, liste d'exigences,
   description des flux, critères d'acceptation, risques et questions ouvertes ;
2. Excel : output/action-items.xlsx avec champs : action, responsable, priorité, échéance,
   dépendances, statut, critère d'acceptation ;
3. PPT : output/review-summary.pptx, 6 pages maximum, orienté direction, mettant en avant les décisions,
   les demandes de ressources et les risques.
Contraintes : ce qui n'a pas été explicitement confirmé en réunion ne devient pas une conclusion acquise ; noms, dates et périmètres fonctionnels gardent leur source ;
responsables ou échéances manquants notés « à confirmer » ; livre d'abord le plan et l'aperçu des champs du tableau de tâches, je valide avant la génération des fichiers.
```

## Erreurs fréquentes et comment les corriger

| Erreur fréquente | Pourquoi elle arrive | Meilleure formulation |
| --- | --- | --- |
| « Fais-moi un PPT, un peu classe » | Ni public, ni objectif, ni contrainte de matériaux | Préciser public, durée, nombre de pages, décision visée, données à conserver |
| « Analyse cet Excel » | Pas de question métier ; le modèle résume dans le vide | Dire quelle question traiter, quels indicateurs calculer, selon quelles dimensions comparer |
| « Écris un rapport » | Pas de type de document ni de ton | Préciser : proposition, bilan, demande, compte rendu ou PRD, et désigner le lecteur |
| « Tout automatique, ne me demande rien » | Définitions clés non confirmées, risque amplifié | Faire produire d'abord la liste des documents, des risques et le plan, valider, puis générer |
| « Fusionne ces documents en un seul fichier » | Aucune distinction entre faits, références et à confirmer | Désigner la source de données unique, les fichiers de référence et les champs interdits d'invention |
