# Nach Börsenschluss: Marktveränderungen in die Research-Liste für morgen überführen

> Szenario: die Nachbesprechung nach Handelsschluss und der Watchlist-Tagesbericht werden oft als zwei getrennte Aufgaben behandelt, dabei nutzen sie dieselbe Informationskette – die Nachbesprechung beantwortet „was heute passiert ist", und der Tagesbericht trägt die offenen Fragen in den nächsten Tag über. Wenn beide Dokumente nicht zusammenpassen, muss man am nächsten Tag erneut Kurse, Ad-hoc-Meldungen und Nachrichten durchforsten.

Im Praxistest wurde zuerst eine Nachbesprechung für vier Aktien erstellt (Kweichow Moutai, CATL, Foxconn Industrial Internet, Zijin Mining), danach wurden Foxconn Industrial Internet, Zhongji Innolight, Eoptolink und Cambricon in den Watchlist-Bereich für KI-Rechenleistung aufgenommen – wieder dieselbe Informationsaufbereitung nach Handelsschluss, aber **die Schreibweise für eine einmalige Erklärung und für eine laufende Beobachtung unterscheidet sich völlig**.

## Teil 1: Nachbesprechung nach Handelsschluss

Werkzeug: unter «Skills · Konnektoren · Partner» nach «**Aktien-Tagesbericht**» suchen und die Fähigkeit laden. Hinweis: Der Name der Fähigkeit ist keine Erkenntnisquelle – sie organisiert nur den Arbeitsablauf, die endgültigen Zahlen müssen weiterhin einer Quellen- und Methodenprüfung standhalten.

Datum, Wertpapiere und Quellen werden von Anfang an fest verankert – das Datum gehört nicht nur in die Überschrift, es muss auch den Datenzeitraum für Kurse, Meldungen und Nachrichten einschränken:

```text
Bitte erstellen Sie eine Nachbesprechung für den A-Aktien-Markt nach Handelsschluss
am 28. August 2026 für Kweichow Moutai 600519, CATL 300750,
Foxconn Industrial Internet 601138 und Zijin Mining 601899.

Prüfen Sie zuerst, ob dieser Tag ein Handelstag war, danach die Schlusskurse,
Tagesveränderung, Umsatz, Umschlagshäufigkeit, Unternehmensmeldungen und
öffentliche Nachrichten des Tages. Alle Zahlen mit Datum, Einheit und Originalquelle.
Bei Unternehmensereignissen bevorzugt Börse, cninfo oder die Unternehmensmeldung;
wenn das Originaldokument nicht geöffnet werden kann, die Informationslücke benennen
und Suchergebnis-Summaries nicht als gesicherte Fakten darstellen.

Bitte identifizieren Sie die wichtigsten Unternehmensereignisse, Branchenfaktoren und
Markteinflüsse auf die vier Aktien. Trennen Sie bestätigte Fakten, gängige
Markterklärungen und noch zu prüfende Vermutungen.
Wenn zwei Ereignisse nur am selben Tag stattfanden, darf das nicht als
Kausalität formuliert werden.

Geben Sie zum Schluss eine einseitige Schlusszusammenfassung, eine Übersichtstabelle
der vier Aktien, eine Ereignis-Chronologie und fünf Fragen für den nächsten
Handelstag aus. Keine Kauf- oder Verkaufssignale, und Tagesveränderungen
nicht als Langzeittrend darstellen.
```

Vier harte Anforderungen: zuerst den Handelstag bestätigen; Zahlen mit Datum und Einheit versehen; Unternehmensereignisse vorrangig aus der gesetzlichen Publizität; Fakten und Erklärungen in getrennten Spalten; am Ende weiter verfolgbare Fragen. Sie schränken die Freiheit der Antwort ein, geben der Prüfung aber ein klares Ziel.

### Attribution ist kein Geschichtenerzählen, sondern eine Beweisprüfung

Übersichtstabelle und Ereignis-Chronologie entstehen schnell, das Problem liegt beim „Warum steigt oder fällt": Einige Umsatz- und Geldflusszahlen stammen aus Finanzmedien oder Aggregatorseiten; ohne Prüfung der Originalseite lässt sich die statistische Methodik kaum bestätigen. Außerdem schreibt die Antwort Meldungen, Marktgerüchte und Kursbewegungen in benachbarten Sätzen – ohne das Wort „führen" kann der Leser dennoch eine bestätigte Kausalität hineinlesen. Lassen Sie nicht einfach weitere Begründungen nachschieben, sondern führen Sie **im selben Gespräch eine gezielte Attributionsprüfung** durch:

