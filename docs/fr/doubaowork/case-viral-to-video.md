# D'un article à succès du Compte officiel à la vidéo courte

> Contexte : pour transformer un article en vidéo courte, beaucoup copient tout le texte dans l'IA avec un « adapte-le en script de 60 secondes ». L'IA coupe obligeamment la moitié, ajoute un « vous y croyez ? » et un « aimez et enregistrez vite » — moins de mots, mais une vidéo pas forcément utilisable, et les conditions, dates et tests personnels de l'original perdent leur sens.

Test réel avec l'article « Depuis que j'ai externalisé mon ordinateur à Doubao, mon efficacité a décollé ! [tutoriel inclus] », sur toute la chaîne (livraison locale uniquement, sans mise en ligne) :

```text
Article original du Compte officiel
→ script vidéo et storyboard seconde par seconde
→ prise de parole réelle + captures produit + pack de ressources
→ Skill Remotion
→ vérification du code, rendu, ffprobe et validation par échantillonnage d'images
→ fichier MP4 local final
```

Répartition des outils : **l'écriture et le montage sont deux métiers**. Un script faible relève de l'arbitrage de l'information ; des ressources manquantes, de compléments de tournage ; un écran noir ou une piste audio fausse, du projet de montage — deux processus séparés, et l'étape fautive saute aux yeux.

| Étape | Outil | Responsabilité |
| --- | --- | --- |
| Mise en forme de l'original | Extraction du corps de la page | Conserver faits, conditions et ordre des cas de l'original |
| Script et storyboard | Scénariste vidéo courte (partenaire de travail) | Choix de l'angle, écriture du script, découpage visuel seconde par seconde, autocontrôle factuel |
| Gestion des ressources | Capacités de l'ordinateur local + liste des ressources | Vérifier l'existence des vidéos, captures, images et chemins |
| Montage proprement dit | Skill Remotion | Réutiliser le projet, organiser la timeline, rendre un MP4 H.264 |
| Validation | ffprobe + échantillonnage régulier d'images | Contrôler durée, résolution, fréquence d'images, pistes audio, écrans noirs et troncatures |

## Étape 1 : récupérer l'article et trouver le partenaire scénariste

Donnez le lien de l'article à Doubao Work pour extraction. Puis dans « Skill · Connecteur · Partenaire », section « Partenaires de travail · Équipe », chercher « vidéo » pour trouver le **scénariste vidéo courte** — sa différence avec un Skill d'écriture ordinaire : il ne livre pas qu'un script parlé, il planifie actions, images et sous-titres par segment temporel. Téléversez le master factuel et mettez durée cible, public, ressources disponibles et limites de sécurité en une fois dans le prompt :

```text
Je suis l'auteur d'un Compte officiel WeChat et je veux transformer mon long article
《titre de l'article》en une vidéo courte de moins de 3 minutes, directement tournable
et montable.

Matériaux d'entrée :
- lien de l'original :【lien】
- master factuel nettoyé et vérifié à partir de l'original :《master-factuel.md》téléversé

Traite en mode « scénariste vidéo courte » :
1. lis d'abord le master factuel ; liste les faits à ne pas abîmer et les chiffres dont les
   qualificatifs doivent être conservés.
2. choisis dans les vraies tâches de l'original les 3 plus adaptées à la vidéo courte ;
   ne récite pas tout pour remplir.
3. écris un script en je à la première personne de 150 à 180 secondes, avec un contraste
   direct dans les 5 premières secondes.
4. oral, phrases courtes, respirations ; garde le ton du test personnel ;
   ni keynote de lancement, ni fonctions jamais existé.
5. découpe le script en tableau plan par plan : segment temporel, script parlé, image, type de
   ressource, gros texte à l'écran, transition, note de risque.
6. réutilise en priorité les vidéos de prise de parole, captures produit et illustrations
   existantes ; marque explicitement « à tourner » les plans sans ressource, sans faire
   comme si elle existait.
7. termine par un autocontrôle factuel : différences de plateforme, fréquence d'images, durée,
   quantités, dates de publication et « gain d'efficacité » conservent-ils les conditions de
   l'original ?

Livrables : script parlé + tableau de montage plan par plan.
Dans la conversation, seulement le résumé : durée conseillée, nombre de plans, ressources
réutilisées, plans à tourner.

Limites de sécurité : génère seulement scripts et storyboard locaux ; pas de téléversement ni de
publication, pas de modification des rushes, et ne transforme pas un test personnel en promesse
universelle.
```

