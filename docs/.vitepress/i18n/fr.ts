// Français — navigation et barre latérale (structure identique aux autres fichiers de langue)
import type { LocaleConfig } from "vitepress";

const sidebar: LocaleConfig["themeConfig"]["sidebar"] = {
  "/workbuddy/": [
    {
      text: "Prise en main",
      items: [
        { text: "Présentation de la section", link: "/workbuddy/" },
        { text: "Découvrir WorkBuddy", link: "/workbuddy/01-intro/" },
        { text: "Télécharger, installer, se connecter et mettre à jour", link: "/workbuddy/02-install/" },
        { text: "Interface, tâches et espace de travail", link: "/workbuddy/03-interface/" },
        { text: "Réussir sa première tâche rapidement", link: "/workbuddy/04-first-task/" },
        { text: "Charger un skill vraiment utile", link: "/workbuddy/05-skills/" },
      ],
    },
    {
      text: "Extensions",
      items: [
        { text: "Experts et équipes d'experts", link: "/workbuddy/06-experts/" },
        { text: "Utiliser les connecteurs", link: "/workbuddy/07-connectors/" },
        { text: "Connecter le Mini-programme et l'assistant IM", link: "/workbuddy/08-im-assistant/" },
        { text: "Brancher une API externe", link: "/workbuddy/09-external-api/" },
        { text: "Tâches automatisées", link: "/workbuddy/10-automation/" },
        { text: "Lectures complémentaires : comprendre les systèmes de travail IA", link: "/workbuddy/11-ai-work-system/" },
      ],
    },
    {
      text: "Cas pratiques",
      items: [
        { text: "La suite bureautique : Word, Excel, PowerPoint", link: "/workbuddy/case-office/" },
        { text: "Gestion des connaissances : rendre ses favoris vraiment utiles", link: "/workbuddy/case-knowledge/" },
        { text: "Faire de l'analyse d'investissement une routine", link: "/workbuddy/case-investment/" },
        { text: "Invoquer une équipe vidéo IA en une phrase", link: "/workbuddy/case-video-team/" },
        { text: "La boucle de croissance des créateurs de contenu", link: "/workbuddy/case-self-media/" },
      ],
    },
    {
      text: "Niveau avancé",
      items: [
        { text: "Créer un skill : la distillation des connaissances", link: "/workbuddy/adv-build-skill/" },
        { text: "Concevoir un système multi-agents", link: "/workbuddy/adv-multi-agent/" },
        { text: "La fiabilité des workflows automatisés", link: "/workbuddy/adv-automation-reliability/" },
      ],
    },
    {
      text: "Aide-mémoire",
      items: [
        { text: "Modèles d'instructions courants", link: "/workbuddy/ref-prompt-templates/" },
        { text: "Tableau de référence par scénario", link: "/workbuddy/ref-scenarios/" },
      ],
    },
  ],
  "/traework/": [
    {
      text: "Prise en main",
      items: [
        { text: "Présentation de la section", link: "/traework/" },
        { text: "Qu'est-ce que TraeWork", link: "/traework/01-what-is" },
        { text: "Installation, connexion et synchronisation sur trois terminaux", link: "/traework/02-install" },
        { text: "Première tâche", link: "/traework/03-first-task" },
        { text: "Les skills", link: "/traework/04-skills" },
      ],
    },
    {
      text: "Extensions",
      items: [
        { text: "Assistant de bureau : Feishu et WeChat", link: "/traework/05-bot-assistant" },
        { text: "Plugins et autorisations d'applications externes", link: "/traework/06-plugins-integrations" },
        { text: "Tâches automatisées planifiées", link: "/traework/07-automated-tasks" },
        { text: "Contrôle de l'ordinateur et du navigateur", link: "/traework/08-computer-browser" },
      ],
    },
    {
      text: "Cas pratiques",
      items: [
        { text: "Créer un PowerPoint prêt à présenter", link: "/traework/case-ppt" },
        { text: "Reporting dynamique : tableaux de bord, rapports hebdomadaires et bilans", link: "/traework/case-report" },
        { text: "Pipeline Compte officiel WeChat vers base de connaissances Feishu", link: "/traework/case-feishu-pipeline" },
        { text: "Quatre usages quotidiens dans la fenêtre de chat", link: "/traework/case-im-daily" },
      ],
    },
    {
      text: "Niveau avancé",
      items: [
        { text: "Plan, Spec, Goal et commandes", link: "/traework/adv-workflows" },
        { text: "MCP et environnement d'exécution cloud", link: "/traework/adv-mcp-env" },
        { text: "Modèles et crédits : éviter les pièges", link: "/traework/adv-models-credits" },
      ],
    },
    {
      text: "Aide-mémoire",
      items: [
        { text: "Modèles d'instructions courants", link: "/traework/ref-templates" },
        { text: "Tableau de référence par scénario", link: "/traework/ref-scenarios" },
      ],
    },
  ],
  "/qoderwork/": [
    {
      text: "Prise en main",
      items: [
        { text: "Présentation de la section", link: "/qoderwork/" },
        { text: "Qu'est-ce que QoderWork", link: "/qoderwork/01-what-is" },
        { text: "Installation et connexion", link: "/qoderwork/02-install" },
        { text: "Première tâche", link: "/qoderwork/03-first-task" },
        { text: "Dossiers de travail", link: "/qoderwork/04-files" },
      ],
    },
    {
      text: "Extensions",
      items: [
        { text: "Skills et kits d'experts", link: "/qoderwork/05-skills" },
        { text: "Connecteurs et MCP", link: "/qoderwork/06-connectors" },
        { text: "Canaux IM", link: "/qoderwork/07-im-channels" },
        { text: "Tâches planifiées", link: "/qoderwork/08-automation" },
      ],
    },
    {
      text: "Cas pratiques",
      items: [
        { text: "Organisation de fichiers et gestion de photos", link: "/qoderwork/case-file-organize" },
        { text: "Analyse de données et rapports d'étude", link: "/qoderwork/case-data-report" },
        { text: "L'automatisation du navigateur en pratique", link: "/qoderwork/case-browser" },
        { text: "Traitement de documents en lot et multimédia", link: "/qoderwork/case-office-docs" },
      ],
    },
    {
      text: "Niveau avancé",
      items: [
        { text: "Contrôle de l'ordinateur et saisie vocale", link: "/qoderwork/adv-computer-use" },
        { text: "Créer des skills en dialogue", link: "/qoderwork/adv-skill-create" },
        { text: "Les trois postes de travail", link: "/qoderwork/adv-workbenches" },
        { text: "Mémoire, coûts et environnement sécurisé", link: "/qoderwork/adv-memory-cost" },
      ],
    },
    {
      text: "Aide-mémoire",
      items: [
        { text: "Modèles d'instructions courants", link: "/qoderwork/ref-templates" },
        { text: "Tableau de référence par scénario", link: "/qoderwork/ref-scenarios" },
      ],
    },
  ],
  "/doubaowork/": [
    {
      text: "Prise en main",
      items: [
        { text: "Présentation de la section", link: "/doubaowork/" },
        { text: "Qu'est-ce que Doubao Work", link: "/doubaowork/01-what-is" },
        { text: "Télécharger, installer et se connecter", link: "/doubaowork/02-install" },
        { text: "Interface, tâches et projets", link: "/doubaowork/03-interface" },
        { text: "Première tâche : opérationnel en cinq minutes", link: "/doubaowork/04-first-task" },
        { text: "Connecteurs : livrer quelque chose de vérifiable", link: "/doubaowork/05-connectors" },
        { text: "Choisir et utiliser les skills", link: "/doubaowork/06-skills" },
      ],
    },
    {
      text: "Extensions",
      items: [
        { text: "Piloter son ordinateur depuis le téléphone", link: "/doubaowork/07-mobile-remote" },
        { text: "Services API ou connecteurs : que choisir", link: "/doubaowork/08-api-vs-connector" },
        { text: "Tâches planifiées et synthèses d'actualités", link: "/doubaowork/09-automation" },
      ],
    },
    {
      text: "Cas pratiques · Quotidien et bureau",
      items: [
        { text: "Trois livrables à partir d'un même document", link: "/doubaowork/case-office" },
        { text: "L'intégration la plus naturelle : Feishu", link: "/doubaowork/case-feishu" },
        { text: "Ranger le bureau : voir le plan d'abord", link: "/doubaowork/case-desktop" },
        { text: "Les corvées du quotidien : une première version", link: "/doubaowork/case-life" },
      ],
    },
    {
      text: "Cas pratiques · Productivité personnelle",
      items: [
        { text: "Prioriser sa boîte de réception", link: "/doubaowork/case-inbox" },
        { text: "Toute une réunion, de bout en bout", link: "/doubaowork/case-meeting" },
        { text: "Word, de la relecture à la livraison", link: "/doubaowork/case-word" },
        { text: "Excel, du nettoyage au tableau de bord", link: "/doubaowork/case-excel" },
        { text: "D'une recherche rapide au rapport final", link: "/doubaowork/case-research" },
        { text: "Rapports quotidiens et rappels automatiques", link: "/doubaowork/case-daily-report" },
        { text: "Lire un livre rapidement", link: "/doubaowork/case-reading" },
        { text: "Se mettre en valeur avec un site personnel", link: "/doubaowork/case-personal-site" },
      ],
    },
    {
      text: "Cas pratiques · Création de contenu",
      items: [
        { text: "Choix de sujets : actualités, concurrents et calendrier", link: "/doubaowork/case-topic-selection" },
        { text: "De l'actualité à l'article du Compte officiel WeChat", link: "/doubaowork/case-wechat-article" },
        { text: "Décliner un contenu pour plusieurs plateformes", link: "/doubaowork/case-multi-platform" },
        { text: "Du long format au script et au storyboard", link: "/doubaowork/case-script-storyboard" },
        { text: "Transcription audio/vidéo et extraits marquants", link: "/doubaowork/case-av-transcription" },
        { text: "Trouver le prochain sujet dans les commentaires", link: "/doubaowork/case-comments" },
        { text: "Le bilan GEO de son image personnelle", link: "/doubaowork/case-geo-checkup" },
        { text: "D'un article WeChat à la vidéo courte", link: "/doubaowork/case-viral-to-video" },
      ],
    },
    {
      text: "Cas pratiques · Gestion des connaissances",
      items: [
        { text: "Des favoris en vrac à une recherche qui marche", link: "/doubaowork/case-bookmarks" },
        { text: "Fichiers en double : comparer avant d'agir", link: "/doubaowork/case-duplicate-files" },
        { text: "Capitaliser les actifs d'un projet", link: "/doubaowork/case-project-archive" },
        { text: "Transformer une base de connaissances Feishu en skill", link: "/doubaowork/case-wiki-to-skill" },
        { text: "Retrouver une politique d'entreprise en une phrase", link: "/doubaowork/case-policy-search" },
        { text: "Reclasser 541 cas d'usage", link: "/doubaowork/case-prompt-library" },
        { text: "Connaissances obsolètes : identifier le responsable", link: "/doubaowork/case-knowledge-expiry" },
      ],
    },
    {
      text: "Cas pratiques · E-commerce et finance",
      items: [
        { text: "D'une photo brute à toute la série de visuels", link: "/doubaowork/case-product-images" },
        { text: "Débriefing post-clôture et quotidien du vivier de veille", link: "/doubaowork/case-market-review" },
        { text: "Résultats : la croissance d'abord, puis la qualité", link: "/doubaowork/case-earnings-quality" },
        { text: "Étudier une entreprise pour la première fois", link: "/doubaowork/case-first-company" },
        { text: "De la présélection à la valorisation", link: "/doubaowork/case-screening-valuation" },
        { text: "Actionnaires, direction et gouvernance", link: "/doubaowork/case-governance" },
        { text: "Divergences haussières/baissières et audit des notes de recherche", link: "/doubaowork/case-bull-bear-audit" },
        { text: "Des chandeliers japonais au comité de recherche", link: "/doubaowork/case-kline-review" },
      ],
    },
    {
      text: "Niveau avancé",
      items: [
        { text: "Partenaire de travail ou équipe de travail", link: "/doubaowork/adv-buddy-or-squad" },
        { text: "Multi-agents (équipe de travail) en pratique", link: "/doubaowork/adv-multi-agent" },
      ],
    },
    {
      text: "Aide-mémoire",
      items: [
        { text: "Modèles d'instructions courants", link: "/doubaowork/ref-templates" },
        { text: "Tableau de référence par scénario", link: "/doubaowork/ref-scenarios" },
      ],
    },
  ],
  "/": [
    {
      text: "Le site",
      items: [
        { text: "Accueil", link: "/" },
        { text: "À propos et remerciements open source", link: "/about" },
      ],
    },
  ],
};

