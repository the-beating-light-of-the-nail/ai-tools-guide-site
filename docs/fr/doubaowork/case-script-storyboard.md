# Du long article au script parlé et au storyboard filmables

> Contexte : l'article du Compte officiel WeChat est fini, et la direction lâche « décline-le en vidéo d'une minute, tournée aujourd'hui ». Lire l'article à voix haute est le pire choix — l'article vise l'explication, la vidéo courte vise le visionnage complet ; et même avec un script fluide, un plan de tournage rempli de « ajouter des images pertinentes » et « B-roll ici » ne dit toujours pas au cadreur quoi filmer.

Prenez un long article vérifié et enchaînez deux tâches dans Doubao Work :

```text
Long article vérifié
→ transformé en script parlé de 60 à 75 secondes
→ vérification humaine des faits et du rythme
→ découpé en 9 plans continus
→ complété avec actions, cadrages, textes à l'écran, état des ressources
→ contrôle final : droit d'auteur, vie privée, frontières factuelles
```

En sortie : un script parlé d'environ 290 caractères, 65 à 70 secondes à débit normal, et un tableau de storyboard de 68 secondes en 9 plans.

Choix d'outils : le **Skill d'écriture nouveaux médias** (couvre explicitement les scripts vidéo courts, fort en rythme oral, accroche et compréhension à l'oreille) pour le script ; le **Skill vidéo créative** (proche du tournage réel, sait détailler cadrages, actions, B-roll, son et montage) pour le storyboard. Ne mélangez pas les deux tâches **dans un seul prompt** — valider d'abord le script humainement, puis ouvrir une nouvelle tâche pour le storyboard, qui organise les images autour du texte définitif sans modifier les faits en découpant les plans. (Pour ajouter des ressources IA, l'option Seedance 2.5 de génération vidéo existe.)

## Tâche 1 : transformer le long article en script « prononçable »

Avec juste « adapte cet article en script d'une minute », l'IA simplifie en supprimant des mots. Précisez cinq choses : **pour qui, combien de temps, que garder, qu'est-ce qui ne doit jamais changer, sous quel format livrer** :

```text
Utilise la capacité « Écriture nouveaux médias » pour transformer le long article vérifié
ci-dessous en script parlé de vidéo courte, directement dicible face caméra.

Objectifs :
- plateforme : utilisable sur chaîne vidéo / Douyin
- durée : 60 à 75 secondes
- public : actifs ordinaires en entreprise, débutants en contenu
- un seul problème central :【écrire ici le problème central】
- conserver une seule conclusion claire et un exemple facile à entendre
- entrer dans le problème dans les 5 premières secondes, sans accroche exagérée du type
  « choc » ou « absolument »
- phrases courtes, comme une vraie personne qui parle, sans ton de dissertation
- conserver les conditions limites de l'original : un jugement conditionnel ne devient pas
  une promesse absolue
- annoter les pauses suggérées【pause】et les mots à accentuer【accentuation】
- ne génère ni storyboard, ni plans, ni fichiers de sous-titres
- n'ajoute aucun chiffre, cas ou conclusion absent de l'original

Structure de sortie :
1. arbitrages : 3 lignes — ce qui est gardé, ce qui est coupé, pourquoi
2. script final : lisible tel quel, environ 260 à 320 caractères
3. informations pour la description : 2 à 3 éléments à mettre dans la description de la vidéo
   plutôt que dans le script

Article original :
【colle ici intégralement ton long article vérifié ; ou après téléversement écris : ne lis
que le《fichier》】
```

Résultat du test : la première phrase pose la question qui intéresse tout le monde (« beaucoup font la diffusion multiplateforme en copiant l'article du Compte officiel sur Xiaohongshu... »), un seul exemple comparatif au milieu, et la phrase la plus risquée préservée — l'original disait « à condition d'une information complète et de faits vérifiés, l'IA fait gagner du temps », pas « avec l'IA, c'est certain ». Environ 290 caractères, 65 à 70 secondes estimées, pauses et accentuations annotées.

> Pour juger un script, la méthode la plus simple et la plus efficace : **lisez-le intégralement à voix haute**. Tout passage où vous devez relire la phrase précédente est à réécrire.

## Tâche 2 : script validé, découper un storyboard réellement filmable

Le piège du storyboard est l'irréalisme : **avec un seul téléphone, ne laissez pas concevoir des plans sur rail à trois caméras ; avec seulement vos propres rushes, pas d'extraits de films ni de banques d'images par défaut**. Pour une première prise de parole face caméra, un téléphone + trépied + pièce calme suffisent.

> Une expérience universelle : en médias autonomes, quel que soit le format, démarrez en ultra-léger et concentrez l'essentiel de l'énergie sur le choix du sujet et le titre (pour la vidéo courte : l'ouverture). Des investissements réduits mais orientés juste permettent de durer et d'entrer dans le cercle vertueux.

Le test fixe les conditions : vertical 9:16, un actif à son bureau, téléphone sur trépied, seules ressources disponibles : la prise de parole face caméra, les gestes sur l'ordinateur, la capture d'écran de l'article et des cartes de mots-clés faites maison :

```text
Utilise la capacité【vidéo créative】pour découper le script parlé confirmé ci-dessous en un
tableau de storyboard exécutable directement au tournage. Fais uniquement le plan de tournage
et de montage : ne génère ni vidéo réelle, ni fichier de sous-titres.

Conditions du film :
- format : 9:16 vertical ; durée totale : 65 à 70 secondes
- scène : un actif face caméra à son bureau
- matériel : téléphone, trépied, ordinateur portable
- ressources : prise de parole face caméra, gestes sur ordinateur, capture de l'article,
  cartes de mots-clés faites maison
- pas de banques d'images non autorisées, d'extraits de films ou de captures d'autres comptes
- rythme : clair, sobre, comme un tutoriel utile, sans montage frénétique

Consignes :
1. découpe en 8 à 10 plans sur segments temporels continus (0—5 s, 5—12 s...) ;
   la somme doit couvrir 65 à 70 secondes, sans chevauchement ni trou.
2. pour chaque plan : phrase du script correspondante, action du personnage, valeur de cadre,
   position / composition, texte à l'écran, B-roll ou capture, transition, exigences sonores.
3. à l'écran, des mots-clés seulement, 12 caractères chinois maximum par écran, sans recoller
   tout le script.
4. pas de formules vides du type « ajouter des images pertinentes » : précise quoi filmer,
   quoi capturer à l'écran, où placer le texte.
5. indique l'état de chaque ressource :【déjà là】【à tourner】【à produire】【droits à vérifier】.
6. ne réécris ni les faits ni les frontières du script, surtout les conditions limites.
7. joins une liste de tournage ordonnée par séquence de tournage et une liste de contrôle de
   montage ordonnée chronologiquement.

Structure de sortie :
A. Réglages de tournage (position, lumière, son, fond)
B. Tableau de storyboard seconde par seconde
C. Liste de tournage
D. Liste de contrôle de montage
E. Contrôle droit d'auteur et vie privée

Script confirmé :
【colle ici le script complet validé par l'humain au tour précédent】
```

Il estime d'abord la durée de chaque segment d'après caractères et pauses, puis découpe les plans — **calculer avant de découper** est essentiel : écrire 9 plans puis ajuster le temps à la fin produit des scripts non finissables ou des trous de cinq secondes. Chronologie du test (9 segments totalisant exactement 68 secondes, sans trou ni chevauchement) :

| Temps | Mission visuelle |
| --- | --- |
| 0—7 s | Plan moyen rapproché : « la diffusion multiplateforme par copier-coller », trois tapes de la main droite sur le bureau |
| 7—13 s | Gros plan : « gagner du temps n'est pas produire un effet » |
| 13—21 s | Insert main qui fait défiler l'article, les lectures diffèrent selon la plateforme |
| 21—30 s | Capture d'écran comparée : « le Compte officiel se lit, la chaîne vidéo s'écoute » |
| 30—37 s | Carte « structure » en main : c'est la structure d'expression qui change |
| 37—49 s | Capture : « contexte / test / conclusion » vs « problème / conclusion / exemple » |
| 49—58 s | Carte « conditionnel / absolu » pour tenir la frontière factuelle |
| 58—63 s | Gros plan : « un jugement conditionnel ne devient pas une promesse absolue » |
| 63—68 s | Cadrage élargi de clôture, plan fixe sur le bureau |

Le résultat se termine par trois listes de secours : quoi tourner d'abord par ordre de tournage, comment monter par ordre chronologique, comment vérifier droits et vie privée.

> Un storyboard d'autant plus détaillé n'est pas d'autant plus professionnel. **Le storyboard vraiment utile est celui que l'équipe de tournage, reçue aujourd'hui, transforme immédiatement en liste « déjà là, à tourner, à produire, droits à vérifier ».**

## Retenir cette formule en deux temps

**Article → script parlé** : pour qui, sur quelle plateforme, combien de temps ; quel problème, quelle conclusion unique ; quelles conditions limites à conserver ; quoi déplacer dans la description ; sortie avec pauses, accentuations et contrôle du nombre de caractères.

**Script → storyboard** : matériel, scène, format et ressources disponibles ; segments continus dont la somme égale la durée totale ; chaque plan avec action, cadre, position, texte, ressource et son ; état sur chaque ressource ; contrôle final droit d'auteur, vie privée et frontières factuelles.

Long article, script et storyboard sont trois objets différents : l'article explique en entier, le script se comprend en une écoute, le storyboard rend le tournage possible. Découper en deux tâches donne de meilleurs résultats et permet surtout d'identifier à chaque étape si le problème vient du contenu, de l'expression ou de l'exécution du tournage.

---

Suivant : [Transcription, sous-titres et extraits à partir de contenus audio/vidéo longs →](/fr/doubaowork/case-av-transcription)
