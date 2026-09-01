# Partenaire de travail ou escouade de travail ?

En découvrant « partenaire de travail » et « escouade de travail », tout le monde se pose la même question : les deux savent prendre des tâches, pourquoi deux fonctions ? Les descriptions officielles n'éclairent rien ; testons donc directement avec **deux situations fréquentes au travail** :

- première situation : un bilan d'août à partir d'un relevé de ventes détaillé ;
- deuxième situation : un Brief produit à transformer en ensemble de contenus publiables pour le Compte officiel WeChat, Xiaohongshu et le groupe WeChat Work.

La conclusion d'abord : **une tâche portée par un rôle professionnel précis — analyse de données, création de PPT, recrutement — va à un « partenaire de travail » ; une tâche qui traverse planification, rédaction, design et relecture, plusieurs étapes à la chaîne, va à une « escouade ».**

## Départager les quatre options en 30 secondes

| Ce que vous avez sous la main | La meilleure approche | Exemples |
| --- | --- | --- |
| Une question ponctuelle, une phrase à retoucher | Ouvrir une nouvelle tâche | Réviser un e-mail, dresser un plan |
| Une méthode fixe à réutiliser souvent | Un Skill | Rapport hebdo à format fixe, style de marque uniformisé |
| Un rôle professionnel qui prend la tâche de bout en bout | Partenaire de travail | Analyste de données, expert en création de PPT |
| Plusieurs rôles avec des dépendances entre eux | Escouade de travail | Lancement produit, campagne marketing, matrice de contenus |

L'entrée se trouve à gauche dans « Skills · Connecteurs · Partenaires », onglet « Partenaires · Escouades ». Un repère pratique : seules les cartes marquées « escouade de travail » sont collaboratives ; la plupart des autres cartes sont des partenaires individuels.

## Premier cas : trouver un partenaire expert qui mène la tâche jusqu'au bout

