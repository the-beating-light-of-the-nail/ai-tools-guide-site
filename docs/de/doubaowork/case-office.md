# Ein Unterlagensatz, drei Ergebnisse: Word, Excel und PPT

> Szenario: Monatsrückblick / Projektbericht / Veranstaltungsbilanz. Ein Datensatz, einmal drei Deliverables – und die Zahlen stimmen überein.

Eigentlich war nur ein Vertriebsrückblick geplant; am Ende lieferte Doubao Work in ein und derselben Aufgabe ein Excel, ein Word und ein PPT – die Kernzahlen in allen drei Dateien stimmten überein, und bei der Selbstprüfung fand es noch einen Fehler in einer Formelreferenz, den es vor der Auslieferung korrigierte.

Viele Office-Beschäftigte durchlaufen diese Sequenz jeden Monat: erst in Excel rechnen, dann die Schlussfolgerungen in Word schreiben, zum Schluss auf PPT destillieren. Der folgende Ablauf ist in der Praxis reproduzierbar.

## Zuerst das Material vorbereiten

Drei lokale Dateien:

- **Vertriebsdetailliste**: 8 Verkaufsdatensätze mit Stadt, Kanal, Produkt, Umsatz, Erstattungen, Bestellanzahl;
- **Hintergrund zum Rückblick**: Monat, Zielsetzung und Geschäftskontext;
- **Vorgaben der Leitung**: was Word, Excel und PPT jeweils liefern sollen.

Dieser Schritt ist wichtig: KI kann rechnen, ordnen und Dateien erstellen – **die Originalfakten müssen Sie selbst liefern** – Umsatz, Erstattungen, Zielwerte brauchen eine Quelle.

## Ein Prompt, der alle drei Deliverables gemeinsam regelt

Alle drei Dateien nutzen dieselbe Datenmethodik und entstehen in derselben Aufgabe – das erleichtert den Abgleich. Nach dem Kopieren Dateipfade und Ausgabenamen durch Ihre eigenen ersetzen:

```text
Bitte lesen Sie die folgenden 3 lokalen Dateien und erstellen Sie ein Set
Berichtsmaterial «Vertriebsrückblick August 2026»:

1. 【Pfad zur Vertriebsdetails.csv】
2. 【Pfad zum Rückblick-Hintergrund.md】
3. 【Pfad zu den Vorgaben.md】

Prüfen Sie zuerst Dateien und Felder, bevor Sie mit den Berechnungen beginnen.
Alle Zahlen allein nach der CSV, nichts dazuerfinden.

Endlieferung: 3 herunterladbare Dateien:
- Vertriebsrückblick_2026-08_Datenanalyse.xlsx: Rohdaten behalten, zusätzlich
  ein Blatt mit Summen und ein Blatt mit Diagrammen; mindestens Umsatz,
  Nettoumsatz, Erstattungsquote und Bestellanzahl, aufgeschlüsselt nach
  Stadt, Kanal und Produkt.
- Vertriebsrückblick_2026-08_Bericht.docx: höchstens 1200 Wörter, mit Kernschluss,
  Zahlenbelegen, Problemen und den Schritten für September.
- Vertriebsrückblick_2026-08_Präsentation.pptx: maximal 8 Folien, jede Folie nur
  eine Kernaussage, die Schlüsselzahlen müssen mit Excel übereinstimmen.

Ausführungsregeln:
1. Listen Sie zuerst die Berechnungsmethodik und die Struktur der Lieferung auf.
2. Erzeugen Sie dann die drei Dateien und führen Sie einen Abgleich durch.
3. Legen Sie zum Schluss eine Abnahmetabelle vor: Dateiname, Seitenzahl oder
   Blätter, Schlüsselzahlen, Übereinstimmung ja/nein.
4. Nicht bestätigbare Informationen als «zu bestätigen» markieren.
5. Nur lokal neue Dateien erzeugen, Eingabedateien nicht ändern, nichts hochladen,
   nichts veröffentlichen.
```

