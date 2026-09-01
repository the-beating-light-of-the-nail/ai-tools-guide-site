# Manipuler Excel sans effort et devenir un as de l'analyse de données

> Contexte : les feuilles qui s'empilent donnent la migraine — largeurs de colonnes désalignées, formats de dates chacun chez soi, plusieurs détails à fusionner, formules à vérifier cellule par cellule. Mise en forme, nettoyage, fusion, analyse : confiez tout à Doubao Work.

## Mise en forme Excel en un clic

La mise en forme ne résout que l'**efficacité de lecture**, pas la correction des données : en-têtes, largeurs de colonnes, volets figés, filtres et lignes alternées facilitent la lecture des détails et réduisent les erreurs sur les longues tables. Valeurs d'origine, formules et noms de feuilles restent inchangés.

```text
Mets en forme le fichier « 2026年1月销售明细.xlsx » (détail des ventes de janvier 2026)
que j'ai téléversé.

Exigences :
1. Ne modifier aucune donnée d'origine, aucune formule, aucun nom de feuille.
2. En-têtes : fond bleu foncé, texte blanc en gras.
3. Largeurs de colonnes et hauteurs de lignes adaptées, sans texte tronqué.
4. Figer la première ligne et activer les filtres.
5. Ajouter un fond alterné sur la zone de données.
6. Enregistrer sous « 2026年1月销售明细_美化版.xlsx » (version mise en forme).

N'ajuste que le format, sans toucher au contenu des données.
```

Validation : textes non tronqués, filtres et figer disponibles, données d'origine intactes.

## Nettoyage et normalisation des données

Le nettoyage commence par définir **ce qui est correct** : espaces, graphies de régions, formats numériques et doublons ont des règles explicites, sur lesquelles le modèle peut s'appuyer. Ce qui est incertain va dans « données à problème », plus traçable qu'une valeur devinée automatiquement.

```text
Nettoie le fichier « 2026年1月销售明细.xlsx » que j'ai téléversé.

Conserve la feuille d'origine telle quelle ; crée deux feuilles « données_nettoyées »
et « données_à_problème ».

Règles de nettoyage :
1. Supprimer les espaces en début et fin des champs texte.
2. Unifier les graphies telles que « 华 东 » / « 华东 » en « 华东 » (Est de la Chine).
3. Convertir quantité vendue et prix unitaire en valeurs numériques.
4. Convertir les taux de remise en décimal — par ex. 10 % devient 0,1.
5. Ne conserver qu'un exemplaire des enregistrements strictement identiques.

Ne complète pas de toi-même les données incertaines.
```

Le système conserve la feuille d'origine, écrit les enregistrements conformes dans « données_nettoyées », place l'incertain dans « données_à_problème » ; en plus du fichier local, un tableur en ligne est généré, pratique pour consultation et collaboration.

## Fusionner plusieurs Excel

**Fusion verticale** (détails janvier—avril en table maîtresse) :

```text
Fusionne les fichiers de détail des ventes de janvier à avril 2026.

Exigences :
1. Faire correspondre les colonnes par nom de champ, pas seulement par position.
2. Ajouter tous les détails dans une feuille nommée « ventes_globales ».
3. Ajouter deux colonnes « fichier_source » et « feuille_source ».
4. Vérifier les champs manquants ou superflus dans chaque fichier.
5. Contrôler les doublons par numéro de commande.
6. Ne pas supprimer directement les commandes en double en conflit : les placer
   dans une feuille « anomalies_fusion ».
7. Créer une « synthèse_fusion » listant lignes d'origine, lignes valides et lignes
   anormales de chaque fichier.
8. Produire en sortie « 2026年1-4月销售合并表.xlsx » (table de ventes fusionnée
   janvier-avril 2026).
```

**Jointure horizontale** (détail des transactions + fiche produits + fiche clients) :

