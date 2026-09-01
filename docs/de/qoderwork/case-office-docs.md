# Fallbeispiel: Stapelweise Dokumentverarbeitung und Multimedia

Lebenslauf-Screening, Außenhandelsdokumente, Belegarchivierung, Audio- und Videoverarbeitung – diese Dokumentarbeiten mit „klaren Regeln, großem Volumen und Fehleranfälligkeit" sind das Heimspiel der KI im Büro.

> Quellen: CSDN-Praxisanleitung, offizielle Nutzerfall-Bibliothek, Community-Tests (im Text jeweils genannt).

## Szenario 1: 115 Lebensläufe im Stapel sichten (CSDN-Test)

```text
Gehe alle 115 Word-Lebensläufe im 【Lebenslauf-Ordner】 durch und sieve nach dieser Stellenbeschreibung:
- Englisch CET-6 oder IELTS ab 6,0
- Erfahrung im Betrieb von Xiaohongshu oder Instagram
- Vertraut mit Algorithmen ausländischer sozialer Medien
Geeignete Kandidaten in den Ordner „Ausgewaehlte-Lebenslaeufe-Overseas-Ops“ archivieren;
Ausgabe als Excel: Name, Kontakt, Englischniveau, Operationserfahrung, Passung (1-10 Punkte), Empfehlungsgrund.
```

Im Test in rund **1,5 Minuten** erledigt; Beispielausgabe: „Passung 8 Punkte, IELTS 6,5, drei Monate Instagram-Account-Betrieb". Achtung: Die Passungsbewertung ist eine Orientierungshilfe – die Prüfung vor dem finalen Gespräch entfällt nicht.

## Szenario 2: Tech Packs strukturiert erfassen (offizieller Nutzerfall)

Eine Merchandiserin im Textilaußenhandel: pro Bestellung 20+ Seiten englisches PDF, 30+ Messpunkte (POM), Toleranztabellen und Bruchzahlen für 7 Größen (1/2", 3/4"). Von Hand 2–3 Stunden pro Paket; ein falsch gelesener halber Inch kostete schon eine Nacharbeitung im Wert von über 200.000 Yuan. Ihr Vorgehen: pro Bestellung einen Ordner „Bestellung-2024SS-Kunde-ABC" als Arbeitsordner anlegen:

```text
Extrahiere aus jedem Tech Pack die Messpunkte und übersetze sie ins Chinesische:
Struktur: Messtelle | englischer Name | chinesischer Name | Toleranz (+/-);
pro Zeile die Werte aller Größen; Bruchzahlen in der ursprünglichen Genauigkeit (1/2“, 3/4“).
Achte besonders auf die Korrektheit der Brucheinheiten – davon hängt direkt die Produktionsqualität ab.
```

Ergebnis: **2–3 Stunden pro Paket → 3 Pakete in 10 Minuten, 100 % Genauigkeit**. Die Wiederverwendung ist ein Satz: „Zwei neue Tech-Pack-Styles sind da – bitte im bisherigen Format verarbeiten." Genau das ist die Stärke der nachhaltigen Wiederverwendung im [Arbeitsordner](/de/qoderwork/04-files).

## Szenario 3: Spesenbeleg-Fotos archivieren (offizieller Nutzerfall)

Schmerzpunkt: Die Dateinamen der Belegfotos sind reine Zufallszeichenketten. Anweisung in vier Schritten:

```text
Erkenne auf jedem Foto im 【Beleg-Ordner】 Ausgabedatum, Betrag, Händler und Kategorie (Verkehr/Unterkunft/Sonstiges):
1. Benenne in „Datum-Kategorie-Betrag-Haendler.jpg“ um (z. B. 20260301-Essen-128Yuan-RestaurantX.jpg)
2. Archiviere in Unterordnern je Kategorie
3. Erzeuge eine Excel-Erstattungsübersicht (Datum/Kategorie/Betrag/Händler/Notiz)
Zeig zuerst eine Vorschau der Erkennungsergebnisse; erst nach meiner Bestätigung umbenennen.
```

OCR-Erkennung + Kategorisierung + Umbenennung in einem Zug.

## Szenario 4: das Multimedia-Trio

**Audio zu zweisprachigen Untertiteln** (CSDN): MP3 hochladen →

```text
Erzeuge SRT-Untertitel mit Zeitachsen-Genauigkeit von 1 Sekunde und zusätzlich ein Word mit drei Spalten „Zeit + Chinesisch + Englisch“,
gespeichert im Ordner „Besprechungsprotokolle“.
```

Die SRT lässt sich direkt in CapCut/Jianying importieren.

**Videos im Stapel zu GIFs** (Test von Chenmo Wang'er):

```text
Wandle alle Videos im Ordner in GIFs um, jeweils unter 10 MB, Wiedergabegeschwindigkeit 2-fach;
versehe jedes GIF mit Angaben zu Videolänge, Erstellungszeit und Einsatzzweck.
```

Alle innerhalb der 10-MB-Grenze und mit Anmerkungen – als Ersatz für die halbstündige manuelle Kette „Aufzeichnen → Schneiden → Exportieren → Bildrate fröhlich justieren".

**PPT zu Video** (Test von Xu Jingfeng):

```text
@【Praesentation.pptx】 Öffne die Datei, blättere durch jede Folie und erzeuge daraus ein kurzes Video – so kurz wie möglich.
```

Blätteraufnahme, Untertitel und vertonte Zusammensetzung laufen automatisch.

## Zusammenfassung der Systematik

| Gemeinsamkeit der Szenarien | Gestaltungspunkt |
| --- | --- |
| Klare Regeln (fixe Felder/Formate) | Feldliste und Format in die Anweisung schreiben |
| Großes Volumen | Ordner-Stapel + Vorlagendatei |
| Fehleranfällig (Einheiten/Genauigkeit/Namen) | Kernauflagen gesondert betonen („Brucheinheiten hängen direkt an der Qualität") |
| Wiederverwendung nötig | nach dem Durchlaufen als Skill fixieren, Auslösung per Ein-Satz-Befehl |

Und die letzte allgemeine Abnahmeregel: **Bevor Sie das Ergebnis weitergeben, gehen Sie es selbst vollständig durch** – drei Exemplare auf Felder prüfen, ein GIF öffnen und abspielen, die Excel-Formeln kontrollieren.
