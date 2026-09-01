# Chapitre 18 : Faire de l'analyse d'investissement un rituel quotidien

Investir est une activité à forte densité d'information, très structurée et entièrement tributaire du jugement : rapports financiers interminables, secteurs indéchiffrables, débats haussiers/baissiers sans fin. Or, organiser l'information fragmentée, décomposer des documents complexes et expliciter un raisonnement sont précisément ce que l'IA fait bien. Ce chapitre montre, sur une recherche d'action complète, quels travaux répétitifs et peu valorisants l'IA peut prendre en charge, pour rendre son temps au jugement lui-même.

> **Avertissement : tous les prompts, Skills et cas de ce chapitre visent l'« assistance à la recherche » et ne constituent aucun conseil en investissement. La Bourse comporte des risques ; investissez avec prudence.**

## D'abord, clarifier : quel rôle pour l'IA en investissement

La plupart des gens imaginent que « l'IA qui investit » prédit la hausse ou la baisse. Mais dans les usages réellement fréquents, la valeur se concentre sur quatre familles :

- résumer des rapports financiers que je n'arrive pas à finir ;
- démêler la logique d'un secteur trop complexe ;
- mettre les opinions haussières et baissières dans un seul tableau quand le marché bruisse trop ;
- chercher les contre-preuves, de peur de m'emporter.

Ces quatre usages ne prédisent rien : ils **réduisent le temps de réflexion de mauvaise qualité**. La place la plus raisonnable de l'IA en investissement est celle d'un assistant de recherche infatigable, sans émotion et disponible à volonté — il consolide les faits, le jugement reste le vôtre.

Avant de commencer, fixez le cadre avec les cinq questions, comme pour la [trilogie bureautique](/fr/workbuddy/case-office/) :

| Question | Ce qu'il faut préciser | Exemple |
| --- | --- | --- |
| Objectif | Quelle décision cette recherche doit-elle éclairer | Décider d'un ajout à la liste de veille, ou d'un ajustement de position immédiat |
| Valeur | Quelle société, quel secteur précisément | T&S Communications (300394), optical / CPO |
| Matériaux | Quelles sources font foi, lesquels ne sont que références | Rapport annuel, T3, études de courtiers font foi ; les forums servent uniquement de thermomètre d'humeur |
| Profondeur | Simple mise à plat des faits, ou jusqu'à la valorisation et aux scénarios | D'abord l'assise factuelle, puis une DeepResearch niveau due diligence |
| Validation | Comment juger le résultat utilisable | Chaque jugement traçable jusqu'à sa source, faits et opinions clairement distingués |

## La combinaison de Skills pour la finance

| Skill | Usage adapté | Emploi dans ce chapitre |
| --- | --- | --- |
| `stock-advisor` | Analyse de bout en bout d'une action | À partir d'une capture ou d'un code, enchaîne automatiquement technique, fondamental, recoupement, comité d'experts et mise en page |
| `a-share-analyst` | Séance quotidienne A-shares et sélection | Cotations en temps réel, indicateurs techniques, sélection quantitative, rapport quotidien |
| `financial-expert` | Requêtes et filtres de données financières | Sélection, indicateurs, séries macro/secteur, recherche d'études (dépend d'un MCP de données) |
| `peers-advisory-group` | Débat décisionnel multi-perspectives | Quatre « conseillers » débattent en croisé autour d'un sujet |

Logique d'association : **suivi quotidien et sélection en masse avec `a-share-analyst` et `financial-expert` ; travail approfondi et rapport complet sur une valeur avec `stock-advisor` ; pour sortir d'un angle unique et se forcer à voir l'envers, convoquez `peers-advisory-group`.**

## Une chaîne réutilisable de prompts de recherche

Classés du plus simple au plus élaboré, ils couvrent toute la chaîne, de « chercher » à « trancher ». Construisez d'abord l'assise factuelle avec les trois premiers, puis approfondissez. Mode d'emploi : remplacez les espaces réservés entre `【】` par votre valeur, puis collez et exécutez.

### Prompt 1｜Construire l'« assise factuelle » d'une société

