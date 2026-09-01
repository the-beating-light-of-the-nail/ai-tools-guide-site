# Un même contenu, décliné en une version propre à chaque plateforme

> Contexte : l'article du Compte officiel WeChat vient d'être fini que le patron dit « publie-le aussi sur Xiaohongshu », puis enchaîne « fais aussi Zhihu et la chaîne vidéo tant que tu y es ». Ça ressemble à un copier-coller, mais en pratique c'est très chronophage : le Compte officiel doit tout expliquer à fond, Xiaohongshu veut une image comprise d'emblée, Zhihu se demande « pourquoi », et la chaîne vidéo doit cracher le conflit en quelques dizaines de secondes.

Cette chaîne de production repose sur quatre tâches enchaînées : **posts Xiaohongshu → découpage en une semaine de contenu → versions natives pour quatre plateformes → validation avant publication** :

```text
Un même paquet de faits
→ identifier d'abord les spécificités de chaque plateforme
→ fixer ensuite le format livrable de chacune
→ générer les brouillons
→ ouvrir le résultat et vérifier section par section
→ validation unifiée avant publication
```

Côté outils, deux Skills suffisent : **Réécriture multi-plateformes** (adapter un même contenu à la structure et au ton de chaque plateforme) et **Validation de supports marketing** (vérifier d'un coup dates, chiffres, liens, sources, données personnelles et formulations absolues). Pas de connecteur ni d'équipe d'experts cette fois — les Skills dédiés couvrent déjà toute la tâche. **Ce n'est pas parce qu'il y a plus d'outils que c'est plus professionnel : plus la chaîne s'allonge, plus la frontière factuelle risque de se perdre en route.**

## Tâche 1 : le post Xiaohongshu, pas seulement un long article découpé en neuf images

On ne lui fournit que 5 faits confirmés, en interdisant explicitement d'inventer des expériences vécues, des chiffres de lecture, des revenus ou des cas clients :

```text
Utilise la capacité « Réécriture multi-plateformes » pour redessiner le paquet de faits vérifiés
ci-dessus en une note illustrée adaptée à la lecture et à l'enregistrement sur Xiaohongshu.
Ne te contente pas de découper le long article du Compte officiel en neuf segments.

【Matériau】Colle ici ton paquet de faits vérifiés, ou téléverse le fichier correspondant.

Les lecteurs sont des actifs et des débutants du contenu qui utilisent pour la première fois
un outil de travail IA.

Livrables :
1. propose d'abord 3 titres Xiaohongshu, sans exagération ni promesse de gains inventée ;
2. produis 8 cartes : 1 couverture, 6 pages de corps, 1 page d'interaction finale ;
3. une seule mission d'information par page, le corps tenant dans un écran de téléphone lisible ;
4. pour chaque page, donne « texte de la page + suggestion d'image / mise en page » ;
5. ajoute une description Xiaohongshu de 300 caractères maximum et 8 hashtags au plus ;
6. termine par une « liste de relecture humaine avant publication » séparée ;
7. n'invente ni expérience vécue, ni chiffres de lecture, ni revenus, ni cas clients, ni règles
de plateforme.
```

À l'exécution, il déroule « extraction du master → stratégie de plateforme → structure des cartes » — ce processus intermédiaire mérite d'être regardé : il permet de juger si l'IA fait vraiment une adaptation de plateforme ou se contente de remplacer quelques mots du texte original. Les 8 pages finales ont chacune une mission : couverture avec la promesse de valeur → point de douleur → explication du paquet de faits → distinction fait/jugement → limites de l'IA → flux complet → pièges courants → appel à enregistrer et commenter, plus environ 250 caractères de corps, 8 hashtags et 8 points de relecture humaine.

> Bon critère de jugement : **chaque carte doit pouvoir répondre à une question**. Découper un long article par longueur ne s'appelle pas une adaptation de plateforme.

## Tâche 2 : découper un contenu long en contenus courts autonomes

Toujours avec « Réécriture multi-plateformes » : l'objectif passe de « adapter à une plateforme » à « décomposer un sujet-mère en 7 portes d'entrée indépendantes ». Le prompt fixe directement les 7 formats, et la phrase clé est : **chaque élément doit tenir debout seul, détaché du texte original** :

```text
Utilise la capacité « Réécriture multi-plateformes » pour découper ce contenu long confirmé
en 7 contenus courts publiables chacun un jour différent.

【Matériau】Colle ici le contenu long à découper, ou téléverse le fichier.

Formats dans l'ordre : note illustrée Xiaohongshu, post court Moments, question-réponse,
script parlé de 60 secondes, discussion de communauté, carte-liste, post de bilan.

Chaque jour doit comporter : un thème indépendant, le format adapté, le lectorat visé,
l'idée centrale, un brouillon complet et une entrée naturelle vers le contenu long.
Chaque élément tient seul, détaché du texte original ; n'écris pas une série en trois épisodes,
ne répète pas le même paragraphe, et n'ajoute aucune donnée, aucun cas ni aucune promesse
de résultat absents de l'original.

Termine par une « liste de contrôle de réutilisation hebdomadaire ». Génère seulement des
brouillons : pas de planification ni de publication automatiques.
```

Il commence par fixer pour chaque jour thème, lectorat et idée centrale, puis rédige le brouillon complet — sans écrire d'abord un long texte qu'il découperait au mot près. Les 7 jours assument des rôles différents (accroche sur une douleur → les quatre éléments du paquet de faits → limites de l'IA → méthode en trois étapes en 60 secondes → discussion de communauté → liste de contrôle → bilan de la semaine), avec plus de 30 points de contrôle de réutilisation générés.

## Tâche 3 : vraiment publier partout, quatre versions natives

Le nom de plateforme n'est qu'un point de départ : précisez **ce que chaque plateforme livre au final**, et exigez après chaque version une ligne « ce qui est conservé, ce qui est supprimé, pourquoi ce choix » — cela force l'IA à expliciter sa logique de réécriture et facilite la relecture :

```text
Utilise la capacité « Réécriture multi-plateformes » pour décliner le paquet de faits commun
en quatre versions natives, une par plateforme, en commençant par un tableau de stratégie
éditoriale.

【Matériau】Colle ici ton paquet de faits commun, ou téléverse le fichier.

Livrables :
- Compte officiel WeChat : environ 800 caractères, méthode en trois étapes, limites de l'IA
  et recommandations d'action expliquées en entier ;
- Xiaohongshu : plan de 6 cartes + corps d'environ 250 caractères, accent sur l'enregistrement
  et la liste de relecture ;
- Zhihu : environ 900 caractères, ouverture par une question, contre-exemples, argumentation
  et fin sur une controverse ;
- chaîne vidéo : script parlé de 60 secondes, ouverture en conflit, trame en trois étapes,
  conclusion en une phrase, avec attention au rythme oral.

Les quatre versions ne peuvent s'appuyer que sur le paquet de faits commun. Angle, ordre,
structure et ton peuvent changer ; faits, dates et conditions limites ne le peuvent pas.
Après chaque version, annote « faits conservés / informations supprimées / pourquoi ce changement ».
Termine par la liste de relecture humaine pour les quatre plateformes. Génère seulement des
brouillons, sans planifier la publication.
```

À l'exécution, il produit d'abord un **tableau de stratégie de plateformes** (le Compte officiel privilégie les étapes complètes, Xiaohongshu l'action d'enregistrer, Zhihu l'argumentation, la chaîne vidéo le rythme parlé), puis génère séparément les quatre brouillons.

> Ne prenez pas « tâche terminée » pour une validation : le résultat est dans un document qu'il faut rouvrir et vérifier section par section ; si ce qui est généré est un tableau, un PPT ou un fichier, contrôlez ce livrable réel.

## Tâche 4 : avant publication, passer au crible dates, liens et formulations sensibles

Dernière étape avec « Validation de supports marketing ». Pour éprouver sa capacité à repérer les problèmes, le test utilise volontairement un brouillon très « sale » : deux dates différentes dans le corps ; des promesses du type « 10 minutes », « tout le web », « certainement », « sans intervention humaine », « 99 % », « lectures multipliées par 10 » ; un lien invalide `.invalid` ; des images sans origine claire, des données sans source et un numéro de téléphone de test.

```text
Utilise la capacité « Validation de supports marketing » pour une revue en lecture seule du
brouillon de test ci-dessous, avant publication : ne modifie rien automatiquement, ne publie rien.

【Matériau】Colle ou téléverse ici le brouillon à vérifier.

Vérifie point par point : cohérence titre/corps ; conflit entre les deux dates ; présence d'une
source pour chaque chiffre et promesse de résultat ; validité des liens ; clarté des droits des
citations et images ; présence de données personnelles ; et emploi de formulations absolues ou
invérifiables telles que « 10 minutes, tout le web, certainement, sans intervention humaine, 99 %,
1000 entreprises, carton, lectures multipliées par 10 ».

Classe les problèmes en « à corriger impérativement », « à optimiser », « à confirmer par le
métier », avec pour chacun : position, texte d'origine, motif du risque et correction proposée ;
termine par une liste cochable avant publication. Les règles de plateforme les plus récentes
non confirmées doivent être explicitement marquées « à vérifier par un humain ».
```

Il a réellement testé les liens, et cherché des justifications pour les formulations absolues, les sources de données, le droit d'auteur et les données personnelles, au lieu d'une simple relecture orthographique. Le rapport final relève 10 corrections obligatoires, 4 optimisations conseillées, 5 points à confirmer par le métier — conflit de dates, lien mort, formulations absolues, promesses de résultats, données sans source, droits flous et numéro de téléphone sont tous signalés, avec une séparation nette entre « règles confirmées applicables » et « règles de plateforme restant à vérifier ».

## Retenir cette formule de prompt

Pour adapter un contenu à n'importe quelle plateforme, un prompt doit préciser au moins cinq choses :

1. **Le paquet de faits commun** : quels faits sont confirmés, avec sources, dates et limites ;
2. **Le lectorat visé** : à qui ce contenu s'adresse vraiment ;
3. **Le format livrable par plateforme** : pas seulement le nom, mais longueur, nombre de cartes, durée du script parlé et structure ;
4. **Ce qui peut changer et ce qui ne peut pas** : angle, ordre et ton oui ; faits, chiffres et frontières des preuves non ;
5. **La relecture humaine et le périmètre de publication** : seulement des brouillons, et avant publication vérifier dates, chiffres, liens, citations, droits et formulations sensibles.

Repassez la liste avant de publier : les quatre plateformes utilisent-elles le même paquet de faits ; la modification pour une plateforme n'a-t-elle pas abîmé au passage un chiffre, une date ou une condition ; la structure correspond-elle au geste réel de lecture ; les liens s'ouvrent-ils, les images citées ont-elles une source ; y a-t-il un risque de formulation absolue, de fausse promesse, de données personnelles ou de droit d'auteur ; **le livrable final a-t-il été rouvert et validé**.

Ce qu'une diffusion multiplateforme fait vraiment gagner : ne plus repenser à chaque plateforme « comment adapter » — le paquet de faits protège ce qui ne change pas, la stratégie de plateforme décide ce qui change, et une validation unifiée couvre les risques.

---

Suivant : [Du long article au script parlé et au storyboard filmables →](/fr/doubaowork/case-script-storyboard)
