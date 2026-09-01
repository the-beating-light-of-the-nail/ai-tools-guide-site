# Kapitel 18: Investmentanalyse zu Ihrem Alltag machen

Investieren ist informationsdicht, stark strukturiert und in höchstem Maße urteilsabhängig: unlesbare Geschäftsberichte, unübersichtliche Branchen, endlose Bullen-und-Bären-Debatten. Genau das Ordnen fragmentierter Informationen, Zerlegen komplexer Unterlagen und Offenlegen des Denkprozesses ist die Stärke der KI. Dieses Kapitel zeigt, welche minderwertige Wiederholungsarbeit Ihnen die KI in einer vollständigen Aktienrecherche abnehmen kann – damit die Kraft für das Urteil selbst bleibt.

> **Risikohinweis: Alle Prompts, Skills und Fallbeispiele dieses Kapitels dienen der Forschungsunterstützung und stellen keine Anlageberatung dar. Aktien bergen Risiken – investieren Sie mit Umsicht.**

## Zuerst klar werden: Was die KI beim Investieren tun soll

Die meisten stellen sich unter „KI-Trading" die Vorhersage von Kursen vor. Die realen, wertvollen Einsatzformen konzentrieren sich aber auf vier Klassen:

- unlesbar viele Geschäftsberichte – bitte zusammenfassen;
- die Branche ist zu komplex – bitte die Logik ordnen;
- der Markt streitet zu heftig – bitte Bullen- und Bärenargumente in eine Tabelle;
- ich fürchte mich vor Selbstbestätigung – bitte Gegenargumente suchen.

Keine dieser vier Klassen ist „Kursprognose", sondern **Reduktion von Zeit mit minderwertigem Denken**. Der vernünftigste Platz der KI beim Investieren ist der eines unermüdlichen, emotionslosen, stets verfügbaren Research-Assistenten – sie festigt das Faktenfundament und überlässt Ihnen das Urteil.

Wie beim [Büro-Trio](/de/workbuddy/case-office/) zuerst mit fünf Fragen kalibrieren:

| Frage | Was zu klären ist | Beispiel |
| --- | --- | --- |
| Ziel | Welche Entscheidung diese Recherche stützen soll | Aufnahme in den Beobachtungspool oder heutige Positionierung |
| Objekt | Welches Unternehmen, welche Branche genau | Tianfu Communication (300394), optische Kommunikation / CPO |
| Material | Was Faktenquelle ist, was nur Referenz | Jahres- und Quartalsberichte, Research der Banken sind Faktenquelle; Forum-Meinungen nur Stimmungsreferenz |
| Tiefe | Nur Faktenordnung oder bis Bewertung und Bullen/Bären-Durchspiel | Erst Faktenfundament, dann Due-Diligence-DeepResearch |
| Abnahme | Woran Nutzbarkeit erkannt wird | Jedes Urteil bis zur Datenquelle rückverfolgbar; Fakten und Meinungen getrennt markiert |

## Skill-Kombinationen für Finanzszenarien

| Skill | Eignet sich für | Einsatz in diesem Kapitel |
| --- | --- | --- |
| `stock-advisor` | End-to-End-Analyse einer Aktie | Screenshot hochladen oder Code nennen; fährt automatisch technische und fundamentale Analyse, Kreuzprüfung, Beirat und Layout durch |
| `a-share-analyst` | A-Aktien-Tagesgeschäft und Aktienauswahl | Echtzeit-Kurse, technische Indikatoren, quantitative Auswahl, Tagesbericht |
| `financial-expert` | Finanzdatenabfrage und -filter | Aktienauswahl, Finanzkennzahlen, Makro-/Branchenzeitreihen, Research-Suche (benötigt Datenquellen-MCP) |
| `peers-advisory-group` | Mehrperspektivische Entscheidungsdebatte | Vier „Berater" kreuzen zu einem Thema die Argumente |

Kombinationsgedanke: **Für Alltag und Massenselektion `a-share-analyst` und `financial-expert`; für die vertiefte Einzelanalyse mit vollem Bericht `stock-advisor`; und wenn Sie aus der Einzelperspektive heraus- und sich zur Gegenseite zwingen wollen, `peers-advisory-group`.**

