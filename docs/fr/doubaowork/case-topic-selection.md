# Qu'écrire aujourd'hui : de l'actualité aux concurrents, jusqu'aux sujets de la semaine

> Contexte : deux ou trois dizaines de sujets sur le bureau, sans savoir lequel traiter aujourd'hui — peur que l'actualité soit vieille, que l'analyse d'un concurrent tourne en copie au rabais, que les sujets s'accumulent plus vite que la capacité de production.

Cet article ne laisse pas Doubao Work choisir vos sujets à votre place : il découpe le vrai processus en trois étapes, et le résultat n'est pas une liste de sujets, mais une **chaîne de production de contenu réutilisable** :

1. d'abord un brief matinal d'actualité **avec sources et dates** ;
2. puis l'analyse d'un contenu concurrent : **décortiquer la méthode, pas copier le contenu** ;
3. enfin, en croisant le positionnement du compte et la capacité réelle, transformer les candidats en **calendrier d'action exécutable sur une semaine**.

## La combinaison de Skills utilisée

| Tâche | Combinaison | Pourquoi ce choix |
| --- | --- | --- |
| Brief d'actualité du jour | Étude VOC et opinion + recherche web publique | Filtre le contenu, remonte aux posts d'origine, sépare vieilles nouvelles et nouveaux articles |
| Analyse d'un contenu concurrent | Articles et stratégie de Compte officiel + lecture de liens + Lark Doc | En une fois : lire l'original, vérifier les faits, décortiquer la structure et livrer dans Feishu |
| Planification des sujets | Titres à succès et calendrier éditorial + Lark Doc | Pas seulement des titres : la capacité est planifiée selon bénéfice lecteur, vérifiabilité et coût d'exécution |

## Tâche 1 : le brief d'actualité, pas seulement « quoi de neuf aujourd'hui »

Dans « Skill · Connecteur · Partenaire », rechercher « Étude VOC et opinion » et ajouter (attention : ce Skill ne fonctionne que sur web et ordinateur, pas sur mobile). Avec un simple « quelles actus du jour », l'IA glisse facilement de vieilles nouvelles republiées aujourd'hui — précisez **fenêtre temporelle, ordre des sources, critères de sélection et règles de vérification** :

```text
Je suis rédacteur d'un Compte officiel WeChat tech / IA et je dois préparer aujourd'hui un
« brief matinal de sujets IA » pour la rédaction.

Utilise le skill « Étude VOC et opinion » et la recherche web publique pour chercher et vérifier
les informations du secteur IA publiées entre 【date de début 00:00】 et 【maintenant】, avec
l'accent sur :
- mises à jour de grands modèles et de produits Agent ;
- bureautique IA, création de contenu et outils développeur ;
- nouvelles fonctions ou changements qui affectent vraiment les actifs ordinaires.

Traite dans cet ordre :
1. indique d'abord l'heure limite et le périmètre de la recherche.
2. distingue « date de l'événement » et « date de publication de l'article » : une vieille
   nouvelle ne s'écrit pas « news du jour ».
3. fusionne les doublons d'un même événement en privilégiant annonce officielle, blog officiel
   ou page de mise à jour produit.
4. retiens les 5 informations les plus utiles pour la rédaction, avec pour chacune :
   événement, pourquoi la suivre, comment l'exploiter, lien source, base temporelle,
   points à confirmer.
5. recommande enfin seulement 3 sujets à lancer aujourd'hui, justifiés par « adéquation au
   compte, actualité, bénéfice lecteur, vérifiabilité ».
6. marque séparément chiffres, prix, numéros de version et capacités produit non confirmés :
   pas de complément, pas de conjecture.

Livre un brief matinal en Markdown chinois clairement structuré, avec trois sections :
« tableau des infos du jour », « sujets prioritaires du jour » et « à revoir par un humain ».

Sans ma confirmation : ne publie rien, n'envoie aucun message, ne modifie aucun document ni
donnée en ligne.
```

