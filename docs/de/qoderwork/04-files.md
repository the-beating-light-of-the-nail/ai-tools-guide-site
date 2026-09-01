# Arbeitsordner: die KI direkt Ihre Dateien lesen und schreiben lassen

Der Arbeitsordner ist die größte Trennlinie zwischen QoderWork und einer „Chat-KI": Nach der Freigabe eines lokalen Verzeichnisses **liest und schreibt die KI direkt die Dateien auf Ihrem Rechner**, ohne manuelles Hoch- und Herunterladen. Offiziell im Original: „Ordner sinnvoll zu strukturieren und als Arbeitsordner festzulegen ist der Schlüssel, um aus QoderWork den größten Wert zu ziehen."

## Einrichtung

1. + klicken, um eine neue Aufgabe zu erstellen;
2. unter dem Eingabefeld „In Ordner arbeiten" anklicken (in einigen Versionen „Arbeitsordner wählen");
3. im Dateiauswahldialog des Systems den Zielordner markieren;
4. das Anliegen direkt eintippen – die KI liest den Ordnerinhalt automatisch ein.

**Hard-Limit: Eine Aufgabe kann nur mit einem Arbeitsordner verknüpft werden**; für verschiedene Ordner jeweils eigene Aufgaben anlegen.

## Wann ein Ordner?

| Szenario | Empfehlung |
| --- | --- |
| Einzelne Datei bearbeiten | Direkt in den Dialog ziehen |
| Mehrere zusammengehörige Dateien | Arbeitsordner |
| Dateien kommen laufend hinzu | Arbeitsordner (die KI bemerkt neue Dateien sofort) |
| Ergebnisse sollen an einem festen Ort landen | Arbeitsordner |

## Drei Regeln zur Dateisicherheit

1. **Zugriff nur auf ausdrücklich freigegebene Verzeichnisse** – für andere Orte wird vorher Ihre Zustimmung eingeholt;
2. **Dateien werden nie dauerhaft gelöscht** – Löschvorgänge verschieben nur in den Papierkorb des Systems;
3. **Dateiinhalte werden nicht dauerhaft gespeichert** – sie gehen zur Verarbeitung an das KI-Modell, bleiben aber nicht dauerhaft in der Cloud.

Empfehlung: nur häufig genutzte Arbeitsordner freigeben; nicht das gesamte Benutzerverzeichnis als Arbeitsordner festlegen.

## Unterstützte Formate

| | Formate |
| --- | --- |
| Lesen | PDF, Word (.docx), Markdown, Plaintext, RTF, Excel (.xlsx/.xls), CSV, TSV, PNG/JPG/SVG/GIF (mit OCR), sämtliche Quellcodedateien, PowerPoint (.pptx), JSON/YAML/XML/SQL |
| Ausgabe | Word, PDF, Markdown, HTML, Excel, CSV, PPTX, PNG, SVG, interaktive HTML-Berichte, Code in beliebiger Sprache, JSON/XML |

Das deckt praktisch alle Büro-Szenarien ab; die einzige häufige Lücke sind alte Binärformate wie .doc / .ppt – vorher in docx/pptx umwandeln.

## Dauerhafte Nutzung: einmal einrichten, lange wiederverwenden

Die eigentliche Stärke des Arbeitsordners liegt im „fortlaufenden Aufbau". Das offizielle Bild: **„Der Ordner ist der ,Rohstoffspeicher', der Prompt ist der ,Bauplan'."**

Typischer Zyklus:

```text
Woche 1: 12 Jahresberichte der Abteilung in den Ordner „Jahresrueckblick-2024" legen, als Arbeitsordner festlegen
        und von der KI eine Jahreszusammenfassung erstellen lassen → fertiges Ergebnis in 6 Minuten
Woche 2: 3 neue Datendateien ergänzen, QoderWork öffnen (Arbeitsordner unverändert, keine Neuauswahl nötig)
        und einen Satz sagen: „Neue Daten sind dazugekommen, bitte den Bericht aktualisieren“ → in 5 Minuten erledigt
```

Vier Tipps zur Ordnerorganisation:

1. **Namen mit Datum oder Nummer**: `2024-03-Klassenarbeit-Ergebnisse.xlsx`, dann sortiert die KI sauber;
2. **Ein Thema, ein Ordner**: nicht Privatleben und drei Projekte in einem Verzeichnis mischen;
3. **Einheitliche Formate**: Dateien mit gleicher Vorlage und gleichen Spaltennamen lassen sich automatisch zusammenführen;
4. **Unterordner nutzen**: rekursives Lesen wird unterstützt; Schichten wie `Rohmaterial/Ergebnisse/Referenzen` sind sinnvoll.

## Sieben typische Rollen

| Rolle | Nutzung des Ordners |
| --- | --- |
| Lehrkraft | Ergebnisse einzelner Klassenarbeiten → fortlaufend aktualisierter Lernstandsbericht |
| Vertrieb | Monatsberichte → Trends und Anomalie-Warnungen |
| Finanzwesen | Belege → zusammengeführtes Ausgabenbuch |
| Anwältin/Anwalt | Fallakten (Klage/Verträge/Belege) → Fallanalyse-Bericht |
| Operations | Kanaldaten → ROI-Wochenbericht |
| Außenhandel | Tech Packs der Bestellungen → strukturierte Extraktionstabelle |
| Forschung | Literatur-PDFs → Literaturübersicht |

Praxisfälle unter [Dateisortierung und Fotoverwaltung](/de/qoderwork/case-file-organize).

---

Weiter: [Skills und Experten-Kits →](/de/qoderwork/05-skills)
