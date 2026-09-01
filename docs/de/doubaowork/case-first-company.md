# Ein Unternehmen zum ersten Mal recherchieren: vom Geschäftsmodell zu acht entscheidenden Nachfragen

> Szenario: Bei der ersten Begegnung mit einem Unternehmen startet man leicht bei Kurs, Story oder Nachrichten — man sammelt einen Berg Material und kann trotzdem nicht sagen, was es verkauft, warum Kunden zahlen und wo der Gewinn herkommt.

Der bessere Einstieg ist zunächst eine **Faktentlandkarte des Unternehmens**: Produkte, Kunden, Kanäle, Kosten, Wettbewerbsbarrieren und Risiken auf einer Seite — erst dann hat jede weitere Frage einen Anker. Die Methode passt sowohl zur erstmaligen Abdeckung als auch zum Übernehmen fremder Recherchematerialien.

## Schritt eins: das Geschäft sauber zerlegen

Stories können warten. Die erste Runde beantwortet sechs schlichte Fragen: **Was wird verkauft, an wen, warum wird gekauft, wie wird geliefert, wo liegen die Kosten, wer hat Verhandlungsmacht**. Werkzeug ist der Skill «Einzelaktien-Recherche», mit festem Datenstichtag:

```text
Bitte zerlege auf Basis der Jahresberichte, Zwischenberichte, Mitteilungen und
Investor-Relations-Materialien von Kweichow Moutai 600519, wie dieses Unternehmen Geld verdient.

1. Erläre, was das Unternehmen verkauft, an wen, über welche Kanäle es das Geld einnimmt,
wie der Umsatz realisiert wird und wo hauptsächlich Kosten anfallen.
Vergleiche Umsatz, Bruttomarge, Wachstum und Cash-Rückfluss nach Produkt und Kanal.
Analysiere weiter, welche Rolle Vertriebssystem, Direktvertrieb, Kapazität,
Grundspirituosen-Lagerbestand, Markenpreissetzung und Dividenden im Geschäftsmodell spielen.

2. Schreibe zu jeder Zahl Zeitraum, Einheit, Berichtsseitenzahl oder offiziellen Link.
Trenne Unternehmensoffenlegung, Aussagen des Managements und eigene Schlussfolgerungen.
Stammen Sozialbestand, Großhandelspreis und Kanalmarge aus Dritterhebungen, sind Stichprobe
und Datum gesondert anzugeben.

3. Liefere zum Schluss eine Geschäftskarte, die Verdienstlogik, fünf wichtigste
Monitoring-Kennzahlen und drei leicht übersehene Abhängigkeiten. Keine direkte
Anlage-Schlussfolgerung.
```

Dieser Prompt hat einen klaren Kern: Jedes Material muss die Frage beantworten, «wie das Unternehmen Produkte in Umsatz und Cash verwandelt»; marken-Storys, Firmengeschichte und allgemeiner Branchenhintergrund außerhalb dieser Linie werden nicht ausgebreitet — das begrenzt die Berichtslänge und erleichtert die Prüfung, ob ein Material das Geschäftsverständnis wirklich verändert.

Das Nützlichste an der erzeugten Geschäftskarte ist die Erinnerung, **keine schöne Kennzahl isoliert herauszuziehen**: Eine veränderte Direktvertriebsquote kann Kanalbeziehungen und Zahlungseingänge berühren, die Produktstruktur wirkt auf die Bruttomarge, Grundspirituosen-Produktion und -Bestand bestimmen den künftig verkäuflichen Rahmen, und Endgroßhandelspreis und Ab-Werk-Preis des Unternehmens dürfen nicht vermischt werden. Nach neuen Berichten wird dieselbe Karte aktualisiert, ohne bei der Unternehmensvorstellung neu zu beginnen. Wer ein Unternehmen zum ersten Mal liest, kann die Geschäftskarte als Leseordnung nutzen: zuerst, woher der Umsatz kommt → Bruttomarge und Rückflüsse → Kapazität und Bestand → erst zuletzt Marke und Bewertung.

## Schritt zwei: die acht Prompt-Arten auf das Faktenfundament setzen

Erst mit Fundament werden aus den Prompts keine acht wiederholten Suchen — jede Frageart öffnet einen Recherche-Eingang:

| Recherche-Eingang | Testobjekt | Skill | Hauptlieferung |
| --- | --- | --- | --- |
| Faktenfundament des Unternehmens | Kweichow Moutai | Einzelaktien-Recherche | Geschäft, Produkte, Kanäle, Strategiewandel |
| Branchenzyklus | Zijin Mining | Branchenanalyse-Bericht | Angebot, Nachfrage, Bestände, Preise, Frühindikatoren |
| Geschäftszerlegung | Midea Group | Einzelaktien-Recherche | Geschäftsstruktur, Gewinnquellen, Cash-Rückfluss |
| Finanzqualität | CATL | Ergebnisanalyse | Gewinn, Cashflow, Nachrechnung von Einheit und Formel |
| Eigenkapital und Governance | Gree Electric | Mitteilungslektüre | Governance-Beziehungen, Ereignislinie, Tracking-Liste |
| Bullen-Bären-Dissens | Cambricon | Markt-Hotspot-Analyse | Gemeinsame Fakten, Dissens-Annahmen, Prüfzeitpunkte |
| Burggraben und Bewertung | China Shenhua | Einzelaktien-Recherche | Burggraben-Belege, implizite Bewertungsannahmen |
| Due-Diligence-Recherche | BYD | Einzelaktien-Recherche | Geschäft, Branche, Finanzen, Governance, Gegenbelege |

Die acht Prompts (Datenstichtag jeweils ein festes Datum):

**1 · Faktenfundament**: Kerngeschäft, Hauptprodukte, Umsatz- und Gewinnquellen, Hauptkunden und -kanäle, Position in der Wertschöpfungskette und wichtige Strategiewechsel der letzten drei Jahre ordnen. Nur überprüfbare Mitteilungen, Zwischenberichte und autoritative Quellen; je Abschnitt drei bis fünf Punkte, jede Zahl mit Zeitraum, Einheit und Originalquelle.

**2 · Branchenzyklus**: Angebot und Nachfrage, Bestände, Preise, Kapitalaufwand, neue Kapazität, Branchenkonzentration und wichtigste Politikvariablen untersuchen, langfristige Struktur- von kurzfristigen Schwankungsfaktoren trennen; ausgeben: aktuelles Zyklusbild, drei Frühindikatoren, drei Spätindikatoren und die kommenden zwölf Monate beobachtungsbedürftigen Daten. Fehlt es an verlässlichen Daten: als Lücke listen, keine Preisprognose als gesichertes Faktum ausgeben.

**3 · Geschäftszerlegung**: Umsatz, Gewinn, Bruttomarge und Dreijahrestrend je Segment quantifizieren; prüfen, ob es Geschäfte gibt mit «viel Umsatz, wenig Gewinnbeitrag»; auch Tochtergesellschaften, assoziierte Gesellschaften und nicht wiederkehrende Erträge prüfen; ausgeben: die Verdienstlogik in einem Satz, eine Strukturtabelle, fünf laufende Monitoring-Kennzahlen.

**4 · Finanzqualität**: Gewinn und operativen Cashflow kreuzprüfen; Forderungen, Vorräte, Vertragsverbindlichkeiten, Kapitalaufwand, Abschreibungen, nicht wiederkehrende Erträge und Änderungen der Rechnungslegung prüfen; zu jeder Auffälligkeit **zwei Erklärungen** und einen Prüfungsweg geben.

**5 · Eigenkapital und Governance**: Kontrollverhältnisse, Hauptaktionäre, Vorstand und Führungskräfte, Aktienanreize, Rückkäufe, Anteilssenkungen, verbundene Geschäfte und Kapitalallokation abgleichen; eine Tracking-Tabelle für Sperrfristablauf, Rückkäufe und Anreize der nächsten zwölf Monate aufbauen. Personenidentität, Amtszeiten und Ereignisdaten müssen auf die gesetzliche Offenlegung zurückgehen.

**6 · Bullen-Bären-Dissens**: zuerst **gemeinsame Fakten** listen, danach getrennt Kernlogik von Bullen und Bären, stärkste Gegenrede, durch künftige Daten prüfbare Bedingungen und wichtige Prüftermine; unbestätigte Gerüchte separat ausweisen, keine Parteinahme.

**7 · Burggraben und Bewertung**: mit den Unternehmensangaben Ressourcenausstattung, Kostenvorteile, Langfristvertragspreise, integrierten Betrieb und Dividenden prüfen, danach **rückrechnen, welche Kohlepreis-, Mengen-, Margen- und Dividendenannahmen in der aktuellen Bewertung stecken**. Den Zyklushöhepunkt nicht zur langfristigen Norm hochrechnen.

