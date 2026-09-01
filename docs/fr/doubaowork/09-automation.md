# Créer des tâches planifiées qui produisent des résultats fiables

Les tâches planifiées conviennent parfaitement au travail **récurrent, aux règles stables et au résultat facile à valider** : veille d'actualités, brouillons de rapport hebdomadaire, veille concurrentielle. En revanche, ne confiez jamais à un flux sans surveillance des actions comme des paiements, des publications ou des suppressions de données.

## Deux façons de créer la tâche

**Configuration manuelle** : ouvrez « Tâches planifiées » à gauche → Nouveau, et renseignez le titre, la description, la périodicité et l'environnement d'exécution.

**Création en dialogue** : demandez directement à Doubao Work dans la conversation de la créer pour vous, par exemple :

```text
Chaque jour à 8 h 30, recherche les évolutions importantes des produits AI et des agents sur les dernières 24 heures.
Garde 8 éléments au maximum ; fusionne les doublons d'un même événement ; chaque élément contient l'heure, deux sources, une appréciation de l'impact et un angle à creuser.
Si les sources sont insuffisantes ou qu'il reste moins de 5 éléments valables, arrête la génération du bulletin et retourne les raisons de l'échec et des suggestions de relance.
Ne complète pas avec de vieilles nouvelles, n'envoie ni ne publie rien automatiquement.
```

## Cinq vérifications avant d'enregistrer

**Période couverte, fuseau horaire, sources de données, traitement des échecs, environnement d'exécution**. Si vous choisissez l'exécution sur « ordinateur local », assurez-vous aussi que la machine sera allumée et connectée à l'heure prévue.

## Trois règles pour un fonctionnement stable

1. **Validez d'abord en manuel, planifiez ensuite** : exécutez d'abord à la main dans une tâche ordinaire, et n'enregistrez en tâche planifiée qu'une fois le résultat jugé conforme ;
2. **Contrôlez par échantillonnage** : revenez régulièrement sur les livrables ; si les règles ont changé, modifiez le prompt ;
3. **Nettoyez à temps** : ne laissez pas une vieille tâche non conforme tourner en boucle pendant six mois en arrière-plan — c'est du token gaspillé.

## En pratique : une veille d'actualités utilisable, chaque matin

Deux pièges guettent la consolidation d'actualités : trop d'informations, l'essentiel se noie ; notifications trop bruyantes, tout le monde finit par les ignorer. Exécutez une fois avec succès puis enregistrez en tâche planifiée : vous recevrez une synthèse à structure fixe à heure fixe.

**Conception de la chaîne** (valable pour suivre actualités, projets open source, articles scientifiques, politiques, concurrents) :

1. **Collecter** : préciser thème, période, périmètre de sources et langue ;
2. **Dédupliquer** : fusionner un même événement, conserver la source première et une source de référence ;
3. **Filtrer** : définir pertinence, importance et limite de quantité ;
4. **Résumer** : dire ce qui s'est passé, pourquoi c'est important, pour qui ;
5. **Vérifier** : conserver pour chaque fait clé le lien, la date de publication et les points à confirmer ;
6. **Produire** : adopter un format fixe, pour ne pas tout réorganiser chaque jour.

**Testez d'abord** (sans activer l'exécution automatique dès le premier essai) :

```text
Rassemble les informations importantes liées à 【thème】 sur les dernières 24 heures.
N'utilise que des sources publiques accessibles dont le lien d'origine est conservé.

10 éléments au maximum, chacun avec :
- un titre
- un résumé de 100 caractères maximum
- pourquoi c'est important
- la source, la date de publication et le lien

Ce dont la source ou la date ne peut pas être confirmée va dans « à vérifier », sans invention.
```

**Une fois validé, enregistrez en tâche planifiée** : « Tâches planifiées » à gauche → « Nouveau », avec titre, description complète, périodicité, horaire précis, modèle et environnement d'exécution. Avec « ordinateur local », assurez-vous que la machine soit allumée et connectée au moment de l'exécution ; observez d'abord à basse fréquence quelques fois, puis ajustez.

Pour envoyer les résultats vers un groupe Feishu, un e-mail ou un autre système, **vérifiez d'abord que le connecteur correspondant est autorisé**, et précisez dans la description la cible d'envoi, la vérification des doublons d'envoi et l'exigence de confirmation humaine. Sans connecteur, laissez les résultats dans la tâche Doubao Work : ne promettez pas d'envoi automatique externe.

## Deux modèles prêts à adapter

**Bulletin de projets GitHub**

```text
Chaque jour, rassemble les projets AI open source dignes d'intérêt des dernières 24 heures.
Priorise les dépôts, notes de version et documentation officielle ; ne prends pas une reprise de seconde main comme unique source.
Classe en « nouveaux projets, mises à jour importantes, outils pour développeurs », 8 éléments au maximum.
Chaque élément contient le lien du dépôt, l'usage principal, la dernière mise à jour, la licence et le public visé.
Marque « à vérifier » quand l'activité ou la licence ne peut pas être confirmée.
Ne recommande pas sur le seul nombre d'étoiles, et n'installe ni n'exécute aucun code automatiquement.
```

**Bulletin sectoriel AI**

```text
Chaque jour, rassemble les évolutions des 24 dernières heures : modèles AI, produits, open source, articles scientifiques et secteur.
8 éléments au maximum, classés par importance.
Chaque élément contient un résumé, les acteurs concernés, la source première, la date de publication et le lien.
Pour les sorties majeures de modèles, les changements de prix ou de politique, cite en priorité les sources officielles et recoupe avec la presse de seconde main.
Pas de doublon d'un même événement ; en cas d'informations contradictoires, présente les deux versions côte à côte.
Termine par « les trois grands faits du jour » et « à vérifier encore ».
```

---

Prochaine étape : quand monter une équipe d'AI — [Partenaire de travail ou escouade de travail →](/fr/doubaowork/adv-buddy-or-squad)