```text
Relie les trois fichiers suivants :
1. 2026年1-4月销售合并表.xlsx (table de ventes fusionnée)
2. 产品信息表.xlsx (fiche produits)
3. 客户信息表.xlsx (fiche clients)

Règles de jointure :
1. Via « 产品编号 » (code produit), ajouter nom du produit, catégorie, prix standard
   et coût unitaire à la table des ventes.
2. Via « 客户编号 » (code client), ajouter nom du client, secteur, niveau et province.
3. La table des ventes reste maîtresse : conserver chaque vente même sans produit
   ou client correspondant.
4. Marquer les données sans correspondance « non_apparié ».
5. Regrouper les enregistrements non appariés dans une feuille « anomalies_appariement ».
6. Afficher les taux d'appariement produits et clients.
7. Pas de devinettes approximatives par nom de produit ou de client.
```

## L'analyse de données en trois temps

**Colonnes calculées par formule** (conserver les formules plutôt que des valeurs figées) :

```text
Ajoute les colonnes calculées suivantes à 2026年1-4月销售合并表_关联产品客户.xlsx :

1. Chiffre d'affaires = quantité × prix unitaire × (1 - taux de remise)
2. Coût = quantité × coût unitaire
3. Marge brute = chiffre d'affaires - coût
4. Taux de marge brute = marge brute ÷ chiffre d'affaires
5. Écart de prix = (prix unitaire - prix standard) ÷ prix standard

Exigences :
1. Utiliser des formules Excel, pas des valeurs fixes.
2. CA, coût et marge arrondis à deux décimales.
3. Taux de marge et écart de prix affichés en pourcentage.
4. CA nul : taux de marge laissé vide, sans erreur de division par zéro.
5. Une même structure de formule pour toutes les lignes.
6. Mise en forme conditionnelle rouge pour les taux de marge < 10 %.
```

**Tableaux croisés et synthèse opérationnelle** (attention aux doublons et aux périmètres) :

```text
Crée une feuille « analyse_operationnelle » à partir de
2026年1-4月销售合并表_关联产品客户.xlsx.

À calculer :
1. Par mois : chiffre d'affaires, marge, nombre de commandes, taux de marge.
2. Par région : chiffre d'affaires, marge, nombre de clients.
3. Par catégorie de produit : volumes, chiffre d'affaires, marge.
4. Part de chiffre d'affaires par canal de vente.
5. Classement du chiffre d'affaires par commercial.

Exigences :
- Commandes comptées par numéro de commande distinct.
- Clients comptés par code client distinct.
- Taux de marge = « total marge ÷ total CA », pas la moyenne des taux de détail.
- Ajouter les totaux.
- Montants avec séparateur de milliers.
```

**Tableau de bord de direction** (pour répondre aux questions du quotidien : l'échelle bouge-t-elle, le profit est-il sain, où est-on sous objectif, qui relancer) :

```text
Crée un tableau de bord des ventes pour la direction à partir de
« analyse_operationnelle ».

Contenu :
1. Quatre indicateurs clés : chiffre d'affaires, marge, taux de marge, commandes.
2. Courbe du chiffre d'affaires mensuel.
3. Comparatif du chiffre d'affaires par région.
4. Classement des catégories de produits par chiffre d'affaires.
5. Répartition par canal de vente.
6. Top 10 des commerciaux.
7. Taux de réalisation des objectifs de ventes.

Design :
- Style épuré, bleu business.
- Indicateurs clés en haut.
- Titres et unités explicites.
- Pas de graphiques 3D.
- Couleurs limitées, sans surdécoration.
- Alerte rouge pour les taux de réalisation < 80 %.
```

Pas besoin de multiplier les graphiques : clarifier anomalies et tendances suffit. En test, aucune donnée perdue sur toute la chaîne — fusion, jointure, formules, tableau croisé, tableau de bord.

---

Scénario similaire :[De l'enquête improvisée au rapport officiel livré →](/fr/doubaowork/case-research)