## Eine wiederverwendbare Kette von Research-Prompts

Geordnet von „einfach → komplex", deckt sie den ganzen Weg vom „Material suchen" bis zum „Urteil fällen". Bauen Sie mit den ersten dreien das Faktenfundament; tiefer graben erst bei Bedarf. Verwendung: Die Platzhalter in `【】` durch Ihr Objekt ersetzen, einfügen, starten.

### Prompt 1 | Ein „Faktenfundament" für das Unternehmen anlegen

Viele Fehlurteile beginnen damit, dass man das Geschäft falsch versteht – man meint, es verdiene mit A, während der Gewinn hauptsächlich aus B kommt. Dieser Schritt senkt die Zeitkosten des „Fakten-Klärens".

```markdown
Bitte ordne systematisch die Grundlagen des Unternehmens 【XXX】 und gib eine strukturierte Zusammenfassung aus:
1) Kerngeschäft und wichtigste Produktlinien
2) Zusammensetzung der Umsatz- und Gewinnquellen
3) Hauptkunden und Anwendungsszenarien
4) Position des Unternehmens in der Wertschöpfungskette
5) Die wichtigsten strategischen Veränderungen der letzten Jahre

## Anforderungen:
- Nur überprüfbare Informationen verwenden
- Jeder Abschnitt in 3–5 Kernpunkten
- Keine Anlageberatung, nur Faktenordnung
```

### Prompt 2 | Branchenblick: Ist das eine „gute Branche"?

Sie wählen oft nicht das Unternehmen, sondern die Branche. Die KI taugt zur „ersten Prinzipien-Ordnung" der Branche – Branchenwendepunkte oder Preisböden sollten Sie aber nicht von ihr erwarten.

```markdown
Bitte analysiere aus Branchensicht die Branche 【XXX Branche】, in der 【XXX Unternehmen】 tätig ist:
1) Zyklusstufe der Branche (Erholung/Expansion/Abschwung/Rezession)
2) Angebot-Nachfrage und zentrale Treiber (Kapazität, Auslastung, Lagerbestand, Auftrag/Lieferzyklus)
3) Preismechanismus und historische Schwankungen (Preisindex/Spannen/Kostenweitergabe, Capex-Trend und Neukapazität)
4) Konzentration und Wettbewerbsstruktur der Branche
5) Zentrale externe Variablen (Politik, Technologie, Makro)
Bitte weise deutlich aus: Was langfristige Strukturfaktoren und was kurzfristige Schwankungsfaktoren sind.
Ausgabe: Zyklusstufen-Urteil + Liste der Belegdiagramme + 3 Frühindikatoren und 3 Spätindikatoren.
```

### Prompt 3 | Geschäftszerlegung: Wie genau wird das Geld verdient?

Der Schlüsselschritt vom „Unternehmen sehen" zum „Geschäft sehen". Bei gemischten Unternehmen (Hauptgeschäft A, Gewinn aus B) hilft die KI besonders, Klarheit zu schaffen.

```markdown
Bitte zerlege aus Sicht des 【Value Investing / Fundamentalen Research】 das Geschäft von 【XXX Unternehmen】.
Kernfrage: Womit verdient dieses Unternehmen wirklich und langfristig sein Geld?

## Anforderungen
- Nur auf verifizierbaren Informationen (Geschäftsbericht, Börsenprospekt, regelmäßige Mitteilungen, seriöse Branchenberichte)
- Trenne deutlich 【Fakten】 und 【Urteile】; jedes Urteil mit Beleg oder Logikkette

## Pflichtstruktur
1. Ein-Satz-Fazit zur „Verdienweise" (höchstens 50 Wörter)
2. Vollständige Geschäftszerlegung (quantifiziert): Umsatzanteil, Rohertragsmarge und Wachstumstrend je Linie;
   welche Linien den Großteil des Gewinns tragen; ob „Hauptgeschäft ≠ Gewinnkern" vorliegt
3. Verdienmechanismus: Wie wird abgerechnet (einmalig/Abo/Wiederkauf); wohin die Kosten gehen; was die Marge bestimmt;
   ob Skaleneffekte bestehen
4. Kunden, Kanäle und Preismacht: Konzentration der Kernkunden; Preismacht vorhanden? Wechselkosten der Kunden
5. Nichtbetrieblicher Gewinn: Was aus Investitionserträgen/Subventionen/Assetverkäufen stammt und die Langzeitbewertung beeinflusst
6. Stabilität und Bruchstellen: Welche Annahmen brechen die Verdienlogik;
   mit 3–5 „Schlüssel-Überwachungsindikatoren", wie laufend zu prüfen ist, ob das Geschäft trägt
```

