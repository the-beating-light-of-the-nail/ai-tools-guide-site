# De l'actualité à l'article fini du Compte officiel

> Contexte : dans un article d'actualité, ce qui coûte le plus cher, ce n'est pas écrire, c'est le fil conducteur — vérifier les chiffres, décider ce qui est publiable, puis une fois le corps rédigé, trouver le titre et la couverture. Traiter tout ça séparément invite aux contradictions : le corps dit « la version officielle parle de résultats proches », le titre s'emballe en « écrasement total ».

Cet article s'appuie sur un test complet avec GLM-5.3-Flash : pas une génération en une phrase, mais le fil conducteur décomposé en **quatre flux de travail** — paquet de faits → long article → titres candidats et contrôle des risques → couverture. Plus d'étapes, mais moins d'effort : chaque étape s'appuie sur le livrable précédent, chaque suivante est le produit de la précédente, et l'ensemble boucle logiquement.

## La combinaison de Skills

| Tâche | Combinaison | Pourquoi ce choix |
| --- | --- | --- |
| Vérifier les faits avant d'écrire | Étude VOC et opinion + recherche web publique | Lit plusieurs sources, repère les conflits, conserve liens d'origine et lacunes de preuve |
| Écrire le long article | Articles et stratégie de Compte officiel + paquet de faits local + Lark Doc | Frontière factuelle claire pendant l'écriture, livrable soumissible à la relecture |
| Générer des titres sans clickbait | Titres à succès et calendrier éditorial + article terminé | Pas seulement des titres : risque trompeur et contexte d'usage marqués un à un |
| Couverture du Compte officiel | Design créatif + génération et contrôle d'images | Concept et composition d'abord, puis génération et vérification format, cadrage, risques de texte |

## Tâche 1 : avant d'écrire, rassembler faits, chiffres et sources

L'ordre habituel face à une actu tech : titre spectaculaire → écriture immédiate → recherche en cours de rédaction pour boucher les trous. Ici, l'inverse : **pas de corps d'abord** ; Doubao Work livre un paquet de faits « ce qui est publiable, ce qui ne l'est pas directement ». Le prompt fournit quatre sources publiques (blog officiel, fiche modèle Hugging Face, page de tarifs officielle, article 36Kr) et impose quatre niveaux de classement :

```text
Je suis rédacteur d'un Compte officiel WeChat tech / IA et prépare un article sur GLM-5.3-Flash
pour les actifs ordinaires et les développeurs. Produis d'abord le « paquet de faits » : n'écris
pas le corps maintenant.

Lis intégralement et vérifie en priorité les sources publiques suivantes :
1. blog officiel Z.ai : https://z.ai/blog/glm-5.3-flash
2. fiche modèle officielle Hugging Face : https://huggingface.co/zai-org/GLM-5.3-Flash
3. page de tarifs officielle Z.ai : https://docs.z.ai/guides/overview/pricing
4. article public 36Kr : https://36kr.com/p/xxxxx

Consignes :
- liste d'abord les 6 à 8 questions clés auxquelles l'article doit répondre.
- vérifie point par point : date de publication, taille des paramètres, paramètres actifs,
  contexte, multimodalité native, licence open source, frameworks pris en charge, prix,
  benchmarks, déploiement sur puces nationales.
- répartis le contenu en quatre classes : « faits confirmables officiellement », « évaluations
  ou jugements autodéclarés par le fournisseur », « reprises de médias », « preuve indépendante
  encore manquante ».
- ne remplace pas l'original par un résumé de recherche ; marque « à confirmer » ce qui est
  inaccessible ou absent de l'original.
- en cas de conflit de sources, expose-les côte à côte sans trancher.
- pour chaque fait : lien d'origine, date de la page ou date d'accès, force de la preuve et
  formulation publiable sans risque.
- vérifie séparément les affirmations à fort potentiel viral « prix 40 fois moindre », « 57
  points, à égalité », « 100 000 puces nationales » : utilisables telles quelles ou non ?

Livrables : questions clés, tableau des faits, cas utilisables, affirmations non directement
publiables, questions sans preuve et liste des sources. Enregistre en fichier Markdown.
Sans confirmation : pas d'article, pas de publication, pas de message, pas de modification de
documents en ligne.
```

