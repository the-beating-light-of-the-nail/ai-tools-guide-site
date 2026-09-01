# Trouver le prochain contenu dans les commentaires, et faire le bilan

> Contexte : beaucoup de gens « font le bilan » d'un contenu et n'en retiennent que trois phrases — vues moyennes, mises en favoris correctes, on optimisera la prochaine fois. Ce n'est pas un bilan, tout au plus un coup d'œil au tableau de bord.

Un bilan vraiment utile pour le prochain contenu répond plus précisément : que demandent les gens au juste ? Quelles questions reviennent ? Quels commentaires, pourtant rares, touchent à la confiance et à la sécurité ? Si le taux de favoris atteint l'objectif, pourquoi la complétion chute-t-elle autant ? Que garder, qu'optimiser, quelle seule variable tester la prochaine fois ? Deux processus de bilan ont été testés :

```text
Tâche 1 : 32 commentaires → contrôle de complétude → étiquetage catégorie principale
        → regroupement thématique → séparation faits et inférences
        → notation de 8 candidats → Top 3 → un seul sujet recommandé pour le prochain contenu

Tâche 2 : métriques à 72 h + objectifs d'avant publication et journal de production
        → gel des définitions statistiques → agrégation et recalcul manuel de contrôle
        → comparaison par source et par date → confrontation aux objectifs et aux coûts
        → conserver / arrêter / tester → brief du prochain contenu
```