export const fr = {
  lang: "fr-FR",
  title: "AI Work Tutoriels",
  titleTemplate: ":title · AI Work Tutoriels",
  description:
    "Le site de référence des tutoriels pratiques sur les postes de travail IA de Tencent, ByteDance et Alibaba : WorkBuddy, TraeWork, QoderWork, Doubao Work et autres outils de type work pour les employés de bureau — de l'installation à la première tâche, en passant par les skills, les connecteurs, l'automatisation et le pilotage à distance par messagerie.",
  themeConfig: {
    siteTitle: "AI Work Tutoriels",
    nav: [
      { text: "Accueil", link: "/" },
      { text: "WorkBuddy", link: "/workbuddy/" },
      { text: "TraeWork", link: "/traework/" },
      { text: "QoderWork", link: "/qoderwork/" },
      { text: "Doubao Work", link: "/doubaowork/" },
      { text: "À propos", link: "/about" },
    ],
    sidebar,
    outline: { level: [2, 3], label: "Sur cette page" },
    docFooter: { prev: "Précédent", next: "Suivant" },
    returnToTopLabel: "Retour en haut",
    sidebarMenuLabel: "Sommaire",
    darkModeSwitchLabel: "Thème",
    lightModeSwitchTitle: "Passer en clair",
    darkModeSwitchTitle: "Passer en sombre",
  },
};
