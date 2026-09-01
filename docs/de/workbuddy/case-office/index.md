# Kapitel 11: Das Büro-Trio: Word, Excel, PPT

Das Büro-Trio ist für die meisten der Ort, an dem sie den Wert von WorkBuddy zum ersten Mal spüren. Dieses Kapitel konzentriert sich auf die drei häufigsten Büro-Erzeugnisse: Word-Dokumente, Excel-Tabellen und PPT-Berichte.

## Gemeinsamer Workflow: Die Aufgabe zuerst in fünf Fragen zerlegen

Welcher Dokumenttyp auch immer – bei vielen Büro-Aufgaben, die „die KI schlecht macht", liegt die Wurzel nicht darin, dass das Modell nicht schreiben kann, sondern darin, dass der Mensch die Lieferstandards nicht klar benannt hat.

| Frage | Was zu klären ist | Beispiel |
| --- | --- | --- |
| Ziel | Wem diese Unterlage welche Entscheidung erleichtern soll | Für den Abteilungsleiter, zur Beurteilung, ob das Projekt weiterläuft |
| Publikum | Wer liest, ob der Hintergrund bekannt ist | Die Geschäftsführung liest nur Schlussfolgerungen; das Projektteam braucht Prozess und Verantwortliche |
| Material | Welche Dateien Faktenquellen sind, welche nur Referenz | `data.xlsx` ist die alleinige Datenbasis; die alte PPT nur Struktur-Referenz |
| Format | Word, Excel, PPT – oder alle drei verzahnt | Ein Rückblick in Word, eine Risiko-Liste in Excel, eine 8-seitige Berichts-PPT |
| Abnahme | Woran Nutzbarkeit erkannt wird | Zahlen lassen sich zur Quelldatei zurückverfolgen, Tabellenformeln sind aktualisierbar, die PPT läuft beim Projizieren nicht über |

## Zuerst den passenden Skill wählen: Empfohlene Kombinationen für Büro-Aufgaben

| Skill | Eignet sich für | Beachten |
| --- | --- | --- |
| Word / DOCX | DOCX erstellen, prüfen, bearbeiten – Überschriften, Nummerierung, Tabellen, Revisionen | Für lokale docx-Dateien |
| Excel / XLSX | Arbeitsmappen lesen, bereinigen, schreiben; Formeln, Datumsangaben, Vorlagen erhalten | Zuerst die Datenbasis klären |
| Powerpoint / PPTX | PPTX erstellen, bearbeiten, prüfen – Layouts, Platzhalter, Diagramme | Für Szenarien mit editierbarer PPTX |
| Office Document Specialist Suite | Kombinierte Verarbeitung von Word / Excel / PPT und Verzahnung mehrerer Dateien | Bei komplexen Aufgaben schrittweise abnehmen |
| wps / kdocs skill | WPS-Trio und Kingsoft-Cloud-Dokumente | Meist API-Key nötig |
| Tencent Docs | Erstellen und Bearbeiten von Online-Word, -Excel, -Folien | Meist Autorisierung nötig |
| Markdown Converter | PDF, Word, PPT, Excel in Markdown umwandeln | Gut zum Lesen von Material, keine Endformatierung |
| PPT Generator / PPT Workflow | Aus Thema, Manuskript oder Material automatisch Präsentationen erzeugen | Nach der Erzeugung noch manuell prüfen |
| Excel-Formel-Generator | Natürliche Sprache zu Excel-/WPS-/Google-Sheets-Formeln | Formeln an Beispieldaten validieren |
| Tencent Meeting | Meetings buchen, Transkripte und KI-Protokolle abrufen | Braucht Autorisierung der Meeting-Plattform |

Praktische Kombination: Bei lokalen Dateien zuerst **Word / DOCX, Excel / XLSX, Powerpoint / PPTX**; bei Online-Zusammenarbeit **Tencent Docs** oder **kdocs**; bei viel Material zuerst mit **Markdown Converter** die Struktur extrahieren; bei Meeting-Abläufen **Tencent Meeting** ergänzen.

## Word: Vom leeren Blatt zum formalen Dokument

