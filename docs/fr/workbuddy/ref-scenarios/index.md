# Annexe B : Aide-mémoire par scénario

Un index de type dictionnaire, organisé selon « qui vous êtes » et « ce que vous voulez faire ». Repérez votre scénario, puis consultez l'entrée recommandée et les points de contrôle humain.

## Par profil : où commencer

| Profil / poste | Scénarios recommandés pour débuter | Chapitre correspondant |
| --- | --- | --- |
| Salarié lambda | Rapports périodiques, comptes rendus, PPT, Excel, courriels | [Trilogie bureautique](/fr/workbuddy/case-office/) |
| Gestionnaire de connaissances personnelles | Capture d'idées, web clipper, WPS/ima/Obsidian, revue hebdomadaire | [Gestion des connaissances](/fr/workbuddy/case-knowledge/) |
| Vie quotidienne | Voyage, météo, menus, santé, journal d'humeur | Recherche sur le SkillHub officiel |
| Créateur de contenu | Tendances, sujets, titres accrocheurs, couvertures, visuels longs, scripts, publication, bilans | [Boucle de croissance pour créateurs](/fr/workbuddy/case-self-media/), [Équipe vidéo IA](/fr/workbuddy/case-video-team/) |
| Chef de produit | Concurrence, PRD, retours utilisateurs, bilans de version | [Trilogie bureautique](/fr/workbuddy/case-office/) |
| Marketing / opérations | Plans d'action, bilans de diffusion, réécriture multi-plateformes | [Boucle de croissance pour créateurs](/fr/workbuddy/case-self-media/) |
| Ventes / avant-vente | Étude client, génération de propositions, courriels de suivi | [Modèle d'instruction A.6](/fr/workbuddy/ref-prompt-templates/) |
| RH / administration | CV, formation, questions sur les règlements, parcours d'intégration | [Modèle d'instruction A.4](/fr/workbuddy/ref-prompt-templates/) |
| Finance / juridique | Factures, notes de frais, première lecture de contrats, alertes de risque | [Modèle d'instruction A.8](/fr/workbuddy/ref-prompt-templates/) |
| R&D / IT | Compréhension de code, cas de test, documentation technique, outillage | Documentation officielle et communautés de développeurs (ce site se concentre sur la bureautique) |
| Direction | Analyse d'activité, alertes d'anomalie, propositions stratégiques | [Trilogie bureautique](/fr/workbuddy/case-office/) |
| Administrateur d'entreprise | Permissions, consommation, Skills, base de connaissances, audit | [Fiabilité des automatisations](/fr/workbuddy/adv-automation-reliability/) |

## Bureautique de base

| Ce que je veux faire | Capacité recommandée | Point de contrôle humain |
| --- | --- | --- |
| Planifier, modifier ou annuler une réunion Tencent Meeting | Skill Tencent Meeting | Sujet, horaire, fuseau, participants, périmètre d'annulation |
| Obtenir l'enregistrement, la transcription et le compte rendu intelligent | Skill Tencent Meeting | Information d'enregistrement, permissions, noms propres et chiffres |
| Mettre une réunion en compte rendu | Transcription + gabarit de compte rendu | Séparer faits, décisions, suggestions et questions ouvertes |
| Écrire les actions dans le système de tâches | Connecteur de tâches / API | Responsable, échéance, livrable, écritures en doublon |
| Générer un PRD depuis la réunion | Gabarit PRD, Skill chef de produit | N'utiliser que les exigences confirmées ; garder hors-périmètre et questions ouvertes |
| Trier les courriels et générer des brouillons de réponse | Connecteur mail, organisation de contenu | Expéditeur, objet, pièces jointes, confirmation d'envoi |
| Générer rapports quotidiens/hebdo depuis tâches et réunions | Skills tâches, agenda, documents | Chaque résultat adossé à une preuve ; ne pas présenter le prévu comme l'accompli |
| Trier et renommer des fichiers par lots | Tri de fichiers, DOCX/PDF | Prévisualiser et copier d'abord ; ni écraser ni supprimer |
| Fusionner des Excel et rapprocher | Excel, analyse de données | Clés primaires, définitions, anomalies, conservation des montants |
| Comparer deux versions d'un règlement, contrat, projet | Comparaison de documents | Montants, dates, responsabilités, conditions, formulations négatives |
| Générer un PPT de reporting depuis le compte rendu | PPT, graphiques, gabarits de marque | D'abord plan et correspondance des preuves ; une conclusion par page |
| Transformer les règlements en questions-réponses | Base de connaissances, recherche | Réponses avec référence aux clauses ; sans réponse → humain |

## Gestion des connaissances

| Ce que je veux faire | Entrée suggérée | Point de contrôle humain |
| --- | --- | --- |
| Noter une idée au vol | Inspiration Hunter, ima | Garder les mots exacts, pas d'amplification en faits |
| Faire entrer des fichiers WeChat dans la base | ima-skills | Base cible, permissions, doublons, confidentialité |
| Trier en masse les favoris WeChat | Base de connaissances des favoris WeChat | Échecs de capture, sources, droits, doublons |
| Organiser documents WPS et notes éparses | Base WPS, kdocs skill | Clé, répertoire de test, permissions de partage |
| Monter un Wiki Obsidian local | LLM-Wiki version chinoise | Sauvegarde du Vault, nommage, écritures en masse |
| Convertir une page web en note Obsidian | url-to-obsidian | Source, date, droits, lien d'origine |
| Consolider les réunions en mémoire de projet | Compte rendu + Skill base de connaissances | Séparer faits, décisions, hypothèses et à-faire |
| Transformer le savoir en contenu éditorial | Dossier de preuves + Skills de contenu | Version des faits, citations, droits |
| Nettoyer régulièrement la base | Bilan de santé du Wiki, liens brisés, doublons | Pas de suppression ou fusion automatique des notes humaines |

## Création de contenu

| Ce que je veux faire | Skill recommandé | Point de contrôle humain |
| --- | --- | --- |
| Trouver des sujets populaires Compte officiel WeChat / Xiaohongshu | Articles populaires du Compte officiel, notes virales Xiaohongshu, analyse des commentaires | La popularité ne vaut pas adéquation ; conserver liens et dates |
| Générer et noter des titres accrocheurs | Génération/notation de titres, accroches vidéo courte | La promesse du titre doit être tenue par le texte |
| Générer couvertures du Compte officiel | Couvertures virales, générateur d'images du Compte officiel | Sinogrammes, logo, droits, zone de sécurité au recadrage |
| Générer couverture et visuel long Xiaohongshu | Couverture Xiaohongshu, any2xiaohongshu | Corps de texte mobile, rythme page par page, cohérence des faits |
| Adapter un long texte en vidéo courte | Recherche de ressources, atelier à scripts, réalisateur IA | Durée, ressources réelles, sous-titres, droits musicaux |
| Mettre en page le Compte officiel dans les brouillons | md-to-wechat, détection de mots interdits | Identifiants, compte, aperçu mobile, publication humaine |
| Débriefer et améliorer l'article suivant | Auto-amélioration de l'écriture, copilote Xiaohongshu | Séparer faits chiffrés et hypothèses causales |
| Produire une vidéo de zéro | Équipe d'experts génération vidéo | Points de contrôle du script, validation du film, confirmation avant publication |
| Décortiquer une vidéo virale | Équipe d'experts décryptage | Conditions des plateformes, droits, apprendre et non rediffuser |

## Services du quotidien

| Ce que je veux faire | Skill recommandé | Point de contrôle humain |
| --- | --- | --- |
| Préparer itinéraire de voyage et liste de bagages | Assistant voyage, liste de bagages | Prix en temps réel, horaires d'ouverture, visa, réservations |
| Chercher un lieu, une distance, un itinéraire | Assistant Tencent Maps | Minimiser la localisation précise, variations de trafic du jour |
| Mettre l'itinéraire en visuel ou carte | Carte de voyage, visuel long | Vérifier les faits avant l'habillage visuel |
| Organiser questions de bilan de santé et habitudes | Conseiller santé | Ni diagnostic ni ordonnance ; urgence → hors ligne |
| Noter stress et humeur | Journal d'humeur, conseiller santé mentale | Stockage privé, en crise contacter un soutien réel |
| Planifier menus et courses de la semaine | Santé nutritionnelle, recettes | Allergies, maladies, traitements, grossesse |
| Assortir tenues selon météo et occasion | Inspiration tenue du jour + météo | Prioriser les vêtements existants, consommation par défaut bannie |
| Horoscope, thème ou divination | Divination TianJi, tirage récréatif | Présenté comme divertissement, hors décisions réelles à haut risque |