Bonne habitude de prompt : **ne pas seulement dire quoi vérifier, mais imposer comment exprimer l'incertitude** — sinon « trouvé en recherche » devient vite « prouvé ». Le test a produit deux cas typiques (Hugging Face inaccessible pour raison de sécurité, page de tarifs sans Flash au premier accès) : plutôt que de sauter silencieusement, il a documenté et confirmé via cache et recoupement multi-sources.

Le paquet final isole les trois affirmations les plus piégeuses : « prix 40 fois moindre » est une approximation médiatique du prix utilisateur, pas du coût matériel ; « 57 points, à égalité » ne vaut que sur un indice composite précis, pas sur toutes les capacités ; le nombre de puces nationales diverge entre blog officiel anglais et médias chinois — pas de conclusion sans source. **Le vert s'écrit, le jaune s'écrit avec source et réserve, le rouge ne se touche pas.**

## Tâche 2 : du paquet de faits à un article lu jusqu'au bout

Le paquet règle le vrai et le juste, mais ce n'est pas encore un article qu'on lit. Deuxième étape : transformer les sources en fil narratif naturel **sans franchir la frontière factuelle**. Avec le skill « Articles et stratégie de Compte officiel », remettez le fichier et exigez « uniquement le matériel du paquet » :

```text
Utilise le skill « Articles et stratégie de Compte officiel » et lis ce paquet de faits :
【Matériau】téléverse directement ton paquet de faits, ou remplace le chemin par le tien.

Rédige à partir de lui un long article pour le Compte officiel WeChat destiné aux actifs
ordinaires et aux développeurs.

Objectif : expliquer pourquoi GLM-5.3-Flash mérite l'attention et comment le juger concrètement,
pas réciter la keynote ni la presse.

Exigences :
- identifie d'abord les questions qui préoccupent le plus les lecteurs, puis construis une
  progression naturelle.
- n'utilise que le matériel enregistré dans le paquet ; les benchmarks autodéclarés gardent leur
  statut de source, et le « à confirmer » ne s'écrit pas en certitude.
- n'invente ni « je l'ai testé » ni « j'ai interviewé », et n'imite pas les tournures de l'original.
- conserve les contre-arguments et limites nécessaires : la performance réelle dépend du framework
  d'inférence, des outils, des paramètres et des tâches.
- style oral, forte densité d'information, comme un ami sérieux qui reconstitue le fil ;
  pas de slogans creux ni de citations passe-partout.
- corps d'environ 1800 à 2500 caractères chinois, avec titre provisoire, résumé, intertitres,
  conclusion et liste des sources.

Enregistre le résultat en Markdown, crée un nouveau document Feishu et renvoie le lien.
Soumission d'abord à l'éditeur humain : pas de publication automatique, pas de message, pas de
modification d'autres documents en ligne.
```

Il lit le paquet, cerne les vraies questions des lecteurs, positionne l'article en « décryptage + méthode de jugement » avant d'écrire. Les limites du paquet sont conservées : pas de « capacités égales à Opus », seulement un indice composite ; pas de « 1/40 » en conclusion exacte ; la divergence sur les puces nationales reste dans le corps.

## Tâche 3 : un titre accrocheur, sans clickbait pur

Un corps rigoureux peut être détruit par le titre à la dernière minute. Avec le skill « Titres à succès et calendrier éditorial » : lecture de l'article, extraction des infos nouvelles et du conflit central, génération de titres, plus trois frontières dures :

