# Approfondissement : gestion des modèles et pièges des crédits

TraeWork facture en « crédits », et le choix du modèle influe directement sur la vitesse de consommation. Ce chapitre rassemble en une carte anti-pièges les points les plus piégeux de la documentation officielle de facturation.

> Documentation officielle : [work_models](https://docs.trae.cn/work_models) ｜ [ide_plans-and-billing](https://docs.trae.cn/ide_plans-and-billing). **Prix et offres au 31-08-2026 ; se référer aux informations à jour sur [trae.cn/pricing](https://www.trae.cn/pricing).**

## Deux types de crédits, à bien distinguer

| | Crédits généraux | Crédits Work dédiés |
| --- | --- | --- |
| Périmètre | TraeCode + TraeWork | **TraeWork uniquement** |
| Origine | Abonnements Pro / Pro+ / Ultra, achats complémentaires, packs d'inscription, pointages, etc. | Abonnement Lite, pack d'inscription, pointage quotidien, parrainage |

Points clés des règles de consommation :

- Seuls les appels aux **modèles intégrés TRAE** consomment des crédits ; les modèles personnalisés n'en consomment pas ;
- Ordre de consommation dans TraeWork : **priorité à l'échéance la plus proche → à échéance égale, Work dédié avant général → crédits bonus avant crédits d'abonnement** ;
- Seed-2.1-Turbo et Seed-Code sont facturés à 75 % de remise (inclus dans toutes les offres).

## Aperçu des offres (version Chine)

| | Lite | Pro | Pro+ | Ultra |
| --- | --- | --- | --- | --- |
| Un mois | 49 ¥ | 99 ¥ | 239 ¥ | 699 ¥ |
| Abonnement continu | 45 ¥ (1er mois 9,9 ¥) | 89 ¥ (1er mois 59 ¥) | 219 ¥ | 629 ¥ |
| Crédits/mois | 2000 Work dédiés | 4000 généraux | 12000 généraux | 40000 généraux |
| Exécutions cloud parallèles | 2 | 10 | 10 | 20 |

Utilisateurs gratuits : 500 crédits généraux par connexion mensuelle + 200 crédits Work dédiés par pointage quotidien + pack de 2000+2000 à l'inscription.

**Pièges** :

1. **Lite ne donne que des crédits Work dédiés** — si vous programmez aussi sur TraeCode, vous constaterez qu'ils ne servent pas de ce côté-là : passez directement à Pro ;
2. Les crédits achetés en complément (50 ¥/1000) sont tous généraux et **réservés aux abonnés payants** ; après expiration de l'abonnement, les crédits complémentaires encore valables restent utilisables ;
3. **Pas de rétrogradation** ; il faut attendre la fin de la période pour passer à une offre inférieure ; le surcoût d'upgrade est calculé au prorata de la partie non consommée ;
4. Les échecs dus à un blocage de mots sensibles, à une erreur du modèle sous-jacent ou à une boucle infinie sont remboursés en crédits ; les erreurs locales (disque plein, etc.) non.

## Quel modèle choisir

Modèles intégrés au mode Work (extraits) : Seed-2.1-Pro / Seed-2.1-Turbo, GLM-5.3 / GLM-5.2, DeepSeek-V4-Pro / V4-Flash, Kimi-K3 / K2.7-Code, MiniMax-M3, Qwen3.8-Max, etc. Les modèles phares marqués `*` sont réservés aux abonnés Pro+ / Ultra / Express.

Stratégies pratiques :

- **Tâches courantes** : Auto Mode par défaut (choisit le modèle selon vitesse, performance et ressources) ou un modèle standard ;
- **Économie en volume** : Seed-2.1-Turbo (75 % de remise) + des instructions claires et concises (moins de tokens, moins de consommation) ;
- **Livrables importants** : basculez sur un modèle phare pour les rapports clés et les analyses complexes ; bien fait une fois coûte moins que des allers-retours.

## Brancher vos propres modèles (sans consommer de crédits)

Paramètres > Modèles > « Ajouter un modèle » (**version bureau uniquement**, et les modèles personnalisés ne fonctionnent qu'en environnement local) :

1. Choisissez un fournisseur prédéfini (facturation à l'usage / Coding Plan / Agent Plan) ou « Modèle personnalisé » ;
2. Format d'API au choix : **format OpenAI Chat Completions** (compatible OpenAI, DeepSeek, Kimi, GLM, OpenRouter, etc.) ou **format Anthropic Messages** (famille Claude) ;
3. Renseignez l'URL de l'API, l'ID du modèle et la clé ; le système valide ;
4. Réglages avancés optionnels : fenêtre de contexte, tours d'appel d'outils, support des images, mode réflexion, Temperature, etc.

Combinaisons courantes : Claude-4 = format Anthropic + série Claude-4 ; GPT-5 = format OpenAI + série GPT-5 ; GLM/DeepSeek/Kimi = format OpenAI + série correspondante.

> La clé ne se renseigne que dans les paramètres du client ; ne l'écrivez jamais dans une instruction de tâche ni dans un fichier partagé.

## Liste d'habitudes pour économiser les crédits

- [ ] Une tâche, un sujet ; ouvrez une nouvelle tâche pour un sujet sans rapport (évite de rejouer l'ancien contexte)
- [ ] Déroulez d'abord le flux avec un modèle bon marché, et ne basculez sur un modèle phare qu'à la dernière étape de finition
- [ ] Précisez le format de sortie dans l'instruction pour réduire les allers-retours
- [ ] Pour un long document, demandez d'abord l'outline à l'IA, validez, puis demandez le texte complet
- [ ] Avant de planifier une tâche, validez-la une fois manuellement pour éviter les échecs répétés en mode sans surveillance qui brûlent les crédits
