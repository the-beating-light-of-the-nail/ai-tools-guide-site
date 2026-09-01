# Étude de cas : créer avec TraeWork une présentation digne d'être présentée

> Adapté du long compte rendu de K Shu, utilisateur core de TRAE : [« Faire un PPT avec TRAE Work : l'essentiel n'est pas la "génération" »](https://zhuanlan.zhihu.com/p/2056077700767428956) (juillet 2026). Sa mission : transformer ses notes de lecture de deux articles d'ingénierie d'OpenAI en un PPT de partage communautaire de 11 diapositives.

## Pourquoi « fais-moi un PPT » échoue toujours

Avec une simple phrase comme « fais une présentation de partage à partir de cet article », le résultat ressemble à **une capture de page web, à une interface d'admin ou à une démo de design — tout sauf un PPT qu'on peut présenter debout devant un public**. Ce n'est pas un problème de modèle : vous n'avez pas précisé « ce que bien veut dire ».

Les deux pièges les plus fréquents :

- **Les instructions visuelles orientent à l'envers** : « plus premium / esprit tech » pousse l'IA vers les dégradés bleu-violet, les cartes translucides, les composants isométriques et les layouts de tableau de bord. La méthode efficace est la **définition inverse** — « pas de cartes isométriques, pas d'étiquettes façon boutons, pas de pages style dashboard » — avec pour cible un esprit « notes papier, annotations, explication en direct ».
- **Des titres qui ne sonnent pas humains** : ❌ « progression cognitive / changement de paradigme » → ✅ « les nouveaux termes de l'IA ne sortent pas de nulle part / la douleur se déplace vers l'aval ». Test : lisez le titre seul ; si vous ne le diriez pas en public, ne le mettez pas en haut d'une diapositive.

## La chaîne en cinq étapes : définir « bien » d'abord, puis laisser l'IA avancer

Le processus complet de K Shu tient en cinq étapes, chacune produisant un « document d'ancrage », et **chacune permet de s'arrêter pour corriger** — plus tôt vous vous arrêtez, moins les modifications coûtent.

### Étape 1 : décomposer profondément la matière, produire un memo

```
Ne génère pas encore le PPT.
Analyse d'abord séparément ces deux articles : pour chacun, extrais les thèmes centraux, les thèses, l'armature argumentaire,
les apports cognitifs et les conditions aux limites. Puis, à partir de cette analyse, rédige un memo de lecture.
Pas de résumé paragraphe par paragraphe : privilégie la relation de progression entre les deux articles.
Arrête-toi après la sortie et attends ma validation.
```

Point clé : **arrêtez-vous au stade du memo pour corriger le cap**. Une fois le PPT généré, les problèmes se mélangeent (fil directeur, titres, visuel, zones de texte) et les retouches coûtent le plus cher.

### Étape 2 : le slide plan — une thèse par diapositive

À partir du memo validé, établissez un slide plan d'une dizaine de pages, au format :

```text
Slide 03 / Claim : la douleur de la programmation IA se déplace vers l'aval
Proof object : Harness → sessions → surcharge de supervision → Symphony
Layout : séquence de processus
```

Les 11 diapositives suivent « l'ordre de la prise de conscience à la lecture », pas le sommaire des articles : couverture → accroche → progression → méthode 1 → terrain → nouveau goulot → méthode 2 → changement de paradigme → limites → conseils aux petites équipes → conclusion.

### Étape 3 : le design brief — définir le style par l'inverse

```
À partir du slide plan validé, rédige un design brief qui précise clairement :
- ce que ce PPT ne doit pas ressembler
- la direction visuelle et les références
- la zone de sécurité de fond (contenu courant centré, rien de trop bas, numéro de page hors bords texturés)
- quels textes doivent rester modifiables
- quels éléments peuvent être générés par image-gen
- quelles formulations ne sont que ma lecture et ne doivent pas être présentées comme des définitions officielles
```

### Étape 4 : générer un PPTX modifiable

```
À partir du memo, du slide plan et du design brief validés, génère un PPTX modifiable.
Ne réinvente pas la logique des articles et ne présente pas mon interprétation comme des définitions officielles.
Le texte reste dans la couche texte du PPT. Les images ne servent que de fond, de matière et d'ornement.
Exporte un aperçu PNG par diapositive, génère une planche-contact (vue d'ensemble) et consigne les résultats de vérification.
```

**Principe de répartition avec image-gen : l'image porte l'ambiance, le texte porte les faits.** Titres, numéros de page, sources citées, termes clés et annotations en français ne sont jamais dessinés dans les images — le chinois peut générer des caractères erronés, les formulations changeront ensuite, et les autres devront pouvoir déplacer les éléments.

### Étape 5 : corriger point par point à partir des annotations

```
Corrige point par point selon les problèmes que j'ai annotés. Après chaque correction, réexporte le PPTX,
les aperçus et la planche-contact.
Vérifie les résidus d'anciens textes, les retours à la ligne, la zone de sécurité et l'ouverture du PPTX.
```

Les instructions de correction doivent être concrètes : « encore plus joli » ne dit rien à l'IA ; décomposez en actions exécutables du type « largeur des zones de texte / taille des masques / padding équilibré ou non ».

## Quatre familles de vérification

| Vérification | Que regarder |
| --- | --- |
| Aperçu PNG par diapositive | Chevauchements, désalignements, résidus d'anciens textes |
| Planche-contact d'ensemble | Une page trop dense, style qui dérive, ouverture et conclusion faibles |
| Validation du paquet PPTX | Fichier intact, nombre de pages, réimport possible, médias corrects |
| Mise en page du texte | Placeholders oubliés, retours à la ligne inattendus, empiètement sur la zone de sécurité |

## Lignes rouges éthiques

- Ne pas utiliser le logo officiel pour se faire passer pour du contenu officiel ;
- Ne pas fabriquer de captures d'écran de produit — **le visuel peut avoir du style, la couche factuelle doit rester propre**.

## En résumé

- Réservez le processus complet aux partages externes officiels ; pour un brouillon interne, memo et slide plan suffisent ;
- Pour les besoins rapides, essayez d'abord la [bibliothèque de modèles](/fr/traework/03-first-task) et les plugins/Skills de PPT ;
- La phrase de K Shu mérite d'être notée : **« Le travail humain ne disparaît pas, il change de place — au lieu d'être dans chaque détail, on se place au-dessus du processus. »**