### Prompt 4–7 | Finanzqualität, Governance, Marktdissens, Bewertungs-Burggraben

Die vier mittleren Schritte lösen je ein konkretes Problem; die Prompt-Gerüste ähneln sich (klare Anforderungen + Kreuzprüfung + keine Schlussfolgerung):

```markdown
Bitte analysiere die Finanzqualität von 【XXX Unternehmen】 der letzten Jahre:
1) Passung von Umsatz, Gewinn und operativem Cashflow
2) Veränderungen von Forderungen, Lagerbestand, Vertragsaktiva
3) Einfluss nicht wiederkehrender Posten auf den Gewinn
4) Finanrisikopunkte, die besondere Aufmerksamkeit verdienen
## Forschungsprinzip: Keine Kursprognose, nur Beurteilung der Finanz-„Qualität";
Zwangs-Kreuzprüfung „Gewinn vs. Cashflow"; zu jeder Anomalie Erklärungshypothese und Prüfweg.
```

```markdown
Bitte ordne die Haupt-Dissenspunkte des Marktes zu 【XXX Unternehmen】:
1) Kernlogik der Bullen  2) Kernlogik der Bären  3) Die jeweils wichtigsten Belege
4) Welche Dissense künftig durch Daten überprüfbar sind  5) Was die entscheidenden Prüfpunkte sind
## Analyseanforderungen: Keine Parteinahme; keine Anlageberatung; jedes Urteil muss künftig durch Daten oder Ereignisse überprüfbar sein.
```

```markdown
Analysiere aus Value-Investing-Sicht den Burggraben von 【XXX Unternehmen】; zwingend mit Verweis auf Unternehmensangaben/seriöse Quellen:
Preismacht, Wechselkosten, Netzwerk-/Skaleneffekte, immaterielle Werte und Wettbewerbsreaktion – je Dimension Belege.
Ausgabe: Burggraben-Stärkebewertung (0–5) + Belegtabelle + die am ehesten erodierbaren Punkte samt Überwachungsindikatoren.
```

### Prompt 8 | Das Vollpaket: ein Due-Diligence-DeepResearch

Die Logik der ersten sieben Schritte wird in denselben Rahmen einer „Anleger-Due-Diligence" gepresst: Trennung von Fakt und Urteil erzwungen, Kreuzprüfung erzwungen, Durchspiel der Bärenlogik und Schwarzer Schwäne erzwungen – gegen den **Bestätigungsfehler**, dem Menschen am leichtesten erliegen. Funktioniert in den DeepResearch-Modi aller KI-Anbieter. Gerüst:

```markdown
Ich brauche eine Anleger-Due-Diligence für 【XXX】, Stil 【Value Investing】, Horizont 【mittellang 1–3 Jahre】.

## Forschungsprinzipien
1. Finanzdaten als 3–5-Jahres-Trend (CAGR); Bewertungsperzentil über 5–10 Jahre zurück
2. Trennung von 【Fakten】 und 【Urteilen】; Urteile nur auf verifizierbaren Daten (Geschäftsbericht, Prospekt, Anfragebriefe)
3. Doppelte Prüfung: Kreuzprüfung „Gewinn vs. Cashflow" + Vergleichsprüfung „Unternehmen vs. Peers"
4. Kontraintuitives Denken: Bärenlogik und Schwarzschwan-Risikodurchspiel zwingend enthalten

## Durchspielphasen
Phase 1 Geschäftsmodell und Burggraben (Hauptgeschäft als Imageträger, Nebenbereich als Gewinnbringer?)
Phase 2 Branchenzyklus und Angebots-Nachfrage (Bestände, Auslastung, Capex als Beleg)
Phase 3 Finanzgesundheit (ROE-Du-Pont-Zerlegung, Cash-Gehalt, bereinigter Gewinn)
Phase 4 Governance und Kapitalallokation (Verpfändungen, Verkäufe, Allokationsfähigkeit)
Phase 5 Bewertungslogik und Antifragilität (historische Perzentile, inverses DCF, Bärenblick)

## Ausgabe
Ampel-Rating (Kaufen/Abwarten/Verkaufen) + Kerndatentabelle + Fünf-Phasen-Haupttext +
Bewertungs-Dashboard + künftige Überwachungsliste (Ereignis A stärkt Logik / Datenindikator B verschlechtert sich → Widerlegung, Ausstieg)
```

