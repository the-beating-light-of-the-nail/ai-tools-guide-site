# Partir d'un graphique en chandeliers et mener une revue d'investissement fondée sur des preuves

> Contexte : un graphique en chandeliers déclenche vite des jugements — « tendance haussière, cassure en volume, stabilisation après repli » s'écrivent vite, mais débordent parfois ce que l'image seule peut prouver. Transformer une capture d'écran en revue d'investissement où **chaque phrase a un appui chiffré** : voilà le travail d'un agent.

> ⚠️ Tout le contenu de ce chapitre est fourni à titre d'étude et d'échange uniquement, sans aucune recommandation d'investissement.

Ce cas montre un flux d'agent complet : **reconnaissance visuelle par VLM → appel automatique d'outils spécialisés → débat approfondi multi-rôles → sortie d'un rapport structuré**, les quatre maillons sans aucune bascule manuelle d'outil.

## Étape 1 : lire le graphique · le VLM décode les chandeliers

Téléversez une capture quotidienne en chandeliers d'une action A nettement configurée techniquement, avec MACD :

```text
J'ai téléversé le graphique quotidien en chandeliers d'une action A et son indicateur
technique (MACD). Agis en analyste technique professionnel et :
1. Identifie le titre : de quelle action s'agit-il ? Ordre de grandeur du cours actuel ?
2. Analyse de la configuration : quelle figure récente ? Comportement précis des
   5 dernières séances ?
3. Moyennes mobiles : disposition de MA5/MA10/MA20, croisement doré ou mort récent ?
4. MACD : position relative DIF/DEA, tendance des histogrammes, divergence ou non ?
Produis une lecture technique rapide, tableau + texte.
```

Reconnaissance d'une justesse frappante : disposition haussière des moyennes correcte, signaux MACD justes, jusque dans les longues ombres supérieures — une capture mobile suffit à extraire une lecture technique complète.

## Étape 2 : mobiliser les renforts · brancher les fondamentaux

Téléversez ensuite une capture des données financières du titre :

```text
Voici une capture des derniers résultats financiers du même titre. Maintenant :
1. Identifie d'abord tous les indicateurs financiers de la capture
2. Puis combine avec l'analyse technique du premier tour pour une analyse complète
   de l'action A :
   - Bilan technique (K chandeliers, moyennes mobiles, MACD, KDJ → biais directionnel)
   - Bilan fondamental (croissance du chiffre d'affaires, rentabilité, valorisation)
   - Observation des flux (tendance des volumes)
   - Notation globale : recommandation forte / recommandation / neutre / prudent / éviter
3. Recommandations opérationnelles court terme (1-2 semaines) et moyen terme (1-3 mois)
4. Repère clairement supports et résistances majeurs
Présente le tout au format d'un rapport d'analyse professionnel.
```

Il mobilise automatiquement un Skill d'analyse d'actions A : notation globale, supports et résistances, recommandations court et moyen terme, avec tableaux, points clés et conclusions bien étagés.

## Étape 3 : le comité · le conseil privé de quatre conseillers

L'étape décisive du flux, en une seule relance :

```text
Analyse très professionnelle ! Mais j'hésite encore sur ce titre.
Lance maintenant un conseil privé : je convoque quatre conseillers pour débattre
de l'intérêt d'investir dans cette action :
- Buffett : angle valeur (valeur intrinsèque, douves, marge de sécurité)
- Musk : angle tendances technologiques et innovation de rupture
- Bill Gates : angle modèle économique et paysage sectoriel
- Jobs : angle puissance produit et expérience utilisateur
Règles du débat :
1. Chaque conseiller expose d'abord sa position indépendamment
2. Puis phase de contre-interrogatoire : chacun challenge les positions des autres
3. Chacun conclut en une phrase : « acheter / conserver / vendre »
4. Toi, animateur du conseil, synthétise les quatre avis en plan d'exécution final
Appuie le débat sur les données des deux premiers tours : que les conseillers parlent
avec des chiffres.
```

À noter : **personne n'a spécifié manuellement « appeler le Skill conseil privé »** — le modèle juge de lui-même l'outil et les données nécessaires à l'étape suivante, puis s'auto-ordonnance. C'est la valeur centrale d'un agent : au-delà de la réponse passive aux questions.

Les quatre conseillers virtuels défilent, et le point clé, c'est qu'ils **ne bavardent pas dans le vide** : chacun cite les vraies données des tours précédents. Buffett : « une bonne société, mais pas un bon prix » ; Musk rétorque « on ne conduit pas avec le rétroviseur » ; Gates apporte les chiffres du paysage sectoriel ; Jobs tranche par la compétitivité produit — ils s'engueulent, mais chaque phrase est adossée. Cette mise en scène « parler avec des données » exige du modèle **l'enchaînement multi-Skills, le passage de contexte entre Skills et le maintien de la cohérence des rôles** — un maillon faible, et tout lâche.

Le modèle fusionne enfin les quatre avis en rapport, et peut même appeler un Skill de mise en page magazine pour produire « un résumé d'une page (survol) + l'analyse détaillée (archivage) », avec avertissements de risque, plan opérationnel et sizing de position.

> Les Skills utilisés ici (analyse d'actions A, conseil privé, etc.) sont open source sur GitHub : [isjiamu/jiamu-skills](https://github.com/isjiamu/jiamu-skills). La même approche se transpose à toute plateforme d'analyse de titres, que Doubao Work prend également en charge.

---

Fin des scénarios financiers. Retour à la zone de référence :[Modèles de commandes courantes de Doubao Work →](/fr/doubaowork/ref-templates)
