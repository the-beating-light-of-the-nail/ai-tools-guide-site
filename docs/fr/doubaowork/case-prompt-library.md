# Trop de catégories nuit à la recherche : 541 prompts GPT reclassés

> Contexte : en collectant les cas de prompts GPT-Image2, on croit toujours que plus il y en a mieux c'est ; à 541 cas, les problèmes arrivent — cas éparpillés entre dépôt GitHub, README et dossier local, catégories de plus en plus fines, et pour trouver une « affiche encre de Chine style chinois », il faut naviguer entre plusieurs classes.

> Prérequis : comptes Doubao et Feishu identiques ; les documents du projet téléversés sur le drive ou la base de connaissances Feishu (documents, fichiers du drive, contacts et historiques référencables via @).

L'ancienne organisation : tous les cas empilés dans le README et le document gallery, triés à la main en 13 catégories ; 19 étiquettes de style, 10 étiquettes de contexte, trois dimensions qui se croisent ; les versions locale et GitHub rarement alignées. **Ce classement a été construit au fil du temps, jamais conçu du point de vue de celui qui cherche — les dimensions s'empilent, jusqu'à devenir le principal obstacle à la recherche.**

## Étape 1 : mettre Doubao au travail en une phrase

Une fois les documents rassemblés dans Feishu, pas besoin de prompts complexes :

```text
Analyse le système de classification des cas de ce projet @documents du projet awesome-gpt-image-2 :
vois d'abord les défauts des catégories actuelles, puis redessine-le à partir des vraies requêtes
de recherche.
```

Il lit les données, statistique la répartition des catégories et repère synonymes et chevauchements.

## Étape 2 : diagnostic chiffré des cinq défauts majeurs

1. **Étiquettes synonymes en pagaille** : sur 19 étiquettes de style, `Character` employé 113 fois, `Characters` 2 fois — exactement la même chose ; `Product`/`Products`, `Infographic`/`Charts`, `Realistic`/`Photography` sont des doublons : 19 étiquettes tiendraient en 12 ;
2. **Un même concept dans trois dimensions** : « affiche » figure à la fois dans category et styles, « histoire » apparaît aux trois niveaux — l'utilisateur ne sait pas par quelle porte entrer ;
3. **Catégorie poubelle** : `Other Use Cases` absorbe 28 cas de tout et n'importe quoi, soit l'équivalent d'aucun tri ;
4. **Catégories trop maigres pour un premier niveau** : 4 catégories de premier niveau ne couvrent ensemble que 11 % des cas ;
5. **Jargon interne incompréhensible** : des termes comme `R&D` ou `Prompt as Code` ne sont jamais tapés par un utilisateur ordinaire.

L'étape la plus décisive : l'extraction des mots de recherche fréquents depuis les 541 titres réels, pour **déduire en retour les habitudes réelles de recherche** — « affiche / couverture / promotion » 82 fois, « infographie / diagramme technique » 48 fois, « interface / capture / app » 38 fois, « portrait / photo / avatar » 28 fois, « illustration / style chinois / encre » 25 fois. L'utilisateur ouvre la banque de prompts avec un objectif concret : « je veux faire une image de X ». **Le système de catégories s'organise autour du livrable, chaque nom de catégorie correspondant directement au but final de l'utilisateur** — c'est le pivot central de toute la refonte.

## Étape 3 : redessiner à partir des vraies requêtes

Nouveau classement : **13 → 8 catégories, toutes nommées d'après le livrable**, pour exactement 541 cas, sans catégorie poubelle. La logique de fusion :

- **Interfaces et infographies** : UI, tableaux de bord, infographies et diagrammes techniques relèvent tous, dans l'esprit de l'utilisateur, de « l'information structurée » — fusionnés, 140 cas, la plus grande catégorie ;
- **Illustration et art** : style chinois / classique / encre / sujets historiques sont au fond des styles d'illustration ; après fusion, « style chinois » est atteint directement via un alias ;
- **Scènes · espaces · narration** : architecture, villes, storyboards, univers sont des livrables de « grand espace / vision du monde » ;
- **Personnages et figures** : réservé aux personnages virtuels / cartes / personnages 3D ; les vrais portraits vont en « Photographie et réalisme » ;
- **Other Use Cases dissoute** : les 28 cas répartis un à un dans les bonnes catégories.

