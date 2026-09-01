# Von der Auswahl bis zur Bewertung: erst die Methodik vereinheitlichen, dann vergleichen und bepreisen

> Szenario: Aktienauswahl, Peer-Vergleich und Bewertung werden oft als drei getrennte Arbeiten gesehen – in Wahrheit bilden sie eine durchgehende Datenkette: Die Auswahlregeln bestimmen, welche Unternehmen in die Stichprobe kommen, die Peer-Methodik bestimmt, welche Zahlen vergleichbar sind, und das Bewertungsmodell macht aus Daten Markannahmen. **Wo auch immer ein Schritt faul ist, verliert jener scheinbar präzise Kursziel am Ende jede Bedeutung.**

Dieses Kapitel beginnt mit einem CSI-300-Screening, vergleicht dann Zhongji Innolight, Eoptolink und T&S Communications und endet mit einer Rückwärtsbewertung von Midea Group. Die Wertpapiere unterscheiden sich, die Methode lässt sich aber verketten: Jeder Schritt muss **zeilengenaue Belege, nicht vergleichbare Posten und nachrechenbare Formeln** hinterlassen.

## Schritt 1: Naturalsprachige Bedingungen in Auswahlregeln übersetzen

Mit der Fähigkeit «Aktienauswahl-Werkzeug»; Stichtag der Indexmitglieder und Datenstichtag bleiben fix. Der erste Prompt verlangt: **erst die Regeln erklären, dann den Scan ausführen**:

```text
Übersetze die folgenden Bedingungen in natürlicher Sprache in berechenbare
CSI-300-Auswahlregeln und führe sie am festen Datenstichtag aus.
1. Bedingungen: Umsatzerlöse in den letzten drei abgeschlossenen Geschäftsjahren
   jeweils wachsend; operativer Cashflow in den letzten drei Geschäftsjahren jeweils
   positiv; ROE im letzten abgeschlossenen Geschäftsjahr mindestens 15 %;
   Verschuldungsquote höchstens 70 %; am Datenstichtag keine Abverkündigungs-
   Risikowarnung.
2. Definiere Feld für Feld: Feld, Formel, Berichtszeitraum, Währung, Umgang mit
   fehlenden Werten und Ausschlusskriterien. Sage mir zuerst, welche Bedingungen
   direkt berechenbar sind und welche umstritten sind. Nenne die tatsächlich
   gescannte Zahl der Aktien, das Datum der Indexmitgliederliste und die
   Datenabdeckung.
3. Gib für jede Regel den Auswahl-Trichter an, die getroffenen Unternehmen mit
   Kernwerten, die Gründe ausgeschlossener Unternehmen sowie eine Sensitivitäts-
   analyse der Schwellen um ±10 %.
Prüfe Survivorship Bias, versehentliche Nutzung von Zukunftsdaten und
Indexanpassungen. Kann die Gesamtstichprobe nicht gescannt werden, markiere das
Ergebnis als Demo-Stichprobe und bezeichne es nicht als vollständiges CSI-300-
Screening.
```

Die erste Antwort behauptete, 300 Indexmitglieder gelesen, 295 mit vollständigen Feldern und 32 Unternehmen behalten zu haben – die Nachprüfung zeigte aber zwei unterschiedliche Zwischenzahlen im Trichter; tatsächlich unabhängig ein zweites Mal abgefragt wurden nur 14 Aktien, und mehrere ROE-Fehler waren bereits sichtbar. **Nur Summenzahlen ohne zeilengenaue Ausscheidungsnachweise beweisen kein vollständiges Screening.** Prüfbericht zur Abdeckung senden:

```text
Bitte prüfe die eben erstellte Auswahl-Stichprobe. Liste die tatsächlich gelesene
Gesamtzahl der Aktien, die Zahl mit vollständigen Feldern, die Zahl fehlender Felder,
die Restmenge je Schritt und die endgültige Unternehmensliste. Deckt die Stichprobe
die vollständige CSI-300-Mitgliedschaft am Datenstichtag nicht ab, ändere sofort
Titel und Schlussfolgerungen zu «Demo-Screening» und streiche jede Aussage über
Gesamtmarkt-Abdeckung.
```

Doubao Work stufte danach den Titel auf «Demo-Screening (teilweise unabhängig nachgeprüft)» herab. **Bei unzureichenden Belegen zuerst die Schlussfolgerung herabstufen, dann Material ergänzen.** Um die Aufgabe bis zur finalen Datei zu treiben, wird zeilengenauer Beleg für alle 300 Aktien verlangt:

