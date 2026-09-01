# Transcrire de longs contenus audio et vidéo, créer des sous-titres et des extraits

> Contexte : un collègue vous envoie un enregistrement de réunion, un replay de live ou une vidéo d'interview, en vous demandant de le mettre en forme et, au passage, de découper quelques passages publiable. Le plus épuisant, ce sont ces allers-retours incessants sur la timeline : un nom incertain, on rembobine ; une citation percutante, il faut retrouver le début et la fin ; et les sous-titres exigent de veiller aux chevauchements de timecodes et aux coupures hors contexte.

Testé de bout en bout sur un vrai enregistrement vocal chinois de 4 minutes 47 :

```text
Audio original
→ Transcription verbatim avec timecodes
→ Version épurée
→ 111 sous-titres SRT
→ 10 points à réécouter manuellement
→ 5 candidats pour les moments forts
→ Classement Top 3
→ Décision de montage seulement après confirmation humaine
```

Pour des contenus plus longs, le même processus s'applique, mais avec **contrôle par échantillonnage, conservation des timecodes originaux et une réécoute complète avant export en masse**. Choix des outils : pour la transcription, Doubao Work avec compréhension des fichiers locaux + Skill `asr-subtitles` + auto-contrôle de génération de fichiers (aucun compte externe à autoriser) ; pour sélectionner les moments forts, une nouvelle tâche de travail + analyse de texte intégrée (en lisant uniquement la version épurée et la liste d'écoute, sans réinterpréter l'audio en pleine sélection) ; le montage et l'export proprement dits ne sont raccordés aux outils vidéo qu'après confirmation humaine.

## Tâche 1 : obtenir d'abord un texte vérifiable, pas un joli résumé

Après avoir téléversé l'audio, écrivez en une fois la transcription verbatim, la version épurée, le SRT, la liste d'écoute manuelle et l'auto-contrôle :

```text
Je suis chargé de contenus et j'ai un enregistrement vocal en chinois à transformer
en matériaux texte directement exploitables pour relecture et montage.

Entrée : le fichier audio 【nom du fichier audio】 déjà téléversé dans la conversation.
Une seule voix principale ; si vous jugez qu'il y a plusieurs locuteurs,
distinguez-les en « Locuteur A / B ».
Priorité aux termes suivants : 【noms de produits, noms de personnes, sigles anglais】.

Lisez directement l'audio et traitez dans cet ordre :
1. Vérifiez d'abord que le fichier se lit correctement et notez la durée totale.
2. Générez une transcription verbatim fidèle, avec timecodes mm:ss ; conservez
   les répétitions orales et les mots d'hésitation.
3. Produisez séparément une version épurée, en supprimant seulement les répétitions
   manifestes et les pauses vides, sans changer les opinions, les chiffres,
   les noms de produits ni le ton.
4. Générez des sous-titres SRT standard : numérotation continue, timecodes sans
   chevauchement ; une entrée en 1—2 lignes maximum, chaque ligne de 18 caractères
   chinois au plus ; ne coupez pas une phrase au point de la rendre incompréhensible.
5. Marquez les mots incertains en 【inaudible mm:ss】 ou 【terme à confirmer mm:ss】,
   ne devinez jamais.
6. Faites une auto-vérification : contrôlez début, milieu et fin, la continuité des
   timecodes, les chevauchements SRT, l'écriture des termes et l'absence de mélange
   entre verbatim et version épurée.

Livrables attendus :
A. Transcription verbatim avec timecodes  B. Version épurée  C. Sous-titres SRT complets
D. Liste d'écoute manuelle  E. Résultat de l'auto-contrôle

Enregistrez 4 fichiers : transcription-verbatim.md, version-epuree.md, sous-titres.srt,
liste-ecoute-manuelle.md, et indiquez dans la conversation la durée totale,
le nombre de sous-titres, le nombre de points à réécouter et les chemins des fichiers.

Limites de sécurité : ne rien publier, ne rien téléverser sur d'autres plateformes,
ne modifier aucun contenu en ligne ; conserver les marqueurs sur les informations incertaines.
```

Une fois la tâche lancée, il confirme d'abord que le fichier est lisible (286,96 secondes), juge que la capacité audio standard ne gère pas la transcription, et appelle `asr-subtitles` — **si le déroulé n'affiche que « comprendre le contenu, résumer les idées », vous n'obtiendrez au final qu'un résumé, sans timecodes raccrochables à l'audio d'origine**.

Résultat du test : 111 entrées SRT, 0 chevauchement de timecodes, aucune ligne au-delà de 18 caractères. Il n'a pas transformé les passages inaudibles en phrases plausibles, mais a laissé 10 points à confirmer manuellement (noms d'invités, noms d'outils, modèle de carte graphique, noms de fichiers et chiffres), plus 11 erreurs de reconnaissance homophones confirmables par le contexte, isolées dans une rubrique « corrigé ».

> La transcription verbatim garantit la **fidélité**, la version épurée la **lisibilité**. Le plus dangereux est de fusionner les deux en un texte « qui coule bien » — agréable à lire, mais sans savoir quels mots ont été devinés par l'IA.

## Tâche 2 : une nouvelle tâche, qui ne lit que le texte vérifié

Placez la version épurée avec timecodes et la liste d'écoute manuelle dans une **nouvelle tâche** — elle ne pourra juger que sur la base des timecodes existants, sans réinventer noms et chiffres en pleine sélection (en pratique, les fichiers `.md`/`.txt` peuvent ne pas s'« ouvrir » dans le sélecteur ; la méthode la plus fiable est de coller les deux textes directement dans le prompt) :