## Vom Prompt zum Skill: Wie `stock-advisor` gewachsen ist

Die acht Prompts einzeln sind alle nützlich – aber für eine vollständige Recherche muss man sie von Hand verketten, bei neuem Objekt von vorn; Daten mit dem Auge; die Entscheidung droht Selbstbestätigung; das Ergebnis wird manuell zusammengebaut. `stock-advisor` macht aus dieser Kette **„einen Haufen Prompts" → „eine Pipeline, die mit einem Klick durchläuft"**:

![](/workbuddy/case-investment/assets/001_stock-advisor-overview_Lxy0b4axOo.png)

| Modul | Was es tut | Kern-Design |
| --- | --- | --- |
| ① Technische Analyse | Aus dem Candlestick-Chart Muster, Durchschnitte, MACD erkennen, mit Kursdaten kreuzprüfen | Bilderkennung + Daten-Doppelspur; bei Konflikt zählen die Daten, Abweichung wird markiert |
| ② Fundamentalanalyse | Kennzahlen des Berichts erkennen, Bewertung und Branchenvergleich ergänzen | Technik/Fundament/Fluss werden je bewertet und dann zum Rating verrechnet |
| ③ Multi-Dimensionale Kreuzprüfung | Online-Recherche, Branchen-News, Politik | Widersprüchliche Signale müssen als Dissens markiert werden |
| ④ Beiratsdiskussion | Ruft `peers-advisory-group` auf; vier Berater kreuzen die Argumente | Wiederverwendung eines fertigen Skills; „Gegenbeweis suchen" wird institutionalisiert |
| ⑤ Layout-Ausgabe | Strukturierter Bericht, als Magazin-HTML / PDF, in Feishu hochladbar | Wiederverwendung der Layout- und Dokument-Skills |

Hier steckt die lehrreichste Lektion fürs Skill-Schaffen: **Wiederverwenden statt neu schreiben.** Die Technische-Indikator-Skripte stammen aus `a-share-analyst`, die Entscheidungsdebatte aus `peers-advisory-group`, das Layout aus `magazine-layout` – selbst neu geschrieben wurde nur weniges. Beim Bau eines komplexen Skills: vorhandene Fähigkeiten als Bausteine nehmen, fehlende ergänzen und mit einer Hauptlinie orchestrieren.

Zwei kleine „Produkt"-Details: Beim Erstgebrauch wird ein Profil angelegt (Risikopräferenz, Anlagehorizont, Branchenfokus, Positions-Obergrenze – im Gedächtnis gespeichert); zwei Eingänge, eine Pipeline (Screenshot geht über Bilderkennung + Datenprüfung, reine Code-Eingabe datengetrieben).

In einem Satz: **„eine ernsthafte Aktienrecherche" wird von einem halben Tag Handarbeit auf ein einziges Gespräch komprimiert.** Der Mensch wechselt von „Transport und Zusammenkleben" zu „Entscheiden und Infragestellen".

## Praxis: Mit `stock-advisor` Tianfu Communication (300394) durchlaufen

Das Objekt: Tianfu Communication (300394), optische Kommunikation / CPO. Der Prozess steigert sich in drei Schritten: erst der Chart, dann der Bericht, zuletzt ein Beirat.

### Schritt 1: Candlestick-Chart hochladen, ein technisches Schnelllesen anfordern