Beaucoup de mauvais jugements naissent dès la première étape, en se trompant de métier — vous croyez qu'elle gagne de l'argent avec A, alors que le profit vient surtout de B. Cette étape comprime le coût de « clarifier les faits ».

```markdown
Dresse un état des lieux systématique de la société 【XXX】, avec un résumé structuré :
1) Activités cœur et principales gammes de produits
2) Composition des revenus et des profits
3) Principaux clients et cas d'usage
4) Position de la société dans la chaîne de valeur
5) Évolutions stratégiques majeures des dernières années

## Exigences :
- N'utiliser que des informations vérifiables
- 3 à 5 points par partie
- Aucun conseil d'investissement, uniquement une mise en ordre des faits
```

### Prompt 2｜Angle sectoriel : est-ce un « bon secteur »

Vous choisissez souvent moins une société qu'un secteur. L'IA excelle à la « remise à plat de premier principe » d'un secteur, mais n'attendez pas d'elle le point d'inflexion ou le plancher des prix.

```markdown
Sous l'angle de la recherche sectorielle, analyse le secteur 【XXX secteur】 de 【XXX société】 :
1) Phase du cycle (reprise / expansion / récession / dépression)
2) Offre-demande et principaux facteurs d'entraînement (capacités, taux d'utilisation, stocks, carnets/délais)
3) Mécanismes de formation des prix et volatilité historique (indices de prix/spreads/transmission des coûts, tendance Capex et capacités nouvelles)
4) Concentration et paysage concurrentiel du secteur
5) Variables externes clés (politique, technologie, macro)
Indique clairement : ce qui est structurel à long terme, ce qui est conjoncturel à court terme.
Rends : jugement sur la phase du cycle + liste des graphiques probants + 3 indicateurs avancés et 3 indicateurs retardés.
```

### Prompt 3｜Décomposition de l'activité : comment l'argent est-il réellement gagné

L'étape clé pour passer de « regarder l'entreprise » à « regarder le business ». Les sociétés hybrides (activité A, profits venant de B) se prêtent particulièrement bien à cet éclairage par l'IA.

```markdown
Sous l'angle 【investissement valeur / analyse fondamentale】, décompose l'activité de 【XXX société】,
question centrale : sur quoi cette société gagne-t-elle réellement et durablement de l'argent ?

## Exigences
- Uniquement sur informations vérifiables (rapport annuel, prospectus, publications périodiques, rapports sectoriels de référence)
- Distinguer explicitement 【faits】 et 【jugements】 ; tout jugement accompagné de preuves ou d'une chaîne logique

## Structure imposée
I. Conclusion en une phrase sur le « modèle de revenu » (50 caractères maximum)
II. Décomposition quantifiée de la structure d'activité : part de CA, marge brute et tendance de croissance par activité ;
    lesquelles pèsent le plus dans le profit ; existence d'un écart « activité principale ≠ cœur du profit »
III. Mécanisme de rentabilité : comment l'argent est encaissé (ponctuel/abonnement/réachat) ; où vont les coûts ; ce qui détermine la marge brute ;
    existence d'économies d'échelle
IV. Clients, canaux et pouvoir de fixation des prix : concentration client ; pouvoir de prix ; coûts de changement
V. Profits hors activité : quote-part de plus-values de participation/subventions/cessions d'actifs, impact sur la valorisation durable
VI. Stabilité et points de fragilité : quelles hypothèses, une fois rompues, invalident le modèle ;
    3 à 5 « indicateurs de surveillance clés » pour vérifier en continu la solidité du business
```

### Prompts 4-7｜Qualité financière, gouvernance, divergence de marché, fossé de valorisation

Les quatre étapes intermédiaires traitent chacune un problème précis, avec un gabarit semblable (exigences claires + recoupement + pas de conclusion) :

```markdown
Analyse la qualité financière de 【XXX société】 ces dernières années :
1) Adéquation entre revenus, profits et flux de trésorerie d'exploitation
2) Évolution des créances clients, stocks, actifs contractuels
3) Impact des produits non récurrents sur le profit
4) Points de risque financier à surveiller en priorité
## Principe : ne pas prévoir le cours, juger seulement de la « qualité » financière ;
recoupement forcé « profits vs flux de trésorerie » ; pour toute anomalie, hypothèse explicative et piste de vérification.
```