```text
Utilise le skill « Titres à succès et calendrier éditorial » et lis cet article :
【Matériau】téléverse directement ton article fini, ou remplace le chemin par le tien.

Résume d'abord la véritable information nouvelle, la preuve la plus forte, le conflit central et
les lecteurs visés, puis génère 20 titres : 5 factuels, 5 en question, 5 en contraste, 5 en
résultat.

Frontières dures :
- aucun chiffre, conclusion, caution de personnalité ou test personnel absent du corps.
- pas de demi-phrase créant volontairement un malentendu ; les benchmarks autodéclarés ne se
  déguisent pas en tests indépendants.
- pour chaque titre : ce qu'il capte, avec risque trompeur, intensité marketing et contexte
  d'usage.

Recommande enfin 3 titres en précisant leur meilleur usage : tête du Compte officiel, partage en
communauté ou trafic de recherche ; désigne celui qui servira à la couverture. Enregistre en
《titres-candidats-et-risques.md》. Sans confirmation : pas de publication, pas de message, pas de
modification de documents en ligne.
```

Chaque titre est annoté « ce qu'il capte, risque trompeur, intensité marketing, contexte » — risques et titres dans une même table, bien plus fiable qu'une suppression au feeling. Recommandations du test : en tête, « on parle d'un prix au 1/40, l'article dit 1/30 à 1/100 » (contraste) ; en partage, « l'officiel dit proche d'Opus, la rumeur dit égal à Opus » ; en recherche, la formulation avec paramètres complets.

> En toute honnêteté : les titres générés par l'IA restent moyens. Mieux vaut **collecter au quotidien des titres à succès dans une banque**, pour que l'IA sache ce qui marche avant de lancer ce flux ; avec une banque assez riche, on peut même distiller son propre Skill de titres avec le Skill Cangjie.

## Tâche 4 : la couverture du Compte officiel

Deux pièges : l'écran saturé de robots et de circuits au nom de la « tech » ; et l'image dessinée avant le titre, sans rapport avec le corps. Avec la capacité « Design créatif », **remettez ensemble le corps et la table des risques de titres** :

```text
Utilise la capacité « Design créatif » et la génération/le contrôle d'images, lis :
【Matériau】téléverse ton article fini et ta table des risques de titres, ou remplace les chemins.
- 《article-final.md》
- 《titres-candidats-et-risques.md》

Produis la couverture du Compte officiel WeChat pour le titre finalement recommandé.

Propose d'abord 3 concepts nettement différents : sujet, composition, couleurs, émotion,
stratégie textuelle et pourquoi chacun colle au corps. Puis génère la version à l'information
la plus lisible en vignette de téléphone.
```

Le thème visuel est borné à « l'arbitrage rationnel entre forte capacité et faible coût », palette bleu profond, blanc froid et point de vert vif ; ni personnes réelles, ni logo de marque, ni robots, ni circuits denses, et pas de texte chinois injecté dans l'image générée (illisible). En test, fond noir + titre blanc gagne en visibilité ; pour un élément de marque (logo Zhipu), fournissez l'image du logo à intégrer. Doubao Work intègre en interne le modèle d'images seedream de ByteDance, largement suffisant pour les couvertures.

## Retenir cette chaîne de production

En une phrase : **serrer les faits d'abord, puis libérer l'expression ; contrôler le titre avant d'amplifier la diffusion.**

```text
Sources publiques → paquet de faits → corps du Compte officiel → table des risques de titres
→ couverture → relecture humaine
```

L'IA ne doit pas rendre chacun de vos chiffres plus bruyant. Ce qu'elle fait gagner, c'est relier sources, frontières et livrables intermédiaires, pour que chaque étape sache ce que la précédente a confirmé — et ce qu'elle n'a pas confirmé. L'article qui en sortira sera moins spectaculaire qu'un « hit généré en une phrase », mais il ressemblera à un vrai livrable, remettable à un éditeur, un collègue ou un patron.

---

Suivant : [Un même contenu, décliné en une version propre à chaque plateforme →](/fr/doubaowork/case-multi-platform)
