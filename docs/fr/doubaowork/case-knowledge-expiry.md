# Quels savoirs sont périmés : trouver automatiquement le Owner pour confirmer

> Contexte : une base de connaissances règle le stockage de l'information, pas sa pérennité. Un guide vieux de plusieurs années — prix des billets, horaires, itinéraires, règles de réservation — a pu changer : **utilisée sans revalidation, plus la fiche est détaillée, plus elle fait croire à des conclusions périmées**.

Exemple du voyage : la base contient un « Guide touristique de Shanghai (PDF) » de 2013—2014 qui indique « tour de la Perle de l'Orient : 100 yuans, 11 lignes de métro seulement » ; en 2026, le billet combiné deux sphères coûte 199 yuans et le métro dépasse 20 lignes ; et le « Guide anti-arnaques de Shanghai (édition 2026) » partagé par le contact Xiang Ming assure que la place de restauration du temple du Dieu de la Ville, recommandée par le vieux guide, est « chère et mauvaise ». Vérifier chaque point à la main : au moins deux ou trois heures.

## Le prompt : écrire les exigences de vérification dedans

Version courte (préciser dates du voyage, destination et format de sortie) :

```text
Je pars à Shanghai vendredi prochain ; propose-moi un itinéraire de 3 jours et 2 nuits.
Combine les informations pertinentes de mon Feishu (base de connaissances, historiques
de discussion) pour personnaliser l'itinéraire, rendu final en HTML. Cite tes sources
et vérifie soigneusement si les informations ne sont pas périmées.
```

La version complète ajoute périmètre documentaire, exigences de vérification, traitement des conflits et critères de livraison :

```text
Je pars à Shanghai vendredi prochain ; aide-moi à planifier 3 jours et 2 nuits.
Appuie-toi sur les guides touristiques de ma base Feishu (lien Wiki : 【lien】)
et sur le « Guide anti-arnaques de Shanghai (édition 2026).xlsx » partagé par
mon contact Xiang Ming.

Exigences :
1. Lis d'abord la base et le fichier du contact, repère ce qui est périmé (prix des
   billets, horaires, lignes de métro) et ce qui reste valable.
2. Pour toute information périmée ou contradictoire : signale-la séparément et fais
   confirmer par le fournisseur ou le responsable — pas de remplacement silencieux.
3. Vérifie et actualise avec les informations temps réel 2026 (météo, horaires TGV,
   réservations de sites, expositions en cours).
4. Produis un itinéraire HTML : programme détaillé par jour, transports, hébergement,
   restauration, budget et alternatives pluie.
5. Chaque information clé avec sa source (base / Xiang Ming / web en temps réel)
   et son horodatage de vérification.
6. Rappelle-moi 48 h avant le départ de recontrôler météo et annonces temporaires
   des sites.
```

## Comment il procède

1. **Confirmer d'abord les sources** : lire le guide historique de la base Feishu, le guide anti-arnaques du contact et les discussions associées — établir « quels documents j'ai en main », pour ne pas bâtir le plan sur un seul guide ;
2. **Extraire et vérifier en priorité l'information volatile** : prix des billets, horaires, lignes de métro, trains, règles de réservation, expositions ; en cas de désaccord entre vieux guide et guide neuf, **conserver les deux versions et leurs sources**, sans remplacement silencieux ; météo, trains et annonces de sites vérifiés en ligne ;
3. **Fusionner, puis composer l'itinéraire** : l'expérience d'itinéraire encore valable du vieux guide + les conseils pratiques de l'édition 2026 + météo et transports du jour, dans un même plan.

## À quoi ressemble le résultat

L'**aperçu des informations clés** cadre d'abord : 3 jours et 2 nuits du 4 au 6 septembre ; aller G256 (431 yuans), retour G3092 (390 yuans) ; hébergement place du Peuple ou rue Nanjing Est (lignes 1/2/8, Bund à pied) ; budget environ 2 500—3 200 yuans par personne. **Fil des trois jours** : J1 arrivée → rue Nanjing → illuminations du Bund ; J2 musée de Shanghai → jardin Yu → traversée en ferry à 2 yuans → Lujiazui ; J3 rue Wukang → rue Anfu → cuisine locale → Xintiandi → retour.

Le résultat explique aussi l'usage de chaque document, pour tracer chaque recommandation : du PDF 2013, **prix et billets sont périmés**, mais **la logique d'itinéraire et la culture gastronomique gardent valeur de référence** ; sur les 48 conseils du guide de Xiang Ming, les pertinents sont intégrés au programme (ferry à 2 yuans, point de vue du Bund Nord, éviter les restaurants à la mode bondés) ; la météo du jour annonce de la pluie les trois jours, le plan prévoit alternatives pluie (musée d'art de Pudong, annexe est du musée de Shanghai) et le rappel de recontrôle à 48 h du départ.

L'**itinéraire HTML complet** range dans une même page créneaux horaires, trajets, réservations de sites, conseils de restauration, budget et alternatives pluie — les conseils anti-arnaques accrochés aux étapes correspondantes, sources conservées : le lecteur sait sur quoi repose chaque recommandation et peut revenir au document d'origine en cas de changement.

## Ce qu'il faut en retenir

Cet exemple montre une **méthode de gouvernance du savoir périmé** : garder l'expérience encore valable des vieux documents, revérifier l'information volatile, et pour les conflits de source, conserver les preuves et une porte de confirmation (demander au fournisseur / au Owner, plutôt que remplacer en silence). Ainsi entretenue, la base de connaissances continue de nourrir les tâches du présent. Pour un vrai voyage, ajoutez budget d'hôtel, restrictions alimentaires, intensité de marche et sites incontournables pour resserrer encore la sélection.

---

Fin des scénarios de gestion des connaissances. Suite :[E-commerce : d'une photo produit brute à toute la série de visuels →](/fr/doubaowork/case-product-images)