```markdown
Récapitule les principaux points de divergence du marché sur 【XXX société】 :
1) logique haussière centrale  2) logique baissière centrale  3) arguments majeurs de chaque camp
4) quelles divergences pourront être tranchées par les données futures  5) quelles sont les échéances de vérification clés
## Exigences : ne pas prendre parti ; aucun conseil d'investissement ; tout jugement vérifiable par des données ou événements futurs.
```

```markdown
Sous l'angle de l'investissement valeur, analyse le fossé concurrentiel (moat) de 【XXX société】, en citant obligatoirement les publications de la société ou des sources de référence :
pouvoir de fixation des prix, coûts de changement, effets de réseau/échelle, actifs immatériels, réaction concurrentielle — preuves dimension par dimension.
Rends : note d'intensité du moat (0-5) + tableau de preuves + points les plus érodables et indicateurs de surveillance.
```

### Prompt 8｜Le tout-en-un : une DeepResearch de niveau due diligence

Il compresse la logique des sept étapes précédentes dans un « rapport de due diligence investisseur » : séparation forcée faits/jugements, recoupement forcé, exploration forcée de la logique baissière et des cygnes noirs — pour contrer le **biais de confirmation**, l'erreur la plus humaine. Fonctionne bien dans tous les modes DeepResearch. Squelette :

```markdown
J'ai besoin d'un rapport de due diligence investisseur, valeur 【XXX】, style 【investissement valeur】, horizon 【moyen-long terme 1-3 ans】.

## Principes
1. Données financières sur la tendance 3-5 ans (CAGR), percentile de valorisation reconstitué sur 5-10 ans
2. Distinguer 【faits】 et 【jugements】, ces derniers fondés sur données vérifiables (rapport annuel, prospectus, courriers de régulateur)
3. Double vérification : recoupement « profits vs trésorerie » + comparaison « société vs pairs »
4. Pensée contre-intuitive : inclure obligatoirement la logique baissière et une exploration des risques cygne noir

## Phases d'analyse
Phase 1 Décomposition du modèle économique et du moat (activité bruyante mais profit accessoire ?)
Phase 2 Cycle sectoriel et offre-demande (stocks, taux d'utilisation, Capex à l'appui)
Phase 3 Déminage de la santé financière (ROE en décomposition DuPont, teneur en trésorerie, profit hors éléments non récurrents)
Phase 4 Gouvernance et allocation du capital (nantissement de titres, cessions d'actions, capacité d'allocation)
Phase 5 Logique de valorisation et antifragilité du risque (percentiles historiques, DCF inversé, angle baissier)

## Sortie
Notation feux tricolores (achat/surveillance/vente) + tableau des données financières clés + corps en cinq phases +
tableau de bord de valorisation + liste de surveillance (événement A qui renforce la thèse / donnée B qui se dégrade et invalide la thèse → sortie)
```

## Du prompt au Skill : comment `stock-advisor` a grandi

Huit prompts isolés sont efficaces, mais pour une recherche complète d'une valeur : il faut les enchaîner à la main, tout recommencer à chaque valeur, lire les données à l'œil, décider dans l'excitation et produire à la main. `stock-advisor` transforme cette chaîne **d'« un tas de prompts » en « un pipeline lancé en un clic »** :

![](/workbuddy/case-investment/assets/001_stock-advisor-overview_Lxy0b4axOo.png)

| Module | Ce qu'il fait | Conception clé |
| --- | --- | --- |
| ① Analyse technique | Reconnaît figures, moyennes mobiles, MACD depuis le graphique, recoupe avec les données de marché | Double voie image + données ; en cas de conflit, prime aux données avec écart signalé |
| ② Analyse fondamentale | Reconnaît les indicateurs clés du rapport financier, ajoute valorisation et comparaison sectorielle | Trois volets (technique/fondamental/flux) notés séparément, puis note globale |
| ③ Recoupement multidimensionnel | Recherche en ligne d'études, actualités sectorielles, presse, politique | Tout signal contradictoire signalé explicitement comme divergence |
| ④ Comité d'experts | Appelle `peers-advisory-group` : quatre conseillers débattent en croisé | Réutilise un Skill existant, institutionnalise la « quête de contre-preuves » |
| ⑤ Mise en page | Rapport structuré, converti en HTML / PDF style magazine, téléversable vers Feishu | Réutilise les Skills de mise en page et de document |

