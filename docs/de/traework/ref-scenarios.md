# TraeWork-Szenario-Schnellreferenz

Ein lexikonartiger Index, organisiert nach „Was möchte ich tun?". Szenario finden → direkt zum passenden Kapitel springen.

## Funktionszuordnung

| Was möchte ich tun? | Was nehmen? | Details |
| --- | --- | --- |
| Ohne Installation ausprobieren | Web-Version work.trae.cn | [Installation und Zusammenspiel der drei Clients](/de/traework/02-install) |
| Lokale Dateien bearbeiten | Desktop-Version + lokale Aufgabe | [Installation und Zusammenspiel der drei Clients](/de/traework/02-install) |
| Unterwegs Aufgaben stellen | Mobile App + Cloud-Ausführung | [Installation und Zusammenspiel der drei Clients](/de/traework/02-install) |
| Der KI „Standardvorgehen" beibringen | Skills | [Skills](/de/traework/04-skills) |
| Häufige Prompts fixieren | Eigene Befehle | [Die drei Workflows und Befehle](/de/traework/adv-workflows) |
| Aufgaben in WeChat/Feishu stellen | Office-Assistent | [Office-Assistent](/de/traework/05-bot-assistant) |
| Feishu-Clouddokumente/Bitable lesen und schreiben | externe App-Freigabe (Feishu) | [Plugins und externe Anwendungen](/de/traework/06-plugins-integrations) |
| Online-Zusammenarbeitsdokumente | Tencent-Docs-Plugin | [Plugins und externe Anwendungen](/de/traework/06-plugins-integrations) |
| Zeitgesteuert News/Wochenbericht/Monitoring | Automatisierte Aufgaben | [Automatisierte zeitgesteuerte Aufgaben](/de/traework/07-automated-tasks) |
| KI Formulare ausfüllen/Software bedienen lassen | Computersteuerung | [Computer- und Browsersteuerung](/de/traework/08-computer-browser) |
| KI Webdaten abgreifen lassen | Browsersteuerung | [Computer- und Browsersteuerung](/de/traework/08-computer-browser) |
| Bei komplexen Aufgaben erst die Lösung abstimmen | Spec- / Plan-Workflow | [Die drei Workflows](/de/traework/adv-workflows) |
| Lange Aufgaben automatisch weiterlaufen lassen bis zum Ziel | Goal-Workflow | [Die drei Workflows](/de/traework/adv-workflows) |
| Eigene API-Modelle anbinden | Einstellungen > Modelle | [Modelle und Credits](/de/traework/adv-models-credits) |

## Nach Anwenderprofil

| Wer Sie sind | Empfohlener Einstieg | Fortgeschritten |
| --- | --- | --- |
| Kompletter Anfänger | [Die erste Aufgabe](/de/traework/03-first-task) + Vorlagenbibliothek | [Skills](/de/traework/04-skills) |
| Wöchentlich Berichte schreiben | [Fallbeispiel dynamisches Berichten](/de/traework/case-report) | [Automatisierte zeitgesteuerte Aufgaben](/de/traework/07-automated-tasks) |
| Häufig PPTs erstellen | [Fallbeispiel PPT](/de/traework/case-ppt) | Design-Modus (Design) |
| Wissensmanagement betreiben | [Official-Account→Feishu-Pipeline](/de/traework/case-feishu-pipeline) | [Office-Assistent](/de/traework/05-bot-assistant) |
| Intensive Feishu-Nutzer | [Externe App-Freigabe](/de/traework/06-plugins-integrations) | [Office-Assistent](/de/traework/05-bot-assistant) |
| Kosten im Blick | [Modelle und Credit-Stolperfallen](/de/traework/adv-models-credits) | — |
| Sensibel bei Datensicherheit | [Sicherheitsgrenzen](/de/traework/08-computer-browser) | [MCP und Cloud-Umgebung](/de/traework/adv-mcp-env) |

## Beschränkungsmatrix: Modi und Clients (zum Aufheben)

| Funktion | Work | Code | Design | Web | Desktop | Mobil |
| --- | --- | --- | --- | --- | --- | --- |
| Modus-Unterstützung | ✓ | ✓ | ✓ | ✓ | ✓ | nur Work/Code |
| Ablagebereich (Meine Dateien) | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ |
| Office-Assistent verbinden | ✓ | ✓ | ✓ | ✗ | ✓ (erstmalig Pflicht) | ✓ (nach Verbindung) |
| GitHub-Integration | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ |
| Spec-Workflow | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ |
| Eigene Cloud-Umgebung | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ |
| Eigene Modelle hinzufügen | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| Computersteuerung | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| Externer Browser (Chrome) | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| Browser (Cloud-Aufgaben) | integriert | integriert | integriert | ✓ | ✓ | ✗ |

## Wahl zwischen den drei Werkzeugen

| Bedarf | Empfehlung | Grund |
| --- | --- | --- |
| Tiefe Zusammenarbeit über Feishu/Tencent Docs | TraeWork | Externe App-Freigabe deckt 13 Feishu-Module ab |
| Drei-Clients-Sync, Aufgaben vom Handy | TraeWork | Web/Desktop/Mobil-Aufgaben synchronisieren in Echtzeit |
| Browser-Automatisierung für Datenabruf | QoderWork | Browser-Connector nutzt den echten Login-Zustand |
| DingTalk-Ökosystem | QoderWork | IM-Kanäle + DingTalk-MCP-Markt |
| Tiefe Bearbeitung des Office-Dreiklangs | WorkBuddy | Ausgereiftes Skill-Ökosystem für Dokumente/Tabellen/PPT |
| Alles davon | Alle drei installieren | Getrennte Konten, keine Konflikte |
