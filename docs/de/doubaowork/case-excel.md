# Excel frei bedienen und im Handumdrehen zum Datenanalyse-Profi werden

> Szenario: Sobald mehrere Arbeitsmappen anfallen, wächst der Kopf — Spaltenbreiten passen nicht, Datumformate gehen auseinander, mehrere Detailtabellen sind zusammenzuführen, und Formeln will man Zelle für Zelle prüfen. Formatierung, Bereinigung, Zusammenführung und Analyse gehören komplett an Doubao Work.

## Excel per Klick verschönern

Die Verschönerung dient nur der **Leseeffizienz** und korrigiert keine Daten: Kopfzeile, Spaltenbreiten, Fixierung, Filter und gestreifte Zeilenhintergründe machen Detailtabellen besser überschaubar und reduzieren Fehlbedienung in langen Listen. Originalwerte, Formeln und Tabellenblattnamen bleiben unverändert.

```text
Bitte formatiere die von mir hochgeladene Datei "2026-01-Verkaufsdetails.xlsx" ansprechend.

Konkrete Anforderungen:
1. Keine Originaldaten, Formeln oder Tabellenblattnamen verändern.
2. Kopfzeile mit dunkelblauem Hintergrund und weißer Fettschrift.
3. Passende Spaltenbreiten und Zeilenhöhen setzen, damit kein Text abgeschnitten wird.
4. Erste Zeile fixieren und Filter aktivieren.
5. Für den Datenbereich gestreifte Zeilenhintergründe hinzufügen.
6. Danach speichern als "2026-01-Verkaufsdetails_formatiert.xlsx".

Nur die Formatierung anpassen, den Dateninhalt nicht verändern.
```

Abnahme: Wird Text abgeschnitten? Funktionieren Filter und Fixierung? Sind die Originaldaten unverändert?

## Daten bereinigen und standardisieren

Vor der Bereinigung ist zu definieren, **was als korrekt gilt**: Leerzeichen, Regionsschreibweisen, Zahlenformate und Dubletten brauchen eindeutige Regeln, damit das Modell eine Grundlage hat. Nicht entscheidbare Inhalte gehören in ein Blatt "Problemdaten" — das lässt sich besser zurückverfolgen als ein automatisch geratener Wert.

```text
Bitte bereinige die von mir hochgeladene Datei "2026-01-Verkaufsdetails.xlsx".

Bitte lasse das Original-Tabellenblatt unverändert und lege zwei neue Blätter an:
"bereinigte Daten" und "Problemdaten".

Bereinigungsregeln:
1. Leerzeichen vor und nach Textfeldern entfernen.
2. Schreibweisen wie "Hua dong" oder "Huadong" zu "Huadong" vereinheitlichen.
3. Verkaufsmenge und Einzelpreis in Zahlen umwandeln.
4. Den Rabattsatz einheitlich als Dezimalzahl umwandeln, z. B. 10% als 0,1.
5. Von vollständig doppelten Datensätzen nur einen behalten.

Nicht entscheidbare Daten nicht eigenmächtig auffüllen.
```

Das System behält das Originalblatt, schreibt regelkonforme Datensätze in "bereinigte Daten" und Unentscheidbares in "Problemdaten"; zusätzlich zur lokalen Datei entsteht eine Online-Tabelle, gut zum Weiterarbeiten und zur Zusammenarbeit.

## Mehrere Excel-Dateien zusammenführen

**Vertikal zusammenführen** (Januar–April zu einer Gesamttabelle):

```text
Bitte führe die Verkaufsdetail-Dateien Januar bis April 2026 aus den Dateien zusammen.

Verarbeitungsanforderungen:
1. Spalten über die Feldnamen zuordnen, nicht nur über die Spaltenposition.
2. Alle Detailzeilen an ein Blatt namens "Verkaufs-Gesamttabelle" anfügen.
3. Zwei neue Spalten "Quelldatei" und "Quell-Tabellenblatt" hinzufügen.
4. Prüfen, ob Dateien Felder fehlen oder überzählige Felder enthalten.
5. Doppelte Datensätze über die Bestellnummer prüfen.
6. Doppelte Bestellungen mit Konflikten nicht direkt löschen, sondern ins Blatt
   "Zusammenführungs-Anomalien" legen.
7. Ein neues Blatt "Zusammenführungs-Übersicht" anlegen mit Ursprungs-, gültigen und
   anomalen Zeilenzahlen je Datei.
8. Am Ende "2026-Jan-Apr-Verkäufe-zusammengeführt.xlsx" ausgeben.
```

**Horizontal verknüpfen** (Transaktionsdetails + Produktinformationen + Kundeninformationen):