```text
Ich habe einen Tages-Candlestick-Chart und ein technisches Indikatorbild (MACD) einer A-Aktie hochgeladen.
Bitte als professioneller Technischer Analyst:
1. Aktieninformationen erkennen: Welche Aktie ist das? Aktueller Kurs ungefähr?
2. Candlestick-Musteranalyse: Welches Muster zeigt sich zuletzt? Konkrete Entwicklung der letzten 5 Tage?
3. Durchschnittsanalyse: Anordnung von MA5/MA10/MA20; kürzlich Golden oder Death Cross?
4. MACD-Analyse: Lage von DIF und DEA, Balkentrend, Divergenz vorhanden?
Bitte gib das technische Schnelllesen als Tabelle + Text aus.
```

![](/workbuddy/case-investment/assets/003_image_CrgibiDW3o.png)

WorkBuddy erkennt im Bild zuerst Tianfu Communication mit aktuellem Kurs von rund 368,70 CNY und liefert dann das strukturierte Schnelllesen: MA5 > MA10 > MA20 – die Standard-Multi-Anordnung läuft weiter im Aufwärtstrend; aber eine lange obere Spitze am Tag (Hoch 376,10, Rückkehr auf 368,70), MACD-Balken werden kürzer, große Abweichung; Stütze bei MA5 (347) / MA10 (319), Widerstand beim Tageshoch 376. Es rät nicht auf Steigen oder Fallen, sondern strukturiert die „aus dem Chart lesbaren Fakten".

![](/workbuddy/case-investment/assets/004_image_WX6WbFC9Oo.png)

### Schritt 2: Bericht-Screenshots ergänzen, eine Vollanalyse durchführen

```text
Ich habe zusätzlich die Q3-Daten 2025 und die Jahres-Prognosedaten dieser Aktie hochgeladen. Bitte:
1. Zuerst alle Finanzkennzahlen in den Screenshots erkennen
2. Mit der technischen Analyse der ersten Runde eine vollständige A-Aktien-Analyse machen:
   technisches Gesamturteil, fundamentales Gesamturteil (Umsatzwachstum, Ertragskraft, Bewertungslevel),
   Beobachtung des Geldflusses, Gesamtrating (starke Empfehlung/Empfehlung/neutral/vorsichtig/meiden)
3. Handlungsempfehlungen für kurzfristig (1–2 Wochen) und mittelfristig (1–3 Monate)
4. Schlüssel-Stützen und -Widerstände deutlich markieren; Ausgabe im Format eines professionellen Research.
```

![](/workbuddy/case-investment/assets/007_image_CScebfl1io.png)

Zuerst werden die Kennzahlen der Screenshots einzeln erkannt (Umsatz 3,918 Mrd., +63,63 % yoy, ROE 31,30 %, PE 146,70 …), dann die Gesamtrating-Tabelle synthetisiert:

| Dimension | Bewertung | Gewicht | gewichteter Punkt |
| --- | --- | --- | --- |
| Technik | 4,0 / 5,0 | 25 % | 1,00 |
| Fundament | 4,5 / 5,0 | 30 % | 1,35 |
| Bewertungsniveau | 2,0 / 5,0 | 25 % | 0,50 |
| Geldfluss | 4,0 / 5,0 | 20 % | 0,80 |
| **Gesamtwertung** | — | — | **3,65 / 5,0** |

Das Endrating „Empfehlung", die Kernschlüsse sind zurückhaltend: **Mittelfristig guter Trend (hohe CPO-Konjunktur + starkes Wachstum), aber kurzfristig überteuerte Bewertung und zu stark gestiegen – nicht hinterherkaufen; Einstieg bei Rücksetzern abwarten.** Zu teuer wird im Punktesaldo abgezogen – nicht blindfonds bullish nur wegen Wachstum.

![](/workbuddy/case-investment/assets/008_image_I6uBbecypo.png)

### Schritt 3: Unentschlossen? Einen Beirat einberufen