Die echten Schwierigkeiten bei Word sind meist vier: Man weiß nicht, nach welcher Struktur geschrieben wird, der Ton ist nicht formell genug, die Überschriften-Nummerierung ist chaotisch, und die Inhalte haben keine Belegquellen. Was WorkBuddy gut löst, ist nicht das „Denk-Ersetzen", sondern **aus vorhandenem Material einen strukturell stabilen, tonlich einheitlichen und weiter bearbeitbaren Dokument-Entwurf zu machen**.

Geeignete Word-Aufgaben: formelle Konzepte (Events, Projekte, Marketing, Schulungen), Verwaltungsdokumente (Richtlinien, Mitteilungen, Protokolle, Rückblicke, Wochen- und Monatsberichte), Produktunterlagen (PRD, Anforderungsdokumente, Wettbewerbsanalysen).

### Empfohlener Ablauf

| Schritt | Was WorkBuddy tut | Was der Mensch bestätigt |
| --- | --- | --- |
| 1 | Material lesen, nutzbare Informationen und Lücken auflisten | Welches Material Faktenquelle ist, welches nur Referenz |
| 2 | Gliederung und inhaltliche Leitplanken erzeugen | Wer liest; ist das Dokument Bericht, Freigabe oder Ausführung |
| 3 | Word-Entwurf nach Gliederung erzeugen | Überschriftenhierarchie, Kapitelreihenfolge, Vollständigkeit der Kerninfos |
| 4 | Nach Feedback polieren, ergänzen, kürzen | Was final ist, was als „offen" markiert werden muss |
| 5 | Editierbare docx und Änderungsbeschreibung ausgeben | Ob es direkt Kollegen zur Durchsicht gehen kann |

### Beispiel: Ein Teamevent-Konzept erzeugen

```text
Erstell mir das Gerüst eines Word-Dokuments für ein Firmen-Teamevent.
Das Unternehmen hat rund 80 Personen. Enthalten: Ziele des Events, Themenvorschläge,
gesamter Ablaufplan (mit Zeitpunkten), Vorschläge für Gruppen und Interaktionsspiele,
Budgetbestandteile, Aufgabenverteilung, Notfallpläne und Hinweise.
Sprache knapp und praktisch, nicht übermäßig ausführlich; Fokus auf Gesamtgerüst
und zentrale Entscheidpunkte – geeignet, um direkt mit der Leitung die Richtung abzustimmen.
```

![](/workbuddy/case-office/assets/001_image_PhFMbu3kTo.png)

![](/workbuddy/case-office/assets/002_image_UVm5bKLrZo.png)

### Bei der Überarbeitung nicht neu schreiben, sondern Unterschiede benennen

```text
Bitte überarbeite die bisherige Version des Word-Dokuments zum Firmen-Teamevent – nicht neu generieren.
Änderungswünsche:
Die Ziele auf 3 Punkte verdichten, jeder höchstens 50 Zeichen;
Den Ablaufplan als Tabelle mit den Spalten Zeit, Programmpunkt, Hauptinhalt, Verantwortlicher, benötigtes Material;
Bei den Programmvorschlägen Interaktionsformate für ein 100-Personen-Unternehmen ergänzen und schwer umsetzbare Vorschläge streichen;
Das Budget weiter aufschlüsseln: Position, geschätzter Betrag, Menge, Einzelpreis, Anmerkung – plus Gesamtsumme;
Neu einen Abschnitt Notfallplan: Verspätungen, Gerätedefekte, Zeitüberschreitungen, plötzliche Sicherheitsprobleme;
Insgesamt formeller und knapper, direkt zur Freigabe durch die Leitung geeignet.
Gib die überarbeitete Version v2 als Word-Dokument aus und liste die Änderungen in changelog.md auf.
```

![](/workbuddy/case-office/assets/003_image_IoOLbfEcvo.png)

![](/workbuddy/case-office/assets/004_image_V1RpbVGuno.png)

### Fortgeschritten: Zwei Versionen einer Richtlinie, eines Vertrags oder eines Konzepts vergleichen

```text
Vergleiche policy-v3.docx mit policy-v4.docx.
Gib vier Klassen von Unterschieden aus – neu, gelöscht, geändert, nur Format – mit Kapitel und Originalfundstelle.
Hebe besonders hervor: Beträge, Daten, Verantwortlichkeiten, Freigabebedingungen, Ausnahmen und Negativformulierungen.
Erzeuge eine Auswirkungsliste und offene Fragen; keine rechtlichen Schlussfolgerungen, keine Änderung der Originaldateien.
```