```text
Das bisherige Ergebnis hat nur 14 Aktien unabhängig nachgeprüft und beweist damit
kein vollständiges CSI-300-Screening. Fahre fort und ersetze Summenzahlen nicht
länger durch Einzelbelege.

Fixiere Mitgliedschafts- und Datenstichtag. Beschaffe und speichere zuerst die an
diesem Tag überprüfbare CSI-300-Mitgliederliste (300 Wertpapierkennnummern).
Speichere danach für jede Aktie: Umsatzerlöse der letzten drei abgeschlossenen
Geschäftsjahre, operativen Cashflow, ROE des letzten Geschäftsjahres,
Verschuldungsquote und Status der Risikowarnung. Jede Zeile muss enthalten:
Wertpapierkennnummer, Unternehmensname, Berichtszeitraum, Feldwert, Einheit,
Datenquelle, Grund des Fehlens und das Bestehen/Nichtbestehen der fünf Regeln.

Führe das Screening mit lokal wiederholbar ausführbarem Skript aus; gib
«CSI300_zeilengenaue_Bege.csv», «CSI300_Screening_skript.py»,
«CSI300_Screening_bericht.md» und das Laufprotokoll aus. Berechne Auswahl-Trichter,
endgültige Liste, Ausschlussgründe, Statistik fehlender Felder und
Schwellen-Sensitivität neu. Die Verschuldungsquote der Finanzbranche erhält eine
eigene Regel und darf nicht mit Nicht-Finanzunternehmen hart verglichen werden.
Ziehe danach aus der endgültigen Liste, den Grenzfällen und den Ausgeschiedenen
jeweils mindestens 10 Aktien und prüfe sie unabhängig gegen die Originalberichte;
bei Fehlern die Gesamtmenge korrigieren und erneut laufen lassen.

Nur wenn die Belegtabelle exakt 300 unterschiedliche Wertpapierkennnummern enthält,
das Skript wiederholbar läuft und die Stichproben bestehen, gib die endgültige
Liste aus; andernfalls weiter rechnen und die offenen Punkte ausdrücklich auflisten.
Keine Kauf- oder Verkaufsempfehlungen.
```

Nach dem vollständigen Datenablauf: Trichter 300→116→97→36→35→35, am Ende bestehen 35 Unternehmen alle Regeln; Sensitivität je Aktie neu gerechnet (ROE-Schwelle um 10 % auf 13,5 % gelockert: 42 Unternehmen; auf 16,5 % verschärft: 24). Die Stichprobe deckte zudem einen ROE-Methodikkonflikt auf (Skript: «gewichteter Durchschnitt vorrangig», Bericht: «durchgängig Periodenendwert») – korrigiert wurde durch **Vereinheitlichung der Formel auf «Periodenend-ROE = Konzerngewinn ÷ Periodenend-Eigenkapital der Mutter» und Neurechnung aller 300 Aktien**; jene Fälle, in denen gewichtete und Endwertmethode das Urteil umdrehen, wurden einzeln aufgeführt, statt nur die 30 geprüften Stichproben anzupassen.

> Ein Screening-Bericht mit «von 300 getroffen 12» beweist nicht, dass 300 gescannt wurden. **«Hoher ROE» ist keine Regel, «drei Jahre in Folge gewichteter ROE über 15 %» ist eine** – und ein Fehler in einer Regel bedeutet nicht, eine Zahl zu ändern, sondern die ganze Stichprobe neu zu rechnen.

## Schritt 2: Vor dem Peer-Vergleich die Methodik vereinheitlichen

Im Anwärterpool nicht sofort ranken. Mit der Fähigkeit «Mehraktien-Vergleich» zuerst Berichtszeiträume, Einheiten, Geschäftsumfang und Kennzahlendefinitionen angleichen:

```text
Bitte vergleiche zum selben Datenstichtag Zhongji Innolight 300308, Eoptolink
300502 und T&S Communications 300394.

Vergleiche einheitlich die Geschäftposition, Produktstruktur, Kundenkonzentration,
Umsatz- und Gewinnwachstum, Bruttomarge, operativen Cashflow, Investitionen,
F&E-Aufwand, Bewertungs-Methodik und Hauptrisiken.
Alle Zahlen mit gleichem Berichtszeitraum, gleicher Einheit und gleicher
Quellenstufe.

Erkläre die Unterschiede der drei Unternehmen in der Kette Optische Module –
Optische Komponenten – CPO und gib an, welche Kennzahlen direkt vergleichbar sind
und welche nicht. Gib eine vergleichbare Übertabelle, je Unternehmen stärkster
Vorteil und größte Verwundbarkeit, die fünf entscheidenden Variablen und die
nächsten Prüfpunkte aus. Keine einfache Rangliste, keine Portfolio-Positionen.
```

Danach Spalte für Spalte prüfen:

```text
Bitte prüfe die eben erstellte Drei-Aktien-Tabelle. Kontrolliere Spalte für Spalte
Berichtszeitraum, Währung, Einheit, Bilanzierungs-Methodik und ob die Werte aus
der Originalveröffentlichung des Unternehmens stammen. Posten mit abweichendem
Berichtszeitraum oder niedrigerer Quellenstufe aus der Haupttabelle entfernen und
unter «momentan nicht vergleichbar» führen. Berechne die vergleichbaren Posten neu
und beschreibe, wie sich die Schlussfolgerungen verändert haben.
```