Combo d'outils : pour l'analyse des commentaires, le Skill « études utilisateurs et détection des besoins » + CSV local (étiquetage des verbatims, analyse quantitative, synthèse des besoins) ; pour le bilan post-publication, le Skill « analyse de données » + CSV de métriques + objectifs et journal de production (gel des définitions d'abord, puis réconciliation et bilan opérationnel). Les deux tâches sont des analyses structurées d'un matériau local unique : **aucun besoin** d'équipe d'experts, de MCP ou de connecteur de plateforme — la combinaison minimale qui fait le travail est généralement la meilleure.

> En traitant de vrais commentaires : exportez d'abord depuis le tableau de bord de la plateforme ou utilisez un connecteur en lecture seule autorisé ; ne remettez pas à l'IA de données personnelles — pseudos, numéros de téléphone, entreprises, numéros de groupe, messages privés.

## Tâche 1 : que demandent les commentaires — une étude utilisateur à part

Elle s'exécute dès que vous disposez d'un lot de commentaires utilisables légalement, sans attendre les métriques du tableau de bord. Les 4 points clés du prompt : **un seul libellé de catégorie principale par commentaire** (pour éviter les doubles comptes) ; **chaque thème avec nombre de commentaires, volume d'interaction, IDs représentatifs, verbatims et source** ; **séparation entre faits démontrables par les verbatims et inférences de l'analyste** ; **génération de fichiers d'analyse uniquement — pas de réponse, pas de message privé, pas de publication**.

```text
Je gère un compte d'outils IA destiné aux salariés ordinaires. Utilise la capacité
« études utilisateurs et détection des besoins » et n'analyse que le fichier des
32 commentaires que tu viens de trouver et de lire :
【chemin de comments.csv, ou remplace par « n'analyse que 【nom de fichier】 dans la
conversation actuelle »】

Note sur les données : échantillon anonymisé destiné à un exercice interne, sans compte
ni commentateur réels. N'interroge pas le web pour compléter les commentaires, et ne
déduis pas d'attributs personnels sensibles (âge, genre, métier, région, revenus) à
partir du profil du compte.

Procède ainsi :
1. Contrôle de complétude : nombre total de lignes, champs, valeurs manquantes,
   commentaires en double et spams suspectés.
2. Étiquette chaque commentaire d'une « catégorie principale » : question, adhésion,
   désaccord, malentendu, exemple supplémentaire, besoin produit, expression d'émotion,
   spam. Des sous-étiquettes sont possibles, mais la stat ne compte que la catégorie
   principale.
3. Regroupe les commentaires en thèmes de problèmes utilisateurs. Chaque thème doit
   donner : nombre de commentaires, volume d'interactions (likes + réponses),
   comment_id représentatif, 1—2 verbatims et le source_url correspondant.
4. Sépare clairement « ce que les verbatims prouvent directement » de « tes inférences ».
   Les inférences sont étiquetées à part et ne doivent pas passer pour un consensus.
5. Liste séparément : les questions qui méritent une réponse publique, les risques
   à traiter en privé ou avec prudence, les spams ignorables.
6. Génère 8 candidats pour le prochain contenu. Note chacun de 1 à 5 sur quatre axes —
   fréquence du besoin, intensité d'interaction, faisabilité, valeur confiance/sécurité —
   avec total et comment_id de preuve.
7. Sélectionne le Top 3 ; puis recommande explicitement un seul thème pour le prochain
   contenu, avec titre du sujet, question du lecteur, promesse de l'article, les 5 questions
   à répondre absolument, les preuves à préparer et les limites à ne pas surestimer.
8. Auto-contrôle : la somme des catégories égale-t-elle le nombre de commentaires valides,
   les citations remontent-elles aux comment_id/source_url, des inférences ont-elles été
   écrites comme des faits ?

Enregistre sous carte-des-problemes-utilisateurs.md. Dans la conversation, synthétise
seulement : commentaires valides, spams, Top 3 et le thème recommandé.

Limites de sécurité : génère uniquement des fichiers d'analyse ; pas de réponse publique,
pas de message privé, pas de publication, aucune écriture sur une plateforme.
```

Constaté : le contrôle de complétude détecte 1 spam sur 32 enregistrements, soit 31 commentaires valides ; le Top 3 donne « transcription de longs audios et relecture manuelle en pratique » (16/20, C026 avec 108 interactions, le maximum), « liste des permissions d'exécution automatique par l'IA » (15/20, plusieurs commentaires pointant la même anxiété de permission) et « vrais échecs et processus de correction » (15/20, deux commentaires très interactifs totalisant 149). Un seul thème recommandé au final : **transcription de longs audios et relecture manuelle en pratique** — C026 dit explicitement « je dois retranscrire des interviews tous les jours », et le thème répond aussi aux problèmes voisins : enregistrements de réunions, débutants ne sachant pas par où commencer.

Trois choses restent à vérifier à la main : les citations ne sont-elles pas sorties de leur contexte ; les questions rares mais sensibles — confiance, sécurité, vie privée — n'ont-elles pas été noyées dans les moyennes ; le thème recommandé peut-il être traité avec de vraies captures d'écran, des données ou des récits d'échec.

## Tâche 2 : bilan post-publication — que le prochain contenu ne reparte pas de zéro

Cette tâche est indépendante de la première : il suffit d'une table de métriques + objectifs d'avant publication et journal de production. **Le piège classique du bilan, c'est le dénominateur flou** — la complétion se calcule-t-elle sur les vues ou sur les vues à 3 secondes ? Sans le préciser, une même donnée produit des résultats opposés :

```text
C'est une nouvelle tâche de bilan post-publication, indépendante. Utilise la capacité
« analyse de données » et ne lis que les deux fichiers locaux suivants :
1. 【chemin de metrics.csv】
2. 【chemin de goals-and-log.md】

Données d'échantillon anonymisées, sans lien avec un compte réel. Pas de complétion web,
pas de connexion aux plateformes de contenu, et ne généralise pas une publication
unique en loi de long terme.

Procède ainsi :
1. Gèle les définitions statistiques : fenêtre de 72 heures ; contrôle lignes, champs,
   valeurs manquantes, doublons, unités des métriques. Précise le dénominateur de chaque
   ratio.
2. Agrège impressions, vues, vues 3 secondes, complétions, likes, favoris, partages,
   commentaires, clics profil, abonnements.
3. Calcule et revérifie : taux impression→vue, rétention à 3 s, complétion, taux de like,
   de favori, de partage, de commentaire, taux de clic profil, conversion en abonnement.
   Recalcule à la main au moins 3 métriques par sondage.
4. Compare par date et par source, signale les étapes les plus fluctuantes ; sépare faits
   et hypothèses explicatives.
5. Face aux objectifs d'avant publication, à la structure du contenu et aux 490 minutes
   de production, réponds : objectifs atteints ou non, quoi conserver, quoi arrêter,
   quoi tester encore.
6. Ne transforme pas corrélation en causalité. Une seule publication = un échantillon :
   toute cause sera étiquetée « hypothèse », avec la méthode de vérification.
7. Produis une carte de bilan : résumé factuel, entonnoir, comparaison des sources,
   confrontation aux objectifs, conserver/arrêter/tester, limites des données.
8. Rédige ensuite le brief du prochain contenu : un sujet, lecteur cible, question centrale,
   promesse, structure, preuves nécessaires, indicateurs de succès et contrôle d'avant
   publication. Le sujet ne peut venir que des commentaires ou limites explicitement
   présents dans ces matériaux, sans extrapolation.
9. Auto-contrôle : les totaux se recoupent-ils par source et par date, les formules sont-
   elles cohérentes, chaque conclusion a-t-elle une source, aucune action externe exécutée.

Enregistre sous carte-bilan-post-publication.md et brief-prochain-contenu.md.
Dans la conversation, synthétise seulement : taux de favoris vs objectif, complétion,
meilleure source, une action conserver/arrêter/tester chacune et le sujet suivant.

Limites de sécurité : uniquement des fichiers d'analyse ; pas d'écriture dans la banque
de sujets, pas de publication, pas de réponse aux commentaires, pas d'appel de plateforme
externe.
```

Chiffres constatés à 72 h : impressions 51 400, vues 22 890, complétions 7 537, favoris 1 190. Trois ratios clés : impression→vue 44,53 % ; complétion 32,93 % ; **taux de favoris 5,20 %, au-delà de l'objectif de 3 % fixé avant publication**. Par source, la page abonnés domine 8 ratios sur 9, la recherche mène sur favoris et partages, le flux de recommandation apporte environ 70 % des impressions mais convertit moins bien. Surtout, il a sorti quatre actions nettes :

| Décision | Sortie de cette session |
| --- | --- |
| Conserver | Cas pratiques + structure d'incitation aux favoris |
| Arrêter | La densité extrême consistant à compresser 4 cas sans lien dans une vidéo |
| Tester | Montrer isolément le processus d'échec et de relance, observer complétion et nombre de questions précises |
| Prochain contenu | « Doubao version PC : que faire en cas d'échec — 3 vraies erreurs et le processus complet de relance » |

Attention : « la densité d'information provoque l'abandon en milieu de vidéo » reste une hypothèse, à valider par A/B ou comparaison de contenus analogues — une publication, n = 1, pas de loi de long terme.

> Le bilan ne consiste pas à inventer une histoire plausible pour le passé, mais à **préparer pour la prochaine fois une action vérifiable**.

## Compressé en une liste de contrôle

**Étude des commentaires** : anonymiser avant de confier à l'IA ; contrôler totaux, valeurs manquantes, doublons et spams d'abord ; une seule catégorie principale par commentaire ; chaque thème avec comment_id, verbatim et source ; verbatims et inférences séparés ; 8 candidats → Top 3 → un seul sujet ; pas de réponse automatique, pas de message privé, pas de publication.

**Bilan post-publication** : fixer la fenêtre statistique et les dénominateurs ; réconcilier totaux, par source et par date ; recalculer à la main au moins 3 ratios clés ; lire avec objectifs, structure et coûts de production ; conclure en conserver / arrêter / tester ; une seule publication n'autorise que des hypothèses ; produire d'abord carte de bilan et brief, sans écrire directement dans la banque de sujets.

Les commentaires sont un entretien utilisateur gratuit et mis à jour en continu ; le tableau de bord indique quoi changer la prochaine fois. Traitez les deux matériaux séparément, puis reversez les résultats dans le prochain contenu — le choix du sujet ne repart plus d'une page blanche à chaque fois.

---

Suivant :[Comment auditer la présence GEO de son IP personnelle →](/fr/doubaowork/case-geo-checkup)