**8 · Due-Diligence-Recherche**:

```text
Bitte erstelle für BYD 002594 eine Due-Diligence-Studie für Investoren. Untersuche
Geschäftsmodell und Burggraben, Angebot und Nachfrage in der Auto- und Batteriebranche,
die Finanzqualität der letzten drei bis fünf Jahre, Governance und Kapitalallokation,
implizite Bewertungsannahmen, die Bärenlogik und Schwarzschwan-Risiken.
Trenne in allen Schlussfolgerungen Fakt, Deutung, Schlussfolgerung und Urteil. Finanzdaten
müssen Gewinn und Cashflow kreuzprüfen; Unternehmensdaten sind mit den wichtigsten Peers
über denselben Berichtszeitraum zu vergleichen. Jede Schlüsselzahl mit Zeitraum, Einheit
und Originalquelle.
Ausgeben: Faktenzusammenfassung, wichtige Fin tabellen, Geschäft- und Branchenanalyse,
Bewertungsannahmen, stärkste Gegenbelege, künftige Monitoring-Liste und die weiterhin zu
prüfenden Fragen. Keine Kauf-, Verkauf-, Positions- oder Stop-Loss-Empfehlung.
```

## Bei langen Aufgaben Datenlücken offenlegen

Im Praxistest: Zijin Mining listete von sich aus 21 Datenlücken; Gree erzeugte eine Governance-Tracking-Tabelle; Cambricon trennte gemeinsame Fakten, Argumente beider Lager, Gerüchte und Quellebenen. Der BYD-Bericht überschritt den Stichtag (er zog den erst am 29. August offengelegten Halbjahresbericht heran) und wurde mit einem Audit-Prompt zurückgezogen:

```text
Bitte auditiere den soeben erstellten Due-Diligence-Bericht. Fixiere alle Daten weiterhin
auf den Stichtag oder früher und ziehe den erst danach offengelegten Halbjahresbericht und
die daraus abgeleiteten Schlussfolgerungen zurück. Bestätige, ob der Bericht Finanzqualität,
Governance und Kapitalallokation, implizite Bewertungsannahmen, stärkste Gegenbelege und
Schwarzschwan-Risiken abdeckt. Fehlende Teile dürfen nur mit bis zum Stichtag offiziell
offengelegtem Material ergänzt werden; ist das nicht möglich, als offene Prüfungsfrage
führen. Liste zum Schluss zurückgezogene Inhalte, ergänzte Inhalte und der weiterhin
unvollständige Rahmen.
```

In der zweiten Runde wurde der letzte Bericht auf den Q1-Bericht zurückgestuft, sämtliche Halbjahreszahlen und Bewertungen zurückgezogen; PE TTM und PS blieben, PB und EV/EBITDA wurden mangels vergleichbarer Bezüge als offen geführt — **die neuesten Berichtszeiträume der Peers und ein Teil der Drittdaten wurden nicht heraufgezwungen**. Weitere häufige Störung: Lange Aufgaben bleiben auf halbem Weg liegen (etwa wird für ein leeres Verzeichnis keine Datei erzeugt) — dann weiterführen mit «Bitte setze die bereits übermittelten Originalanforderungen fort, erzeuge die Dateien direkt und nenne die Dateipfade», zugleich Stichtag, Quellen und Ausgabeformat erneut einschärfen.

## Gute Prompts machen die Fragen konkreter

Acht Fragearten heißen nicht, jedes Unternehmen achtmal durchzurühren. Bei der Erstabdeckung zuerst das Gerüst über das Geschäftsmodell bauen; wird die Umsatzstruktur unklar, zur Berichtsanalyse wechseln; ist der Marktstreit groß, in die Bullen-Bären-Prüfung gehen; gibt es viele Peers, nach Vereinheitlichung der Bezüge horizontal vergleichen. Der wahre Wert der Prompts ist, **die Recherche schrittweise zu verengen** — die Fragen werden konkreter, die Beweislücken weniger, und erst dann fängt dieses Fragesystem an zu arbeiten.

---

Weiter: [Von der Auswahl zur Bewertung: erst Bezüge vereinheitlichen, dann vergleichen und bepreisen →](/de/doubaowork/case-screening-valuation)
