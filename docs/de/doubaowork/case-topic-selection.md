# Was heute schreiben: von Trends über Wettbewerber bis zur Themenwoche

> Szenario: Auf dem Schreibtisch liegen zwei-, dreißig Themen, und Sie wissen nicht, mit welchem beginnen – Angst, der Trend ist alt, Angst, die Wettbewerber-Analyse wird zum billigen Nachbau, Angst, die Themen sind da, aber die Produktionskapazität nicht.

Dieses Kapitel lässt Doubao Work nicht einfach für Sie «nach Gefühl ein Thema picken», sondern zerlegt den echten Ablauf in drei Schritte. Heraus kommt nicht nur eine Themenliste, sondern eine **wiederholt einsetzbare Inhalt-Produktionslinie**:

1. Zuerst ein **Trend-Frühbericht mit Quellen und Zeitangaben**;
2. Dann einen Wettbewerber-Beitrag auswählen und **die Methode zerlegen, ohne den Inhalt zu kopieren**;
3. Zum Schluss aus Kontoprofil und realer Kapazität einen **in einer Woche umsetzbaren Aktionskalender** machen.

## Die genutzte Skill-Kombination

| Aufgabe | Kombination | Warum diese Wahl |
| --- | --- | --- |
| Trend-Frühbericht des Tages | VOC- und Stimmungsanalyse + öffentliche Websuche | kann Inhalte filtern, Originalbeiträge zurückverfolgen und alte Meldungen von neuer Berichterstattung trennen |
| Wettbewerber-Analyse | Official-Account-Grafik und Betriebsstrategie + Linklesen + Lark Doc | liest, prüft Fakten, zerlegt die Struktur und liefert in Feishu – in einem Durchgang |
| Themenplanung der Woche | Virale Titel und Themenkalender + Lark Doc | liefert nicht nur Titel, sondern plant die Kapazität nach Lesernutzen, Überprüfbarkeit und Umsetzungsaufwand |

## Aufgabe 1: Trend-Frühbericht – nicht nur «was gibt es Neues» fragen

Unter «Skills · Konnektoren · Partner» nach «VOC- und Stimmungsanalyse» suchen und hinzufügen (Achtung: dieser Skill funktioniert nur im Web und am Desktop, auf dem Handy löst er nicht aus). Fragt man nur «was sind die Trends von heute», mischt die KI leicht heute neu gepostete Altmeldungen hinein – deshalb **Zeitfenster, Quellenreihenfolge, Auswahlkriterien und Prüfregeln** mitliefern:

```text
Ich bin Redakteur eines Tech-/KI-Kontos im WeChat Official Account und brauche heute
einen «KI-Branchen-Frühbericht» für die Redaktion.

Nutze bitte den Skill «VOC- und Stimmungsanalyse» sowie die öffentliche Websuche:
Finde und prüfe KI-Brancheninformationen, die von 【Startdatum 00:00】 bis
【aktuelle Uhrzeit heute】 veröffentlicht wurden. Schwerpunkte:
- Updates zu großen Modellen und Agent-Produkten;
- KI für Büro, Content-Erstellung und Entwicklerwerkzeuge;
- neue Funktionen oder Veränderungen, die Office-Beschäftigte real betreffen.

Arbeite bitte in diesen Schritten ab:
1. Nenne zuerst Stichtag und Abdeckung dieser Recherche.
2. Trenne «Zeitpunkt des Ereignisses» und «Zeitpunkt der Veröffentlichung» –
   Altmeldungen dürfen nicht als heutige Nachrichten erscheinen.
3. Fasse Mehrfachberichte zum selben Ereignis zusammen; bevorzugt offizielle
   Ankündigungen, offizielle Blogs oder Produkt-Update-Seiten.
4. Wähle die 5 für die Redaktion wichtigsten Informationen; zu jeder: Ereignis,
   warum es wichtig ist, wie man daraus einen Beitrag machen kann, Original-Link,
   Zeitbeleg, offene Prüfpunkte.
5. Empfiehl zum Schluss nur 3 heute wirklich angehende Themen und begründe die
   Empfehlung nach «Kontopassung, Aktualität, Lesernutzen, Überprüfbarkeit».
6. Markiere nicht bestätigte Zahlen, Preise, Versionsnummern und Produktfunktionen
   separat; ergänze nichts und rate nicht.

Endlieferung: ein klar strukturierter Frühbericht in chinesischem Markdown mit den
drei Abschnitten «Informationstabelle heute», «Prioritäre Themen heute» und
«Manuell zu prüfen».

Ohne meine Bestätigung: nichts veröffentlichen, keine Nachrichten senden, keine
Online-Dokumente oder Daten ändern.
```

