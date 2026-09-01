# Fichiers en double et versions en conflit : voir les différences avant de décider

> Contexte : un ami envoie un dossier entier à nettoyer — 5 sous-dossiers, 9 documents Word, dont 3 groupes aux noms quasi identiques. Dédupliquer par nom de fichier ? Des fichiers au même nom ou presque n'ont pas forcément le même contenu, et certains sont des versions d'étapes différentes.

Avant de commencer, fixez la règle : **ce tour-ci, analyse et recommandations uniquement, aucune suppression directe**. Une fois les relations de chaque groupe clarifiées, le propriétaire des fichiers décide quoi archiver, renommer ou conserver.

## Étape 1 : lister d'abord, puis filtrer les vrais doublons par empreinte de fichier

Scannez d'abord le dossier et listez les 9 documents : nom, taille et chemin. Dans la liste, 3 fichiers s'appellent tous « Manuel panoramique de conformité e-commerce 2026 » et 2 autres « Bibliothèque de copywriting à succès + meilleures accroches » — en traitant par nom seul, ces deux groupes passeraient pour des doublons :

```text
Vérifie quels fichiers de ce dossier sont de vrais doublons et lesquels ont juste
un nom ressemblant.
Regarde d'abord si le contenu est strictement identique, puis, pour les fichiers au nom
proche mais au contenu différent, indique où ils diffèrent.
```

L'« empreinte de fichier » est une **valeur de hachage** calculée à partir des données : même hash, identité au niveau des octets ; hash différent, le fichier a changé et il faut comparer le contenu. Résultat du test :

- les 3 « Manuel de conformité » ont le même hash — 3 copies d'un même fichier ;
- les 2 « Bibliothèque de copywriting » ont des hash différents — à comparer ;
- les 2 « Script de test Sérum polaire » ont des hash différents — écarts de version à confirmer.

À ce stade, seul le premier groupe est confirmé comme strictement dupliqué. **Heureusement qu'on n'a pas nettoyé par nom de fichier d'emblée.**

## Étape 2 : hash différents — voir où le contenu diffère

Faites lire à Doubao Work les deux groupes aux hash différents, comparer thèmes, structures et passages clés, pour déterminer s'il s'agit de deux documents distincts ou de deux versions d'un même contenu :

- **les deux « Bibliothèques de copywriting » visent des plateformes différentes** : l'une couvre les scripts oraux Douyin (accroches, rythme, jeu d'animateur), l'autre les posts illustrés Xiaohongshu (titres, couvertures, mise en page, images) — contenus et usages distincts, à conserver toutes les deux, un renommage par contexte suffit ;
- **les deux « Scripts de test » sont des versions d'étapes différentes** : la version orale pour influenceur est tournée caméra mais indique en fin « sans rapport de test ni mention de pureté, à fusionner avec la version marque » ; la version annotée conformité du annonceur comporte exigences juridiques, accréditations de test, mécanique de prix et date de mise en ligne, avec un ton plus formel — garder le style de la version orale et compléter les informations de conformité de la version annotée ; **aucune des deux n'est un livrable final, les conserver toutes deux est le plus sûr**.

Au passage, vérifiez le partage et les références des fichiers : ici tout est local, sans lien externe. Mais cela ne vaut que pour le périmètre contrôlé — si les fichiers viennent d'un lecteur partagé, d'un système projet ou d'un espace collaboratif, confirmez avec les utilisateurs réels avant tout déplacement.

## Étape 3 : quatre traitements selon les différences

| Catégorie | Critère | Traitement |
| --- | --- | --- |
| Contenu strictement identique | Même hash | Conserver une version officielle (confirmée par le propriétaire), archiver le reste de façon récupérable |
| Versions d'étapes d'un même projet | Contenus complémentaires, mention de fusion en attente | Conserver les deux, marquer « à fusionner », trancher à la version finale |
| Même nom, contenu différent | Plateformes/usages différents | Conserver les deux, renommer (ex. « version orale Douyin » / « version illustrée Xiaohongshu ») |
| Pas de doublon | Exemplaire unique | Ne rien changer |

## Étape 4 : liste de répétition générale, exécution après confirmation

Faites d'abord produire à Doubao Work une **liste de simulation**, sans déplacer ni renommer aucun fichier, détaillant action recommandée et justification ; modifiez directement en cas de désaccord, exécutez une fois tout confirmé :

```text
Organise l'analyse ci-dessus en une liste précisant, pour chaque fichier, quoi faire
et pourquoi.
Après confirmation, limite-toi aux déplacements et archivages, sans suppression directe.
Note la position d'origine de chaque fichier déplacé, pour faciliter une restauration.
```

Adoptez un **archivage récupérable** : un dossier « 00_archive-dedup_recuperable » accueille les copies confirmées en double, sans suppression définitive ; chaque fichier déplacé conserve chemin d'origine, chemin d'archivage, taille et date de modification — la restauration ne reposera pas sur la mémoire.

## Résultat

Sur les 9 documents : 2 copies strictement identiques déplacées vers l'archive récupérable, 7 conservées, zéro suppression définitive ; les 3 manuels de conformité réduits à 1 ; les 2 scripts de test conservés et marqués « à fusionner » ; les 2 bibliothèques de copywriting conservées, renommage proposé en attente ; rapport de bilan T2 et tableau de prospection T3 inchangés.

Au prochain nettoyage de dossier, distinguez d'abord **copie strictement identique, version d'étape, même nom au contenu différent** — seules les copies au contenu identique entrent dans la liste d'archivage. Une comparaison de plus épargne bien des ennuis après suppression erronée.

---

Suivant :[Fin de projet : capitaliser fichiers, décisions et livrables ensemble →](/fr/doubaowork/case-project-archive)