```text
Ich bin bei dieser Aktie immer noch unentschlossen. Bitte berufe einen Beirat ein; vier Berater diskutieren,
ob sie lohnt:
- Buffett: Value-Investing-Sicht (innerer Wert, Burggraben, Sicherheitsmarge)
- Musk: Technologietrend und disruptive Innovation
- Gates: Geschäftsmodell und Branchenstruktur
- Jobs: Produktkraft und Nutzererlebnis
Diskussionsregeln: Jeder zuerst mit unabhängiger Meinung; dann Kreuzbefragung; am Ende je ein Satz mit
Endempfehlung Kaufen/Halten/Verkaufen; du als Moderator bündelst zu einem Ausführungsplan.
Bitte auf den Daten der beiden ersten Runden aufbauen – die Berater sollen „mit Daten reden".
```

![](/workbuddy/case-investment/assets/011_image_LuArbEta0o.png)

Im Beirat aktualisiert das System zuerst online die Daten (Umsatz 2025 Gesamtjahr, Q1-2026-Rückgang sequentially, Quervergleich mit Zhongji Innolight/Eoptolink) – das Kreuzprüfungsmodul hob die Diskussion von den Screenshot-Daten auf die aktuellen Fakten des Netzes. Die vier Berater spalteten sich 2:2: Buffett meidet („KGV 142, Sicherheitsmarge null"), Gates wartet („bis KGV unter 60 oder auf ein günstigeres Objekt wechseln"), Musk geht All-in („CPO ist der iPhone-Moment der optischen Kommunikation"), Jobs hält bedingt („sofern die CPO-FAU-Zusagen in H2/2026 eintreten").

Der Moderator bündelt zuletzt einen **Ausführungsplan nach Anlegertyp** und hängt die Entscheidung an künftige Prüfpunkte:

| Anlegertyp | Empfehlung | Ausführung |
| --- | --- | --- |
| Value-Anleger | Konsequent meiden | Warten bis KGV < 40 |
| Wachstumsanleger | Halten möglich, mit Stopp | Unter MA5 (347) reduzieren, unter MA10 (319) komplett verkaufen |
| Trendanleger | Vorsichtig teilnehmen | Einstieg erst bei Rückkehr auf MA10 / MA20 |
| Aggressiver Anleger | Kleine Testposition | Höchstens 30 %; unter 300 CNY komplett verkaufen |

![](/workbuddy/case-investment/assets/015_image_Y0yvbzLRto.png)

![](/workbuddy/case-investment/assets/016_image_DOOhbmIIeo.png)

Nach dem Gespräch lässt sich die ganze Analyse als Magazin-Report aufbereiten (lokal als PDF oder in Feishu hochgeladen). Rückblick: `stock-advisor` macht aus acht losen Prompts eine vollständige Recherche in drei Gesprächsrunden – **Chart sehen → Bericht sehen → Beirat → Report**; und zu keinem Zeitpunkt fällte es für Sie jene wichtigste Entscheidung „kaufen oder verkaufen".

## Häufige Fehler und Einsatzgrenzen

| Häufiger Fehler | Warum er falsch ist | Richtig |
| --- | --- | --- |
| Der KI „Einstiegs-/Ausstiegspunkte" abverlangen | Sie hat keine vollständige Echtzeit-Information und trägt keine Verantwortung für Ihr Geld | Nur für Faktenordnung und Bullen/Bären-Durchspiel; Kauf und Verkauf selbst entscheiden |
| Die erkannten Zahlen kritiklos glauben | Bilderkennung verliest sich; Berichtskennzahlen ändern sich | Kernzahlen kreuzprüfen |
| Branchenwendepunkt oder Preisboden von ihr erwarten | Braucht Vorausinformation und Erfahrung, die die KI nicht liefert | Sie „die zu beobachtenden Frühindikatoren" ordnen lassen; den Wendepunkt selbst beobachten |
| Nur die Bullenlogik lesen, immer euphorischer | Bestätigungsfehler – die KI verstärkt entlang Ihres Tons | Mit Dissens-Prompts und Beirat Gegenbeweise erzwingen |
| Den KI-Report direkt als Anlagegrundlage nehmen | Der Report ist Forschungshilfe, keine Anlageberatung | Schlüsse nur als Referenz; Entscheidung und Risiko liegen bei Ihnen |