Il y a là la leçon la plus précieuse de la création de Skills : **réutiliser plutôt que réécrire**. Les scripts d'indicateurs techniques viennent de `a-share-analyst`, le débat décisionnel de `peers-advisory-group`, la mise en page de `magazine-layout` — très peu est réellement écrit from scratch. Pour un Skill complexe, traitez d'abord les capacités existantes comme des briques, complétez les manquantes, puis orchestrez le tout autour d'un fil conducteur.

Deux petits choix « produit » le distinguent encore : un profil créé au premier usage (aversion au risque, horizon, secteurs suivis, plafond de position, mémorisés) ; deux portes d'entrée pour un même pipeline (capture d'écran → reconnaissance d'image + vérification par les données ; code direct → pilotage par les données seules).

En une phrase : **compresser « une recherche d'action sérieuse » d'une demi-journée de travail manuel en une conversation.** L'humain passe de « transporteur et assembleur » à « décideur et contestataire ».

## En pratique : `stock-advisor` sur T&S Communications (300394)

La valeur choisie est T&S Communications (300394), optical / CPO. Le processus avance en trois temps : d'abord le graphique, puis le rapport financier, enfin un comité d'experts.

### Étape 1 : téléverser le graphique en chandeliers, demander une lecture technique express

```text
Je téléverse le graphique quotidien en chandeliers et l'indicateur technique (MACD) d'une action A-share. Agis en analyste technique professionnel :
1. Identifie l'action : laquelle est-ce ? Cours actuel approximatif ?
2. Analyse des figures de chandeliers : quelle figure récente ? Comportement des 5 dernières séances ?
3. Système de moyennes mobiles : disposition MA5/MA10/MA20, croisement doré ou mort récent ?
4. MACD : position relative DIF/DEA, tendance des histogrammes, divergence ?
Rends un rapport technique express combinant tableau et texte.
```

![](/workbuddy/case-investment/assets/003_image_CrgibiDW3o.png)

WorkBuddy identifie d'abord T&S Communications, cours autour de 368,70 yuans, puis livre une lecture structurée : MA5 > MA10 > MA20 en disposition haussière standard toujours en vague de hausse ; mais une longue marge haute du jour (pointe à 376,10, clôture 368,70), histogrammes MACD qui raccourcissent, biais trop ample ; soutien sur MA5 (347) / MA10 (319), résistance au plus haut du jour 376. À cette étape, il n'a rien prédit : il a structuré « ce qui se lit dans le graphique ».

![](/workbuddy/case-investment/assets/004_image_WX6WbFC9Oo.png)

### Étape 2 : ajouter les captures du rapport financier pour une analyse complète

```text
Je téléverse maintenant les données du T3 2025 et les prévisions de croissance annuelle. S'il te plaît :
1. Identifie d'abord tous les indicateurs financiers des captures
2. Combiné à l'analyse technique du premier tour, produis une analyse A-share complète :
   synthèse technique, synthèse fondamentale (croissance du CA, rentabilité, valorisation), observation des flux,
   notation globale (très recommandé/recommandé/neutre/prudent/à éviter)
3. Donne des recommandations à court terme (1-2 semaines) et moyen terme (1-3 mois)
4. Signale clairement les soutiens et résistances clés, au format d'une étude professionnelle.
```

![](/workbuddy/case-investment/assets/007_image_CScebfl1io.png)

Il identifie d'abord chaque indicateur (CA 3,918 milliards, +63,63 % sur un an, ROE 31,30 %, PE 146,70…), puis compose la note globale :

| Dimension | Note | Poids | Score pondéré |
| --- | --- | --- | --- |
| Technique | 4.0 / 5.0 | 25% | 1.00 |
| Fondamental | 4.5 / 5.0 | 30% | 1.35 |
| Valorisation | 2.0 / 5.0 | 25% | 0.50 |
| Flux | 4.0 / 5.0 | 20% | 0.80 |
| **Note globale** | — | — | **3.65 / 5.0** |