Moins de catégories, mais pas moins de recherche : chaque catégorie reçoit une **table d'alias** — chercher « style chinois / classique / encre » → Illustration et art ; « portrait / photo / avatar » → Photographie et réalisme ; « Logo / VI / signe » → Marque et identité ; « fiche produit / packaging / image principale » → Visuels produits et e-commerce.

## Étape 4 : migration en masse vers la base Feishu

Créer dans la base des dossiers de premier niveau selon les 8 nouvelles catégories, puis :

```text
Selon la nouvelle table de correspondance, ré-étiquette la catégorie des 541 cas de cases.json,
puis crée en masse les documents Feishu selon les 8 catégories, dans les dossiers correspondants
de la base. Conserve les redirections des anciens ancres de catégorie, ne les supprime pas.
```

Il réécrit le champ category en masse, appelle les interfaces Feishu pour créer les documents et les ranger, garde les redirections des anciennes URL ancrées (les favoris restent valides), et laisse ids de cas et chemins d'images inchangés (liens GitHub préservés). **Ne pas tout modifier d'un coup** : par étapes — d'abord les étiquettes (risque faible) → puis les catégories (risque moyen) → enfin l'affichage front-end et la documentation, chaque étape annulable.

## Étape 5 : tester avec de vraies requêtes

| Requête réelle | Ancienne structure | Nouvelle structure |
| --- | --- | --- |
| Affiche encre de Chine style chinois | Hésitation entre History et Illustration | Illustration et art direct, atteinte en une étape |
| Portrait réaliste | Hésitation entre Photography et Characters | Photographie et réalisme, alias « portrait » direct |
| Capture d'interface App | Contenu Poster mélangé dans la catégorie UI, source de bruit | Interfaces et infographies, entrée directe |
| Carte de personnage | Cartes 3D dispersées dans Illustration | Personnages et figures, résultats plus concentrés |
| Carte urbaine architecturale | Allers-retours entre Architecture et Scenes | Scènes · espaces · narration |

Sur 10 requêtes de test : 5 ont totalement éliminé l'hésitation entre catégories, 4 ont un chemin d'accès plus court, 1 a gagné nettement en précision sémantique. Les itérations suivantes ont branché les vrais journaux de recherche GA4 pour recalibrer la table d'alias à partir du comportement réel — simple ajustement des règles d'alias, sans renverser l'architecture validée.

## Liste de migration par étapes

| Étape | Action | Risque |
| --- | --- | --- |
| 0 | Exporter les vraies requêtes, calibrer la table d'alias | Lecture seule |
| 1 | Fusionner les étiquettes synonymes (Characters→Character, etc.) | Faible |
| 2 | Réécrire en masse le champ category selon la table de correspondance | Moyen |
| 3 | Mettre à jour affichage front-end, alias de recherche, redirections d'anciennes URL | Moyen |
| 4 | Mettre à jour titres et ancres de catégories dans la documentation | Faible |
| 5 | Régression sur requêtes réelles, comparer la baisse des requêtes sans résultat | Validation |

Le plus frappant : **la gestion d'une base documentaire était un travail de bras, elle se fait maintenant à la voix** — Doubao lit les données, produit les statistiques, détecte les problèmes, conçoit le schéma et migre en masse ; l'homme ne fait que juger et valider aux nœuds clés. L'expérience accumulée des vieux projets n'a plus à dormir : avec l'IA et une base Feishu, on la remet en circulation, et le déploiement se passe bien mieux qu'imaginé.

---

Suivant : [Quelles connaissances sont périmées ? Trouver automatiquement le responsable pour confirmer →](/fr/doubaowork/case-knowledge-expiry)
