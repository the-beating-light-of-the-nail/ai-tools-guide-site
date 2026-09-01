// Deutsch-Navigation und Sidebar-Daten —— gleiche Struktur wie die anderen Sprachdateien
import type { LocaleConfig } from "vitepress";

const sidebar: LocaleConfig["themeConfig"]["sidebar"] = {
  "/workbuddy/": [
    {
      text: "Erste Schritte",
      items: [
        { text: "Bereichsübersicht", link: "/workbuddy/" },
        { text: "WorkBuddy kennenlernen", link: "/workbuddy/01-intro/" },
        { text: "Herunterladen, Installieren, Anmelden und Aktualisieren", link: "/workbuddy/02-install/" },
        { text: "Oberfläche, Aufgaben und Arbeitsbereiche", link: "/workbuddy/03-interface/" },
        { text: "Schnell zur ersten Aufgabe", link: "/workbuddy/04-first-task/" },
        { text: "Einen wirklich nützlichen Skill laden", link: "/workbuddy/05-skills/" },
      ],
    },
    {
      text: "Erweiterung",
      items: [
        { text: "Experten und Expertenteams", link: "/workbuddy/06-experts/" },
        { text: "Konnektoren verwenden", link: "/workbuddy/07-connectors/" },
        { text: "Mini-Programm und IM-Assistent einbinden", link: "/workbuddy/08-im-assistant/" },
        { text: "Externe APIs anbinden", link: "/workbuddy/09-external-api/" },
        { text: "Automatisierte Aufgaben", link: "/workbuddy/10-automation/" },
        { text: "Weiterführend: KI-Arbeitssysteme verstehen", link: "/workbuddy/11-ai-work-system/" },
      ],
    },
    {
      text: "Fallbeispiele",
      items: [
        { text: "Office-Trifektum: Word, Excel, PowerPoint", link: "/workbuddy/case-office/" },
        { text: "Wissensmanagement: Favoriten nutzbar machen", link: "/workbuddy/case-knowledge/" },
        { text: "Investitionsanalyse im Alltag", link: "/workbuddy/case-investment/" },
        { text: "Ein KI-Videoteam per Satz herbeirufen", link: "/workbuddy/case-video-team/" },
        { text: "Wachstumsschleife für Social Media", link: "/workbuddy/case-self-media/" },
      ],
    },
    {
      text: "Für Fortgeschrittene",
      items: [
        { text: "Skills bauen: Wissensdestillation", link: "/workbuddy/adv-build-skill/" },
        { text: "Multi-Agent-Systeme entwerfen", link: "/workbuddy/adv-multi-agent/" },
        { text: "Zuverlässigkeit automatisierter Workflows", link: "/workbuddy/adv-automation-reliability/" },
      ],
    },
    {
      text: "Nachschlagewerke",
      items: [
        { text: "Häufige Prompt-Vorlagen", link: "/workbuddy/ref-prompt-templates/" },
        { text: "Szenario-Schnellreferenz", link: "/workbuddy/ref-scenarios/" },
      ],
    },
  ],
  "/traework/": [
    {
      text: "Erste Schritte",
      items: [
        { text: "Bereichsübersicht", link: "/traework/" },
        { text: "Was ist TraeWork", link: "/traework/01-what-is" },
        { text: "Installation, Anmeldung und Geräte-Sync", link: "/traework/02-install" },
        { text: "Die erste Aufgabe", link: "/traework/03-first-task" },
        { text: "Skills", link: "/traework/04-skills" },
      ],
    },
    {
      text: "Erweiterung",
      items: [
        { text: "Office-Assistent: Feishu und WeChat", link: "/traework/05-bot-assistant" },
        { text: "Plugins und Autorisierungen externer Apps", link: "/traework/06-plugins-integrations" },
        { text: "Zeitgesteuerte Automatisierung", link: "/traework/07-automated-tasks" },
        { text: "Computer- und Browser-Steuerung", link: "/traework/08-computer-browser" },
      ],
    },
    {
      text: "Fallbeispiele",
      items: [
        { text: "Eine präsentationsreife PowerPoint bauen", link: "/traework/case-ppt" },
        { text: "Dynamisches Reporting: Dashboards, Wochenberichte, Reviews", link: "/traework/case-report" },
        { text: "Pipeline von WeChat Official Account zum Feishu-Wissen", link: "/traework/case-feishu-pipeline" },
        { text: "Vier Alltagsszenarien im Chatfenster", link: "/traework/case-im-daily" },
      ],
    },
    {
      text: "Für Fortgeschrittene",
      items: [
        { text: "Plan, Spec, Goal und Befehle", link: "/traework/adv-workflows" },
        { text: "MCP und Cloud-Ausführungsumgebung", link: "/traework/adv-mcp-env" },
        { text: "Modelle und Credits: Stolperfallen", link: "/traework/adv-models-credits" },
      ],
    },
    {
      text: "Nachschlagewerke",
      items: [
        { text: "Häufige Prompt-Vorlagen", link: "/traework/ref-templates" },
        { text: "Szenario-Schnellreferenz", link: "/traework/ref-scenarios" },
      ],
    },
  ],
  "/qoderwork/": [
    {
      text: "Erste Schritte",
      items: [
        { text: "Bereichsübersicht", link: "/qoderwork/" },
        { text: "Was ist QoderWork", link: "/qoderwork/01-what-is" },
        { text: "Installation und Anmeldung", link: "/qoderwork/02-install" },
        { text: "Die erste Aufgabe", link: "/qoderwork/03-first-task" },
        { text: "Arbeitsordner", link: "/qoderwork/04-files" },
      ],
    },
    {
      text: "Erweiterung",
      items: [
        { text: "Skills und Experten-Kits", link: "/qoderwork/05-skills" },
        { text: "Konnektoren und MCP", link: "/qoderwork/06-connectors" },
        { text: "IM-Kanäle", link: "/qoderwork/07-im-channels" },
        { text: "Zeitgesteuerte Aufgaben", link: "/qoderwork/08-automation" },
      ],
    },
    {
      text: "Fallbeispiele",
      items: [
        { text: "Dateien sortieren und Fotos verwalten", link: "/qoderwork/case-file-organize" },
        { text: "Datenanalyse und Research-Berichte", link: "/qoderwork/case-data-report" },
        { text: "Browser-Automatisierung in der Praxis", link: "/qoderwork/case-browser" },
        { text: "Stapelweise Dokumentverarbeitung und Multimedia", link: "/qoderwork/case-office-docs" },
      ],
    },
    {
      text: "Für Fortgeschrittene",
      items: [
        { text: "Computersteuerung und Spracheingabe", link: "/qoderwork/adv-computer-use" },
        { text: "Skills im Gespräch erstellen", link: "/qoderwork/adv-skill-create" },
        { text: "Die drei Arbeitsbereiche", link: "/qoderwork/adv-workbenches" },
        { text: "Bewusstsein, Kosten und sichere Umgebungen", link: "/qoderwork/adv-memory-cost" },
      ],
    },
    {
      text: "Nachschlagewerke",
      items: [
        { text: "Häufige Prompt-Vorlagen", link: "/qoderwork/ref-templates" },
        { text: "Szenario-Schnellreferenz", link: "/qoderwork/ref-scenarios" },
      ],
    },
  ],
  "/doubaowork/": [
    {
      text: "Erste Schritte",
      items: [
        { text: "Bereichsübersicht", link: "/doubaowork/" },
        { text: "Was ist Doubao Work", link: "/doubaowork/01-what-is" },
        { text: "Herunterladen, Installieren und Anmelden", link: "/doubaowork/02-install" },
        { text: "Oberfläche, Aufgaben und Projekte", link: "/doubaowork/03-interface" },
        { text: "Die erste Aufgabe: in fünf Minuten fertig", link: "/doubaowork/04-first-task" },
        { text: "Konnektoren: zuerst ein prüfbares Ergebnis", link: "/doubaowork/05-connectors" },
        { text: "Skills auswählen und einsetzen", link: "/doubaowork/06-skills" },
      ],
    },
    {
      text: "Erweiterung",
      items: [
        { text: "Den Computer vom Handy aus steuern", link: "/doubaowork/07-mobile-remote" },
        { text: "API-Dienste oder Konnektoren – was wählen?", link: "/doubaowork/08-api-vs-connector" },
        { text: "Zeitgesteuerte Aufgaben und News-Briefings", link: "/doubaowork/09-automation" },
      ],
    },
    {
      text: "Fallbeispiele · Alltag und Büro",
      items: [
        { text: "Ein Ausgangsmaterial, drei Office-Dokumente", link: "/doubaowork/case-office" },
        { text: "Am besten passt Feishu", link: "/doubaowork/case-feishu" },
        { text: "Desktop aufräumen: erst den Plan sehen", link: "/doubaowork/case-desktop" },
        { text: "Alltagskleinkram: eine erste Version", link: "/doubaowork/case-life" },
      ],
    },
    {
      text: "Fallbeispiele · Persönliche Effizienz",
      items: [
        { text: "Posteingang nach Priorität sortieren", link: "/doubaowork/case-inbox" },
        { text: "Ein Meeting komplett begleiten", link: "/doubaowork/case-meeting" },
        { text: "Word: vom Korrektorat bis zur Übergabe", link: "/doubaowork/case-word" },
        { text: "Excel: von der Datenbereinigung zum Dashboard", link: "/doubaowork/case-excel" },
        { text: "Von der Spontanrecherche zum Bericht", link: "/doubaowork/case-research" },
        { text: "Automatische Tagesberichte und Erinnerungen", link: "/doubaowork/case-daily-report" },
        { text: "Ein Buch schnell lesen", link: "/doubaowork/case-reading" },
        { text: "Die eigene Website als Visitenkarte", link: "/doubaowork/case-personal-site" },
      ],
    },
    {
      text: "Fallbeispiele · Social Media",
      items: [
        { text: "Themenfinden: Trends, Wettbewerber, Redaktionsplan", link: "/doubaowork/case-topic-selection" },
        { text: "Vom Trend zum WeChat-Artikel", link: "/doubaowork/case-wechat-article" },
        { text: "Ein Inhalt, mehrere Plattformversionen", link: "/doubaowork/case-multi-platform" },
        { text: "Vom Langtext zu Sprechtext und Storyboard", link: "/doubaowork/case-script-storyboard" },
        { text: "Audio- und Video-Transkription mit Highlights", link: "/doubaowork/case-av-transcription" },
        { text: "Im Kommentarbereich den nächsten Beitrag finden", link: "/doubaowork/case-comments" },
        { text: "GEO-Checkup für die persönliche Marke", link: "/doubaowork/case-geo-checkup" },
        { text: "WeChat-Artikel zu Kurzvideo", link: "/doubaowork/case-viral-to-video" },
      ],
    },
    {
      text: "Fallbeispiele · Wissensmanagement",
      items: [
        { text: "Von Lesezeichen zu echter Suche", link: "/doubaowork/case-bookmarks" },
        { text: "Dubletten: erst die Unterschiede prüfen", link: "/doubaowork/case-duplicate-files" },
        { text: "Projektwissen gebündelt sichern", link: "/doubaowork/case-project-archive" },
        { text: "Feishu-Wissensbibliothek als Skill", link: "/doubaowork/case-wiki-to-skill" },
        { text: "Firmenrichtlinien mit einem Satz nachschlagen", link: "/doubaowork/case-policy-search" },
        { text: "541 Fallbeispiele neu sortiert", link: "/doubaowork/case-prompt-library" },
        { text: "Veraltetes Wissen: Verantwortliche finden", link: "/doubaowork/case-knowledge-expiry" },
      ],
    },
    {
      text: "Fallbeispiele · E-Commerce und Finanzen",
      items: [
        { text: "Von einem Foto zum kompletten Bildset", link: "/doubaowork/case-product-images" },
        { text: "Review nach Börsenschluss und Watchlist-Bericht", link: "/doubaowork/case-market-review" },
        { text: "Quartalszahlen: erst Wachstum, dann Qualität", link: "/doubaowork/case-earnings-quality" },
        { text: "Ein Unternehmen zum ersten Mal analysieren", link: "/doubaowork/case-first-company" },
        { text: "Vom Screening zur Bewertung", link: "/doubaowork/case-screening-valuation" },
        { text: "Aktionäre, Management und Governance", link: "/doubaowork/case-governance" },
        { text: "Bullen, Bären und die Prüfung von Research", link: "/doubaowork/case-bull-bear-audit" },
        { text: "Vom Chart zur Research-Reviewrunde", link: "/doubaowork/case-kline-review" },
      ],
    },
    {
      text: "Für Fortgeschrittene",
      items: [
        { text: "Arbeitspartner oder Arbeitsteam", link: "/doubaowork/adv-buddy-or-squad" },
        { text: "Multi-Agent (Arbeitsteam) in der Praxis", link: "/doubaowork/adv-multi-agent" },
      ],
    },
    {
      text: "Nachschlagewerke",
      items: [
        { text: "Häufige Prompt-Vorlagen", link: "/doubaowork/ref-templates" },
        { text: "Szenario-Schnellreferenz", link: "/doubaowork/ref-scenarios" },
      ],
    },
  ],
  "/": [
    {
      text: "Diese Seite",
      items: [
        { text: "Startseite", link: "/" },
        { text: "Über uns und Open-Source-Danksagung", link: "/about" },
      ],
    },
  ],
};