Note finale « recommandé », avec une conclusion très mesurée : **tendance medium term favorable (CPO très cyclique + forte croissance), mais valorisation à court terme surchauffée et hausse excessive ; ne pas courir après, attendre un repli pour se positionner.** Une valorisation trop chère est pénalisée dans la note globale — pas d'aveuglement bull parce que la croissance est belle.

![](/workbuddy/case-investment/assets/008_image_I6uBbecypo.png)

### Étape 3 : indécis ? Convoquer un comité d'experts

```text
Mais je reste indécis sur cette action. Lance un comité d'experts : quatre conseillers débattent de son intérêt d'investissement :
- Buffett : angle investissement valeur (valeur intrinsèque, moat, marge de sécurité)
- Musk : angle tendances technologiques et innovation de rupture
- Bill Gates : angle modèle économique et paysage sectoriel
- Jobs : angle puissance produit et expérience utilisateur
Déroulé : chacun expose d'abord son avis indépendant ; puis contre-interrogatoires croisés ; enfin chacun conclut en une phrase
achat/conserver/vendre ; toi, animateur, synthétises en plan d'exécution.
Appuie-toi sur les données des deux tours précédents, pour que les conseillers « discutent avec les chiffres ».
```

![](/workbuddy/case-investment/assets/011_image_LuArbEta0o.png)

Avant le comité, le système a actualisé les données en ligne (CA 2025 complet, repli séquentiel T1 2026, comparaison avec Innolight/Eoptolink) — le module de recoupement a fait passer le débat des captures aux derniers faits du web. Les quatre conseillers se sont divisés 2:2 : Buffett évite (« PE 142, marge de sécurité nulle »), Gates attend (« attendre un PE sous 60, ou un remplaçant mieux-disant »), Musk y va à fond (« le CPO est le moment iPhone des communications optiques »), Jobs conserve sous condition (« à condition que le FAU CPO se concrétise comme prévu au S2 2026 »).

L'animateur en tire enfin un **plan d'exécution par type d'investisseur**, adossé à des échéances de vérification :

| Type d'investisseur | Recommandation | Points d'exécution |
| --- | --- | --- |
| Investisseur valeur | Éviter résolument | Attendre PE < 40 |
| Investisseur croissance | Conserver possible, avec stop | Sous MA5 (347), alléger ; sous MA10 (319), tout vendre |
| Investisseur tendance | Participation prudente | Attendre un repli vers MA10 / MA20 |
| Investisseur agressif | Petite position d'essai | 30 % maximum ; sous 300 yuans, tout vendre |

![](/workbuddy/case-investment/assets/015_image_Y0yvbzLRto.png)

![](/workbuddy/case-investment/assets/016_image_DOOhbmIIeo.png)

Après la conversation, demandez-lui le rapport style magazine (PDF local ou téléversement vers Feishu). Rétrospectivement : `stock-advisor` a transformé huit prompts éparpillés en une recherche complète menée en trois tours — **graphique → rapport financier → comité → rapport** — et à aucun moment il n'a pris à votre place la décision décisive : acheter ou vendre.

## Erreurs fréquentes et limites d'usage

| Erreur fréquente | Pourquoi c'est une erreur | Bonne pratique |
| --- | --- | --- |
| Demander à l'IA des « points d'achat / de vente » | Elle n'a ni l'information complète en temps réel, ni la responsabilité de votre argent | L'employer pour les faits et les scénarios haussier/baissier ; trancher soi-même |
| Croire aveuglément aux chiffres lus sur une capture | La reconnaissance d'image se trompe, les périmètres comptables changent | Recouper les chiffres clés |
| Attendre d'elle le point d'inflexion sectoriel, le plancher des prix | Cela exige anticipation et expérience, hors de portée de l'IA | Lui faire lister « quels indicateurs avancés surveiller » ; surveiller soi-même |
| Ne lire que la logique haussière et s'emballer | Biais de confirmation ; l'IA amplifie votre ton | Utiliser les prompts de divergence et le comité d'experts pour forcer les contre-preuves |
| Prendre le rapport IA pour une base d'investissement | Le rapport est une aide à la recherche, pas un conseil | Conclusions indicatives ; décisions et risques vous appartiennent |