Im Test blieben von 16 Kennzahlen der Ursprungstabelle nur 10: 6 streng vergleichbar, 4 nach einheitlicher Formel als TTM neu berechnet; die übrigen 6 wurden wegen abweichender Berichtszeiträume, ungeprüfter Bilanzierung, unvollständiger verzinslicher Verbindlichkeiten oder fehlender Belege für aktivierte F&E als «momentan nicht vergleichbar» ausgelagert. **Zwei Hersteller kompletter optischer Module mit einem upstream Bauteilelieferanten auf unterschiedlichen Geschäftpositionen zu vergleichen verhindert, die hohe Bruttomarge einer Wertschöpfungsstufe direkt als stärkere Betriebsfähigkeit zu deuten.** Die finale Datei behält in der Haupttabelle nur vergleichbare Kennzahlen, der Anhang listet die nicht vergleichbaren Posten mit fehlendem Beleg und tilgt jede einfache Rangliste.

> «Umsatz» kann ein Halbjahr, ein Ganzjahr oder die letzten zwölf Monate bedeuten – nicht direkt nebeneinanderreihen. Die Haupttabelle vergleicht, die Erläuterungstabelle verhindert Fehllesungen; keine der beiden darf fehlen.

## Schritt 3: Mit der Bewertung rückwärts erschließen, worauf der Markt setzt

Die Bewertung kommt zuletzt. Mit der Fähigkeit «Bewertungsmodellierung»; Eingaben, Formeln und Ergebnisse getrennt:

```text
Bitte analysiere, welche operativen Annahmen die aktuelle Bewertung von Midea Group
000333 zum festen Datenstichtag impliziert.

Entnimm zunächst den offiziellen Geschäftsberichten der letzten drei Jahre Umsatz,
operatives Ergebnis, operativen Cashflow, Investitionen, Nettobarmittel und
Aktienanzahl. Begründe die Wahl von DCF, Free-Cashflow-to-Equity oder Multiplikator-
verfahren – und auch, warum du andere Verfahren nicht gewählt hast.

Baue ein Basis-, ein Optimistik- und ein Vorsichtsszenario; liste die Annahmen zu
Umsatzwachstum, Margen, Reinvestition, Diskontsatz und Restwert. Alle Eingaben mit
Quelle, Datum und Einheit. Halte Eingaben, Formeln und Ergebnisse getrennt; alle
Formeln in einer lokal nachrechenbaren Tabelle, keine Online-Tabelle.

Leite rückwärts her, welches Wachstums- und Margenprofil die aktuelle Marktkapital-
isierung trägt; führe danach Sensitivitätsanalysen für Diskontsatz und ewige
Wachstumsrate aus. Gib Annahmentabelle, Bewertungsspanne, Rückwärtsrechnung und die
drei fehleranfälligsten Variablen aus. Die Spanne darf nicht als garantiertes
Kursziel formuliert werden.
```

Besteht die Formelprüfung nicht (z. B. #NAME?, Zirkelbezüge, hart kodierte Kernwerte), **keine Flicken an der defekten Datei, sondern Aufbau ab der minimal rechenbaren Version**: Im ersten Schritt nur eine Eingabetabelle mit prüfbaren Eingaben (je Posten Berichtszeitraum, Einheit, Seitenzahl); im zweiten Schritt zuerst ein einziges Basisszenario mit einer Free-Cashflow-Bahn und unabhängigem Prüfskript für Unternehmenswert, Eigenkapitalwert und Wert je Aktie; erst nach bestandener Basis Vorsicht-/Optimistik-Szenarien, Rückwärtsbewertung und Sensitivität. Die drei Szenarien mit unabhängigem Skript vergleichen – **die Abweichung der Ergebnisse darf 0,01 % nicht übersteigen**; besteht die Prüfung weiterhin nicht, weiter rechnen und keine Bewertungsspanne ausgeben.

> Der Marktpreis rückwärts zu erschließen liefert keine Antworten, sondern Annahmen. Ein Bewertungsmodell fürchtet nicht viele Parameter, sondern Parameter, Formeln und Ergebnisse zu vermischen – stimmen die Historiendaten nicht, rechnet das DCF den Fehler nur noch eleganter weiter. Die Spanne darf breit sein, aber jede Streuweite muss sich erklären lassen durch die Annahme, die sie verursacht.

## Je genauer die Zahl, desto wichtiger der Rückweg zum ersten Schritt

Sind Auswahl, Vergleich und Bewertung zu einer Kette verbunden, lässt sich jedes Ergebnis zum vorherigen Schritt zurückverfolgen: Warum ist ein Unternehmen in der Stichprobe? Beleg in den Auswahl-Daten nachsehen. Warum höher oder niedriger als Peers? Methodik und Nichtvergleichbares prüfen. Warum ändert sich die Bewertung? Zurück zu Eingaben, Formeln und Szenarioannahmen. Das ist mühsamer als eine hübsche Rangliste – aber verlässlicher. **Ein Finanzmodell fürchtet nicht komplexe Rechnung, sondern eine falsche Kennzahl, die die ganze Kette hinabrieselt und am Ende von Dezimalstellen als Sicherheit verpackt wird.**

---

Weiter: [Ein Unternehmen ansehen heißt auch: Aktionäre, Management und Governance prüfen →](/de/doubaowork/case-governance)
