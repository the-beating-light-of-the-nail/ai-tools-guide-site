# Ne plus épuiser la base documentaire : trouver la procédure en une phrase, sources incluses

> Contexte : il ne manque pas de règles internes, le difficile est de retrouver vite **la version actuellement en vigueur**. La demande d'heures supplémentaires en est l'exemple type : préavis requis, valideur, canal de dépôt, récupération possible — les réponses peuvent être éparpillées dans plusieurs documents. Chercher soi-même prend du temps ; demander à un collègue rapporte parfois une réponse périmée.

Question test : « quelle est la procédure pour demander des heures supplémentaires aujourd'hui ». La base documentaire des règles internes est ajoutée à la conversation Doubao, avec exigence de fournir **nom du document, section, texte original et informations de version** ; l'accent porte sur deux points : sa capacité à trouver les documents réellement pertinents, et son comportement face à des conflits ou des lacunes.

> Prérequis : le compte connecté à Doubao est celui du propriétaire de la base Feishu, avec les droits d'accès à la base visée — sinon Doubao ne peut rien lire.

## Écrire les contraintes dans la question

Dans la zone de saisie, tapez @ pour sélectionner la base documentaire des règles internes et délimiter le périmètre. Avec un simple « quelle est la procédure pour les heures supplémentaires », Doubao donnerait un résumé, sans forcément lister versions, textes originaux et conflits ; il faut donc préciser périmètre, format de réponse et frontière de confirmation humaine :

```text
Je veux demander des heures supplémentaires aujourd'hui : quelle est la procédure exacte ?

Réponds uniquement à partir des règles en vigueur dans la base documentaire actuelle et auxquelles
j'ai accès. Donne d'abord une conclusion brève, puis liste le nom exact du document, la section,
l'extrait du texte original, la version et la date d'entrée en vigueur.

Si plusieurs règles se contredisent, présente-les séparément et invite-moi à contacter le
responsable correspondant pour confirmation. Si tu ne trouves aucune base, dis-le clairement :
ne complète pas la réponse avec du bon sens.

Si tu détectes un fichier expiré, non encore en vigueur ou remplacé, signale-le en tête de la
réponse. Pour les approbations au cas par cas, les questions juridiques ou les demandes de dérogation,
indique seulement la procédure et le contact : ne décide pas à la place du responsable.
```

Ce prompt ne fait que trois choses : **borner le périmètre documentaire, adosser chaque conclusion à sa source, et laisser conflits, lacunes et dérogations au responsable**.

## Test réel : d'abord la conclusion, puis les fondements

D'après le journal de recherche, Doubao lit d'abord l'arborescence de la base (7 nœuds de catégorie identifiés), rattache la procédure d'heures sup. aux règles RH et examine en priorité « Gestion des présences et des congés » et le « Manuel des collaborateurs » ; après avoir localisé la section « heures supplémentaires », il va encore vérifier « Gestion de la rémunération et des avantages » et balaye les catégories gouvernance, administration, R&D et sécurité de l'information pour chercher d'autres dispositions. **C'est l'étape que l'on saute le plus souvent en cherchant soi-même : on s'arrête au premier document pertinent, sans vérifier les clauses complémentaires ou contradictoires.**

La réponse indique d'abord comment faire la demande aujourd'hui, puis les fondements : document « Gestion des présences et des congés » (catégorie RH), section « temps de travail → heures supplémentaires », extrait original (formulaire de demande à remplir au préalable et à faire approuver par le responsable de département ; majoration de 1,5/2/3 ou récupération selon jour ouvré / week-end / jour férié ; pas d'heures sup. sans approbation), informations de version (révision 3, en vigueur, pilotée par le département de gestion générale).

Un détail mérite confirmation humaine : le résultat donne l'« heure de dernière modification » mais pas une « date d'entrée en vigueur » séparée — les deux n'ont pas le même sens ; avant toute démarche officielle, ouvrez le texte original pour vérifier.

## Quand la règle est muette

La réponse liste aussi trois informations de frontière :

1. les autres catégories de règles ont été vérifiées : aucune disposition en conflit avec la procédure de demande d'heures sup. ;
2. le canal de dépôt du formulaire (formulaire dans le système de présences ou formulaire papier) **n'est pas précisé dans la règle**, à confirmer auprès du département de gestion générale ;
3. pour les cas particuliers hors délégation d'approbation, le valideur tranche en dernier ressort : la réponse expose la procédure, sans se substituer au jugement.

La deuxième est la plus utile : la lacune de la règle est conservée et orientée vers un service qui peut trancher — le dossier peut continuer d'avancer à partir du résultat.

## Ce que ce test change dans la façon de consulter les règles

1. laisser d'abord l'IA **réduire le périmètre** pour trouver les règles les plus pertinentes, puis vérifier dans les autres documents les clauses complémentaires ou contradictoires, au lieu d'utiliser le premier résultat de recherche ;
2. à la réception, contrôler **nom du document, version, date d'entrée en vigueur et extrait original** — un simple résumé de procédure sans texte ni version impose un retour à la base ;
3. en cas de conflit ou de lacune, poursuivre la confirmation via le **département responsable** indiqué dans le résultat. Cela suppose aussi que la base documentaire conserve des versions, dates d'effet et responsables clairs — sans désactivation des anciennes règles, aucun outil de recherche, si bon soit-il, ne donnera de résultat fiable.

Ce que l'IA économise, c'est le temps de recherche et de comparaison ; le texte original et le responsable restent les références finales. Pour tester votre propre base, prenez une question courante (congés, notes de frais, demande d'achat) : le résultat contient-il la version en vigueur, la source exacte et le moyen de confirmer les points incertains ?

---

Suivant : [541 prompts GPT reclassés →](/fr/doubaowork/case-prompt-library)
