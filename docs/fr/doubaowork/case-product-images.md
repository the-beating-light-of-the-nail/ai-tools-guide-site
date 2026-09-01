# D'une photo brute de produit à toute la série d'images principales

> Contexte : design d'images principales pour le e-commerce. Vous n'avez qu'une photo de produit prise à la va-vite et voulez une série complète prête à mettre en ligne — ce n'est pas une simple commande de génération d'image, mais un « flux de production visuelle e-commerce ».

## Ce que ce Skill fait pour vous

Le Skill [moyuxl-ecom-image-prompt](https://github.com/AlephAITech/moyuxl-ecom-image-prompt) prend en charge : **décortiquer les références, figer les faits, définir la direction visuelle, rédiger des prompts de niveau production et relire les livrables**. Deux modes de travail :

| Mode | Quand l'utiliser | Ce qu'il fait |
| --- | --- | --- |
| Rétro-ingénierie de référence (principal) | Photo produit + quelques références appréciées | Décortiquer composition / structure d'information / style des références, puis les transposer sur votre produit pour générer de nouvelles images |
| Conception from scratch | Pas de référence, seulement le produit | Déduire la direction visuelle de l'identité produit et du parcours de décision de l'acheteur, avec 2 à 4 directions possibles |

Selon le matériau disponible, la sortie change : photo produit sans direction → recherche des arguments de vente et conception from scratch d'images principales ou de la fiche produit ; photo + références → décorticage, transposition et génération d'une série nouvelle ; argumentaire complet déjà rédigé → compilation directe en prompts de génération copiables de niveau production.

Dans un environnement compatible Agent Skills, installation en une commande (ou téléchargement du dossier du Skill et import direct dans Doubao Work) :

```text
npx skills add https://github.com/AlephAITech/moyuxl-ecom-image-prompt --skill moyuxl-ecom-image-prompt
```

## En pratique : 1 photo de produit en main → 7 images principales

Le point de départ est une photo **sans aucune mise en page** : produit tenu en main, fond végétal.

### Ce que chaque référence « prête »

Pas de copie d'une image : **un mécanisme par référence**, recombiné avec votre produit et votre système visuel :

| Référence | Mécanisme emprunté | Explicitement écarté |
| --- | --- | --- |
| Studio symétrique | Composition stable : produit centré, symétrie gauche-droite pour l'image de tête | Son produit, ses couleurs, son texte |
| Immersion dans les ingrédients | Le produit « plongé » dans ses ingrédients | Sa forme de bouteille et ses visuels exclusifs |
| Infographie | Squelette d'information : colonnes, cartes, lignes de flux | Ses données brutes et ses formulations |
| Vue aérienne du terroir | Atmosphère d'origine et narration spatiale | Ses chiffres précis de superficie / rendement |

### Diverger d'abord, converger ensuite

Pas de fixation immédiate : autour du même produit, tester un groupe de directions par **composition / scène / information / tonalité** avant de choisir :

- **Lot 1 · studio, 4 directions** : transposition fidèle, composition enrichie, narration de scène, design d'information (la version fidèle maximise fidélité du produit et stabilité de composition) ;
- **Lot 2 · immersion, 3 variantes** : produit entouré de pommes Red Fuji — l'insertion en biais est la plus proche du paradigme de référence, le gros plan vertical donne la plus grande part au produit, la version couchée est la plus dynamique ;
- **Lot 3 · infographie, 3 variantes** : fond de verger réel, informations en quatre quadrants et flèches dessinées à la main — le quatre quadrants offre la lisibilité maximale, la version encadrée met le produit en avant, la version en perspective lignée donne la profondeur maximale ;
- **Lot 4 · vue aérienne du terroir, 3 variantes** : superficies plantées et tonnages de chambre froide des concurrents non transmissibles, remplacés partout par les informations réelles confirmées du produit (« origine Yantai, Red Fuji de saison, 100 % jus de pommes fraîches »), **sans inventer de chiffres d'échelle** ;
- **Lot 5 · style original, 5 directions** : exploration sans référence, couvrant tout le spectre du minimalisme au dynamique, du frais au chaleureux, du quotidien au premium, pour déduire la tonalité finale de la série.

## Points de méthode

1. **Les références sont une banque de mécanismes, pas des objets à plagier** — un seul mécanisme de composition / information / ambiance par image, toujours avec vos produits et vos données ;
2. **Figer les faits d'abord** — origine, composition, arguments de vente : toute information destinée à l'image est confirmée réelle au préalable, les chiffres des concurrents ne se transmettent pas ;
3. **Des variantes en série pour l'A/B** — 3 à 4 variantes d'un même mécanisme à comparer (part du produit, dynamisme, densité d'information) avant d'intégrer la série finale ;
4. **Tonalité déduite du spectre** — le spectre stylistique des directions originales décide en retour de la tonalité visuelle unifiée de la série.

---

Vers les scénarios financiers : [Après la clôture, transformer les mouvements du marché en liste de recherche →](/fr/doubaowork/case-market-review)