```text
C'est une tâche nouvelle et indépendante. Traitez uniquement les deux documents ci-dessous :
- Document 1 : version épurée relue, avec timecodes
- Document 2 : segments nécessitant une réécoute / des termes à confirmer

Ne relancez pas de recherche web et n'ajoutez rien qui ne figure dans l'audio.

Audience : 【votre audience】
Plateformes cibles : WeChat Channels / Douyin, format vertical, 20—45 secondes par clip.

Critères de sélection :
1. Chaque segment candidat doit contenir une question complète, une idée clé ou une
   histoire concrète, et rester exact hors contexte.
2. Priorité aux segments à forte densité d'information, avec chiffres précis,
   contraste marqué ou résultats d'opérations réelles.
3. Pas de coupures tendancieuses pour fabriquer du conflit ; conservez les conditions
   nécessaires et les limites factuelles.
4. Les segments qui recoupent la liste d'écoute manuelle seront marqués « réécoute
   préalable », pas considérés comme directement exploitables.
5. Les timecodes de début et de fin doivent provenir de la version épurée ;
   pas de chevauchement significatif entre candidats.
6. Donnez d'abord 5 candidats, chacun avec : numéro, timecodes de début/fin,
   durée estimée, valeur centrale, pourquoi il tient debout seul, titre proposé,
   contexte à ajouter, risques / points à confirmer, priorité recommandée.
7. Sélectionnez ensuite le Top 3 en justifiant l'ordre.
8. Terminez par une liste de contrôle « à ne vérifier qu'après confirmation humaine
   avant tout export ».
9. Ne produisez que la liste d'extraits ; ne générez, ne montez et ne publiez
   aucune vidéo réelle.

Enregistrez le résultat en candidats-moments-forts.md et indiquez dans la conversation
le nombre total de candidats, les plages horaires du Top 3 et le nombre de candidats
nécessitant une réécoute préalable.

Limites de sécurité : sans ma confirmation, n'appelez aucun outil de montage, ne procurez
aucune vidéo, ne publiez rien et ne modifiez pas les fichiers originaux.

--- Document 1 : version épurée avec timecodes ---
【collez la version épurée, ou indiquez le nom du fichier téléversé】
--- Document 2 : réécoute manuelle / termes à confirmer ---
【collez la liste d'écoute manuelle, ou indiquez le nom du fichier téléversé】
```

Il commence par cartographier les repères temporels, retient 5 candidats selon « question ou histoire complète, densité d'information, 20—45 secondes, limites factuelles », puis les confronte un à un à la liste d'écoute — dès qu'une plage touche un nom, un produit ou un chiffre à confirmer, il la marque « réécoute préalable ». Top 3 constaté :

| Rang | Plage horaire | Contenu | Pourquoi si haut |
| --- | --- | --- | --- |
| 1 | 00:48—01:48 | L'IA prend la main sur le PC pour régler la qualité graphique d'un jeu | Contraste fort, résultat quantifié 3 405 Mo → 2 704 Mo, mais montage fin et vérification des chiffres requis |
| 2 | 01:48—02:37 | 5 heures d'entretien distillées en 8 Skill | Forte densité, 46 000 caractères → 8 Skill, mais noms d'invité et de structure à confirmer |
| 3 | 02:37—03:20 | Recherche de films sur 5 plateformes | Le plus proche des créateurs de contenu, 43 secondes directement exploitables, mais le nom de l'objet de recherche doit être réécouté d'abord |

Cette fois, les 5 candidats touchaient tous au moins un point à confirmer : la liste a bien été générée, mais Doubao Work **n'a toujours pas** appelé d'outil de montage, n'a exporté aucune vidéo et n'a pas touché à l'audio original. Un détail encore : la date de génération du fichier de sortie était erronée la première fois ; lors de la correction, il a fallu redire expressément « ne corrige que la date, ne coupe pas, n'exporte pas, ne publie pas » — le résultat final doit être lu en entier, la présence d'une carte de fichier ne vaut pas validation.

> **« L'IA a choisi ce passage » ne veut pas dire « ce passage est publiable ».** Tant qu'un candidat contient un 【inaudible】, un 【terme à confirmer】 ou un chiffre non vérifié, l'étape suivante est la réécoute, pas l'export.

## Retenez ce processus en deux temps

**Premier temps** (son → texte traçable) : précisez le fichier, les locuteurs et le glossaire ; exigez verbatim et version épurée séparés ; contrôlez le SRT sur la numérotation, les chevauchements et la longueur des lignes ; en cas de doute, laissez un timecode et ne devinez jamais ; échantillonnez début, milieu et fin.

**Deuxième temps** (texte → candidats qui méritent une réécoute) : ne lisez que la version épurée et la liste d'écoute ; les timecodes doivent provenir de l'existant ; justifiez l'autonomie de chaque candidat ; signalez le risque à chaque point à confirmer ; pas de montage, d'export ni de publication avant confirmation humaine.

Le vrai gain de temps ne consiste pas à laisser l'IA publier la vidéo d'un coup, mais à lui faire terminer le travail mécanique le plus épuisant — timecodes rangés, sous-titres découpés, risques signalés, passages repérés. Vous n'avez plus qu'à concentrer votre attention là où elle vaut le plus : réécouter les 10 points incertains et juger si les 5 candidats sont vraiment publiable.

---

Suivant : [Trouver le prochain contenu dans les commentaires, et faire le bilan →](/fr/doubaowork/case-comments)
