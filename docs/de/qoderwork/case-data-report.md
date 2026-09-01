# Fallbeispiel: Datenanalyse und Researchbericht

Von der „Tabelle mit 100.000 Zeilen" bis zur „Research-PPT mit Quellenangaben" – dieses Kapitel zeigt QoderWorks Arbeitsweise bei Datenaufgaben.

> Community-Material: CSDN [„Aktuelle Praxisanleitung zu Alibabas QoderWork"](https://blog.csdn.net/weixin_43107715/article/details/157585560) (2026-01/02, 29.000 Aufrufe) und die offizielle Nutzerfall-Bibliothek.

## Szenario 1: eine einzige Vier-Punkte-Anweisung für 100.000 CSV-Zeilen

CSDN-Praxistest: eine CSV mit 10.634 Zeilen Betriebsdaten (in einem anderen Szenario in der Größenordnung 100.000) hochgeladen und mit einer Anweisung mehrdimensional analysiert:

```text
Analysiere diese CSV mit Besucherstromdaten einer Sehenswürdigkeit:
1. Gruppiere nach „Attraktionstyp“ (Museum/Altstadt & Wasserdorf);
2. Berechne Gesamtzahl, Zahlen je Geschlecht und Geschlechterverhältnis (1 Dezimalstelle);
3. Erzeuge eine Excel-Zusammenfassung plus ein nach Geschlecht gefärbtes Balkendiagramm;
4. Speichere im Verzeichnis „Datenbericht/202601“.
```

Das Aufgaben-Monitor-Panel zerlegt automatisch in vier Schritte: einlesen → gruppieren und rechnen → Diagramm erzeugen → speichern. Im Test mit Daten um 100.000 Zeilen: **manuell 2 Stunden → rund 30 Sekunden**.

Die offizielle Vier-Dimensionen-Analysevorlage für ein vergleichbares Szenario (10.634 Zeilen Tagesbericht):

```text
@betriebs-tagesbericht.xlsx Analysiere nach den drei Dimensionen „Verkäufer“ (Kundenzahl/Fallarten/Gesamtumsatz/Umsatz je Person),
„Monat“ (Trend/Vorperiodenvergleich) und „Kunde“ (Top-20-Beitrag/Konzentration),
gib einen Bericht aus (Tabellen + Diagramme) und übersetze ihn zusätzlich ins Japanische und Englische.
```

Der Wert liegt nicht im „schnell", sondern im **jederzeit wechselbaren Analysedimension** – ein klassischer Report muss bei neuer Betrachtungsweise neu gebaut werden, hier genügt ein Satz.

## Szenario 2: die Research-PPT mit Quellen

```text
Recherche den Markt für 【Outdoor-Bekleidung】 und erstelle eine 12-seitige PPT:
- Recherchedimensionen: Umsatz 2025 und Prognose 2026, Marktanteile der Top-5-Marken (Patagonia, The North Face usw.),
  Anteil nachhaltiger Produkte, Wachstum der Online-Kanäle
- Aufbau: Cover → Gliederung → Marktgröße → Markenanalyse → Trend-Insights → Zusammenfassung
- Diagramme: Trends als Linien, Anteile als Kreis, Vergleiche als Balken
- Alle Daten mit Quellenangabe (Statista / IBISWorld); nicht auffindbare Daten als „zu verifizieren“ markieren
```

Entscheidend ist die letzte Zeile: **alle Daten mit Quellenangabe**. Von der KI erzeugte Marktzahlen müssen nachvollziehbar sein, sonst genügt im Vortrag eine einzige Rückfrage zum Debakel. Nach der Erzeugung lassen sich Farben und Layout im weiteren Gespräch anpassen.

## Szenario 3: die Berichts-Pipeline für zehntausend Zeilen Vertriebsdaten

Die vier Standardschritte des offiziellen Musterfalls:

```text
@sales_data.csv:
1. Nenne Zeilen-/Spaltenzahl und Feldtypen
2. Bilde Umsatz und Durchschnittspreis je Kategorie und liste die Top-10-Produkte
3. Analysiere den Trend nach Monaten
4. Erzeuge einen interaktiven HTML-Bericht (automatisches Zeichnen per Python)
```

## Methodik: fünf Gewohnheiten für Datenaufgaben

1. **die KI zuerst die Daten beschreiben lassen** (Feldbedeutungen, fehlerhafte Daten, fehlende Werte) und das gemeinsame Verständnis bestätigen, bevor analysiert wird;
2. **die Definition der Kennzahlen in die Anweisung schreiben** („Bruttomarge = Rohgewinn/Umsatz") – die KI nicht raten lassen;
3. **Ausreißer separat auflisten**, nicht in der Zusammenfassung wegmitteln lassen;
4. **den Diagrammtyp selbst festlegen** (Trend = Linie, Anteil = Kreis, Vergleich = Balken) – die Standardwahl der KI passt nicht immer zum Berichtskontext;
5. **drei Zahlen stichprobenartig** mit der Quelldatei abgleichen – die KI rechnet selten falsch, aber der Preis eines Vortrags-Debakels ist hoch.

## Kostenhinweis

Datenaufgaben mit großen Dateien verbrauchen viele Tokens. Kosten sparen: den Ablauf zuerst mit dem [Standardmodell](/de/qoderwork/03-first-task) durchlaufen, nach Bestätigung der Zwischenergebnisse erst im letzten Schritt zum Flaggschiff für den Bericht wechseln. Mehr unter [Bewusstsein, Kosten und sichere Umgebung](/de/qoderwork/adv-memory-cost).

---

Weiter: [Browser-Automatisierung: 230 WeChat-Artikel strukturiert →](/de/qoderwork/case-browser)