```text
Bitte prüfen Sie Ihre vorherige Antwort. Gehen Sie Satz für Satz durch und finden Sie
alle Aussagen mit Kurs-Attribution oder Kausalität. Ordnen Sie sie in drei Spalten:
«bestätigte Fakten», «Markterklärungen», «zu prüfende Hypothesen».
Geben Sie zu jedem Eintrag den Beleg-Link und die Veröffentlichungszeit an.
Sätze mit unzureichenden Belegen werden herabgestuft, ohne neue Begründungen zu ergänzen.
Erstellen Sie zum Schluss eine Zusammenfassung von höchstens fünfhundert Zeichen
für die Nachbesprechung.
```

In der zweiten Runde erkennt es von selbst Medien-Attributionen, Chart-Spekulationen und Quellen aus Sekundärplattformen und stuft schwach belegte Inhalte herab – die Zusammenfassung behält die Tageskurse und Unternehmensereignisse, erfindet aber nicht mehr für jede Bewegung einen Grund.

Quellen werden in drei Ebenen gegliedert, **die nachfolgende Ebene darf die vorherige nicht überschreiben**: Börse und Unternehmensmeldungen bestätigen Unternehmensfakten → stabile Kursquellen liefern Preise und Umsätze → Medien und Marktkommentare liefern nur zu prüfende Erklärungen. Widersprechen Medienaussagen einer Meldung, bleibt im Text zunächst die Meldung, und der Konflikt wandert in die Fragenliste des nächsten Handelstags. Verschiedene Quellen definieren Umsatz, Umschlag und Geldfluss nicht unbedingt gleich – nur weil alle Dezimalstellen haben, gehören sie noch nicht in dieselbe Tabelle. Auch der Zeitpunkt einer Meldung ist nach den Handelsphasen zu bewerten (Veröffentlichung vor Börsenbeginn, während oder nach Handelsschluss hat für die Tagesnachbesprechung unterschiedliche Bedeutung).

### Ein Arbeitsdokument, das am zweiten Tag weiterverwendet werden kann

In der letzten Runde werden keine neuen Erklärungen gesucht, nur Quellen, Stichtag und Kausalitätsstufen werden verschärft:

```text
Erstellen Sie auf Basis der abgeschlossenen Attributionsprüfung die finale
lieferbare Version dieses Kapitels. Der Stichtag bleibt der 28. August 2026,
die Wertpapiere bleiben die vier Aktien.

Prüfen Sie Punkt für Punkt Schlusskurse, Tagesveränderung, Umsatz, Umschlag,
Unternehmensmeldungen und Nachrichten des Tages auf Datum, Einheit,
Original-Link und tatsächliche Veröffentlichungszeit. Geldflussdaten ohne
stabile Originalquelle werden ersatzlos gelöscht, nicht durch Methodik-unklare
Aggregatwerte ersetzt. Alle Kursgründe bleiben in «bestätigte Fakten»,
«gängige Markterklärungen», «zu prüfende Hypothesen» unterteilt. Nur wenn ein
Beleg zeitlich vor der Kursveränderung liegt und einen Einfluss belegen kann,
darf er als Einflussfaktor formuliert werden.

Geben Sie «2026-08-28_Nachbesprechung_vier_Aktien.md» aus mit Übersichtstabelle,
Ereignis-Chronologie, Quellenprüftabelle, Schlusszusammenfassung (max. fünfhundert
Zeichen), fünf Prüffragen für den nächsten Handelstag und einer Punkt-für-Punkt-
Checkliste. Als neue Datei speichern und die Vorversion zum Vergleich behalten.
Listen Sie zum Schluss explizit auf, welche Zahlen und Attributionen gelöscht
oder herabgestuft wurden. Keine Kauf- oder Verkaufsempfehlungen.
```

