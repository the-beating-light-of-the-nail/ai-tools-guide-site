# Die erste Aufgabe: von der Beschreibung zum Ergebnis

Der Nutzungszyklus von QoderWork hat nur drei Schritte: **Aufgabe beschreiben → Ausführung beobachten → Ergebnis einsammeln**. Dieses Kapitel erklärt die Details jedes Schritts samt offizieller Best Practices.

## Fünf Schritte zum Erstellen einer Aufgabe

1. **Aufgabe beschreiben**: Der Prompt soll „ergebnisorientiert" sein – sagen Sie direkt, „was Sie am Ende haben wollen", nicht „nach welchen Schritten vorzugehen ist";
2. **Workbench wählen**: unten links im Eingabefeld, Standard „Allgemein" (dazu drei Vertical-Workbenches für Design/Folien/Schreiben, siehe [Die drei Workbenches](/de/qoderwork/adv-workbenches));
3. **Modell wählen**: Modellwahl unten rechts (nächster Abschnitt);
4. **Arbeitsordner wählen** (optional): die KI direkt einen lokalen Ordner lesen und schreiben lassen, siehe [Arbeitsordner](/de/qoderwork/04-files);
5. senden.

Eine Aufgabe, die sich für den ersten Lauf eignet:

```text
Analysiere die hochgeladene Datei verkaufsdaten.csv: erkläre die Feldbedeutungen, bilde Umsätze je Kategorie und erstelle ein Ranking.
Erzeuge eine Excel-Übersichtstabelle und 3 Schlussfolgerungen.
Anforderung: Zahlen exakt wie in der Quelldatei; Unklarheiten als „zu verifizieren" markieren.
```

## Drei Zugänge für mehr Kontext

| Zugang | Nutzung | Geeignet für |
| --- | --- | --- |
| **+-Button** | Aus dem Menü hinzufügen: Experten-Kits, Skills, Connectors, Dateien | Anhänge hochladen, Fähigkeiten anhängen |
| **@-Referenz** | Mit @ auf bestehende Objekte verweisen: Kits, frühere Aufgaben, zeitgesteuerte Aufgaben, Dateien | Bestehende Inhalte verknüpfen |
| **/-Aufruf** | Mit / Skills und Befehle aufrufen (xlsx, pptx, pdf, find-skills usw.) | Präzise ansprechen |

Offizielle Best Practice im Original: „**Aufgaben mit korrekten Referenzen und Anhängen schneiden fast immer besser ab als ein langer Textabsatz.**"

## Welches Modell wählen?

| Stufe | Geeignet für | Verbrauch |
| --- | --- | --- |
| Flaggschiff | Komplexe Schlussfolgerungen, fehlerintolerante Schlüsselberichte, Analysen über viele Dateien | Am höchsten |
| Premium | Kräftige und ausgewogene Vorhaben mit hoher Priorität | Erhöht |
| Standard | Alltagsaufgaben, Balance aus Tempo und Qualität – **für die allermeisten Szenarien ausreichend** | Mittel |
| Qwen3.7-Max / Plus | Tongyi-Qianwen-Serie: Max für fortgeschrittene Schlussfolgerungen, Plus für schnelles, günstiges Alltagsgeschäft | Jeweils verschieden |

Zwei wichtige Mechanismen:

- **Jederzeit wechselbar, sofort wirksam**: Mitten in einer Aufgabe lässt sich das Modell wechseln, ohne den Kontext zu verlieren. Offizielles Beispiel-Vorgehen: Daten mit Standardstufe einsammeln → Tiefenanalyse mit Flaggschiff → formatierte Ausgabe mit Standardstufe;
- bei knappem Guthaben: Credits nachkaufen oder auf Premium/Standard wechseln, um den Verbrauch zu senken.

## Ausführung beobachten: das Aufgaben-Monitor-Panel

Der Aufgaben-Monitor sitzt rechts im Arbeitsbereich und enthält drei Teilpanels:

- **To-do-Plan**: die von der KI zerlegten Ausführungsschritte, mit Häkchen nach Fortschritt;
- **Ergebnisse**: Karten der erzeugten Dateien, per Klick im System öffnen;
- **Skills & MCP**: die in dieser Runde genutzten Skills und Connectors – durchgehend transparent.

**Anweisungen zwischendurch nachreichen**: Nachrichten während des Laufs landen in einer Warteschlange und werden nach Ende der aktuellen Runde ausgeführt (mit vollem Kontext); nach Aufgabenende gesendete werden sofort ausgeführt. Bei Unzufriedenheit einfach sagen: „Sortiere nach Preis aufsteigend", „Worauf stützt sich die Schlussfolgerung in Punkt 3?".

## Die Grenzen einer Aufgabe

- Eine Aufgabe = eine eigenständige KI-Arbeitssitzung mit eigenem Dialog, Kontext, Monitor und Ergebnissen; **zwei Aufgaben teilen keine Daten**;
- zusammengehörige Iterationen (Entwurf → Überarbeitung → Endfassung) bleiben in derselben Aufgabe; Unzusammenhängendes in eine neue Aufgabe – sauberer Kontext und keine verpulverten Credits für das Wiederholen alter Dialoge;
- alle Aufgaben (inklusive ungesendeter Entwürfe) werden automatisch gespeichert; die Aufgabenliste ist nach „Zuletzt" sortiert und kann durchsucht, gruppiert, angepinnt, als Markdown exportiert und archiviert werden (Archivieren ist wiederherstellbar – statt löschen lieber archivieren).

## Drei Elemente eines Prompts

Das offizielle Prompt-Grundgerüst – vor jeder Aufgabe kurz durchgehen:

| Element | Was beantwortet es | Beispiel |
| --- | --- | --- |
| Ziel | Was ist das Ergebnis? | „Eine Excel-Übersichtstabelle" |
| Format | In welcher Form ausgeben? | „Ausgabe als .xlsx, mit Diagrammen" |
| Nebenbedingungen | Was muss enthalten/vermieden werden? | „Keine erfundenen Daten; Beträge mit zwei Dezimalstellen" |

Weitere Vorlagen unter [Vorlagen für häufige Anweisungen](/de/qoderwork/ref-templates); die vollständige Prompt-Methodik (sechs fortgeschrittene Techniken + fünf große Irrtümer) ist über die Referenz in [Szenario-Schnellreferenz](/de/qoderwork/ref-scenarios) verlinkt.

---

Weiter: [Arbeitsordner: die KI direkt Ihre Dateien lesen und schreiben lassen →](/de/qoderwork/04-files)
