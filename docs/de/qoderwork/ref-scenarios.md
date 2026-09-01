# QoderWork-Szenario-Schnellreferenz

Ein lexikonartiger Index, organisiert nach „Was möchte ich tun?".

## Funktionszuordnung

| Was möchte ich tun? | Was nehmen? | Details |
| --- | --- | --- |
| Fähigkeiten kostenlos und schnell ausprobieren | Neue Aufgabe + Einstiegsaufgaben wie Desktop-Aufräumen | [Die erste Aufgabe](/de/qoderwork/03-first-task) |
| Die KI direkt lokale Dateien lesen und schreiben lassen | Arbeitsordner | [Arbeitsordner](/de/qoderwork/04-files) |
| Der KI „Standardvorgehen" beibringen | Skill | [Skills und Experten-Kits](/de/qoderwork/05-skills) |
| Wiederkehrende Abläufe in einen Ein-Satz-Befehl packen | /create-skill | [Skills im Gespräch erstellen](/de/qoderwork/adv-skill-create) |
| Die KI Webseiten bedienen lassen (mit Login) | Browser-Connector | [Connectors und MCP](/de/qoderwork/06-connectors) |
| DingTalk/Feishu/WeChat anbinden und fernsteuern | IM-Kanäle | [IM-Kanäle](/de/qoderwork/07-im-channels) |
| Aufgaben zeitgesteuert automatisch laufen lassen | Zeitgesteuerte Aufgaben | [Zeitgesteuerte Aufgaben](/de/qoderwork/08-automation) |
| Die KI Desktop-Software bedienen lassen | Computersteuerung | [Computersteuerung und Spracheingabe](/de/qoderwork/adv-computer-use) |
| Aufgaben per Sprechbefehl stellen | Spracheingabe per Fn | [Computersteuerung und Spracheingabe](/de/qoderwork/adv-computer-use) |
| Poster/Landingpages/UI-Prototypen erstellen | Design-Workbench | [Die drei Workbenches](/de/qoderwork/adv-workbenches) |
| PPT erstellen | Folien-Workbench (zuerst Gliederung bestätigen) | [Die drei Workbenches](/de/qoderwork/adv-workbenches) |
| Lange Texte/Berichte schreiben | Schreib-Workbench (Versionen rückverfolgbar) | [Die drei Workbenches](/de/qoderwork/adv-workbenches) |
| Die KI meine Vorlieben merken lassen | Bewusstseinsmodus | [Bewusstsein, Kosten und sichere Umgebung](/de/qoderwork/adv-memory-cost) |
| Private Systeme anbinden | MCP (JSON-Import) | [Connectors und MCP](/de/qoderwork/06-connectors) |
| Sensible Aufgaben in isolierter Umgebung laufen lassen | Sichere Arbeitsumgebung | [Bewusstsein, Kosten und sichere Umgebung](/de/qoderwork/adv-memory-cost) |

## Nach Anwenderprofil

| Wer Sie sind | Empfohlener Einstieg | Fortgeschritten |
| --- | --- | --- |
| Kompletter Anfänger | [Die erste Aufgabe](/de/qoderwork/03-first-task) | [Arbeitsordner](/de/qoderwork/04-files) |
| Verwaltung/Sekretariat | [Fallbeispiel Dateisortierung](/de/qoderwork/case-file-organize) | [Zeitgesteuerte Aufgaben](/de/qoderwork/08-automation) |
| Finanzwesen | Belegarchiv-Vorlage ([Stapeldokumente](/de/qoderwork/case-office-docs)) | Erstattungszusammenfassung zeitgesteuert |
| Operations/E-Commerce | [Fallbeispiel Browser-Automatisierung](/de/qoderwork/case-browser) | Zeitgesteuerter Tagesbericht + IM-Push |
| Datenanalyse | [Fallbeispiel Datenanalyse](/de/qoderwork/case-data-report) | Kostenkontrolle über Modellstufen |
| HR | Lebenslauf-Screening-Vorlage ([Stapeldokumente](/de/qoderwork/case-office-docs)) | Passungsregeln als Skill |
| Recht/Steuern | Eingebaute Experten-Kits (Unternehmensrecht/Finanzen) | [Skills im Gespräch erstellen](/de/qoderwork/adv-skill-create) |
| Content-Creator | [Die drei Workbenches](/de/qoderwork/adv-workbenches) | [Skill-Ökosystem](/de/qoderwork/05-skills) |
| Intensive DingTalk-Nutzer | [DingTalk MCP](/de/qoderwork/06-connectors) + [IM-Kanäle](/de/qoderwork/07-im-channels) | — |

## Die fünf Prompt-Irrtümer (offizielle Dokumentation)

| ❌ Irrtum | ✅ Richtig |
| --- | --- |
| Alle Anforderungen in einen Satz pressen | Konkret werden: Ziel + Format + Auflagen |
| Ergebnisse ungeprüft weitermachen | Fehler verstärken sich in Folgeschritten – jeden Schritt stichprobenartig prüfen |
| Mehrere Themen in einer Aufgabe mischen | Eine Sache, eine Aufgabe; Unzusammenhängendes neu aufmachen |
| Nie Anhänge verwenden | „@Datei + ein Satz" schlägt einen langen Textabsatz |
| Den Zweck verschweigen | Sage „für wen, wofür" – dann passt die Ausgabe besser |

## Hard-Limits-Merkzettel

- Eine Aufgabe lässt sich mit nur **einem** Arbeitsordner verknüpfen;
- nach dem Umschalten eines Connectors braucht es ein **neues Gespräch**, damit es wirkt;
- zeitgesteuerte Aufgaben plant der **lokale Client**: im Ruhezustand/ausgeschaltet wird nichts ausgelöst, Verpasstes wird nicht nachgeholt (manuell „Sofort ausführen" möglich);
- CAPTCHAs, SMS-Codes und Gesichtserkennung verlangen menschliches Eingreifen;
- der Browser-Connector unterstützt nur den Chromium-Kernel;
- historische Aufgaben liegen lokal auf dem Gerät, ohne geräteübergreifenden Sync;
- Skill-Teilen-Links gelten rund 24 Stunden.

## Wahl zwischen den drei Werkzeugen

| Bedarf | Empfehlung | Grund |
| --- | --- | --- |
| Browser-Automatisierung (mit Login) | QoderWork | Der Connector nutzt den echten Browser |
| DingTalk-Ökosystem | QoderWork | IM-Kanäle + DingTalk-MCP-Markt |
| Automatisierung von Desktop-Software | QoderWork | Computer Use auf beiden Plattformen |
| Tiefe Feishu-/Tencent-Docs-Integration | TraeWork | Externe App-Freigabe deckt 13 Feishu-Module ab |
| Drei-Clients-Sync, Aufgaben vom Handy | TraeWork | Web/Desktop/Mobil synchronisieren in Echtzeit |
| Tiefe Bearbeitung des Office-Dreiklangs | WorkBuddy | Ausgereiftes Skill-Ökosystem für Dokumente/Tabellen/PPT |
| Alles davon | Alle drei installieren | Getrennte Konten, keine Konflikte |
