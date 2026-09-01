# IM-Kanäle: Fernsteuerung aus dem Chatfenster

Sind die IM-Kanäle aktiviert, bindet QoderWork sich in Ihre gewohnten Chat-Werkzeuge ein. Das Kernprinzip in einem offiziellen Satz: **„Wohin die Nachricht kam, dorthin geht die Antwort"** – was per IM gesendet wird, bekommt sein Ergebnis im selben Chatfenster; die Ergebnisse von Aufgaben, die am Desktop erstellt wurden, bleiben am Desktop und werden nicht ins IM gepusht.

> Offizielle Dokumentation: [docs.qoder.com/zh/qoderwork/im-channels](https://docs.qoder.com/zh/qoderwork/im-channels)

## Anbindung auf sieben Plattformen

| Plattform | Weg der Anbindung |
| --- | --- |
| **DingTalk** | QR-Code scannen, App registrieren und binden (abgelaufener Code lässt sich neu erzeugen) |
| **Feishu / Lark** | QR-Code scannen – App wird automatisch erstellt, Rechte und Ereignis-Callbacks konfiguriert |
| **WeChat** | QR-Code scannen und autorisieren, „sofort einsatzbereit" |
| **WeCom (Enterprise WeChat)** | Schnellbindung (QR-Code empfohlen) oder manuelle Konfiguration (im Admin-Backend einen Bot anlegen, Bot-ID und Secret eintragen) |
| **Slack** | Bot-Token (beginnend mit xoxb-) + App-Level-Token (beginnend mit xapp-) eintragen → Verbindung testen |
| **WhatsApp** | Mit dem Handy QR-Code scannen und binden |

## Zulassungsstrategie: offen oder gekoppelt

- **Offener Modus**: alle Personen und Gruppen können direkt sprechen;
- **Kopplungsmodus**: Gespräche sind erst nach Ihrer Erlaubnis nutzbar (pro Gespräch: nach Freigabe eines Chats kann die Person sprechen; nach Freigabe einer Gruppe alle Mitglieder).

Für die persönliche Nutzung ist der Kopplungsmodus als Standard zu empfehlen – so rufen Kollegen den Bot nicht nach Belieben auf und verbrennen Ihre Credits.

## Der Desktop bleibt die Kontrollzentrale

Alle IM-Gespräche erscheinen am Desktop als **eigenständige Sitzungsfenster mit vollständig getrennten Kontexten**. Dort können Sie: den Fortschritt verfolgen, Bedienung übernehmen und die Konfiguration von MCP/Skills/Connectors anpassen (wirksam für alle IM-Sitzungen).

## /bind: Nachrichten an eine bestimmte Aufgabe routen

Im IM lassen sich direkt Befehle zur Aufgabenbindung geben:

```text
/bind          Liste der bindbaren Aufgaben anzeigen
/bind 2        Aufgabe mit der Nummer 2 binden
/unbind        Bindung lösen
```

Nach dem Binden werden IM-Nachrichten direkt an diese Aufgabe weitergeleitet, und Antworten synchronisieren sich in Echtzeit zurück ins IM. Voraussetzungen: IM-Kanal aktiv + die Aufgabe existiert am Desktop. Die Nachrichtenreihenfolge ist garantiert: mehrere hintereinander gesendete Nachrichten werden der Reihe nach abgearbeitet – nichts geht verloren, nichts kommt in die falsche Reihenfolge.

## Unterstützte Nachrichtentypen

Text, Bilder (OCR, Hintergrund ersetzen), Dateien (PDF/Excel/PPT/Word/CSV/TXT usw.), Spracheingaben (automatisch erkannt), weitergeleitete Sammelnachrichten, Kombinationen aus Bild und Text – ein Foto eines Vertrags oder ein Spesenbeleg einfach ins Chatfenster werfen und verarbeiten lassen.

## Fünf typische Szenarien

| Szenario | Vorgehen |
| --- | --- |
| Leichte Gespräche vom Handy | Unterwegs senden: „Wirf einen Blick auf die Schlüsselzahlen der Angebotsliste Region Ostchina vom letzten Quartal" |
| Bild- und Dateiverarbeitung | Vertrag/Beleg ablichten und senden: „Extrahiere Kernklauseln/Beträge und fasse sie in einer Tabelle zusammen" |
| Aufgaben aus der Ferne stellen | Mit dem Handy den Heim-PC lange Aufgaben ausführen und das Ergebnis zurücksenden lassen |
| Zeitgesteuerte Ergebnis-Pushes | Zeitgesteuerte Aufgabe erzeugt Tagesbericht → jeden Morgen um 9 Uhr automatisch in die DingTalk-Gruppe (kombiniert mit [Zeitgesteuerte Aufgaben](/de/qoderwork/08-automation)) |
| Zusammenarbeit in Gruppen | Bot @-en: „Fasse die heutigen Diskussionspunkte und To-dos der Gruppe zusammen" |

## Hinweise

- Die „zugehörige Organisation" der DingTalk-Gruppe muss der Organisation des Bot-Erstellers entsprechen;
- nach dem Wechsel vom offenen Modus zurück in den Kopplungsmodus müssen sich zuvor nicht gekoppelte Nutzer neu koppeln;
- „Konfiguration entfernen" löscht sämtliche Informationen;
- mehrere Kanäle lassen sich gleichzeitig aktivieren, völlig unabhängig, ohne gemeinsamen Kontext.

---

Weiter: [Zeitgesteuerte Aufgaben →](/de/qoderwork/08-automation)
