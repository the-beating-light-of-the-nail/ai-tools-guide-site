# Approfondissement : les trois ateliers — design, présentations, rédaction

Au-delà de l'atelier général, QoderWork propose des ateliers verticaux pour trois productions fréquentes : canevas de design, présentations 16:9, rédaction longue. Le sélecteur d'atelier est en bas à gauche de la zone de saisie.

> Documentation officielle : les trois pages design / slides / writing sous docs.qoder.com/zh/qoderwork.

## L'atelier design : un canevas « design comme code » natif IA

Décrivez en langage naturel et obtenez sur un canevas infini des livrables **exécutables, modifiables et livrables** ; les productions sont traitées comme des actifs de code, transférables en un clic « Livrer à Qoder » (IDE) pour poursuivre le développement.

**Flux en huit étapes** : changer d'atelier → décrire le besoin (captures et liens se collent directement) → réglages optionnels (référence de style / dossier de travail / fidélité / bibliothèque de composants) → choisir le mode d'exécution (« Exécuter directement » saute la clarification ; « Mode plan de design » aligne d'abord) → répondre aux questions de clarification (chacune propose des options, dont « l'IA décide seule ») → valider le plan de design (vérifier le panneau « contrat » : livrables/plateforme/sortie/composants/fidélité/style) → observer la génération (raisonnement en temps réel dans « réflexion approfondie » à gauche) → prévisualiser (cliquer les CTA, voir les survols, parcourir les flux de navigation).

**Réglages clés** :

| Réglage | Valeurs |
| --- | --- |
| Référence de style | Choix automatique (parmi 161 références) ou spécifier Airbnb / Apple / Carbon / Ant Design, etc. |
| Fidélité | Wireframe / haute fidélité (défaut) |
| Bibliothèque de composants | Non spécifiée (HTML-first) / shadcn/ui / Spark Design / Ant Design |

**Le triptyque d'itération** : instructions additionnelles ; **Nudge pour les réglages fins** (couleurs, espacements, rayons, sans redécrire) ; édition directe du code source du fichier de design derrière le canevas. Les trois mécanismes (Questions, Design Plan, Nudge) répondent au vieux problème de « l'IA qui se trompe de direction » — face à une information insuffisante, elle questionne au lieu de deviner.

## L'atelier présentations : l'outline d'abord, le film ensuite

Le canevas de droite est un espace de travail de présentations HTML 16:9, 1280×720. **Préreçu absolu : l'outline doit être validé d'abord** — dans l'onglet « outline », chaque section porte une phrase de présentation et une étiquette de mise en page (couverture / outline texte / image à gauche-texte à droite / deux colonnes / citation, etc.) ; la génération ne démarre qu'après « Accepter l'outline », et un outline inadapté peut être rejeté avec un retour.

Flux : changer d'atelier → décrire le besoin → choisir un modèle (ou « sans modèle » ; 35 intégrés) → répondre aux clarifications (audience, nombre de pages, langue) → **valider l'outline** → suivre la génération (miniatures prêtes une à une) → options de post-traitement (toutes escamotables) → consulter le résultat.

Export : **PPTX, PDF, HTML** ; les modèles courants peuvent être « enregistrés comme modèle » pour réutilisation.

Conseil officiel : « un bon besoin indique à la fois **l'audience** et **ce qu'elle doit retenir**, pas seulement le sujet ».

## L'atelier rédaction : la gestion de versions pour les textes longs

Pour articles, rapports, posts, guides techniques, documentation interne. L'espace Document = arborescence de fichiers Markdown + éditeur ; les livrables tombent dans le dossier local `outputs/` ; **chaque tour d'itération est conservé comme version traçable** (l'éditeur permet de basculer « dernière version/versions antérieures » en haut à droite, avec export PDF).

Ton au choix parmi cinq : non spécifié (l'IA juge) / formel / décontracté / technique / créatif.

Cinq scénarios officiels types :

| Scénario | Entrée → sortie |
| --- | --- |
| Notes éparses → guide technique | Dossier de notes → guide structuré |
| Retour d'incident interne sans blâme | Conversations/journaux → document de retour d'expérience |
| Liste de PR → notes de version | Historique git → regroupement Features/Improvements/Fixes |
| Blog technique | Sujet + structure en parties → texte final |
| Spécification d'API → guide d'intégration | Documentation d'interfaces → authentification, exemples cURL, table des codes d'erreur, FAQ |

À noter : après édition manuelle, les tours suivants de l'IA **poursuivent sur vos modifications** — vos retouches ne sont pas écrasées.

## Comment choisir

| Besoin | Atelier |
| --- | --- |
| Fichiers, données, études, automatisation | Général |
| Affiches, pages d'atterrissage, prototypes UI | Design |
| Reporting, supports de cours, roadshows | Présentations |
| Articles, rapports, guides | Rédaction |

> Perspective comparative : TraeWork couvre le design par son mode Design + livrables HTML (voir [Créer une présentation digne d'être présentée](/fr/traework/case-ppt)), quand les ateliers verticaux de QoderWork sont plus « prêts à l'emploi » — deux routes, à choisir selon vos sensations.
