# Approfondissement : mémoire, coûts et environnement de travail sécurisé

Trois mécanismes qui rendent l'usage « de plus en plus fluide » : faire en sorte que l'IA vous retienne (mémoire), que les Credits soient bien dépensés (coûts), et que les tâches tournent en zone isolée (environnement de travail sécurisé).

> Documentation officielle : [memory](https://docs.qoder.com/zh/qoderwork/memory) ｜ [settings](https://docs.qoder.com/zh/qoderwork/settings)

## La mémoire : mémorisation inter-sessions et personnalisation

La mémoire (Awareness, livrée en v0.6.0) est le système de mémorisation et de personnalisation de QoderWork : elle enregistre en continu vos préférences et habitudes de travail, pour que chaque nouvelle conversation arrive avec un contexte complet. Trois couches : mémoire, réflexion, auto-évolution des Skills.

Accès : icône « Mémoire » dans la navigation de gauche. Deux commutateurs principaux :

- **Mode mémoire** : interrupteur général ;
- **Mémorisation automatique** : maintient automatiquement le profil utilisateur et les mémoires court/long terme, avec réflexion périodique.

Panneau dynamique d'évolution : courbes de mémoire (jour/semaine/mois), statistiques du jour (révisions, nouvelles mémoires, mises à jour de Skills, réflexions), activité récente.

**Table des fichiers de la mémoire** (pour une personnalisation poussée) :

| Élément | Fichier/emplacement |
| --- | --- |
| Stockage | `~/qoderwork/awareness/main` |
| Style de collaboration | SOUL.md (préréglages au choix ou personnalisation) |
| Manuel de travail | AGENTS.md (éditable directement) |
| Profil utilisateur | USER.md (maintenu automatiquement, édition manuelle déconseillée) |
| Mémoire long terme | MEMORY.md (maintenance automatique) |
| Mémoire court terme | dossier memory/ (résumés quotidiens de conversation) |
| Sauvegarde et restauration | export/import du dossier mémoire (synchro multi-appareils manuelle) |

Trois opérations dangereuses **irréversibles** : réinitialiser le style de collaboration, réinitialiser le manuel de travail, vider la mémoire — réfléchissez avant d'agir.

Conseils pratiques : si l'IA répète la même erreur → écrivez-la immédiatement dans les règles/le manuel de travail, au lieu de corriger oralement à chaque fois ; plus de mémoire n'est pas mieux : purgez régulièrement le contenu obsolète — l'autorité vient du « chaque entrée compte ».

## Maîtrise des coûts en Credits

QoderWork facture en Credits, solde partagé avec toute la famille Qoder (version internationale : Pro 20 $/mois = 2000 Credits, Pro+ 60 $, Ultra 200 $ ; packs de ressources 20 $/1500 ; la version chinoise propose pointages, bonus enseignants/étudiants, etc.). Les paliers de modèles consomment très différemment (standard/avancé/phare croissants) ; pour économiser :

1. **Les modèles par étape** : dérouler au standard → conclusions clés au phare → mise en forme au standard (bascule immédiate sans perte de contexte) ;
2. **Valider avant de figer** : exécuter une fois le workflow complet pour connaître le coût, puis configurer la tâche planifiée ;
3. **Une tâche, un sujet** : nouvelle tâche pour un sujet sans rapport, éviter de rejouer l'ancien contexte ;
4. **Longueur/format de sortie précisés** : moins d'allers-retours (test communautaire : préciser « 300 mots » économise la moitié par rapport à une sortie ouverte) ;
5. **Réutilisation des Skills** : un Skill mature se configure une fois et sert longtemps, moins gourmand en tokens qu'une redescription à chaque fois.

## Environnement de travail sécurisé (bac à sable local en VM)

Paramètres → Avancé → Environnement de travail sécurisé : ouvre sur votre ordinateur un **espace isolé** dédié aux tâches, les données de fichiers ne quittent pas l'appareil. Nettoyer les fichiers de l'environnement ne libère que du disque ; conversations et livrables sont conservés. Adapté à : traitement de documents sensibles, test de Skills d'origine inconnue, opérations massives sur fichiers.

À utiliser avec trois lignes de conduite :

1. N'autoriser que les [dossiers de travail](/fr/qoderwork/04-files) nécessaires ;
2. Tester les Skills tiers d'abord dans un dossier isolé (examiner d'abord les permissions qu'ils demandent) ;
3. Commutateur de partage de données désactivé par défaut (un mode confidentialité « données non utilisées pour l'amélioration produit » est proposé dans les paramètres ; sur compte entreprise, ce réglage relève de l'administrateur).

## Aide-mémoire des réglages système

- **Général** : langue, thème, style d'interface, police et taille, lancement automatique, **garder le système en éveil** (évite les interruptions de tâches, à laisser activé), notifications bureau/son, proxy réseau ;
- **Sept permissions système** : accès complet au disque, capture/son, accessibilité, micro, automatisation, notifications, localisation — activez au cas par cas ;
- **Raccourcis et QuickPick** : voir [Contrôle de l'ordinateur et saisie vocale](/fr/qoderwork/adv-computer-use) ;
- **Fonctions expérimentales** : UI générative, fenêtres indépendantes, filtrage de la liste de conversations — à activer pour les early adopters.

---

Fin de la partie approfondissement. Retour au [tableau des scénarios](/fr/qoderwork/ref-scenarios) pour poursuivre par l'index des scénarios.