![](/workbuddy/case-office/assets/011_image_HqbtbVTw3o.png)

![](/workbuddy/case-office/assets/012_image_MhArbb6Woo.png)

Der Dokumentvergleich eignet sich, Veränderungen zu finden – er ersetzt nicht das endgültige Urteil der Rechts-, Finanz- oder Richtlinien-Verantwortlichen.

## Excel: Die Tabelle in eine Analyse verwandeln, die Fragen beantwortet

Das Excel-Problem liegt selten am „Diagramm-Können", sondern daran: „Welche Frage kann diese Tabelle eigentlich beantworten?" Wirft man eine Tabelle mit Lücken, verbundenen Zellen und mehreren Datenbasen der KI hin, bekommt man leicht ein Diagramm, das fachlich aussieht, aber keinen Geschäftswert hat. Die Reihenfolge zählt: **erst die Geschäftsfrage definieren, dann das Diagramm wählen**.

Geeignete Excel-Aufgaben: Datenbereinigung (deduplizieren, Lücken füllen, Formate vereinheitlichen, Tabellen zusammenführen), Geschäftsanalyse (Umsatz, Marge, Conversion, Lagerumschlag), Berichtserzeugung (Wochen-/Monatsberichte, Budgetausführung, Anwesenheit), Formelhilfe (erzeugen oder erklären, `#N/A` diagnostizieren), Visualisierung (Diagramme, Pivots, Dashboards).

### Empfohlener Ablauf

| Phase | Prompt-Schwerpunkt | Ausgabe |
| --- | --- | --- |
| Tabelle lesen | Zuerst Arbeitsmappenstruktur, Feldbedeutungen, offenkundige Schmutzdaten beschreiben | Datenwörterbuch, Fragenliste |
| Kennzahlen festlegen | Die zu beantwortende Geschäftsfrage nennen, nicht „analysier mal" | Kennzahlen-Definitionstabelle |
| Bereinigen | Sag, wie mit Lücken, Duplikaten und Ausreißern umzugehen ist | Bereinigte xlsx / csv |
| Berechnen | Formeln, Pivot erzeugen, aktualisierbare Struktur erhalten | Summentabelle, Formelerläuterung |
| Visualisieren | Diagramm nach Geschäftsfrage wählen, kein Anhäufen | Diagramme, Analyse-Schlussfolgerungen |

### Beispiel: Vertriebsdatenanalyse

```text
Lies bitte E-Commerce-Vertriebsdaten.xlsx – die Originaldatei zunächst nicht verändern.
Geschäftsfrage: Analysiere dieses Monat die Verkaufsentwicklung und Ertragskraft der Produktlinien;
welche tragen viel bei, welche sind margenschwach; und erkenne anomale Schwankungen im Monatsverlauf.
Bitte ausgeben:
Die Bedeutung der Datenfelder erläutern und fehlende Werte, Doppelerfassungen, Ausreißer und Formatprobleme prüfen;
Pro Produktlinie Umsatz, Rohertrag, Rohertragsmarge, Umsatzanteil und Deckungsbeitraganteil berechnen und reihen;
Umsatz und Marge pro Tag zusammenfassen und den Tagesverlauf des Monats analysieren;
Säulendiagramme zum Vergleich von Umsatz und Rohertrag der Produktlinien, Liniendiagramm der täglichen Umsätze;
Tage oder Datensätze mit deutlich anomalem Umsatz, Marge oder Einzelbestellwert identifizieren und datenbasiert begründen – keine Spekulation über Geschäftsursachen;
Zusammenfassen: beste Produktlinie des Monats, Produktlinien mit besonderem Fokus sowie 3 direkt für den Geschäftsrückblick nutzbare Schlussfolgerungen.
Ausgabe: output/sales-analysis.xlsx und output/summary.md.
Anforderungen: Originaldaten erhalten, Statistikprozess und Formeln nachvollziehbar; unbestätigte Ursachen als „zu prüfen" markieren, nichts erfinden.
```

