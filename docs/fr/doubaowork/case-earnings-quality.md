# Résultats publiés : regarder d'abord la croissance, puis auditer sa qualité

> Contexte : le jour de la publication des résultats, on se laisse porter par la « croissance » — revenus en hausse, bénéfices en hausse, marge brute en mouvement : l'information semble abondante, mais deux ou trois postes seulement pesent vraiment sur le jugement. Plus gênant : le compte de résultat raconte bien, mais le tableau des flux de trésorerie et le bilan ne sont pas forcément d'accord ; en se limitant au résumé de performance, on prend facilement le bénéfice comptable pour de l'argent encaissé.

Ce chapitre utilise les résultats semestriels de Century Huatong pour capter les variations opérationnelles, puis CATL pour vérifier trésorerie, créances et qualité du bénéfice : la première moitié répond « que s'est-il passé », la seconde demande « cette croissance résiste-t-elle au recalcul ». Outil : le Skill « analyse de performance » (le Skill enclenche le flux d'analyse des résultats, mais cela ne dispense pas de recouper les chiffres avec le texte original).

## Premier niveau : repérer ce qui change vraiment le jugement

Ne vous précipitez pas sur « au-dessus des attentes » : identifiez d'abord l'identité du rapport, la période et les unités ; dates limites et bases de comparaison sont figées dès le départ :

```text
Utilise la capacité d'analyse de performance pour analyser le « rapport semestriel 2026 »
de Century Huatong 002602, officiellement publié le 28 août 2026.
La mission se limite au rapport rendu public le 28 août.

Confirme d'abord le nom du rapport, la période, la date de publication, le code titre
et le lien original vers CNINFO ou la Bourse de Shenzhen.
Puis compare à la même période du rapport semestriel 2025 : extrais revenus d'exploitation,
bénéfice net attribué, bénéfice net hors éléments non récurrents, flux de trésorerie
d'exploitation, marge brute, dépenses de R&D, activité jeux, activité pièces automobiles,
revenus domestiques et internationaux, et proposition de dividende semestriel.
Chaque chiffre précise période, unité, variation annuelle et page source ; les champs non
publiés seront notés « non publié », sans compléter par zéro.

Regroupe les variations en quatre blocs : échelle, qualité de la rentabilité, structure
d'activité, trésorerie et rendement actionnarial.
Signale au moins trois variations qui changent vraiment le jugement, chacune avec une
preuve à l'appui, une contre-interprétation possible et le prochain document à vérifier.
N'utilise pas l'étiquette « au-dessus des attentes » sans source traçable.

Génère enfin century-huatong-2026S1-variations-cles.md avec carte d'identité du rapport,
tableau comparatif des indicateurs clés, quatre groupes de variations, table de revue
des sources, trois questions à valider et liste de contrôle pour le lecteur.
Pas d'objectif de cours, pas de notation, pas de recommandation d'achat ou de vente.
```

Quatre garde-fous : uniquement les matériaux datés du jour de publication ou avant ; comparaison à même période (2026S1 uniquement contre 2025S1) ; pas de zéro pour les champs non publiés ; aucun objectif de cours ni conseil de transaction.

**Identifiez le rapport avant de parler de croissance** : en test, le nom du rapport, la période, la date de publication, le code titre et le PDF original CNINFO (rapport semestriel non audité) ont d'abord été confirmés — la carte d'identité bouclée, la comparaison dispose d'une base commune. Puis les indicateurs clés : revenus d'exploitation 22,117 milliards de yuans (+28,53 %), bénéfice net attribué 4,503 milliards (+69,51 %), bénéfice hors non-récurrents 4,303 milliards (+66,40 %), flux de trésorerie d'exploitation 4,497 milliards (+14,78 %).

Ne vous arrêtez pas à « revenus et bénéfices en hausse » : la marge brute gagne 3,19 points, mais **le taux de frais de vente grimpe aussi de 4,08 points** ; les frais administratifs baissent et les frais financiers deviennent négatifs, ce qui pèse aussi sur la croissance du bénéfice. Pour les ventilations par secteur, produit et région, utilisez les tableaux originaux du rapport pour éviter de confondre les chiffres « par secteur » et « par produit » ; la croissance de la trésorerie d'exploitation est plus lente que celle du bénéfice ; le dividende semestriel reste une **proposition du conseil d'administration**, pas un fait accompli.

**Quatre groupes de variations valent mieux qu'un paragraphe « grande performance »** : échelle / qualité de la rentabilité / structure d'activité / trésorerie et rendement actionnarial — pour ne pas amalgamer une dizaine d'indicateurs en un verdict global. Chaque jugement garde sa contre-interprétation : « la part des revenus internationaux monte » n'a pas été écrite comme une bonne nouvelle directe, mais assortie d'une preuve (tableau par région), d'une contre-interprétation (change, cycle de vie d'un succès) et des matériaux suivants (données régionales du T3, classements de chiffre d'affaires, dates de lancement des nouveaux jeux).

## Deuxième niveau : bénéfice en hausse — voir où est passée la trésorerie

