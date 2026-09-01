# Anhang A: Häufig genutzte Prompt-Vorlagen

Sofort einsatzbereite Aufgabenvorlagen. Die Platzhalter in eckigen Klammern `【】` durch Ihre Inhalte ersetzen. Einsteigern sei A.1–A.4 empfohlen; die Schreibgrundsätze stehen in der Sechs-Elemente-Tabelle von [Die erste Aufgabe schnell erledigen](/de/workbuddy/04-first-task/).

## A.1 Dateien sortieren

```text
Bitte sortiere die Dateien im aktuellen Ordner.
Ordne sie nach Typ und Thema und erzeuge eine neue Ordnerstruktur.
Zeig mir vor der Ausführung zuerst einen Ordnungsentwurf – Dateien nicht direkt verschieben.
```

## A.2 Excel-Analyse

```text
Bitte analysiere diese Excel-Datei.
Ausgabe: Kernkennzahlen, anomale Daten, Trendveränderungen, mögliche Ursachen, empfohlene Aktionen.
Bitte erzeuge einen Zusammenfassungsbericht und Diagramme.
```

## A.3 PPT-Erzeugung

```text
Bitte erzeuge aus diesem Word-Dokument eine PPT-Gliederung.
Anforderungen: etwa 10 Seiten; jede Seite mit Titel, 3–4 Kernpunkten und Diagrammvorschlag.
Formeller Stil, geeignet für einen Bericht an die Geschäftsführung.
```

## A.4 Meeting-Protokoll

```text
Bitte ordne diesen Meeting-Inhalt.
Ausgabe: Beschlüsse, To-dos, Verantwortliche, Fristen, Risiken, offene Fragen.
```

## A.5 Branchenrecherche

```text
Bitte recherchiere 【Branche/Unternehmen/Produkt】.
Ausgabe: Marktumfeld, wichtigste Akteure, Wettbewerbsvergleich, Trends, Chancen, Risiken.
Bitte mit Quelllinks belegen.
```

## A.6 Verkaufskonzept

```text
Bitte erzeuge aus den Kundenunterlagen ein Presale-Konzept.
Enthalten: Kundenhintergrund, Schmerzpunktanalyse, empfohlene Szenarien, Einführungspfad,
erwarteter Nutzen, Demo-Ablauf.
```

## A.7 Überarbeitung (nicht neu schreiben, Unterschiede benennen)

```text
Bitte überarbeite die bisherige Version von 【Dokumentname】 – nicht neu generieren.
Änderungswünsche: 【Konkrete Änderungspunkte auflisten】
Gib die überarbeitete Version v2 aus und liste die Änderungen in changelog.md auf.
```

## A.8 Dokumentvergleich (Richtlinie / Vertrag / Konzept)

```text
Vergleiche 【Datei A】 mit 【Datei B】.
Gib vier Klassen von Unterschieden aus – neu, gelöscht, geändert, nur Format – mit Kapitel und Originalfundstelle.
Hebe besonders hervor: Beträge, Daten, Verantwortlichkeiten, Freigabebedingungen, Ausnahmen und Negativformulierungen.
Erzeuge eine Auswirkungsliste und offene Fragen; keine Änderung der Originaldateien.
```

## A.9 Tabellen zusammenführen und abgleichen

```text
Führe die 【N】 Tabellen in 【Verzeichnis】 zusammen.
Prüfe zuerst Spaltennamen, Datentypen, Zeitraum und Schlüssel; bei Inkonsistenz stoppen und Differenzen auflisten.
Vor der Aggregation Gesamtreihen, fehlende Werte, Ausreißer und Duplikate ausgeben.
Erzeuge die bereinigte Datei, die Anomalienliste und den Abgleichsbericht.
Die Betragssumme muss mit den Quelltabellensummen abgleichen; solange die Differenz nicht 0 ist, keine Management-Schlüsse.
```

## A.10 Investment-Research: Faktenfundament des Unternehmens

```text
Bitte ordne systematisch die Grundlagen von 【Unternehmensname】 und gib eine strukturierte Zusammenfassung aus:
1) Kerngeschäft und wichtigste Produktlinien
2) Zusammensetzung der Umsatz- und Gewinnquellen
3) Hauptkunden und Anwendungsszenarien
4) Position des Unternehmens in der Wertschöpfungskette
5) Die wichtigsten strategischen Veränderungen der letzten Jahre
Anforderungen: nur überprüfbare Informationen; jeder Abschnitt in 3–5 Kernpunkten;
keine Anlageberatung, nur Faktenordnung.
```

> Die vollständigere Prompt-Kette fürs Investment-Research (Branchenblick, Geschäftszerlegung, Bullen/Bären-Dissens, Due-Diligence-Vollpaket) steht in [Investmentanalyse zu Ihrem Alltag machen](/de/workbuddy/case-investment/). Diese Vorlage dient nur der Forschungsunterstützung und ist keine Anlageberatung.

## A.11 Brief für Multi-Agent-Aufgaben

```text
Ziel: Für 【Produkt/Projekt】 ein(e) 【Ergebnistyp】 von 【Länge】 erstellen.
Stil: 【Referenzstil】.
Material: 【Pfad zum Materialraum oder bereits gelieferte Dateien】.
Rollen: 【Produzent, Rolle A, Rolle B …】
Bestätigungspunkte: 【An welchen Stellen nach Fertigstellung Nutzerbestätigung nötig ist】.
Voll-/halbautomatisch: 【Ob an Zwischenpunkten menschliches Eingreifen nötig ist】.
```

## A.12 Definition einer automatisierten Aufgabe

```text
Aufgabenname: 【Name】
Auslösung: 【täglich 09:00 / jeden Freitag / jeden 1. des Monats】
Prompt: 【Vollständige Aufgabenanweisung】
Datenquellen: 【Liste der @Skills oder Konnektoren】
Qualitätsschranken: 【gültige Einträge ≥ N; verfügbare Datenquellen ≥ N】
Ausgabeformat: 【strukturierte Liste/Datei】
Push-Ziel: 【Feishu-Gruppe / E-Mail / Dokument anhängen】
Idempotenz: Batch-ID = 【Präfix】-{date}, nach erfolgreichem Push markieren, nicht doppelt pushen
Wiederholungsstrategie: Datenquellen-Timeout 1× wiederholen; Push-Fehler 2× mit Backoff; anderes an Menschen
Owner: 【Verantwortlicher】
Abschaltung: WorkBuddy-Verwaltungsseite für Automatisierungen → Pause
```