![](/workbuddy/case-office/assets/005_image_I118b7wyUo.png)

![](/workbuddy/case-office/assets/006_image_BWkRb60JPo.png)

![](/workbuddy/case-office/assets/007_image_XtfQbkCqio.png)

### Fortgeschritten: Tabellen zusammenführen, abgleichen, Ausnahmen listen

Am wertvollsten im Büroalltag ist nicht „ein Diagramm bauen", sondern Datenbasis und Ausnahmen sichtbar zu machen:

```text
Führe die sechs regionalen Wochenvertriebstabellen in input/sales zusammen.
Prüfe zuerst Spaltennamen, Datentypen, Zeitraum, Währung und Schlüssel; bei Inkonsistenz stoppen und Differenzen auflisten.
Nach Bestellnummer deduplizieren, aber Herkunftsduplikate behalten; vor der Aggregation Gesamtreihen, fehlende Werte, Ausreißer und Duplikate ausgeben.
Erzeuge clean-sales.xlsx, exception-list.xlsx und reconciliation.md.
Die Betragssumme muss mit den Summen der Quelltabellen abgleichen; solange die Differenz nicht 0 ist, keine Management-Schlüsse.
```

![](/workbuddy/case-office/assets/009_image_UNEqbRnJfo.png)

![](/workbuddy/case-office/assets/010_image_L25tbHIUeo.png)

**Abnahme**: Eingabemenge, Bereinigungsänderungen und Ausgabemenge bleiben im Gleichgewicht; Formeln sind neu berechenbar; Ausnahmen wurden nicht still gelöscht; die Diagrammfelder stimmen mit der Summentabelle überein.

## PPT: Keine Vorlage befüllen, sondern Material in Erzählung verwandeln

„Mach mir eine edle PPT" lässt die KI nur den Stil raten und erzeugt hübsches Stroh. Eine wirklich brauchbare PPT beantwortet zuerst drei Fragen: Wer **sieht** den Bericht, was soll das Publikum danach **entscheiden**, und wie viel Zeit haben Sie zum Vortragen. Der PPT-Skill kann die Seiten erzeugen – die Storyline muss aber zuerst feststehen; je schöner die Seiten, desto leichter verdecken sie Logikprobleme.

Geeignete PPT-Aufgaben: Projektberichte, Geschäftsberichte, Schulungsunterlagen, Konzeptpräsentationen.

### Empfohlener Ablauf

| Schritt | Was WorkBuddy tut | Was der Mensch bestätigt |
| --- | --- | --- |
| 1 | Word, Excel, alte PPT zu einer Materialzusammenfassung verdichten | Was bleiben muss, was weg kann |
| 2 | Storyline mit 6–10 Seiten und Seitentiteln erzeugen | Publikum, Dauer, Entscheidungsziel |
| 3 | Nach bestätigter Gliederung die PPT erstellen | Hat jede Seite nur eine Kernaussage |
| 4 | Diagramme, Notizen, Quellenzuordnung und Exportversion ergänzen | Stammt jede Kernzahl aus Excel |
| 5 | Layoutprüfung: Textüberlauf, fehlende Bilder, Schriftgrößen | Lesbarkeit bei Projektion, Eignung für den Vortrag |

### Beispiel: Aus dem Materialpaket eine Berichts-PPT erstellen

```text
Erstell aus dem Material im aktuellen Arbeitsbereich eine PPT von höchstens 8 Seiten zum Thema KI-Agenten.
Publikum: Fach- und Führungskräfte mit KI-Grundkenntnissen, aber ohne Agenten-Erfahrung. Dauer: 10 Minuten.
Ziel: Die Zuhörer sollen verstehen, was ein KI-Agent ist, wie er sich von normalen KI-Dialogwerkzeugen
unterscheidet, welche Probleme er löst und wie ein Unternehmen die Einführung bewerten sollte.
Material: AI-Begriffs-Handbuch.md ist die Hauptquelle; keine Fakten oder Daten außerhalb des Arbeitsbereich-Materials ergänzen.
Insgesamt höchstens 8 Seiten, jede Seite genau eine Kernaussage;
Fälle, Daten und Schlüsselurteile mit Quellenangabe; Unbestätigtes nicht selbst ergänzen;
Folientitel möglichst als Aussage formulieren, keine Pseudo-Titel wie „Einführung: KI-Agenten";
Ausgabe: output/ai-agent.pptx; danach Textüberlauf, Weißraum, Diagrammkonsistenz, fehlende Bilder,
Schriftkonsistenz und Seitenzahlen prüfen.
Stil: professionell, klar, mit Tech-Charakter – aber ohne übertriebene Verläufe, Glühen und Deko-Elemente.
```