export const de = {
  lang: "de-DE",
  title: "AI Work Tutorials",
  titleTemplate: ":title · AI Work Tutorials",
  description:
    "Praxisnahe Tutorials für die KI-Arbeitsplätze von Tencent, ByteDance und Alibaba: WorkBuddy, TraeWork, QoderWork, Doubao Work und weitere »work«-Werkzeuge für den Büroalltag – von Download und Installation bis zur ersten Aufgabe, mit Skills, Konnektoren, Automatisierung und Fernsteuerung per Chat.",
  themeConfig: {
    siteTitle: "AI Work Tutorials",
    nav: [
      { text: "Startseite", link: "/" },
      { text: "WorkBuddy", link: "/workbuddy/" },
      { text: "TraeWork", link: "/traework/" },
      { text: "QoderWork", link: "/qoderwork/" },
      { text: "Doubao Work", link: "/doubaowork/" },
      { text: "Über uns", link: "/about" },
    ],
    sidebar,
    outline: { level: [2, 3], label: "Auf dieser Seite" },
    docFooter: { prev: "Zurück", next: "Weiter" },
    returnToTopLabel: "Nach oben",
    sidebarMenuLabel: "Inhaltsverzeichnis",
    darkModeSwitchLabel: "Design",
    lightModeSwitchTitle: "Zum hellen Design wechseln",
    darkModeSwitchTitle: "Zum dunklen Design wechseln",
  },
};