Im Test bestätigte es zuerst Peking-Zeit und Recherche-Fenster, lud dann die Stimmungsanalyse, suchte und prüfte und lieferte rund 20 KB Frühbericht: 5 Schwerpunktinformationen → 3 prioritäre Themen → 10 vor dem Schreiben zwingend zu prüfende Punkte; zusätzlich fand es 4 Altmeldungen, «deren Artikel zwar kürzlich erschienen, deren Ereignis aber außerhalb des Zeitfensters lag». **Der klassische Fehltreffer** ist, eine von anderen Medien heute neu gepostete Altmeldung als «Produkt heute veröffentlicht» zu schreiben – wer im Prompt «Ereigniszeitpunkt» und «Veröffentlichungszeitpunkt» trennt, filtert das heraus.

> Den Frühbericht als Themen-Radar nutzen, nicht direkt als veröffentlichbaren Text: Alle «zu bestätigen»-Einträge zu Preisen, Benchmarks oder Nutzerzahlen sind vor dem Schreiben noch einmal an den offiziellen Quellen zu prüfen.

## Aufgabe 2: Viralen Wettbewerber-Beitrag zerlegen, nicht kopieren

Im Frühbericht taucht ein viraler 36-Kr-Artikel auf. Nicht Doubao Work «schreib mir so einen nach» sagen, sondern ihn als **Wettbewerber-Stichprobe** zerlegen. Mit dem Skill «Official-Account-Grafik und Betriebsstrategie» (enthält Themenfindung, Faktenprüfung, Artikelbewertung und Betriebsrückblick; die Ergebnisse werden zuerst als Feishu-Dokument geliefert):

```text
Ich bin Redakteur eines Tech-/KI-Kontos im WeChat Official Account. Nutze bitte den
Skill «Official-Account-Grafik und Betriebsstrategie» und zerlege den folgenden
öffentlichen Artikel – ohne seine Ausdrucksweise zu kopieren:

Artikel-Link: https://36kr.com/p/xxxxx

Arbeite bitte in dieser Reihenfolge ab:
1. Lies den Artikel und liste Titel, Autor / Medium, Veröffentlichungszeit und
   Original-Link, die tatsächlich gelesen wurden. Nicht lesbare Felder als
   «zu bestätigen» markieren, nicht raten.
2. Trenne die «prüfbaren Fakten» des Artikels von «Urteilen / Rhetorik des Autors».
   Bei Parametern, Preisen, Benchmarks, Nutzerzahlen und Leistungsvergleichen sage,
   ob die Belege im Original ausreichen.
3. Zerlege aus 6 Dimensionen, warum der Artikel Klicks und Vollliest gewinnt:
   Einstiegshaken, Titelversprechen, Erzählstruktur, Informationsdichte,
   Beweisführung, Schlussaktion.
4. Gib eine Zerlegungstabelle aus; jede Schlussfolgerung mit Stellenbeleg oder
   inhaltlicher Zusammenfassung. Keine längeren Originalzitate in Folge, keine
   markanten Satzformen kopieren.
5. Fasse zusammen: 5 erlernbare Methoden, 3 nicht übertragbare Elemente,
   5 vor dem Schreiben zwingend zu prüfende Fakten.
6. Entwirf auf Basis desselben Ereignisses 3 ganz neue Themenwinkel für mein Konto,
   gerichtet an Office-Beschäftigte und Entwickler, mit Betonung auf Praxistest,
   Tutorial oder Entscheidungswert – keine synonyme Umformulierung.
7. Mache eine Selbstprüfung: Wurden Autorenmeinungen als Fakten geschrieben?
   Wurden Veröffentlichungs- und Ereigniszeitpunkt verwechselt? Gibt es
   nicht nachvollziehbare Zahlen?

Schreibe das Endergebnis in ein neues Feishu-Dokument und gib den Link zurück.
Ohne meine Bestätigung: nichts veröffentlichen, keine Nachrichten senden, keine
anderen Online-Dokumente oder Daten ändern.
```

Am wichtigsten sind die drei Grenzsätze: **Fakten und Meinungen trennen, jede Schlussfolgerung mit Stellenbeleg, keine längeren Originalzitate** – fehlen sie, wird aus der Zerlegung leicht ein etwas besseres Content-Recycling. Testausbeute: 13 prüfbare Fakten je mit Beurteilung der Beleglage; 8 Autorenurteile oder rhetorische Stellen separat markiert; Zerlegung nach 6 Verbreitungsdimensionen; 5 erlernbare Methoden + 3 nicht übertragbare Elemente + 5 zwingend zu prüfende Fakten; 3 neue Themen, die eigenen originalen Praxistest brauchen. Beispiel: «Preis nur 1/40» wirkt stark, aber unklar ist, wie Ein- und Ausgabe gewichtet wurden – Doubao Work hat diese Zahl nicht als Eisernes genommen, sondern in der Prüfliste belassen.