En test, il confirme d'abord l'heure de Pékin et la fenêtre de recherche, charge la capacité, cherche, vérifie, et livre un brief d'environ 20 Ko : 5 informations clés → 3 sujets prioritaires → 10 points à revoir avant écriture, et débusque 4 vieilles nouvelles « publiées récemment mais hors fenêtre événementielle ». **L'erreur la plus fréquente** : prendre une vieille nouvelle republiée aujourd'hui pour un « lancement du jour » — séparer dans le prompt « date de l'événement » et « date de publication » suffit à filtrer.

> Utilisez le brief comme un radar à sujets, jamais comme un prêt-à-publier : tout prix, benchmark ou nombre d'utilisateurs « à confirmer » doit être revu à la source officielle avant rédaction.

## Tâche 2 : l'article à succès d'un concurrent — décortiquer, pas imiter

Le brief révèle un article à succès de 36Kr. Il ne s'agit pas de faire « réécrire », mais de le traiter comme un **échantillon concurrent**. Avec le skill « Articles et stratégie de Compte officiel » (choix de sujets, vérification, évaluation d'articles et bilan opérationnel, livrables d'abord en document Feishu) :

```text
Je suis rédacteur d'un Compte officiel WeChat tech / IA. Utilise le skill « Articles et
stratégie de Compte officiel » pour décortiquer l'article public ci-dessous, sans en copier
l'expression :

Lien de l'article : https://36kr.com/p/xxxxx

Traite dans cet ordre :
1. lis l'article et liste le titre, l'auteur / média, la date de publication et le lien réellement
   obtenus ; marque « à confirmer » tout champ illisible, sans deviner.
2. sépare les « faits vérifiables » des « jugements / figures de style de l'auteur ».
   Pour paramètres, prix, benchmarks, nombres d'utilisateurs et comparaisons de performance,
   indique si la source originale suffit.
3. décortique en 6 dimensions pourquoi il attire clics et lecture complète : accroche d'ouverture,
   promesse du titre, structure narrative, densité d'information, usage des preuves, action finale.
4. produis un tableau de décorticage où chaque conclusion s'appuie sur un repère dans l'article
   ou un résumé ; pas de citations longues ni de reprise de tournures identifiables.
5. résume 5 méthodes à apprendre, 3 éléments non transposables, 5 faits à revérifier avant
   d'écrire.
6. sur le même événement, propose 3 angles entièrement nouveaux pour mon Compte officiel,
   destinés aux actifs ordinaires et aux développeurs, centrés tests réels, tutoriels ou aide
   à la décision — pas de paraphrase.
7. autocontrôle : des opinions ont-elles été écrites en faits ? date de publication et date
   d'événement confondues ? des chiffres non traçables ?

Écris le résultat final dans un nouveau document Feishu et renvoie le lien accessible.
Sans ma confirmation : ne publie rien, n'envoie aucun message, ne modifie aucun autre document
ni donnée en ligne.
```

Trois phrases de frontière font tout : **séparer faits et opinions, appuyer chaque conclusion sur un repère, interdire les citations longues** — sans elles, le décorticage devient une plagiarism haut de gamme. Production du test : 13 faits vérifiables jugés un à un sur la suffisance des preuves ; 8 jugements ou figures de style isolés ; décorticage en 6 dimensions ; 5 méthodes + 3 éléments non transposables + 5 faits à revérifier ; 3 nouveaux sujets exigeant des tests originaux. Exemple : le « prix 40 fois moindre » de l'original est percutant, mais la pondération des entrées-sorties reste floue — Doubao Work n'a pas pris ces chiffres pour argent comptant et les a laissés dans la liste de relecture.

Cette étape répond à trois questions : **pourquoi donne-t-il envie de cliquer ? quelles écritures apprendre ? quels faits re-vérifier ?**