Le bilan de ventes, cas le plus courant : la matière est un CSV de 8 lignes (date, ville, canal, produit, chiffre d'affaires, remboursements, nombre de commandes) ; on choisit « analyste de données » — parce que toutes les actions clés de la tâche tiennent dans un seul périmètre professionnel : contrôler les données, calculer les indicateurs, repérer les anomalies, proposer des recommandations.

N'écrivez pas « aide-moi à analyser » dans le prompt : trop vague, le résultat sera probablement inutilisable. Copiez directement la version ci-dessous en remplaçant le nom de fichier et le mois :

```text
【Note sur la matière】Téléversez votre propre relevé de ventes, ou remplacez le nom de fichier ci-dessous par le fichier réel.

Je suis le responsable commercial et je dois faire le bilan des ventes d'août 2026. Lis le fichier 《releve-ventes.csv》 que j'ai téléversé.

Traite selon la méthode professionnelle de l'analyste de données :
1. Contrôle d'abord les champs, les valeurs manquantes, les doublons et les anomalies manifestes, sans modifier le fichier d'origine.
2. Calcule le chiffre d'affaires, les remboursements, le chiffre net, le taux de remboursement et le nombre de commandes, avec une ventilation par ville, canal et produit.
3. Dégage les 3 problèmes qui méritent le plus d'attention, chacun étayé par des preuves chiffrées et le périmètre de jugement retenu.
4. Propose des actions pour septembre, chaque recommandation rattachée aux chiffres précédents.
5. Fais pour finir une vérification des chiffres ; marque « à confirmer » ce qui ne peut pas être établi.

Livrable final : un rapport d'analyse Markdown téléchargeable, avec contrôle de qualité des données, indicateurs clés, diagnostic des anomalies, recommandations d'action et grille de validation.

Génère uniquement de nouveaux fichiers ; ne modifie pas les données d'entrée ; rien à téléverser ni publier.
```

Dans ce prompt, trois choses comptent particulièrement :

1. **Écrire noir sur blanc « comment calculer, quoi regarder »**, pour éviter que le modèle change de règle tout seul ;
2. **Exiger une preuve chiffrée derrière chaque jugement**, pour limiter les conclusions vagues ;
3. **Graver dans le marbre « ne pas modifier le fichier d'origine, ne rien téléverser, ne rien publier »**, pour éviter qu'il fasse un pas de trop.

### Le fichier local est illisible : que faire

Un piège très concret : si l'on donne au départ un chemin local Mac, le partenaire tourne dans son propre environnement, ne peut pas le lire et s'arrête pour réclamer le fichier. **Le plus fiable est de téléverser directement le CSV** ; pour un tout petit fichier, vous pouvez aussi coller le contenu brut dans « informations complémentaires » pour continuer.

### Ce qu'il a livré

Avec ces 8 lignes, l'analyste de données a produit : chiffre d'affaires total 775 000 yuans, remboursements totaux 36 000 yuans, chiffre net 739 000 yuans, 266 commandes, taux de remboursement global 4,65 % ; il a signalé un taux de remboursement de 13,64 % à Pékin et un taux supérieur sur les cartes trimestrielles que sur les cartes annuelles, et a consigné dans les limites « volume de données très faible, données manquantes les 30 et 31 août ». Le fichier d'origine est resté intact.

La valeur du partenaire de travail est là : vous confiez la tâche à un rôle qui connaît le métier, il applique des méthodes éprouvées et revient vers vous quand il lui manque de la matière.

## Deuxième cas : la tâche traverse plusieurs métiers, passez à l'escouade

Montons en difficulté : lancer un assistant AI de réunion appelé « QingHuiJi », avec seulement un Brief produit, et produire trois textes — Compte officiel WeChat, Xiaohongshu, groupe WeChat Work — plus des supports visuels, un calendrier sur 3 jours et une liste de risques.

Confier une telle tâche à une seule personne donnerait des textes, certes, mais les faits, les différences entre plateformes et la cohérence visuelle seraient vite sacrifiés. Direction donc le marché, pour chercher « escouade de création de contenus à fort impact ». Une fois l'escouade convoquée, le prompt doit préciser : **d'abord la répartition des rôles, puis le travail** :

```text
【Note sur la matière】Téléversez votre propre Brief produit, ou remplacez le nom de fichier ci-dessous par le fichier réel.

Nous allons lancer un assistant AI de réunion ; lis le fichier 《brief-lancement-assistant-reunion.md》 que j'ai téléversé.

L'escouade produit en collaboration le pack de contenus de lancement. Avant l'exécution, dis-moi d'abord :
1. quels rôles participent ;
2. ce dont chaque rôle est responsable, quelle entrée il utilise, ce qu'il livre ;
3. qui unifie les faits, qui fait la relecture finale ;
4. quelles informations tu attends de moi.

Répartition confirmée, produis ensuite :
- un fil narratif unique ;
- un texte modifiable pour chacun des trois canaux : Compte officiel WeChat, Xiaohongshu, groupe WeChat Work ;
- une liste de supports visuels ;
- un calendrier de publication sur 3 jours ;
- une liste de vérification des faits et de risques.

Tous les faits viennent exclusivement du Brief. Conserver impérativement « essai de 14 jours », « 50 premières équipes » et les limites actuelles du produit ;
ne pas inventer de cas clients, de chiffres ou de témoignages d'utilisateurs.
Générer uniquement des brouillons locaux ; pas de publication automatique, aucun message envoyé.
```

L'escouade a d'abord proposé quatre rôles :

| Rôle | Responsable de |
| --- | --- |
| Directeur de création (chef d'équipe) | Unifier les faits, faire l'examen final de cohérence et la relecture |
| Planificateur marketing à fort impact | Calendrier sur 3 jours et liste des risques |
| Expert en création de contenus à fort impact | Fil narratif et textes modifiables pour les trois plateformes |
| Illustrateur AI | Une fois le fil narratif arrêté, visuel principal et liste de supports visuels |

Le planificateur et l'expert contenus peuvent démarrer en parallèle ; l'illustrateur attend le fil narratif ; le directeur de création assemble et contrôle tout à la fin. La liste des tâches montre l'état de chaque sous-tâche : qui est en cours, qui attend un livrable en amont — c'est bien là la différence de fond entre une « escouade » et un « partenaire ».

### Avant de lancer l'escouade, mieux vaut compléter ces points

L'escouade a posé 6 questions à partir du Brief : date de départ, style visuel, noms des comptes, slogan de marque, modalité pour rejoindre les premières équipes. Répondez ainsi :

```text
Répartition confirmée, continue l'exécution.

Le calendrier démarre le 1er septembre ; visuel sobre bleu-gris technologique ; pas de slogan existant ;
ne pas mentionner les noms des comptes dans les textes ; marque « à confirmer » pour les modalités des « 50 premières équipes », sans rien inventer.

Conserver l'essai de 14 jours, les 50 premières équipes et les limites actuelles du produit.
Ne pas inventer de cas clients, de chiffres de temps gagné ni de promesse de précision à 100 %. Brouillons locaux uniquement ; pas de publication, aucun message envoyé.
```

Quand une information manque, écrivez simplement « à confirmer ». Deviner un QR code, une URL ou une modalité d'inscription pour remplir le texte, c'est l'assurance de reprises ultérieures.

### Première version défaillante : faites-la reprendre sur-le-champ

Problème typique intercepté ici : la première version de l'expert contenus se terminait par « tous les faits viennent du Brief », mais en remontant, il avait ajouté « 1 heure pour traiter une réunion de 30 minutes », « 4 à 5 réunions par semaine », « essai gratuit de 14 jours », et jouait le vécu avec un « les filles » — rien de tout cela dans le Brief. **Ne vous fiez jamais à la seule auto-déclaration du livrable : revérifiez vous-même.** Listez les problèmes un par un et faites régénérer :

```text
Supprime toutes les expériences personnelles et tous les chiffres absents du Brief, par exemple « 1 heure pour traiter une réunion de 30 minutes », « 4 à 5 réunions par semaine », « après essai, j'ai gagné beaucoup de temps », et remplace partout « essai gratuit de 14 jours » par « essai de 14 jours ».

Interdits : tournures feignant le vécu comme « les filles », et présenter comme confirmés des usages que le Brief ne précise pas.
Régénère les trois textes et fais pour chacun une auto-contrôle des faits, point par point contre le Brief.
```

Après reprise, le directeur de création a relancé une validation d'ensemble et livré les versions révisées des trois textes, 3 jeux de visuels principaux avec la liste des supports, le calendrier sur 3 jours et la liste des risques.

Une limite à signaler honnêtement : l'escouade n'a publié ni sur le Compte officiel WeChat, ni sur Xiaohongshu, ni en groupes, mais **la vue d'ensemble des livrables a été rangée dans Feishu Docs**. Quand la matière touche à la vie privée ou aux secrets d'affaires, demandez avant le lancement où tout est stocké et avec quels droits, et vérifiez après coup ce qui a réellement été généré.

## Deux parcours bouclés, quatre enseignements

1. Tâche concentrée sur un seul métier : privilégiez un **partenaire** de travail ;
2. Tâche qui traverse plusieurs métiers avec des dépendances : confiez-la à une **escouade** de travail ;
3. Un chemin de fichier n'existe que sur votre ordinateur ; si le partenaire ne peut pas le lire, **téléversez le fichier** ou collez-en le contenu ;
4. Écrivez clairement dans le prompt **la source des faits, le livrable et les limites d'action**, puis faites relire par le rôle responsable.

Avec le bon outil, le prompt n'a pas besoin d'être alambiqué. Précisez qui fait quoi, avec quelle matière, quel résultat, et ce qui est interdit : la tâche devient nettement plus stable.

Avant, un lancement produit faisait tourner une dizaine de pensées en même temps : qui écrit l'article, qui fait les visuels, comment adapter par plateforme, les chiffres sont-ils justes, qui boucle à la fin — en petite équipe, tout retombe sur la même personne, et le plus épuisant est de changer de casquette sans cesse. Là où partenaires et escouades aident vraiment, c'est qu'ils **remettent les responsabilités sur la table** : qui prend cette étape, qu'attend l'étape suivante, qui vérifie à la fin. Commencez par une vraie tâche aux limites nettes, faites-la tourner une fois : vous saurez naturellement, la prochaine fois, s'il faut appeler un partenaire ou monter une escouade.

---

Pour voir comment convoquer une escouade de zéro : [Pratique du multi-agent (escouade de travail) →](/fr/doubaowork/adv-multi-agent)