Pour juger de la qualité de la croissance, placez trésorerie d'exploitation, créances, stocks et dettes contractuelles dans le même tableau :

```text
Utilise les trois derniers rapports annuels de CATL 300750 déjà publiés au 28 août 2026
ainsi que le dernier rapport périodique, et contrôle sa qualité financière.

Compare revenus d'exploitation, bénéfice net attribué, bénéfice hors non-récurrents et
trésorerie d'exploitation. Vérifie ensuite stocks, créances clients, dettes contractuelles,
dépenses d'investissement, amortissements, R&D, subventions et éléments non récurrents.

Dans les tableaux, conserve chiffres bruts, période, unité, page, formule et résultat.
Recalcule au minimum : adéquation trésorerie d'exploitation / bénéfice net, écart de
croissance créances vs revenus, écart de croissance stocks vs revenus.
Arrête la comparaison et explique en cas de périmètres inter-périodes incohérents.

Pour chaque anomalie, donne deux interprétations et la prochaine piste de vérification.
Produis table de contrôle de qualité financière, preuves à l'appui, contre-preuves et
questions à soumettre à la direction. Ne conclus pas sur l'ensemble de la société avec
« excellent », « bon » ou un simple ratio.
```

Cette tâche étant complexe, Doubao Work la délègue à un Agent « organisationnel » — plusieurs sous-agents coordonnés pour la découper, livrant rapport Markdown, table Excel de contrôle et rapport de vérification indépendant.

### Formule juste, unités encore faillibles

Envoyez ensuite le prompt de recontrôle des formules :

```text
Revérifie tous les indicateurs auto-calculés des tableaux précédents. Écris, poste par
poste, les chiffres bruts injectés dans la formule, la période, l'unité et la page source,
recalcule et marque conforme ou non. Tout chiffre manquant, de périmètre différent ou de
page incertaine : stoppe le calcul, sans boucher avec zéro ou estimation.
```

Après recontrôle, 40 ratios, 30 taux de croissance et 4 écarts restent conformes — mais **cela ne vaut pas validation du rapport entier** : un second tour d'audit détecte ensuite deux erreurs de conversion d'unité — le rapport original publie en « milliers de yuans », et la conversion en « centaines de millions » a utilisé un facteur erroné, gonflant dix fois deux montants absolus. Le fichier final conserve un journal de corrections : quel montant corrigé, ancienne et nouvelle valeur, quels paragraphes affectés.

### Unités et formules unifiées, recalcul depuis zéro

```text
Conformément aux deux problèmes « conversion milliers → centaines de millions gonflée
d'un facteur 10 » détectés par la vérification indépendante, recalcule intégralement le
rapport de qualité financière de CATL et sa table de contrôle, avec un recalcul complet.

Liste d'abord : champs erronés, chiffre d'origine, unité d'origine, conversion erronée,
chiffre correct, unité correcte, page source et conclusions affectées.
Vérifie ensuite tous les chiffres inter-périodes, unifie les unités (dizaines de milliers,
milliers, centaines de millions, pourcentages) ; toute période, convention comptable ou
page incohérente : stoppe la comparaison. Recalcule l'adéquation trésorerie/bénéfice,
l'écart créances/revenus et l'écart stocks/revenus, avec chiffres injectés et formules
pour tous les indicateurs auto-calculés.

Enregistre sous nouveaux catl-rapport-qualite-financiere.md et catl-table-controle.xlsx,
en conservant la version précédente pour comparaison. Rouvre le nouveau fichier et audite
formules, unités, valeurs vides et références inter-tables : le nombre d'erreurs doit être
zéro ; sinon, pas de fichier final, on recalcule.
Donne enfin la liste des révisions, la liste des recalculs, les éléments restés non
comparables et l'accès aux deux nouveaux fichiers.
Pas de notation de société, pas de jugement sur le cours.
```

Ouvrez la version finale : les deux premiers écrans figent période et chiffres bruts (mélanger une seule fois yuans, dizaines de milliers et centaines de millions fausse tous les ratios qui suivent) ; au centre, bénéfice, trésorerie d'exploitation et créances côte à côte (**des trajectoires divergentes entre les trois sont précisément ce qu'il faut creuser**) ; en fin, formules, anomalies et documents à recouper — le dossier n'est validé que si une autre personne peut le recalculer.

## Le point d'arrivée : des questions plus précises

Ce processus ne s'arrête pas à « combien ont crû revenus et bénéfices » ; il poursuit : de quelle activité vient la croissance, la trésorerie est-elle rentrée au même rythme, pourquoi créances et stocks bougent, unités et périodes sont-elles cohérentes, les explications de la direction trouvent-elles des preuves dans les états financiers. À la lecture des résultats, l'output vraiment utile n'est pas une page de résumé, mais **une liste de questions aux périmètres unifiés, prêtes pour la vérification suivante**.

---

Suivant :[Étudier une société pour la première fois : du modèle économique aux huit questions clés →](/fr/doubaowork/case-first-company)