Dieser Prompt hält absichtlich fünf Dinge fest: **wo das Material liegt, welche Datenquelle gilt, was die drei Dateien jeweils tun, wie vor Auslieferung geprüft wird und welche Aktionen verboten sind**. Mit nur einem „mach mir einen Vertriebsrückblick" arbeitet es zwar auch weiter, aber das Ergebnis passt dann leicht nicht zu den Geschäftsanforderungen – besonders Methodik der Excel-Kennzahlen, Umfang des Word und Folienzahl des PPT sollten Sie schon in der ersten Runde festlegen.

## Es ruft die Office-Fähigkeiten selbst auf

Nach dem Absenden liest Doubao Work zuerst die CSV und die beiden Erläuterungsdateien und rechnet dann nach Umsatz, Nettoumsatz, Erstattungsquote und Bestellanzahl. Diesmal wurden keine Arbeitspartner nachinstalliert und kein MCP manuell zugewiesen – es hat während der Ausführung selbst die Fähigkeiten für Tabellen, Dokumente und Präsentationen aufgerufen.

Für die Testdaten ergab sich: Umsatz 775.000 CNY, Erstattungen 36.000 CNY, Nettoumsatz 739.000 CNY, Erstattungsquote 4,65 %, 266 Bestellungen – gegenüber dem Ziel von 750.000 CNY rund 3,3 % darüber. Anschließend wurde nach Stadt, Kanal und Produkt weiter aufgeschlüsselt (z. B. Erstattungsquote Peking 13,64 %, Kanal WeChat Work 8,33 %) – diese Zahlen fließen später in Word und PPT; wer die Berechnungsmethodik zuerst festlegt, spart später viel Abgleichszeit.

## Drei Dateien: wirklich erzeugt, wirklich öffnbar

Lieferung im Test: Excel mit 3 Blättern (Rohdaten + Summen + Diagramme); Word mit 3 Seiten und höchstens 1200 Wörtern; PPT mit 8 Folien, je eine Schlussfolgerung; die Kernzahlen aller drei Dateien stimmten überein.

Eine kleine Episode: Bei der Selbstprüfung fand Doubao Work in Excel, dass die Zelle «Erstattungsquote im Ziel?» auf die falsche Zelle verwies – es korrigierte die Formel selbst und rechnete neu, bevor es auslieferte. Diese Selbstprüfung ist praktisch – eine erfolgreich erzeugte Datei beweist nur, dass sie sich öffnen lässt; **ob Formeln und Zahlen stimmen, muss separat geprüft werden**.

## Auf andere Aufgaben übertragen

Sobald belastbares Ausgangsmaterial vorliegt, funktioniert derselbe Ablauf mit anderem Thema:

| Szenario | Excel | Word | PPT |
| --- | --- | --- | --- |
| Monatsrückblick Geschäftszahlen | Kennzahlen berechnen | Analyse schreiben | Bericht erstellen |
| Projektabschluss | Aktionspunkte pflegen | vollständige Dokumentation | für die Leitung aufbereiten |
| Marketingbilanz | Leads und Kosten zusammenführen | Learnings festhalten | Ergebnisse zeigen |
| Nutzerbefragung | Stichproben aufbereiten | Insights formulieren | Kernaussagen destillieren |

Zwei Gewohnheiten lohnen sich beizubehalten: **eine einzige Datenquelle festlegen** („alle Zahlen nach der CSV" – das reduziert widersprüchliche Dateien) und **einen Abgleich verlangen** (Dateinamen, Seitenzahlen, Schlüsselzahlen und Konsistenz als Abnahmetabelle ausgeben lassen, statt sich mit einem «erledigt» zufriedenzugeben).

Was bei dem Dreierpack wirklich Zeit kostet, ist das wiederholte Übertragen desselben Inhalts: Zahlen aus der Tabelle in den Bericht, aus dem Bericht in die Präsentation – eine Änderung unterwegs zieht alle Folgeschritte nach sich. Doubao Work bündelt Lesen, Rechnen, Schreiben, Tabellen, Präsentation und Selbstprüfung in einer Aufgabe; Sie entscheiden weiterhin über Ziel, Methodik und Maßstäbe, es erledigt die repetitiven Schritte – das spart tatsächlich Zeit.

---

Ähnliches Szenario: [Am besten passt Doubao Work zu Feishu →](/de/doubaowork/case-feishu)
