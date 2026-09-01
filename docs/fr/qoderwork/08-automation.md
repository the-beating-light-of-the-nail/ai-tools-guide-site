# Tâches planifiées : ça travaille tout seul à l'heure

Le positionnement officiel en une phrase : « les tâches planifiées font passer QoderWork de "il agit quand vous lui demandez" à "il travaille tout seul à l'heure prévue" ».

> Documentation officielle : [docs.qoder.com/zh/qoderwork/scheduled-tasks](https://docs.qoder.com/zh/qoderwork/scheduled-tasks)

## Modèle d'exécution

À l'heure prévue → création automatique d'une tâche de conversation → exécution selon le prompt que vous avez rédigé → résultat enregistré dans cette conversation. Une tâche planifiée peut appeler des outils MCP, utiliser des connecteurs (automatisation navigateur, apps natives macOS), exécuter des Skills, lire et écrire des fichiers locaux — **tout ce qu'une tâche manuelle sait faire, une tâche planifiée le fait aussi**.

## Deux modes de création

**Mode 1 : création en langage naturel dans la conversation** (recommandé)

Dites simplement l'heure + la tâche dans la conversation ; l'IA déduit fréquence, horaire et contenu, sans expression cron. Ces formulations sont reconnues :

```text
Toutes les 3 heures...
Le dernier jour ouvré de chaque mois...
Le mardi et le jeudi à 14 h...
```

**Mode 2 : création manuelle dans le panneau**

Navigation de gauche « Tâches planifiées » → « + Nouvelle tâche planifiée » en haut à droite → renseignez → enregistrer pour appliquer.

## Six périodicités

| Fréquence | Adapté à |
| --- | --- |
| Ponctuelle (une fois, à date et heure fixées) | Préparation de réunion, contrôle d'échéance, envoi différé |
| Par intervalle (toutes les N heures/jours) | Veille de prix, sondage d'avancement |
| Toutes les heures | Alertes, inspection de services |
| Chaque jour | Journal du matin, rapports de données |
| Chaque semaine | Brouillon du rapport hebdomadaire, veille concurrentielle |
| Chaque mois | Analyse mensuelle, synthèse de factures |

Autres réglages : nom de la tâche, prompt, dossier de travail (optionnel, à préciser de préférence pour un contexte stable), pièces jointes (optionnelles).

## Gestion et débogage

- Commutateur en haut à gauche de la carte pour activer/désactiver ;
- Menu « ... » : **Exécuter maintenant** (débogage ou rattrapage) / Supprimer / Modifier ;
- Statut dans l'historique d'exécution : réussite / en cours / échec.

## Limites à connaître absolument

1. **Planification par le client bureau local** : l'heure suit le fuseau de votre ordinateur ; **mise en veille ou extinction = pas de déclenchement** — pour les tâches importantes, activez « Garder le système en éveil » (commutateur en haut à droite de la page des tâches planifiées) ;
2. **Les tâches manquées ne sont pas rattrapées automatiquement** ; utilisez « Exécuter maintenant » dans l'historique ;
3. Chaque exécution crée une conversation indépendante et **consomme des Credits comme une conversation manuelle** ;
4. Prérequis des tâches d'automatisation navigateur : connecteur navigateur activé et Chrome en cours d'exécution ; une session expirée sur le site cible provoque l'échec.

## Liste de rédaction du prompt de tâche planifiée

Une conversation sans surveillance : plus le prompt est détaillé, plus c'est stable :

- [ ] Source de données explicite (quel fichier / quelle page / quel système)
- [ ] Format de sortie et emplacement explicites (« sortie Markdown dans le dossier reports/ »)
- [ ] Critère de jugement explicite (« passer en rouge si la baisse dépasse 20 % »)
- [ ] Traitement d'anomalies explicite (« si les données sont vides, produire une explication, pas du remplissage »)
- [ ] **Dérouler d'abord une fois à la main, régler le prompt, puis figer**

Un modèle complet :

```text
Nom de la tâche : journal des opérations du matin
Horaire : 9 h00 chaque jour ouvré
Prompt : lis le fichier de données d'exploitation de la veille dans data/ et génère le journal du matin :
1. Synthèse des indicateurs clés (chiffre d'affaires, commandes, taux de remboursement), avec évolution
2. Les indicateurs variant de plus de ±20 % passent en jaune avec une cause possible si elle est dans les données, sinon « à vérifier »
3. Sortie Markdown enregistrée dans reports/{date}-journal.md, et notification dans le « groupe opérations » DingTalk
```

La notification IM suppose les [canaux IM](/fr/qoderwork/07-im-channels) configurés — tâche planifiée + IM est la combinaison en or de l'automatisation QoderWork.

Usages avancés (transformer « déroule-moi ça » en déclenchement d'une phrase) dans [le cas du journal e-commerce](/fr/qoderwork/case-browser) et [Créer des Skills en conversation](/fr/qoderwork/adv-skill-create).