![](/workbuddy/case-office/assets/008_image_ABXObcQeeo.png)

## Das Trio verzahnt: Nach dem Meeting automatisch das Lieferpaket

Viele Büro-Aufgaben sind keine Einzeldatei, sondern „nach dem Meeting muss etwas da sein": erst Protokoll ordnen, dann PRD ergänzen, dann Aufgabenliste, zuletzt Berichts-PPT. Der Wert von WorkBuddy: Es verketten diese Ergebnisse zu **einer einzigen Faktenkette**.

Am Beispiel einer Produkt-Review-Sitzung, eine brauchbare Skill-Kombination:

| Schritt | Empfohlener Skill | Wirkung |
| --- | --- | --- |
| Meetinginhalt holen | Tencent Meeting / intelligente Protokoll-Skills | Transkript, KI-Protokoll, Beschlüsse, Aktionspunkte |
| PRD erzeugen | Word / DOCX, Tencent Docs | Meetinginhalt in ein Produktanforderungsdokument umschreiben |
| Aufgabenliste erzeugen | Excel / XLSX | Verantwortliche, Fristen, Prioritäten, Abnahmekriterien |
| Bericht erzeugen | Powerpoint / PPTX | PRD und Aufgabenfortschritt in einen Management-Bericht übersetzen |

```text
Lies das Transkript und das KI-Protokoll dieser Produkt-Review-Sitzung und erzeuge ein Büro-Lieferpaket.
Ziel: Den Meetinginhalt in Material verwandeln, das die Entwicklung voranbringt.
Bitte ausgeben:
1. Word: output/feature-prd.docx mit Hintergrund, Zielnutzern, Kernproblemen, Anforderungsliste,
   Ablaufbeschreibung, Abnahmekriterien, Risiken und offenen Fragen;
2. Excel: output/action-items.xlsx mit den Feldern Vorgang, Verantwortlicher, Priorität, Frist,
   Abhängigkeit, Status, Abnahmekriterium;
3. PPT: output/review-summary.pptx, höchstens 6 Seiten, für die Geschäftsführung – Beschlüsse,
   Ressourcenanfragen und Risiken hervorheben.
Bedingungen: Was im Meeting nicht ausdrücklich bestätigt wurde, nicht als beschlossene Tatsache schreiben;
Namen, Daten, Funktionsumfang mit Quelle erhalten; fehlende Verantwortliche oder Termine als „offen" markieren;
zuerst Gliederung und Feldvorschau der Aufgabenliste ausgeben – Dateien erst nach meiner Bestätigung.
```

## Häufige Fehler und wie man es besser macht

| Häufiger Fehler | Warum er passiert | Besser formulieren |
| --- | --- | --- |
| „Mach mir eine PPT, möglichst edel" | Kein Publikum, kein Ziel, keine Materialbegrenzung | Publikum, Dauer, Seitenzahl, Entscheidungsziel und die zu erhaltenden Daten nennen |
| „Analysier mal diese Excel" | Keine Geschäftsfrage – das Modell kann nur allgemein zusammenfassen | Welche Frage, welche Kennzahlen, nach welcher Dimension verglichen wird |
| „Schreib einen Bericht" | Kein Dokumenttyp und kein Ton vorgegeben | Konzept, Zusammenfassung, Antrag, Protokoll oder PRD – und das Publikum festlegen |
| „Alles automatisch, frag nicht" | Unbestätigte Grundannahmen vergrößern das Risiko | Erst Materialliste, Risikoliste und Gliederung ausgeben lassen, nach Bestätigung erzeugen |
| „Fasse diese Materialien in einer Datei zusammen" | Fakten, Referenz und Offenes nicht getrennt | Einzige Datenquelle, Referenzdateien und die nicht erfindbaren Felder festlegen |