## Tâche 3 : planifier des sujets réellement réalisables cette semaine

Avec l'actualité et le décorticage reste un problème réel : le temps manque. Avec le skill « Titres à succès et calendrier éditorial », au-delà des candidats, **précisez impérativement la capacité réelle** :

```text
Je gère un Compte officiel WeChat tech / IA et veux transformer les sujets candidats de la
semaine en un calendrier de contenu réellement exécutable.

Positionnement du compte :
- pour les actifs ordinaires et développeurs qui veulent gagner en efficacité avec l'IA ;
- surtout des tests réels d'outils IA, projets open source, tutoriels ultra-détaillés et vrais
  cas de travail ;
- ton oral, centré « lisible puis applicable », pas de billets de tendance creux.

Capacité disponible cette semaine :
- 5 articles illustrés possibles pour le Compte officiel ;
- dont 2 avec test complet et 6 à 10 captures d'étapes ;
- les 3 autres à boucler en une demi-journée chacun.

Sujets candidats :
1.【sujet 1】 2.【sujet 2】 …… (liste tes candidats)

Utilise le skill « Titres à succès et calendrier éditorial » dans cet ordre :
1. vérifie d'abord la suffisance des entrées ; liste les manques en points à confirmer, sans
   inventer de données.
2. évalue chaque sujet de 1 à 5 : adéquation au compte, bénéfice lecteur, actualité,
   démontrabilité, coût d'exécution.
3. avec la capacité disponible, retiens 5 sujets et répartis-les du lundi au vendredi, en
   marquant « test approfondi » ou « écriture rapide demi-journée ».
4. pour chaque sujet : raison de la recommandation, bénéfice lecteur, format conseillé,
   matériels à préparer, un titre principal et un titre alternatif A/B.
5. pour les sujets écartés, explique « pourquoi pas cette semaine », sans t'en tenir à
   « pas assez chaud ».
6. autocontrôle : la charge dépasse-t-elle la capacité ? plus de deux sujets visent-ils le même
   besoin lecteur ? les titres exagèrent-ils ?

Écris le résultat final dans un nouveau document Feishu et renvoie le lien accessible.
Sans ma confirmation : ne publie rien, n'envoie aucun message, ne modifie aucun autre document
ni donnée en ligne.
```

En test, il vérifie d'abord la date du jour, les candidats et la capacité — le test tombant un jeudi, il a interprété « cette semaine » comme la semaine de travail complète suivante et inscrit cette hypothèse dans les points à confirmer. Planification finale : 2 tests approfondis + 3 écritures rapides ; les motifs d'écart des deux sujets rejetés sont précis : l'un exige 1 à 2 semaines de tests, au-delà de la capacité actuelle ; l'autre relève de la méthode opérationnelle, trop loin du lectorat central. Il laisse aussi 4 points à confirmer (départ du calendrier, horaires de publication, véracité des expériences dans les titres, promesses de nombre d'outils réellement testées).

## Retenir ce squelette de prompt

Juriste, RH, commercial, chef de produit : ces quatre couches se transposent telles quelles :

1. **rôle et audience d'abord** : qui vous êtes, pour qui le contenu ;
2. **contraintes ensuite** : fenêtre temporelle, capacité, droits sur les données, interdits ;
3. **critères de jugement** : adéquation, bénéfice, actualité, preuves, coût ;
4. **liste de relecture exigée** : quels faits, quelles hypothèses, quels chiffres encore interdits.

Le vrai gain avec l'IA : passer de 30 candidats à 3, en sachant **pourquoi ces 3, lequel commencer aujourd'hui, quoi revérifier avant d'écrire** — c'est cela, un « qu'écrire aujourd'hui » sur lequel une équipe éditoriale peut réellement s'appuyer.

---

Suivant : [De l'actualité à l'article fini du Compte officiel →](/fr/doubaowork/case-wechat-article)
