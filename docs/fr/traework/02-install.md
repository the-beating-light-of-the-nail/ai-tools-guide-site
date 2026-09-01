# Installation, connexion et synergie des trois plateformes

Les trois plateformes de TraeWork (web / bureau / mobile) partagent le compte et les données de tâches. Ce chapitre les installe et les relie en une seule fois.

## Version web : sans installation, pour découvrir

Ouvrez simplement [work.trae.cn](https://work.trae.cn/) et connectez-vous avec votre compte TRAE. Les tâches de la version web s'exécutent entièrement dans le cloud, sans consommer de ressources locales — parfait pour découvrir le flux principal avant de décider d'installer la version bureau.

> La version web ne prend en charge que les tâches cloud ; pour manipuler des fichiers locaux, il faut la version bureau.

## Version bureau : l'espace de travail principal

1. Ouvrez le centre de téléchargement de [trae.cn](https://www.trae.cn/) (ou le bouton « Télécharger TraeWork » de la page produit) ;
2. Choisissez le programme d'installation macOS ou Windows et installez-le ;
3. Au lancement, connectez-vous avec votre numéro de mobile (le même compte que la version web).

Différences clés de la version bureau par rapport à la version web :

| Capacité | Version web | Version bureau |
| --- | --- | --- |
| Environnement d'exécution | Cloud uniquement | Local + cloud |
| Manipulation de fichiers locaux | ✗ | ✓ |
| Assistant de bureau (liaison IM) | ✗ | ✓ (la première liaison doit être initiée depuis la version bureau) |
| Ajout de modèles personnalisés | ✗ | ✓ |
| Contrôle de l'ordinateur / navigateur externe | ✗ | ✓ |

## Application mobile : le centre de tâches de poche

1. Cherchez « TRAE » dans l'app store de votre téléphone (iOS nécessite un Apple ID hors zone US, l'app n'y est pas encore disponible) ;
2. Connectez-vous avec le même numéro de mobile que la version bureau ;
3. En bas à gauche de l'accueil, touchez « Environnement d'exécution des tâches » → « Connecter mon ordinateur » et suivez les instructions pour l'appairage.

Étapes complètes pour connecter le téléphone et l'ordinateur :

1. Après connexion sur l'app mobile TRAE, touchez « Environnement d'exécution des tâches » en bas à gauche de l'accueil ;
2. Touchez « Connecter mon ordinateur » ;
3. Sur l'ordinateur, ouvrez TraeWork version bureau et connectez-vous avec le même numéro de mobile ;
4. Dans la version bureau, allez dans **Paramètres > TRAE mobile** et activez « Autoriser TRAE mobile à contrôler cet appareil » ;
5. Dans la fenêtre « Seul le contenu nécessaire est stocké dans le cloud », touchez « Confirmer » ;
6. Autorisez l'app mobile à accéder au dossier `/documents` de l'ordinateur.

Points d'attention :

- La connexion est valide **180 jours** ; à l'expiration, il faut refaire l'appairage ;
- Vous pouvez activer « Garder l'ordinateur en éveil » pour éviter la mise en veille pendant l'exécution des tâches ;
- Si l'appareil passe hors ligne, le système bascule automatiquement l'exécution vers le cloud et la tâche continue sans interruption ;
- La mise en veille de l'ordinateur peut interrompre l'envoi et la réception des messages (idem pour l'assistant de bureau).

## Une journée type avec la synergie des trois plateformes

```text
08:30  Sur le trajet, lancement depuis le mobile d'une tâche cloud « rassembler la veille sectorielle de la semaine »
09:00  Au poste, ouverture de la version bureau : la tâche est terminée, validation directe du livrable
10:00  Lancement depuis la version bureau d'une tâche complexe nécessitant des fichiers locaux
12:30  À l'heure du déjeuner, suivi de l'avancement sur mobile et ajout d'une demande
18:00  Avant de partir, démarrage d'une longue tâche sur la version bureau ; à la maison, réception du résultat sur mobile
```

## Pack de crédits pour les nouveaux utilisateurs

À l'inscription, les nouveaux utilisateurs reçoivent en une fois **2000 crédits généraux + 2000 crédits Work dédiés** (valables 31 jours) ; s'y ajoutent le pointage quotidien qui donne des crédits Work dédiés, une connexion mensuelle qui offre 500 crédits généraux, etc. Les règles et l'ordre de consommation des crédits sont détaillés dans [Modèles et crédits : éviter les pièges](/fr/traework/adv-models-credits).

---

Étape suivante : [Première tâche : d'une phrase au livrable →](/fr/traework/03-first-task)