```text
Bitte verknüpfe die folgenden drei Dateien:
1. 2026-Jan-Apr-Verkäufe-zusammengeführt.xlsx
2. produktinformationen.xlsx
3. kundeninformationen.xlsx

Verknüpfungsregeln:
1. Über "Produktnummer" Produktname, -kategorie, Standardpreis und Stückkosten an die
   Verkaufs-Gesamttabelle anfügen.
2. Über "Kundennummer" Kundenname, -branche, -stufe und Provinz an die
   Verkaufs-Gesamttabelle anfügen.
3. Die Verkaufs-Gesamttabelle ist Haupttabelle: Auch ohne Produkt- oder Kundentreffer
   bleibt der Verkaufsdatensatz erhalten.
4. Nicht zugeordnete Daten als "nicht zugeordnet" markieren.
5. Nicht zugeordnete Datensätze ins Blatt "Zuordnungs-Anomalien" sortieren.
6. Produkt- und Kunden-Zuordnungsquote ausgeben.
7. Keine unscharfen Vermutungen über Produkt- oder Kundennamen.
```

## Datenanalyse in drei Schritten

**Berechnungsspalten per Formel** (Formeln behalten statt feste Werte schreiben):

```text
Bitte füge in 2026-Jan-Apr-Verkäufe-verknüpft.xlsx folgende Berechnungsspalten hinzu:

1. Umsatz = Menge × Einzelpreis × (1 − Rabattsatz)
2. Kostenbetrag = Menge × Stückkosten
3. Rohertrag = Umsatz − Kostenbetrag
4. Rohertragsmarge = Rohertrag ÷ Umsatz
5. Preisabweichung = (Einzelpreis − Standardpreis) ÷ Standardpreis

Anforderungen:
1. Excel-Formeln verwenden, keine festen Werte hineinschreiben.
2. Umsatz, Kostenbetrag und Rohertrag mit zwei Dezimalstellen.
3. Rohertragsmarge und Preisabweichung als Prozentformat anzeigen.
4. Bei Umsatz 0 bleibt die Rohertragsmarge leer — keine Division-durch-null-Fehler.
5. Alle Datenzeilen mit einheitlicher Formelstruktur füllen.
6. Bedingte Formatierung rot für Bestellungen mit Rohertragsmarge unter 10 %.
```

**Pivot und betriebliche Aggregation** (auf Deduplizierung und Bezugsbasis achten):

```text
Bitte erstelle in 2026-Jan-Apr-Verkäufe-verknüpft.xlsx ein Blatt "Betriebsanalyse".

Zu statistisch erfassen:
1. Je Monat: Umsatz, Rohertrag, Bestellzahl, Rohertragsmarge.
2. Je Region: Umsatz, Rohertrag, Kundenzahl.
3. Je Produktkategorie: Absatzmenge, Umsatz, Rohertrag.
4. Umsatzanteil je Vertriebskanal.
5. Umsatzranking je Verkäufer.

Anforderungen:
- Bestellzahlen über unterschiedliche Bestellnummern zählen.
- Kundenzahlen über unterschiedliche Kundennummern zählen.
- Rohertragsmarge als "Summe Rohertrag ÷ Summe Umsatz", nicht den Durchschnitt der
  Detail-Margen bilden.
- Summenzeile hinzufügen.
- Beträge mit Tausendertrennzeichen.
```

**Management-Dashboard** (beantwortet, was das Management täglich nachfragt: Ändert sich die Größenordnung, ist der Ertrag gesund, wo bleibt man unter dem Ziel, wer braucht Nachfassen):

```text
Bitte erstelle auf Basis des Blattes "Betriebsanalyse" ein Vertriebs-Dashboard für das Management.

Das Dashboard enthält:
1. Vier Kernkennzahlen: Umsatz, Rohertrag, Rohertragsmarge, Bestellzahl.
2. Monatsverlauf des Umsatzes.
3. Regionenvergleich des Umsatzes.
4. Umsatzranking der Produktkategorien.
5. Anteile der Vertriebskanäle.
6. Top-10-Ranking der Verkäufer.
7. Zielerreichung: Ist-Umsatz gegen Umsatzziel.

Gestaltungsanforderungen:
- Insgesamt schlichter Business-Stil in Blau.
- Kernkennzahlen oben.
- Diagrammtitel und Einheiten klar benennen.
- Keine 3D-Diagramme.
- Farbanzahl begrenzen, keine übertriebene Dekoration.
- Zielerreichung unter 80 % rot hervorheben.
```

Die Diagrammanzahl muss nicht groß sein — Auffälligkeiten und Trends klar zu erzählen genügt. Im Praxistest ging vom Zusammenführen über das Verknüpfen bis zu Formeln, Pivot und Dashboard auf dem gesamten Weg kein Datum verloren.

---

Ähnliches Szenario: [Von der Spontanrecherche zum offiziellen Bericht →](/de/doubaowork/case-research)
