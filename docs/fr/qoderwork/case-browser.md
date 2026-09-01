# Étude de cas : automatisation du navigateur — 230 articles de Comptes officiels organisés en 20 minutes

L'automatisation du navigateur est le point fort reconnu de QoderWork. Le cas principal de ce chapitre vient du test complet d'un ingénieur réseau : sans une ligne de code, un travail qui aurait demandé un crawler Python.

> Adapté du test de Zhu Jiasheng (Compte officiel WeChat « Wanggong Shouyi ») : [« Première expérience d'automatisation navigateur d'Alibaba QoderWork : 230+ liens d'articles de Compte officiel réglés en 20 minutes »](https://zhuanlan.zhihu.com/p/2057217208250528785) (juillet 2026).

## Contexte de la tâche

Le blogueur voulait organiser plus de 200 articles historiques de son Compte officiel en tableau à trois colonnes 【date de publication】【titre】【lien】, puis les importer dans la base de connaissances Tencent ima pour en faire un « assistant de connaissances personnel » conversant.

- Approche manuelle : plus de 800 copier-coller ;
- Approche crawler : découragée par la session du back-office du Compte officiel + le chiffrement des interfaces ;
- Approche QoderWork : prise en main de la page navigateur déjà connectée, zéro code.

## Le flux complet (11 étapes)

1. Téléchargement et installation (sous Windows, choisir X64 User), connexion au compte Alibaba Cloud ;
2. Créer un dossier de travail dédié : `D:\QoderWork\organisation-articles-compte-officiel` ;
3. Barre d'outils du bas « Gérer les connecteurs » → « Navigateur » → activer ;
4. Installer l'extension navigateur (Chrome via le Web Store ; Edge manuellement : `edge://extensions` mode développeur → glisser le dossier chrome-extension du répertoire d'installation) ;
5. **Étape clé** : connectez-vous vous-même à mp.weixin.qq.com et ouvrez « Gestion de contenu → Historique des publications » — le back-office du Compte officiel exige un QR code personnel, l'IA ne peut pas s'authentifier seule ; on lui fait donc **prendre en main une page déjà connectée** ;
6. Cliquez sur l'icône de l'extension QoderWork dans la barre d'outils du navigateur ; le panneau affiche « onglet actuel connecté » : la prise en main a réussi ;
7. Préparez un Excel modèle (quatre colonnes : numéro, date de publication, titre, lien) dans le dossier de travail ;
8. Donnez la tâche (prompt intégral) :

```text
Regarde le contenu du modèle wanggong-shouyi-historique-publications.xlsx.
Les données proviennent de la page connectée dans EDGE, via « Gestion de contenu » → « Historique des publications », avec pagination.
En t'appuyant sur le fichier modèle, organise les enregistrements des 24 pages une par une,
en 【date de publication】【titre】【lien】 dans un fichier Excel.
```

9. La zone de surveillance décompose automatiquement en quatre étapes : extraire les 24 pages → lire la structure du modèle → générer l'Excel selon le modèle → vérifier le fichier ;
10. Deux ou trois tours d'itération : premier tour avec des articles manquants, deuxième tour complété, troisième tour de mise en forme — « les choses urgentes se font sans précipitation : l'IA travaille, l'humain calibre » ;
11. Import dans la base de connaissances ima (10 liens à la fois, plus de 200 articles en une vingtaine de tours) : la bibliothèque d'articles devient une base interrogeable par l'IA.

**Résultat** : 238 enregistrements (tous les articles de nov. 2021 à juin 2026), titres/dates/liens complets, liens transformés automatiquement en hyperliens cliquables, tri antichronologique. **Moins de 20 minutes au total** (une demi-journée à la main).

## Fait technique marquant : l'IA a trouvé l'API toute seule

QoderWork n'a pas bêtement cliqué « page suivante » : il a **découvert que la page d'historique embarque une variable de données structurées `publish_page` et rapatrié tous les enregistrements en une fois via l'interface de la page** — l'auteur compare à « un script kiddie expérimenté qui inspecte d'abord les éléments pour trouver l'API puis tire tout en bloc ». C'est la différence de fond entre un agent et un RPA de type « rejeu d'enregistrement » : il voit la structure de la page et choisit le chemin le plus efficace.

## Même recette : le journal quotidien de cinq boutiques e-commerce (cas utilisateur officiel)

Un opérateur de cross-border se connectait chaque jour à 5 back-offices pour exporter les données, une « leçon du matin » d'une heure avec des oublis fréquents :

```text
Connecte-toi successivement aux back-offices des sites US/UE/Japon, entre dans la page de rapports métier et exporte les données de la veille,
fusionne-les en un Excel : CA/commandes/taux de retour par site, Top 10 des SKU,
baisse en rouge, et termine par un résumé d'exploitation de 200 mots maximum.
```

Une fois le flux validé, **encapsulez-le en Skill** ; ensuite, chaque jour, une phrase « déroule le journal des boutettes du jour ». Résultat : **1 heure → 10 minutes** ; avec l'accumulation de données, ajout d'une analyse de tendance sur 30 jours.

## Scénarios transférables

Téléchargement groupé de documents web, formulaires de déclaration automatiques, capture planifiée de cotations, archivage par captures en série, comparaison de prix multi-sites — tout ce que vous répétez dans un navigateur peut lui être confié, zéro code de bout en bout.

## Trois rappels de sécurité

1. La collecte lit les sessions du navigateur — **jamais sur un appareil public** ;
2. Anonymisez les informations de compte dans les données exportées ;
3. **Contrôlez par échantillonnage** les données extraites par l'IA (quelques titres, dates, liens).