Öffnet man die Datei am nächsten Tag, schaut man zuerst auf das Aufgabendatum und die Übersichtstabelle („Welcher Tag, welche Aktien sehe ich hier?"), dann prüft man entlang der Chronologie Zahlenmethodik und Ereignisreihenfolge – **eine Nachricht, die erst nach der Kursbewegung erschien, kann die Bewegung des Tages nicht rückwirkend erklären**.

## Teil 2: Aus einer Nachbesprechung wird eine laufende Beobachtung

Der Watchlist-Bereich muss Kontinuität abbilden: Fragen von gestern brauchen heute einen Status «bestätigt, widerlegt oder weiter abwarten». Als Werkzeug dient die Fähigkeit «**Analyse von Markttrends**»:

```text
Bitte erstellen Sie einen Watchlist-Tagesbericht für KI-Rechenleistung nach
Handelsschluss am 28. August 2026. Wertpapiere: Foxconn Industrial Internet
601138, Zhongji Innolight 300308, Eoptolink 300502 und Cambricon 688256.

Prüfen Sie Tageskurse, Umsatz, Geldfluss, Unternehmensmeldungen, öffentliche
Nachrichten und Sektorveränderungen. Trennen Sie Unternehmensfakten,
Branchenereignisse, Markterklärungen und unbestätigte Nachrichten;
alle Zahlen mit Datum, Einheit und Originalquelle.
Wenn zwei Ereignisse nur am selben Tag stattfanden, nicht als Kursgrund schreiben.

Geben Sie eine Übersichtstabelle der vier Aktien, die drei wichtigsten Ereignisse
des Tages, Erklärungen für ungewöhnliche Bewegungen, zu prüfende Signale für den
nächsten Handelstag und Datenlücken aus. Fehlende Daten ausdrücklich als fehlend
kennzeichnen, nichts selbst ergänzen.
Diesmal nur einen Tagesbericht erzeugen, keinen wiederkehrenden Auftrag anlegen,
keine Kauf- oder Positionsempfehlungen.
```

Ein Detail: Wenn Doubao Work Echtzeit-Aktiendaten ausgibt, ruft es `seed_finance_search` auf (Datenbank von Tonghuashun) – die Genauigkeit der Datenquelle ist damit gesichert.

### Quellenprüfung und Zeitprüfung getrennt durchführen

Vermischen Sie die beiden Probleme nicht in einem „bitte prüfen":

```text
Bitte prüfen Sie Kurse, Geldflüsse, Meldungen und Nachrichten im soeben erstellten
Tagesbericht. Listen Sie jeweils die tatsächliche Datenquelle und den Zeitstempel auf
und löschen Sie nicht nachvollziehbare Daten. Schreiben Sie alle Erklärungen
ungewöhnlicher Bewegungen in drei Spalten um: Belege, gängige Erklärungen,
zu prüfende Fragen. Geben Sie zum Schluss eine kompakte Version des Tagesberichts aus,
die direkt in die Watchlist-Notizen kopiert werden kann.

Prüfen Sie anschließend erneut den festgelegten Datenstichtag. Löschen Sie US-Aktien,
Nachrichten und Marktinformationen, die erst am 29. August 2026 (Peking-Zeit)
geschahen oder veröffentlicht wurden; behalten Sie nur Material, das bis
23:59 Uhr Peking-Zeit am 28. August 2026 verfügbar war. Listen Sie alle Schlussfolgerungen
auf, die wegen dieser Löschungen umgeschrieben werden müssen, und geben Sie dann den
überarbeiteten Watchlist-Tagesbericht aus.
```

Die erste Prüfrunde fand vier fehlerhafte Meldungsdaten, mehrere tote Medien-Links und Quellenkonflikte bei Umsatz und Cambricon-Geldfluss – korrigiert auf ein Gesamtmarktvolumen von 21.177 Mrd. CNY (gegenüber dem Vortag um 232 Mrd. verringert); beim Geldfluss von Cambricon blieb nur der Nettozufluss von 696 Mio. CNY nach Tonghuashun-Methodik, die widersprüchliche Zahlenreihe wurde gelöscht. Die zweite Runde entfernte die Kursdaten von Nvidia, Marvell und dem Philadelphia Semiconductor Index nach US-Schließung am 28. August sowie einen erst am 29. August veröffentlichten Tracking-Report; die daraus abgeleiteten Hinweise zu Überseemärkten, Signalen für den Folgetag und Unternehmenserklärungen wurden ebenfalls zurückgezogen.

**Der historische Wert eines Tagesberichts entsteht durch Versionen**: Erstfassung, Quellenprüfversion und Stichtags-Revision müssen erhalten bleiben. Erst beim Blick zurück am nächsten Tag wird sichtbar, welche Zahlen geändert und welche Schlussfolgerungen wegen zurückgezogener Materialien gestrichen wurden. Die Watchlist sollte außerdem den Fragenstatus pflegen: Bei einem neuen Tagesbericht zuerst die Fragenliste der Vorversion lesen und dann den Status aktualisieren – so entsteht eine kontinuierliche Research-Arbeit. Gibt es an einem Tag keine wesentlichen Veränderungen, wird ausdrücklich «keine neuen wesentlichen Fakten gefunden» vermerkt – es muss nicht täglich eine Markterklärung erfunden werden, nur damit Inhalt da ist.

### Das finale Dokument erstellen

```text
Erstellen Sie nach den beiden Prüfungen von Zeit und Quellen die finale lieferbare
Version des Watchlist-Tagesberichts für KI-Rechenleistung.

Der feste Stichtag ist 23:59 Uhr Peking-Zeit am 28. August 2026. Prüfen Sie erneut
die tatsächlichen Datenquellen und Zeitstempel von Kursen, Umsätzen, Geldflüssen,
Unternehmensmeldungen, Nachrichten und Branchenereignissen. Geldflussdaten mit
instabiler Quelle oder unklarer Methodik werden ersatzlos gelöscht; Informationen,
die erst am 29. August (Peking-Zeit) geschahen oder veröffentlicht wurden, dürfen
nur im Rücknahmeverzeichnis stehen. Wenn Medienberichte nicht auf Unternehmen,
Börse oder Originalmaterial zurückgeführt werden können, werden sie zu Hinweisen
und zählen nicht zu den bestätigten Fakten.

Geben Sie «KI-Rechenleistung_Watchlist-Tagesbericht_20260828.md» aus mit
Übersichtstabelle, den drei Ereignissen des Tages, den drei Spalten
Belege/gängige Erklärungen/zu prüfende Fragen, Prüfsignalen für den nächsten
Handelstag, Datenlücken, Rücknahmeverzeichnis, Quellenprüftabelle und
Punkt-für-Punkt-Checkliste. Als neue Datei speichern und die Vorversion samt
beider Prüfprotokolle behalten. Beantworten Sie zum Schluss ausdrücklich, ob in
den offiziellen Schlussfolgerungen noch Informationen nach dem Stichtag enthalten
sind. Keine Kauf- oder Positionsempfehlungen.
```

## Als wiederkehrende Aufgabe einrichten

Der gesamte Ablauf lässt sich als **wiederkehrende Aufgabe** speichern: mit dem eigenen Aktienuniversum als Stichprobe wird täglich zu fester Zeit automatisch ein Tagesbericht zugestellt. Bei der Übertragung auf das eigene Research sollten mindestens sechs Variablen ersetzt werden: [Wertpapiere oder Stichprobenumfang], [fester Stichtag], [Berichtszeitraum], [Felder und Formeln], [Quellenpriorität], [endgültiger Dateiname]. Zuerst Datum und Stichprobe einfrieren, dann suchen; der erste Prompt deckt die Fragen ab, der zweite prüft nur Quellen, Einheiten, Formeln und Stichtag; die Ergebnisse gehören in Dateien und Fragenlisten, nicht nur in eine Chat-Zusammenfassung; zum Schluss die fertige Datei einmal zurücklesen und prüfen, ob die Schlüsselzahlen nachvollziehbar sind.

> Dieses Kapitel liefert eine Seite Marktnotizen, eine Ereignis-Chronologie und eine Fragenliste für den nächsten Handelstag – **es ist ein Research-Arbeitsdokument, keine Garantie für Kauf, Position, Kursziel oder Ertrag**.

Nach Handelsschluss zuerst das Faktenprotokoll des Tages erstellen, dann nur die Punkte in die Watchlist aufnehmen, die das Urteil wirklich verändern; am nächsten Tag nur entlang der offenen Punkte weiterarbeiten. Ein Tagesbericht muss nicht täglich eine Meinung erfinden – er muss nur eines sagen: **was heute neu bekannt ist und was noch unklar ist.**

---

Weiter: [Nach dem Geschäftsbericht: erst Wachstum ansehen, dann Wachstumsqualität prüfen →](/de/doubaowork/case-earnings-quality)
