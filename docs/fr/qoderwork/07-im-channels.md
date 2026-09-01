# Canaux IM : pilotage à distance depuis la fenêtre de chat

Une fois les canaux IM ouverts, QoderWork se branche sur vos outils de chat habituels. Le principe clé, en une phrase officielle : **« d'où ça vient, ça y retourne »** — un message envoyé par IM renvoie son résultat dans la même fenêtre ; les résultats des tâches créées sur le bureau restent sur le bureau, sans notification IM.

> Documentation officielle : [docs.qoder.com/zh/qoderwork/im-channels](https://docs.qoder.com/zh/qoderwork/im-channels)

## Connexion des sept plateformes

| Plateforme | Méthode de connexion |
| --- | --- |
| **DingTalk** | QR code pour enregistrer et lier l'application (le code peut être actualisé s'il expire) |
| **Feishu / Lark** | QR code : création automatique de l'application avec permissions et rappels d'événements |
| **WeChat** | Autorisation par QR code, « prêt à l'emploi » |
| **WeChat Work** | Liaison rapide (QR code recommandé) ou configuration manuelle (créer un robot dans la console d'admin, renseigner Bot ID et Secret) |
| **Slack** | Renseigner le Bot Token (commençant par xoxb-) + l'App-Level Token (commençant par xapp-) → tester la connexion |
| **WhatsApp** | Liaison par QR code depuis le téléphone |

## Politique d'accès : ouvert ou appairé

- **Mode ouvert** : tout le monde et tous les groupes peuvent dialoguer directement ;
- **Mode appairé** : une conversation n'est utilisable qu'après votre autorisation (par conversation : autorisée en privé, l'utilisateur peut dialoguer ; autorisé pour un groupe, tous ses membres le peuvent).

Pour un usage personnel, le mode appairé par défaut est recommandé — évite que des collègues sollicitent le robot à loisir et consomment vos Credits.

## Le bureau reste le centre de contrôle

Toutes les conversations IM apparaissent sur le bureau comme des **fenêtres de conversation indépendantes, à contextes totalement isolés**. Depuis le bureau, vous pouvez : suivre l'avancement, reprendre la main, ajuster la configuration MCP/Skill/connecteurs (effective pour toutes les conversations IM).

## /bind : router les messages vers une tâche précise

Depuis l'IM, gérez directement les liaisons de tâches par commande :

```text
/bind          voir la liste des tâches liables
/bind 2        lier la tâche numéro 2
/unbind        délier
```

Une fois liée, un message IM est transmis directement à la tâche, et les réponses se synchronisent en temps réel vers l'IM. Prérequis : canal IM ouvert + tâche existante côté bureau. L'ordre des messages est garanti : plusieurs envois successifs sont traités dans l'ordre, sans perte ni permutation.

## Types de messages pris en charge

Texte, images (OCR, remplacement d'arrière-plan), fichiers (PDF/Excel/PPT/Word/CSV/TXT, etc.), voix (reconnaissance automatique), transferts groupés, combinaisons image + texte — photographiez un contrat ou une note de frais, envoyez-les dans le chat, et c'est traité.

## Cinq scénarios typiques

| Scénario | Méthode |
| --- | --- |
| Dialogue léger depuis le mobile | Sur le trajet : « donne-moi les chiffres clés du devis région Est du dernier trimestre » |
| Traitement d'images et fichiers | Photographiez contrat/ticket et envoyez : « extrais clauses/montants clés, synthétise en tableau » |
| Délégation à distance | Depuis le téléphone, piloter l'ordinateur de la maison sur une longue tâche et récupérer le livrable |
| Notification planifiée | Tâche planifiée qui génère le journal → poussée automatique chaque matin à 9 h dans le groupe DingTalk (voir [Tâches planifiées](/fr/qoderwork/08-automation)) |
| Collaboration en groupe | @robot « résume les points et tâches discutés aujourd'hui dans le groupe » |

## Points d'attention

- « l'organisation d'appartenance » du groupe DingTalk doit correspondre à celle où le robot a été créé ;
- Après retour du mode ouvert au mode appairé, les utilisateurs non appairés auparavant doivent l'être de nouveau ;
- « Supprimer la configuration » efface toutes les informations ;
- Plusieurs canaux peuvent être ouverts simultanément, totalement indépendants, sans contexte partagé.

---

Étape suivante : [Tâches planifiées →](/fr/qoderwork/08-automation)