En test : 3 scripts livrés (angle panoramique / le téléphone commande, l'ordinateur exécute / l'IA travaille mais la satisfaction reste humaine), chacun découpé au timecode, avec plateforme, public visé, objectif de diffusion et conditions de tournage, et les contrôles pré-publication répartis en « passés » et « à faire par un humain ».

## Étape 2 : préparer le pack de ressources

Le script dit quoi tourner, le pack décide l'image : en ouverture une vraie prise de parole (accroche, problème, explication des capacités), au milieu captures d'écran et voix off des opérations réelles, en clôture prise de parole (conclusion et appel à l'action), la couverture, plus des captures du mode tâches (montrer que « ce n'est pas seulement bavarder ») et des captures des Skills connecteurs (expliquer pourquoi utiliser des outils existants d'abord). **Donnez à chaque ressource un nom qui dit son usage** : au montage, Doubao Work saura quelle ressource servir à quel moment.

## Étape 3 : téléverser le Skill Remotion pour le montage

Si la recherche « montage vidéo » dans la page des Skills ne donne rien, passez par « Créer → Téléverser un Skill » ([Remotion fournit un AI Skill officiel](https://www.remotion.dev/docs/ai/skills)). Le paquet doit contenir `SKILL.md` — zippez le Remotion Best Practices Skill validé localement, téléversez, puis activez l'interrupteur dans « Mes Skills ».

> Un Skill n'est pas un modèle de vidéo : c'est une **fiche métier pour l'Agent**, lui disant quelles règles respecter pour créer une composition, traiter les ressources, construire la timeline, rendre et valider ; les rushes et le projet restent les vôtres.

À l'appel, précisez quatre choses — quel Skill, quelles ressources et projet lire, comment valider, quels gestes interdire :

```text
Utilise le Skill Remotion actuellement installé pour monter le pack de ressources en une vidéo
lisible.

Entrées :
- vidéos de prise de parole, captures et illustrations : chemins locaux selon《liste-des-ressources.md》
- script parlé et tableau plan par plan : fichiers validés à l'étape précédente
- projet Remotion existant :【remplacer par le chemin absolu de votre projet local】

Consignes :
1. vérifie d'abord que la liste et les fichiers existent ; liste les manques, n'invente rien.
2. réutilise les compositions existantes : ne reconstruis pas le projet, n'écrase pas les vidéos
   d'origine.
3. garde le fil de la prise de parole réelle ; insère aux bons passages captures produit,
   interfaces et rappels de chapitre ; évite que des animations décoratives recouvrent les vraies
   interfaces.
4. format, résolution et durée selon la composition existante ; tous chiffres et descriptions de
   fonctions conformes au master factuel.
5. lance la vérification de code et de types, puis rends un MP4 H.264.
6. après rendu, contrôle par ffprobe durée, résolution, fréquence, encodage et pistes audio ;
   puis échantillonnage régulier d'images pour vérifier ouverture, trois segments de cas et
   clôture : écran noir, coquilles, troncature, données personnelles.

Livrables : MP4 local final + une planche-contact ou plusieurs images de validation
         + un bref relevé de validation (chemins, paramètres médias, limites connues).

Limites de sécurité : ne crée de nouveaux fichiers que dans le projet local ; ne supprime ni
n'écrase les rushes ; pas de téléversement ni de publication.
```

Une fois soumis, il lit d'abord le Skill Remotion, puis explore le projet et la liste de ressources — c'est seulement là que le Skill est réellement utilisé. La livraison finale inclut, avec le film, les compositions, paramètres image et audio et la structure de la timeline.

## La part humaine reste la plus précieuse

On croit longtemps que « faire une vidéo à partir d'un article » est facile ; en parcourant réellement la chaîne, on découvre : le plus précieux dans l'article, ce sont **les faits et les opinions** ; le plus coûteux dans la vidéo, ce sont **la prise de parole, les ressources et le montage** — il faut une chaîne complète pour augmenter la capacité. L'IA peut intégrer cette chaîne, mais la part la plus précieuse reste humaine : confier le travail répétitif à l'Agent et garder le temps gagné pour les choix que vous seul pouvez faire.

---

Fin des scénarios médias autonomes. Ensuite : [Gestion des connaissances · du coup de cœur rapide à la recherche vraiment utile plus tard →](/fr/doubaowork/case-bookmarks)