Dieser Schritt beantwortet drei Fragen: **Warum klickt man ihn auf? Welche Schreibweise ist erlernbar? Welche Fakten neu geprüft werden müssen?**

## Aufgabe 3: Die Themen zu dem machen, was diese Woche wirklich geht

Mit Trends und Zerlegung bleibt ein praktisches Problem: die Zeit reicht nicht. Mit dem Skill «Virale Titel und Themenkalender» – neben den Kandidaten **unbedingt die echte Kapazität angeben**:

```text
Ich betreue ein Tech-/KI-Konto im WeChat Official Account und möchte die Themen-
kandidaten dieser Woche in einen wirklich umsetzbaren Content-Kalender verwandeln.

Kontoprofil:
- Zielgruppe: Office-Beschäftigte und Entwickler, die mit KI effizienter arbeiten
  wollen;
- Schwerpunkte: KI-Werkzeug-Praxistests, Open-Source-Projekte, sehr ausführliche
  Tutorials und echte Arbeitsfälle;
- Umgangssprachlicher Ton, Anspruch «nach dem Lesen direkt nachmachbar»; keine
  vagen Trendartikel.

Verfügbare Kapazität diese Woche:
- 5 Grafikbeiträge für das Official Account sind machbar;
- davon 2 mit vollständigem Praxistest und 6–10 Schritt-Screenshots;
- die anderen 3 müssen je in einem halben Tag fertig sein.

Themenkandidaten:
1.【Thema eins】 2.【Thema zwei】 …… (Ihre Kandidaten auflisten)

Nutze bitte den Skill «Virale Titel und Themenkalender» und arbeite so ab:
1. Prüfe zuerst, ob die Eingaben reichen; Fehlendes als offene Punkte listen,
   keine Daten erfinden.
2. Bewerte jedes Thema mit 1–5 Punkten: Kontopassung, Lesernutzen, Aktualität,
   Belegbarkeit, Umsetzungsaufwand.
3. Wähle unter der Kapazitätsgrenze 5 Themen und verteile sie auf Montag bis
   Freitag; markiere «tiefer Praxistest» oder «halber Tag Schnellschreiben».
4. Gib zu jedem Thema: Empfehlungsgrund, Lesernutzen, empfohlene Inhaltsform,
   benötigtes Material, einen Haupttitel und einen A/B-Alternativtitel.
5. Sage zu den nicht gewählten Themen klar, «warum diese Woche nicht» – nicht mit
   «nicht heiß genug» abtun.
6. Selbstprüfung: Übersteigt der Aufwand die Kapazität? Konkurrieren mehr als zwei
   Beiträge um dasselbe Leserbedürfnis? Übertreiben die Titel?

Schreibe das Endergebnis in ein neues Feishu-Dokument und gib den Link zurück.
Ohne meine Bestätigung: nichts veröffentlichen, keine Nachrichten senden, keine
anderen Online-Dokumente oder Daten ändern.
```

Im Test prüfte es zuerst Datum, Kandidaten und Kapazität – weil der Testtag ein Donnerstag war, deutete es «diese Woche» als nächste vollständige Arbeitswoche und legte diese Annahme als offenen Punkt zur Bestätigung vor. Der finale Plan: 2 tiefe Praxistests + 3 Schnellschreiben; auch die Begründungen der zwei Abgewählten waren konkret: eines braucht 1–2 Wochen tiefes Testen – die aktuelle Kapazität reicht nicht; das andere ist eher Betriebsmethodik und passt zur Kernleserschaft des Kontos zu wenig. Es hinterließ zusätzlich 4 offene Punkte (Start der Planungswoche, Veröffentlichungszeiten, ob die echten Erfahrungen im Titel tragfähig sind, ob die Zahl der versprochenen Werkzeuge getestet wurde).

## Merken Sie sich dieses Prompt-Gerüst

Auch für Rechtsabteilung, HR, Vertrieb oder Produktmanagement lässt sich dieses Vier-Ebenen-Schema direkt übertragen:

1. **Rolle und Publikum zuerst**: Wer Sie sind und wer den Inhalt liest;
2. **Dann die Randbedingungen**: Zeitfenster, Kapazität, Datenrechte, was verboten ist;
3. **Beurteilungsmaßstäbe festlegen**: Passung, Nutzen, Aktualität, Belege, Aufwand;
4. **Prüfliste verlangen**: Was Fakt sind, was Annahmen und welche Zahlen noch nicht geschrieben werden dürfen.

Das wirklich Nützliche an KI: dreißig Kandidaten auf drei reduzieren und Ihnen sagen, **warum genau diese drei, womit heute begonnen wird und was vor dem Schreiben noch zu prüfen ist** – genau das ist das umsetzbare «Was heute schreiben» für ein Inhalt-Team.

---

Weiter: [Vom Trend zum fertigen Official-Account-Artikel →](/de/doubaowork/case-wechat-article)
