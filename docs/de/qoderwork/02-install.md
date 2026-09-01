# Installation und Anmeldung

QoderWork ist eine Desktop-Anwendung, die lokal läuft. Systemvoraussetzungen: **macOS 14+** (Pakete für Apple Silicon / Intel), **Windows 10+ 64 Bit**, 500 MB+ Festplatte, stabiles Netzwerk (Modelle, Skills und Connectors werden aus der Cloud geladen).

> Offizielle Installationsdokumentation: [macOS](https://docs.qoder.com/zh/qoderwork/installation-macos) ｜ [Windows](https://docs.qoder.com/zh/qoderwork/installation-windows)

## Download-Quellen

- Internationale Version: [qoderwork.com](https://qoderwork.com) (laut offizieller Schnellstart-Dokumentation)
- Chinesische Version: [qoder.com.cn/qoderwork](https://qoder.com.cn/qoderwork) (Alibaba-Cloud-Kanal, Anmeldung mit Qoder-CN-Konto)

## Installation unter macOS

1. .dmg herunterladen, in Applications ziehen;
2. falls Gatekeeper beim ersten Start blockiert: Systemeinstellungen → Datenschutz & Sicherheit → unten „Trotzdem öffnen" (der Hinweis erscheint nur einmal);
3. anmelden: bestehendes Qoder-Konto direkt nutzen, sonst per E-Mail oder Drittanbieter registrieren;
4. die Arbeitsumgebung öffnet sich.

Updates: standardmäßig wird im Hintergrund geprüft, aber Download und Neustart erfolgen erst nach Ihrer Bestätigung – die laufende Version wird nie ungefragt ersetzt; manuelle Prüfung über die Menüleiste QoderWork → Nach Updates suchen.

Deinstallation: in den Papierkorb ziehen; für eine vollständige Entfernung der Konfiguration nach dem Abmelden im Terminal `rm -rf ~/.qoderwork` ausführen (löscht auch den lokalen Aufgabenverlauf, der nicht in der Cloud liegt).

## Installation unter Windows: erst das richtige Paket wählen

Beide Installationspakete sind **funktional identisch**; der Unterschied liegt in Installationsort und Rechten:

| | Systemversion X64 (System) | Nutzerversion X64 (User) |
| --- | --- | --- |
| Installationsort | Program Files | %LOCALAPPDATA% |
| Wer kann nutzen | Alle Konten | Nur das aktuelle Konto |
| Administratorrechte | Nötig | **Nicht nötig** |

Offizielle Empfehlung im Original: „Im Zweifel die **Nutzerversion** wählen – keine Administratorrechte nötig, die unkomplizierteste Installation."

Bei einer SmartScreen-Blockade: „Weitere Informationen" → „Trotzdem ausführen". Deinstallation: Einstellungen → Apps → Installierte Apps → Qoder suchen → Deinstallieren; für die Konfiguration `%USERPROFILE%\.qoderwork` löschen.

## Nach der Anmeldung: erst drei Dinge tun

1. **Sprache umstellen**: Spracheinstellung unten links (standardmäßig eventuell Englisch);
2. **Credits ansehen**: Button Credits oben rechts zeigt das Guthaben. Neunutzer erhalten ein Credit-Geschenkpaet; die CN-Version hat zusätzlich ein tägliches Check-in mit Credits (Aktionszeiträume beachten);
3. **Abrechnung verstehen**: QoderWork rechnet in Credits ab, geteilt mit der ganzen Qoder-Familie. Modelle sind in Stufen eingeteilt (Standard/Premium/Flaggschiff) mit unterschiedlichem Verbrauch – für Alltagsaufgaben genügt die Standardstufe; Details unter [Bewusstsein, Kosten und sichere Umgebung](/de/qoderwork/adv-memory-cost).

## Häufige Installationsprobleme

| Problem | Lösung |
| --- | --- |
| macOS: „Entwickler kann nicht verifiziert werden" | Systemeinstellungen → Datenschutz & Sicherheit → Trotzdem öffnen |
| Windows: unzureichende Rechte | Nutzerversion verwenden oder als Administrator ausführen |
| macOS unter 14 | Start nicht möglich; erst das System aktualisieren |
| Aufgabe meldet fehlende Rechte | Prüfen, ob der Arbeitsordner freigegeben wurde |

## Privatsphäre in drei Punkten (offizielle Darstellung)

1. Dateioperationen laufen lokal und werden nicht in die Cloud hochgeladen; die zugehörigen Textinhalte werden jedoch zur Verarbeitung an den API-Dienstleister des großen Modells gesendet;
2. zugegriffen wird nur auf die von Ihnen ausdrücklich freigegebenen Arbeitsordner; für nicht freigegebene Ordner wird vorher Ihre Zustimmung eingeholt;
3. Dateiinhalte werden nicht dauerhaft in der Cloud gespeichert.

---

Weiter: [Die erste Aufgabe →](/de/qoderwork/03-first-task)
