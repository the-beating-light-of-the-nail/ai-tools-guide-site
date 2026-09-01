# Projet terminé : archiver ensemble fichiers, décisions et livrables

> Contexte : intégrer le moteur PI dans WeSight (application desktop). Faire écrire du code par une IA semble facile ; le difficile, c'est qu'elle « comprenne » vraiment votre projet — cette fois, Doubao Work a lu la base de connaissances du projet et le code ensemble, et planifié les points à modifier avec une clarté totale.

L'objectif tient en une phrase :

```text
Dans le projet wesight, je prépare l'ajout d'un moteur : le moteur PI Agent.
En croisant le contenu de la base de connaissances et l'état actuel du code, propose-moi
un plan d'exécution pour l'intégration du moteur PI.
```

## Lire ensemble la base de connaissances et le code

Doubao Work commence par fouiller deux choses : **la base de connaissances du projet dans Feishu**, et dans le dépôt de code les points d'intégration — **routage des moteurs, définitions de constantes, adaptateurs, enregistrement des Provider** — alignant en parallèle l'historique documenté du projet et les détails réels de l'architecture en production, avant de décider du plan.

Découverte inattendue : dès la première phrase, il signale que **la base de connaissances est vide** — seulement un titre et une référence vers une sous-page supprimée. Quiconque la citait croyait y trouver des réponses ; elle ne contient rien. Plus rassurant : au lieu d'inventer face au vide, il précise que « les informations sur PI dans le plan proviennent exclusivement d'une enquête de première main dans la documentation officielle de pi.dev et le code source de badlogic/pi-mono », sources parfaitement tracées.

> **Les connaissances périment : sans source, responsable ni date de mise à jour, une vieille réponse induit longtemps en erreur.** Une base vide est plus dangereuse que pas de base du tout — elle fait croire à chacun de ceux qui la citent qu'il y a là un capital documenté.

À partir du code, il a reconstitué les 5 couches à traverser pour un nouveau moteur : enregistrement constantes/types → Provider/environnement/installateur → adaptateur d'exécution → câblage Router + Main → UI Renderer, puis synchronisation de configuration et tests de bout en bout. Les décisions clés viennent avec des recommandations nettes : canal d'intégration en mode RPC (`pi --mode rpc`, protocole JSONL sur stdin/stdout) ; création d'un adaptateur dédié `PiRuntimeAdapter` (pas de réutilisation de l'adaptateur de 131 Ko taillé pour l'analyse de sortie CLI, PI étant un flux JSONL propre) ; permissions en passage direct en v1, boîtes de dialogue de confirmation en phase 2.

## Livrable : un plan d'exécution applicable

Le plan est enregistré dans `docs/pi-engine-integration-plan.md`, avec l'ordre d'implémentation et la charge estimée selon 4 jalons :

1. **M1 squelette** : constantes/types/Provider/installateur — ça compile, le panneau d'environnement affiche Pi et permet détection/installation ;
2. **M2 cœur fonctionnel** : PiRuntimeAdapter + câblage Router + Main — un tour de conversation complet ;
3. **M3 fonctionnalités complètes** : UI + synchronisation de configuration + images / reprise de conversation / arrêt ;
4. **M4 finition des permissions** : boîtes de dialogue + tests et régression.

Il liste aussi par anticipation 6 risques (schéma de models.json, sémantique du streaming, stratégie de reprise de session, compatibilité Windows, etc.). Les décisions ne sont pas tranchées au doigt mouillé : les trois points de décision clés sont présentés clairement, avec des valeurs par défaut vérifiées en référence, et **le pouvoir de décision final reste entier au développeur** — d'abord dérouler le scénario de bout en bout, puis préserver l'espace de décision : la friction de communication chute fortement.

## Renvoyer l'enquête et les livrables dans la base de connaissances

Quand on lui demande d'archiver le document d'enquête dans la base du projet, il détecte que le compte courant n'a qu'un accès en lecture, bascule automatiquement vers l'import dans une base personnelle et complète une validation intégrale du contenu. Le passage illustre une idée souvent négligée : **l'emplacement des documents et les droits de maintenance font partie du patrimoine du projet** — sans responsable ni date de dernière mise à jour sur chaque document, la base devient vite une île d'information que personne ne revendique et que personne n'ose modifier.

À la consigne « fais seulement le squelette de surface, pas de développement réel, puis synchronise dans Feishu », il s'aligne au cordeau : constantes, types, adaptateur vide et option UI ajoutés, ça compile, l'option PI apparaît dans l'interface — mais sans implémentation réelle de la communication RPC.

## À quoi ressemble une base de connaissances de projet saine

```text
Base de connaissances du projet
├── Accueil
├── Produit et architecture
├── Normes de développement
├── Réunions et décisions
│   ├── Comptes rendus de réunion
│   └── Registre des décisions (ADR)
├── Releases et versions
│   ├── Notes de release
│   └── Liste de contrôle de publication
└── Équipe et responsabilités
```

**Projet terminé : archivez ensemble fichiers, décisions et livrables ; et notez à chaque fois source, responsable et date de mise à jour.** Ainsi, ni l'IA ni les collègues qui arrivent ne suivront longtemps de vieilles réponses. Plus l'IA devient forte, plus le contexte (context) compte.

---

Suivant : [Transformer une base de connaissances Feishu en Skill réutilisable →](/fr/doubaowork/case-wiki-to-skill)
