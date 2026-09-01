# Zeitgesteuerte Aufgaben: zur gesetzten Zeit läuft es von selbst

Die offizielle Positionierung in einem Satz: „Zeitgesteuerte Aufgaben verwandeln QoderWork von ,erst auf Nachfrage tätig' zu ,zur gesetzten Zeit von selbst aktiv'."

> Offizielle Dokumentation: [docs.qoder.com/zh/qoderwork/scheduled-tasks](https://docs.qoder.com/zh/qoderwork/scheduled-tasks)

## Ausführungsmodell

Zur vereinbarten Zeit → automatisch eine neue Gesprächsaufgabe anlegen → nach Ihrem vorformulierten Prompt ausführen → das Ergebnis wird in diesem Gespräch gespeichert. Zeitgesteuerte Aufgaben können MCP-Tools aufrufen, Connectors nutzen (Browser-Automatisierung, native macOS-Apps), Skills ausführen und lokale Dateien lesen und schreiben – **alles, was eine manuelle Aufgabe kann, kann auch eine zeitgesteuerte Aufgabe**.

## Zwei Wege zum Erstellen

**Weg 1: im Gespräch in natürlicher Sprache** (empfohlen)

Einfach Zeit + Aufgabe in den Dialog schreiben; die KI erschließt Häufigkeit, Zeitpunkt und Inhalt selbst – ganz ohne Cron-Ausdrücke. Diese Formulierungen werden erkannt:

```text
Alle 3 Stunden …
Am letzten Arbeitstag jedes Monats …
Jeden Dienstag und Donnerstag um 14 Uhr …
```

**Weg 2: manuell im Panel**

Linke Navigation „Zeitgesteuerte Aufgaben" → oben rechts „+ Neue zeitgesteuerte Aufgabe" → ausfüllen → speichern, sofort wirksam.

## Sechs Zeitmuster

| Häufigkeit | Geeignet für |
| --- | --- |
| Ohne Wiederholung (einmalig zu Datum und Uhrzeit) | Besprechungsvorbereitung, Stichtagsprüfung, zeitversandter Versand |
| Intervall (alle N Stunden/Tage) | Preisbeobachtung, Fortschrittsabfragen |
| Stündlich | Monitoring-Alarme, Service-Checks |
| Täglich | Morgenbericht, Datenreport |
| Wöchentlich | Wochenberichtsentwurf, Wettbewerberbeobachtung |
| Monatlich | Monatsanalyse, Rechnungszusammenfassung |

Weitere Einstellungen: Aufgabenname, Aufgaben-Prompt, Arbeitsverzeichnis (optional; Festlegung empfohlen für einen stabilen Kontext), Anhänge (optional).

## Verwaltung und Fehlersuche

- Schalter oben links auf der Karte startet/stoppt;
- Menü „...": **Sofort ausführen** (zum Testen oder Nachholen) / Löschen / Bearbeiten;
- Status der Ausführungsverläufe: Erfolg / Läuft / Fehlgeschlagen.

## Grenzen, die man kennen muss

1. **Geplant vom lokalen Desktop-Client**: der Zeitpunkt folgt der Systemzeitzone Ihres Rechners; **im Ruhezustand oder ausgeschaltet wird nichts ausgelöst** – für wichtige Aufgaben „System wachhalten" aktivieren (Schalter oben rechts auf der Seite der zeitgesteuerten Aufgaben);
2. **verpasste Läufe werden nicht automatisch nachgeholt**; in den Ausführungsverläufen per „Sofort ausführen" manuell nachziehen;
3. jeder Lauf erzeugt ein eigenständiges Gespräch und **verbraucht Credits wie ein manuelles Gespräch**;
4. Browser-Automatisierung setzt voraus: Browser-Connector aktiv und Chrome läuft; ein abgelaufener Login auf der Zielseite führt zum Fehlschlag.

## Prompt-Checkliste für zeitgesteuerte Aufgaben

Ein Gespräch ohne Aufsicht – je genauer der Prompt, desto stabiler der Lauf:

- [ ] Datenquelle klar benennen (welche Datei/welche Webseite/welches System)
- [ ] Ausgabeformat und Ablageort klar benennen („Ausgabe als Markdown ins Verzeichnis reports/")
- [ ] Beurteilungsmaßstab klar benennen („bei einem Rückgang von über 20 % rot markieren")
- [ ] Ausnahmefälle klar benennen („bei leeren Daten einen Hinweis ausgeben, nichts zusammenbasteln")
- [ ] **erst manuell einmal durchlaufen, den Prompt justieren, dann fixieren**

Eine vollständige Vorlage:

```text
Aufgabenname: Täglicher Operations-Frühbericht
Zeit: An Werktagen um 9:00 Uhr
Prompt: Lese die Operations-Datendateien des Vortags im Verzeichnis data/ und erzeuge den Frühbericht:
1. Zusammenfassung der Kernkennzahlen (Umsatz, Bestellungen, Rückerstattungsquote) mit Vergleich zum Vortag
2. Kennzahlen mit einer Schwankung von mehr als ±20 % gelb markieren und mögliche Gründe nennen (findet sich in den Daten kein Grund, als „zu verifizieren" markieren)
3. Ausgabe als Markdown nach reports/{Datum}-Fruehbericht.md und zusätzlich in die DingTalk-Gruppe „Operations" senden
```

Der IM-Versand setzt einen konfigurierten [IM-Kanal](/de/qoderwork/07-im-channels) voraus – zeitgesteuerte Aufgaben + IM sind die Goldkombination der QoderWork-Automatisierung.

Fortgeschrittene Spielarten („mal eben auslösen" per Ein-Satz-Befehl) unter [E-Commerce-Tagesbericht-Fall](/de/qoderwork/case-browser) und [Skills im Gespräch erstellen](/de/qoderwork/adv-skill-create).
