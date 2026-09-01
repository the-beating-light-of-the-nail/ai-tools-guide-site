# QoderWork-Vorlagen für häufige Anweisungen

Sofort einsetzbar. `【】`/`{}` durch die tatsächlichen Inhalte ersetzen. Zu den drei Prompt-Elementen (Ziel/Format/Nebenbedingungen) siehe [Die erste Aufgabe](/de/qoderwork/03-first-task).

## Dateisortierung

**Der große Downloads-Aufräumkurs**

```text
Durchsuche 【Verzeichnis】, finde alle doppelten Dateien und behalte die neueste Version.
Erzeuge eine Liste und warte auf meine Bestätigung, bevor du ausführst.
```

**Sortieren und archivieren**

```text
Räume 【Verzeichnis】 auf: Bilder nach assets/images/, Dokumente (.md/.txt/.pdf) nach docs/,
Konfiguration (.json/.yaml/.toml) nach config/, Code nach Sprache nach src/.
Zeig vorher den Plan; erzeuge zum Schluss einen Bericht (Zählstatistik + Verzeichnisbaum).
```

**Fotoarchiv**

```text
Ordne 【Foto-Verzeichnis】: Lies die EXIF-Aufnahmezeit und lege Ordner nach Jahr und Monat an (2026-01/).
Verschiebe und benenne in „Datum_Nummer.jpg“ um; erzeuge eine CSV-Liste. Erst den Plan vorlegen, erst nach Bestätigung Dateien anfassen.
```

**Belege archivieren**

```text
Erkenne auf jedem Belegfoto im 【Ordner】 Datum, Betrag, Händler und Kategorie (Gastronomie/Verkehr/Unterkunft/Sonstiges):
benenne in „Datum-Kategorie-Betrag-Haendler.jpg“ um, archiviere nach Kategorie
und erzeuge eine Excel-Erstattungsübersicht. Zeig zuerst eine Erkennungsvorschau; erst nach meiner Bestätigung umbenennen.
```

## Datenanalyse

**Mehrdimensionale Excel-Analyse**

```text
@【daten.xlsx】 analysiere:
1. Erkläre die Feldbedeutungen und prüfe auf fehlende Werte und Ausreißer
2. Bilde 【Kennzahl】 nach 【Dimension】 und erstelle ein Ranking
3. Zeige den Trend nach Monat/Woche
4. Erzeuge eine Excel-Zusammenfassung + Diagramme
Anforderung: Zahlen exakt wie in der Quelldatei; Unklarheiten als „zu verifizieren“ markieren.
```

**CSV im Bereich 100.000 Zeilen**

```text
Analysiere 【besucher-/vertriebsdaten.csv】:
Gruppiere nach 【Gruppierungsfeld】; berechne Gesamtmenge und Anteile (1 Dezimalstelle);
erzeuge Excel + gefärbtes Balkendiagramm; speichere in 【Ausgabeverzeichnis】.
```

**Research-PPT (mit Quellen)**

```text
Recherche 【Thema】 und erstelle eine PPT mit 【N】 Seiten: decke 【Dimensionsliste】 ab;
Aufbau: 【Cover → … → Zusammenfassung】; Trends als Linien, Anteile als Kreis;
alle Daten mit Quellenangabe; nicht Auffindbares als „zu verifizieren“ markieren.
```

## Dokumentverarbeitung

**Lebensläufe im Stapel sichten**

```text
Gehe alle Lebensläufe im 【Ordner】 durch und sieve nach der Stellenbeschreibung: 【Anforderung 1/2/3】;
Geeignete in den Ordner „Ausgewaehlte-Lebenslaeufe-【Position】“ archivieren;
Ausgabe als Excel: Name, Kontakt, 【Schlüsselfelder】, Passung (1-10 Punkte), Empfehlungsgrund.
```

**Formate im Stapel vereinheitlichen**

```text
Passe die 10 Word-Dokumente im 【Ordner】 einheitlich an: Überschriften Song/SimSun fett 18 pt,
Fließtext Song/SimSun 12 pt, Zeilenabstand 1,5, Erstzeileneinzug 2 Zeichen. Zeig mir zuerst eine Vorschau zur Bestätigung.
```

**Dokumente vergleichen**

```text
Vergleiche 【Datei A】 mit 【Datei B】: gib die Unterschiede in drei Kategorien aus (hinzugefügt, gelöscht, geändert),
hebe Beträge, Daten, Verantwortliche und Freigabebedingungen hervor und erzeuge eine Liste offener Klärungsfragen.
```

## Automatisierung

**Zeitgesteuerter Tagesbericht (mit Push)**

```text
(Zeit: an Werktagen 09:00) Lese die Daten von gestern im Verzeichnis data/ und erzeuge den Frühbericht:
Zusammenfassung der Kernkennzahlen (mit Vorperiodenvergleich); Schwankungen über ±20 % gelb markieren mit Begründung
(findet sich in den Daten keine, als „zu verifizieren“ markieren); Ausgabe als Markdown nach reports/
und zusätzlich in die DingTalk-Gruppe 【Gruppenname】 senden.
```

**Zeitsteuerung in natürlicher Sprache**

```text
Prüfe alle 3 Stunden 【Webseite/Datei】 und benachrichtige mich mit einer Zusammenfassung, wenn es etwas Neues gibt.
```

## Computer/Browser

**Webseiten gesammelt auslesen**

```text
Sammle aus der verbundenen Browserseite unter 【Einstiegspfad】 die Einträge von 【N】 Seiten
und ordne sie nach der Vorlage 【template.xlsx】 in einer Excel: Datum, Titel, Link.
```

**Bedienaufgabe (sichere Variante)**

```text
Fülle für mich das 【Formular】 auf 【Webseite】 aus; die Angaben stammen aus 【Anhang】.
Bleib nach dem Ausfüllen auf der Absendeseite und warte auf meine Bestätigung. Klicke nicht auf Absenden.
```

## Abläufe

**Die KI zuerst den Plan vorlegen lassen**

```text
【Aufgabenbeschreibung】. Zeig mir zuerst deinen Plan (wie viele Schritte, welche Dateien, wie benannt);
führe ihn erst nach meiner Bestätigung aus.
```

**Als Skill paketieren**

```text
/create-skill Packe den eben durchlaufenen Ablauf 【Ablaufname】 als Skill:
Auslösewort: 【ein Satz】; Schritte: 【nummerierte Schritte】;
Ausgabe: 【Format und Ort】; Grenzen: 【was nicht getan wird】.
```
