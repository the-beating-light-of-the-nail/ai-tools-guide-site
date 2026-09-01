# Contrôle de l'ordinateur, du navigateur et limites de sécurité

Laisser l'IA piloter directement votre interface — remplir des formulaires, cliquer des boutons, parcourir des pages — est la capacité la plus puissante des IA à tâches, et celle qui exige le plus de garde-fous. Ce chapitre couvre l'activation, l'usage et le respect des limites de sécurité.

## Contrôle de l'ordinateur (Computer Use)

L'IA comprend et manipule l'interface de votre ordinateur avec votre autorisation. Cas d'usage : recherche et organisation d'informations, saisie de formulaires, saisie de données, traitement systématique selon un modèle, validation automatique après développement.

**Étapes d'activation** :

1. Paramètres > Contrôle de l'ordinateur → dans la zone « Activer le contrôle de l'ordinateur », cliquez sur « Installer » (le plugin s'installe et s'active automatiquement) ;
2. **macOS uniquement** : pour « Accessibilité » et « Enregistrement de l'écran », cliquez sur « Autoriser » et validez dans les réglages système (Accessibilité = simulation clavier/souris + lecture des éléments d'interface ; Enregistrement de l'écran = captures pour comprendre l'interface) ;
3. Redémarrez TraeWork pour appliquer. Windows ne demande aucune autorisation séparée.

**Réglages** : liste « Applications toujours autorisées » ; commutateur « Toujours autoriser à opérer les applications » (une fois activé, l'IA n'a plus besoin de confirmation pour chaque nouvelle application).

**Quatre modèles d'instructions officiels** (à copier tels quels) :

```text
① Remplir un formulaire : remplis le formulaire XX pour moi, puis reste sur la page de soumission en attendant ma confirmation, ne clique pas sur Envoyer.

② Remplir selon un modèle : copie le modèle template.docx, remplace [liste des champs] par les données du mois,
enregistre sous output/rapport-du-mois.docx, sans rien envoyer ni publier.

③ Vérifier un parcours : vérifie que le parcours « un utilisateur peut créer un compte et publier un article » fonctionne ;
en cas d'échec, arrête-toi et décris l'étape concernée, le message affiché et la procédure de reproduction, sans supprimer aucune donnée.

④ Développer et valider : développe la fonctionnalité XX, puis valide-la avec le contrôle de l'ordinateur ;
en cas d'échec, tu peux tenter une correction et revalider une fois ; si cela échoue encore, arrête-toi et explique pourquoi.
```

À noter : sur macOS, quand l'IA opère, un bandeau « TraeWork contrôle l'ordinateur » s'affiche ; évitez de lui disputer la souris pendant l'opération.

## Contrôle du navigateur

L'IA exécute automatiquement des tâches web via un navigateur. Deux modes :

| | Navigateur intégré | Navigateur externe |
| --- | --- | --- |
| Activation | Paramètres > Navigateur > activer « Autoriser l'IA à contrôler le navigateur intégré » | Installer l'extension Chrome Trae Work Browser Extension |
| Caractéristiques | Prêt à l'emploi, dans TraeWork | Réutilise votre Chrome connecté (conserve les sessions) |
| Adapté à | Recherche et vérification en environnement propre | Opérations nécessitant une session (extractions depuis des back-office, etc.) |

- Changement de navigateur par défaut : Paramètres > Général > Navigateur par défaut des tâches IA ;
- **Les tâches cloud utilisent toujours le navigateur intégré** ; la configuration du contrôle du navigateur ne s'applique qu'aux tâches locales ;
- Commutateur de capture automatique (Paramètres > Général) : les captures ne sont montrées que dans le fil de conversation et ne consomment pas de tokens.

## Ligne de sécurité : bac à sable et modes de permission

Avant de donner des droits d'opération à l'IA, comprenez les trois niveaux de protection de TraeWork. Paramètres > Approbation des permissions (bascule aussi accessible en bas à gauche de la zone de saisie) propose trois modes prédéfinis :

| Mode | Bac à sable | Contrôles de sécurité | Approbation |
| --- | --- | --- | --- |
| **Approbation manuelle** (par défaut) | Activé | Activés | Vous confirmez chaque action |
| **Approbation automatique** | Activé | Activés | Le LLM Guardian intégré décide |
| **Accès complet** | **Désactivé** | **Tous désactivés** | Les commandes s'exécutent directement sur la machine hôte ⚠️ |

Le **bac à sable** fournit aux commandes de l'agent un environnement d'exécution restreint qui empêche les accès fichiers non autorisés : macOS s'appuie sur sandbox-exec, Windows sur un SDK de bac à sable maison ; les tâches web tournent toutes dans des conteneurs sandbox isolés. Les tâches locales ne lisent par défaut que les répertoires système clés (`.git`, `.vscode`, etc.) et écrivent uniquement dans le répertoire du projet, les dossiers temporaires et les caches ; les commandes à haut risque (comme `rm -rf`) sont bloquées avec une alerte, au choix ignorer / mettre en liste blanche / exécuter cette fois dans le bac à sable.

**Conseils aux utilisateurs bureautiques** :

1. Restez en « approbation manuelle » au quotidien ; ne passez à l'approbation automatique que pour des tâches à faible risque bien rodées ;
2. N'utilisez « accès complet » que dans un environnement isolé (machine virtuelle / machine de test) — même règle pour le commutateur « accès complet » de l'assistant de bureau ;
3. Les opérations irréversibles (envoi d'e-mail, suppression de fichiers, commande d'achat) passent toujours par une confirmation humaine ;
4. CAPTCHA, SMS et reconnaissance faciale restent hors de portée de l'IA : reprenez la main manuellement.

## Mode confidentialité

Par défaut, vos conversations peuvent servir à l'analyse de données, à l'amélioration produit et à l'entraînement des modèles. Avec le mode confidentialité activé (Paramètres > Compte > Mode confidentialité), le contenu des conversations (extraits de code et sorties d'IA compris) n'est plus utilisé à ces fins.

Deux engagements officiels à retenir :

- **Que le mode confidentialité soit activé ou non, les fichiers des bases de code ne sont jamais utilisés pour l'analyse de données, l'amélioration produit ou l'entraînement des modèles** ;
- En exécution locale sur la version bureau, les vecteurs d'embedding calculés pour l'indexation du code sont téléversés temporairement, puis le texte en clair est définitivement supprimé.

---

Étape suivante, les études de cas : [Créer avec TraeWork une présentation digne d'être présentée →](/fr/traework/case-ppt)
