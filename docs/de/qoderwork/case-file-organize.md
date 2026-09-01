# Fallbeispiel: Dateisortierung und Fotoverwaltung

Die Dateisortierung ist QoderWorks „erste Lektion" und das unmittelbarste Szenario, um zu spüren, dass „die KI die Arbeit wirklich erledigt". Dieses Kapitel verbindet offizielle Musterfälle, Nutzerfälle und Community-Tests.

> Community-Material: der Praxistest von Chenmo Wang'er ([javabetter.cn](https://javabetter.cn/sidebar/itwanger/ai/qoderwork-review.html)) und die offizielle Nutzerfall-Bibliothek. Die Prompts wurden von dieser Website aufbereitet.

## Szenario 1: der große Downloads-Aufräumkurs

**Duplikate bereinigen** (offizieller Beispiel-Prompt):

```text
Durchsuche meinen Downloads-Ordner, finde alle doppelten Dateien und behalte die neueste Version.
```

Messwerte (Chenmo Wang'er, Beta-Phase): das Verschieben von 2444 Lebenslauf-Dateien dauerte **unter 6 Sekunden**; das Aufräumen eines riesigen Downloads-Ordners mit zehntausenden Dateien rund 300 Sekunden, mit einem Bericht, der „Duplikat / gelöscht / behalten" auflistet. Die KI erkennt Duplikate per MD5-Wert und gruppiert nach Zeit – zwei Größenordnungen schneller als von Hand.

Sicherheitsdesign: Das Werkzeug **löscht nichts eigenmächtig**; es legt den Plan vor und führt erst nach Ihrer Bestätigung aus; Gelöschtes geht nur in den Papierkorb des Systems (siehe die drei Sicherheitsregeln unter [Arbeitsordner](/de/qoderwork/04-files)).

**Sortieren und archivieren** (offizieller Musterfall):

```text
Räume 【Verzeichnis】 auf: Bilder nach assets/images/, Dokumente (.md/.txt/.pdf) nach docs/,
Konfigurationsdateien (.json/.yaml/.toml) nach config/, Code nach Sprache in Unterverzeichnisse von src/.
Zeig vorher den Plan und verschiebe erst nach Bestätigung; erzeuge zum Schluss einen Bericht (Zählstatistik + Verzeichnisbaum).
```

Die erweiterte Version mit Umbenennungsregeln:

```text
Räume den Downloads-Ordner auf: sortiere nach Dateityp (Dokumente/Bilder/Videos/Archiv),
benenne in das Schema „Typ_Datum_Originalname“ um und erzeuge ein Sortier-Protokoll.
```

## Szenario 2: aus der Fotowand wird ein Fotoarchiv

Offizieller Musterfall (Fotoverwaltung):

```text
Ordne das Verzeichnis ~/Pictures/2024:
1. Lies die EXIF-Aufnahmezeit jedes Fotos
2. Lege verschachtelte Ordner nach Jahr und Monat an (2024-01/, 2024-02/ …)
3. Verschiebe nach Aufnahmezeit und benenne in „Datum_Nummer.jpg“ um
4. Erzeuge eine CSV-Liste (Originalname, neuer Pfad, Aufnahmezeit)
Erst den Plan vorlegen; erst nach meiner Bestätigung Dateien anfassen.
```

## Szenario 3: die Jahreszusammenfassung der Verwaltungsdirektorin (offizieller Nutzerfall)

Frau Li, Verwaltungsdirektorin eines 300-Personen-Technologieunternehmens, muss jedes Jahr die Jahresberichte von acht Abteilungen zusammenführen – über 50 Word/PDF-Dateien auf dem Desktop, „mindestens zwei Tage pro Jahr". Ihr Vorgehen:

1. Ordner „Jahreszusammenfassung-2024-Materialien" anlegen und 12 Dateien einheitlich benennen (Abteilung-Jahr-Dateityp);
2. als [Arbeitsordner](/de/qoderwork/04-files) festlegen;
3. eine strukturierte Anweisung:

```text
Nutze Jahreszusammenfassung-2023.docx als Formatvorlage und führe die Berichtsmaterialien der Abteilungen zusammen:
Extrahiere Ergebnisse und Leistungszahlen je Abteilung, verbinde sie mit Finanz- und Geschäftskennzahlen,
gliedere in die vier Blöcke „Geschäftsüberblick / Geschäftsfelder / Teamaufbau / Ausblick“,
orientiere dich am Stil der Zusammenfassungen früherer Jahre, behalte das Vorlagenlayout und gib das Ergebnis als Word im Verzeichnis output/ aus.
```

Ergebnis: **zwei Tage → 6 Minuten**, mit 100 % erhaltenen Kernleistungszahlen. Neue Dateien später einfach in denselben Ordner legen und „Neue Daten sind dazugekommen, bitte den Bericht aktualisieren" sagen – die Aktualisierung erfolgt inkrementell.

## Die gemeinsame Systematik

| Szenario | Kernstruktur des Prompts | Zentrale Auflage |
| --- | --- | --- |
| Duplikate bereinigen | scannen → neueste behalten → Liste erzeugen | erst Plan, dann Ausführung |
| Sortieren und archivieren | Sortierregeln + Benennungsregeln + Bericht | erst Plan, dann Verschieben |
| Fotoverwaltung | EXIF → verschachtelte Ordner → umbenennen → Liste | erst Plan, dann anfassen |
| Periodische Zusammenfassung | Vorlagendatei + Blockstruktur + Stilreferenz | Daten müssen nachvollziehbar sein |

Vier Sicherheitsgrundlinien:

1. immer „erst Plan, dann Ausführung" – Liste bestätigen, dann freigeben;
2. vor Massenoperationen ein Backup anlegen (oder sicherstellen, dass der Papierkorb-Mechanismus greift);
3. Freigaben minimal halten – nur die nötigsten Verzeichnisse;
4. nach der Ausführung stichprobenartig prüfen: Dateianzahl ausgeglichen (Anfangsbestand = verschoben + behalten + zu klären)?

---

Weiter: [Datenanalyse und Researchbericht →](/de/qoderwork/case-data-report)
