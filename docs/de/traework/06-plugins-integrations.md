# Plugins und Berechtigungen für externe Apps

Plugins binden externe Tools, Dienste und Datenquellen in TraeWork ein; Berechtigungen für externe Apps lassen die KI direkt auf Ihre Daten in Feishu oder GitHub zugreifen. Erst beides zusammen macht TraeWork zu einem echten Bestandteil Ihres Workflows.

> Offizielle Dokumentation: [work_plugins](https://docs.trae.cn/work_plugins) | [Sieben beliebte Plugins](https://docs.trae.cn/work_seven-popular-plugins-in-traework)

## Plugins installieren: drei Schritte

1. Oben in der linken Navigationsleiste auf „Plugin-Markt“ klicken (standardmäßig Registerkarte „Plugins“);
2. Gewünschtes Plugin finden und rechts auf der Karte das Symbol „Plugin installieren“ anklicken (oder in der Detailansicht oben rechts „Plugin hinzufügen“);
3. Plugins, die einen externen Dienst benötigen, nach Anleitung autorisieren.

Beim Verwenden: **vor Beginn des Dialogs** unten links im Eingabefeld die verfügbaren Plugins auswählen (mehrere möglich). Plugins müssen vor Dialogbeginn gewählt sein; deaktivierte Plugins können im Dialog nicht genutzt werden.

## Die sieben beliebten Plugins im Überblick

| Plugin | Funktionen | Highlight |
| --- | --- | --- |
| **Feishu** | Nachrichten, Cloud-Dokumente, Cloud-Speicher, Base-Tabellen, Kalender, Aufgaben, Genehmigungen, Meetings, Minutes, OKR | Erste Wahl für Office-Szenarien, Beispiel: „Termin auf Montag 10:00 Uhr legen“ |
| **Tencent Docs** | Erstellen/Lesen/Bearbeiten von Word, Excel, Folien, Smart-Dokumenten, Smart-Tabellen, Mindmaps, Flussdiagrammen | Alles für kollaborative Online-Dokumente |
| **WeCom** | Kontakt- und Nachfragen, Verwaltung von Meetings, Terminen, To-dos, Dokumenten und Online-Tabellen | Beispiel: „Ein To-do mit Frist morgen 18:00 anlegen“ |
| **Remotion** | Videos via React-Code erstellen (Layout, Animation, Untertitel, Audio) | Video als Code, ideal für programmatische Clips |
| **HyperFrames** | Videos mit HTML + CSS + GSAP erstellen | Tusche-Anmutung, Beispiel-Markenfarbe: #11C566 |
| **Tonghuashun iFinD** | Finanzdaten und Investment-Analysen (API-Key nötig, Daten in Gratis-/Abo-Version) | Hinweis: Echtzeit-Kursdaten für Anleihen ohne Interbankenmarkt |
| **TDX** | Kurse für A-Aktien/Fonds/Indizes/Hongkong-Aktien, Bedingungs-Screening (Limit-up, niedriges KGV, MACD-Golden-Cross usw.) | Keine Unterstützung für Futures, Optionen, Anleihen |

> Offizieller Hinweis: Inhalte der Finanz-Plugins dienen nur der Demonstration und stellen keine Anlageberatung dar.

## Berechtigung für externe Apps: Feishu

Nach der Autorisierung kann TraeWork ohne manuelle MCP-Server-Konfiguration Feishu Cloud-Dokumente, Base-Tabellen, Kalender, Nachrichten, Postfach, Meetings und mehr lesen und schreiben:

1. Oben in der linken Leiste „Plugin-Markt“ → oben rechts „Verwalten“ → Registerkarte „App-Berechtigungen“;
2. Rechts neben der Feishu-App auf „Verbinden“ klicken – die Feishu-Autorisierungsseite öffnet sich;
3. Berechtigungen anhaken → „Autorisierung bestätigen“ → auf der zweiten Bestätigungsseite Account und Berechtigungen prüfen → auf „Autorisieren“ klicken.

Insgesamt 13 autorisierbare Module (nach Granularität): Base-Tabellen (ca. 38 Operationen, am meisten), Cloud-Dokumente (25), Messaging (18), Wissensdatenbank (14), Kalender/Aufgaben/Meetings/Postfach (je 10), Cloud-Speicher (8), Folien, Genehmigungen, Kontakte, Tabellen, Benutzeridentität. Nach der Autorisierung installiert TraeWork automatisch das lokale CLI und zugehörige Skills.

Drei offiziell empfohlene Szenario-Ketten:

```text
1. Anforderungsdokument-getrieben: Cloud-Dokument senden → Inhalt lesen → auf Basis des Dokuments arbeiten → Fortschritt ins Dokument zurückschreiben
2. Base-Tabellen-getrieben: Datensätze abrufen → Aufgabendetails lesen → ausführen → Datensatzstatus anlegen/aktualisieren
3. Kollaboration synchronisieren: Kalendereintrag erstellen → Besprechungsprotokoll lesen → zugehörige Cloud-Dokumente bearbeiten
```

## Berechtigung für externe Apps: GitHub

Zugang: Avatar unten links → Einstellungen → „Externe App-Berechtigungen“ → bei GitHub auf „Verbinden“ → anmelden und TRAE-AI CN Zugriff gewähren. Danach:

- **KI erstellt PR**: Die KI prüft die Unterschiede zweier Branches und erzeugt eine Zusammenfassung → PR mit einem Klick anlegen → im GitHub-Fenster bestätigen und mergen;
- **PR manuell anlegen** / **PR von der KI prüfen lassen**: Die KI zuerst die relevanten Dateiänderungen ansehen, dann ein git-diff-Review ausführen.

⚠️ Die GitHub-App wird **nur im Code-Modus unterstützt**; in der Desktop-Version muss ein von GitHub geladenes Projekt geöffnet und auf „Cloud“ umgeschaltet werden.

## Berechtigungsgrenzen

- Der Agent ruft Dienste nur **im Rahmen der erteilten Berechtigungen** auf;
- Die Einstiege für Integrationen liegen an zwei Orten: Einstellungen > Externe App-Berechtigungen (Account-Ebene) und Plugin-Markt > Verwalten > App-Berechtigungen (Plugin-Ebene) – im Zweifel beide prüfen.

---

Weiter: [Automatisierte Zeitplanaufgaben →](/de/traework/07-automated-tasks)
