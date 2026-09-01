# Approfondissement : créer des Skills en conversation (/create-skill)

À la troisième rédaction de la même instruction de tâche, il est temps d'en faire un Skill. QoderWork a abaissé la barrière au niveau du « parler simplement » — la commande intégrée `/create-skill` génère le SKILL.md en conversation.

> Documentation officielle : [skills](https://docs.qoder.com/zh/qoderwork/skills) ｜ matière pratique dans la bibliothèque officielle de cas utilisateurs.

## Un échantillon réel : le Skill de rapport de ventes hebdomadaire

Processus complet issu de tests communautaires (guide CSDN) :

1. Tapez `/create-skill` en conversation ;
2. Décrivez la phrase de déclenchement et le flux :

```text
Crée un Skill « rapport-ventes-hebdo » :
Déclencheur : générer le rapport de ventes de la semaine
Étapes : lire donnees-ventes.xlsx dans sales/ → calculer la croissance hebdomadaire
((cette semaine - la semaine dernière) / la semaine dernière × 100 %)
→ générer l'histogramme du Top 5 produits →
générer le rapport Word selon le modèle fixe, enregistré dans reports/.
Dépendances : traitement Excel, tracés Python-Matplotlib.
```

3. QoderWork génère le SKILL.md et le stocke dans `~/.qoderwork/skills/` ;
4. Ensuite, dans toute nouvelle tâche, tapez `/`, choisissez « rapport-ventes-hebdo », ou dites directement « génère le rapport de ventes de la semaine ».

Un échantillon de capitalisation plus abouti (cas utilisateur officiel, avocat) :

```text
Encapsule le flux d'analyse de dossier ci-dessus en un Skill nommé « analyse-dossiers-litiges-commerciaux » :
Entrée : dossier des pièces du dossier (assignation, contrats, avenants, captures WeChat, preuves de virement, mise en demeure) ;
Sortie : chronologie du dossier + points de litige + analyse de la chaîne de preuves (force forte/moyenne/faible) + rapport de stratégie contentieuse ;
Cadre d'analyse figé, contenu généré dynamiquement selon les pièces de chaque dossier.
```

Vingt ans de pratique deviennent ainsi un outil standard réutilisable par l'équipe : les nouveaux génèrent en un clic, l'associé révise.

## Points qualité du SKILL.md

`/create-skill` produit un premier jet ; passez cette liste avant d'enregistrer :

- [ ] **Conditions de déclenchement concrètes** : « quand l'utilisateur demande un rapport hebdomadaire/une synthèse de données », pas « traiter des données » ;
- [ ] Des phrases de déclenchement sans conflit avec d'autres Skills (un conflit empêche le déclenchement) ;
- [ ] Des étapes vérifiables : « première étape : vérifier que le nombre de fichiers est 7, sinon demander d'abord » ;
- [ ] Un exemple de sortie : collez à quoi doit ressembler le livrable attendu ;
- [ ] Des limites déclarées : préciser ce qui n'est pas fait (« ne pas modifier le CSV original », « pas de conclusion juridique ») ;
- [ ] Les dépendances explicites (signaler si Excel/Python/réseau requis).

## Écosystème d'acquisition et de partage

| Canal | Détail |
| --- | --- |
| Recherche en conversation | « trouve-moi un Skill XX » → recommandation find-skills, installation en un clic |
| Place des Skills | Extensions → Skills, parcourir la marketplace |
| Communauté open source | Envoyer un lien GitHub pour un rapatriement automatique, ex. [lexburner/skill-collection](https://github.com/lexburner/skill-collection) (qoder-ppt, infographies, etc.) |
| Téléversement manuel | « Installer un Skill » avec un SKILL.md (l'archive zip doit contenir SKILL.md à sa racine) |
| Partage | Icône de partage dans la page des Skills → lien (**valable 24 heures**) → installation en un clic par l'autre |

## Du Skill au standard d'équipe

Parcours avancé recommandé officiellement : **dérouler une bonne pratique avec un Skill → empaqueter en [kit d'experts](/fr/qoderwork/05-skills) → adoption uniforme par l'équipe**. Pour savoir si un type de travail mérite un Skill, un seul critère — « choisissez un travail répété au moins deux fois dans la semaine écoulée ».

> Perspective multi-outils : les spécifications du SKILL.md sont largement communes à WorkBuddy / TraeWork / QoderWork — apprises une fois, valables partout. Méthodologie approfondie (distiller livres et vidéos en collections de Skills) : voir [Créer un Skill : distillation de connaissances](/fr/workbuddy/adv-build-skill/) de la section WorkBuddy.
